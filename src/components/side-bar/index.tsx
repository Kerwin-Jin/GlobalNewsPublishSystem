import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import style from "./index.module.less";
import MenuItem, { MenuItemProps } from "antd/lib/menu/MenuItem";
import { useHistory } from "react-router-dom";
const { Sider } = Layout;
interface SideBarProps {
  type?: string;
}

const menu = [
  {
    key: "/home",
    icon: <UserOutlined />,
    label: "首页",
  },
  {
    key: "/user-manager",
    icon: <VideoCameraOutlined />,
    label: "用户管理",
    children: [
      {
        key: "/user-manager/list",
        label: "用户列表",
      },
    ],
  },
  {
    key: "right-manager",
    icon: <UploadOutlined />,
    label: "权限管理",

    children: [
      {
        key: "/right-manager/list",
        icon: <VideoCameraOutlined />,
        label: "权限列表",
      },
      {
        key: "/right-manager/role/list",
        icon: <VideoCameraOutlined />,
        label: "用户列表",
      },
    ],
  },
];

const SideBar: React.FC<SideBarProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const history = useHistory();

  const handleClickItem = (args: any) => {
    history.push(args.key);
  };
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={style.logo} onClick={() => setCollapsed(!collapsed)}>
        全球新闻发布系统
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/home"]}
        items={menu}
        onClick={(v) => handleClickItem(v)}
      />
    </Sider>
  );
};

export default SideBar;
