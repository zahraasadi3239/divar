import { Routes, Route, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import AdminPage from "src/pages/AdminPage";
import AuthPage from "src/pages/AuthPage";
import DashboardPage from "src/pages/DashboardPage";
import HomePage from "src/pages/HomePage";
import PageNotFound from "src/pages/404";
import { getProfile } from "src/services/user";
import Loader from "src/components/modules/Loader";
import AddDetailPage from "src/pages/AddDetailPage";

function Router() {
  const {data,isLoading,error}=useQuery(["profile"],getProfile);
  console.log({data,isLoading,error})
  if(isLoading) return <Loader/>
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={data? <DashboardPage />:<Navigate to="/auth" />}  />
      <Route path="/auth" element={data? <Navigate to="/dashboard"/>:<AuthPage />} />
      <Route path="/post/:id" element={<AddDetailPage/>}/>
      <Route path="/admin" element={data && data.data.role==="ADMIN" ? <AdminPage />:<Navigate to="/"/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
