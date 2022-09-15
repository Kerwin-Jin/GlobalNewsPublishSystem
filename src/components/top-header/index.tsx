import React, { useState } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Header } = Layout;
interface TopHeaderProps {
  type?: string;
}

const TopHeader: React.FC<TopHeaderProps> = (props) => {
  const [collapsed] = useState<boolean>(false);
  return (
    <Header className="site-layout-background" style={{ padding: "0 16px" }}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Header>
  );
};

export default TopHeader;
