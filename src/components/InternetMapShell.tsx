"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { MetroMap } from "@/components/MetroMap";
import { WalkMap } from "@/components/WalkMap";
import { walkTrailDefs } from "@/data/walkLayout";
import type { MetroLine } from "@/data/internet";

export type MapMode = "metro" | "walk";

const STORAGE_KEY = "internet-map-mode";

function subscribeStorage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function readMode(): MapMode {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "metro" || v === "walk") return v;
  } catch {
    /* ignore */
  }
  return "walk";
}

function getServerMode(): MapMode {
  return "walk";
}

type Props = {
  lines: MetroLine[];
  personCount: number;
  lineCount: number;
};

export function InternetMapShell({ lines, personCount, lineCount }: Props) {
  const stored = useSyncExternalStore(
    subscribeStorage,
    readMode,
    getServerMode,
  );
  const [mode, setMode] = useState<MapMode>(stored);

  useEffect(() => {
    setMode(stored);
  }, [stored]);

  function choose(next: MapMode) {
    setMode(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }

  const unit = mode === "walk" ? "trails" : "lines";

  return (
    <>
      <div className="site-shell">
        <div className="map-mode-toggle" role="group" aria-label="map mode">
          <button
            type="button"
            className={mode === "metro" ? "map-mode-btn is-active" : "map-mode-btn"}
            aria-pressed={mode === "metro"}
            onClick={() => choose("metro")}
          >
            take the metro
          </button>
          <button
            type="button"
            className={mode === "walk" ? "map-mode-btn is-active" : "map-mode-btn"}
            aria-pressed={mode === "walk"}
            onClick={() => choose("walk")}
          >
            go for a walk
          </button>
        </div>
        <p className="mt-3 text-sm text-faint">
          {personCount} stations, {lineCount} {unit}
        </p>
        <ul className="metro-legend list-none p-0" aria-label="topic legend">
          {mode === "walk"
            ? walkTrailDefs.map((item) => (
                <li key={item.id} className="metro-legend-item">
                  <span
                    className="metro-chip"
                    style={{ background: item.color }}
                    aria-hidden="true"
                  />
                  <span>{item.name}</span>
                </li>
              ))
            : lines.map((item) => (
                <li key={item.id} className="metro-legend-item">
                  <span
                    className="metro-chip"
                    style={{ background: item.color }}
                    aria-hidden="true"
                  />
                  <span>{item.name}</span>
                </li>
              ))}
        </ul>
      </div>

      <div className="metro-shell mt-8">
        {mode === "walk" ? <WalkMap lines={lines} /> : <MetroMap lines={lines} />}
      </div>
    </>
  );
}
