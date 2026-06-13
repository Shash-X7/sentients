export type TimeMode = "dawn" | "noon" | "dusk" | "twilight" | "midnight";

export interface ThemeConfig {
  mode: TimeMode;
  label: string;
  hours: [number, number];
  dot: string;
  bgPrimary: string;
  bgSecondary: string;
  heroGradient: string;   // hero section background — no image
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
  // secondary button (outline style) colours
  outlineBorder: string;
  outlineText: string;
}

export const THEMES: Record<TimeMode, ThemeConfig> = {
  dawn: {
    mode: "dawn", label: "Dawn", hours: [5, 9], dot: "#E8923A",
    bgPrimary:      "#FBF7F2",
    bgSecondary:    "#FDF0DC",
    heroGradient:   "linear-gradient(160deg,#FBF7F2 0%,#FDF0DC 55%,#FDDDB8 100%)",
    inkPrimary:     "#1E0E04",   // very dark espresso — max contrast on ivory
    inkSecondary:   "#5C3A18",   // warm dark brown — readable
    inkTertiary:    "#8A5C30",   // mid amber-brown — labels
    border:         "#EDE4D8",
    borderStrong:   "#C9A070",
    accentPrimary:  "#B85A1A",
    accentSecondary:"#E8923A",
    accentGradient: "linear-gradient(120deg,#B85A1A,#E8923A)",
    navBg:          "#FBF7F2",
    cardBg:         "#FDF0DC",
    pillBg:         "#FDE8C8",
    pillText:       "#7A3808",
    pillBorder:     "#D8A060",
    ctaBg:          "#1E0E04",
    ctaText:        "#FBF7F2",
    outlineBorder:  "#C9A070",
    outlineText:    "#1E0E04",
  },
  noon: {
    mode: "noon", label: "Noon", hours: [9, 16], dot: "#2563EB",
    bgPrimary:      "#FFFFFF",
    bgSecondary:    "#FAFAFA",
    heroGradient:   "linear-gradient(160deg,#FFFFFF 0%,#F5F8FF 55%,#EBF0FF 100%)",
    inkPrimary:     "#0A0A0A",
    inkSecondary:   "#3A3A3A",   // bumped from #555 — more readable
    inkTertiary:    "#666666",   // bumped from #888
    border:         "#E0E0E0",
    borderStrong:   "#BBBBBB",
    accentPrimary:  "#1D55D4",
    accentSecondary:"#6B2FD4",
    accentGradient: "linear-gradient(120deg,#1D55D4,#6B2FD4)",
    navBg:          "#FFFFFF",
    cardBg:         "#F5F5F5",
    pillBg:         "#E8F0FE",
    pillText:       "#1238A0",
    pillBorder:     "#A8C4F8",
    ctaBg:          "#0A0A0A",
    ctaText:        "#FFFFFF",
    outlineBorder:  "#BBBBBB",
    outlineText:    "#0A0A0A",
  },
  dusk: {
    mode: "dusk", label: "Dusk", hours: [16, 19], dot: "#E05585",
    bgPrimary:      "#180D16",
    bgSecondary:    "#20102A",
    heroGradient:   "linear-gradient(160deg,#180D16 0%,#20102A 50%,#2C0E1E 100%)",
    inkPrimary:     "#F8E8F2",   // near-white rose — strong contrast
    inkSecondary:   "#D4A8C4",   // light mauve — clearly readable
    inkTertiary:    "#A87898",   // mid mauve — labels, readable
    border:         "#3C2238",
    borderStrong:   "#5A2848",
    accentPrimary:  "#F07040",
    accentSecondary:"#E05585",
    accentGradient: "linear-gradient(120deg,#F07040,#E05585)",
    navBg:          "#180D16",
    cardBg:         "#20102A",
    pillBg:         "#2A1030",
    pillText:       "#F0A0D0",
    pillBorder:     "#6A2858",
    ctaBg:          "#E05585",
    ctaText:        "#FFFFFF",
    outlineBorder:  "#5A2848",
    outlineText:    "#F8E8F2",
  },
  twilight: {
    mode: "twilight", label: "Twilight", hours: [19, 22], dot: "#8B5CF6",
    bgPrimary:      "#0C0C18",
    bgSecondary:    "#10103A",
    heroGradient:   "linear-gradient(160deg,#0C0C18 0%,#10103A 50%,#160E38 100%)",
    inkPrimary:     "#EEEEFF",   // bright lavender-white — strong contrast
    inkSecondary:   "#B0B0E0",   // light periwinkle — clearly readable
    inkTertiary:    "#7878B0",   // mid periwinkle — bumped from #6868A8
    border:         "#222248",
    borderStrong:   "#303070",
    accentPrimary:  "#8B5CF6",
    accentSecondary:"#60A5FA",
    accentGradient: "linear-gradient(120deg,#8B5CF6,#60A5FA)",
    navBg:          "#0C0C18",
    cardBg:         "#10103A",
    pillBg:         "#18184A",
    pillText:       "#A0A0F0",
    pillBorder:     "#4040B0",
    ctaBg:          "#8B5CF6",
    ctaText:        "#FFFFFF",
    outlineBorder:  "#303070",
    outlineText:    "#EEEEFF",
  },
  midnight: {
    mode: "midnight", label: "Midnight", hours: [22, 5], dot: "#5050C0",
    bgPrimary:      "#050508",
    bgSecondary:    "#080818",
    heroGradient:   "linear-gradient(160deg,#050508 0%,#08081A 60%,#090815 100%)",
    inkPrimary:     "#D8D8F8",   // bright ash-blue — was #C0C0E8, now brighter
    inkSecondary:   "#9090C0",   // was #606080 — doubled the brightness
    inkTertiary:    "#6060A0",   // was #383858 — much more visible
    border:         "#181830",   // was #141420 — slightly more visible
    borderStrong:   "#303060",   // was #282840 — more visible
    accentPrimary:  "#7070D0",   // was #4040A0 — brighter, readable
    accentSecondary:"#8080E0",   // was #5050C0 — brighter
    accentGradient: "linear-gradient(120deg,#7070D0,#8080E0)",
    navBg:          "#050508",
    cardBg:         "#0C0C20",
    pillBg:         "#10102A",
    pillText:       "#9090E0",   // was #6060A0 — much more visible
    pillBorder:     "#303060",
    ctaBg:          "#7070D0",   // was #1A1A3A — now an actual visible button
    ctaText:        "#FFFFFF",   // was #8080C0 — now pure white
    outlineBorder:  "#303060",
    outlineText:    "#D8D8F8",
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
  return getThemeForHour(new Date().getHours());
}
