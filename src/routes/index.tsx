import React from "react";
import { Route, Routes } from "react-router-dom";

import TodosPage from "../pages/Todos";

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<TodosPage />} />
    </Routes>
  );
};

export default AppRoutes;
