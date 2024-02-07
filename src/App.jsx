import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { currentThunk } from "./redux/Auth/authOperation";
import { RestictedRoute } from "./components/RestictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { selectAuthIsLoading } from "./redux/Auth/authSelectors";

import ErrorPage from "./pages/ErrorPage";
import { allDashboardsThunk } from "./redux/Dashboard/dashboardOperation";
import { selectCurrentDashboard } from "./redux/Dashboard/dashboardsSelectors";

const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const ScreensPage = lazy(() => import("./pages/ScreensPage"));

function App() {
  const isRefreshing = useSelector(selectAuthIsLoading);

  
  const currentDashBoard = useSelector(selectCurrentDashboard);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
    dispatch(allDashboardsThunk())
  }, [dispatch])
  
  

    
  return (
    <>
      {isRefreshing ? (
        <div>Loadind...</div>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RestictedRoute
                  redirectTo="/home"
                  component={<WelcomePage />}
                />
              }
            />

            <Route
              path="/home"
              element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
            >
              
                <Route
                  path=":boardName"
                  element={
                    <PrivateRoute redirectTo="/" component={<ScreensPage />} />
                  }
                />
              
                <Route
                  index
                  element={
                    <PrivateRoute redirectTo="/" component={<ScreensPage />} />
                  }
                />
              
            </Route>
            <Route
              path="auth/:id"
              element={
                <RestictedRoute redirectTo="/home" component={<AuthPage />} />
              }
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
