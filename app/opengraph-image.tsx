import { ImageResponse } from "next/og";

export const alt =
  "Chapelle Connect — Church life, beautifully connected";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "72px 84px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f1e9",
          color: "#20194f",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontFamily: "Arial, sans-serif",
            fontSize: 27,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              background: "#20194f",
              color: "#98d8b8",
              fontSize: 34,
            }}
          >
            C
          </div>
          Chapelle Connect
        </div>
        <div
          style={{
            maxWidth: "850px",
            display: "flex",
            flexDirection: "column",
            fontSize: 82,
            lineHeight: 0.98,
            letterSpacing: "-4px",
          }}
        >
          Church life,
          <span style={{ color: "#147a52", fontStyle: "italic" }}>
            beautifully connected.
          </span>
        </div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 21,
            color: "#6d6879",
          }}
        >
          Chapelle de la Résurrection · Gatineau
        </div>
      </div>
    ),
    size,
  );
}
