import { Breadcrumb, Button, Divider, Drawer, Layout, theme, Typography } from "antd";
import { useResponsive } from "antd-style";
import { ChevronRight, PanelLeftClose } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import SidebarMenu from "../components/SidebarMenu";
import DropdownUser from "../components/DropdownUser";
import CompanyLogo from "../components/CompanyLogo";

const { Header, Content, Footer, Sider } = Layout;

export default function DashboardLayout() {
  const {
    token: {
      colorSplit,
      colorBgLayout,
      Layout: { siderBg },
    },
  } = theme.useToken();
  const { mobile } = useResponsive();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Layout style={{ minHeight: "dvh" }}>
      <Drawer
        onClose={() => {
          setIsCollapsed(false);
        }}
        placement="left"
        width={272}
        open={mobile ? isCollapsed : false}
        style={{
          background: siderBg,
          borderRight: `1px solid ${colorSplit}`,
        }}
        styles={{ header: { display: "none" }, body: { padding: 0 } }}
      >
        <div
          style={{
            position: "sticky",
            display: "flex",
            flexDirection: "column",
            height: "100dvh",
            overflow: "auto",
          }}
        >
          <CompanyLogo />
          <Divider style={{ margin: 0 }} />
          <SidebarMenu />
          <Divider style={{ margin: 0 }} />
          <DropdownUser />
        </div>
      </Drawer>

      <Sider
        width="272"
        theme="light"
        collapsedWidth={0}
        trigger={null}
        collapsed={isCollapsed}
        onCollapse={() => {
          setIsCollapsed(false);
        }}
        style={{
          display: mobile ? "none" : "block",
          position: "sticky",
          top: 0,
          height: "100dvh",
          background: siderBg,
          borderRight: `1px solid ${colorSplit}`,
        }}
      >
        <div
          style={{ position: "sticky", display: "flex", flexDirection: "column", height: "100dvh", overflow: "auto" }}
        >
          <CompanyLogo />
          <Divider style={{ margin: 0 }} />
          <SidebarMenu />
          <Divider style={{ margin: 0 }} />
          <DropdownUser />
        </div>
      </Sider>

      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            height: 67,
            background: colorBgLayout,
            padding: 0,
            borderBottom: `1px solid ${colorSplit}`,
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              flex: 1,
              alignItems: "center",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <Button
              onClick={() => {
                setIsCollapsed(!isCollapsed);
              }}
              type="text"
              icon={<PanelLeftClose size={16} style={{ marginBottom: -1 }} />}
            />
            <Divider type="vertical" style={{ height: 30, margin: "0 8px 0 4px" }} />
            <Breadcrumb
              separator={
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <ChevronRight size={14} />
                </div>
              }
              items={[
                {
                  title: "Application Center",
                  href: "",
                },
                {
                  title: "Application List",
                  href: "",
                },
                {
                  title: "An Application",
                },
              ]}
            />
          </div>
        </Header>

        <Content
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "1rem",
            padding: 16,
          }}
        >
          <Outlet />
        </Content>

        <Footer
          style={{
            height: 67,
            background: colorBgLayout,
            padding: 0,
            borderTop: `1px solid ${colorSplit}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
        </Footer>
      </Layout>
    </Layout>
  );
}
