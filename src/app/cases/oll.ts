import type { AlgorithmSection } from "./types";

const ollSections: AlgorithmSection[] = [
  {
    id: "oll-cross",
    title: "OLL 十字",
    description: "先把顶面黄色棱块翻好，得到十字。",
    cases: [
      {
        id: "oll-line",
        name: "一字",
        algorithm: "F (R U R' U') F'",
        note: "横线朝左右摆放。",
        diagram: {
          stickers: [
            "empty",
            "empty",
            "empty",
            "accent",
            "accent",
            "accent",
            "empty",
            "empty",
            "empty",
          ],
        },
      },
      {
        id: "oll-l-shape",
        name: "小拐弯",
        algorithm: "f (R U R' U') f'",
        note: "小拐弯放在右上角。",
        diagram: {
          stickers: [
            "empty",
            "empty",
            "empty",
            "empty",
            "accent",
            "accent",
            "empty",
            "accent",
            "empty",
          ],
        },
      },
      {
        id: "oll-dot",
        name: "点",
        algorithm: "F (R U R' U') F' f (R U R' U') f'",
        note: "先做成一字或小拐弯，再进入十字。",
        diagram: {
          stickers: [
            "empty",
            "empty",
            "empty",
            "empty",
            "accent",
            "empty",
            "empty",
            "empty",
            "empty",
          ],
        },
      },
    ],
  },
  {
    id: "oll-corners",
    title: "OLL 小鱼",
    description: "顶面已有十字后，处理角块朝向。",
    cases: [
      {
        id: "oll-sune",
        name: "小鱼 1",
        algorithm: "R U R' U R U2 R'",
        note: "鱼头朝左下，右上角是目标角。",
        diagram: {
          sideBars: ["top", "right"],
          stickers: [
            "filled",
            "empty",
            "empty",
            "filled",
            "filled",
            "filled",
            "empty",
            "filled",
            "filled",
          ],
        },
      },
      {
        id: "oll-anti-sune",
        name: "小鱼 2",
        algorithm: "R U2 R' U' R U' R'",
        note: "小鱼 1 的镜像情形。",
        diagram: {
          sideBars: ["bottom", "left"],
          stickers: [
            "filled",
            "filled",
            "empty",
            "filled",
            "filled",
            "filled",
            "empty",
            "empty",
            "filled",
          ],
        },
      },
      {
        id: "oll-headlights",
        name: "车灯",
        algorithm: "R2 D R' U2 R D' R' U2 R'",
        note: "两个同向角放在左侧。",
        diagram: {
          sideBars: ["left", "right"],
          stickers: [
            "empty",
            "filled",
            "empty",
            "filled",
            "filled",
            "filled",
            "empty",
            "filled",
            "empty",
          ],
        },
      },
      {
        id: "oll-bowtie",
        name: "蝴蝶",
        algorithm: "r U R' U' r' F R F'",
        note: "斜对角两个角未朝上。",
        diagram: {
          sideBars: ["top", "bottom"],
          stickers: [
            "filled",
            "empty",
            "filled",
            "filled",
            "filled",
            "filled",
            "empty",
            "filled",
            "empty",
          ],
        },
      },
    ],
  },
];

export default ollSections;
