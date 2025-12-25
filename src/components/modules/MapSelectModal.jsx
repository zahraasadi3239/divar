import { useDispatch, useSelector } from "react-redux";
import { closeSelector, setProvince, setCity } from "src/reduxs/slices/locationSlice";
import styles from "./MapSelectModal.module.css";

export default function MapSelectModal() {
  const dispatch = useDispatch();
  const { provinces, cities, province } = useSelector(s => s.location);

  return (
    <div className={styles.overlay} onClick={() => dispatch(closeSelector())}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <h3>انتخاب شهر</h3>

        <select onChange={e => dispatch(setProvince(e.target.value))}>
          <option>استان</option>
          {provinces.map(p => <option key={p}>{p}</option>)}
        </select>

        {province && (
          <select onChange={e => dispatch(setCity(e.target.value))}>
            <option>شهر</option>
            {cities[province].map(c => <option key={c}>{c}</option>)}
          </select>
        )}

        <button onClick={() => dispatch(closeSelector())}>انصراف</button>
      </div>
    </div>
  );
}
