# LeetCode (Leetcode Solutions with JavaScript)

> 我的 LeetCode 补全计划，旨在用 JavaScript 刷完所有的 LeetCode Problems :scream:

## 简介

本项目会缓慢更新，本项目下的结题文件都是 JavaScript 编写，并补上了一些问题所需的结构。你可以在本地使用 nodejs 运行和调试。
```shell
// windows
D:\leetcode>node 1.two-sum/Javascript
[ 1, 2 ]
D:\leetcode>node 1.two-sum/Javascript.js
[ 1, 2 ]

//Linux
~/leetcode$ node 1.two-sum/Javascript
[ 1, 2 ]
~/leetcode$ node 1.two-sum/Javascript.js
[ 1, 2 ]
```

PS： [刷题列表](ProblemsList.md)

### 模块
在所有问题中，会经常出现需要额外的代码来实现功能，方便我们调试比如 [链表](https://leetcode.com/tag/linked-list/) 和 [树](https://leetcode.com/tag/tree/) 之类的题目中会出现的条件。
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
```

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
```
在本项目中会实现一些模块，来方便我刷题。

#### 数组（时差 Intervals）
在数组分类下的 56.[Merge Intervals](https://leetcode.com/problems/merge-intervals/) 和 57.[Insert Interval](https://leetcode.com/problems/merge-intervals/) 需要一个 **Interval** 的对象，这里封装成对象
```js
// 引入 模块
const it = require("../../Common/Array/IntervalFunction.js");

// 创建一个Collection
let collection = it.creatCollection([[1,3],[2,6],[8,10],[15,18]])
/*[{ Interval: { start: 1, end: 3 }},
   { Interval: { start: 2, end: 6 }},
   { Interval: { start: 8, end: 10 }},
   { Interval: { start: 15, end: 18 }}]*/

// 转化成数组
let array = it.toArray(collection)
// [[1,3],[2,6],[8,10],[15,18]]
```

#### 链表
链表属于简单的数据结构，所以他的方法较少，在 LeetCode 中也只有 21 道题目关于[链表](https://leetcode.com/tag/linked-list/)。[LinkListFunction](https://github.com/maohhgg/leetcode/blob/master/Common/LinkList/LinkListFunction.js)
```js
// 引入 模块
const List = require("../../Common/LinkList/LinkListFunction.js")

// 创建一个 ListNode 实例
let l = List.createLinkNode(0);

// 创建一个单向链表
let list = List.createList([0,1,2,3]);
// 0 -> 1 -> 2 -> 3

// 创建一个链表环
let list = List.createCycleList([0,1,2,3]);
// 0 -> 1 -> 2 -> 3
// ↑             |
// └─────────────┘

// 打印单向链表
List.printList(list);
// 输出： 0 -> 1 -> 2 -> 3

// 打印链表环
List.printCycleList(list);
// 0 -> 1 -> 2 -> 3
// ↑             |
// └─────────────┘
// 输出一遍所有的
// 0 -> 1 -> 2 -> 3 -> ...

// 删除第 n 个节点
list = List.removeNthNode(list,1)
// 0 -> 1 -> 2 -> 3  n = 1
// 0 -> 2 -> 3  
```

#### 树
在所有问题中，有 71（2017/8/31） 题是关于 [树](https://leetcode.com/tag/tree/) 的问题，故将所有树中所需的操作打包成 [TreeFunction](https://github.com/maohhgg/leetcode/blob/master/Common/Tree/TreeFunction.js)。

用法：
```js
// 引入 模块
const Tree = require("../../Common/Tree/TreeFunction.js")

// 创建一个 TreeNode 实例
let p = Tree.createTreeNode(5);

// 创建二叉树 
//     1
//    / \
//   2   3
//  /  
// 4  
let p = Tree.createBinaryTree([1,2,4,0,0,0,3,0,0]); // 不推荐 已有优化后的
let p = Tree.createBiTree([1,2,3,4])

//     1
//    / \
//   2   3
//        \
//         4
let p = Tree.createBinaryTree([1,2,0,0,3,0,4,0,0]); // 不推荐
let p = Tree.createBiTree([1,2,3,null,null，null,4])

// 先序遍历二叉树
Tree.Order(p,'pre');

// 中序遍历二叉树
Tree.Order(p,'in');

// 后序遍历二叉树
Tree.Order(p,'last');

//二叉树深度
var dep = Tree.maxDepth(p);

// 二叉树结点数
var nodeNum = Tree.nodeNum(p);

// 二叉树所有叶子数
var leafNum = Tree.leafNum(p);

// 打印二叉树的二维结构  
// 如果上一层有为 null ，当前层不会给上层 null 占位， 可根据自己的需求更改
Tree.logTree(p);
//     1
//    / \
//   2   3
//        \
//         4
//[1]
//[2,3]
//[null,null,null,4]
```

## 解题

-   [所有解 (All)](./Documents/All.md)

### 问题分类

-  [数组 (Array)](./Documents/Array.md)
-  [字符串 (String)](./Documents/String.md)
-  [数学 (Math)](./Documents/Math.md)
-  [链表 (Linked List)](./Documents/Linked%20List.md)
-  [树 (Tree)](./Documents/Tree.md)

## TODO

- [ ] 1. 完成所有题目

- [ ] 2. 完成和优化所需模块
    - [x] 1. 优化二叉树的创建，将参数`[6,2,1,0,0,4,3,0,0,0,8,0,0]`变成`[6,2,8,1,4,null,null,null,null,3]`
    - [x] 2. 链表模块
    - [ ] 3. more..
