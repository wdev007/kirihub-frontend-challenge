import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../../../shared/contexts/app.context";
import Item from "../Item";

const Listing = () => {
  const { todoList } = useContext(AppContext);
  return (
    <Flex flexDirection="column">
      {todoList.map((item) => (
        <Item
          title={item.title}
          key={item.title}
          description={item.description}
        />
      ))}
    </Flex>
  );
};

export default Listing;
