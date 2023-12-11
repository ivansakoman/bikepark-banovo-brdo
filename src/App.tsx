import "./styles/base.scss";
import "leaflet/dist/leaflet.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import NoMatch from "./pages/no-match";
import Home from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import TrailsPage from "./pages/trails";
import ScrollToTop from "./utils/scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trails" element={<TrailsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
