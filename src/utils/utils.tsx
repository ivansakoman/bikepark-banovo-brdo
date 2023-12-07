import HardSmallIcon from "../assets/icons/hard-small";
import { DifficultyType, TrackType } from "../pages/track-page";

export const checkActiveTrackBtn = (
  activeTracks: TrackType[],
  trackId: string
) => {
  return activeTracks.some((track) => track.id === trackId) && "active";
};

export const renderDifficultyIcon = (difficulty: DifficultyType) => {
  switch (difficulty) {
    case "green":
      return <HardSmallIcon />;
    case "blue":
      return <HardSmallIcon />;

    default:
      return <HardSmallIcon />;
  }
};
