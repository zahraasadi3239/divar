import { useQuery } from '@tanstack/react-query'
import { getCategory } from 'src/services/admin'
import styles from "./Sidebar.module.css"
function Sidebar({categories, selectedCategory, onSelectCategory}) {

  return (
    <div className={styles.sidebar}>
      <h4>دسته ها</h4>
      <ui>
          <li
          className={!selectedCategory ? styles.active : ""}
          onClick={() => onSelectCategory(null)}
        >
          همه آگهی‌ها
        </li>
        {categories?.data.map((category)=>(
          <li key={category._id}  onClick={() =>
    onSelectCategory(
      selectedCategory === category.slug ? null : category.slug
    )
  }
  style={{
    cursor: "pointer",
    background:
      selectedCategory === category.slug ? "#eee" : "transparent",
  }}>
            <img  src={`${category.icon}.svg`}/>
            <p>{category.name}</p>
          </li>
        ))}
      </ui>
    </div>
  )
}

export default Sidebar