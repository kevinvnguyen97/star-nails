import { StarIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Box
      fontWeight="bold"
      color="yellow"
      display="flex"
      gap={2}
      alignItems="center"
    >
      <Box bgColor="white" borderRadius="100%" w={25} h={25} textAlign="center">
        <StarIcon color="dodgerblue" padding={0} />
      </Box>
      <Text fontStyle="italic" fontFamily="Arial">Nails & Spa</Text>
    </Box>
  );
};
