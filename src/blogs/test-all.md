---
title: 测试页面
permalink: /blog/test-all.html
article: false
---

<style>
    .demo-container{
        padding: 10px;
        background-color: red;
    }
    .demo-label{
        padding: 10px;
        background-color: yellow;
    }
    .demo-a{
        margin: 10px;
    }
</style>

## Selenium测试

<form id="tfrm" action="https://www.baidu.com/s" target="_blank">
    <input type="text" id="txtname" name="wd" value="测试Selenium">
    <button>提交到百度搜索</button>
</form>

**通过 `By` 定位**

<div class='demo-container'>
    <label>div的ID='lblname'</label>
    <div class='demo-label' id='lblname'>我的id=lblname</div>
    <div class='demo-inner'>
        <input type='hidden' name='_id' id='txtid' value='A001' />
        <input type='text' class='demo-search' name='_name' id='txtsearch' value='小钟同学' />
        <button>这是个按钮</button>
    </div>
    <div class='demo-label'>我的id=''</div>
    <div class='demo-label'>
        <a class='demo-a' href=''>链接</a>
        <a class='demo-a' href=''>提交链接A</a>
        <a class='demo-a' href=''>录入链接B</a>
        <a class='demo-a' href=''>保存链接C</a>
    </div>
</div>
