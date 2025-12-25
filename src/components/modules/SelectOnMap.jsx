import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { useDispatch } from "react-redux";
import { setCoords } from "src/reduxs/slices/locationSlice";
import styles from "./SelectOnMap.module.css";

function LocationPicker({ onChange }) {
  useMapEvents({
    moveend: (e) => {
      const center = e.target.getCenter();
      onChange([center.lat, center.lng]);
    },
  });
  return null;
}

export default function SelectOnMap({ onBack, onClose }) {
  const dispatch = useDispatch();
  const [coords, setCoordsState] = useState([35.7, 51.4]); // تهران

  const confirm = () => {
    dispatch(setCoords(coords));
    onClose();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <button onClick={onBack}>بازگشت</button>
        <span>انتخاب موقعیت روی نقشه</span>
      </div>

      <div className={styles.mapBox}>
        <MapContainer
          center={coords}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <LocationPicker onChange={setCoordsState} />
        </MapContainer>

        <div className={styles.marker}></div>
      </div>

      <div className={styles.bottom}>
        <p>مختصات: {coords[0].toFixed(5)}, {coords[1].toFixed(5)}</p>
        <button className={styles.confirm} onClick={confirm}>
          تأیید موقعیت
        </button>
      </div>
    </div>
  );
}
