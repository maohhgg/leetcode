

# LST (Leetcode Solutions with TypeScript)

我的 LeetCode 补全计划，旨在用 TypeScript 刷完所有的 LeetCode Problems :smile:

## 解题

### 问题分类

* [所有解 (All)](./doc/all.md)
* [数组 (Array)](./doc/array.md)
* [字符串 (String)](./doc/string.md)
* [数学 (Math)](./doc/math.md)
* [链表 (Linked List)](./doc/linked-list.md)
* [树 (Tree)](./doc/tree.md)
* [动态规划 (Dynamic Programming)](./doc/dynamic-programming.md)
* [Hash Table](./doc/hash-table.md)
* [深度优先搜索 (Depth-first Search)](./doc/depth-first-search.md)
* [二分查找 (Binary Search)](./doc/binary-search.md)

## 模块

在所有问题中，会经常出现需要额外的代码块

```js
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
```

在本项目中会实现一些模块，方便我们调试比如 [链表](https://leetcode.com/tag/linked-list/) 和 [树](https://leetcode.com/tag/tree/) 之类的题目。具体使用方式请点击下面链接：

* [数组 IntervalUnit](./doc/module.md#数组-Interval)
* [链表 LinkList](./doc/module.md#链表)
* [树 Tree](./doc/module.md#树)

## 使用说明

### 依赖

TypeScript 需要 **typescript@>=2.0** 的支持，如果需要直接运行 TypeScript 脚本，还需要 **ts-node** 的支持

```bash
# 推荐全局安装
npm install -g ts-node
npm install -g typescript
```

### 运行

运行代码和调试代码，需要手动运行指定文件：

```bash
problems $ ts-node ./src/problems/1.two-sum/index.ts 	# 运行 TypeScript 脚本
problems $ tsc ./src/problems/1.two-sum/index.ts        # 转译成 JavaScript 脚本

# 转译成 JavaScript 脚本后，可以使用 nodejs 运行脚本
problems $ node ./src/problems/1.two-sum/index.js 		
```

### 其他

当解答完其他题目，需要更新展示已经解答的 markdown 文档时，只需执行：

```bash
cd build
python3 update.py
```

即可更新 doc 目录下所有分类保存信息的 markdown文档，当前默认分为十类，请查阅上边的**问题分类**了解具体的分类。如果想添加新的分类，只需要在 `update.py` 文件的 `mian`函数中追加想要的分类名：

```python
if __name__ == "__main__":
    p = Problems()
    p.update('All')
    p.update('Array')
    p.update('Binary Search')
    ...
    p.update('Breadth-first Search') 
```

需要注意名称必须和 [LeetCode](<https://leetcode.com/problemset/all/>) 的 `tag`名称一致。

## TODO

- [ ] 有生之年完成所有题目 :joy:

