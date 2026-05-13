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
const gridStrokeWidth = 2;

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

const getArrowPoint = (point: [number, number]) => ({
  x: gridOrigin + point[0] * cellSize,
  y: gridOrigin + point[1] * cellSize,
});

const getInsetArrow = (arrow: Arrow) => {
  const from = getArrowPoint(arrow.from);
  const to = getArrowPoint(arrow.to);
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy);
  const startInset = 4;

  if (length === 0) {
    return { from, to };
  }

  const unitX = dx / length;
  const unitY = dy / length;

  return {
    from: {
      x: from.x + unitX * startInset,
      y: from.y + unitY * startInset,
    },
    to,
  };
};

const getArrowGeometry = (arrow: Arrow) => {
  const { from, to } = getInsetArrow(arrow);
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy);
  const headLength = 8;
  const headHalfWidth = 4.5;

  if (length === 0) {
    return null;
  }

  const unitX = dx / length;
  const unitY = dy / length;
  const perpendicularX = -unitY;
  const perpendicularY = unitX;
  const base = {
    x: to.x - unitX * headLength,
    y: to.y - unitY * headLength,
  };

  return {
    headPoints: [
      `${to.x},${to.y}`,
      `${base.x + perpendicularX * headHalfWidth},${
        base.y + perpendicularY * headHalfWidth
      }`,
      `${base.x - perpendicularX * headHalfWidth},${
        base.y - perpendicularY * headHalfWidth
      }`,
    ].join(" "),
    shaft: {
      from,
      to: base,
    },
  };
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
        aria-label="Cube top-layer case diagram"
        {...rest}
      >
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
        <rect
          x={gridOrigin}
          y={gridOrigin}
          width={gridSize}
          height={gridSize}
          fill="none"
          stroke="#111111"
          strokeWidth={gridStrokeWidth}
        />
        {[1, 2].map((line) => (
          <g key={`grid-${line}`}>
            <rect
              x={gridOrigin + line * cellSize - gridStrokeWidth / 2}
              y={gridOrigin}
              width={gridStrokeWidth}
              height={gridSize}
              fill="#111111"
            />
            <rect
              x={gridOrigin}
              y={gridOrigin + line * cellSize - gridStrokeWidth / 2}
              width={gridSize}
              height={gridStrokeWidth}
              fill="#111111"
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
        {arrows.map((arrow, index) => {
          const arrowGeometry = getArrowGeometry(arrow);

          if (!arrowGeometry) {
            return null;
          }

          return (
            <g
              key={`${arrow.from.join("-")}-${arrow.to.join("-")}-${index}`}
              fill="#184cff"
              stroke="#184cff"
            >
              <line
                x1={arrowGeometry.shaft.from.x}
                x2={arrowGeometry.shaft.to.x}
                y1={arrowGeometry.shaft.from.y}
                y2={arrowGeometry.shaft.to.y}
                strokeLinecap="butt"
                strokeWidth="3"
              />
              <polygon points={arrowGeometry.headPoints} strokeWidth="0" />
            </g>
          );
        })}
      </svg>
    );
  }
);

CubeCaseDiagram.displayName = "CubeCaseDiagram";

export default CubeCaseDiagram;
export type { Arrow, SideBar, SideSticker, StickerState };
