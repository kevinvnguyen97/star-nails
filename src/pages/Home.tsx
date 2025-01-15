import { Box } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box
      backgroundImage="url('/images/front_cover.jpeg')"
      height="100vh"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        background="rgba(10, 10, 10, 0.5)"
        height="100%"
        paddingTop="52px"
      ></Box>
    </Box>
  );
};
