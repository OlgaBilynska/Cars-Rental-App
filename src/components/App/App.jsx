import { Suspense } from "react";
import { lazy } from "react";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../Loader";
import { AppWrapperStyled } from "./App.styled.js";
import { getCars } from "../../redux/cars/carsOperations";
import { ToastContainer } from "react-toastify";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.jsx";
import ContentWrapper from "../ContentWrapper/ContentWrapper.jsx";
import carBackground from "../../assets/car_background.jpg";

const HomePage = lazy(() => import("../../pages/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
const FavoritePage = lazy(() => import("../../pages/FavoritePage"));

function App() {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  let backgroundImage = null;

  if (location.pathname === "/") {
    backgroundImage = `url(${carBackground})`;
  }

  if (location.pathname === "/home") {
    return <Navigate to="/" />;
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
