import useThemeStore from "../stores/useThemeStore";
import { useNavigate } from "react-router";
import { App, Avatar, Button, ConfigProvider, Dropdown, Flex, Typography } from "antd";
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOutIcon,
  Moon,
  Palette,
  Sparkles,
  Sun,
  UserRound,
} from "lucide-react";

export default function DropdownUser() {
  const { modal } = App.useApp();
  const { setTheme } = useThemeStore();
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
      key: "theme",
      label: "Theme",
      icon: <Palette size={16} style={{ marginTop: 3 }} />,
      children: [
        {
          key: "light",
          label: "Light",
          icon: <Sun size={16} />,
          onClick: () => setTheme("light"),
        },
        {
          key: "dark",
          label: "Dark",
          icon: <Moon size={16} />,
          onClick: () => setTheme("dark"),
        },
      ],
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
      icon: <LogOutIcon size={16} />,
      danger: true,
      onClick: onLogout,
    },
  ];

  return (
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
          <ConfigProvider
            theme={{
              token: {
                lineHeight: "1rem",
              },
            }}
          >
            <Flex gap="small" justify="space-between" align="center" style={{ width: "100%" }}>
              <Detail />

              <ChevronsUpDown size={16} />
            </Flex>
          </ConfigProvider>
        </Button>
      </Dropdown>
    </div>
  );
}
