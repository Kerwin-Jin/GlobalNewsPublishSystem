import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  RadiusSettingOutlined,
  MenuOutlined,
  FormOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import style from "./index.module.less";
import { useHistory } from "react-router-dom";
import axios from "axios";
const { Sider } = Layout;
interface SideBarProps {
  type?: string;
}
interface IIconMap {
  [key: string]: any;
}
const iconMap: IIconMap = {
  "/home": <HomeOutlined />,
  "/user-manage": <UserOutlined />,
  "/right-manage": <RadiusSettingOutlined />,
  "/news-manage": <MenuOutlined />,
  "/audit-manage": <FormOutlined />,
  "/publish-manage": <ShareAltOutlined />,
};

const SideBar: React.FC<SideBarProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [menuList, setMenuList] = useState<any>([]);
  const history = useHistory();

  const handleClickItem = (menuItem: any) => {
    history.push(menuItem.key);
  };

  const fetchMenu = async () => {
    const loop = (arr: any) => {
      return arr.map((i: any) => {
        if (i.pagepermisson) {
          return {
            key: i.key,
            label: i.title,
            title: i.title,
            icon: iconMap[i.key],
          };
        }
      });
    };
    const res = await axios.get("http://localhost:3004/rights?_embed=children");
    console.log("%c 🥚 res", "color:#6ec1c2", res);

    const _menu = res.data.map((item: any) => {
      if (item.children.length) {
        // console.log(item.pagepermisson);

        if (item.pagepermisson) {
          return {
            key: item.key,
            label: item.title,
            title: item.title,
            children: loop(item.children),
            icon: iconMap[item.key],
          };
        }
      } else {
        console.log(item.pagepermisson);
        if (item.pagepermisson) {
          return {
            key: item.key,
            label: item.title,
            title: item.title,
            icon: iconMap[item.key],
          };
        }
      }
    });

    setMenuList(_menu);
  };

  const defaultKeys = () => {
    return [history.location.pathname];
  };
  const defaultOpenKeys = () => {
    console.log("%c 🍏 pathname", "color:#4fff4B", history.location.pathname);
    return ["/" + history.location.pathname.split("/")[1]];
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={style.siderWrap}>
        <div className={style.logo} onClick={() => setCollapsed(!collapsed)}>
          全球新闻发布系统
        </div>
        <div className={style.menuWrap}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={defaultKeys()}
            defaultOpenKeys={defaultOpenKeys()}
            items={menuList}
            onClick={(v) => handleClickItem(v)}
          />
        </div>
      </div>
    </Sider>
  );
};

export default SideBar;
