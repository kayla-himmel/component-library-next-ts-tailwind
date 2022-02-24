const convertPixelsToRem = require('./utils/helper');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  content: [path.join(__dirname, "./src/**/*.(js|jsx|ts|tsx)")],
  theme: {
    extend: {},
    spacing: {
      '4': convertPixelsToRem(4, 16),
      '2': '12px',
      '3': '16px',
      '5': '32px',
      '6': '48px',
    },
  },
  plugins: [],
};
