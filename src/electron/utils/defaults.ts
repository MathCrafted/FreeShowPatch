export const defaultSettings = {
  initialized: false,
  outLocked: false,
  openedFolders: [],
  activeProject: null,
  categories: {
    song: { name: "category.song", icon: "song", default: true },
    info: { name: "category.info", icon: "info", default: true },
    presentation: { name: "category.presentation", icon: "presentation", default: true },
  },
  drawSettings: {
    focus: {},
    pointer: {},
    fill: {},
    paint: {},
  },
  overlayCategories: {
    offers: { name: "category.offers", icon: "money", default: true },
    notice: { name: "category.notice", icon: "notice", default: true },
    visuals: { name: "category.visuals", icon: "star", default: true },
  },
  templateCategories: {
    song: { name: "category.song", icon: "song", default: true },
  },
  mediaFolders: {},
  audioFolders: {},
  webFavorites: {},
  playerVideos: {
    oceans: { name: "Oceans - Hillsong UNITED", type: "youtube", id: "dy9nwe9_xzw" },
    chosen: { name: "The Chosen Trailer", type: "youtube", id: "X-AJdKty74M" },
  },
  resized: {
    leftPanel: 300,
    rightPanel: 300,
    leftPanelDrawer: 300,
    rightPanelDrawer: 300,
    drawer: 200,
  },
  slidesOptions: { columns: 4, grid: true },
  mediaOptions: { columns: 4, grid: true },
  drawerTabsData: {
    shows: { enabled: true, activeSubTab: null },
    media: { enabled: true, activeSubTab: null },
    overlays: { enabled: true, activeSubTab: null },
    templates: { enabled: true, activeSubTab: null },
    audio: { enabled: true, activeSubTab: null },
    scripture: { enabled: true, activeSubTab: "de4e12af7f28f599-02" },
    timers: { enabled: true, activeSubTab: null },
    player: { enabled: true, activeSubTab: null },
    web: { enabled: true, activeSubTab: null },
    live: { enabled: true, activeSubTab: null },
  },
  drawer: { height: 300, stored: null },
  language: "en",
  labelsDisabled: false,
  groupNumbers: false,
  fullColors: true,
  displayMetadata: "never",
  defaultProjectName: "date",
  videoExtensions: ["mp4", "mov", "wmv", "avi", "avchd", "flv", "mkv", "webm", "mpeg", "m4v"],
  imageExtensions: ["tif", "tiff", "bmp", "jpg", "jpeg", "gif", "png", "eps", "jfif"],
  theme: "default",
  groupCount: true,
  groups: {
    intro: { name: "intro", default: true, color: "#f5255e" },
    verse: { name: "verse", default: true, color: "#f52598" },
    pre_chorus: { name: "pre_chorus", default: true, color: "#f525d2" },
    chorus: { name: "chorus", default: true, color: "#d525f5" },
    break: { name: "break", default: true, color: "#a525f5" },
    tag: { name: "tag", default: true, color: "#8825f5" },
    bridge: { name: "bridge", default: true, color: "#7525f5" },
    outro: { name: "outro", default: true, color: "#5825f5" },
  },
  screen: {
    resolution: { width: 1920, height: 1080 },
  },
  os: { platform: "", name: "Computer" },
}

export const defaultThemes: any = {
  default: {
    name: "default",
    default: true,
    font: {
      family: "sans-serif",
      size: "1em",
    },
    colors: {
      primary: "#2d313b",
      "primary-lighter": "#41444c",
      "primary-darker": "#202129",
      "primary-darkest": "#191923",
      text: "#f0f0ff",
      textInvert: "#131313",
      "secondary-text": "#f0f0ff",
      secondary: "#e6349c", // #d02789
      "secondary-opacity": "rgba(230, 52, 156, 0.5)",
      hover: "rgb(255 255 255 / 0.05)",
      focus: "rgb(255 255 255 / 0.1)",
    },
  },
  dark: {
    name: "dark",
    default: true,
    font: {
      family: "monospace",
      size: "1.1em",
    },
    colors: {
      primary: "#2d313b",
      "primary-lighter": "#41444c",
      "primary-darker": "#202129",
      "primary-darkest": "#191923",
      text: "#f0f0ff",
      textInvert: "#131313",
      "secondary-text": "#f0f0ff",
      secondary: "rgb(230 73 52)",
      "secondary-opacity": "rgb(230 73 52 / 0.5)",
      hover: "rgb(255 255 255 / 0.05)",
      focus: "rgb(255 255 255 / 0.1)",
    },
  },
  light: {
    name: "light",
    default: true,
    font: {
      family: "sans-serif",
      size: "1em",
    },
    colors: {
      primary: "#EFF2F6",
      "primary-lighter": "#E8E8E8",
      "primary-darker": "#CDD0D5",
      "primary-darkest": "#A1A4AA",
      text: "#333748",
      textInvert: "#f0f0ff",
      "secondary-text": "#131313",
      secondary: "#e6349c",
      "secondary-opacity": "rgb(230 52 156 / 0.5)",
      hover: "rgb(0 0 0 / 0.05)",
      focus: "rgb(0 0 0 / 0.1)",
    },
  },
  white: {
    name: "white",
    default: true,
    font: {
      family: "Trebuchet MS",
      size: "1em",
    },
    colors: {
      primary: "#2d313b",
      "primary-lighter": "#41444c",
      "primary-darker": "#202129",
      "primary-darkest": "#191923",
      text: "#f0f0ff",
      textInvert: "#131313",
      "secondary-text": "#ffffff",
      secondary: "#ffffff",
      "secondary-opacity": "rgba(255, 255, 255, 0.5)",
      hover: "rgb(255 255 255 / 0.05)",
      focus: "rgb(255 255 255 / 0.1)",
    },
  },
  black: {
    name: "black",
    default: true,
    font: {
      family: "sans-serif",
      size: "1em",
    },
    colors: {
      primary: "#202020",
      "primary-lighter": "#303030",
      "primary-darker": "#101010",
      "primary-darkest": "#000000",
      text: "#cccccc",
      textInvert: "#131313",
      "secondary-text": "#eeeeee",
      secondary: "#00ffbe",
      "secondary-opacity": "rgb(0 255 190 / 0.5)",
      hover: "rgb(255 255 255 / 0.2)",
      focus: "rgb(255 255 255 / 0.3)",
    },
  },
  terminal: {
    name: "Terminal",
    font: {
      family: "monospace",
      size: "1em",
    },
    colors: {
      primary: "#202020",
      "primary-lighter": "#303030",
      "primary-darker": "#101010",
      "primary-darkest": "#000000",
      text: "#cccccc",
      textInvert: "#131313",
      "secondary-text": "#F1F1F1",
      secondary: "#00FF00",
      "secondary-opacity": "rgb(58 210 255 / 0.5)",
      hover: "rgb(255 255 255 / 0.2)",
      focus: "rgb(255 255 255 / 0.3)",
    },
  },
}