import EasySmallIcon from "../assets/icons/easy-small";
import HardSmallIcon from "../assets/icons/hard-small";
import MediumSmallIcon from "../assets/icons/medium-small";
import { DifficultyType, TrackType } from "../types/track";

export const checkActiveTrackBtn = (
  activeTracks: TrackType[],
  trackId: string
) => {
  return activeTracks.some((track) => track.id === trackId) && "active";
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
