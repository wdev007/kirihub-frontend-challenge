import { FC } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

interface IProps {
  initialRef: React.RefObject<any> | undefined;
  finalRef: React.RefObject<any> | undefined;
  isOpen: boolean;
  onClose(): void;
  onSave(): void;
  title: string;
}

const AppModal: FC<IProps> = ({
  initialRef,
  finalRef,
  isOpen,
  onClose,
  children,
  title,
  onSave,
}) => (
  <Modal
    initialFocusRef={initialRef}
    finalFocusRef={finalRef}
    isOpen={isOpen}
    onClose={onClose}
    isCentered
  >
    <ModalOverlay />
    <ModalContent bg="grayDark.500" color="white">
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>{children}</ModalBody>

      <ModalFooter>
        <Button
          bg="greenDark.400"
          _hover={{
            backgroundColor: "greenDark.500",
          }}
          mr={3}
          onClick={onSave}
        >
          Adicionar
        </Button>
        <Button onClick={onClose} colorScheme="red" bg="red" color="white">
          Cancel
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default AppModal;
