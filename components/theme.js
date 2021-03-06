const pinky = {
  base: "#D41A44",
  accent: "139A6E",
};

const blue = {
  base100: "#edf4fd",
  base900: "#0b2c51",
  base: "#2b7cd8",
  accent: "#1CD9A0",
};

export default {
  colors: {
    background: "#fff",
    base100: "#edf4fd",
    base200: "#d7e8fe",
    base300: "#a5c9f3",
    base400: "#97c6fc",
    base: "#2b7cd8",
    base600: "#2469b7",
    base700: "#325b8b",
    base800: "#0f417b",
    base900: "#0b2c51",
    grey100: "#f9fafb",
    grey200: "#f1f2f4",
    grey300: "#dde0e4",
    grey400: "#cdd1d5",
    grey: "#a4acb7",
    grey600: "#8a9199",
    grey700: "#62686f",
    grey800: "#454a4f",
    grey900: "#2a2d32",
    accent: "#1CD9A0",
  },
  fonts: {
    body: "Ubuntu, sans-serif",
    heading: "'Open Sans', sans-serif",
  },
  fontSizes: [10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    thin: 300,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  space: [
    0,
    4,
    8,
    12,
    16,
    24,
    32,
    48,
    64,
    96,
    128,
    192,
    256,
    384,
    512,
    640,
    768,
  ],
  sizes: [
    0,
    4,
    8,
    12,
    16,
    24,
    32,
    48,
    64,
    96,
    128,
    192,
    256,
    384,
    512,
    640,
    768,
  ],
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, .125)",
  },

  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  variants: {
    avatar: {
      width: "avatar",
      height: "avatar",
      borderRadius: "circle",
    },
    card: {
      p: 2,
      bg: "background",
      boxShadow: "card",
    },
    link: {
      color: "primary",
    },
    nav: {
      fontSize: 1,
      fontWeight: "bold",
      display: "inline-block",
      p: 2,
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus,.active": {
        color: "primary",
      },
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: "bold",
      color: "white",
      bg: "primary",
      marginX: 3,
      paddingX: 5,
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 2px",
    },
    secondary: {
      variant: "buttons.primary",
      color: "grey800",
      bg: "transparent",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
  },
  forms: {
    input: {
      color: "grey900",
      background: "white",
      border: "3px solid transparent",
      height: 7,
      fontFamily: "body",
      paddingX: 4,
      boxSizing: "border-box",
      ":focus": {
        outline: "none",
        borderColor: "grey300",
      },
    },
    select: {
      color: "grey900",
      background: "white",
      border: "3px solid transparent",
      height: 7,
      fontFamily: "body",
      paddingX: 4,
      ":focus": {
        outline: "none",
        borderColor: "grey300",
      },
    },
    textarea: {
      background: "white",
      border: "none",
      paddingX: 4,
    },
    label: {
      pb: 3,
      color: "grey900",
      fontSize: 2,
      fontWeight: "thin",
    },
    radio: {},
    checkbox: {},
  },
};
