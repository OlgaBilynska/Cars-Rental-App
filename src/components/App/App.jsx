import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { AppWrapperStyled } from "./App.styled.js";

const HomePage = lazy(() => import("../../pages/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
const FavoritePage = lazy(() => import("../../pages/FavoritePage"));

function App() {
  return (
    <AppWrapperStyled>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </AppWrapperStyled>
  );
}

export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "../../pages/HomePage/HomePage";
// import CatalogPage from "../../pages/CatalogPage";
// import FavoritePage from "../../pages/FavoritePage/FavoritePage";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/catalog" element={<CatalogPage />} />
//       <Route path="/favorite" element={<FavoritePage />} />
//     </Routes>
//   );
// };

// export default App;
