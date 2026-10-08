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
  BASEMAP,
  COMPASS,
  SCALE,
  TRAILHEAD,
  WALK_VIEW,
  buildMobileWalkLayout,
  walkTrailDefs,
  walkTrailLabels,
  walkWaypoints,
  type WalkLabelSide,
  type WalkWaypoint,
} from "@/data/walkLayout";

type StationRef = {
  person: Person;
  trails: MetroLine[];
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

function subscribeNarrow(onChange: () => void) {
  const mq = window.matchMedia("(max-width: 819px)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getNarrowSnapshot() {
  return window.matchMedia("(max-width: 819px)").matches;
}

function getNarrowServerSnapshot() {
  return false;
}

function labelOffset(side: WalkLabelSide): {
  x: number;
  y: number;
  anchor: "start" | "middle" | "end";
} {
  switch (side) {
    case "left":
      return { x: -8, y: 3, anchor: "end" };
    case "right":
      return { x: 8, y: 3, anchor: "start" };
    case "above":
      return { x: 0, y: -11, anchor: "middle" };
    case "below":
      return { x: 0, y: 14, anchor: "middle" };
  }
}

function TrailPaths({
  trails,
}: {
  trails: { id: string; color: string; d: string }[];
}) {
  return (
    <>
      {/* faint worn under-path */}
      {trails.map((trail) => (
        <path
          key={`under-${trail.id}`}
          d={trail.d}
          fill="none"
          stroke="color-mix(in srgb, #f7f7f4 55%, #c8c2b4)"
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="walk-trail-under"
          aria-hidden="true"
        />
      ))}
      {trails.map((trail) => (
        <path
          key={trail.id}
          d={trail.d}
          fill="none"
          stroke={trail.color}
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2.5 3.5"
          className="walk-trail"
          data-trail={trail.id}
        />
      ))}
    </>
  );
}

function WaypointMarks({
  ids,
  positions,
  peopleById,
  trailColorById,
  openId,
  tipId,
  openFromEl,
  nameClass,
  keyPrefix = "",
}: {
  ids: string[];
  positions: Record<string, WalkWaypoint>;
  peopleById: Map<string, StationRef>;
  trailColorById: Map<string, string>;
  openId: string | null;
  tipId: string;
  openFromEl: (id: string, el: Element) => void;
  nameClass: string;
  keyPrefix?: string;
}) {
  return (
    <>
      {ids.map((id) => {
        const wp = positions[id];
        const ref = peopleById.get(id);
        if (!wp || !ref) return null;
        const isX = interchangeIds.has(id);
        const isOpen = openId === id;
        const stroke =
          trailColorById.get(ref.trails[0]?.id ?? "") ?? "#5c5c58";
        const off = labelOffset(wp.label);
        const marker = walkTrailLabels[id] ?? ref.person.name.toLowerCase();
        return (
          <g
            key={`${keyPrefix}${id}`}
            transform={`translate(${wp.x} ${wp.y})`}
            className="walk-waypoint-g"
          >
            <a
              href={ref.person.href}
              className="walk-waypoint-link"
              data-station={id}
              aria-describedby={isOpen ? tipId : undefined}
              rel="noopener noreferrer"
              target="_blank"
              onMouseEnter={(e) => openFromEl(id, e.currentTarget)}
              onFocus={(e) => openFromEl(id, e.currentTarget)}
              onClick={(e) => {
                if (openId !== id) {
                  e.preventDefault();
                  openFromEl(id, e.currentTarget);
                }
              }}
            >
              {isX ? (
                <circle
                  r={4.2}
                  fill="#fafaf7"
                  stroke={stroke}
                  strokeWidth={1.6}
                  className="walk-dot walk-dot-x"
                />
              ) : (
                <circle
                  r={2.8}
                  fill={stroke}
                  stroke="#f7f7f4"
                  strokeWidth={1}
                  className="walk-dot"
                />
              )}
              <text
                x={off.x}
                y={off.y}
                textAnchor={off.anchor}
                dominantBaseline="middle"
                className={nameClass}
                data-station-label={id}
              >
                {marker}
              </text>
            </a>
          </g>
        );
      })}
    </>
  );
}

function TrailPills({
  trails,
}: {
  trails: {
    id: string;
    name: string;
    color: string;
    pill: { x: number; y: number };
  }[];
}) {
  return (
    <>
      {trails.map((trail) => {
        const w = Math.max(48, trail.name.length * 5.8 + 18);
        const h = 15;
        const x = trail.pill.x - w / 2;
        const y = trail.pill.y - h / 2;
        return (
          <g key={`pill-${trail.id}`} className="walk-pill" data-pill={trail.id}>
            <rect
              x={x}
              y={y}
              width={w}
              height={h}
              rx={7.5}
              ry={7.5}
              fill={trail.color}
              opacity={0.92}
            />
            <text
              x={trail.pill.x}
              y={trail.pill.y + 0.5}
              textAnchor="middle"
              dominantBaseline="middle"
              className="walk-pill-text"
            >
              {trail.name}
            </text>
          </g>
        );
      })}
    </>
  );
}

export function WalkMap({ lines }: Props) {
  const tipId = useId();
  const urlTip = useSyncExternalStore(
    subscribeTip,
    getTipSnapshot,
    getTipServerSnapshot,
  );
  const isNarrow = useSyncExternalStore(
    subscribeNarrow,
    getNarrowSnapshot,
    getNarrowServerSnapshot,
  );
  const [hoverId, setHoverId] = useState<string | null>(null);
  const openId = hoverId ?? urlTip;
  const [anchor, setAnchor] = useState<{ x: number; y: number } | null>(null);
  const [wrapWidth, setWrapWidth] = useState(640);
  const wrapRef = useRef<HTMLDivElement>(null);

  const peopleById = useMemo(() => {
    const map = new Map<string, StationRef>();
    for (const line of lines) {
      for (const person of line.people) {
        const prev = map.get(person.id);
        if (prev) prev.trails.push(line);
        else map.set(person.id, { person, trails: [line] });
      }
    }
    return map;
  }, [lines]);

  const openStation = peopleById.get(openId ?? "") ?? null;

  const trailColorById = useMemo(() => {
    const m = new Map<string, string>();
    for (const t of walkTrailDefs) m.set(t.id, t.color);
    return m;
  }, []);

  const mobile = useMemo(() => buildMobileWalkLayout(), []);

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
    ? Math.min(Math.max(anchor.x, 140), wrapWidth - 140)
    : 0;

  const desktopIds = useMemo(() => Object.keys(walkWaypoints), []);

  return (
    <div
      className="walk-wrap"
      ref={wrapRef}
      data-layout={isNarrow ? "mobile" : "desktop"}
    >
      {isNarrow ? (
        <div
          className="walk-scroll walk-scroll-mobile"
          aria-label="topo trail map of people"
        >
          <div
            className="walk-frame walk-frame-mobile"
            style={{
              width: "100%",
              aspectRatio: `${mobile.view.w} / ${mobile.view.h}`,
            }}
          >
            <div className="walk-mobile-paper" aria-hidden="true" />
            <svg
              className="walk-svg walk-svg-mobile"
              viewBox={`0 0 ${mobile.view.w} ${mobile.view.h}`}
              role="img"
              aria-label="portrait trail map of people by topic"
            >
              <TrailPaths trails={mobile.trails} />
              <TrailPills trails={mobile.trails} />
              {mobile.trails.map((trail) => {
                const positions: Record<string, WalkWaypoint> = {};
                for (const wp of trail.waypoints) positions[wp.id] = wp;
                return (
                  <WaypointMarks
                    key={`wp-${trail.id}`}
                    keyPrefix={`${trail.id}:`}
                    ids={trail.waypoints.map((w) => w.id)}
                    positions={positions}
                    peopleById={peopleById}
                    trailColorById={trailColorById}
                    openId={openId}
                    tipId={tipId}
                    openFromEl={openFromEl}
                    nameClass="walk-name walk-name-mobile"
                  />
                );
              })}
              <g
                className="walk-trailhead"
                transform={`translate(${mobile.trailhead.x} ${mobile.trailhead.y})`}
              >
                <path
                  d="M 0 -7 L 3.5 5 L 0 2.5 L -3.5 5 Z"
                  fill="#6B5B4A"
                />
                <text x={8} y={4} className="walk-extra-label">
                  trailhead
                </text>
              </g>
            </svg>
          </div>
        </div>
      ) : (
        <div className="walk-scroll" aria-label="topo trail map of people">
          <div className="walk-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="walk-basemap"
              src={BASEMAP.src}
              srcSet={`${BASEMAP.src} 1x, ${BASEMAP.src2x} 2x`}
              alt=""
              width={WALK_VIEW.w}
              height={WALK_VIEW.h}
              draggable={false}
            />
            <svg
              className="walk-svg"
              viewBox={`0 0 ${WALK_VIEW.w} ${WALK_VIEW.h}`}
              role="img"
              aria-label="trail map of people by topic"
            >
              <TrailPaths trails={walkTrailDefs} />
              <TrailPills trails={walkTrailDefs} />
              <WaypointMarks
                ids={desktopIds}
                positions={walkWaypoints}
                peopleById={peopleById}
                trailColorById={trailColorById}
                openId={openId}
                tipId={tipId}
                openFromEl={openFromEl}
                nameClass="walk-name"
              />
              <g
                className="walk-trailhead"
                transform={`translate(${TRAILHEAD.x} ${TRAILHEAD.y})`}
              >
                <path
                  d="M 0 -7 L 3.5 5 L 0 2.5 L -3.5 5 Z"
                  fill="#6B5B4A"
                />
                <text x={8} y={4} className="walk-extra-label">
                  trailhead
                </text>
              </g>
              <g
                className="walk-compass"
                transform={`translate(${COMPASS.x} ${COMPASS.y})`}
              >
                <circle r={16} fill="none" stroke="#8A8578" strokeWidth={0.9} />
                <path d="M 0 -12 L 3.5 3.5 L 0 1 L -3.5 3.5 Z" fill="#5C5C58" />
                <text y={-18} textAnchor="middle" className="walk-extra-label">
                  n
                </text>
              </g>
              <g
                className="walk-scale"
                transform={`translate(${SCALE.x} ${SCALE.y})`}
              >
                <line
                  x1={0}
                  y1={0}
                  x2={90}
                  y2={0}
                  stroke="#5C5C58"
                  strokeWidth={1.1}
                />
                <line
                  x1={0}
                  y1={-3.5}
                  x2={0}
                  y2={3.5}
                  stroke="#5C5C58"
                  strokeWidth={1.1}
                />
                <line
                  x1={45}
                  y1={-2.5}
                  x2={45}
                  y2={2.5}
                  stroke="#5C5C58"
                  strokeWidth={1}
                />
                <line
                  x1={90}
                  y1={-3.5}
                  x2={90}
                  y2={3.5}
                  stroke="#5C5C58"
                  strokeWidth={1.1}
                />
                <text x={0} y={13} textAnchor="middle" className="walk-extra-label">
                  0
                </text>
                <text x={45} y={13} textAnchor="middle" className="walk-extra-label">
                  1
                </text>
                <text x={90} y={13} textAnchor="middle" className="walk-extra-label">
                  2 tabs
                </text>
              </g>
            </svg>
          </div>
        </div>
      )}

      {openStation ? (
        <div
          id={tipId}
          className="metro-tooltip walk-tooltip"
          role="tooltip"
          style={
            anchor
              ? {
                  left: tipLeft,
                  top: Math.min(
                    Math.max(anchor.y + 16, 10),
                    isNarrow ? 520 : 420,
                  ),
                  transform: "translate(-50%, 0)",
                }
              : { left: "50%", top: 12, transform: "translate(-50%, 0)" }
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
              <a
                href={openStation.person.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {openStation.person.domain}
                <span aria-hidden="true"> ↗</span>
              </a>
            </p>
            <p className="metro-tooltip-note">{openStation.person.note}</p>
            <p className="metro-tooltip-lines">
              {openStation.trails.map((trail) => (
                <span
                  key={trail.id}
                  style={{ color: trailColorById.get(trail.id) ?? trail.color }}
                >
                  {trail.name}
                </span>
              ))}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
