export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"Python":{"path":"/category/python/","indexes":[0,1,2,3]},"C#":{"path":"/category/c_/","indexes":[4]}}}},"tag":{"/":{"path":"/tag/","map":{"python":{"path":"/tag/python/","indexes":[0,1,2,3]},"selenium":{"path":"/tag/selenium/","indexes":[3]},"anaconda":{"path":"/tag/anaconda/","indexes":[1]},"镜像源":{"path":"/tag/%E9%95%9C%E5%83%8F%E6%BA%90/","indexes":[2]},"flask":{"path":"/tag/flask/","indexes":[0]},"c#":{"path":"/tag/c_/","indexes":[4]},"单元测试":{"path":"/tag/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/","indexes":[4]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

