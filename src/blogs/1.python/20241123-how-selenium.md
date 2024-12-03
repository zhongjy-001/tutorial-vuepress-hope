---
title: Python使用Selenium详细步骤
icon: skill-icons:selenium
category:
  - 编程语言
  - Python
tags:
  - python
  - selenium
createTime: 2024/10/21 14:42:33
permalink: /blog/python/how-selenium.html
excerpt: 这里的内容会被作为摘要
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

::: tip 提示

国内环境如果提示连接不上，可[参考](20241124-set-mirror.md)设置镜像源。当前使用的（2024-11-24）： 

```sh:no-line-numbers
pip install selenium -i https://pypi.tuna.tsinghua.edu.cn/simple/
```

:::

安装成功以后，会出现如下界面

![开始安装Selenium](/images/python/selenium/01-install-start.png "开始安装Selenium")

![安装完成Selenium](/images/python/selenium/01-install-finish.png "安装完成Selenium")

## 安装驱动WebDriver ##

> WebDriver可以使用 XPath，CSS 选择器来查找页面元素，与元素进行交互（发送文本，点击等），以及调用JS下拉页面等...

- Chrome浏览器

淘宝镜像：[https://npmmirror.com/package/chromedriver/versions](https://npmmirror.com/package/chromedriver/versions)

Google官网：[https://googlechromelabs.github.io/chrome-for-testing/#stable](https://googlechromelabs.github.io/chrome-for-testing/#stable)

- Firefox浏览器

[https://github.com/mozilla/geckodriver/releases/](https://github.com/mozilla/geckodriver/releases/)

- Edge浏览器

[https://developer.microsoft.com/en-us/microsoftedge/tools/webdriver/#downloads](https://developer.microsoft.com/en-us/microsoftedge/tools/webdriver/#downloads)

- 无头浏览器

无界面浏览器，它会把网站加载到内存并执行页面上的 JavaScript，因为不会展示图形界面，所以运行起来比完整的浏览器要高效，它一般是用在像linux线上服务器，不过现在 chrome（v65以上） 也支持无头浏览器了。

==注意==：下载安装步骤如下:需要下对应浏览器版本的驱动
查看 chrome的版本是最新版本123，所以下载对应的驱动


下载对应的版本：
macos 分为 intel 还是arm 的，我因电脑是 intel，所以选择时也要选mac64

浏览器对应的驱动版本


驱动安装和测试
将驱动文件解压，放在环境变量的目录/usr/local/bin 就行

mv Downloads/chromedriver-mac-x64/chromedriver /usr/local/bin/
1
测试
之后的代码都是使用了测试用例，具体代码看码云上的源码，这里先做一个前置操作，设置chrome 驱动的路径，默认在代码中不设置，程序会自动从环境变量中去寻找，但是 selenium启动时会超慢

def setUp(self) -> None:
    """
    @todo: 设置驱动的路径,主要是为了加快selenium的启动速度，不用再去搜索驱动的路径
    @return:
    """
    self.service = ChromService(executable_path="/usr/local/bin/chromedriver")
    pass
'
运行运行
def test_chrome_driver(self):
    """
    @todo: selenium测试chrome的浏览器
    @return:
    """
    # 设置驱动的路径,这是 selenium4之后的新写法
    # 实例化浏览器对象
    browser = webdriver.Chrome(service=self.service)
    # 发送请求访问百度
    browser.get('https://www.baidu.com')
    # 获取页面标题
    print("当前页面标题：", browser.title)

    time.sleep(10)
    # 退出浏览器
    browser.quit()
    pass
'
运行运行

其流程是:
①、开启了一个 新的chrome 窗口，并打开 baidu 网站
②、输出 title 标题
③、关闭浏览器，注意，在 selenium4之前最后一定要手动退出，不然会有残留进程，之后是不用写，自动关闭

