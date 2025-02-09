import useThemeStore from "../stores/useThemeStore";
import { useNavigate } from "react-router";
import { App, Avatar, Button, ConfigProvider, Dropdown, Flex, Typography } from "antd";
import {
  BadgeCheckIcon,
  BellIcon,
  ChevronsUpDownIcon,
  CreditCardIcon,
  LanguagesIcon,
  LogOutIcon,
  MoonIcon,
  PaletteIcon,
  SparklesIcon,
  SunIcon,
  UserRoundIcon,
} from "lucide-react";

export default function DropdownUser() {
  const { modal } = App.useApp();
  const { theme, setTheme } = useThemeStore();
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
      <ConfigProvider
        theme={{
          token: {
            lineHeight: "1rem",
          },
        }}
      >
        <Flex flex={1} gap="small" align="center" style={{ minWidth: 0 }}>
          <Avatar shape="square" icon={<UserRoundIcon size={20} />} />
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
      </ConfigProvider>
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
      icon: <SparklesIcon size={16} />,
    },
    { type: "divider" },
    {
      key: "account",
      label: "Account",
      icon: <BadgeCheckIcon size={16} />,
    },
    {
      key: "theme",
      label: "Theme",
      icon: <PaletteIcon size={16} style={{ marginTop: 3 }} />,
      children: [
        {
          key: "light",
          label: "Light",
          icon: <SunIcon size={16} />,
          onClick: () => setTheme("light"),
        },
        {
          key: "dark",
          label: "Dark",
          icon: <MoonIcon size={16} />,
          onClick: () => setTheme("dark"),
        },
      ],
    },
    {
      key: "language",
      label: "Language",
      icon: <LanguagesIcon size={16} style={{ marginTop: 3 }} />,
      children: [
        {
          key: "english",
          label: "English",
          icon: <span style={{ fontFamily: "monospace" }}>EN</span>,
          onClick: () => setTheme("light"),
        },
        {
          key: "indonesia",
          label: "Indonesian",
          icon: <span style={{ fontFamily: "monospace" }}>ID</span>,
          onClick: () => setTheme("dark"),
        },
        {
          key: "japanese",
          label: "Japanese",
          icon: <span style={{ fontFamily: "monospace" }}>JP</span>,
          onClick: () => setTheme("dark"),
        },
      ],
    },
    {
      key: "billing",
      label: "Billing",
      icon: <CreditCardIcon size={16} />,
    },
    {
      key: "notification",
      label: "Notification",
      icon: <BellIcon size={16} />,
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
          selectable: true,
          defaultSelectedKeys: [theme],
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

            <ChevronsUpDownIcon size={16} />
          </Flex>
        </Button>
      </Dropdown>
    </div>
  );
}
