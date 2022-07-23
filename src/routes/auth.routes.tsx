import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/auth/login.page"));
const RegisterPage = lazy(() => import("@/pages/auth/register.page"));

export const AuthRoutes = () => {
   return (
      <Routes>
         <Route path="login" element={<LoginPage />} />
         <Route path="register" element={<RegisterPage />} />
      </Routes>
   );
};
