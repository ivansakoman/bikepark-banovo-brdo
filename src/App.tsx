import "./styles/base.scss";
import "leaflet/dist/leaflet.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import TrackPage from "./pages/track-page";
import NoMatch from "./pages/no-match";
import Home from "./pages/home/home";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/contact-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="track" element={<TrackPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
