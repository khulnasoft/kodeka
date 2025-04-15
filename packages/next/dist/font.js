import localFont from "next/font/local";

export const KodekaSans = localFont({
  src: [
    {
      path: "./fonts/kodeka-sans/Kodeka-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-sans/Kodeka-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-sans/Kodeka-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-sans/Kodeka-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-sans/Kodeka-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-sans/Kodeka-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-sans/Kodeka-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-sans/Kodeka-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-sans/Kodeka-UltraBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-kodeka-sans",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Inter",
    "Segoe UI",
    "Roboto",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
});

export const KodekaMono = localFont({
  src: [
    {
      path: "./fonts/kodeka-mono/KodekaMono-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-mono/KodekaMono-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-mono/KodekaMono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-mono/KodekaMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-mono/KodekaMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-mono/KodekaMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-mono/KodekaMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-mono/KodekaMono-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/kodeka-mono/KodekaMono-UltraBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-kodeka-mono",
  adjustFontFallback: false,
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Roboto Mono",
    "Menlo",
    "Monaco",
    "Liberation Mono",
    "DejaVu Sans Mono",
    "Courier New",
    "monospace",
  ],
});
