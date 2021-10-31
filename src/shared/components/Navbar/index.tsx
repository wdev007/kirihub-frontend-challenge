import { Flex, Box, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="#404674" w="full" h="20">
      <Flex
        w="80%"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
        margin="auto"
      >
        <Box>App</Box>
        <Button>Sign out</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
