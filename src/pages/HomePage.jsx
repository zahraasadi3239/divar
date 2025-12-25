// import { useQuery } from '@tanstack/react-query'
// import React, { useState } from "react";

// import Loader from 'src/components/modules/Loader'
// import Main from 'src/components/templates/Main'
// import Sidebar from 'src/components/templates/Sidebar'

// import { getCategory } from 'src/services/admin'
// import { getAllPosts } from 'src/services/user'

// const style={display:"flex"}
// function HomePage() {
//    const [selectedCategory, setSelectedCategory] = useState(null);
//   // const {data:posts,isLoading:postLoading}=useQuery(["post-list"],getAllPosts);
//   const { data: posts, isLoading: postLoading } = useQuery(
//   ["post-list", selectedCategory],
//   () => getAllPosts(selectedCategory)
// );
//     const {data:categories,isLoading:categoryLoading}=useQuery(["get-categories"],getCategory);
   

//   return (
//    <>
//    {postLoading || categoryLoading ? (<Loader/>):( <div style={style}>
//       <Sidebar categories={categories}
//       selectedCategory={selectedCategory}
//   onSelectCategory={setSelectedCategory}
//       />
//       <Main posts={posts}/>

//     </div>)}
//    </>
//   )
// }

// export default HomePage///
import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "src/services/user";
import { getCategory } from "src/services/admin";
import Sidebar from "src/components/templates/Sidebar";
import Main from "src/components/templates/Main";
import Loader from "src/components/modules/Loader";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
 const [params] = useSearchParams();
  const category = searchParams.get("category");
  const city = searchParams.get("city");
 const categorySlug = params.get("category")

 
  const { data: posts, isLoading: postLoading } = useQuery(
    ["post-list", category, city],
    () => getAllPosts({ category, city })
  );

  const { data: categories, isLoading: categoryLoading } =
    useQuery(["get-categories"], getCategory);

  if (postLoading || categoryLoading) return <Loader />;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        categories={categories}
        selectedCategory={category}
        onSelectCategory={(slug) => {
          const params = {};
          if (slug) params.category = slug;
          if (city) params.city = city;
          setSearchParams(params);
        }}
      />
      <Main posts={posts} />
    </div>
  );
}

export default HomePage;
