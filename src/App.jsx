import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";
import AuthPage from "./pages/AuthPage";
import ScreensPage from "./pages/ScreensPage";

const WelcomePage = lazy(() => import("./pages/WelcomePage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="auth/:id" element={<AuthPage />} />
      </Route>
    </Routes>
  );
}

export default App;
