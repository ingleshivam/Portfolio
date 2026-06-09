import { ImageResponse } from "next/og";

export const alt = "Shivam Ingle, AI and Full-Stack Developer";
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
          padding: "72px",
          color: "#fafafa",
          background:
            "radial-gradient(circle at 85% 15%, #3a3117 0%, #111113 35%), #111113",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24 }}>
          <div
            style={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 999,
              color: "#18150c",
              background: "#f6d365",
              fontWeight: 700,
            }}
          >
            SI
          </div>
          Shivam Ingle
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#f6d365", fontSize: 22, letterSpacing: 4, textTransform: "uppercase" }}>
            AI & Full-Stack Developer
          </div>
          <div style={{ marginTop: 22, maxWidth: 900, fontSize: 92, lineHeight: 0.96, letterSpacing: -6, fontWeight: 650 }}>
            I build AI systems that ship.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
