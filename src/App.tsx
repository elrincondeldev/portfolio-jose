import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import HackathonPage from "./pages/HackathonPage";
import WorkPage from "./pages/WorkPage";
import VideosPage from "./pages/VideosPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <main className="min-h-screen">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/hackathon" element={<HackathonPage />} />
            <Route path="/work" element={<WorkPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
