import { Container } from "@chakra-ui/react";
import { FC } from "react";
import Navbar from "../components/Navbar";

const AppLayout: FC = ({ children }) => {
  return (
    <Container w="full" maxW="full" padding="0">
      <Navbar />
      {children}
    </Container>
  );
};

export default AppLayout;
