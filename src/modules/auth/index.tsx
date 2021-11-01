import { Box, Flex, Input, Button, Image } from "@chakra-ui/react";
import { ChangeEvent, useContext, useState } from "react";

import Logo from "../../shared/assets/images/logo.png";

import { AppContext } from "../../shared/contexts/app.context";

const Auth = () => {
  const { signIn } = useContext(AppContext);
  const [username, setUsername] = useState("");

  const handlerUsername = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  const handleSubmit = async () => {
    await signIn(username);
  };

  return (
    <Flex h="full" w="full" alignItems="center" justifyContent="center">
      <Box h="60" bg="grayDark.300" w="70%" borderRadius="md">
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          h="full"
          padding="4"
        >
          <Image src={Logo} h="20" />
          <Box w="80%" h="60%">
            <Flex
              h="full"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Input
                placeholder="username"
                value={username}
                onChange={handlerUsername}
              />
              <Button
                bg="greenDark.400"
                isFullWidth
                _hover={{
                  backgroundColor: "greenDark.500",
                }}
                shadow="md"
                onClick={handleSubmit}
              >
                Entrar
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Auth;
