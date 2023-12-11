import { motion } from "framer-motion";

type FeaturesTriggerProps = {
  showFeatures: boolean;
  onShowFeatures: () => void;
};

const FeaturesTrigger = ({
  onShowFeatures,
  showFeatures,
}: FeaturesTriggerProps) => {
  return (
    <>
      <h1 className="type__h1 flex mb-8">
        <span>Elementi</span>
        <div
          style={{ marginLeft: "1rem" }}
          className={`trail__btn ${showFeatures && "active"}`}
          onClick={onShowFeatures}
        >
          <motion.div
            animate={{
              x: showFeatures ? 28 : 0,
            }}
            className="trail__btn__thumb"
          ></motion.div>
        </div>
      </h1>
    </>
  );
};
export default FeaturesTrigger;
