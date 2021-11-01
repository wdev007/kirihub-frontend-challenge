import {
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { useContext } from "react";

import Logo from "../../assets/images/logo.png";
import { AppContext } from "../../contexts/app.context";

const Navbar = () => {
  const { signOut, user } = useContext(AppContext);
  const [isMobile] = useMediaQuery("(max-width: 830px)");

  return (
    <Box bg="grayDark.300" w="full" h="20">
      <Flex
        w={isMobile ? "46%" : "46%"}
        h="100%"
        minW={isMobile ? "300px" : "46%"}
        justifyContent="space-between"
        alignItems="center"
        margin="auto"
      >
        <Image src={Logo} h="20" />
        <Menu isLazy colorScheme="gray">
          <MenuButton>
            <Avatar
              size="md"
              name={user.username}
              bg="gray.600"
              color="white"
            />
          </MenuButton>
          <MenuList bg="grayDark.300">
            <MenuItem
              onClick={signOut}
              _hover={{
                backgroundColor: "grayDark.300",
              }}
              _selected={{
                backgroundColor: "grayDark.300",
              }}
            >
              Sign out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;
