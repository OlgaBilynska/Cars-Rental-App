import { lazy, Suspense } from "react";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Loader from "../Loader";
import { AppWrapperStyled } from "./App.styled.js";

import { ToastContainer } from "react-toastify";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import ContentWrapper from "../ContentWrapper/ContentWrapper.jsx";

const HomePage = lazy(() => import("../../pages/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
const FavoritePage = lazy(() => import("../../pages/FavoritePage"));

function App() {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Navigate to="/home" />;
  }

  return (
    <AppWrapperStyled>
      <Navigation />
      <ToastContainer />
      <ContentWrapper>
        <Routes path="/" location={location} key={location.pathname}>
          <Route
            path="/home"
            element={<Suspense fallback={<Loader />}>{<HomePage />}</Suspense>}
          />

          <Route
            path="/catalog"
            element={
              <Suspense fallback={<Loader />}>{<CatalogPage />}</Suspense>
            }
          />

          <Route
            path="/favorite"
            element={
              <Suspense fallback={<Loader />}>
                <FavoritePage />
              </Suspense>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ContentWrapper>
    </AppWrapperStyled>
  );
}

export default App;
