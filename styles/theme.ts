import { DefaultTheme } from "styled-components";

const getMediaQuery = (screenSize: number): string => {
  return `@media screen and (min-width: ${screenSize}px)`;
};

const breakpoints = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

export const theme: DefaultTheme = {
  breakpoints,
  media: {
    xSmall: getMediaQuery(breakpoints.xs),
    small: getMediaQuery(breakpoints.sm),
    medium: getMediaQuery(breakpoints.md),
    large: getMediaQuery(breakpoints.lg),
    xLarge: getMediaQuery(breakpoints.xl),
    xxLarge: getMediaQuery(breakpoints.xxl),
  },
};
