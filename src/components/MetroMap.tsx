"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { MetroLine, Person } from "@/data/internet";

type StationRef = {
  line: MetroLine;
  person: Person;
};

type Props = {
  lines: MetroLine[];
};

function subscribeTip(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function getTipSnapshot() {
  return new URLSearchParams(window.location.search).get("tip");
}

function getTipServerSnapshot() {
  return null;
}

export function MetroMap({ lines }: Props) {
  const tipId = useId();
  const urlTip = useSyncExternalStore(
    subscribeTip,
    getTipSnapshot,
    getTipServerSnapshot,
  );
  const [hoverId, setHoverId] = useState<string | null>(null);
  const openId = hoverId ?? urlTip;
  const [anchor, setAnchor] = useState<{ x: number; y: number } | null>(null);
  const [wrapWidth, setWrapWidth] = useState(640);
  const wrapRef = useRef<HTMLDivElement>(null);

  const stations = useMemo(() => {
    const map = new Map<string, StationRef>();
    for (const line of lines) {
      for (const person of line.people) {
        map.set(person.id, { line, person });
      }
    }
    return map;
  }, [lines]);

  const openStation = stations.get(openId ?? "") ?? null;

  const placeTooltip = useCallback((el: Element | null) => {
    const wrap = wrapRef.current;
    if (!wrap || !el) {
      setAnchor(null);
      return;
    }
    const wr = wrap.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    setWrapWidth(wr.width);
    setAnchor({
      x: er.left - wr.left + er.width / 2,
      y: er.top - wr.top,
    });
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setHoverId(null);
        setAnchor(null);
      }
    }
    function onResize() {
      if (!openId) return;
      const el = wrapRef.current?.querySelector(`[data-station="${openId}"]`);
      placeTooltip(el ?? null);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [openId, placeTooltip]);

  const labelW = 168;
  const padR = 28;
  const trackStart = labelW + 16;
  const svgW = 980;
  const rowH = 64;
  const svgH = 28 + lines.length * rowH;
  const trackEnd = svgW - padR;
  const usable = trackEnd - trackStart;

  function stationX(count: number, i: number) {
    if (count === 1) return trackStart + usable / 2;
    return trackStart + (usable * i) / (count - 1);
  }

  function openFromEl(id: string, el: Element) {
    setHoverId(id);
    placeTooltip(el);
  }

  const tipLeft = anchor
    ? Math.min(Math.max(anchor.x, 120), wrapWidth - 120)
    : 0;

  return (
    <div className="metro-wrap" ref={wrapRef}>
      <div className="metro-desktop" aria-label="transit map of people">
        <svg
          className="metro-svg"
          viewBox={`0 0 ${svgW} ${svgH}`}
          role="img"
          aria-label="metro-style map of people by topic line"
        >
          {lines.map((line, li) => {
            const y = 36 + li * rowH;
            const n = line.people.length;
            return (
              <g key={line.id} className="metro-line-g">
                <text
                  x={8}
                  y={y + 4}
                  className="metro-line-label"
                  fill={line.color}
                >
                  {line.name}
                </text>
                <line
                  x1={trackStart}
                  y1={y}
                  x2={trackEnd}
                  y2={y}
                  stroke={line.color}
                  strokeWidth={5}
                  strokeLinecap="round"
                />
                {line.people.map((person, i) => {
                  const x = stationX(n, i);
                  const isOpen = openId === person.id;
                  return (
                    <g key={person.id} transform={`translate(${x} ${y})`}>
                      <a
                        href={person.href}
                        className="metro-station-link"
                        data-station={person.id}
                        aria-describedby={isOpen ? tipId : undefined}
                        rel="noopener noreferrer"
                        target="_blank"
                        onMouseEnter={(e) =>
                          openFromEl(person.id, e.currentTarget)
                        }
                        onFocus={(e) => openFromEl(person.id, e.currentTarget)}
                        onClick={(e) => {
                          if (openId !== person.id) {
                            e.preventDefault();
                            openFromEl(person.id, e.currentTarget);
                          }
                        }}
                      >
                        {line.interchange ? (
                          <>
                            <circle
                              r={9}
                              fill="#f7f7f8"
                              stroke={line.color}
                              strokeWidth={3}
                            />
                            <rect
                              x={-4}
                              y={-4}
                              width={8}
                              height={8}
                              fill={line.color}
                              transform="rotate(45)"
                            />
                          </>
                        ) : (
                          <circle
                            r={isOpen ? 7 : 6}
                            fill="#f7f7f8"
                            stroke={line.color}
                            strokeWidth={3}
                          />
                        )}
                        <text
                          y={22}
                          textAnchor="middle"
                          className="metro-station-name"
                          fill="#666666"
                        >
                          {shortLabel(person.name)}
                        </text>
                      </a>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="metro-mobile" aria-label="transit map of people, mobile">
        {lines.map((line) => (
          <section key={line.id} className="metro-mobile-line">
            <h3 className="metro-mobile-title" style={{ color: line.color }}>
              <span
                className="metro-chip"
                style={{ background: line.color }}
                aria-hidden="true"
              />
              {line.name}
            </h3>
            <ol
              className="metro-mobile-stations"
              style={{ borderLeftColor: line.color }}
            >
              {line.people.map((person) => {
                const isOpen = openId === person.id;
                return (
                  <li key={person.id} className="metro-mobile-station">
                    <span
                      className={
                        line.interchange ? "metro-dot metro-dot-x" : "metro-dot"
                      }
                      style={{
                        borderColor: line.color,
                        color: line.color,
                      }}
                      aria-hidden="true"
                    />
                    <a
                      href={person.href}
                      className="metro-mobile-name"
                      data-station={person.id}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-describedby={isOpen ? tipId : undefined}
                      onMouseEnter={(e) =>
                        openFromEl(person.id, e.currentTarget)
                      }
                      onFocus={(e) => openFromEl(person.id, e.currentTarget)}
                      onClick={(e) => {
                        if (openId !== person.id) {
                          e.preventDefault();
                          openFromEl(person.id, e.currentTarget);
                        }
                      }}
                    >
                      {person.name}
                    </a>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      {openStation ? (
        <div
          id={tipId}
          className="metro-tooltip"
          role="tooltip"
          style={
            anchor
              ? {
                  left: tipLeft,
                  top: Math.min(Math.max(anchor.y + 18, 12), 420),
                  transform: "translate(-50%, 0)",
                }
              : {
                  left: "50%",
                  top: 12,
                  transform: "translate(-50%, 0)",
                }
          }
          data-open={openStation.person.id}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={openStation.person.avatar}
            alt=""
            width={40}
            height={40}
            className="metro-tooltip-avatar"
          />
          <div className="metro-tooltip-body">
            <p className="metro-tooltip-name">{openStation.person.name}</p>
            <p className="metro-tooltip-domain">
              {openStation.person.domain}
              <span aria-hidden="true"> ↗</span>
            </p>
            <p className="metro-tooltip-note">{openStation.person.note}</p>
            <p
              className="metro-tooltip-line"
              style={{ color: openStation.line.color }}
            >
              {openStation.line.name}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function shortLabel(name: string): string {
  const clean = name.replace(/^@/, "");
  if (clean.length <= 14) return clean;
  return `${clean.slice(0, 12)}…`;
}
