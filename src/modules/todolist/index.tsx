import { ChangeEvent, useContext, useRef, useState } from "react";
import {
  Container,
  Flex,
  Button,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import SearchInput from "../../shared/components/SearchInput";
import { FaPlus } from "react-icons/fa";

import Listing from "./components/Listing";
import ModalBody from "./components/ModalBody";

import AppModal from "../../shared/components/Modal";
import { AppContext } from "../../shared/contexts/app.context";
import AppSpinner from "../../shared/components/Spinner";

const TodoList = () => {
  const { addItem, loading, searchTodos } = useContext(AppContext);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 830px)");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const initialRef = useRef();
  const finalRef = useRef();

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
    searchTodos(value);
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    onClose();
  };

  const handleSave = () => {
    addItem({
      title,
      description,
    });
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <>
      <Container w="full" maxW="50%" minW="80">
        <Flex
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          margin="2.5"
          marginTop="10"
          marginBottom="3"
        >
          <SearchInput handleValue={handleSearchValue} value={searchValue} />
          <Flex
            marginLeft={!isMobile ? "2.5" : "unset"}
            w={isMobile ? "full" : "30%"}
            h={isMobile ? "20" : "unset"}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              bg="greenDark.400"
              _hover={{
                backgroundColor: "greenDark.500",
              }}
              shadow="md"
              leftIcon={<FaPlus />}
              onClick={onOpen}
              isFullWidth={isMobile}
            >
              Adicionar
            </Button>
          </Flex>
        </Flex>
        <Listing />
        {loading && <AppSpinner />}
      </Container>
      <AppModal
        finalRef={finalRef}
        initialRef={initialRef}
        isOpen={isOpen}
        onClose={handleClose}
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
