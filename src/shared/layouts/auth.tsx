import { Container } from "@chakra-ui/react";
import { FC } from "react";

const AuthLayout: FC = ({ children }) => {
  console.log("AuthLayout: ");
  return (
    <Container w="full" h="full">
      {children}
    </Container>
  );
};

export default AuthLayout;
