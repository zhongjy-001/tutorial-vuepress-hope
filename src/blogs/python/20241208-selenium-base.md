---
title: Python使用Selenium参考指南（一）
icon: simple-icons:selenium
head:
  - [meta, { name: keywords, content: Python Selenium 基础 }]
  - [meta, { name: description, content: Python之Selenium基础参考指南 }]
category:
  - Python
tags:
  - Python
  - Selenium
  - 基础
date: 2024-12-08
permalink: /blog/python/selenium-base.html
excerpt: <small>Python使用Selenium参考指南</small>
---

## 完整代码

```py
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def test_selenium_base(browser: webdriver.Edge):
    try:
        # 发送请求访问测试页面
        browser.get("https://www.igoblogs.com/blog/test-all.html")
        print("当前窗口标题:", browser.title)
        print("当前窗口Url:", browser.current_url)
        ele = browser.find_element(by=By.ID, value="txtname")  # 根据元素ID查找搜索框
        ele.clear()
        # 提交到百度搜索关键词
        ele.send_keys("小钟同学")  # 在搜索框中输入“小钟同学”
        ele.submit()  # 提交
        browser.implicitly_wait(5)  # 智能等待，等待页面加载完成
        # 切换到第二个窗口
        browser.switch_to.window(browser.window_handles[-1])
        print("第二个窗口标题:", browser.title)
        print("第二个窗口Url:", browser.current_url)
        # 新链接的XPath
        xpath = '//div[@tpl="se_com_default"][2]//h3[@class="c-title t t tts-title"]/a'
        ele = browser.find_element(by=By.XPATH, value=xpath)  # 根据元素XPath查找搜索框
        ele.click()  # 点击链接
        time.sleep(2)  # 等待2秒后继续
        # 切换到第三个窗口
        browser.switch_to.window(browser.window_handles[-1])
        print("第三个窗口的标题:", browser.title)
        print("第三个窗口的Url:", browser.current_url)
        # 保存第三个窗口的截屏快照
        print("截屏快照:", R"D:\screenshot.png")
        browser.save_screenshot(R"D:\screenshot.png")
        # 关闭当前标签页
        browser.close()
        # 切换回第一个窗口
        browser.switch_to.window(browser.window_handles[0])
        print("第一个窗口的标题:", browser.title)
        print("第一个窗口的Url:", browser.current_url)
        # 等待10秒后继续
        time.sleep(10)
    except Exception as e:
        print("[错误]", e)
    finally:
        # 退出浏览器
        browser.quit()

def driver_edge() -> webdriver.Edge:
    return webdriver.Edge()

browser = driver_edge()
test_selenium_base(browser=browser)

```

## 属性和方法

||名称|描述|
|:------|:------|:------|
|属性|`current_url`|当前响应的URL|
||`current_window_handle`|当前窗口（Tab）的句柄号|
||`title`|当前网页的标题|
||`page_source`|页面源码|
||`name`|浏览器驱动名称|
||`window_handles`|当前打开的所有窗口句柄的集合|
|方法|`get()`|打开一个网址，同时会把 response 信息自动保存|
||`back()`|返回上一个网址|
||`forward()`|前进到一个网址|
||`refresh()`|再刷新一个网址|
||`save_screenshot()`|保存当前页面的截屏快照|
||`close()`|关闭当前标签页，不关闭浏览器|
||`quit()`|关闭浏览器，释放进程|

## 单个/多个元素定位

**测试页面地址**

<a href='https://www.igoblogs.com/blog/test-all.html' target='_blank'>https://www.igoblogs.com/blog/test-all.html</a>

**取数据单个和多个的区别**

- browser.find_element：定位的是元素的对象，**定位不到报错**

- browser.find_elements：定位的是列表，列表里面存元素对象，如果定位不到则是空的数据

### 1. 通过 `By.ID` 定位

实例代码片段

