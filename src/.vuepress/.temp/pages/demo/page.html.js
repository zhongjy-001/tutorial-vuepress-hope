import comp from "D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/demo/page.html.vue"
const data = JSON.parse("{\"path\":\"/demo/page.html\",\"title\":\"页面配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"页面配置\",\"head\":[[\"meta\",{\"name\":\"keywords\",\"content\":\"方括号语法\"}],[\"meta\",{\"name\":\"description\",\"content\":\"descriptionsdfcadf发\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.igoblogs.com/demo/page.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"一起来编程\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"页面配置\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Ms.Hope\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"页面配置\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"使用指南\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-01-01T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"页面配置\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-01-01T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Ms.Hope\\\"}]}\"]],\"icon\":\"file\",\"order\":3,\"author\":\"Ms.Hope\",\"date\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"使用指南\"],\"tag\":[\"页面配置\",\"使用指南\"],\"sticky\":true,\"star\":true,\"footer\":\"这是测试显示的页脚\",\"copyright\":\"无版权\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"页面标题\",\"slug\":\"页面标题\",\"link\":\"#页面标题\",\"children\":[]},{\"level\":2,\"title\":\"页面信息\",\"slug\":\"页面信息\",\"link\":\"#页面信息\",\"children\":[]},{\"level\":2,\"title\":\"页面内容\",\"slug\":\"页面内容\",\"link\":\"#页面内容\",\"children\":[]},{\"level\":2,\"title\":\"组件\",\"slug\":\"组件\",\"link\":\"#组件\",\"children\":[]}],\"readingTime\":{\"minutes\":1.77,\"words\":530},\"filePathRelative\":\"demo/page.md\",\"localizedDate\":\"2020年1月1日\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
