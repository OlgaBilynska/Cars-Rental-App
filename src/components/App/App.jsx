import { lazy, Suspense } from "react";
// import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Loader from "../Loader";
import { AppWrapperStyled } from "./App.styled.js";
// import {
//   selectCarsIsLoading,
//   selectFavoriteIsLoading,
// } from "../../redux/selectors.js";
import { ToastContainer } from "react-toastify";

const HomePage = lazy(() => import("../../pages/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
const FavoritePage = lazy(() => import("../../pages/FavoritePage"));

function App() {
  const location = useLocation();

  // const favoriteIsLoading = useSelector(selectFavoriteIsLoading);
  // const catalogIsLoading = useSelector(selectCarsIsLoading);

  if (location.pathname === "/") {
    return <Navigate to="/home" />;
  }

  return (
    <AppWrapperStyled>
      <ToastContainer />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Suspense fallback={<Loader />}>{<HomePage />}</Suspense>}
        />

        <Route
          path="/catalog"
          element={<Suspense fallback={<Loader />}>{<CatalogPage />}</Suspense>}
        />

        <Route
          path="/favorite"
          element={
            <Suspense fallback={<Loader />}>
              <FavoritePage />
            </Suspense>
          }
        />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </AppWrapperStyled>
  );
}

export default App;
