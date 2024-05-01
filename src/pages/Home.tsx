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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { StarIcon } from "@chakra-ui/icons";

export const Home = () => {
  return (
    <motion.div
      key="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Text display="flex" justifyContent="center" fontSize="xxx-large" gap={2}>
        <Text>Welcome to</Text>
        <Box
          fontWeight="bold"
          color="red"
          display="flex"
          gap={2}
          alignItems="center"
        >
          <StarIcon color="dodgerblue" />
          <Text>NAILS</Text>
        </Box>
        <Text display="inline">!</Text>
      </Text>
      <Image src="/images/front_cover.jpeg" />
      <TableContainer width={500}>
        <Text textAlign="center" fontSize="x-large">
          Store Hours
        </Text>
        <Table size="sm" variant="customStriped">
          <Tbody>
            <Tr>
              <Td fontWeight="bold">Monday - Thursday</Td>
              <Td>9:30 AM - 7:00 PM</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Friday - Saturday</Td>
              <Td>9:00 AM - 7:00 PM</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Sunday</Td>
              <Td>Closed</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </motion.div>
  );
};
