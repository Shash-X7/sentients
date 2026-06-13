export type TimeMode = "dawn" | "noon" | "dusk" | "twilight" | "midnight";

export interface ThemeConfig {
  mode: TimeMode;
  label: string;
  hours: [number, number]; // [start, end)
  dot: string;
  // CSS custom property values
  bgPrimary: string;
  bgSecondary: string;
  bgGradient: string;
  inkPrimary: string;
  inkSecondary: string;
  inkTertiary: string;
  border: string;
  borderStrong: string;
  accentPrimary: string;
  accentSecondary: string;
  accentGradient: string;
  navBg: string;
  cardBg: string;
  pillBg: string;
  pillText: string;
  pillBorder: string;
  ctaBg: string;
  ctaText: string;
}

export const THEMES: Record<TimeMode, ThemeConfig> = {
  dawn: {
    mode: "dawn", label: "Dawn", hours: [5, 9], dot: "#E8923A",
    bgPrimary:      "#FBF7F2",
    bgSecondary:    "#FDF0DC",
    bgGradient:     "linear-gradient(160deg,#FBF7F2 0%,#FDF0DC 60%,#FDDDB8 100%)",
    inkPrimary:     "#2C1A0A",
    inkSecondary:   "#6B4A2A",
    inkTertiary:    "#9A7050",
    border:         "#EDE4D8",
    borderStrong:   "#C9A070",
    accentPrimary:  "#C46D2A",
    accentSecondary:"#E8923A",
    accentGradient: "linear-gradient(120deg,#C46D2A,#E8923A)",
    navBg:          "#FBF7F2",
    cardBg:         "#FDF0DC",
    pillBg:         "#FDF0E0",
    pillText:       "#A0612A",
    pillBorder:     "#E8C9A0",
    ctaBg:          "#2C1A0A",
    ctaText:        "#FBF7F2",
  },
  noon: {
    mode: "noon", label: "Noon", hours: [9, 16], dot: "#2563EB",
    bgPrimary:      "#FFFFFF",
    bgSecondary:    "#FAFAFA",
    bgGradient:     "linear-gradient(160deg,#FFFFFF 0%,#F8FAFF 60%,#EEF4FF 100%)",
    inkPrimary:     "#111111",
    inkSecondary:   "#555555",
    inkTertiary:    "#888888",
    border:         "#E5E5E5",
    borderStrong:   "#CCCCCC",
    accentPrimary:  "#2563EB",
    accentSecondary:"#7C3AED",
    accentGradient: "linear-gradient(120deg,#2563EB,#7C3AED)",
    navBg:          "#FFFFFF",
    cardBg:         "#FAFAFA",
    pillBg:         "#EEF4FF",
    pillText:       "#1A4A9A",
    pillBorder:     "#C0D8FF",
    ctaBg:          "#111111",
    ctaText:        "#FFFFFF",
  },
  dusk: {
    mode: "dusk", label: "Dusk", hours: [16, 19], dot: "#D4537E",
    bgPrimary:      "#1A1018",
    bgSecondary:    "#22102A",
    bgGradient:     "linear-gradient(160deg,#1A1018 0%,#22102A 50%,#2E1020 100%)",
    inkPrimary:     "#F4E0EC",
    inkSecondary:   "#B88AA8",
    inkTertiary:    "#9A6080",
    border:         "#3A2535",
    borderStrong:   "#4A2038",
    accentPrimary:  "#E8923A",
    accentSecondary:"#D4537E",
    accentGradient: "linear-gradient(120deg,#E8923A,#D4537E)",
    navBg:          "#1A1018",
    cardBg:         "#22102A",
    pillBg:         "#2D1525",
    pillText:       "#E8A0C8",
    pillBorder:     "#6B3055",
    ctaBg:          "#D4537E",
    ctaText:        "#FFFFFF",
  },
  twilight: {
    mode: "twilight", label: "Twilight", hours: [19, 22], dot: "#7C3AED",
    bgPrimary:      "#0E0E1A",
    bgSecondary:    "#12103A",
    bgGradient:     "linear-gradient(160deg,#0E0E1A 0%,#12103A 50%,#18103A 100%)",
    inkPrimary:     "#E8E8FF",
    inkSecondary:   "#9898C8",
    inkTertiary:    "#6868A8",
    border:         "#252540",
    borderStrong:   "#2E2E60",
    accentPrimary:  "#7C3AED",
    accentSecondary:"#4A90E2",
    accentGradient: "linear-gradient(120deg,#7C3AED,#4A90E2)",
    navBg:          "#0E0E1A",
    cardBg:         "#12103A",
    pillBg:         "#18183A",
    pillText:       "#9898E0",
    pillBorder:     "#4040A0",
    ctaBg:          "#7C3AED",
    ctaText:        "#FFFFFF",
  },
  midnight: {
    mode: "midnight", label: "Midnight", hours: [22, 5], dot: "#3838A0",
    bgPrimary:      "#060608",
    bgSecondary:    "#08081A",
    bgGradient:     "linear-gradient(160deg,#060608 0%,#08081A 60%,#0A0818 100%)",
    inkPrimary:     "#C0C0E8",
    inkSecondary:   "#606080",
    inkTertiary:    "#383858",
    border:         "#141420",
    borderStrong:   "#282840",
    accentPrimary:  "#4040A0",
    accentSecondary:"#5050C0",
    accentGradient: "linear-gradient(120deg,#4040A0,#5050C0)",
    navBg:          "#060608",
    cardBg:         "#0E0E18",
    pillBg:         "#0E0E18",
    pillText:       "#6060A0",
    pillBorder:     "#282840",
    ctaBg:          "#1A1A3A",
    ctaText:        "#8080C0",
  },
};

export function getThemeForHour(hour: number): TimeMode {
  if (hour >= 5  && hour < 9)  return "dawn";
  if (hour >= 9  && hour < 16) return "noon";
  if (hour >= 16 && hour < 19) return "dusk";
  if (hour >= 19 && hour < 22) return "twilight";
  return "midnight";
}

export function getCurrentTheme(): TimeMode {
  const hour = new Date().getHours();
  return getThemeForHour(hour);
}
