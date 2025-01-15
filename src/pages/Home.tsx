import { Box, Text } from "@chakra-ui/react";
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
