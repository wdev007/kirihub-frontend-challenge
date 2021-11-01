import { Flex, Spinner } from "@chakra-ui/react";

const AppSpinner = () => (
  <Flex h="full" w="full" minH="28" alignItems="center" justifyContent="center">
    <Spinner
      thickness="5px"
      speed="0.65s"
      emptyColor="gray.200"
      color="greenDark.400"
      size="xl"
    />
  </Flex>
);

export default AppSpinner;
