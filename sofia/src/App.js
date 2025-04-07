import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Import de tes pages
import Vehic from "./pages/Vehic";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Partie2 from "./pages/Partie2";
import Partie3 from "./pages/Partie3";
import Maintenance2 from "./pages/Maintenance2";
import Maintenance1 from "./pages/Maintenance1";
import Maintenance3 from "./pages/Maintenance3";
import Intro from "./pages/Intro";
import Vehicule from "./pages/Vehicule";

const pageVariants = {
  initial: { rotateY: 90, opacity: 0 },
  animate: { rotateY: 0, opacity: 1 },
  exit: { rotateY: -90, opacity: 0 },
};

const pageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  color: "white",
  backgroundColor: "#3498db",
  height: "100vh",
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          perspective: "1000px",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Vehic />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/partie2" element={<Partie2 />} />
          <Route path="/partie3" element={<Partie3 />} />
          <Route path="/maintenance2" element={<Maintenance2 />} />
          <Route path="/maintenance1" element={<Maintenance1 />} />
          <Route path="/maintenance3" element={<Maintenance3 />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/vehicule" element={<Vehicule />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
export default function App() {
    return (
      <Router>
        <AnimatedRoutes />
      </Router>
    );
  }
