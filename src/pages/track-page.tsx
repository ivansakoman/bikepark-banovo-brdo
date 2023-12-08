import { useState } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import { XCOPoints, prviDioPoints } from "../data/gpx";
import { checkActiveTrackBtn, renderDifficultyIcon } from "../utils/utils";
import { motion } from "framer-motion";
import { PinConfig, TrackType } from "../types/track";
import DistanceIcon from "../assets/icons/distance";
import ElevationIcon from "../assets/icons/elevation";
import { DragEndEvent, PointTuple } from "leaflet";
import ChevronDownIcon from "../assets/icons/chevron-down";
import L from "leaflet";
import ZmijicaSign from "./../assets/custom-pins/zmijica-sign-pin.png";
import AmfiteatarSign from "./../assets/custom-pins/amfiteatar-sign-pin.png";
import LakatSign from "./../assets/custom-pins/lakat-sign-pin.png";
import DropSign from "./../assets/custom-pins/drop-sign-pin.png";
import SignShadow from "./../assets/custom-pins/sign-shadow.png";

const allTracks: TrackType[] = [
  {
    id: "xco",
    name: "XCO Banovo Brdo",
    color: "#e74c3c",
    difficulty: "red",
    distance: "4.2 km",
    elevation: "108 m",
    status: "active",
    points: XCOPoints,
  },
  {
    id: "prvi_dio",
    name: "Prvi dio",
    color: "#3498db",
    difficulty: "blue",
    distance: "1.2 km",
    elevation: "-50 m",
    status: "active",
    points: prviDioPoints,
  },
];

//const draggablePinPosition: PointTuple = [45.797194, 18.690473];

const TrackPage = () => {
  const [droppedPin, setDroppedPin] = useState<[number, number] | null>(null);
  const [activeTracks, setActiveTracks] = useState<TrackType[]>([allTracks[0]]);
  const [collapse, setCollapse] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const handleMarkerDragEnd = (e: DragEndEvent) => {
    const { lat, lng } = e.target.getLatLng();
    setDroppedPin([lat, lng]);
  };
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

  //custom pins
  const pinConfig: PinConfig = {
    shadowUrl: SignShadow,
    iconSize: [64, 85],
    shadowSize: [64, 24],
    iconAnchor: [32, 85],
    shadowAnchor: [0, 24],
    popupAnchor: [0, -85],
  };
  const amfiteatarPin = L.icon({
    iconUrl: AmfiteatarSign,
    ...pinConfig,
  });
  const dropPin = L.icon({
    iconUrl: DropSign,
    ...pinConfig,
  });
  const lakatPin = L.icon({
    iconUrl: LakatSign,
    ...pinConfig,
  });
  const zmijicaPin = L.icon({
    iconUrl: ZmijicaSign,
    ...pinConfig,
  });

  return (
    <>
      <div className="container--primary">
        <div className="header__divider"></div>
        <h1
          className="type__h1 track__heading"
          onClick={() => setCollapse((state) => !state)}
        >
          <span>Staze</span>
          <motion.div animate={{ rotate: collapse ? 0 : 180 }}>
            <ChevronDownIcon />
          </motion.div>
        </h1>
        <motion.div
          animate={{
            height: collapse ? "0" : "100%",
            marginBottom: collapse ? "0" : "2rem",
          }}
          className="track__wrapper"
        >
          {allTracks.map((track) => {
            return (
              <div key={track.id} className="track">
                <div>
                  <div className="track__title">
                    {renderDifficultyIcon(track.difficulty)}
                    <span>{track.name}</span>
                    <span
                      className={`track__status track__status--${track.status}`}
                    ></span>
                  </div>
                  <div className="flex">
                    <div className="track__sub">
                      <DistanceIcon width="30" />
                      <span>{track.distance}</span>
                    </div>
                    <div className="track__sub">
                      <ElevationIcon width="9" />
                      <span>{track.elevation}</span>
                    </div>
                  </div>
                </div>
                <div
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
        </motion.div>
        <h1 className="type__h1 flex mb-8">
          <span>Elementi</span>
          <div
            style={{ marginLeft: "1rem" }}
            className={`track__btn ${showFeatures && "active"}`}
            onClick={() => setShowFeatures((state) => !state)}
          >
            <motion.div
              animate={{
                x: showFeatures ? 28 : 0,
              }}
              className="track__btn__thumb"
            ></motion.div>
          </div>
        </h1>
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
              {showFeatures && (
                <>
                  <Marker
                    position={[45.79947103772516, 18.68656396865845]}
                    icon={amfiteatarPin}
                  >
                    <Popup>Amfiteatar</Popup>
                  </Marker>
                  <Marker
                    position={[45.798887607064486, 18.69128465652466]}
                    icon={lakatPin}
                  >
                    <Popup>Lakat zavoj</Popup>
                  </Marker>
                  <Marker
                    position={[45.80006942180037, 18.68983626365662]}
                    icon={dropPin}
                  >
                    <Popup>Banovo Brdo Drop</Popup>
                  </Marker>
                  <Marker
                    position={[45.80027137497532, 18.686252832412723]}
                    icon={zmijicaPin}
                  >
                    <Popup>Zmijica uspon</Popup>
                  </Marker>
                </>
              )}

              {/* Dropped Pin Marker */}
              {droppedPin && (
                <Marker
                  position={droppedPin}
                  draggable={true}
                  eventHandlers={{
                    dragend: handleMarkerDragEnd,
                  }}
                >
                  <Popup>
                    Latitude: {droppedPin[0]}, Longitude: {droppedPin[1]}
                  </Popup>
                </Marker>
              )}
            </MapContainer>
          )}
        </div>
      </div>
    </>
  );
};

export default TrackPage;
