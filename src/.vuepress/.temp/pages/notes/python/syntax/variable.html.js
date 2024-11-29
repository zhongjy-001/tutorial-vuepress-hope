import comp from "D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/variable.html.vue"
const data = JSON.parse("{\"path\":\"/notes/python/syntax/variable.html\",\"title\":\"定义变量\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"定义变量\",\"createTime\":\"2024/10/23 18:05:34\",\"permalink\":\"/notes/python/syntax/variable.html\",\"draft\":true,\"description\":\"变量 Python是属于弱类型的语言，变量定义时，不需要指定变量的数据类型，类型由值决定 常量 Python定义变量时也可以指定数据类型，这里指定的类型可以在后面代码中随时改变 编码规范 详情参见\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/notes/python/syntax/variable.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"文档演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"定义变量\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"变量 Python是属于弱类型的语言，变量定义时，不需要指定变量的数据类型，类型由值决定 常量 Python定义变量时也可以指定数据类型，这里指定的类型可以在后面代码中随时改变 编码规范 详情参见\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"定义变量\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"小钟同学\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"变量\",\"slug\":\"变量\",\"link\":\"#变量\",\"children\":[]},{\"level\":2,\"title\":\"常量\",\"slug\":\"常量\",\"link\":\"#常量\",\"children\":[]},{\"level\":2,\"title\":\"编码规范\",\"slug\":\"编码规范\",\"link\":\"#编码规范\",\"children\":[]}],\"readingTime\":{\"minutes\":0.75,\"words\":224},\"filePathRelative\":\"notes/python/syntax/variable.md\",\"excerpt\":\"<h2>变量</h2>\\n<ul>\\n<li>Python是属于弱类型的语言，变量定义时，不需要指定变量的数据类型，类型由值决定</li>\\n</ul>\\n<div class=\\\"language-python\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"python\\\" data-title=\\\"python\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"># 定义名为age的变量名，并将数字30赋值给变量</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"># 所以age当前的数据类型是 数字</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">age </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 30</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">print</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">type</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(age), age)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"># name 为 变量名</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"># = \\\"Jerry\\\" 赋值为 字符串 \\\"Jerry\\\"</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">name </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> \\\"Jerry\\\"</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">print</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">type</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(name), name)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"># students 为 变量名</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"># = [] 赋值为 数组</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">students </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> []</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">print</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">type</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(students), students)</span></span></code></pre>\\n</div>\",\"autoDesc\":true}")
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
