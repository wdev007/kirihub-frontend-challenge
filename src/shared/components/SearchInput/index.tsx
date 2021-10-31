import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => (
  <InputGroup size="lg" borderRadius="3xl">
    <InputLeftElement pointerEvents="none" children={<FaSearch />} />
    <Input
      placeholder="Search"
      size="lg"
      color="white"
      borderRadius="3xl"
      shadow="md"
    />
  </InputGroup>
);

export default SearchInput;
