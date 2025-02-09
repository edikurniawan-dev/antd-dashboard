import { Avatar, Button, ConfigProvider, Flex, Typography } from "antd";
import { GalleryVerticalEnd } from "lucide-react";

export default function CompanyLogo() {
  return (
    <ConfigProvider
      theme={{
        token: {
          lineHeight: "1rem",
        },
      }}
    >
      <div style={{ margin: 8, height: 50 }}>
        <Button
          type="text"
          style={{
            width: "100%",
            height: "100%",
            padding: 8,
          }}
        >
          <Flex flex={1} gap="small" align="center" style={{ minWidth: 0 }}>
            <Avatar icon={<GalleryVerticalEnd size={20} />} shape="square" style={{ background: "#1B1B1B" }} />
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
        </Button>
      </div>
    </ConfigProvider>
  );
}
