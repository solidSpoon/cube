import type { AlgorithmSection } from "./types";

const pllSections: AlgorithmSection[] = [
  {
    id: "pll-corner-permutation",
    title: "PLL Corner Permutation",
    description: "Permute the last-layer corners before edge permutation.",
    cases: [
      {
        id: "pll-a-perm",
        name: "A Permutation",
        algorithm: "x' R2 D2(R' U' R)D2(R' U R') x",
        note: "Put the solved corner pair at the back.",
        diagram: {
          sideStickers: [
            { side: "top", index: 0 },
            { side: "top", index: 1 },
            { side: "right", index: 1 },
            { side: "bottom", index: 1 },
            { side: "left", index: 0 },
            { side: "left", index: 1 },
          ],
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
        name: "E Permutation",
        algorithm: "(R2 U R' U') y (R U R' U')2 (R U R') y' (R U' R2)",
        note: "Use when no side has a solved corner pair.",
        diagram: {
          sideStickers: [
            { side: "top", index: 1 },
            { side: "right", index: 1 },
            { side: "bottom", index: 1 },
            { side: "left", index: 1 },
          ],
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
    id: "pll-edge-permutation",
    title: "PLL Edge Permutation",
    description: "Permute the last-layer edges after corner permutation.",
    cases: [
      {
        id: "pll-ua",
        name: "Ua Permutation",
        algorithm: "(R U' R) U (R U R U') (R' U' R2)",
        note: "Cycles three edges counterclockwise.",
        diagram: {
          sideStickers: [
            { side: "top", index: 0 },
            { side: "top", index: 1 },
            { side: "top", index: 2 },
            { side: "right", index: 0 },
            { side: "right", index: 2 },
            { side: "bottom", index: 0 },
            { side: "bottom", index: 2 },
            { side: "left", index: 0 },
            { side: "left", index: 2 },
          ],
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
        name: "Ub Permutation",
        algorithm: "(R2' U)(R U R' U')(R' U')(R' U R')",
        note: "Cycles three edges clockwise.",
        diagram: {
          sideStickers: [
            { side: "top", index: 0 },
            { side: "top", index: 1 },
            { side: "top", index: 2 },
            { side: "right", index: 0 },
            { side: "right", index: 2 },
            { side: "bottom", index: 0 },
            { side: "bottom", index: 2 },
            { side: "left", index: 0 },
            { side: "left", index: 2 },
          ],
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
        name: "H Permutation",
        algorithm: "M2 U M2 U2 M2 U M2",
        note: "Swaps the front-back and left-right edge pairs.",
        diagram: {
          sideStickers: [
            { side: "top", index: 0 },
            { side: "top", index: 2 },
            { side: "right", index: 0 },
            { side: "right", index: 2 },
            { side: "bottom", index: 0 },
            { side: "bottom", index: 2 },
            { side: "left", index: 0 },
            { side: "left", index: 2 },
          ],
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
        name: "Z Permutation",
        algorithm: "M2 U M2 U M' U2 M2 U2 M' U2",
        note: "Swaps two adjacent edge pairs across the top layer.",
        diagram: {
          sideStickers: [
            { side: "top", index: 0 },
            { side: "top", index: 2 },
            { side: "right", index: 0 },
            { side: "right", index: 2 },
            { side: "bottom", index: 0 },
            { side: "bottom", index: 2 },
            { side: "left", index: 0 },
            { side: "left", index: 2 },
          ],
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
