import comp from "D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/vue/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/vue/\",\"title\":\"VUE\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"VUE\",\"icon\":\"logos:vue\",\"permalink\":\"/blog/vue/\",\"article\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.igoblogs.com/blog/vue/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"一起来编程\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"VUE\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"VUE\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"blogs/3.vue/README.md\",\"excerpt\":\"\"}")
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
