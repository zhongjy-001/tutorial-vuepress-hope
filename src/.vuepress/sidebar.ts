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
  // "/category": null
  // "/notes/csharp/": csharpNodes,
  // "/notes/python/": pythonNodes,
});
