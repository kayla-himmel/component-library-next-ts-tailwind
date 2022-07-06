// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  content: [path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)')],
  theme: {
    extend: {
      rotate: {
        270: '270deg',
      },
      backgroundImage: {
        'bg-img-carousel-pip-filled': "url('/public/assets/iconCircleFilled.svg')",
        'bg-img-carousel-pip-unfilled': "url('/public/assets/iconCircleUnfilled.svg')",
      },
    },
  },
  plugins: [],
};
