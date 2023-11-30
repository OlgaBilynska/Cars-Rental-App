import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Loader";
import { AppWrapperStyled } from "./App.styled.js";

const HomePage = lazy(() => import("../../pages/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
const FavoritePage = lazy(() => import("../../pages/FavoritePage"));

function App() {
  return (
    <AppWrapperStyled>
      <Routes>
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
