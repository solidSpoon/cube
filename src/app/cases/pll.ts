import type { AlgorithmSection } from "./types";

const pllSections: AlgorithmSection[] = [
  {
    id: "pll-corners",
    title: "PLL 角块顺序",
    description: "先调整四个角块的位置。",
    cases: [
      {
        id: "pll-aa",
        name: "A 置换",
        algorithm: "x R' U R' D2 R U' R' D2 R2 x'",
        note: "找到两个同色角，把那一面放到后面。",
        diagram: {
          sideBars: ["top", "right", "bottom", "left"],
          stickers: [
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
          ],
          arrows: [
            {
              from: [0.5, 2.5],
              to: [2.5, 0.5],
            },
            {
              from: [2.5, 0.5],
              to: [2.5, 2.5],
            },
            {
              from: [2.5, 2.5],
              to: [0.5, 2.5],
            },
          ],
        },
      },
      {
        id: "pll-e",
        name: "E 置换",
        algorithm: "x' R U' R' D R U R' D' R U R' D R U' R' D' x",
        note: "没有任何一条同色角边时使用。",
        diagram: {
          sideBars: ["top", "right", "bottom", "left"],
          stickers: [
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
          ],
          arrows: [
            {
              from: [0.5, 0.5],
              to: [2.5, 0.5],
            },
            {
              from: [2.5, 0.5],
              to: [0.5, 0.5],
            },
            {
              from: [0.5, 2.5],
              to: [2.5, 2.5],
            },
            {
              from: [2.5, 2.5],
              to: [0.5, 2.5],
            },
          ],
        },
      },
    ],
  },
  {
    id: "pll-edges",
    title: "PLL 棱块顺序",
    description: "角块已经正确后，调整棱块的位置。",
    cases: [
      {
        id: "pll-ua",
        name: "Ua 置换",
        algorithm: "M2 U M U2 M' U M2",
        note: "三条棱块逆时针轮换。",
        diagram: {
          sideBars: ["top", "right", "bottom", "left"],
          stickers: [
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
          ],
          arrows: [
            {
              from: [0.5, 1.5],
              to: [1.5, 2.5],
            },
            {
              from: [1.5, 2.5],
              to: [2.5, 1.5],
            },
            {
              from: [2.5, 1.5],
              to: [0.5, 1.5],
            },
          ],
        },
      },
      {
        id: "pll-ub",
        name: "Ub 置换",
        algorithm: "M2 U' M U2 M' U' M2",
        note: "三条棱块顺时针轮换。",
        diagram: {
          sideBars: ["top", "right", "bottom", "left"],
          stickers: [
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
          ],
          arrows: [
            {
              from: [0.5, 1.5],
              to: [2.5, 1.5],
            },
            {
              from: [2.5, 1.5],
              to: [1.5, 2.5],
            },
            {
              from: [1.5, 2.5],
              to: [0.5, 1.5],
            },
          ],
        },
      },
      {
        id: "pll-h",
        name: "H 置换",
        algorithm: "M2 U M2 U2 M2 U M2",
        note: "前后、左右两组棱块互换。",
        diagram: {
          sideBars: ["top", "right", "bottom", "left"],
          stickers: [
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
          ],
          arrows: [
            {
              from: [0.5, 1.5],
              to: [2.5, 1.5],
            },
            {
              from: [2.5, 1.5],
              to: [0.5, 1.5],
            },
            {
              from: [1.5, 0.5],
              to: [1.5, 2.5],
            },
            {
              from: [1.5, 2.5],
              to: [1.5, 0.5],
            },
          ],
        },
      },
      {
        id: "pll-z",
        name: "Z 置换",
        algorithm: "M' U M2 U M2 U M' U2 M2",
        note: "相邻两组棱块交叉互换。",
        diagram: {
          sideBars: ["top", "right", "bottom", "left"],
          stickers: [
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
            "empty",
          ],
          arrows: [
            {
              from: [0.5, 0.5],
              to: [2.5, 0.5],
            },
            {
              from: [2.5, 0.5],
              to: [0.5, 0.5],
            },
            {
              from: [0.5, 2.5],
              to: [2.5, 2.5],
            },
            {
              from: [2.5, 2.5],
              to: [0.5, 2.5],
            },
          ],
        },
      },
    ],
  },
];

export default pllSections;
