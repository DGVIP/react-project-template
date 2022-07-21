import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@pages/app/home.page"));

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/app/home" replace />} />
         <Route path="home" element={<HomePage />} />
      </Routes>
   );
};
