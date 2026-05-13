import type {
  Arrow,
  SideBar,
  SideSticker,
  StickerState,
} from "components/atoms/cube-case-diagram";

type CubeDiagramParams = {
  arrows?: Arrow[];
  sideBars?: SideBar[];
  sideStickers?: SideSticker[];
  stickers: StickerState[];
};

type AlgorithmCase = {
  algorithm: string;
  diagram: CubeDiagramParams;
  id: string;
  name: string;
  note?: string;
};

type AlgorithmSection = {
  cases: AlgorithmCase[];
  description: string;
  id: string;
  title: string;
};

export type { AlgorithmCase, AlgorithmSection, CubeDiagramParams };
