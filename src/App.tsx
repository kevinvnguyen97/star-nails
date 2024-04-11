import React from "react";
import "./App.css";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import { Gallery, Home } from "./pages";
import { NavigationBar } from "./components";

function App() {
  return (
    <Box margin={5}>
      <NavigationBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/gallery">
          <Route index element={<Gallery />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
