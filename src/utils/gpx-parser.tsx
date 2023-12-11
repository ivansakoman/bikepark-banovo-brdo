import { TrailPointType } from "../types/trail";

export const parseGpx = (gpx: string) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(gpx, "application/xml");

  // Extract trkpt elements from the XML document
  const trkptNodes = xmlDoc.getElementsByTagName("trkpt");

  // Accumulate trkpt objects in an array
  const trkptArray: TrailPointType[] = [];
  for (let i = 0; i < trkptNodes.length; i++) {
    const trkptNode = trkptNodes[i];
    trkptArray.push({
      lat: Number(trkptNode.getAttribute("lat")) || 0,
      lon: Number(trkptNode.getAttribute("lon")) || 0,
      ele: Number(trkptNode.querySelector("ele")?.textContent) || 0,
    });
  }

  // Set the state with the accumulated trkpt information
  console.log(JSON.stringify(trkptArray));
};
