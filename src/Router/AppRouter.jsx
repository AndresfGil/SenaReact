import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../Auth/routes/AuthRoutes";
import MainRoutes from '../Main/routes/MainRoutes';

export const AppRouter = () => {

  const { status } = useSelector((state) => state.auth);

  return (

    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<MainRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
        <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
