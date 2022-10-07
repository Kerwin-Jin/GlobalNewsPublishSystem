import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SideBar from "../../components/side-bar";
import TopHeader from "../../components/top-header";
import NotFound from "../not-found";
import Home from "./home";
import RightManager from "./right-manager";
import "./index.css";
interface SandBoxProps {
  type?: string;
}

const SandBox: React.FC<SandBoxProps> = (props) => {
  return (
    <Layout>
      <SideBar />
      <Layout>
        <TopHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            overflow: "auto",
          }}
        >
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/right-manage/right/list" component={RightManager} />
            <Redirect from="/" to={"/home"} exact />
            <Route path="*" component={NotFound} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SandBox;
