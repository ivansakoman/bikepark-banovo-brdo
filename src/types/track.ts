import { PointTuple } from "leaflet";

export type DifficultyType = "green" | "blue" | "red";

export type StatusType = "active" | "pending" | "closed";

export type TrackPointType = {
  lat: number;
  lon: number;
  ele: number;
};

export type TrackType = {
  id: string;
  name: string;
  color: string;
  difficulty: DifficultyType;
  distance: string;
  elevation: string;
  status: StatusType;
  points: TrackPointType[];
};

export type PinConfig = {
  shadowUrl: string;
  iconSize: PointTuple;
  shadowSize: PointTuple;
  iconAnchor: PointTuple;
  shadowAnchor: PointTuple;
  popupAnchor: PointTuple;
};
