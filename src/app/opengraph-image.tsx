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
          background: "#f7f7f8",
          color: "#1a1a1a",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 500,
            letterSpacing: "-0.02em",
          }}
        >
          sohom
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 40, fontWeight: 500, maxWidth: 900 }}>
            i make agents prove what they did.
          </div>
          <div style={{ fontSize: 26, color: "#666666" }}>
            traces in, failing tasks and a regression eval out.
          </div>
          <div style={{ fontSize: 22, color: "#999999", marginTop: 12 }}>
            sxohom.xyz
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
