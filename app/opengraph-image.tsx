import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0c4a6e 0%, #0891b2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "20px",
          }}
        >
          SkyJourney Travels
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "#bae6fd",
            marginBottom: "40px",
          }}
        >
          Explore The World With Confidence
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#7dd3fc",
          }}
        >
          Premium Travel & Tours Since 2010
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
