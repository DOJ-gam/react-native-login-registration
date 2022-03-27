import { Dimensions, StatusBar } from "react-native";
import DOJ from "../assets/images/pro.jpeg";

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
  h1: 40,
  h2: 30,
  h3: 22,
  h4: 18,
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

export const IMAGES = { doj: DOJ };
export const ICONS = {};

const THEME = { SIZES, COLORS, IMAGES, ICONS };
export default THEME;
