let postcss = require("postcss");

module.exports = {
  plugins: [
    {
      postcssPlugin: "grouped",
      Once(root, { result }) {
        return postcss([
          require("postcss-import"),
          require("postcss-mixins"),
          require("postcss-simple-vars"),
        ]).process(root, result.opts);
      },
    },
    require("postcss-nested"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
