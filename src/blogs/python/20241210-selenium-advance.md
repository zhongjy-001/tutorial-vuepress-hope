---
title: Python之Selenium进阶操作教程
icon: simple-icons:selenium
head:
  - [meta, { name: keywords, content: Python Selenium 进阶 }]
  - [meta, { name: description, content: Python之Selenium进阶操作教程 }]
category:
  - Python
tags:
  - python
  - Selenium
  - 进阶
date: 2024-12-10
permalink: /blog/python/selenium-advance.html
excerpt: 1.Selenium介绍<br>2.Selenium环境搭建
---

基础操作
源码地址：https://gitee.com/allen-huang/python/blob/master/crawler/do-selenium/test_base.py

1、属性和方法
常用属性说明：
current_url：当前响应的URL
title：当前网页的标题
page_source：页面源码
name：浏览器驱动名称
方法说明：
get()：打开一个网址，同时会把 response 信息自动保存
back()：返回上一个网址
forward()：前进到一个网址
refresh()：再刷新一个网址
save_screenshot()：保存当前页面的截屏快照
close()：关闭当前标签页，不关闭浏览器
quit()：关闭浏览器，释放进程
cloase()和quit()的区别：
从 selenium4的源码中比较可以看出来

代码展示：

def test_attr_method(self):
    """
    @todo: 测试浏览器的属性和方法
    @return:
    """
    # 实例化浏览器对象
    driver = webdriver.Chrome(service=self.service)

    # 获取浏览器的名称
    print(driver.name)

    # 访问百度首页，这里先暂时不使用https
    driver.get('http://www.baidu.com')
    # 属性1：打印当前响应对应的URL,之前 http的转换成了 https
    print(driver.current_url)
    # 属性2：打印当前标签页的标题
    print(driver.title)
    # 属性3：打印当前网页的源码长度
    print(len(driver.page_source))

    # 休息2秒，跳转到豆瓣首页,这里的两秒是等当前页面加载完毕，也就是浏览器转完圈后等待的两秒
    time.sleep(2)
    driver.get('https://www.douban.com')

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
    driver.save_screenshot("./screenshot.png")

    # 关闭当前标签页
    driver.close()

    # 关闭浏览器,释放进程
    driver.quit()
    pass
'
运行运行
2、单个元素定位
只罗列常用的几个，其他的可以查下文档就行，像 xpath 和 css 选择器定位是属于万能定位，尽量用这两个

