const gray3 = "#2E2E33";
const gray4 = "#B1B3BC";

export default {
  extend: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "fira-code": ["Fira Code"],
    },
    spacing: {
      xxxs: "4px",
      xxs: "8px",
      xs: "12px",
      sm: "16px",
      md: "24px",
      lg: "32px",
      xl: "60px",
      xxl: "80px",
      xxxl: "120px",
    },
    scale: {
      101: "1.01",
    },
    padding: {
      xxxs: "4px",
      xxs: "8px",
      xs: "12px",
      sm: "16px",
      md: "20px",
      lg: "32px",
      xl: "60px",
      xxl: "80px",
      xxxl: "120px",
    },
    borderRadius: {
      xs: "0px",
      sm: "4px",
      md: "8px",
      lg: "18px",
      xl: "24px",
    },
    colors: {
      primary: "#6483F0",
      "primary-2": "#7590F2",
      complementary: "#123456",
      success: "#73CB98",
      error: "#F55656",
      avatar: "#008080", //to be updated, ping @andy
      gray: {
        white: "#F9FAFD",
        black: "#151519",
        2: "#1E1E23",
        3: gray3,
        4: gray4,
        5: "#282A30",
      },
      box: "#1D1D1D",
      resend: {
        64: "rgba(239, 245, 255, 0.69)",
      },
      notification: "rgba(115, 203, 152, 0.25)",
      black_gradient:
        "radial-gradient(50% 50% at 50% 50%, #151519 0%, rgba(100, 131, 240, 0.05) 6%, rgba(21, 21, 25, 0.00) 98.5%), var(--Gray-1, #151519)",
    },
    keyframes: {
      enterFromRight: {
        from: { opacity: "0", transform: "translateX(200px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
      enterFromLeft: {
        from: { opacity: "0", transform: "translateX(-200px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
      exitToRight: {
        from: { opacity: "1", transform: "translateX(0)" },
        to: { opacity: "0", transform: "translateX(200px)" },
      },
      exitToLeft: {
        from: { opacity: "1", transform: "translateX(0)" },
        to: { opacity: "0", transform: "translateX(-200px)" },
      },
      scaleIn: {
        from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
        to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
      },
      scaleOut: {
        from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
      },
      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      fadeOut: {
        from: { opacity: "1" },
        to: { opacity: "0" },
      },
    },
  },
  animation: {
    scaleIn: "scaleIn 200ms ease",
    scaleOut: "scaleOut 200ms ease",
    fadeIn: "fadeIn 200ms ease",
    fadeOut: "fadeOut 200ms ease",
    enterFromLeft: "enterFromLeft 250ms ease",
    enterFromRight: "enterFromRight 250ms ease",
    exitToLeft: "exitToLeft 250ms ease",
    exitToRight: "exitToRight 250ms ease",
  },
  boxShadow: {
    pricing: `0px 0px 4px 0px rgba(255, 255, 255, 0.08)`,
    purple: "0 0 40px rgba(143, 0, 210, 0.25)", // Jialin's work, but if something went wrong, ping @Hendrix
    window: `0 0 10px 10px rgba(255, 255, 255, 0.05), 0 0 0 1px ${gray3}`,
    card: `0 0 10px 2px rgba(255, 255, 255, 0.10), 0 0 0 1px, #73CB98`,
    key: `1px 1px 1px 0px black`,
    border: `inset 0 0 0 1px ${gray3}`,
    "border-l": `inset 1px 0 0 0 ${gray3}`,
    "border-b": `inset 0 -1px 0 0 ${gray3}`,
    "border-t": `inset 0 1px 0 0 ${gray3}`,
    "border-r": `inset -1px 0 0 0 ${gray3}`,
    "border-tlr": `inset 1px 0 0 0 ${gray3},inset -1px 0 0 0 ${gray3},inset 0 1px 0 0 ${gray3}`,
  },
  backgroundImage: {
    highlight:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.20) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0.04) 100%))",
  },
  screens: {
    sm: "0px",
    lg: "768px",
  },
};
