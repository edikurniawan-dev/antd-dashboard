import { Card, theme } from "antd";

export default function Dashboard() {
  const {
    token: {
      Layout: { siderBg },
    },
  } = theme.useToken();

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "1rem",
        }}
      >
        <Card
          style={{
            background: siderBg,
            aspectRatio: "16/9",
            border: "none",
          }}
        />
        <Card
          style={{
            background: siderBg,
            aspectRatio: "16/9",
            border: "none",
          }}
        />
        <Card
          style={{
            background: siderBg,
            aspectRatio: "16/9",
            border: "none",
          }}
        />
        <Card
          style={{
            background: siderBg,
            aspectRatio: "16/9",
            border: "none",
          }}
        />
      </div>

      <Card
        style={{
          background: siderBg,
          height: "50rem",
          border: "none",
        }}
      />
    </>
  );
}
