import { arraySidebar, sidebar } from "vuepress-theme-hope";

var csharpNodes = arraySidebar([
  "",
  "portfolio",
  {
    text: "案例",
    icon: "laptop-code",
    prefix: "demo/",
    link: "demo/",
    children: "structure",
  },
  {
    text: "文档",
    icon: "book",
    prefix: "guide/",
    children: "structure",
  },
  {
    text: "幻灯片",
    icon: "person-chalkboard",
    link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
  },
])

var pythonNodes = arraySidebar([
  {
    text: "基础语法",
    icon: "laptop-code",
    prefix: "demo/",
    link: "demo/",
    children: "structure",
  },
  {
    text: "文档",
    icon: "book",
    prefix: "guide/",
    children: "structure",
  },
])

export default sidebar({
  "/blog/": false,
  "/blogs/": false,
  "/category/": false,
  "/tag/": false,
  "/star/": false,
  "/timeline/": false,
  "/portfolio.html": false,
  "/404.html": false,
  "/notes/": false,
  "/notes/csharp/": csharpNodes,
  "/notes/python/": pythonNodes,
});
