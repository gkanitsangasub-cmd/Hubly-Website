import { ImageResponse } from "next/og";

export const alt = "HublyCompany — Marketing Agency · AI Solution · SaaS";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F9F3EB",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 132,
            height: 132,
            borderRadius: 30,
            backgroundColor: "#8A6A4E",
            alignItems: "center",
            justifyContent: "center",
            color: "#FDFBF9",
            fontSize: 78,
            fontWeight: 800,
          }}
        >
          H
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 84,
            fontWeight: 800,
            color: "#3C3027",
            letterSpacing: "-0.02em",
          }}
        >
          HublyCompany
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 36,
            fontWeight: 600,
            color: "#8A6A4E",
          }}
        >
          Marketing Agency · AI Solution · SaaS
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            fontSize: 26,
            color: "#73665C",
          }}
        >
          for Thai SMEs
        </div>
      </div>
    ),
    { ...size },
  );
}
