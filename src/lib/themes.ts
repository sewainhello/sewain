// All 32 DaisyUI themes
export const DAISY_THEMES = [
  // Light themes
  "light",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "retro",
  "cyberpunk",
  "valentine",
  "garden",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "cmyk",
  "autumn",
  "acid",
  "lemonade",
  "winter",
  "nord",
  // Dark themes
  "dark",
  "synthwave",
  "halloween",
  "forest",
  "black",
  "luxury",
  "dracula",
  "night",
  "coffee",
  "dim",
  "sunset",
  "business",
] as const;

export type DaisyTheme = (typeof DAISY_THEMES)[number];

// Dark themes for system preference mapping
export const DARK_THEMES: DaisyTheme[] = [
  "dark",
  "synthwave",
  "halloween",
  "forest",
  "black",
  "luxury",
  "dracula",
  "night",
  "coffee",
  "dim",
  "sunset",
  "business",
];

export const LIGHT_THEMES: DaisyTheme[] = DAISY_THEMES.filter(
  (t) => !DARK_THEMES.includes(t)
);

// Default themes for system preference
export const DEFAULT_LIGHT_THEME: DaisyTheme = "light";
export const DEFAULT_DARK_THEME: DaisyTheme = "dark";