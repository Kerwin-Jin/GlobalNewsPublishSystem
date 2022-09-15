import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import SandBox from "../pages/sandbox";

interface IndexRouterProps {
  type?: string;
}

const auth = () => {
  return localStorage.getItem("token") ? (
    <SandBox />
  ) : (
    <Redirect to={"/login"} />
  );
};

const IndexRouter: React.FC<IndexRouterProps> = (props) => {
  return (
    <HashRouter>
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route path="/" render={auth} />
        {/* <Route path={"*"} component={NotFound} /> */}
      </Switch>
    </HashRouter>
  );
};

export default IndexRouter;
