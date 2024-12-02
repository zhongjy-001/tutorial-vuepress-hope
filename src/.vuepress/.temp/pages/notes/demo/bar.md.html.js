import comp from "D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/demo/bar.md.html.vue"
const data = JSON.parse("{\"path\":\"/notes/demo/bar.md\",\"title\":\"bar\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"bar\",\"createTime\":\"2024/10/21 14:42:33\",\"permalink\":\"/notes/demo/bar.md\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.igoblogs.com/notes/demo/bar.md\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"一起来编程\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"bar\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"bar\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"小钟同学\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"notes/demo/bar.md\",\"excerpt\":\"<p><a href=\\\"/notes/demo/foo.html\\\" target=\\\"_blank\\\">foo</a></p>\\n\"}")
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
