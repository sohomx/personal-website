"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className="quiet-link cursor-pointer border-0 bg-transparent p-0 text-inherit underline-offset-[0.18em] hover:underline"
      onClick={onCopy}
      aria-label={copied ? "email copied" : `copy email ${email}`}
    >
      {copied ? "copied" : email}
    </button>
  );
}
