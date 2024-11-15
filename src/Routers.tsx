import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/screen";
import { Home, NotFound } from "./pages";

export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
