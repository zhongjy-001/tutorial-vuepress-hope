---
title: Python怎么设置国内镜像源
createTime: 2024/11/24 11:53:56
tags:
  - python
  - 镜像源
permalink: /blog/python/set-mirror.html
draft: true
---

一、国内镜像源 

先分享一些比较好的镜像源：

清华大学（推荐）：https://pypi.tuna.tsinghua.edu.cn/simple     

阿里云：http://mirrors.aliyun.com/pypi/simple/

中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/

华中科技大学：http://pypi.hustunique.com/

山东理工大学：http://pypi.sdutlinux.org/

豆瓣：http://pypi.douban.com/simple  

二、镜像源配置方法
     1.使用格式
格式为：pip install 库名 -i 镜像地址（注意空格的存在）

如下列是安装pandas库的示例：

pip install pandas -i https://pypi.tuna.tsinghua.edu.cn/simple 
永久添加镜像的方法：

输入一次即可永久使用！！！

pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/
pip config set install.trusted-host pypi.tuna.tsinghua.edu.cn

