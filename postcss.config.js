const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
module.exports = {
    plugins: [
        autoprefixer(),
        postcssPresetEnv({
            stage: 0,
        }),
    ],
};