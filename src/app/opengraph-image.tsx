import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "sohom — i make agents prove what they did";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f5f1",
          color: "#141414",
          padding: "64px",
          border: "12px solid #141414",
        }}
      >
        <div
          style={{
            fontSize: 160,
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
          }}
        >
          sohom
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 44, fontWeight: 700, maxWidth: 900 }}>
            i make agents prove what they did.
          </div>
          <div style={{ fontSize: 28, color: "#5c5a54" }}>
            traces in, failing tasks and a regression eval out.
          </div>
          <div style={{ fontSize: 22, color: "#ff4a1c", marginTop: 8 }}>
            sxohom.xyz
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
