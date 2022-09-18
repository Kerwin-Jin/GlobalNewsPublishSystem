import React, { useState } from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
interface TopHeaderProps {
  type?: string;
}

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: <span>Admin</span>,
      },
      {
        key: "2",
        label: <span>退出</span>,
      },
    ]}
  />
);

const TopHeader: React.FC<TopHeaderProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleClick = () => {
    setCollapsed((collapsed) => !collapsed);
  };
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: "0 16px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        {collapsed ? (
          <MenuUnfoldOutlined onClick={handleClick} />
        ) : (
          <MenuFoldOutlined onClick={handleClick} />
        )}
      </div>
      <div>
        <span style={{ marginRight: "10px" }}>欢迎回来</span>
        <Dropdown overlay={menu}>
          <Avatar size={34} icon={<UserOutlined />} gap={24} />
        </Dropdown>
      </div>
    </Header>
  );
};

export default TopHeader;
