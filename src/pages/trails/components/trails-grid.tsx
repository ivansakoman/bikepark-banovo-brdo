import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { XCOPoints, prviDioPoints } from "../../../data/gpx";
import {
  checkActiveTrailBtn,
  renderDifficultyIcon,
} from "../../../utils/utils";
import DistanceIcon from "../../../assets/icons/distance";
import ElevationIcon from "../../../assets/icons/elevation";
import { DifficultyType, TrailType } from "../../../types/trail";
import ChevronDownIcon from "../../../assets/icons/chevron-down";
import EasySmallIcon from "../../../assets/icons/easy-small";
import MediumSmallIcon from "../../../assets/icons/medium-small";
import HardSmallIcon from "../../../assets/icons/hard-small";
import TrailGraph from "./trail-graph";

type TrailsGridProps = {
  collapse: boolean;
  activeTrails: TrailType[];
  onActiveTrails: (trailId: string) => void;
  onCollapse: () => void;
};
// eslint-disable-next-line react-refresh/only-export-components
export const allTrails: TrailType[] = [
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

const TrailsGrid = ({
  collapse,
  activeTrails,
  onActiveTrails,
  onCollapse,
}: TrailsGridProps) => {
  const [filter, setFilter] = useState<DifficultyType | undefined>();
  const [toRender, setToRender] = useState<TrailType[]>(allTrails);

  const handleFilter = () => {
    if (filter) {
      const filtered = allTrails.filter((trail) => trail.difficulty === filter);
      setToRender(filtered);
    } else {
      setToRender(allTrails);
    }
  };

  useEffect(() => {
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <h1 className="type__h1 trail__heading">
        <div className="trail__heading__left" onClick={onCollapse}>
          <span>Staze</span>
          <motion.div
            className="ml-4"
            initial={{ rotate: 180 }}
            animate={{ rotate: collapse ? 0 : 180 }}
          >
            <ChevronDownIcon />
          </motion.div>
        </div>
        <div className="filter">
          <div
            className={`filter__item ${filter === "green" && "active"}`}
            onClick={() =>
              setFilter((state) => (state === "green" ? undefined : "green"))
            }
          >
            <EasySmallIcon />
          </div>
          <div
            className={`filter__item ${filter === "blue" && "active"}`}
            onClick={() =>
              setFilter((state) => (state === "blue" ? undefined : "blue"))
            }
          >
            <MediumSmallIcon />
          </div>
          <div
            className={`filter__item ${filter === "red" && "active"}`}
            onClick={() =>
              setFilter((state) => (state === "red" ? undefined : "red"))
            }
          >
            <HardSmallIcon />
          </div>
        </div>
      </h1>
      <motion.div
        initial={{
          height: "100%",
          marginBottom: "2rem",
        }}
        animate={{
          height: collapse ? "0" : "100%",
          marginBottom: collapse ? "0" : "2rem",
        }}
        className="trail__wrapper"
      >
        {toRender.length > 0 ? (
          toRender.map((trail) => {
            return (
              <div key={trail.id} className="trail">
                <div className="trail__header">
                  <div>
                    <div className="trail__title">
                      {renderDifficultyIcon(trail.difficulty)}
                      <span>{trail.name}</span>
                      <span
                        className={`trail__status trail__status--${trail.status}`}
                      ></span>
                    </div>
                    <div className="flex">
                      <div className="trail__sub">
                        <DistanceIcon width="30" />
                        <span>{trail.distance}</span>
                      </div>
                      <div className="trail__sub">
                        <ElevationIcon width="9" />
                        <span>{trail.elevation}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`trail__btn ${
                      checkActiveTrailBtn(activeTrails, trail.id) && "active"
                    }`}
                    onClick={() => onActiveTrails(trail.id)}
                  >
                    <motion.div
                      animate={{
                        x: checkActiveTrailBtn(activeTrails, trail.id) ? 28 : 0,
                      }}
                      className="trail__btn__thumb"
                    ></motion.div>
                  </div>
                </div>
                <TrailGraph trail={trail} />
              </div>
            );
          })
        ) : (
          <div>Nema staze s odabranim filterom</div>
        )}
      </motion.div>
    </>
  );
};
export default TrailsGrid;
