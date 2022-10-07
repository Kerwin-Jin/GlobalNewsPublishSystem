import { Button, Modal, Popover, Space, Table, Tag, Switch } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import axios from "axios";
import React, { useState, useEffect } from "react";

interface RightManagerProps {
  type?: string;
}

const RightManager: React.FC<RightManagerProps> = (props) => {
  const [rightList, setRightList] = useState([]);

  const fetchList = async () => {
    const res = await axios.get("http://localhost:3004/rights?_embed=children");
    const list = res.data;
    const _res = list.map((item: any) => {
      if (item.children.length === 0) {
        return { ...item, children: "" };
      }
      return item;
    });
    setRightList(_res);
  };
  useEffect(() => {
    fetchList();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "权限名称",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "路径",
      dataIndex: "key",
      key: "key",
      render: (key: string) => {
        return <Tag color="orange">{key}</Tag>;
      },
    },
    {
      title: "操作",
      dataIndex: "oper",
      key: "oper",
      render: (_: any, item: any) => {
        return (
          <Space>
            <Button
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(item)}
            />

            <Popover
              content={
                <div>
                  <Switch
                    checked={item.pagepermisson}
                    onChange={() => handleSwitch(item)}
                  />
                </div>
              }
              title="是否开启"
              trigger={item.grade === 1 ? "click" : ""}
            >
              <Button
                type="primary"
                shape="circle"
                icon={<EditOutlined />}
                disabled={item.grade === 1 ? false : true}
              />
            </Popover>
          </Space>
        );
      },
    },
  ];

  const handleSwitch = async (item: any) => {
    console.log(item);
    let res: any;
    if (item.grade === 1) {
      res = await axios.patch("http://localhost:3004/rights/" + item.id, {
        pagepermisson: item.pagepermisson ? 0 : 1,
      });
    } else {
      res = axios.patch("http://localhost:3004/children/" + item.id, {
        pagepermisson: item.pagepermisson ? 0 : 1,
      });
    }

    if (res.status === 200) {
      item.pagepermisson = item.pagepermisson ? 0 : 1;
      setRightList([...rightList]);
    }
  };

  const handleDelete = (item: any) => {
    const deleteMenuItem = async () => {
      if (item.grade === 1) {
        const res = await axios.delete(
          "http://localhost:3004/rights/" + item.id
        );
        if (res.status === 200) {
          fetchList();
        }
      } else {
        const res = await axios.delete(
          "http://localhost:3004/children/" + item.id
        );
        if (res.status === 200) {
          fetchList();
        }
      }
    };
    Modal.confirm({
      title: "你确认删除吗？",
      onOk: deleteMenuItem,
      okText: "确定",
      cancelText: "取消",
    });
  };
  return (
    <div>
      <Table
        dataSource={rightList}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default RightManager;
