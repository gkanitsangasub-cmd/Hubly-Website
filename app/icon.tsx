import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#8A6A4E",
          borderRadius: 14,
          color: "#FDFBF9",
          fontSize: 42,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        H
      </div>
    ),
    { ...size },
  );
}
