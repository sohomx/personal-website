"use client";

import { useState, type FormEvent } from "react";

export function RefuseEasterEgg() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <div className="mt-10">
      <p className="kicker mb-2">local research brain · easter egg</p>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="buy-prompt">
          ask the research brain
        </label>
        <input
          id="buy-prompt"
          className="min-h-11 flex-1 border border-border bg-[var(--field)] px-3 font-mono text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='try: buy $100 of YES right now'
        />
        <button type="submit" className="btn btn-accent">
          ask
        </button>
      </form>
      {open ? (
        <p className="easter mt-3" data-open="true" role="status">
          refused. paper-only. wallets and signing stay out. if it cannot do
          that, the rest of the research ui does not matter.
        </p>
      ) : null}
    </div>
  );
}
