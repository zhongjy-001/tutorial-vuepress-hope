export const redirects = JSON.parse("{\"/blogs/\":\"/blog/\",\"/blogs/1.python/20241123-how-selenium.html\":\"/blog/python/how-selenium.html\",\"/blogs/1.python/\":\"/blog/python/\",\"/blogs/2.golang/\":\"/blog/golang/\",\"/blogs/3.vue/\":\"/blog/vue/\",\"/blogs/4.c#/20241029-how-unittest.html\":\"/blog/csharp/how-unittest.html\",\"/blogs/4.c#/\":\"/blog/csharp/\",\"/blogs/5.%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/\":\"/blog/reg/\",\"/blogs/6.git/\":\"/blog/git/\",\"/blogs/7.html&css/\":\"/blog/html/\",\"/blogs/9.%E5%85%B6%E4%BB%96/\":\"/blog/other/\",\"/notes/csharp/2.2.try...catch%E8%AF%AD%E6%B3%95.html\":\"/notes/csharp/try-catch.html\",\"/notes/python/sample/3.Demo%E5%AE%9E%E4%BE%8B.html\":\"/notes/python/sample/demo.html\",\"/notes/python/syntax/data-types/dict.html\":\"/notes/python/syntax/data-type/dict.html\",\"/notes/python/syntax/data-types/list.html\":\"/notes/python/syntax/data-type/list.html\",\"/notes/python/syntax/data-types/number.html\":\"/notes/python/syntax/data-type/number.html\",\"/notes/python/syntax/data-types/\":\"/notes/python/syntax/data-type/\",\"/notes/python/syntax/data-types/str.html\":\"/notes/python/syntax/data-type/str.html\",\"/notes/python/syntax/data-types/time.html\":\"/notes/python/syntax/data-type/time.html\",\"/notes/python/syntax/data-types/tuple.html\":\"/notes/python/syntax/data-type/tuple.html\"}")

