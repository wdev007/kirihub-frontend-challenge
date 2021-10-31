import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { FC } from "react";
import { FaSearch } from "react-icons/fa";

interface IProps {
  value: string;
  handleValue(value: string): void;
}

const SearchInput: FC<IProps> = ({ value, handleValue }) => (
  <InputGroup size="lg" borderRadius="3xl">
    <InputLeftElement pointerEvents="none" children={<FaSearch />} />
    <Input
      placeholder="Buscar"
      size="lg"
      color="white"
      borderRadius="3xl"
      shadow="md"
      value={value}
      onChange={(event) => handleValue(event.target.value)}
    />
  </InputGroup>
);

export default SearchInput;
