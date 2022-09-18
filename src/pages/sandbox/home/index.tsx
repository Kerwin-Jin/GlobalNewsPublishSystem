import React, { CSSProperties } from "react";
import { Button } from "antd";
import style from "./index.module.less";
interface HomeProps {
  type?: string;
}

const style1: CSSProperties = {
  margin: "10px",
  width: 100,
  height: 100,
  boxShadow: "4px 4px 16px #eee",
  padding: "10px",
};

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div>
      <div style={style1}>首页</div>
    </div>
  );
};

export default Home;
