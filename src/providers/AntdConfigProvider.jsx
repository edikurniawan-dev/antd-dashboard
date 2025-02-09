import useThemeStore from "../stores/useThemeStore";
import { ConfigProvider, theme as antdTheme } from "antd";
import { ThemeProvider } from "antd-style";

export default function AntdConfigProvider({ children }) {
  const {
    token: { colorBgTextActive },
  } = antdTheme.useToken();
  const { theme } = useThemeStore();
  const light = theme === "light";

  const themeMode = light
    ? {
        primary: "#18181B",
        bgLayout: "#FFF",
        link: "#18181B",
        itemBg: "#F9F9FA",
        itemSelectedColor: "#F9F9FA",
      }
    : {
        primary: "#FFF",
        bgLayout: "#000",
        link: "#FFF",
        itemBg: "#18181B",
        itemSelectedColor: "#18181B",
      };

  return (
    <ThemeProvider
      theme={{
        token: {
          screenXS: 480,
          screenSM: 576,
          screenMD: 768,
          screenLG: 992,
          screenXL: 1200,
          screenXXL: 1600,
        },
      }}
    >
      <ConfigProvider
        theme={{
          cssVar: true,
          algorithm: light ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm,
          token: {
            fontFamily: "Geist",
            colorPrimary: themeMode.primary,
            colorBgLayout: themeMode.bgLayout,
            colorLink: themeMode.link,
          },
          components: {
            Button: {
              primaryColor: light ? "#FFF" : "#18181B",
              primaryShadow: "none",
              dangerShadow: "none",
              defaultShadow: "none",
              boxShadow: "none",
            },
            Form: {
              verticalLabelPadding: "0 0 4px",
            },
            Layout: {
              siderBg: themeMode.itemBg,
            },
            Table: {
              headerBorderRadius: 0,
              rowSelectedBg: colorBgTextActive,
              rowSelectedHoverBg: colorBgTextActive,
            },
            Menu: {
              itemPaddingInline: 8,
              itemMarginInline: 8,
              itemBorderRadius: 6,
              itemHeight: 36,
              itemBg: themeMode.itemBg,
              itemActiveBg: "transparent",
              itemSelectedColor: themeMode.itemSelectedColor,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeProvider>
  );
}
