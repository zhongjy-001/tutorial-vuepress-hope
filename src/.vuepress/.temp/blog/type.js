export const typesMap = {"article":{"/":{"path":"/blogs/","indexes":[0,1,2]}},"star":{"/":{"path":"/star/","indexes":[]}},"timeline":{"/":{"path":"/timeline/","indexes":[0,1,2]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

