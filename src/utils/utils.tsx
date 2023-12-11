import EasySmallIcon from "../assets/icons/easy-small";
import HardSmallIcon from "../assets/icons/hard-small";
import MediumSmallIcon from "../assets/icons/medium-small";
import { DifficultyType, TrailType } from "../types/trail";

export const checkActiveTrailBtn = (
  activeTrails: TrailType[],
  trailId: string
) => {
  return activeTrails.some((trail) => trail.id === trailId) && "active";
};

export const renderDifficultyIcon = (difficulty: DifficultyType) => {
  switch (difficulty) {
    case "green":
      return <EasySmallIcon />;
    case "blue":
      return <MediumSmallIcon />;

    default:
      return <HardSmallIcon />;
  }
};
