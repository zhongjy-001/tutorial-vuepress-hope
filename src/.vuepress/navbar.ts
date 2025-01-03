import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "ion:home",
    link: "/",
  },
  {
    text: "博客列表",
    icon: "fa-solid:blog",
    link: "/blogs/",
  },
  // {
  //   text: "C#教程",
  //   icon: "devicon-plain:csharp",
  //   prefix: "csharp/",
  //   link: "/notes/csharp/",
  // },
  // {
  //   text: "Python教程",
  //   icon: "codicon:python",
  //   prefix: "python/",
  //   link: "/notes/python/",
  // },
  {
    text: "博主档案",
    icon: "si:user-fill",
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