```py
def test_find_element_id(browser: webdriver.Edge):
    """
    通过 ID 定位元素

    参数:
        browser (webdriver.Edge): Edge浏览器, 已打开测试页面

    返回值:
        无
    """
    # 查找标签的 ID 属性='lblname'的元素列表
    lblnames = browser.find_elements(by=By.ID, value="lblname")
    print("查找到 ID='lblname' 元素的数量:", len(lblnames))
    # 注：find_element方法在没找到对象时会出NoSuchElementException异常
    lblname = browser.find_element(by=By.ID, value="lblname")
    for lblname in lblnames:
        print("[index]", lblnames.index(lblname))
        print("[tag_name]", lblname.tag_name)
        print("[class]", lblname.get_attribute("class"))
        print("[value]", lblname.get_attribute("value"))
        print("[text]", lblname.text)
    print()
    # 等待2秒后继续
    time.sleep(2)

test_find_element_id(browser=browser)

```

代码输出

```shell:no-line-numbers
查找到 ID='lblname' 元素的数量: 1
[index] 0
[tag_name] div
[class] demo-label
[value] None
[text] 我的id=lblname

```

### 2. 通过 `By.CLASS_NAME` 定位

即元素的class定位一个元素。

实例代码片段

```py
def test_find_element_class_name(browser: webdriver.Edge):
    """
    通过 CLASS_NAME 定位元素

    参数:
        browser (webdriver.Edge): Edge浏览器, 已打开测试页面

    返回值:
        无
    """
    # 查找标签的 CLASS_NAME 属性='demo-label'的元素列表
    labels = browser.find_elements(by=By.CLASS_NAME, value="demo-label")
    print("查找到 CLASS_NAME='lblname' 元素的数量:", len(labels))
    # 注：find_element方法在没找到对象时会出NoSuchElementException异常
    label = browser.find_element(by=By.CLASS_NAME, value="demo-label")
    for label in labels:
        print("[index]", labels.index(label))
        print("[tag_name]", label.tag_name)
        print("[class]", label.get_attribute("class"))
        print("[value]", label.get_attribute("value"))
        print("[text]", label.text)
    print()
    # 等待2秒后继续
    time.sleep(2)

test_find_element_class_name(browser=browser)

```

代码输出

```shell:no-line-numbers
查找到 CLASS_NAME='lblname' 元素的数量: 3
[index] 0
[tag_name] div
[class] demo-label
[value] None
[text] 我的id=lblname
[index] 1
[tag_name] div
[class] demo-label
[value] None
[text] 我的id=''
[index] 2
[tag_name] div
[class] demo-label
[value] None
[text] 链接提交链接A录入链接B保存链接C

```

### 3. 通过 `By.XPATH` 定位

即元素的XPATH定位一个元素，参见 [XPATH使用方法](./../html/20250109-all-xpath.md)。

实例代码片段

```py
def test_find_element_xpath(browser: webdriver.Edge):
    """
    通过 XPATH 定位元素

    参数:
        browser (webdriver.Edge): Edge浏览器, 已打开测试页面

    返回值:
        无
    """
    # 查找标签的 XPATH 属性="//input[@id='txtsearch']"的元素列表
    txtsearchs = browser.find_elements(by=By.XPATH, value="//input[@id='txtsearch']")
    print("查找到 XPATH=\"//input[@id='txtsearch']\" 元素的数量:", len(txtsearchs))
    # 注：find_element方法在没找到对象时会出NoSuchElementException异常
    txtsearch = browser.find_element(by=By.XPATH, value="//input[@id='txtsearch']")
    for txtsearch in txtsearchs:
        print("[index]", txtsearchs.index(txtsearch))
        print("[tag_name]", txtsearch.tag_name)
        print("[class]", txtsearch.get_attribute("class"))
        print("[value]", txtsearch.get_attribute("value"))
        print("[text]", txtsearch.text)
    print()
    # 等待2秒后继续
    time.sleep(2)

test_find_element_xpath(browser=browser)

```

代码输出

```shell:no-line-numbers
查找到 XPATH="//input[@id='txtsearch']" 元素的数量: 1
[index] 0
[tag_name] input
[class] demo-search
[value] 小钟同学
[text]
```

### 4. 通过 `By.LINK_TEXT` 定位

实例代码片段

