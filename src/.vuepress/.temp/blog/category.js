export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"编程语言":{"path":"/category/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/","indexes":[0,1,2]},"Python":{"path":"/category/python/","indexes":[0,2]},"C#":{"path":"/category/c_/","indexes":[1]}}}},"tag":{"/":{"path":"/tag/","map":{"python":{"path":"/tag/python/","indexes":[0,2]},"selenium":{"path":"/tag/selenium/","indexes":[2]},"anaconda":{"path":"/tag/anaconda/","indexes":[0]},"c#":{"path":"/tag/c_/","indexes":[1]},"单元测试":{"path":"/tag/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/","indexes":[1]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

