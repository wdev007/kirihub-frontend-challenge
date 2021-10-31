import { Container } from "@chakra-ui/react";
import { FC } from "react";

const AuthLayout: FC = ({ children }) => {
  return (
    <Container w="full" h="full">
      {children}
    </Container>
  );
};

export default AuthLayout;
