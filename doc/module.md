## 模块

#### 引入模块

所有模块的源码都放在`src/common`目录下，当要使用模块时只要导入相应模块即可。假设工当前作目录为`src/problems`，且使用了`TypeScript`作为开发语言。

```ts
import {Tree, TreeNode} from "../../common/tree";
```

为了简单化，并没有进行其他配置。如若想要更方便或者其他需求，请自行配置。



#### 数组 Interval

在数组分类下的 56.[Merge Intervals](https://leetcode.com/problems/merge-intervals/) 和 57.[Insert Interval](https://leetcode.com/problems/merge-intervals/) 需要一个 **Interval** 的对象，这里封装成对象

##### `IntervalUnit.createCollection(array)`

* **参数：**

  * `{Array<any[]>} data`

* **返回值：** `{Interval} `的数组集合

* **用法：**

  将只有两个元素的数组的集合转化成`Interval`对象的数组。



##### `IntervalUnit.toArray(collection)`

- **参数：**

  - `{Array<Interval>} collection`

- **返回值：** 二维数组

- **用法：**

  将`Interval`对象的数组转化成二维数组。

#### 链表 LinkList

##### `LinkList.createNode(value)`

- **参数：**

  - `{number} value`

- **返回值：** `{ListNode}` 单个节点

- **用法：**

  创建单个节点

  

##### `LinkList.createList(values,cycle)`

- **参数：**

  - `{Array<number>} values`
  - `{boolean} cycle`  **可选值** 是否创建为循环链表，默认为 `false` 。

- **返回值：** `{ListNode}` 返回头节点

- **用法：**

  按顺序将数组中的元素创建成链表

  

##### `LinkList.printList(head,cycle)`

- **参数：**

  - `{ListNode} head`
  - `{boolean} cycle`  **可选值** 是否创建为循环链表，默认为 `false` 。

- **用法：**

  打印链表

  

##### `LinkList.removeNNode(head,n)`

- **参数：**

  - `{ListNode} head`
  - `{number} n`  需要删除节点的序号

- **返回值：** `{ListNode}` 返回修改后的链表的头节点

- **用法：**

  删除链表指定的节点



#### 树 Tree

##### `Tree.createNode(value)`

- **参数：**

  - `{number} value`

- **返回值：** `{TreeNode}` 单个节点

- **用法：**

  创建单个节点。

  

##### `Tree.createBiTree(values)`

- **参数：**

  - `{Array<number>} values`

- **返回值：** `{TreeNode}` 二叉树的根节点

- **用法：**

  根据数组创建一棵二叉树。

  

##### `Tree.traverse(root,order)`

- **参数：**

  - `{TreeNode} root`
  - `{number} order`  遍历的顺序规则，只用三种情况，先序遍历`Tree.PRE`、中序遍历`Tree.IN`、后序遍历`Tree.LAST`。

- **返回值：** `Array<number>` 返回指定遍历顺序规则值的数组

- **用法：**

  根据`order`指定的规则遍历二叉树，并返回遍历结果的数组。

  

##### `Tree.countDepth(root)`

- **参数：**

  - `{TreeNode} root`

- **返回值：** `{number}` 返回最大的深度

- **用法：**

  计算二叉树最大的深度。

  

##### `Tree.countNode(root)`

- **参数：**

  - `{TreeNode} root`

- **返回值：** `{number}` 返回节点数

- **用法：**

  计算二叉树总共有多少节点。

  

##### `Tree.countLeaf(root)`

- **参数：**

  - `{TreeNode} root`

- **返回值：** `{number}` 返回叶子节点数

- **用法：**

  计算二叉树总共有多少叶子节点。



##### `Tree.logTree(root)`

- **参数：**

  - `{TreeNode} root`

- **用法：**

  以数组的方式打印出二叉树每层节点。

#### 完全二叉树 PerfectTree

完全二叉树是二叉树的特殊案例，所以完全二叉树时在树的基础上添加功能，完全二叉树继承树模块。当前只列出在树中没有的。

##### `PerfectTree.BiTreeToNode(root)`

- **参数：**

  - `{TreeNode} root`

- **返回值：** `{Node}` 返回新的二叉树的根节点

- **用法：**

  `TreeNode` 没有`next`属性，`Node`有`next`属性。当前方法将`TreeNode`构成的二叉树转换为由`Node`构成的二叉树。

  

##### `PerfectTree.NodeToPerfectTree(root)`

- **参数：**

  - `{Node} root`

- **返回值：** `{Node}` 返回修改后的二叉树根节点

- **用法：**

  将`next`指向同一层右边的节点，无论是否是同一个父节点，只考虑位置是否在同一层，且位置是当前位置的右边。



