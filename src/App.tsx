import React from "react";
import "./App.css";
import { Box } from "@chakra-ui/react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Gallery, Home } from "./pages";
import { NavigationBar } from "./components";

function App() {
  const location = useLocation();
  return (
    <Box margin={5}>
      <NavigationBar />
      <AnimatePresence mode="wait" initial>
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Box>
  );
}

export default App;
