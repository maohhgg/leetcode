# LeetCode (Leetcode Solutions with JavaScript)

> 我的 LeetCode 补全计划，旨在用 JavaScript 刷完所有的 LeetCode Problems :scream:

## 简介

本项目会缓慢更新，本项目下的结题文件都是 JavaScript 编写，并补上了一些问题所需的结构。你可以在本地使用 nodejs 运行和调试。
```shell
// windows
D:\leetcode>node ./"Easy Problems"/"88.Merge Sorted Array"/
[ 1, 2 ]

//Linux
~/leetcode$ node ./Easy\ Problems/88.Merge\ Sorted\ Array/
[ 1, 2 ]
```
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

#### 链表
暂时空缺，待完成

#### 树
在所有问题中，有 71（2017/8/31） 题是关于 [树](https://leetcode.com/tag/tree/) 的问题，故将所有树中所需的操作打包成 [TreeFunction](https://github.com/maohhgg/leetcode/blob/master/Tree/TreeFunction.js)。

用法：
```js
// 引入 模块
var Tree = require("../../Tree/TreeFunction.js")

// 创建一个 TreeNode 实例
var p = Tree.createTreeNode(5);

// 创建二叉树 
//     1
//    / \
//   2   3
//  /  
// 4  
var p = Tree.createBinaryTree([1,2,4,0,0,0,3,0,0]); // 不推荐 已有优化后的
var p = Tree.createBiTree([1,2,3,4])

//     1
//    / \
//   2   3
//        \
//         4
var p = Tree.createBinaryTree([1,2,0,0,3,0,4,0,0]); // 不推荐
var p = Tree.createBiTree([1,2,3,null,null，null,4])

// 先序遍历二叉树
Tree.preOrderTraverse(p);

// 中序遍历二叉树
Tree.inOrderTraverse(p);

// 后序遍历二叉树
Tree.lastOrderTraverse(p);

//二叉树深度
console.log(TreeFunction.maxDepth(p));

// 二叉树结点数
console.log(TreeFunction.nodeNum(p));

// 二叉树所有叶子数
console.log(TreeFunction.leafNum(p));
```

## TODO

- [ ] 1.所有的Easy Problems

- [ ] 2.所有的Medium Problems

- [ ] 3.所有的Hard Problems

- [ ] 4.完成和优化所需模块
    - [x] 1.优化二叉树的创建，将参数`[6,2,1,0,0,4,3,0,0,0,8,0,0]`变成`[6,2,8,1,4,null,null,null,null,3]`
    - [ ] 2.链表模块

## Easy Problems

| #  | title | source code |
|----------|------------|-------------|
| 1 |[Two Sum](https://leetcode.com/problems/two-sum/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/1.Two%20Sum/index.js)|
| 7 |[Reverse Integer](https://leetcode.com/problems/reverse-integer/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/7.Reverse%20Integer/index.js)|
| 9 |[Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/9.Palindrome%20Number/index.js)|
| 13 |[Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/13.Roman%20to%20Integer/index.js)|
| 14 |[Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/14.Longest%20Common%20Prefix/index.js)|
| 20 |[Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/20.Valid%20Parentheses/index.js)|
| 26 |[Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/26.Remove%20Duplicates%20from%20Sorted%20Array/index.js)|
| 27 |[Remove Element](https://leetcode.com/problems/remove-element/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/27.Remove%20Element/index.js)|
| 28 |[Implement strStr()](https://leetcode.com/problems/implement-strstr/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/28.Implement%20strStr()/index.js)|
| 35 |[Search Insert Position](https://leetcode.com/problems/search-insert-position/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/35.Search%20Insert%20Position/index.js)|
| 38 |[Count and Say](https://leetcode.com/problems/count-and-say/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/38.Count%20and%20Say/index.js)|
| 53 |[Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/53.Maximum%20Subarray/index.js)|
| 58 |[Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/58.Length%20of%20Last%20Word/index.js)|
| 66 |[Plus One](https://leetcode.com/problems/plus-one/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/66.Plus%20One/index.js)|
| 67 |[Add Binary](https://leetcode.com/problems/add-binary/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/67.Add%20Binary/index.js)|
| 70 |[Climbing Stairs](https://leetcode.com/problems/climbing-stairs/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/70.Climbing%20Stairs/index.js)|
| 88 |[Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/88.Merge%20Sorted%20Array/index.js)|
| 100 |[Same Tree](https://leetcode.com/problems/same-tree/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/100.Same%20Tree/index.js)|
| 101 |[Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/101.Symmetric%20Tree/index.js)|
| 104 |[Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/104.Maximum%20Depth%20of%20Binary%20Tree/index.js)|
## Medium Problems

## Hard Problems