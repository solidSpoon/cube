# Cube Algorithms

一个用于收集个人 CFOP 公式的简洁网页，当前重点是 OLL 和 PLL。

## 结构

- `src/components/atoms/cube-case-diagram`：魔方 case 图形组件
- `src/components/organisms/algorithm-section`：公式分组展示组件
- `src/app/cases/oll.ts`：OLL 公式数据
- `src/app/cases/pll.ts`：PLL 公式数据

新增公式时，优先只编辑 `src/app/cases/oll.ts` 或 `src/app/cases/pll.ts`。每个 case 维护名称、公式、备注和图形参数即可。

## Development

```bash
yarn dev
```

## Build

```bash
yarn build
```

## Lint

```bash
yarn lint
```
