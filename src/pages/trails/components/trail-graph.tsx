import { useRef, useEffect } from "react";
import { TrailType } from "../../../types/trail";
import { downSample } from "../../../utils/utils";

type TrailGraphProps = {
  trail: TrailType;
};

const TrailGraph = ({ trail }: TrailGraphProps) => {
  // Usage
  const downSampledData = downSample(
    trail.points.map((track) => track.ele),
    200
  ); // Adjust the threshold as needed
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const width = canvas.width;
        const height = canvas.height;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw area graph
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.fillStyle = "#2a2a2a"; // Set fill color
        ctx.beginPath();
        ctx.moveTo(0, height); // Move to the starting point at the bottom-left corner

        const minElev = Math.min(...downSampledData);
        const maxElev = Math.max(
          ...downSampledData.map((elev) => elev - minElev)
        );

        downSampledData.forEach((value, index) => {
          const x = (index / (downSampledData.length - 1)) * width;
          const y = height - ((value - minElev) / maxElev) * height;

          ctx.lineTo(x, y); // Draw a line to the current data point
        });

        ctx.lineTo(width, height); // Draw a line to the bottom-right corner
        ctx.closePath(); // Close the path to create a filled area
        ctx.fill(); // Fill the area
      }
    }
  }, [trail.points]);
  return (
    <>
      <canvas ref={canvasRef} className="trail__graph" />
    </>
  );
};
export default TrailGraph;
