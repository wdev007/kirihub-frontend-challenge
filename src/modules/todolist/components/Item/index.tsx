import { FC, useContext } from "react";
import {
  Box,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverFooter,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

import { AppContext } from "../../../../shared/contexts/app.context";

interface IProps {
  title: string;
  description?: string;
  id?: number;
}

const Item: FC<IProps> = ({ title, description, id }) => {
  const { removeItem } = useContext(AppContext);

  return (
    <Popover placement="bottom" closeOnBlur={false}>
      <PopoverTrigger>
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
      </PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Deseja excluir o item "{title}"?
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverFooter
          border="0"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <Button colorScheme="gray" color="black">
            Cancelar
          </Button>
          <Button
            colorScheme="red"
            onClick={() => removeItem({ title, description, id })}
          >
            Excluir
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default Item;
