import { useState } from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { XCOPoints, prviDioPoints } from "../data/gpx";
import { checkActiveTrackBtn, renderDifficultyIcon } from "../utils/utils";
import { motion } from "framer-motion";

export type TrackPointType = {
  lat: number;
  lon: number;
  ele: number;
};

export type DifficultyType = "green" | "blue" | "red";

export type TrackType = {
  id: string;
  name: string;
  color: string;
  difficulty: DifficultyType;
  points: TrackPointType[];
};

const allTracks: TrackType[] = [
  {
    id: "xco",
    name: "XCO Banovo Brdo",
    color: "#e74c3c",
    difficulty: "red",
    points: XCOPoints,
  },
  {
    id: "prvi_dio",
    name: "Prvi dio",
    color: "#3498db",
    difficulty: "blue",
    points: prviDioPoints,
  },
];

const TrackPage = () => {
  const [activeTracks, setActiveTracks] = useState<TrackType[]>(allTracks);

  const handleActiveTracks = (trackId: string) => {
    // Check if the track is already in the activeTracks state
    const isTrackActive = activeTracks.some((track) => track.id === trackId);

    if (isTrackActive) {
      // If the track is already present, remove it
      setActiveTracks((prevActiveTracks) =>
        prevActiveTracks.filter((track) => track.id !== trackId)
      );
    } else {
      // If the track is not present, add it
      const trackToAdd = allTracks.find((track) => track.id === trackId);
      if (trackToAdd) {
        setActiveTracks((prevActiveTracks) => [
          ...prevActiveTracks,
          trackToAdd,
        ]);
      }
    }
  };

  return (
    <>
      <div className="container--primary">
        <div className="header__divider"></div>
        <h1 className="type__h1">Staze</h1>
        <div className="track__wrapper">
          {allTracks.map((track) => {
            return (
              <div className="track">
                <div>
                  <div className="track__title">
                    {renderDifficultyIcon(track.difficulty)}
                    <span>{track.name}</span>
                  </div>
                  <div className="tack__distance">4.2 km</div>
                </div>
                <div
                  key={track.id}
                  className={`track__btn ${
                    checkActiveTrackBtn(activeTracks, track.id) && "active"
                  }`}
                  onClick={() => handleActiveTracks(track.id)}
                >
                  <motion.div
                    animate={{
                      x: checkActiveTrackBtn(activeTracks, track.id) ? 28 : 0,
                    }}
                    className="track__btn__thumb"
                  ></motion.div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {allTracks.length > 0 && (
            <MapContainer
              center={[allTracks[0].points[0].lat, allTracks[0].points[0].lon]}
              zoom={15}
              maxZoom={17}
              scrollWheelZoom={true}
            >
              {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
              <TileLayer
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'
              />
              {activeTracks.map((track) => {
                return (
                  <Polyline
                    key={track.name}
                    pathOptions={{ color: track.color }}
                    positions={track.points.map((item) => [item.lat, item.lon])}
                  />
                );
              })}
            </MapContainer>
          )}
        </div>
      </div>
    </>
  );
};

export default TrackPage;
