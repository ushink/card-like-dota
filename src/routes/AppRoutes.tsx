import { Route, Routes } from "react-router-dom";
import { Heroes } from "../pages/Heroes/Heroes";
import { Hero } from "../pages/Hero/Hero";
import { NotFound } from "../pages/NotFound/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Heroes />} />
      <Route path="/hero/:id" element={<Hero />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
