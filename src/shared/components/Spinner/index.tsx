import { Flex, Spinner } from "@chakra-ui/react";

const AppSpinner = () => (
  <Flex h="full" w="full" minH="28" alignItems="center" justifyContent="center">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Flex>
);

export default AppSpinner;
