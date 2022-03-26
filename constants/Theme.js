import { Dimensions, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");
const statusbarHeight = StatusBar.currentHeight;

export const SIZES = {
  width,
  height,
  statusbar: statusbarHeight,

  // global sizes
  font: 14,
  radius: 15,
  padding: 10,

  // fontsize
  h1: 30,
  h2: 22,
};

export const COLORS = {
  white: "#fff",
  black: "#000",
  blue: "#5D5FEE",
  grey: "#BABBC3",
  light: "#F3F4FB",
  darkBlue: "#7978B5",
  red: "red",
};

export const IMAGES = {};
export const ICONS = {};

const THEME = { SIZES, COLORS, IMAGES, ICONS };
export default THEME;
