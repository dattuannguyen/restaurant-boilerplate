import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Reservation from "@/pages/Reservation";

const AppRouter = () => (
  <BrowserRouter>
    {/* <Layout> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/about" element={<About />} />
    </Routes>
    {/* </Layout> */}
  </BrowserRouter>
);

export default AppRouter;

