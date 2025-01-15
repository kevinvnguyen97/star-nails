import "./App.css";
import { Box } from "@chakra-ui/react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { Gallery, Home, Services } from "./pages";
import { NavigationBar } from "./components";

function App() {
  const location = useLocation();
  return (
    <Box>
      <NavigationBar />
      <Routes location={location} key={location.pathname}>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
