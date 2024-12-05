import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "D:/Codes/tutorial-vuepress-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.59_@vuepress+plugin-pwa@2.0.0-rc.61_vuepress@2.0.0-rc.18_@vuepre_db3bc33n6jcypvd5ae35f7dtmy/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "D:/Codes/tutorial-vuepress-hope/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.56_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0.0-rc.18__y2hjo6tul6nsrvjpzrtxq6osie/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "D:/Codes/tutorial-vuepress-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.59_@vuepress+plugin-pwa@2.0.0-rc.61_vuepress@2.0.0-rc.18_@vuepre_db3bc33n6jcypvd5ae35f7dtmy/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "D:/Codes/tutorial-vuepress-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.59_@vuepress+plugin-pwa@2.0.0-rc.61_vuepress@2.0.0-rc.18_@vuepre_db3bc33n6jcypvd5ae35f7dtmy/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "D:/Codes/tutorial-vuepress-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.59_@vuepress+plugin-pwa@2.0.0-rc.61_vuepress@2.0.0-rc.18_@vuepre_db3bc33n6jcypvd5ae35f7dtmy/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "D:/Codes/tutorial-vuepress-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.59_@vuepress+plugin-pwa@2.0.0-rc.61_vuepress@2.0.0-rc.18_@vuepre_db3bc33n6jcypvd5ae35f7dtmy/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "D:/Codes/tutorial-vuepress-hope/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.56_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0.0-rc.18_@types+n_u4zhgb3rll7oskvsrpdflcywpi/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/Codes/tutorial-vuepress-hope/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.56_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0.0-rc.18_@types+n_u4zhgb3rll7oskvsrpdflcywpi/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/Codes/tutorial-vuepress-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.59_@vuepress+plugin-pwa@2.0.0-rc.61_vuepress@2.0.0-rc.18_@vuepre_db3bc33n6jcypvd5ae35f7dtmy/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
};
