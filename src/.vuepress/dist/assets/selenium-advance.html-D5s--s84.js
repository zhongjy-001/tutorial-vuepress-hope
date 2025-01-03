import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,d as o,o as s}from"./app-CkrVgR3t.js";const n={};function i(a,e){return s(),r("div",null,e[0]||(e[0]=[o(`<p>基础操作 源码地址：https://gitee.com/allen-huang/python/blob/master/crawler/do-selenium/test_base.py</p><p>1、属性和方法 常用属性说明： current_url：当前响应的URL title：当前网页的标题 page_source：页面源码 name：浏览器驱动名称 方法说明： get()：打开一个网址，同时会把 response 信息自动保存 back()：返回上一个网址 forward()：前进到一个网址 refresh()：再刷新一个网址 save_screenshot()：保存当前页面的截屏快照 close()：关闭当前标签页，不关闭浏览器 quit()：关闭浏览器，释放进程 cloase()和quit()的区别： 从 selenium4的源码中比较可以看出来</p><p>代码展示：</p><p>def test_attr_method(self): &quot;&quot;&quot; @todo: 测试浏览器的属性和方法 @return: &quot;&quot;&quot; # 实例化浏览器对象 driver = webdriver.Chrome(service=self.service)</p><pre><code># 获取浏览器的名称
print(driver.name)

# 访问百度首页，这里先暂时不使用https
driver.get(&#39;http://www.baidu.com&#39;)
# 属性1：打印当前响应对应的URL,之前 http的转换成了 https
print(driver.current_url)
# 属性2：打印当前标签页的标题
print(driver.title)
# 属性3：打印当前网页的源码长度
print(len(driver.page_source))

# 休息2秒，跳转到豆瓣首页,这里的两秒是等当前页面加载完毕，也就是浏览器转完圈后等待的两秒
time.sleep(2)
driver.get(&#39;https://www.douban.com&#39;)

# 休息2秒，再返回百度
time.sleep(2)
driver.back()

# 休息2秒，再前进到豆瓣
time.sleep(2)
driver.forward()

# 休息2秒，再刷新页面
time.sleep(2)
driver.refresh()

# 保存当前页面的截屏快照
driver.save_screenshot(&quot;./screenshot.png&quot;)

# 关闭当前标签页
driver.close()

# 关闭浏览器,释放进程
driver.quit()
pass
</code></pre><p>&#39; 运行运行 2、单个元素定位 只罗列常用的几个，其他的可以查下文档就行，像 xpath 和 css 选择器定位是属于万能定位，尽量用这两个</p><p>通过id定位 语法格式： find_element(by=By.ID, value=&#39;标签的id属性名)</p><p>测试代码</p><p>def test_element_id(self): &quot;&quot;&quot; @todo: 通过id定位元素，测试输入框的输入和点击 @return: &quot;&quot;&quot; # 实例化浏览器对象 browser = webdriver.Chrome(service=self.service) # 打开百度首页 browser.get(&#39;https://www.baidu.com&#39;) # 输入关键字内容sora,并赋值给 标签的id属性名来定位；这是新的写法, browser.find_element(by=By.ID, value=&#39;kw&#39;).send_keys(&#39;sora&#39;) # 点击搜索按钮 browser.find_element(by=By.ID, value=&#39;su&#39;).click() # 获取搜索结果 # 关闭浏览器 time.sleep(5) browser.quit() pass &#39; 运行运行 通过class_name定位一个元素 语法格式： find_element(by=By.CLASS_NAME, value=&#39;标签的class属性名&#39;)</p><p>测试代码：</p><p>def test_element_class_name(self): &quot;&quot;&quot; @todo: 通过class_name定位元素，测试输入框的输入和点击 @return: &quot;&quot;&quot; browser = webdriver.Chrome(service=self.service) browser.get(&#39;https://www.baidu.com&#39;) # 使用class_name定位输入框,并把输入框的内容设置为sora browser.find_element(by=By.CLASS_NAME, value=&#39;s_ipt&#39;).send_keys(&#39;sora&#39;) browser.find_element(by=By.CLASS_NAME, value=&#39;s_btn&#39;).click() time.sleep(2) browser.quit() pass &#39; 运行运行 通过xpath定位 语法格式： find_element(by=By.XPATH, value=&#39;xpath的表达式&#39;) 测试代码 def test_element_xpath(self): &quot;&quot;&quot; @todo: 通过xpath定位元素，测试输入框的输入和点击 @return: &quot;&quot;&quot; # 实例化浏览器对象 browser = webdriver.Chrome(service=self.service) browser.get(&#39;https://www.baidu.com&#39;) # 使用xpath定位输入框,并把输入框的内容设置为sora browser.find_element(by=By.XPATH, value=&#39;//<em>[@id=&quot;kw&quot;]&#39;).send_keys(&#39;sora&#39;) # 点击搜索按钮 browser.find_element(by=By.XPATH, value=&#39;//</em>[@id=&quot;su&quot;]&#39;).click() # 关闭浏览器 time.sleep(5) browser.quit() pass &#39; 运行运行 通过CSS 选择器定位 语法格式： browser.find_element(by=By.CSS_SELECTOR, value=&quot;选择器表达式&quot;) 测试代码： def test_element_css_selector(self): &quot;&quot;&quot; @todo: 通过css选择器定位元素，测试输入框的输入和点击 @return: &quot;&quot;&quot; # 实例化浏览器对象,打开百度首页 browser = webdriver.Chrome(service=self.service) browser.get(&#39;https://www.baidu.com&#39;) # 使用css选择器定位输入框,先进行清空文本框，并把输入框的内容设置为sora browser.find_element(by=By.CSS_SELECTOR, value=&quot;#kw&quot;).clear() browser.find_element(by=By.CSS_SELECTOR, value=&quot;#kw&quot;).send_keys(&#39;sora&#39;) browser.find_element(by=By.CSS_SELECTOR, value=&quot;#su&quot;).click() # 关闭浏览器 time.sleep(2) browser.quit() pass &#39; 运行运行 3、多个元素定位 天天基金网为例子，如下图：</p><p>通过xpath定位排行榜的基金代码 语法格式： 格式上和单个获取的差不多，唯一有差别的是方法后面多了一个s，使用了find_elements</p><p>测试代码：</p><p>def test_elements_xpath(self): &quot;&quot;&quot; @todo: 通过xpath定位元素列表，测试获取列表的数据 @return: &quot;&quot;&quot; browser = webdriver.Chrome(service=self.service) browser.get(&#39;https://fund.eastmoney.com/data/fundranking.html#tall&#39;) # 使用xpath定位列表 elements = browser.find_elements(by=By.XPATH, value=&#39;//table[@id=&quot;dbtable&quot;]/tbody/tr/td[3]/a&#39;) for elem in elements: print(elem.text) # 页面加载完后，再等待2秒，自动关闭浏览器，这里没有使用quit()方法，也能自动释放 time.sleep(2) browser.quit() pass &#39; 运行运行 打印结果：</p><p>取数据单个和多个的区别 find_element： 定位的是元素的对象，定位不到报错</p><p>find_elements： 定位的是列表，列表里面存元素对象，如果定位不到则是空的数据</p><p>4、元素操作 获取元素的文本内容和属性值 它这个和 xpath 获取文档属性值不太一样，这是需要注意的</p><p>文本内容：元素对象.text 属性值：元素对象.get_attribute(‘属性名’) 测试用例： def test_op_element(self): &quot;&quot;&quot; 测试获取元素的文本内容 @return: &quot;&quot;&quot; # 实例化浏览器对象 browser = webdriver.Chrome(service=self.service) # 天天基金网，查看所有基金，这只是测试，不作为正式的爬虫 browser.get(&#39;https://fund.eastmoney.com/data/fundranking.html#tall&#39;) # 使用xpath定位元素列表,基金代码 elems = browser.find_elements(by=By.XPATH, value=&#39;//table[@id=&quot;dbtable&quot;]/tbody/tr/td[3]/a&#39;) for elem in elems: # 代码的内容 print(elem.text) # 获取基金的链接 print(elem.get_attribute(&#39;href&#39;))</p><pre><code>time.sleep(2)
browser.quit()
pass
</code></pre><p>&#39; 运行运行 文本框输入内容和点击按钮 send_keys()在使用时，一定要文本框，不然是不生效的，它就是来输入内容用</p><p>示例： def test_element_css_selector(self): &quot;&quot;&quot; @todo: 通过css选择器定位元素，测试输入框的输入和点击 @return: &quot;&quot;&quot; # 实例化浏览器对象,打开百度首页 browser = webdriver.Chrome(service=self.service) browser.get(&#39;https://www.baidu.com&#39;) # 使用css选择器定位输入框,先进行清空文本框，并把输入框的内容设置为sora browser.find_element(by=By.CSS_SELECTOR, value=&quot;#kw&quot;).clear() browser.find_element(by=By.CSS_SELECTOR, value=&quot;#kw&quot;).send_keys(&#39;sora&#39;) browser.find_element(by=By.CSS_SELECTOR, value=&quot;#su&quot;).click() # 关闭浏览器 time.sleep(2) browser.quit() pass</p><p>&#39; 运行运行 5、无头浏览器模式 基于chrome 的无头浏览器 1、webdriver.ChromeOptions()，实例化 chrome 浏览器配置对象 2、chrome_options.add_argument(&#39;--headless&#39;)，开启无头模式 3、chrome_options.add_argument(&#39;--disable-gpu&#39;)，不开启显卡 4、browser = webdriver.Chrome(options=chrome_options)，实例化浏览器 如下代码展示</p><p>def test_headless_driver(self): &quot;&quot;&quot; @todo: 测试chrome无头模式浏览器 @return: &quot;&quot;&quot; # 1.实例化配置对象 chrome_options = webdriver.ChromeOptions() # 2.配置对象开启无头模式 chrome_options.add_argument(&#39;--headless&#39;) # 3.配置对象添加无显卡模式，即无图形界面 chrome_options.add_argument(&#39;--disable-gpu&#39;) # 4.实例化浏览器对象 browser = webdriver.Chrome(service=self.service, options=chrome_options) browser.get(&#39;https://www.baidu.com&#39;)</p><pre><code># 查看当前页面url
print(browser.current_url)
# 获取页面标题
print(&quot;页面标题：&quot;, browser.title)
# 获取渲染后的页面源码
print(&quot;页面源码-长度：&quot;, len(browser.page_source))
# 获取页面cookie
print(&quot;cookie-data&quot;, browser.get_cookies())

# 关闭页面的标签页
browser.close()

time.sleep(5)

# 关闭浏览器
browser.quit()
pass
</code></pre><p>&#39; 运行运行 基于PhantomJS的无头模式(selenium2系列用的多) 在 selenium4开始，phantomJS已经废弃了，建议使用 chrome 和 firefox 的无头浏览器其，这是只是简单的介绍下。</p><p>下载安装 下载地址：https://phantomjs.org/download.html 选择对应的操作系统即可，我这里是 mac os的</p><p>解压出来后，将 bin 目录的phantomjs拷贝到环境变量目录/usr/local/bin 目录下就行</p><p>验证 出现这个表示安装成功了</p><p>代码写法都差不多的 def test_phantjs_driver(self): driver = webdriver.PhantomJS() driver.get(&#39;https://www.baidu.com&#39;) print(driver.title) driver.quit() pass</p>`,29)]))}const u=t(n,[["render",i],["__file","selenium-advance.html.vue"]]),m=JSON.parse('{"path":"/blog/python/selenium-advance.html","title":"Python之Selenium进阶操作教程","lang":"zh-CN","frontmatter":{"title":"Python之Selenium进阶操作教程","icon":"simple-icons:selenium","head":[["meta",{"name":"keywords","content":"Python Selenium 进阶"}],["meta",{"name":"description","content":"Python之Selenium进阶操作教程"}],["meta",{"property":"og:url","content":"https://www.igoblogs.com/blog/python/selenium-advance.html"}],["meta",{"property":"og:site_name","content":"一起编程吧"}],["meta",{"property":"og:title","content":"Python之Selenium进阶操作教程"}],["meta",{"property":"og:description","content":"基础操作 源码地址：https://gitee.com/allen-huang/python/blob/master/crawler/do-selenium/test_base.py 1、属性和方法 常用属性说明： current_url：当前响应的URL title：当前网页的标题 page_source：页面源码 name：浏览器驱动名称 方法说明..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-02T04:08:07.000Z"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"Selenium"}],["meta",{"property":"article:tag","content":"进阶"}],["meta",{"property":"article:published_time","content":"2024-12-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-02T04:08:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python之Selenium进阶操作教程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-10T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-02T04:08:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小钟同学\\",\\"url\\":\\"/portfolio.html\\"}]}"]],"category":["Python"],"tags":["Python","Selenium","进阶"],"date":"2024-12-10T00:00:00.000Z","permalink":"/blog/python/selenium-advance.html","excerpt":"1.Selenium介绍<br>2.Selenium环境搭建","description":"基础操作 源码地址：https://gitee.com/allen-huang/python/blob/master/crawler/do-selenium/test_base.py 1、属性和方法 常用属性说明： current_url：当前响应的URL title：当前网页的标题 page_source：页面源码 name：浏览器驱动名称 方法说明..."},"headers":[],"git":{"createdTime":1735786685000,"updatedTime":1735790887000,"contributors":[{"name":"zhongjy-001","email":"zhongjy_001@163.com","commits":2}]},"readingTime":{"minutes":6.27,"words":1880},"filePathRelative":"blogs/python/20241210-selenium-advance.md","localizedDate":"2024年12月10日","autoDesc":true}');export{u as comp,m as data};
