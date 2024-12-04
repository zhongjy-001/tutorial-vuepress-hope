import comp from "D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/vue/uniapp/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/vue/uniapp/\",\"title\":\"uni-app\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"uni-app\",\"permalink\":\"/blog/vue/uniapp/\",\"article\":false,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"blogs/3.vue/uni-app/README.md\",\"excerpt\":\"\"}")
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
