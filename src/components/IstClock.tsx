"use client";

import { useEffect, useState } from "react";

export function IstClock() {
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
      setLabel(`${formatted} ist`);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!label) {
    return (
      <span className="mono text-sm text-muted" suppressHydrationWarning>
        —:—:— ist
      </span>
    );
  }

  return (
    <span className="mono text-sm text-muted" aria-live="polite">
      {label}
    </span>
  );
}
