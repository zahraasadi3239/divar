import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { getCookie,removeCookie} from "src/utils/cookie";
import { openSelector } from "src/reduxs/slices/locationSlice";
import { getProfile } from "src/services/user";
import { useQuery } from "@tanstack/react-query";


function Header() {
   const {data,isLoading,error}=useQuery(["profile"],getProfile);
  console.log({data,isLoading,error})
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = getCookie("accessToken");
  const role = useSelector(s => s.user?.role); 
  const city = useSelector(s => s.location.city);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const logoutHandler = () => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className={styles.header}>
      {/* راست */}
      <div className={styles.right}>
        <Link to="/" className={styles.logo}>
          <img src="/divar.svg" />
        </Link>

        <button
          className={styles.locationBtn}
          onClick={() => dispatch(openSelector())}
        >
          <img src="/location.svg" />
          {city || "انتخاب شهر"}
        </button>
      </div>

      {/* چپ */}
      <div className={styles.left}>
        {!token ? (
          <Link to="/auth" className={styles.loginBtn}>
            ورود
          </Link>
        ) : (
          <div
            className={styles.account}
            ref={dropdownRef}
            onClick={() => setOpen(!open)}
          >
            <p>دیوار من ▾</p>

            {open && (
              <div className={styles.dropdown}>
                {data.data.role==="ADMIN"? (
                  <Link to="/admin">
                    پنل ادمین
                  </Link>
                ) : (
                  < Link to="/dashboard">
                    داشبورد
                  </Link>
                )}

                <button onClick={logoutHandler}>خروج</button>
              </div>
            )}
          </div>
        )}

        <Link to="/dashboard" className={styles.addBtn}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
