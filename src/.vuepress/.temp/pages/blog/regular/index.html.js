import comp from "D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/regular/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/regular/\",\"title\":\"正则表达式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"正则表达式\",\"icon\":\"material-symbols:regular-expression\",\"permalink\":\"/blog/regular/\",\"article\":false,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"blogs/5.正则表达式/README.md\",\"excerpt\":\"\"}")
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
