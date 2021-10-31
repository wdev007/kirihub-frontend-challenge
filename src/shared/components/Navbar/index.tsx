import {
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="#404674" w="full" h="20">
      <Flex
        w="46%"
        h="100%"
        maxW="50%"
        justifyContent="space-between"
        alignItems="center"
        margin="auto"
      >
        <Box>App</Box>
        {/* <Button>Sign out</Button> */}
        <Menu isLazy>
          <MenuButton>
            <Avatar
              size="md"
              name="Wellici Araujo"
              bg="gray.600"
              color="white"
            />
          </MenuButton>
          <MenuList bg="#404674">
            <MenuItem>Seu perfil</MenuItem>
            <MenuItem>Configurações</MenuItem>
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;
