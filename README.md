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
链表属于简单的数据结构，所以他的方法较少，在 LeetCode 中也只有 21 道题目关于[链表](https://leetcode.com/tag/linked-list/)。[LinkListFunction](https://github.com/maohhgg/leetcode/blob/master/Common/LinkList/LinkListFunction.js)
```js
// 引入 模块
const List = require("../../Common/LinkList/LinkListFunction.js")

// 创建一个 ListNode 实例
let l = List.createListNode(0);

// 创建一个单向链表
let list = List.createList([0,1,2,3]);
// 0 -> 1 -> 2 -> 3

// 打印单向链表
List.printList(list);
// 输出： 0 -> 1 -> 2 -> 3

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
Tree.preOrderTraverse(p);

// 中序遍历二叉树
Tree.inOrderTraverse(p);

// 后序遍历二叉树
Tree.lastOrderTraverse(p);

//二叉树深度
var dep = TreeFunction.maxDepth(p);

// 二叉树结点数
var nodeNum = TreeFunction.nodeNum(p);

// 二叉树所有叶子数
var leafNum = TreeFunction.leafNum(p);

// 打印二叉树的二维结构  
// 如果上一层有为 null ，当前层不会给上层 null 占位， 可根据自己的需求更改
TreeFunction.logTree(p);
//     1
//    / \
//   2   3
//        \
//         4
//[1]
//[2,3]
//[null,null,null,4]
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
| 21 |[Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/21.Merge%20Two%20Sorted%20Lists/index.js)|
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
| 107 |[Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/107.Binary%20Tree%20Level%20Order%20Traversal%20II/index.js)|
| 108 |[Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/108.Convert%20Sorted%20Array%20to%20Binary%20Search%20Tree/index.js)|
| 112 |[Path Sum](https://leetcode.com/problems/path-sum/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/112.Path%20Sum/index.js)|
| 151 |[Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/151.Reverse%20Words%20in%20a%20String/index.js)|
| 257 |[Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/257.Binary%20Tree%20Paths/index.js)|
| 617 |[Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/617.Merge%20Two%20Binary%20Trees/index.js)|
| 637 |[Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Easy%20Problems/637.Average%20of%20Levels%20in%20Binary%20Tree/index.js)|

## Medium Problems

| #  | title | source code |
|----------|------------|-------------|
| 2 |[Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Medium%20Problems/2.Add%20Two%20Numbers/index.js)|
| 19 |[Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Medium%20Problems/19.Remove%20Nth%20Node%20From%20End%20of%20List/index.js)|
| 24 |[Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Medium%20Problems/24.Swap%20Nodes%20in%20Pairs/index.js)|
| 61 |[Rotate List](https://leetcode.com/problems/rotate-list/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Medium%20Problems/61.Rotate%20List/index.js)|
| 102 |[Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Medium%20Problems/102.Binary%20Tree%20Level%20Order%20Traversal/index.js)|
| 103 |[Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Medium%20Problems/103.Binary%20Tree%20Zigzag%20Level%20Order%20Traversal/index.js)|


## Hard Problems
| #  | title | source code |
|----------|------------|-------------|
| 23 |[Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Hard%20Problems/23.Merge%20k%20Sorted%20Lists/index.js)|
| 25 |[Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/description/)|[JavaScript](https://github.com/maohhgg/leetcode/blob/master/Hard%20Problems/25.Reverse%20Nodes%20in%20k-Group/index.js)|