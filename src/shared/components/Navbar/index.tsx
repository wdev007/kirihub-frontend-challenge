import {
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Image,
} from "@chakra-ui/react";
import { useContext } from "react";

import Logo from "../../assets/images/logo.png";
import { AppContext } from "../../contexts/app.context";

const Navbar = () => {
  const { signOut, user } = useContext(AppContext);
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
        <Image src={Logo} h="20" />
        <Menu isLazy>
          <MenuButton>
            <Avatar
              size="md"
              name={user.username}
              bg="gray.600"
              color="white"
            />
          </MenuButton>
          <MenuList bg="#404674">
            <MenuItem onClick={signOut}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;
