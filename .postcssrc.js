// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-preset-env": {},
    "postcss-px-to-viewport": {
      unitToConvert: "px", //(String) 需要转换的单位，默认为"px"
      viewportWidth: 750, // (Number) 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // (Number) 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // (Number) 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: "vw", // (String) 指定需要转换成的视窗单位，建议使用vw
      // fontViewportUnit: "vw", //(String) 字体使用的视口单位
      selectorBlackList: [".ignore", ".hairlines", "van"], // (Array) 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // (Number) 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // (Boolean) 允许在媒体查询中转换`px`
    },
    cssnano: {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
};
