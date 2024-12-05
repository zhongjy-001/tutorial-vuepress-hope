<template><div><h2 id="selenium介绍" tabindex="-1"><a class="header-anchor" href="#selenium介绍"><span>Selenium介绍</span></a></h2>
<blockquote>
<p>Selenium官方中文文档：<a href="https://www.selenium.dev/zh-cn/documentation/" target="_blank" rel="noopener noreferrer">https://www.selenium.dev/zh-cn/documentation/</a></p>
</blockquote>
<p>Selenium 可以直接在浏览器上操作，像人一样进行文本框输入内容、按钮点击、链接弹出、下拉等操作，一般我们用它来做自动化测试。</p>
<p>它在爬虫领域利用也非常广泛，能解决大部分网页反爬问题，Selenium可以根据驱动的代码指令来获取网页内容，甚至是验证码的截屏，或判断网站上的某些动作是否发生。这篇文章主要是围绕着爬虫展开。</p>
<p>Python 提供了多种模拟器运行库，Selenium、Splash、Pyppetter、Playwright 等，可以方便帮我们爬取，很大程度上可以绕过JavaScript动态渲染，获取数据。</p>
<h2 id="selenium环境搭建" tabindex="-1"><a class="header-anchor" href="#selenium环境搭建"><span>Selenium环境搭建</span></a></h2>
<blockquote>
<p>我本机是 windows 11，浏览器使用 Edge 来进行测试</p>
<p>Python建议使用<RouteLink to="/blogs/python/20241124-how-anaconda.html">环境管理Anaconda</RouteLink>，当前使用的Python3.8</p>
</blockquote>
<CodeTabs id="28" :data='[{"id":"Python"}]'>
<template #title0="{ value, isActive }">Python</template>
<template #tab0="{ value, isActive }">
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> selenium</span></span></code></pre>
</div></template>
</CodeTabs>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>国内环境如果提示连接不上，可<RouteLink to="/blogs/python/20241124-set-mirror.html">参考</RouteLink>设置镜像源。博主当前使用的（2024-11-24）：</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> selenium</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://pypi.tuna.tsinghua.edu.cn/simple/</span></span></code></pre>
</div></div>
<p>安装成功以后，会出现如下界面</p>
<figure><img src="/images/python/selenium/01-install-start.png" alt="开始安装Selenium" tabindex="0" loading="lazy"><figcaption>开始安装Selenium</figcaption></figure>
<figure><img src="/images/python/selenium/01-install-finish.png" alt="安装完成Selenium" tabindex="0" loading="lazy"><figcaption>安装完成Selenium</figcaption></figure>
<h2 id="安装驱动webdriver" tabindex="-1"><a class="header-anchor" href="#安装驱动webdriver"><span>安装驱动WebDriver</span></a></h2>
<blockquote>
<p>Selenium 的工作方式是通过浏览器驱动（WebDriver）来操作浏览器，WebDriver可以使用 XPath，CSS 选择器来查找页面元素，与元素进行交互（发送文本，点击等），以及调用JS下拉页面等......</p>
</blockquote>
<p>你需要根据你使用的浏览器下载相应的 WebDriver：</p>
<ul>
<li>
<p>Google Chrome浏览器</p>
<ol>
<li>
<p>确定你的 Chrome 浏览器版本。打开 Chrome 浏览器并输入 <code v-pre>chrome://settings/help</code> 来查看版本。</p>
</li>
<li>
<p>下载对应版本的 ChromeDriver。<a href="https://sites.google.com/chromium.org/driver/downloads" target="_blank" rel="noopener noreferrer">Google官网下载</a> <a href="https://npmmirror.com/package/chromedriver/versions" target="_blank" rel="noopener noreferrer">淘宝镜像</a> <a href="https://googlechromelabs.github.io/chrome-for-testing/#stable" target="_blank" rel="noopener noreferrer">Github下载</a></p>
</li>
<li>
<p>将下载的 （Windows）或 （macOS/Linux）放入你的 Python 环境的 PATH 中（如：C:\PythonXX或/usr/local/bin）。</p>
</li>
</ol>
</li>
<li>
<p>Firefox浏览器</p>
<ol>
<li>
<p>下载对应版本的 geckodriver。<a href="https://github.com/mozilla/geckodriver/releases" target="_blank" rel="noopener noreferrer">官方下载</a></p>
</li>
<li>
<p>同样将下载的文件放入 PATH 中。</p>
</li>
</ol>
</li>
<li>
<p>Edge 浏览器</p>
<ol>
<li>
<p>确定你的 Edge 浏览器版本。打开 Edge 浏览器并输入 <code v-pre>edge://settings/help</code> 来查看版本。</p>
</li>
<li>
<p>下载对应版本的 Edge WebDriver，<a href="https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/#downloads" target="_blank" rel="noopener noreferrer">微软官网下载</a>。</p>
</li>
<li>
<p>同样将下载的文件放入 PATH 中。</p>
</li>
</ol>
</li>
</ul>
<blockquote>
<p>无界面浏览器，会把网站加载到内存并执行页面上的JavaScript，因为不会展示图形界面，所以运行起来比完整的浏览器要高效，它一般是用在像Linux线上服务器，不过现在Chrome（v65以上）也支持无头浏览器了。</p>
</blockquote>
<h2 id="使用-selenium" tabindex="-1"><a class="header-anchor" href="#使用-selenium"><span>使用 Selenium</span></a></h2>
<p>下面是一个简单的示例，展示如何使用 Selenium 来打开一个网页并进行一些基本操作。</p>
<h3 id="_1-导入库" tabindex="-1"><a class="header-anchor" href="#_1-导入库"><span>1. 导入库</span></a></h3>
<p>在你的 Python 文件中，首先需要导入 Selenium 的相关模块：</p>
<div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> selenium </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> webdriver</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> selenium.webdriver.common.by </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> By</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> selenium.webdriver.common.keys </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> Keys</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> time</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-启动浏览器" tabindex="-1"><a class="header-anchor" href="#_2-启动浏览器"><span>2. 启动浏览器</span></a></h3>
<p>启动 Chrome 浏览器并打开指定的网页：</p>
<div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 如果使用 Firefox，则使用 webdriver.Firefox()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">driver </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> webdriver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">Chrome</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 替换为你想访问的网址</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://www.example.com"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-与网页元素交互" tabindex="-1"><a class="header-anchor" href="#_3-与网页元素交互"><span>3. 与网页元素交互</span></a></h3>
<p>查找网页上的元素并进行交互。例如，查找一个输入框并发送一个键入信息：</p>
<div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查找输入框（假设它的 name 属性为 search）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">search_box </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"search"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输入信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">search_box.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">send_keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Selenium"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 模拟按下回车键</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">search_box.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">send_keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(Keys.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">RETURN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-等待网页加载" tabindex="-1"><a class="header-anchor" href="#_4-等待网页加载"><span>4. 等待网页加载</span></a></h3>
<p>如果网页需要一些时间加载，可以使用  等待几秒，或者使用 Selenium 提供的隐式等待和显式等待。</p>
<div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 等待5秒，确保页面加载完成</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">time.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">sleep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-关闭浏览器" tabindex="-1"><a class="header-anchor" href="#_5-关闭浏览器"><span>5. 关闭浏览器</span></a></h3>
<p>完成操作后，最好关掉浏览器：</p>
<div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 关闭浏览器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">quit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整示例" tabindex="-1"><a class="header-anchor" href="#完整示例"><span>完整示例</span></a></h2>
<p>以下是一个完整的示例程序，该程序打开浏览器，访问百度，搜索关键词“小钟同学”并打印出搜索前后的网页标题，然后10秒后关闭浏览器：</p>
<Tabs id="174" :data='[{"id":"Chrome示例"},{"id":"Edge示例"}]'>
<template #title0="{ value, isActive }">Chrome示例</template>
<template #title1="{ value, isActive }">Edge示例</template>
<template #tab0="{ value, isActive }">
<div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> selenium </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> webdriver</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> time</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动 Chrome 浏览器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">browser </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> webdriver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">Chrome</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 发送请求访问百度</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    browser.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://www.baidu.com"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 获取页面标题</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Page title:"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, browser.title)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 在搜索框中输入“小钟同学”</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ele_search </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> browser.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">value</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"kw"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ele_search.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">send_keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"小钟同学"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 提交</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ele_search.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">submit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 等待10秒后继续</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    time.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">sleep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 获取页面标题</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Page title:"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, browser.title)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">finally</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 退出浏览器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    browser.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">quit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> selenium </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> webdriver</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> time</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动 Edge 浏览器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">browser </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> webdriver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">Edge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 发送请求访问百度</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    browser.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://www.baidu.com"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 获取页面标题</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Page title:"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, browser.title)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 在搜索框中输入“小钟同学”</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ele_search </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> browser.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">value</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"kw"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ele_search.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">send_keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"小钟同学"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 提交</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ele_search.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">submit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 等待10秒后继续</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    time.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">sleep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 获取页面标题</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Page title:"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, browser.title)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">finally</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 退出浏览器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    browser.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">quit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="结束" tabindex="-1"><a class="header-anchor" href="#结束"><span>结束</span></a></h2>
<p>Selenium 提供了一个强大的接口来控制浏览器，实现自动化测试和网页操作。通过以上教程，你可以快速入门并开始创建自己的自动化脚本。查阅指南文档以了解更多高级用法和功能</p>
</div></template>


