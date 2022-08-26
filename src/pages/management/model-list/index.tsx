import { useEffect, useState } from "react";
import ModelCard, { TResult } from "../../../components/model-card";
import { IModel, modelList as data } from "../../../data";
import { Message } from "@arco-design/web-react";
import style from "./index.module.less";

const ModelList = () => {
  const [modelList, setModelList] = useState<IModel[]>([]);
  const [selectedList, setSelectedList] = useState<TResult[]>([]);

  const handleSelect = (res: TResult) => {
    Message.success(`${res.code}-${res.value}`);
    if (res.value) {
      setSelectedList([...selectedList, { code: res.code, value: res.value }]);
    } else {
      setSelectedList([
        ...selectedList.filter((item) => item.code !== res.code),
      ]);
    }
  };

  useEffect(() => {
    console.log(
      "%c 🍭 selectedList: ",
      "font-size:20px;background-color: #EA7E5C;color:#fff;",
      selectedList
    );
  }, [selectedList]);

  const fetchModelList = () => {
    setTimeout(() => {
      setModelList(data);
    }, 0);
  };

  const init = () => {
    fetchModelList();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={style.modelListWrap}>
      {modelList.map((item) => {
        return (
          <ModelCard key={item.code} modelInfo={item} onSelect={handleSelect} />
        );
      })}
    </div>
  );
};

export default ModelList;
