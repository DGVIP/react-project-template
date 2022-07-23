import { Suspense } from "react";
import { Route, Routes, Navigate, BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { RouterFallback } from "@/shared/router-fallback.component";
import { RouterErrorBoundary } from "@/shared/router-error-boundary.component";

export const Navigation = () => {
   return (
      <RouterErrorBoundary>
         <Suspense fallback={<RouterFallback />}>
            <Router>
               <Routes>
                  <Route path="/" element={<Navigate to="/app" replace />} />
                  <Route path="app/*" element={<AppRoutes />} />
                  <Route path="auth/*" element={<AuthRoutes />} />
               </Routes>
            </Router>
         </Suspense>
      </RouterErrorBoundary>
   );
};
