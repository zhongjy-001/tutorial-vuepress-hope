---
title: Python使用Selenium详细步骤
icon: simple-icons:selenium
head:
  - [meta, { name: keywords, content: python selenium }]
  - [meta, { name: description, content: Python使用Selenium的详细步骤 }]
category:
  - Python
tags:
  - python
  - selenium
date: 2024-10-21
permalink: /blog/python/how-selenium.html
excerpt: <small>Selenium 是一个强大的工具，可以用于自动化网页测试和网页操作。它支持多种浏览器，并且允许我们通过 Python 来控制这些浏览器进行操作。本教程将详细介绍如何在 Python 中安装、配置和使用 Selenium。</small>
---

## Selenium介绍

> Selenium官方中文文档：[https://www.selenium.dev/zh-cn/documentation/](https://www.selenium.dev/zh-cn/documentation/)

Selenium 可以直接在浏览器上操作，像人一样进行文本框输入内容、按钮点击、链接弹出、下拉等操作，一般我们用它来做自动化测试。

它在爬虫领域利用也非常广泛，能解决大部分网页反爬问题，Selenium可以根据驱动的代码指令来获取网页内容，甚至是验证码的截屏，或判断网站上的某些动作是否发生。这篇文章主要是围绕着爬虫展开。

Python 提供了多种模拟器运行库，Selenium、Splash、Pyppetter、Playwright 等，可以方便帮我们爬取，很大程度上可以绕过JavaScript动态渲染，获取数据。


## Selenium环境搭建 ##

> 我本机是 windows 11，浏览器使用 Edge 来进行测试
>
> Python建议使用[环境管理Anaconda](20241124-how-anaconda.md)，当前使用的Python3.8

::: code-tabs
@tab Python

```sh:no-line-numbers
pip install selenium
```

:::

::: warning 注意

国内环境如果提示连接不上，可[参考](20241124-set-mirror.md)设置镜像源。博主当前使用的（2024-11-24）： 

```sh:no-line-numbers
pip install selenium -i https://pypi.tuna.tsinghua.edu.cn/simple/
```

:::

安装成功以后，会出现如下界面

![开始安装Selenium](/assets/python/selenium/01-install-start.png "开始安装Selenium")

![安装完成Selenium](/assets/python/selenium/01-install-finish.png "安装完成Selenium")

## 安装驱动WebDriver ##

> Selenium 的工作方式是通过浏览器驱动（WebDriver）来操作浏览器，WebDriver可以使用 XPath，CSS 选择器来查找页面元素，与元素进行交互（发送文本，点击等），以及调用JS下拉页面等......
 
你需要根据你使用的浏览器下载相应的 WebDriver：

- Google Chrome浏览器

  1. 确定你的 Chrome 浏览器版本。打开 Chrome 浏览器并输入 `chrome://settings/help` 来查看版本。

  2. 下载对应版本的 ChromeDriver。[Google官网下载](https://sites.google.com/chromium.org/driver/downloads) [淘宝镜像](https://npmmirror.com/package/chromedriver/versions) [Github下载](https://googlechromelabs.github.io/chrome-for-testing/#stable)

  3. 将下载的 （Windows）或 （macOS/Linux）放入你的 Python 环境的 PATH 中（如：C:\PythonXX或/usr/local/bin）。

- Firefox浏览器

  1. 下载对应版本的 geckodriver。[官方下载](https://github.com/mozilla/geckodriver/releases)

  2. 同样将下载的文件放入 PATH 中。

- Edge 浏览器

  1. 确定你的 Edge 浏览器版本。打开 Edge 浏览器并输入 `edge://settings/help` 来查看版本。

  1. 下载对应版本的 Edge WebDriver，[微软官网下载](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/#downloads)。

  2. 同样将下载的文件放入 PATH 中。

> 无界面浏览器，会把网站加载到内存并执行页面上的JavaScript，因为不会展示图形界面，所以运行起来比完整的浏览器要高效，它一般是用在像Linux线上服务器，不过现在Chrome（v65以上）也支持无头浏览器了。

## 使用 Selenium ##

下面是一个简单的示例，展示如何使用 Selenium 来打开一个网页并进行一些基本操作。

### 1. 导入库

在你的 Python 文件中，首先需要导入 Selenium 的相关模块：

```py
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
```

### 2. 启动浏览器

启动 Chrome 浏览器并打开指定的网页：

```py
# 如果使用 Firefox，则使用 webdriver.Firefox()
driver = webdriver.Chrome()
# 替换为你想访问的网址
driver.get("https://www.example.com")
```

### 3. 与网页元素交互

查找网页上的元素并进行交互。例如，查找一个输入框并发送一个键入信息：

```py
# 查找输入框（假设它的 name 属性为 search）
search_box = driver.find_element(By.NAME, "search")
# 输入信息
search_box.send_keys("Selenium")
# 模拟按下回车键
search_box.send_keys(Keys.RETURN)
```

### 4. 等待网页加载

如果网页需要一些时间加载，可以使用  等待几秒，或者使用 Selenium 提供的隐式等待和显式等待。

```py
# 等待5秒，确保页面加载完成
time.sleep(5)
```

### 5. 关闭浏览器

完成操作后，最好关掉浏览器：

```py
# 关闭浏览器
driver.quit()
```

## 完整示例

以下是一个完整的示例程序，该程序打开浏览器，访问百度，搜索关键词“小钟同学”并打印出搜索前后的网页标题，然后10秒后关闭浏览器：

:::tabs

@tab Chrome示例

```py
from selenium import webdriver
import time

# 启动 Chrome 浏览器
browser = webdriver.Chrome()
try:
    # 发送请求访问百度
    browser.get("https://www.baidu.com")
    # 获取页面标题
    print("Page title:", browser.title)
    # 在搜索框中输入“小钟同学”
    ele_search = browser.find_element(value="kw")
    ele_search.send_keys("小钟同学")
    # 提交
    ele_search.submit()
    # 等待10秒后继续
    time.sleep(10)
    # 获取页面标题
    print("Page title:", browser.title)
finally:
    # 退出浏览器
    browser.quit()
```

@tab Edge示例

```py
from selenium import webdriver
import time

# 启动 Edge 浏览器
browser = webdriver.Edge()
try:
    # 发送请求访问百度
    browser.get("https://www.baidu.com")
    # 获取页面标题
    print("Page title:", browser.title)
    # 在搜索框中输入“小钟同学”
    ele_search = browser.find_element(value="kw")
    ele_search.send_keys("小钟同学")
    # 提交
    ele_search.submit()
    # 等待10秒后继续
    time.sleep(10)
    # 获取页面标题
    print("Page title:", browser.title)
finally:
    # 退出浏览器
    browser.quit()
```

:::

## 结束

Selenium 提供了一个强大的接口来控制浏览器，实现自动化测试和网页操作。通过以上教程，你可以快速入门并开始创建自己的自动化脚本。查阅指南文档以了解更多高级用法和功能
