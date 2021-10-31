import { ChangeEvent, useContext, useRef, useState } from "react";
import { Container, Flex, Button, useDisclosure } from "@chakra-ui/react";
import SearchInput from "../../shared/components/SearchInput";
import { FaPlus } from "react-icons/fa";

import Listing from "./components/Listing";
import ModalBody from "./components/ModalBody";

import AppModal from "../../shared/components/Modal";
import { AppContext } from "../../shared/contexts/app.context";

const TodoList = () => {
  const { addItem } = useContext(AppContext);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const initialRef = useRef();
  const finalRef = useRef();

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSave = () => {
    addItem({
      title,
      description,
    });
  };

  return (
    <>
      <Container w="full" maxW="50%" minW="80">
        <Flex alignItems="center" margin="2.5" marginTop="10" marginBottom="3">
          <SearchInput />
          <Flex w="30%" justifyContent="flex-end">
            <Button
              bg="#5ccb9a"
              _hover={{
                backgroundColor: "#24B374",
              }}
              shadow="md"
              leftIcon={<FaPlus />}
              onClick={onOpen}
            >
              Adicionar
            </Button>
          </Flex>
        </Flex>
        <Listing />
      </Container>
      <AppModal
        finalRef={finalRef}
        initialRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        title="Adicionar novo item"
        onSave={handleSave}
      >
        <ModalBody
          description={description}
          title={title}
          setDescription={handleChangeDescription}
          setTitle={handleChangeTitle}
        />
      </AppModal>
    </>
  );
};

export default TodoList;