import { DragEndEvent, PointTuple } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { useState } from "react";

const DroppedPin = () => {
  const [droppedPin, setDroppedPin] = useState<PointTuple | null>(null);
  const handleMarkerDragEnd = (e: DragEndEvent) => {
    const { lat, lng } = e.target.getLatLng();
    setDroppedPin([lat, lng]);
  };
  return (
    <>
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
    </>
  );
};

export default DroppedPin;
