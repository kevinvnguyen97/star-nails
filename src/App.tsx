import "./App.css";
import { Box } from "@chakra-ui/react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Gallery, Home, Services } from "./pages";
import { NavigationBar } from "./components";

function App() {
  const location = useLocation();
  return (
    <Box>
      <NavigationBar />
      <AnimatePresence mode="wait" initial>
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            <Route
              index
              element={
                <motion.div
                  key="Home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/services"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Services />
                </motion.div>
              }
            />
            <Route
              path="/gallery"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Gallery />
                </motion.div>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Box>
  );
}

export default App;
