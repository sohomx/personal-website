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
import {
  interchangeIds,
  type MetroLine,
  type Person,
} from "@/data/internet";
import {
  MAP_VIEW,
  pathThrough,
  stationPositions,
  terminusAnchor,
} from "@/data/metroLayout";

type StationRef = {
  person: Person;
  lines: MetroLine[];
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
        const prev = map.get(person.id);
        if (prev) {
          prev.lines.push(line);
        } else {
          map.set(person.id, { person, lines: [line] });
        }
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

  function openFromEl(id: string, el: Element) {
    setHoverId(id);
    placeTooltip(el);
  }

  const tipLeft = anchor
    ? Math.min(Math.max(anchor.x, 120), wrapWidth - 120)
    : 0;

  const svgW = MAP_VIEW.w;
  const svgH = MAP_VIEW.h;

  const uniqueStations = useMemo(() => [...stations.values()], [stations]);

  return (
    <div className="metro-wrap" ref={wrapRef}>
      <div className="metro-desktop" aria-label="transit map of people">
        <svg
          className="metro-svg"
          viewBox={`-40 -30 ${svgW} ${svgH}`}
          overflow="visible"
          role="img"
          aria-label="metro-style map of people by topic line"
        >
          {/* tracks */}
          {lines.map((line) => {
            const ids = line.people.map((p) => p.id);
            return (
              <path
                key={`track-${line.id}`}
                d={pathThrough(ids)}
                fill="none"
                stroke={line.color}
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="metro-track"
              />
            );
          })}

          {/* terminus pills */}
          {lines.map((line) => {
            const ids = line.people.map((p) => p.id);
            const t = terminusAnchor(ids[0], ids[1]);
            const label = line.name;
            const charW = 6.2;
            const padX = 10;
            const w = Math.max(52, label.length * charW + padX * 2);
            const h = 18;
            const x =
              t.anchor === "end" ? t.x - w : t.anchor === "start" ? t.x : t.x - w / 2;
            const y = t.y - h / 2;
            return (
              <g key={`term-${line.id}`} className="metro-terminus">
                <rect
                  x={x}
                  y={y}
                  width={w}
                  height={h}
                  rx={9}
                  ry={9}
                  fill={line.color}
                />
                <text
                  x={x + w / 2}
                  y={y + h / 2 + 0.5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="metro-terminus-text"
                >
                  {label}
                </text>
              </g>
            );
          })}

          {/* stations */}
          {uniqueStations.map(({ person, lines: personLines }) => {
            const pos = stationPositions[person.id];
            if (!pos) return null;
            const isX = interchangeIds.has(person.id);
            const isOpen = openId === person.id;
            const stroke = personLines[0]?.color ?? "#666";
            const labelDy = pos.side === "above" ? -14 : 16;
            return (
              <g
                key={person.id}
                transform={`translate(${pos.x} ${pos.y})`}
                className="metro-station-g"
              >
                <a
                  href={person.href}
                  className="metro-station-link"
                  data-station={person.id}
                  aria-describedby={isOpen ? tipId : undefined}
                  rel="noopener noreferrer"
                  target="_blank"
                  onMouseEnter={(e) => openFromEl(person.id, e.currentTarget)}
                  onFocus={(e) => openFromEl(person.id, e.currentTarget)}
                  onClick={(e) => {
                    if (openId !== person.id) {
                      e.preventDefault();
                      openFromEl(person.id, e.currentTarget);
                    }
                  }}
                >
                  {isX ? (
                    <rect
                      x={-8}
                      y={-8}
                      width={16}
                      height={16}
                      rx={3}
                      ry={3}
                      fill="#f7f7f8"
                      stroke={stroke}
                      strokeWidth={2.5}
                      className="metro-interchange-mark"
                    />
                  ) : (
                    <circle
                      r={isOpen ? 7 : 6}
                      fill="#f7f7f8"
                      stroke={stroke}
                      strokeWidth={3}
                    />
                  )}
                  <text
                    className="metro-station-name"
                    fill="#555555"
                    transform={`translate(0 ${labelDy}) rotate(${pos.angle})`}
                    textAnchor={pos.anchor ?? "start"}
                    dominantBaseline="middle"
                  >
                    {person.name}
                  </text>
                </a>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="metro-mobile" aria-label="transit map of people, mobile">
        {lines.map((line) => (
          <section key={line.id} className="metro-mobile-line">
            <h3 className="metro-mobile-title">
              <span className="metro-terminus-pill" style={{ background: line.color }}>
                {line.name}
              </span>
            </h3>
            <ol
              className="metro-mobile-stations"
              style={{ borderLeftColor: line.color }}
            >
              {line.people.map((person) => {
                const isOpen = openId === person.id;
                const isX = interchangeIds.has(person.id);
                return (
                  <li key={person.id} className="metro-mobile-station">
                    <span
                      className={isX ? "metro-dot metro-dot-x" : "metro-dot"}
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
                  top: Math.min(Math.max(anchor.y + 18, 12), 520),
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
            <p className="metro-tooltip-lines">
              {openStation.lines.map((line) => (
                <span key={line.id} style={{ color: line.color }}>
                  {line.name}
                </span>
              ))}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
