import { Navigate, Route, Routes } from "react-router";
import { authLayoutRoute } from "./core/routes";

const InnerApp = () => {
  return (
    <>
      <Routes>
        {authLayoutRoute.map((route: any) => (
          <Route
            key={route?.key}
            path={route?.path}
            element={
              route?.navigatePath ? (
                <Navigate to={route.navigatePath} />
              ) : (
                <route.component />
              )
            }
          />
        ))}
      </Routes>
    </>
  );
};
export default InnerApp;
