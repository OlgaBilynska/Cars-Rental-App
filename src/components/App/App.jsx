import { Suspense } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../Loader";
import { AppWrapperStyled } from "./App.styled.js";

import { ToastContainer } from "react-toastify";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.jsx";
import ContentWrapper from "../ContentWrapper/ContentWrapper.jsx";
import carBackground from "../../assets/car_background.jpg";

// const HomePage = lazy(() => import("../../pages/HomePage"));
// const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
// const FavoritePage = lazy(() => import("../../pages/FavoritePage"));

import HomePage from "../../pages/HomePage/HomePage.jsx";
import CatalogPage from "../../pages/CatalogPage/CatalogPage.jsx";
import FavoritePage from "../../pages/FavoritePage/FavoritePage.jsx";

function App() {
  const location = useLocation();

  let backgroundImage = null;

  // if (location.pathname === "/") {
  //   return <Navigate to="/" />;
  // }

  if (location.pathname === "/") {
    backgroundImage = `url(${carBackground})`;
  }

  return (
    <AppWrapperStyled $backgroundImage={backgroundImage}>
      <ToastContainer />
      <ContentWrapper>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<Suspense fallback={<Loader />}>{<HomePage />}</Suspense>}
          />

          <Route
            path="/catalog"
            element={
              <Suspense fallback={<Loader />}>{<CatalogPage />}</Suspense>
            }
          />

          <Route
            path="/favorites"
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
