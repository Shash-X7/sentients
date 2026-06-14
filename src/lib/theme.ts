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
    mode: "dawn", label: "Dawn", hours: [5, 9], dot: "#F59E0B",
    bgPrimary:      "#FFF3D0",   // rich golden cream
    bgSecondary:    "#FFE8A0",   // deep amber secondary
    heroGradient:   "linear-gradient(160deg,#FFD060 0%,#FFC030 40%,#FFB020 100%)",
    inkPrimary:     "#1A0A00",
    inkSecondary:   "#4A2000",
    inkTertiary:    "#7C4010",
    border:         "#FFD070",
    borderStrong:   "#F0A020",
    accentPrimary:  "#D97706",
    accentSecondary:"#F59E0B",
    accentGradient: "linear-gradient(120deg,#D97706,#F59E0B)",
    navBg:          "#FFD060",   // full golden nav base — the hero orange
    cardBg:         "#FFE8A0",
    pillBg:         "#FFD060",
    pillText:       "#78350F",
    pillBorder:     "#F0A020",
    ctaBg:          "#1A0A00",
    ctaText:        "#FFF3D0",
    outlineBorder:  "#F0A020",
    outlineText:    "#1A0A00",
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
    mode: "midnight", label: "Midnight", hours: [22, 5], dot: "#818CF8",
    bgPrimary:      "#050508",
    bgSecondary:    "#08091A",
    heroGradient:   "linear-gradient(160deg,#050508 0%,#07081A 60%,#080715 100%)",
    inkPrimary:     "#F4F4FF",   // near-pure white — maximum contrast
    inkSecondary:   "#C8C8F0",   // bright lavender-white — clearly readable
    inkTertiary:    "#8888CC",   // visible mid-tone — not muddy
    border:         "#1E1E3C",
    borderStrong:   "#3C3C70",
    accentPrimary:  "#818CF8",   // indigo-500 equivalent — vivid
    accentSecondary:"#A78BFA",   // violet-400 — vivid
    accentGradient: "linear-gradient(120deg,#818CF8,#A78BFA)",
    navBg:          "#050508",
    cardBg:         "#0D0D22",
    pillBg:         "#141430",
    pillText:       "#A5B4FC",   // indigo-300 — bright and vivid
    pillBorder:     "#3730A3",
    ctaBg:          "#818CF8",   // vivid indigo button
    ctaText:        "#FFFFFF",
    outlineBorder:  "#3C3C70",
    outlineText:    "#F4F4FF",
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
