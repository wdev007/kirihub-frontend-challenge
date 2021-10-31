import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../../../shared/contexts/app.context";
import Item from "../Item";

const Listing = () => {
  const { todoListToSearch } = useContext(AppContext);
  return (
    <Flex flexDirection="column">
      {todoListToSearch.map((item) => (
        <Item
          title={item.title}
          key={item.title}
          id={item.id}
          description={item.description}
        />
      ))}
    </Flex>
  );
};

export default Listing;
