import api from "configs/api";
import { getCookie } from "src/utils/cookie";
console.log(getCookie("accessToken"));

const getProfile = () => api.get("user/whoami").then((res) => res || false);
const getPosts = () => api.get("post/my");
// const getAllPosts = () => api.get("");
const getAllPosts = ({ category, city }) => {
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  if (city) params.append("city", city);

  return api.get(`post?${params.toString()}`);
};

const getPostById = (id) => api.get(`post/${id}`);

export { getProfile, getPosts, getAllPosts, getPostById };
