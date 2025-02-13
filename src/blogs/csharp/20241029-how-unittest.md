---
title: 使用C#如何写单元测试
head:
  - [meta, { name: keywords, content: C# 单元测试 }]
  - [meta, { name: description, content: 单元测试（unit testing）是一段自动化的代码，用来调用被测试的方法或类，而后验证基于该方法或类的逻辑行为的一些假设。 }]
category:
  - C#
tags:
  - C#
  - 单元测试
date: 2024-10-29
permalink: /blog/csharp/how-unittest.html
excerpt: <small>单元测试（unit testing）是一段自动化的代码，用来调用被测试的方法或类，而后验证基于该方法或类的逻辑行为的一些假设。</small>
---

> 用 VS2022 中自带的测试模块（MSTest）写一个简单的单元测试

## 功能代码

1. 新建一个空解决方案，并添加一个项目
   
2. 我们有一个小小的需求，做一个小游戏，计算中奖号码中，我的号码命中了几个

```c#
namespace DemoLibrary.Demo01
{
    public class SmallGame
    {
        public static int WinCount(string winNumbers, string myNumbers)
        {
            var arrWin = winNumbers.Split(',');
            var arrMy = myNumbers.Split(',');

            var result = arrWin.Intersect(arrMy).Count();
            return result;
        }
    }
}

```

## 测试项目

3. 在解决方案中添加一个测试项目
   
![Alt text](/assets/csharp/tdd/mstest-01-add-project.png "图片")

![Alt text](/assets/csharp/tdd/mstest-02-do-add-project.png "图片")

新建好测试项目之后，你会得到一个UnitTest1测试类模板。

## 基础测试

4. 在测试项目中，添加如下测试代码

```c#
namespace DemoLibrary.MSTestProject
{
    [TestClass]
    public partial class SmallGameTest
    {
        [TestMethod]
        public void TestWinCount____Case01_没有球中奖()
        {
            var game = new Demo01.SmallGame();
            game.WinNumbers = "01,05,07,09";
            var winCount = game.WinCount("02,03");

            Assert.AreEqual(0, winCount);
        }
    }
}
```

**TestClass特性**： 定义类为一个测试类

**TestMethod特性**： 定义方法为一个测试方法

**Assert断言**： 是用来测试方法的实际运行结果与期望的结果是否一致，是单元测试中最基本的组成部分

5. 可以在一个类里添加多个Case来测试多种情况

```c#
namespace DemoLibrary.MSTestProject
{
    [TestClass]
    public partial class SmallGameTest
    {
        [TestMethod]
        public void TestWinCount____Case01_没有球中奖()
        {
            var game = new Demo01.SmallGame();
            game.WinNumbers = "01,05,07,09";
            var winCount = game.WinCount("02,03");

            Assert.AreEqual(0, winCount);
        }
        [TestMethod]
        public void TestWinCount____Case02_中奖1个球()
        {
            var game = new Demo01.SmallGame();
            game.WinNumbers = "01,05,07,09";
            var winCount = game.WinCount("02,03,05");

            Assert.AreEqual(1, winCount);
        }
    }
}
```

6. 运行测试代码

打开 视图 -> 测试资源管理器，如下图

![Alt text](/assets/csharp/tdd/mstest-05-open-test-view.png "图片")

![Alt text](/assets/csharp/tdd/mstest-06-test-explorer.png "图片")

选择类名，并右键选择“运行”，全部运行成功后，前方有一个绿色的小勾

![Alt text](/assets/csharp/tdd/mstest-07-test-run.png "图片")

![Alt text](/assets/csharp/tdd/mstest-08-test-all-success.png "图片")

## 高级用法

### 参数化

7. 参数化测试（推荐）

上面例子中只是其中的两个测试用例，随着用例的增多，这样使用很不方便。我们可以通过DataRowAttribute参数，合并成一个用例，如下：

```c#
namespace DemoLibrary.MSTestProject
{
    [TestClass]
    public class SmallGameTest
    {
        [DataTestMethod]
        [DataRow("01,05,07,09", "02,03", 0, DisplayName = "没有球中奖")]
        [DataRow("01,05,07,09", "02,03,05", 1, DisplayName = "中奖1个球")]
        public void TestWinCount(string winCode, string myCode, object expectedValue)
        {
            var game = new Demo01.SmallGame();
            game.WinNumbers = winCode;
            var winCount = game.WinCount(myCode);

            Assert.AreEqual(expectedValue, winCount);
        }
    }
}
```

结果显示如下

![Alt text](/assets/csharp/tdd/mstest-09-test-param-all-success.png "图片")

8. 用DynamicData代替参数化测试

```c#
namespace DemoLibrary.MSTestProject
{
    [TestClass]
    public class SmallGameTest
    {
        [TestMethod]
        [DynamicData(nameof(Datas))]
        public void TestWinCount(string winCode, string myCode, object expectedValue)
        {
            var game = new Demo01.SmallGame();
            game.WinNumbers = winCode;
            var winCount = game.WinCount(myCode);

            Assert.AreEqual(expectedValue, winCount);
        }
        private static IEnumerable<object[]> Datas
        {
            get
            {
                yield return new object[] { "01,05,07,09", "02,03", 0 };
                yield return new object[] { "01,05,07,09", "02,03,05", 1 };
            }
        }
    }
}
```

总之，笔者还是推荐参数化测试。

### 初始化/清理

9. 测试的初始化/清理方法

| 特性        | 用途           |
|:------------- |:--------------|
|[TestInitialize]|定义为一个初始化方法，在`每次运行一个测试方法`之前，先调用此方法|
|[TestCleanup]|定义为一个清理方法，在`每次运行完一个测试方法`之后，再调用此方法|
|[ClassInitialize]|定义为一个类初始化方法，在`运行这个类的测试`之前，调用一次此方法，一般用于初始化这个类需要的数据，比如数据库。要求定义为静态方法，并添加TestContext作为参数|
|[ClassCleanup]|定义为一个类清理方法，在`运行完所有此类的测试`以后，再调用此方法|
|[AssemblyInitialize]|定义为一个程序集初始化方法，在`运行这个程序集的测试`之前，调用一次此方法，一般用于初始化这个程序集需要的数据，比如数据库。要求定义为静态方法，并添加TestContext作为参数|
|[AssemblyCleanup]|定义为一个程序集清理方法，在`运行完所有此程序集的测试`以后，再调用此方法|

**用法代码**

```c#
namespace DemoLibrary.MSTestProject
{
    [TestClass]
    public class SmallGameTest
    {
        [AssemblyInitialize]
        public static void AssemblyInit(TestContext testContext)
        {
        }

        [AssemblyCleanup]
        public static void AssemblyCleanup()
        {
        }

        [ClassInitialize]
        public static void ClassInit(TestContext testContext)
        {
        }

        [ClassCleanup]
        public static void ClassCleanup()
        {
        }

        [TestInitialize]
        public void TestInit()
        {
        }

        [TestCleanup]
        public void TestCleaup()
        {
        }
    }
}
```

### Assert断言

断言即断然言之，十分肯定地说。可以通过不同的断言来测试方法实际运行的结果和你期望的结果是否一致。

10. Assert静态类的断言方法

|方法|作用|
|:------|:------|
|Assert.AreEqual()|验证值相等|
|Assert.AreNotEqual()|验证值不相等|
|Assert.AreSame()|验证引用相等|
|Assert.AreNotSame()|验证引用不相等|
|Assert.Inconclusive()|暗示条件还未被验证|
|Assert.IsTrue()|验证条件为真|
|Assert.IsFalse()|验证条件为假|
|Assert.IsInstanceOfType()|验证实例匹配类型|
|Assert.IsNotInstanceOfType()|验证实例不匹配类型|
|Assert.IsNotNull()|验证条件为NULL|
|Assert.IsNull()|验证条件不为 NULL|
|Assert.Fail()|验证失败|

11. StringAssert静态类的断言方法

|方法|作用|
|:------|:------|
|StringAssert.AreEqualIgnoringCase()|用于断言两个字符串在不区分大小写情况下是否相等,需要提供两个参数,第一个是期待的结果,第二个是实际结果.|
|StringAssert.Contains()|用于断言一个字符串是否包含另一字符串,其中第一个参数为被包含的字符串,第二个为实际字符串|
|StringAssert.StartsWith()|断言字符串是否以某(几)字符开始, 第一个参数为开头的字符串 ,第二个为实际字符串|
|StringAssert.EndsWith()|断言字符串是否以某(几)字符结束|
|StringAssert.Matches()|断言字符串是否符合特定的正则表达式|

12. CollectionAssert静态类的断言方法

|方法|作用|
|:------|:------|
|CollectionAssert.AllItemsAreNotNull|断言集合里的元素全部不是Null,也即集合不包含null元素,这个方法只有一个参数,传入我们要判断的集合即可|
|CollectionAssert.AllItemsAreUnique|断言集合里面的元素全部是惟一的,即集合里没有重复元素|
|CollectionAssert.AreEqual|用于断言两个集合是否相等|
|CollectionAssert.AreEquivalent|用来判断两个集合的元素是否等价,如果两个集合元素类型相同,个数也相同,即视为等价,与上面的AreEqual方法相比,它不关心顺序|
|CollectionAssert.Contains|断言集合是否包含某一元素|
|CollectionAssert.IsEmpty|断言某一集合是空集合,即元素个数为0|
|CollectionAssert.IsSubsetOf|判断一个集合是否为另一个集合的子集,这两个集合不必是同一类集合(可以一个是array,一个是list),只要一个集合的元素完全包含在另一个集合中,即认为它是另一个集合的子集|
