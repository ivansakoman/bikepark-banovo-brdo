import { useState, useMemo } from "react";
import {
  MapContainer,
  MapContainerProps,
  Polyline,
  TileLayer,
} from "react-leaflet";

import Features from "./components/features";
import TrailsGrid, { allTrails } from "./components/trails-grid";
import { TrailType } from "../../types/trail";
import FeaturesTrigger from "./components/features-trigger";
import DroppedPin from "./components/dropped-pin";

//const draggablePinPosition: PointTuple = [45.797194, 18.690473];

const TrailsPage = () => {
  const [activeTrails, setActiveTrails] = useState<TrailType[]>([allTrails[0]]);
  const [collapse, setCollapse] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const mapConfig = useMemo((): MapContainerProps => {
    return {
      center: [allTrails[0].points[0].lat, allTrails[0].points[0].lon],
      zoom: 15,
      maxZoom: 17,
      scrollWheelZoom: true,
    };
  }, []);

  const handleActiveTrails = (trailId: string) => {
    // Check if the trail is already in the activeTrails state
    const isTrailActive = activeTrails.some((trail) => trail.id === trailId);

    if (isTrailActive) {
      // If the trail is already present, remove it
      setActiveTrails((prevActiveTrail) =>
        prevActiveTrail.filter((trail) => trail.id !== trailId)
      );
    } else {
      // If the trail is not present, add it
      const trailsToAdd = allTrails.find((trail) => trail.id === trailId);
      if (trailsToAdd) {
        setActiveTrails((prevActiveTrail) => [...prevActiveTrail, trailsToAdd]);
      }
    }
  };

  return (
    <>
      <div className="container--primary">
        <div className="header__divider"></div>

        <TrailsGrid
          activeTrails={activeTrails}
          collapse={collapse}
          onActiveTrails={handleActiveTrails}
          onCollapse={() => setCollapse((state) => !state)}
        />
        <FeaturesTrigger
          showFeatures={showFeatures}
          onShowFeatures={() => setShowFeatures((state) => !state)}
        />
        <div>
          {allTrails.length > 0 && (
            <MapContainer {...mapConfig}>
              {/* Classic tiles */}
              {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
              {/* Topographic tiles */}
              <TileLayer
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'
              />

              {/* Render active Trails on the mapKC */}
              {activeTrails.map((trail) => {
                return (
                  <Polyline
                    key={trail.name}
                    pathOptions={{ color: trail.color }}
                    positions={trail.points.map((item) => [item.lat, item.lon])}
                  />
                );
              })}

              {/* Features Trigger */}
              {showFeatures && (
                <>
                  <Features />
                </>
              )}

              {/* Dropped Pin Marker */}
              <DroppedPin />
            </MapContainer>
          )}
        </div>
      </div>
    </>
  );
};

export default TrailsPage;
