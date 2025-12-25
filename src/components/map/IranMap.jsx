// src/components/map/IranMap.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import iranPaths from "./iranPaths";
import styles from "./IranMap.module.css";
import { setProvince, setTempMarker, openSelector } from "src/reduxs/slices/locationSlice";

export default function IranMap({ showControls = false }) {
  const dispatch = useDispatch();
  const { province: selectedProvince, tempMarker, selectorOpen } = useSelector(s => s.location);

  const [hoverId, setHoverId] = useState(null);

  const handleProvinceClick = (p) => {
    // وقتی استان کلیک شد: استان را در ریداکس ست کن و مودال انتخاب (selector) را باز کن
    dispatch(setProvince(p.name));
    // set temp to center
    dispatch(setTempMarker(p.center));
    // باز کردن selector (MapEngine یا MapSelectModal که زیر نقشه mount شده)
    dispatch(openSelector());
  };

  return (
    <div className={styles.wrapper}>
      <svg viewBox="0 0 500 400" className={styles.mapSvg} role="img" aria-label="نقشه ایران">
        {iranPaths.map(p => (
          <path
            key={p.id}
            d={p.d}
            className={`${styles.path} ${hoverId === p.id ? styles.hover : ""} ${selectedProvince === p.name ? styles.selected : ""}`}
            onMouseEnter={() => setHoverId(p.id)}
            onMouseLeave={() => setHoverId(null)}
            onClick={() => handleProvinceClick(p)}
          />
        ))}
      </svg>
      {/* اگر خواستی اطلاعات مختصر نمایش بده */}
      {showControls && selectedProvince && (
        <div className={styles.infoBox}>
          <strong>{selectedProvince}</strong>
          <div>برای انتخاب دقیق‌تر روی نقشه، ادامه بده</div>
        </div>
      )}
    </div>
  )
}
