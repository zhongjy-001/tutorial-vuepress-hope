import { defineUserConfig } from "vuepress";
// import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "一起编程吧",
  description: "博主的编程日志、及多年编程过程中总结出来的系列中文教程",

  theme,

  head: [
    ['meta',
    {
      name:'baidu-site-verification',
      content:'codeva-XS4Bwcbz5t'
    }],
    ['script',
    {
      type:'text/javascript',
      src:'https://hm.baidu.com/hm.js?09d805ec501edb0c0cad2050e70fb9bb'
    }],
  ],

  plugins: [
    // baiduAnalyticsPlugin({id: '09d805ec501edb0c0cad2050e70fb9bb'}),
  ]

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
