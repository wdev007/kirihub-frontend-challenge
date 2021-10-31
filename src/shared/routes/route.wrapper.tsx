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
  path,
  exact,
  ...rest
}) => {
  const { authenticated } = useContext(AppContext);
  const Layout = isPrivate ? AppLayout : AuthLayout;

  if (!authenticated && isPrivate) {
    return <Redirect to="/" />;
  }

  if (authenticated && !isPrivate) {
    return <Redirect to="/home" />;
  }

  return (
    <Route
      exact={exact}
      path={path}
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