通过id定位
语法格式：
find_element(by=By.ID, value='标签的id属性名)

测试代码

def test_element_id(self):
    """
    @todo: 通过id定位元素，测试输入框的输入和点击
    @return:
    """
    # 实例化浏览器对象
    browser = webdriver.Chrome(service=self.service)
    # 打开百度首页
    browser.get('https://www.baidu.com')
    # 输入关键字内容sora,并赋值给 标签的id属性名来定位；这是新的写法,
    browser.find_element(by=By.ID, value='kw').send_keys('sora')
    # 点击搜索按钮
    browser.find_element(by=By.ID, value='su').click()
    # 获取搜索结果
    # 关闭浏览器
    time.sleep(5)
    browser.quit()
    pass
'
运行运行
通过class_name定位一个元素
语法格式：
find_element(by=By.CLASS_NAME, value='标签的class属性名')

测试代码：

def test_element_class_name(self):
    """
    @todo: 通过class_name定位元素，测试输入框的输入和点击
    @return:
    """
    browser = webdriver.Chrome(service=self.service)
    browser.get('https://www.baidu.com')
    # 使用class_name定位输入框,并把输入框的内容设置为sora
    browser.find_element(by=By.CLASS_NAME, value='s_ipt').send_keys('sora')
    browser.find_element(by=By.CLASS_NAME, value='s_btn').click()
    time.sleep(2)
    browser.quit()
    pass
'
运行运行
通过xpath定位
语法格式：
find_element(by=By.XPATH, value='xpath的表达式')
测试代码
def test_element_xpath(self):
    """
    @todo: 通过xpath定位元素，测试输入框的输入和点击
    @return:
    """
    # 实例化浏览器对象
    browser = webdriver.Chrome(service=self.service)
    browser.get('https://www.baidu.com')
    # 使用xpath定位输入框,并把输入框的内容设置为sora
    browser.find_element(by=By.XPATH, value='//*[@id="kw"]').send_keys('sora')
    # 点击搜索按钮
    browser.find_element(by=By.XPATH, value='//*[@id="su"]').click()
    # 关闭浏览器
    time.sleep(5)
    browser.quit()
    pass
'
运行运行
通过CSS 选择器定位
语法格式：
browser.find_element(by=By.CSS_SELECTOR, value="选择器表达式")
测试代码：
def test_element_css_selector(self):
    """
    @todo: 通过css选择器定位元素，测试输入框的输入和点击
    @return:
    """
    # 实例化浏览器对象,打开百度首页
    browser = webdriver.Chrome(service=self.service)
    browser.get('https://www.baidu.com')
    # 使用css选择器定位输入框,先进行清空文本框，并把输入框的内容设置为sora
    browser.find_element(by=By.CSS_SELECTOR, value="#kw").clear()
    browser.find_element(by=By.CSS_SELECTOR, value="#kw").send_keys('sora')
    browser.find_element(by=By.CSS_SELECTOR, value="#su").click()
    # 关闭浏览器
    time.sleep(2)
    browser.quit()
    pass
'
运行运行
3、多个元素定位
天天基金网为例子，如下图：


通过xpath定位排行榜的基金代码
语法格式：
格式上和单个获取的差不多，唯一有差别的是方法后面多了一个s，使用了find_elements

测试代码：

def test_elements_xpath(self):
    """
    @todo: 通过xpath定位元素列表，测试获取列表的数据
    @return:
    """
    browser = webdriver.Chrome(service=self.service)
    browser.get('https://fund.eastmoney.com/data/fundranking.html#tall')
    # 使用xpath定位列表
    elements = browser.find_elements(by=By.XPATH, value='//table[@id="dbtable"]/tbody/tr/td[3]/a')
    for elem in elements:
        print(elem.text)
    # 页面加载完后，再等待2秒，自动关闭浏览器，这里没有使用quit()方法，也能自动释放
    time.sleep(2)
    browser.quit()
    pass
'
运行运行
打印结果：


取数据单个和多个的区别
find_element：
定位的是元素的对象，定位不到报错

find_elements：
定位的是列表，列表里面存元素对象，如果定位不到则是空的数据

4、元素操作
获取元素的文本内容和属性值
它这个和 xpath 获取文档属性值不太一样，这是需要注意的

文本内容：元素对象.text
属性值：元素对象.get_attribute(‘属性名’)
测试用例：
def test_op_element(self):
    """
    测试获取元素的文本内容
    @return:
    """
    # 实例化浏览器对象
    browser = webdriver.Chrome(service=self.service)
    # 天天基金网，查看所有基金，这只是测试，不作为正式的爬虫
    browser.get('https://fund.eastmoney.com/data/fundranking.html#tall')
    # 使用xpath定位元素列表,基金代码
    elems = browser.find_elements(by=By.XPATH, value='//table[@id="dbtable"]/tbody/tr/td[3]/a')
    for elem in elems:
        # 代码的内容
        print(elem.text)
        # 获取基金的链接
        print(elem.get_attribute('href'))

    time.sleep(2)
    browser.quit()
    pass

'
运行运行
文本框输入内容和点击按钮
send_keys()在使用时，一定要文本框，不然是不生效的，它就是来输入内容用

示例：
def test_element_css_selector(self):
    """
    @todo: 通过css选择器定位元素，测试输入框的输入和点击
    @return:
    """
    # 实例化浏览器对象,打开百度首页
    browser = webdriver.Chrome(service=self.service)
    browser.get('https://www.baidu.com')
    # 使用css选择器定位输入框,先进行清空文本框，并把输入框的内容设置为sora
    browser.find_element(by=By.CSS_SELECTOR, value="#kw").clear()
    browser.find_element(by=By.CSS_SELECTOR, value="#kw").send_keys('sora')
    browser.find_element(by=By.CSS_SELECTOR, value="#su").click()
    # 关闭浏览器
    time.sleep(2)
    browser.quit()
    pass

'
运行运行
5、无头浏览器模式
基于chrome 的无头浏览器
1、webdriver.ChromeOptions()，实例化 chrome 浏览器配置对象
2、chrome_options.add_argument('--headless')，开启无头模式
3、chrome_options.add_argument('--disable-gpu')，不开启显卡
4、browser = webdriver.Chrome(options=chrome_options)，实例化浏览器
如下代码展示

def test_headless_driver(self):
    """
    @todo: 测试chrome无头模式浏览器
    @return:
    """
    # 1.实例化配置对象
    chrome_options = webdriver.ChromeOptions()
    # 2.配置对象开启无头模式
    chrome_options.add_argument('--headless')
    # 3.配置对象添加无显卡模式，即无图形界面
    chrome_options.add_argument('--disable-gpu')
    # 4.实例化浏览器对象
    browser = webdriver.Chrome(service=self.service, options=chrome_options)
    browser.get('https://www.baidu.com')

    # 查看当前页面url
    print(browser.current_url)
    # 获取页面标题
    print("页面标题：", browser.title)
    # 获取渲染后的页面源码
    print("页面源码-长度：", len(browser.page_source))
    # 获取页面cookie
    print("cookie-data", browser.get_cookies())

    # 关闭页面的标签页
    browser.close()

    time.sleep(5)

    # 关闭浏览器
    browser.quit()
    pass

'
运行运行
基于PhantomJS的无头模式(selenium2系列用的多)
在 selenium4开始，phantomJS已经废弃了，建议使用 chrome 和 firefox 的无头浏览器其，这是只是简单的介绍下。

下载安装
下载地址：https://phantomjs.org/download.html
选择对应的操作系统即可，我这里是 mac os的

解压出来后，将 bin 目录的phantomjs拷贝到环境变量目录/usr/local/bin 目录下就行

验证
出现这个表示安装成功了

代码写法都差不多的
def test_phantjs_driver(self):
    driver = webdriver.PhantomJS()
    driver.get('https://www.baidu.com')
    print(driver.title)
    driver.quit()
    pass