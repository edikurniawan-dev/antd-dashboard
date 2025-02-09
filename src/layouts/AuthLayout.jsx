import { useEffect, useState } from "react";
import { Divider, Flex, Layout, theme, Typography } from "antd";
import { GalleryVerticalEnd } from "lucide-react";
import { Outlet } from "react-router";

export default function AuthLayout() {
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Layout
      style={{
        minHeight: "100dvh",
        background: colorBgLayout,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Flex align="center" gap="small">
        <GalleryVerticalEnd />
        <Typography.Title level={3} style={{ margin: 0 }}>
          Acme Inc.
        </Typography.Title>
      </Flex>

      <Divider style={{ minWidth: 0, maxWidth: "24rem" }} />

      <div style={{ maxWidth: "24rem", width: "100%" }}>
        <Outlet />
      </div>

      <Divider style={{ minWidth: 0, maxWidth: "24rem" }} />

      <Typography.Text
        style={{
          textAlign: "center",
          lineHeight: "1rem",
          fontSize: 12,
        }}
      >
        &copy; Copyright {year} Acme Inc. All rights reserved.
        <br />
        Version 1.0.1
      </Typography.Text>
    </Layout>
  );
}
