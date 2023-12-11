import { Marker, Popup } from "react-leaflet";
import { PinConfig } from "../../../types/trail";
import L from "leaflet";
import ZmijicaSign from "./../../../assets/custom-pins/zmijica-sign-pin.png";
import AmfiteatarSign from "./../../../assets/custom-pins/amfiteatar-sign-pin.png";
import LakatSign from "./../../../assets/custom-pins/lakat-sign-pin.png";
import DropSign from "./../../../assets/custom-pins/drop-sign-pin.png";
import SignShadow from "./../../../assets/custom-pins/sign-shadow.png";

const Features = () => {
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
      <Marker position={[45.80006942180037, 18.68983626365662]} icon={dropPin}>
        <Popup>Banovo Brdo Drop</Popup>
      </Marker>
      <Marker
        position={[45.80027137497532, 18.686252832412723]}
        icon={zmijicaPin}
      >
        <Popup>Zmijica uspon</Popup>
      </Marker>
    </>
  );
};
export default Features;
