import React from "react";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Image,
  Tr,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { StarIcon } from "@chakra-ui/icons";
import { Logo } from "../components/Logo";

export const Home = () => {
  return (
    <Box
      backgroundImage="/images/front_cover.jpeg"
      height="calc(100vh - 56px)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box background="rgba(0, 0, 0, 0.5)" height="100%">
        <Text
          display="flex"
          justifyContent="center"
          fontSize="xxx-large"
          gap={2}
          color="white"
        >
          <Logo />
        </Text>
      </Box>
    </Box>
  );
};
