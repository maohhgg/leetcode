## 模块

#### 数组 Interval

在数组分类下的 56.[Merge Intervals](https://leetcode.com/problems/merge-intervals/) 和 57.[Insert Interval](https://leetcode.com/problems/merge-intervals/) 需要一个 **Interval** 的对象，这里封装成对象

```ts
// 引入 模块
import { IntervalUnit, Interval } from './src/common/interval'

// 创建一个Collection
let c: Interval[] = IntervalUnit.createCollection([["it's string", 10], ['pi', 3.14], [1, 2]])
/*
[ Interval { start: 'it\'s string', end: 10 },
  Interval { start: 'pi', end: 3.14 },
  Interval { start: 1, end: 2 } ]
*/

// 转化成数组
let array: any[][] = IntervalUnit.toArray(c)
// [[ 'it\'s string', 10 ], [ 'pi', 3.14 ], [ 1, 2 ]]
```

#### 链表

```ts
// 引入 模块
import { LinkList, ListNode } from './src/common/linklist'

// 创建一个 ListNode 实例
let n = LinkList.createNode(1);

// 创建一个单向链表
let l1 = LinkList.createList([0,1,2,3]);
// 0 -> 1 -> 2 -> 3

// 创建一个链表环
let l2 = LinkList.createCycleList([0,1,2,3]);
// 0 -> 1 -> 2 -> 3
// ↑             |
// └─────────────┘

// 打印单向链表
let s1 = LinkList.printList(l1);
// s1：0 -> 1 -> 2 -> 3

// 打印链表环
let s2 = LinkList.printCycleList(l2);
// 0 -> 1 -> 2 -> 3
// ↑             |
// └─────────────┘
// s2：0 -> 1 -> 2 -> 3 -> ...

// 删除第 n 个节点
l1 = List.removeNthNode(l1,1)  // 删除第 1 个节点 计数从 0 开始
// 删除前 l1：0 -> 1 -> 2 -> 3  
// 删除后 l1：0 -> 2 -> 3  
```

#### 树

```ts
// 引入 模块
import { Tree, TreeNode } from './src/common/tree'

// 创建一个 TreeNode 实例
let n = Tree.createNode(5);

// 创建二叉树 
//     1
//    / \
//   2   3
//  /  
// 4  
let t1 = Tree.createBiTree([1, 2, 3, 4])

//     1
//    / \
//   2   3
//  /     \
// 4       5
//          \
//           6
let t2 = Tree.createBiTree([1, 2, 3, 4, null, null, 5,null,null,null,null,null,null,null,6])


// 先序遍历二叉树
console.log(Tree.traverse(t1, 'pre'))

// 中序遍历二叉树
console.log(Tree.traverse(t1, 'in'))

// 后序遍历二叉树
console.log(Tree.traverse(t1, 'last'))

// 二叉树深度
console.log(Tree.countDepth(t2))

// 二叉树结点数
console.log(Tree.countNode(t2))

// 二叉树所有叶子数
console.log(Tree.countLeaf(t2))

// 打印二叉树的二维结构  
Tree.logTree(t2);
//     1
//    / \               [ 1 ]
//   2   3              [ 2, 3 ] 
//  /     \      ==>    [ 4, null, null, 5 ]
// 4       5            [ null, null, null, null, null, null, null, 6 ]
//          \
//           6
```

