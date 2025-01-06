import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as t,o as n}from"./app-DyplAjvD.js";const p={};function l(h,i){return n(),a("div",null,i[0]||(i[0]=[t(`<h2 id="国内镜像源" tabindex="-1"><a class="header-anchor" href="#国内镜像源"><span>国内镜像源</span></a></h2><p>比较好的镜像源：</p><ul><li><p>清华大学（推荐）：https://pypi.tuna.tsinghua.edu.cn/simple</p></li><li><p>阿里云：http://mirrors.aliyun.com/pypi/simple/</p></li><li><p>中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/</p></li><li><p>华中科技大学：http://pypi.hustunique.com/</p></li><li><p>山东理工大学：http://pypi.sdutlinux.org/</p></li><li><p>豆瓣：http://pypi.douban.com/simple</p></li></ul><h2 id="镜像源配置方法" tabindex="-1"><a class="header-anchor" href="#镜像源配置方法"><span>镜像源配置方法</span></a></h2><p><strong>临时使用镜像的方法</strong>：<code>pip install 库名 -i 镜像地址</code>（注意空格）</p><p>如下列是安装pandas库的示例</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pandas</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://pypi.tuna.tsinghua.edu.cn/simple</span></span></code></pre></div><p><strong>修改配置文章的方法</strong></p><ul><li>Linux/Mac os 环境</li></ul><p>配置文件位置在 <code>~/.pip/pip.conf</code>（如果不存在创建该目录和文件）：</p><p><code>mkdir ~/.pip</code></p><p>打开配置文件 <code>~/.pip/pip.conf</code>，修改如下：</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[global]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">index-url</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://pypi.tuna.tsinghua.edu.cn/simple</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[install]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">trusted-host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://pypi.tuna.tsinghua.edu.cn</span></span></code></pre></div><p>查看 镜像地址：</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">global.index-url</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;https://pypi.tuna.tsinghua.edu.cn/simple&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">install.trusted-host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;https://pypi.tuna.tsinghua.edu.cn&#39;</span></span></code></pre></div><p>可以看到已经成功修改了镜像。</p><ul><li>Windows环境</li></ul><p>你需要在当前对用户目录下（<code>C:\\Users\\xx\\pip</code>，xx 表示当前使用对用户）创建一个 <code>pip.ini</code> 在 <code>pip.ini</code> 文件中输入以下内容：</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[global]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">index-url</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://pypi.tuna.tsinghua.edu.cn/simple</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[install]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">trusted-host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pypi.tuna.tsinghua.edu.cn</span></span></code></pre></div><p><strong>永久添加镜像的方法</strong>：</p><p>输入一次即可永久使用！！！</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 清华源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> global.index-url</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://pypi.tuna.tsinghua.edu.cn/simple</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install.trusted-host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pypi.tuna.tsinghua.edu.cn</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 阿里源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> global.index-url</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://mirrors.aliyun.com/pypi/simple/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install.trusted-host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mirrors.aliyun.com</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 腾讯源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> global.index-url</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://mirrors.cloud.tencent.com/pypi/simple</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install.trusted-host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mirrors.cloud.tencent.com</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 豆瓣源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> global.index-url</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://pypi.douban.com/simple/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install.trusted-host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pypi.douban.com</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 换回默认源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> global.index-url</span></span></code></pre></div>`,22)]))}const r=s(p,[["render",l],["__file","set-mirror.html.vue"]]),d=JSON.parse('{"path":"/blog/python/set-mirror.html","title":"Python设置国内镜像源的方法","lang":"zh-CN","frontmatter":{"title":"Python设置国内镜像源的方法","head":[["meta",{"name":"keywords","content":"Python 镜像源"}],["meta",{"name":"description","content":"Python设置国内镜像源的方法"}],["meta",{"property":"og:url","content":"https://www.igoblogs.com/blog/python/set-mirror.html"}],["meta",{"property":"og:site_name","content":"一起编程吧"}],["meta",{"property":"og:title","content":"Python设置国内镜像源的方法"}],["meta",{"property":"og:description","content":"国内镜像源 比较好的镜像源： 清华大学（推荐）：https://pypi.tuna.tsinghua.edu.cn/simple 阿里云：http://mirrors.aliyun.com/pypi/simple/ 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/ 华中科技大学：http://pypi.hu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-06T11:58:28.000Z"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"镜像源"}],["meta",{"property":"article:published_time","content":"2024-11-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-06T11:58:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python设置国内镜像源的方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-24T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-06T11:58:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小钟同学\\",\\"url\\":\\"/portfolio.html\\"}]}"]],"category":["Python"],"tags":["Python","镜像源"],"date":"2024-11-24T00:00:00.000Z","permalink":"/blog/python/set-mirror.html","excerpt":"<small>国内镜像源及镜像源配置方法</small>","description":"国内镜像源 比较好的镜像源： 清华大学（推荐）：https://pypi.tuna.tsinghua.edu.cn/simple 阿里云：http://mirrors.aliyun.com/pypi/simple/ 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/ 华中科技大学：http://pypi.hu..."},"headers":[{"level":2,"title":"国内镜像源","slug":"国内镜像源","link":"#国内镜像源","children":[]},{"level":2,"title":"镜像源配置方法","slug":"镜像源配置方法","link":"#镜像源配置方法","children":[]}],"git":{"createdTime":1735786685000,"updatedTime":1736164708000,"contributors":[{"name":"zhongjy-001","email":"zhongjy_001@163.com","commits":4}]},"readingTime":{"minutes":1.4,"words":419},"filePathRelative":"blogs/python/20241124-set-mirror.md","localizedDate":"2024年11月24日","autoDesc":true}');export{r as comp,d as data};
