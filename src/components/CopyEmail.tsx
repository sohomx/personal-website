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
      className="btn"
      onClick={onCopy}
      aria-label={copied ? "email copied" : `copy email ${email}`}
    >
      {copied ? "copied" : email}
    </button>
  );
}
