const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".flex-col": {
      display: "flex",
      flexDirection: "column",
    },
    ".flex-row": {
      display: "flex",
      flexDirection: "row",
    },
  };

  addUtilities(newUtilities, ["responsive", "hover"]);
});
