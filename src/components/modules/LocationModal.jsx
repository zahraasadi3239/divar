import React, { useEffect, useState } from "react";
import styles from "./LocationModal.module.css";
import provinces from "src/data/provinces.json";
import { useDispatch } from "react-redux";
import { setProvince, setCity, openSelector } from "src/reduxs/slices/locationSlice";

export default function LocationModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [selectedProvince, setSelectedProvince] = useState(null);

  useEffect(() => {
    if (!isOpen) setSelectedProvince(null);
  }, [isOpen]);

  if (!isOpen) return null;

  const chooseProvince = (p) => {
    setSelectedProvince(p);
    dispatch(setProvince(p.name));
  };

  const chooseCity = (city) => {
    dispatch(setCity(city));
    onClose();
  };

  const chooseOnMap = () => {
    if (!selectedProvince)
      return alert("ابتدا یک استان انتخاب کنید");

    onClose();
    dispatch(openSelector());
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={`${styles.sheet} ${isOpen ? styles.open : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.headerBar}></div>

        <h2 className={styles.title}>انتخاب استان و شهر</h2>

        <div className={styles.container}>
          <div className={styles.provinceList}>
            {provinces.map((p) => (
              <div
                key={p.id}
                className={`${styles.item} ${
                  selectedProvince?.id === p.id ? styles.active : ""
                }`}
                onClick={() => chooseProvince(p)}
              >
                {p.name}
              </div>
            ))}
          </div>

          <div className={styles.cityList}>
            <div className={styles.label}>شهرها</div>

            {selectedProvince ? (
              selectedProvince.cities.map((c, i) => (
                <div
                  key={i}
                  className={styles.item}
                  onClick={() => chooseCity(c)}
                >
                  {c}
                </div>
              ))
            ) : (
              <div className={styles.hint}>ابتدا یک استان انتخاب کنید</div>
            )}

            <button className={styles.mapBtn} onClick={chooseOnMap}>
              انتخاب روی نقشه 🗺
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
