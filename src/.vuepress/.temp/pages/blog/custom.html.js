import comp from "D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/custom.html.vue"
const data = JSON.parse("{\"path\":\"/blog/custom.html\",\"title\":\"自定义组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"自定义组件\",\"tags\":[\"预览\",\"组件\"],\"createTime\":\"2024/10/21 14:42:33\",\"permalink\":\"/blog/custom.html\",\"article\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.igoblogs.com/blog/custom.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"一起来编程\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"自定义组件\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"预览\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"组件\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"自定义组件\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"blogs/9.其他/custom-component.example.md\",\"excerpt\":\"\"}")
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