```py
def test_find_element_link_text(browser: webdriver.Edge):
    """
    通过 LINK_TEXT 定位元素

    参数:
        browser (webdriver.Edge): Edge浏览器, 已打开测试页面

    返回值:
        无
    """
    # 查找标签的 LINK_TEXT 属性="链接"的元素列表
    alinks = browser.find_elements(by=By.LINK_TEXT, value="链接")
    print("查找到 LINK_TEXT='链接' 元素的数量:", len(alinks))
    # 注：find_element方法在没找到对象时会出NoSuchElementException异常
    alink = browser.find_element(by=By.LINK_TEXT, value="链接")
    for alink in alinks:
        print("[index]", alinks.index(alink))
        print("[tag_name]", alink.tag_name)
        print("[class]", alink.get_attribute("class"))
        print("[value]", alink.get_attribute("value"))
        print("[text]", alink.text)
    print()
    # 等待2秒后继续
    time.sleep(2)

test_find_element_link_text(browser=browser)

```

代码输出

```shell:no-line-numbers
查找到 LINK_TEXT='链接' 元素的数量: 1
[index] 0
[tag_name] a
[class] demo-a
[value] None
[text] 链接
```

### 5. 通过 `By.PARTIAL_LINK_TEXT` 定位

实例代码片段

```py
def test_find_element_partial_link_text(browser: webdriver.Edge):
    """
    通过 PARTIAL_LINK_TEXT 定位元素

    参数:
        browser (webdriver.Edge): Edge浏览器, 已打开测试页面

    返回值:
        无
    """
    # 查找标签的 PARTIAL_LINK_TEXT 属性="链接"的元素列表
    alinks = browser.find_elements(by=By.PARTIAL_LINK_TEXT, value="链接")
    print("查找到 PARTIAL_LINK_TEXT='链接' 元素的数量:", len(alinks))
    # 注：find_element方法在没找到对象时会出NoSuchElementException异常
    alink = browser.find_element(by=By.PARTIAL_LINK_TEXT, value="链接")
    for alink in alinks:
        print("[index]", alinks.index(alink))
        print("[tag_name]", alink.tag_name)
        print("[class]", alink.get_attribute("class"))
        print("[value]", alink.get_attribute("value"))
        print("[text]", alink.text)
    print()
    # 等待2秒后继续
    time.sleep(2)

test_find_element_partial_link_text(browser=browser)

```

代码输出

```shell:no-line-numbers
查找到 PARTIAL_LINK_TEXT='链接' 元素的数量: 4
[index] 0
[tag_name] a
[class] demo-a
[value] None
[text] 链接
[index] 1
[tag_name] a
[class] demo-a
[value] None
[text] 提交链接A
[index] 2
[tag_name] a
[class] demo-a
[value] None
[text] 录入链接B
[index] 3
[tag_name] a
[class] demo-a
[value] None
[text] 保存链接C
```

### 6. 通过 `By.NAME` 定位

实例代码片段

```py
def test_find_element_name(browser: webdriver.Edge):
    """
    通过 NAME 定位元素

    参数:
        browser (webdriver.Edge): Edge浏览器, 已打开测试页面

    返回值:
        无
    """
    # 查找标签的 NAME 属性="_name"的元素列表
    names = browser.find_elements(by=By.NAME, value="_name")
    print("查找到 NAME='_name' 元素的数量:", len(names))
    # 注：find_element方法在没找到对象时会出NoSuchElementException异常
    name = browser.find_element(by=By.NAME, value="_name")
    for name in names:
        print("[index]", names.index(name))
        print("[tag_name]", name.tag_name)
        print("[class]", name.get_attribute("class"))
        print("[value]", name.get_attribute("value"))
        print("[text]", name.text)
    print()
    # 等待2秒后继续
    time.sleep(2)

test_find_element_name(browser=browser)

```

代码输出

```shell:no-line-numbers
查找到 NAME='_name' 元素的数量: 1
[index] 0
[tag_name] input
[class] demo-search
[value] 小钟同学
[text]
```

### 7. 通过 `By.TAG_NAME` 定位

实例代码片段

