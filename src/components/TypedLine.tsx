"use client";

import { useEffect, useRef, useState } from "react";

export function TypedLine({ text }: { text: string }) {
  const [shown, setShown] = useState(text);
  const [done, setDone] = useState(true);
  const textRef = useRef(text);

  useEffect(() => {
    textRef.current = text;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let i = 0;
    let id = 0;
    const started = performance.now();

    // Defer first paint update so the effect body stays sync-free for lint.
    id = window.setTimeout(function tick() {
      i += 1;
      const next = textRef.current.slice(0, i);
      setShown(next);
      setDone(false);
      if (i >= textRef.current.length || performance.now() - started > 900) {
        setShown(textRef.current);
        setDone(true);
        return;
      }
      id = window.setTimeout(tick, 28);
    }, 0);

    return () => window.clearTimeout(id);
  }, [text]);

  return (
    <span>
      {shown}
      {!done ? <span className="typed-caret" aria-hidden="true" /> : null}
    </span>
  );
}
