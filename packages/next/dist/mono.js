import localFont from "next/font/local";

export const KodekaMono = localFont({
  src: "./fonts/kodeka-mono/KodekaMono-Variable.woff2",
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
  weight: "100 900",
});
