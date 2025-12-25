// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { getPostById } from "src/services/user";
// import Loader from "src/components/modules/Loader";
// import MapEngine from "src/components/modules/MapEngine";
// import styles from "./AddDetailPage.module.css"
// function AddDetailPage() {
//   const { id } = useParams();
 
// console.log(id)
//   const { data, isLoading } = useQuery(
//     ["post-detail", id],
//     () => getPostById(id)
//   );
//   console.log(data)

//   if (isLoading) return <Loader />;

//   const post = data.data.post;
//  const imageUrl = `${import.meta.env.VITE_BASE_URL}/${post.images[0].replaceAll("\\", "/")}`;
//   return (
//   <div className={styles.container}>
   
//   <h1 className={styles.title}>{post.options.title}</h1>
//   <div><img
//   src={imageUrl}
//   alt={post.options.title}
  
//   onError={(e) => {
//     e.target.src = "/no-image.png";
//   }}
// /></div>
 
//   <div className={styles.price}>
//     {post.amount} تومان
//   </div>

//   <div className={styles.meta}>
//     <span>شهر: {post.options.city}</span>
//   </div>

//   <div className={styles.description}>
//     {post.options.content}
//   </div>

//   {/* باکس نقشه */}
//   <div className={styles.mapBox}>
//    <MapEngine city={post.options.city} />
//     <p className={styles.mapHint}>
//       محدوده تقریبی آگهی
//     </p>
//   </div>
// </div>

//   );
// }

// export default AddDetailPage;
   //////
   import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPostById } from "src/services/user";
import Loader from "src/components/modules/Loader";
import MapEngine from "src/components/modules/MapEngine";
import styles from "./AddDetailPage.module.css";

function AddDetailPage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(
    ["post-detail", id],
    () => getPostById(id),
    {
      enabled: !!id,
    }
  );

  if (isLoading) return <Loader />;
  if (isError || !data?.data?.post) {
    return <p style={{ padding: 16 }}>آگهی پیدا نشد</p>;
  }

  const post = data.data.post;

  // ✅ ساخت امن URL عکس
  const imagePath = post.images?.[0]
    ? post.images[0].replaceAll("\\", "/")
    : null;

  const imageUrl =`${import.meta.env.VITE_BASE_URL}${post.images[0].replaceAll("\\", "/")}`;

  return (
    <div className={styles.container}>
      {/* عنوان */}
      <h1 className={styles.title}>
        {post.options?.title || "بدون عنوان"}
      </h1>

      {/* تصویر */}
      <div className={styles.imageWrapper}>
        <img
          src={imageUrl}
          alt={post.options?.title || "تصویر آگهی"}
          onError={(e) => {
            e.currentTarget.src = "/no-image.png";
          }}
        />
      </div>

      {/* قیمت */}
      <div className={styles.price}>
        {post.amount?.toLocaleString("fa-IR")} تومان
      </div>

      {/* متادیتا */}
      <div className={styles.meta}>
        <span>شهر: {post.options?.city || "نامشخص"}</span>
      </div>

      {/* توضیحات */}
      <div className={styles.description}>
        {post.options?.content || "توضیحی ثبت نشده"}
      </div>

      {/* نقشه */}
      <div className={styles.mapBox}>
        <MapEngine city={post.options?.city} />
        <p className={styles.mapHint}>محدوده تقریبی آگهی</p>
      </div>
    </div>
  );
}

export default AddDetailPage;
