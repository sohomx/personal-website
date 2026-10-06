import { ImageResponse } from "next/og";
import { site } from "@/data/content";

export const alt = `${site.fullName} — ${site.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px",
          background:
            "linear-gradient(160deg, #dfe4de 0%, #e8ebe5 42%, #cfd6ce 100%)",
          color: "#14171c",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 96,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 36,
            maxWidth: 820,
            lineHeight: 1.25,
          }}
        >
          {site.jobTitle} — proof layer for agents
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 22,
            color: "#5a616c",
            maxWidth: 780,
          }}
        >
          Open to full-time roles and freelance / contract work
        </div>
      </div>
    ),
    { ...size },
  );
}
