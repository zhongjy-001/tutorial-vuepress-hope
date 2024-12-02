import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "logos:google-home",
    link: "/",
  },
  {
    text: "博客列表",
    icon: "logos:blogger",
    link: "/blog/",
  },
  {
    text: "C#教程",
    icon: "devicon:csharp",
    prefix: "csharp/",
    link: "/notes/csharp/",
  },
  {
    text: "Python教程",
    icon: "logos:python",
    prefix: "python/",
    link: "/notes/python/",
  },
  {
    text: "博主介绍",
    icon: "icon-park:user",
    link: "portfolio.md",
  },
  // {
  //   text: "指南",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
]);
