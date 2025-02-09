import { useLocation } from "react-router";
import { Menu } from "antd";
import {
  HomeIcon,
  MinusIcon,
  PlusIcon,
  Settings2Icon,
  SettingsIcon,
  ShieldCheckIcon,
  UsersRoundIcon,
} from "lucide-react";
import { Link } from "react-router";

export default function SidebarMenu() {
  const { pathname } = useLocation();

  const items = [
    {
      key: "0",
      icon: <HomeIcon size={16} />,
      label: <Link to={"/dashboard"}>Dashboard</Link>,
    },
    {
      key: "1",
      icon: <UsersRoundIcon size={16} />,
      label: <Link to={"/dashboard/users"}>Users</Link>,
    },
    {
      key: "2",
      icon: <SettingsIcon size={16} />,
      label: "Navigation One",
      children: [
        {
          key: "21",
          icon: <Settings2Icon size={16} />,
          label: "Sub Menu 1",
        },
        {
          key: "22",
          icon: <Settings2Icon size={16} />,
          label: "Sub Menu 2",
        },
        {
          key: "23",
          icon: <Settings2Icon size={16} />,
          label: "Sub Menu 3",
          children: [
            {
              key: "231",
              label: "Sub Submenu 1",
              icon: <ShieldCheckIcon size={16} />,
            },
            {
              key: "232",
              label: "Sub Submenu 2",
              icon: <ShieldCheckIcon size={16} />,
            },
            {
              key: "233",
              label: "Sub Submenu 3",
              icon: <ShieldCheckIcon size={16} />,
            },
          ],
        },
        {
          key: "24",
          label: "Sub Menu 4",
          icon: <Settings2Icon size={16} />,
          children: [
            {
              key: "241",
              label: "Sub Submenu 1",
              icon: <ShieldCheckIcon size={16} />,
            },
            {
              key: "242",
              label: "Sub Submenu 2",
              icon: <ShieldCheckIcon size={16} />,
            },
            {
              key: "243",
              label: "Sub Submenu 3",
              icon: <ShieldCheckIcon size={16} />,
            },
          ],
        },
      ],
    },
    {
      key: "3",
      icon: <SettingsIcon size={16} />,
      label: "Navigation Three",
      children: [
        {
          key: "31",
          label: "Sub Menu 1",
        },
        {
          key: "32",
          label: "Sub Menu 2",
        },
        {
          key: "33",
          label: "Sub Menu 3",
        },
        {
          key: "34",
          label: "Sub Menu 4",
        },
      ],
    },
    {
      key: "4",
      icon: <SettingsIcon size={16} />,
      label: "Navigation Two",
      children: [
        {
          key: "41",
          label: "Sub Menu 1",
        },
        {
          key: "42",
          label: "Sub Menu 2",
        },
        {
          key: "43",
          label: "Sub Menu 3",
          children: [
            {
              key: "431",
              label: "Sub Submenu 1",
            },
            {
              key: "432",
              label: "Sub Submenu 2",
            },
            {
              key: "433",
              label: "Sub Submenu 3",
            },
          ],
        },
        {
          key: "44",
          label: "Sub Menu 4",
          children: [
            {
              key: "441",
              label: "Sub Submenu 1",
            },
            {
              key: "442",
              label: "Sub Submenu 2",
            },
            {
              key: "443",
              label: "Sub Submenu 3",
              children: [
                {
                  key: "4431",
                  label: "Sub Sub Submenu 1",
                },
                {
                  key: "4432",
                  label: "Sub Sub Submenu 2",
                },
                {
                  key: "4433",
                  label: "Sub Sub Submenu 3",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div
      style={{
        padding: "4px 0",
        minHeight: 0,
        display: "flex",
        flex: "1 1 0%",
        overflow: "auto",
      }}
    >
      <Menu
        style={{ border: "none" }}
        defaultSelectedKeys={[pathname === "/dashboard" ? "0" : "1"]}
        defaultOpenKeys={["2", "3", "4"]}
        inlineIndent={0}
        mode="inline"
        expandIcon={({ isOpen }) => {
          return (
            <div
              style={{
                position: "absolute",
                right: 8,
              }}
            >
              {isOpen ? <MinusIcon size={14} /> : <PlusIcon size={14} />}
            </div>
          );
        }}
        items={items}
      />
    </div>
  );
}
