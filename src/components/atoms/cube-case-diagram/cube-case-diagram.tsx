import { ComponentProps, forwardRef } from "react";

type StickerState = "filled" | "empty" | "accent";

type Arrow = {
  from: [number, number];
  to: [number, number];
};

type SideBar = "top" | "right" | "bottom" | "left";

type SideSticker = {
  index: 0 | 1 | 2;
  side: SideBar;
};

interface CubeCaseDiagramProps
  extends Omit<ComponentProps<"svg">, "className" | "children"> {
  stickers: StickerState[];
  sideBars?: SideBar[];
  sideStickers?: SideSticker[];
  arrows?: Arrow[];
  size?: number;
}

const stickerFill: Record<StickerState, string> = {
  accent: "#f1df15",
  empty: "#ffffff",
  filled: "#ffffff",
};

const cellSize = 22;
const gap = 0;
const gridOrigin = 18;
const gridSize = cellSize * 3 + gap * 2;

const getSideBarPath = (side: SideBar, index: number) => {
  const start = gridOrigin + index * cellSize + 3;
  const end = gridOrigin + (index + 1) * cellSize - 3;
  const offset = 5;

  if (side === "top") {
    return `M ${start} ${gridOrigin - offset} H ${end}`;
  }

  if (side === "bottom") {
    return `M ${start} ${gridOrigin + gridSize + offset} H ${end}`;
  }

  if (side === "left") {
    return `M ${gridOrigin - offset} ${start} V ${end}`;
  }

  return `M ${gridOrigin + gridSize + offset} ${start} V ${end}`;
};

const CubeCaseDiagram = forwardRef<SVGSVGElement, CubeCaseDiagramProps>(
  (
    { stickers, sideBars = [], sideStickers, arrows = [], size = 98, ...rest },
    ref
  ) => {
    const visibleSideStickers =
      sideStickers ??
      sideBars.flatMap((side) =>
        ([0, 1, 2] as const).map((index) => ({
          index,
          side,
        }))
      );

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 102 102"
        role="img"
        aria-label="魔方顶层公式图"
        {...rest}
      >
        <defs>
          <marker
            id="cube-arrow"
            markerHeight="8"
            markerWidth="8"
            markerUnits="userSpaceOnUse"
            orient="auto"
            refX="7"
            refY="4"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="#184cff" />
          </marker>
        </defs>
        {visibleSideStickers.map(({ side, index }) => (
          <path
            key={`${side}-${index}`}
            d={getSideBarPath(side, index)}
            fill="none"
            stroke="#111111"
            strokeLinecap="round"
            strokeWidth="3"
          />
        ))}
        {stickers.map((sticker, index) => {
          const row = Math.floor(index / 3);
          const column = index % 3;

          return (
            <rect
              key={`${row}-${column}`}
              x={gridOrigin + column * (cellSize + gap)}
              y={gridOrigin + row * (cellSize + gap)}
              width={cellSize}
              height={cellSize}
              fill={stickerFill[sticker]}
            />
          );
        })}
        {[0, 1, 2, 3].map((line) => (
          <g key={`grid-${line}`}>
            <line
              x1={gridOrigin + line * cellSize}
              x2={gridOrigin + line * cellSize}
              y1={gridOrigin}
              y2={gridOrigin + gridSize}
              stroke="#111111"
              strokeWidth="2"
            />
            <line
              x1={gridOrigin}
              x2={gridOrigin + gridSize}
              y1={gridOrigin + line * cellSize}
              y2={gridOrigin + line * cellSize}
              stroke="#111111"
              strokeWidth="2"
            />
          </g>
        ))}
        {stickers.map((sticker, index) => {
          if (sticker !== "filled") {
            return null;
          }

          const row = Math.floor(index / 3);
          const column = index % 3;

          return (
            <rect
              key={`filled-inset-${row}-${column}`}
              x={gridOrigin + column * (cellSize + gap) + 2}
              y={gridOrigin + row * (cellSize + gap) + 2}
              width={cellSize - 4}
              height={cellSize - 4}
              fill="#111111"
              stroke="#ffffff"
              strokeWidth="0.4"
            />
          );
        })}
        {arrows.map((arrow, index) => (
          <line
            key={`${arrow.from.join("-")}-${arrow.to.join("-")}-${index}`}
            x1={gridOrigin + arrow.from[0] * cellSize}
            x2={gridOrigin + arrow.to[0] * cellSize}
            y1={gridOrigin + arrow.from[1] * cellSize}
            y2={gridOrigin + arrow.to[1] * cellSize}
            markerEnd="url(#cube-arrow)"
            stroke="#184cff"
            strokeLinecap="round"
            strokeWidth="3"
          />
        ))}
      </svg>
    );
  }
);

CubeCaseDiagram.displayName = "CubeCaseDiagram";

export default CubeCaseDiagram;
export type { Arrow, SideBar, SideSticker, StickerState };
