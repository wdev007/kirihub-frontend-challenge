import { ChangeEvent, FC } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface IProps {
  title: string;
  setTitle(event: ChangeEvent<HTMLInputElement>): void;
  description: string;
  setDescription(event: ChangeEvent<HTMLInputElement>): void;
}

const ModalBody: FC<IProps> = ({
  title,
  setTitle,
  description,
  setDescription,
}) => {
  return (
    <>
      <FormControl>
        <FormLabel>Titulo</FormLabel>
        <Input placeholder="Titulo" value={title} onChange={setTitle} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Descrição</FormLabel>
        <Input
          placeholder="Descrição"
          value={description}
          onChange={setDescription}
        />
      </FormControl>
    </>
  );
};

export default ModalBody;
