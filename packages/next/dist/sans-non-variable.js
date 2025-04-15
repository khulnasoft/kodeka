import localFont from "next/font/local";

export const KodekaSansNonVariable = localFont({
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
  variable: "--font-kodeka-sans-non-variable",
});