```py
def test_find_element_tag_name(browser: webdriver.Edge):
    """
    通过 TAG_NAME 定位元素

    参数:
        browser (webdriver.Edge): Edge浏览器, 已打开测试页面

    返回值:
        无
    """
    # 查找标签的 TAG_NAME 属性="button"的元素列表
    buttons = browser.find_elements(by=By.TAG_NAME, value="button")
    print("查找到 TAG_NAME='button' 元素的数量:", len(buttons))
    # 注：find_element方法在没找到对象时会出NoSuchElementException异常
    button = browser.find_element(by=By.TAG_NAME, value="button")
    for button in buttons:
        print("[index]", buttons.index(button))
        print("[tag_name]", button.tag_name)
        print("[class]", button.get_attribute("class"))
        print("[value]", button.get_attribute("value"))
        print("[text]", button.text)
    print()
    # 等待2秒后继续
    time.sleep(2)

test_find_element_tag_name(browser=browser)

```

代码输出

```shell:no-line-numbers
查找到 TAG_NAME='button' 元素的数量: 6
[index] 0
[tag_name] button
[class] vp-toggle-sidebar-button
[value] 
[text]
[index] 1
[tag_name] button
[class] vp-color-mode-switch
[value]
[text]
[index] 2
[tag_name] button
[class] vp-toggle-navbar-button
[value]
[text] 
[index] 3
[tag_name] button
[class] print-button
[value] 
[text]
[index] 4
[tag_name] button
[class] 
[value]
[text] 提交到百度搜索
[index] 5
[tag_name] button
[class]
[value]
[text] 这是个按钮
```

### 8. 通过 `By.CSS_SELECTOR` 定位

实例代码片段

```py
def test_find_element_css_selector(browser: webdriver.Edge):
    """
    通过 CSS_SELECTOR 定位元素

    参数:
        browser (webdriver.Edge): Edge浏览器, 已打开测试页面

    返回值:
        无
    """
    # 查找标签的 CSS_SELECTOR 属性=".demo-a"的元素列表
    alinks = browser.find_elements(by=By.CSS_SELECTOR, value=".demo-a")
    print("查找到 CSS_SELECTOR='.demo-a' 元素的数量:", len(alinks))
    # 注：find_element方法在没找到对象时会出NoSuchElementException异常
    alink = browser.find_element(by=By.CSS_SELECTOR, value=".demo-a")
    for alink in alinks:
        print("[index]", alinks.index(alink))
        print("[tag_name]", alink.tag_name)
        print("[class]", alink.get_attribute("class"))
        print("[value]", alink.get_attribute("value"))
        print("[text]", alink.text)
    print()
    # 等待2秒后继续
    time.sleep(2)

test_find_element_css_selector(browser=browser)

```

代码输出

```shell:no-line-numbers
查找到 CSS_SELECTOR='.demo-a' 元素的数量: 4
[index] 0
[tag_name] a
[class] demo-a
[value] None
[text] 链接
[index] 1
[tag_name] a
[class] demo-a
[value] None
[text] 提交链接A
[index] 2
[tag_name] a
[class] demo-a
[value] None
[text] 录入链接B
[index] 3
[tag_name] a
[class] demo-a
[value] None
[text] 保存链接C
```

## 元素操作
获取元素的文本内容和属性值
它这个和 xpath 获取文档属性值不太一样，这是需要注意的

文本内容：元素对象.text
属性值：元素对象.get_attribute(‘属性名’)
测试用例：

```py
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

```

文本框输入内容和点击按钮
send_keys()在使用时，一定要文本框，不然是不生效的，它就是来输入内容用

示例：

```py
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

```

## 无头浏览器模式
基于chrome 的无头浏览器
1、webdriver.ChromeOptions()，实例化 chrome 浏览器配置对象
2、chrome_options.add_argument('--headless')，开启无头模式
3、chrome_options.add_argument('--disable-gpu')，不开启显卡
4、browser = webdriver.Chrome(options=chrome_options)，实例化浏览器
如下代码展示

```py
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

```

基于PhantomJS的无头模式(selenium2系列用的多)
在 selenium4开始，phantomJS已经废弃了，建议使用 chrome 和 firefox 的无头浏览器其，这是只是简单的介绍下。

下载安装
下载地址：https://phantomjs.org/download.html
选择对应的操作系统即可，我这里是 mac os的

解压出来后，将 bin 目录的phantomjs拷贝到环境变量目录/usr/local/bin 目录下就行

验证
出现这个表示安装成功了

代码写法都差不多的

```py
def test_phantjs_driver(self):
    driver = webdriver.PhantomJS()
    driver.get('https://www.baidu.com')
    print(driver.title)
    driver.quit()
    pass

```