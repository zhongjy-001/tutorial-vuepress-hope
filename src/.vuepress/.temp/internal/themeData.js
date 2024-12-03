export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$Lqt0K1htKVnx1M7/VDOKYOI3iOwoVL8Hk/XXZ5ieB2ztVQ2aHkVx2\"]}},\"author\":{\"name\":\"小钟同学\",\"url\":\"https://mister-hope.com\"},\"logo\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"repo\":\"zhongjy-001/tutorial-vuepress-hope\",\"docsDir\":\"src\",\"print\":true,\"copyright\":\"MIT 协议 | 版权所有 © 2019-至今 | 一起来编程\",\"footer\":\"使用 <a href=\\\"https://theme-hope.vuejs.press/zh/\\\" target=\\\"_blank\\\">VuePress Theme Hope</a> 主题 | 备案号：<a href=\\\"https://beian.miit.gov.cn/\\\" target=\\\"_blank\\\">渝ICP备2024044330号-1</a>\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间轴\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"星标\",\"empty\":\"$text 为空\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[{\"text\":\"首页\",\"icon\":\"logos:google-home\",\"link\":\"/\"},{\"text\":\"博客列表\",\"icon\":\"logos:blogger\",\"link\":\"/blogs/\"},{\"text\":\"博主介绍\",\"icon\":\"icon-park:user\",\"link\":\"portfolio.md\"}],\"sidebar\":{}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
