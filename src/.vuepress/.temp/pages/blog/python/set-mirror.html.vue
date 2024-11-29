<template><div><p>一、国内镜像源</p>
<p>先分享一些比较好的镜像源：</p>
<p>清华大学（推荐）：https://pypi.tuna.tsinghua.edu.cn/simple</p>
<p>阿里云：http://mirrors.aliyun.com/pypi/simple/</p>
<p>中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/</p>
<p>华中科技大学：http://pypi.hustunique.com/</p>
<p>山东理工大学：http://pypi.sdutlinux.org/</p>
<p>豆瓣：http://pypi.douban.com/simple</p>
<p>二、镜像源配置方法
1.使用格式
格式为：pip install 库名 -i 镜像地址（注意空格的存在）</p>
<p>如下列是安装pandas库的示例：</p>
<p>pip install pandas -i https://pypi.tuna.tsinghua.edu.cn/simple
永久添加镜像的方法：</p>
<p>输入一次即可永久使用！！！</p>
<p>pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/
pip config set install.trusted-host pypi.tuna.tsinghua.edu.cn</p>
</div></template>