export const routes = Object.fromEntries([
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"t":"档案主页","i":"home"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"首页","i":"logos:google-home"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/index.html.js"), meta: {"t":"博客","i":"logos:blogger","O":5} }],
  ["/notes/", { loader: () => import(/* webpackChunkName: "notes_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/index.html.js"), meta: {"t":"系列教程","i":"logos:blogger","O":5,"b":true} }],
  ["/blog/python/how-selenium.html", { loader: () => import(/* webpackChunkName: "blog_python_how-selenium.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/python/how-selenium.html.js"), meta: {"d":1729468800000,"l":"2024年10月21日","c":["Python"],"g":["python","selenium"],"e":"1.Selenium介绍<br>2.Selenium环境搭建","r":{"minutes":3.13,"words":938},"t":"Python使用Selenium详细步骤","i":"devicon:selenium","y":"a"} }],
  ["/blog/python/", { loader: () => import(/* webpackChunkName: "blog_python_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/python/index.html.js"), meta: {"t":"Python博客","i":"logos:python"} }],
  ["/blog/golang/", { loader: () => import(/* webpackChunkName: "blog_golang_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/golang/index.html.js"), meta: {"t":"Golang博客","i":"skill-icons:golang"} }],
  ["/blog/vue/", { loader: () => import(/* webpackChunkName: "blog_vue_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/vue/index.html.js"), meta: {"t":"VUE","i":"logos:vue"} }],
  ["/blog/csharp/how-unittest.html", { loader: () => import(/* webpackChunkName: "blog_csharp_how-unittest.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/csharp/how-unittest.html.js"), meta: {"d":1730160000000,"l":"2024年10月29日","c":["C#"],"g":["c#","单元测试"],"e":"这里的内容会被作为摘要","r":{"minutes":4.61,"words":1382},"t":"使用C#如何写单元测试","i":"logos:blogger","y":"a"} }],
  ["/blog/csharp/", { loader: () => import(/* webpackChunkName: "blog_csharp_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/csharp/index.html.js"), meta: {"t":"C#博客","i":"devicon:csharp"} }],
  ["/blog/reg/", { loader: () => import(/* webpackChunkName: "blog_reg_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/reg/index.html.js"), meta: {"t":"正则表达式","i":"material-symbols:regular-expression"} }],
  ["/blog/git/", { loader: () => import(/* webpackChunkName: "blog_git_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/git/index.html.js"), meta: {"t":"GIT","i":"devicon:git"} }],
  ["/blog/html/", { loader: () => import(/* webpackChunkName: "blog_html_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/html/index.html.js"), meta: {"t":"HTML&CSS","i":"devicon:html5"} }],
  ["/blog/other/", { loader: () => import(/* webpackChunkName: "blog_other_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blog/other/index.html.js"), meta: {"t":"其他综合","i":"cbi:more-tv"} }],
  ["/notes/csharp/try-catch.html", { loader: () => import(/* webpackChunkName: "notes_csharp_try-catch.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/csharp/try-catch.html.js"), meta: {"t":"2.2.try...catch语法"} }],
  ["/notes/csharp/", { loader: () => import(/* webpackChunkName: "notes_csharp_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/csharp/index.html.js"), meta: {"t":"C#中文教程","i":"devicon:csharp"} }],
  ["/notes/python/first-coding.html", { loader: () => import(/* webpackChunkName: "notes_python_first-coding.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/first-coding.html.js"), meta: {"t":"第一个Python程序"} }],
  ["/notes/python/introdution.html", { loader: () => import(/* webpackChunkName: "notes_python_introdution.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/introdution.html.js"), meta: {"t":"简介"} }],
  ["/notes/python/", { loader: () => import(/* webpackChunkName: "notes_python_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/index.html.js"), meta: {"t":"Pyton中文教程","i":"logos:python"} }],
  ["/notes/python/component/flask.html", { loader: () => import(/* webpackChunkName: "notes_python_component_flask.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/component/flask.html.js"), meta: {"t":"flask介绍"} }],
  ["/notes/python/component/selenium.html", { loader: () => import(/* webpackChunkName: "notes_python_component_selenium.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/component/selenium.html.js"), meta: {"t":"selenium介绍"} }],
  ["/notes/python/sample/demo.html", { loader: () => import(/* webpackChunkName: "notes_python_sample_demo.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/sample/demo.html.js"), meta: {"t":"Demo实例"} }],
  ["/notes/python/syntax/array.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_array.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/array.html.js"), meta: {"t":"数组"} }],
  ["/notes/python/syntax/condition.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_condition.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/condition.html.js"), meta: {"t":"条件判断"} }],
  ["/notes/python/syntax/encoding.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_encoding.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/encoding.html.js"), meta: {"t":"encoding"} }],
  ["/notes/python/syntax/format.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_format.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/format.html.js"), meta: {"t":"4.str.format详情"} }],
  ["/notes/python/syntax/import.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_import.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/import.html.js"), meta: {"t":"5.import包详情"} }],
  ["/notes/python/syntax/loop.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_loop.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/loop.html.js"), meta: {"t":"loop"} }],
  ["/notes/python/syntax/", { loader: () => import(/* webpackChunkName: "notes_python_syntax_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/index.html.js"), meta: {"t":"Python语法基础"} }],
  ["/notes/python/syntax/set.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_set.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/set.html.js"), meta: {"t":"使用集合"} }],
  ["/notes/python/syntax/variable.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_variable.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/variable.html.js"), meta: {"t":"定义变量"} }],
  ["/notes/python/tools/anaconda.html", { loader: () => import(/* webpackChunkName: "notes_python_tools_anaconda.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/tools/anaconda.html.js"), meta: {"t":"anaconda介绍"} }],
  ["/notes/python/tools/pyguide.html", { loader: () => import(/* webpackChunkName: "notes_python_tools_pyguide.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/tools/pyguide.html.js"), meta: {"t":"命名规范"} }],
  ["/notes/python/tools/vscode.html", { loader: () => import(/* webpackChunkName: "notes_python_tools_vscode.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/tools/vscode.html.js"), meta: {"t":"VSCode安装保姆级教程"} }],
  ["/notes/python/syntax/data-type/dict.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_data-type_dict.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/data-type/dict.html.js"), meta: {"t":"dict"} }],
  ["/notes/python/syntax/data-type/list.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_data-type_list.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/data-type/list.html.js"), meta: {"t":"list"} }],
  ["/notes/python/syntax/data-type/number.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_data-type_number.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/data-type/number.html.js"), meta: {"t":"number"} }],
  ["/notes/python/syntax/data-type/", { loader: () => import(/* webpackChunkName: "notes_python_syntax_data-type_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/data-type/index.html.js"), meta: {"t":"数据类型"} }],
  ["/notes/python/syntax/data-type/str.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_data-type_str.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/data-type/str.html.js"), meta: {"t":"字符串"} }],
  ["/notes/python/syntax/data-type/time.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_data-type_time.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/data-type/time.html.js"), meta: {"t":"time"} }],
  ["/notes/python/syntax/data-type/tuple.html", { loader: () => import(/* webpackChunkName: "notes_python_syntax_data-type_tuple.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/syntax/data-type/tuple.html.js"), meta: {"t":"tuple"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/notes/python/component/", { loader: () => import(/* webpackChunkName: "notes_python_component_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/component/index.html.js"), meta: {"t":"Component"} }],
  ["/notes/python/sample/", { loader: () => import(/* webpackChunkName: "notes_python_sample_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/sample/index.html.js"), meta: {"t":"Sample"} }],
  ["/notes/python/tools/", { loader: () => import(/* webpackChunkName: "notes_python_tools_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/notes/python/tools/index.html.js"), meta: {"t":"Tools"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/python/", { loader: () => import(/* webpackChunkName: "category_python_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/category/python/index.html.js"), meta: {"t":"Python 分类","I":false} }],
  ["/category/c_/", { loader: () => import(/* webpackChunkName: "category_c__index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/category/c_/index.html.js"), meta: {"t":"C# 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/python/", { loader: () => import(/* webpackChunkName: "tag_python_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/tag/python/index.html.js"), meta: {"t":"标签: python","I":false} }],
  ["/tag/selenium/", { loader: () => import(/* webpackChunkName: "tag_selenium_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/tag/selenium/index.html.js"), meta: {"t":"标签: selenium","I":false} }],
  ["/tag/c_/", { loader: () => import(/* webpackChunkName: "tag_c__index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/tag/c_/index.html.js"), meta: {"t":"标签: c#","I":false} }],
  ["/tag/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/", { loader: () => import(/* webpackChunkName: "tag_单元测试_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/tag/单元测试/index.html.js"), meta: {"t":"标签: 单元测试","I":false} }],
  ["/blogs/", { loader: () => import(/* webpackChunkName: "blogs_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/blogs/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/Codes/tutorial-vuepress-hope/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);
