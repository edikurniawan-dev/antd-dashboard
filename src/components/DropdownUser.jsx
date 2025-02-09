import { useNavigate } from "react-router";
import { App, Avatar, Button, ConfigProvider, Dropdown, Flex, Typography } from "antd";
import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, Settings, Sparkles, UserRound } from "lucide-react";

export default function DropdownUser() {
  const { modal } = App.useApp();
  const navigate = useNavigate();

  const onLogout = () => {
    modal.confirm({
      title: "Confirm Logout",
      content: "Are you sure you want to logout?",
      onOk: async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            navigate("/login");
          }, 2000);
        });
      },
    });
  };

  const Detail = () => {
    return (
      <Flex flex={1} gap="small" align="center" style={{ minWidth: 0 }}>
        <Avatar shape="square" icon={<UserRound size={20} />} />
        <Flex vertical flex={1} style={{ minWidth: 0 }}>
          <Typography.Text strong style={{ textAlign: "start" }}>
            User
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
            user@acme.inc
          </Typography.Text>
        </Flex>
      </Flex>
    );
  };

  const items = [
    {
      key: "detail",
      label: <Detail />,
    },
    {
      type: "divider",
    },
    {
      key: "upgrade-to-pro",
      label: "Upgrade to Pro",
      icon: <Sparkles size={16} />,
    },
    { type: "divider" },
    {
      key: "account",
      label: "Account",
      icon: <BadgeCheck size={16} />,
    },
    {
      key: "billing",
      label: "Billing",
      icon: <CreditCard size={16} />,
    },
    {
      key: "notification",
      label: "Notification",
      icon: <Bell size={16} />,
    },
    { type: "divider" },
    {
      key: "logout",
      label: "Logout",
      icon: <Settings size={16} />,
      danger: true,
      onClick: onLogout,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          lineHeight: "1rem",
        },
      }}
    >
      <div style={{ margin: 8, height: 50 }}>
        <Dropdown
          trigger={["click"]}
          menu={{
            items,
          }}
        >
          <Button
            type="text"
            style={{
              width: "100%",
              height: "100%",
              padding: 8,
            }}
          >
            <Flex gap="small" justify="space-between" align="center" style={{ width: "100%" }}>
              <Detail />

              <ChevronsUpDown size={16} />
            </Flex>
          </Button>
        </Dropdown>
      </div>
    </ConfigProvider>
  );
}
