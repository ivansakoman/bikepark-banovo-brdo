import { PointTuple } from "leaflet";

export type DifficultyType = "green" | "blue" | "red";

export type StatusType = "active" | "pending" | "closed";

export type TrailPointType = {
  lat: number;
  lon: number;
  ele: number;
};

export type TrailType = {
  id: string;
  name: string;
  color: string;
  difficulty: DifficultyType;
  distance: string;
  elevation: string;
  status: StatusType;
  points: TrailPointType[];
};

export type PinConfig = {
  shadowUrl: string;
  iconSize: PointTuple;
  shadowSize: PointTuple;
  iconAnchor: PointTuple;
  shadowAnchor: PointTuple;
  popupAnchor: PointTuple;
};
