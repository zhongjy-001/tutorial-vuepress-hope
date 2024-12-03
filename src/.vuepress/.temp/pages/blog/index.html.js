import comp from "D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/\",\"title\":\"博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客\",\"icon\":\"logos:blogger\",\"index\":false,\"permalink\":\"/blog/\",\"dir\":{\"order\":5},\"article\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.igoblogs.com/blog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"一起来编程\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"博客\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"blogs/README.md\",\"excerpt\":\"\"}")
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
