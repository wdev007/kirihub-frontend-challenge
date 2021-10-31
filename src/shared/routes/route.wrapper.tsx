import { FC, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../contexts/app.context";
import AppLayout from "../layouts/app";
import AuthLayout from "../layouts/auth";

interface IProps {
  component: (props: any) => JSX.Element;
  isPrivate?: boolean;
  exact?: boolean;
  path: string;
}

const RouteWrapper: FC<IProps> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const { authenticated } = useContext(AppContext);

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />;
  }

  const Layout = authenticated ? AppLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(renderProps) => (
        <Layout>
          <Component {...renderProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
