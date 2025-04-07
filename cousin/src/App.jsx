import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Vehic from "./pages/Vehic"
import Page1 from "./pages/Page1"
import Partie2 from "./pages/Partie2"
import Page2 from "./pages/Page2"
import Partie3 from "./pages/Partie3"
import Maintenance2 from "./pages/Maintenance2"
import Maintenance1 from "./pages/Maintenance1"
import Maintenance3 from "./pages/Maintenance3"
import Intro from "./pages/Intro"

import react from "react"
import Layout from "./components/Layout"
import Vehicule from "./pages/Vehicule"
import ConstatFinal from "./pages/ConstatFinal"
import { FormProvider } from "./components/FormContext"

const pageVariants = {
  initial: { rotateY: 90, opacity: 0 },
  animate: { rotateY: 0, opacity: 1 },
  exit: { rotateY: -90, opacity: 0 },
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ perspective: 1000 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<Vehic />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/partie2" element={<Partie2 />} />
            <Route path="/partie3" element={<Partie3 />} />
            <Route path="/vehicule" element={<Vehicule />} />
            <Route path="/maintenance2" element={<Maintenance2 />} />
            <Route path="/maintenance1" element={<Maintenance1 />} />
            <Route path="/maintenance3" element={<Maintenance3 />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/constat-final" element={<ConstatFinal />} />
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <FormProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </FormProvider>
  )
}
