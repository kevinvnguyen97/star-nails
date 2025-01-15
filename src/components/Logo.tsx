import { StarIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
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
  );
};
