import { ImageResponse } from "next/og";

// Link-preview image (LinkedIn, Slack, email) generated at build time with Next.js' built-in renderer.
export const alt = "Regina Iuldasheva — Next.js / React Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 90px",
          background: "#FAF9F6",
          color: "#1B2230"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -2 }}>Regina Iuldasheva</div>
          <div style={{ marginTop: 36, fontSize: 40, color: "#1B2230" }}>Next.js / React Developer</div>
          <div style={{ marginTop: 14, fontSize: 28, color: "#5E6675" }}>
            TypeScript · Full-stack project experience
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #E2DFD8",
            paddingTop: 28,
            fontSize: 26,
            color: "#5E6675"
          }}
        >
          <span>České Budějovice, Czech Republic</span>
          <span style={{ color: "#2E54AA" }}>Server Actions · PostgreSQL · LLM integrations</span>
        </div>
      </div>
    ),
    size
  );
}
