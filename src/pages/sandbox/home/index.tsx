import React from "react";
import { Button } from "antd";
import axios from "axios";
interface HomeProps {
  type?: string;
}

const Home: React.FC<HomeProps> = (props) => {
  const getNews = () => {
    axios
      .get("http://localhost:3004/rights")
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <Button type="dashed" onClick={getNews}>
        获取
      </Button>
    </div>
  );
};

export default Home;
