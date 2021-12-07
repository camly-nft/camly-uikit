import { darkColors, lightColors } from "../../theme/colors";
import { CamlyToggleTheme } from "./types";

export const light: CamlyToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: CamlyToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
