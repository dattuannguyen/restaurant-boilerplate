import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Reservation from "@/pages/Reservation";
import Layout from "@/components/layout/Layout";
import { APP_ROUTE } from "@/lib/constants";

const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path={APP_ROUTE.HOME} element={<Home />} />
        <Route path={APP_ROUTE.MENU} element={<Menu />} />
        <Route path={APP_ROUTE.RESERVATION} element={<Reservation />} />
        <Route path={APP_ROUTE.ABOUT} element={<About />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRouter;

