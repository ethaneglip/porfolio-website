import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.tsx";
import Bio from "./pages/Bio.tsx";
import Music from "./pages/Music.tsx";
import PiecePage from "./pages/PiecePage.tsx";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/music" element={<Music />} />
        <Route path="/music/:slug" element={<PiecePage />} />
      </Routes>
    </BrowserRouter>
  );
}