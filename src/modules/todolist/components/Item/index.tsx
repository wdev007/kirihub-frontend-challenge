import { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface IProps {
  title: string;
  description?: string;
}

const Item: FC<IProps> = ({ title, description }) => (
  <Box
    bg="#404674"
    borderRadius="md"
    height="16"
    textAlign="start"
    padding="10"
    margin="2.5"
    shadow="md"
    cursor="pointer"
  >
    <Flex
      h="100%"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      textAlign="start"
    >
      <FaCheckCircle color="#5ccb9a" />
      <Box textAlign="start" w="95%">
        <Text textAlign="start" fontSize="lg">
          {title}
        </Text>
        <Text fontSize="sm" color="#6e749c">
          {description || ""}
        </Text>
      </Box>
    </Flex>
  </Box>
);

export default Item;
