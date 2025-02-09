import { Avatar, Button, ConfigProvider, Flex, theme, Typography } from "antd";
import { GalleryVerticalEnd } from "lucide-react";

export default function CompanyLogo() {
  const {
    token: { colorPrimary, colorBgLayout },
  } = theme.useToken();

  return (
    <div style={{ margin: 8, height: 50 }}>
      <Button
        type="text"
        style={{
          width: "100%",
          height: "100%",
          padding: 8,
        }}
      >
        <ConfigProvider
          theme={{
            token: {
              lineHeight: "1rem",
            },
          }}
        >
          <Flex flex={1} gap="small" align="center" style={{ minWidth: 0 }}>
            <Avatar
              icon={<GalleryVerticalEnd size={20} />}
              shape="square"
              style={{
                background: colorPrimary,
                color: colorBgLayout,
              }}
            />
            <Flex vertical flex={1} style={{ minWidth: 0 }}>
              <Typography.Text strong style={{ textAlign: "start" }}>
                Acme Inc.
              </Typography.Text>
              <Typography.Text
                style={{
                  fontSize: 12,
                  textAlign: "start",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Enterprise
              </Typography.Text>
            </Flex>
          </Flex>
        </ConfigProvider>
      </Button>
    </div>
  );
}
