---
title: Python设置国内镜像源的方法
head:
  - [meta, { name: keywords, content: Python 镜像源 }]
  - [meta, { name: description, content: Python设置国内镜像源的方法 }]
category:
  - Python
tags:
  - Python
  - 镜像源
date: 2024-11-24
permalink: /blog/python/set-mirror.html
excerpt: <small>国内镜像源及镜像源配置方法</small>
---

## 国内镜像源 

比较好的镜像源：

- 清华大学（推荐）：https://pypi.tuna.tsinghua.edu.cn/simple     

- 阿里云：http://mirrors.aliyun.com/pypi/simple/

- 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/

- 华中科技大学：http://pypi.hustunique.com/

- 山东理工大学：http://pypi.sdutlinux.org/

- 豆瓣：http://pypi.douban.com/simple  

## 镜像源配置方法

**临时使用镜像的方法**：`pip install 库名 -i 镜像地址`（注意空格）

如下列是安装pandas库的示例

```sh:no-line-numbers
pip install pandas -i https://pypi.tuna.tsinghua.edu.cn/simple 
```

**修改配置文章的方法**

- Linux/Mac os 环境

配置文件位置在 `~/.pip/pip.conf`（如果不存在创建该目录和文件）：

`mkdir ~/.pip`

打开配置文件 `~/.pip/pip.conf`，修改如下：

```sh:no-line-numbers
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn
```

查看 镜像地址：

```sh:no-line-numbers
$ pip3 config list   
global.index-url='https://pypi.tuna.tsinghua.edu.cn/simple'
install.trusted-host='https://pypi.tuna.tsinghua.edu.cn'
```

可以看到已经成功修改了镜像。

- Windows环境

你需要在当前对用户目录下（`C:\Users\xx\pip`，xx 表示当前使用对用户）创建一个 `pip.ini` 在 `pip.ini` 文件中输入以下内容：

```sh:no-line-numbers
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = pypi.tuna.tsinghua.edu.cn
```

**永久添加镜像的方法**：

输入一次即可永久使用！！！

```sh:no-line-numbers
# 清华源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
pip config set install.trusted-host pypi.tuna.tsinghua.edu.cn
# 阿里源
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
pip config set install.trusted-host mirrors.aliyun.com
# 腾讯源
pip config set global.index-url http://mirrors.cloud.tencent.com/pypi/simple
pip config set install.trusted-host mirrors.cloud.tencent.com
# 豆瓣源
pip config set global.index-url http://pypi.douban.com/simple/
pip config set install.trusted-host pypi.douban.com
# 换回默认源
pip config unset global.index-url
```
