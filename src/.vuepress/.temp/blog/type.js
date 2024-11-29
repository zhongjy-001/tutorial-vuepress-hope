export const typesMap = {"article":{"/":{"path":"/blog/","indexes":[0,6,18,7,8,9,10,13,14,15,16,17,19,20,1,2,5,3,4,21,11,12,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]}},"star":{"/":{"path":"/star/","indexes":[0]}},"timeline":{"/":{"path":"/timeline/","indexes":[6,18,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

