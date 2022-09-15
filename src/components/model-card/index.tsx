// import { Checkbox, Image, Link } from "@arco-design/web-react";
import React, { useState, useEffect } from "react";

// import style from "./index.module.css";
// import { IconSearch } from "@arco-design/web-react/icon";
import { IModel } from "../../data";
import style from "./index.module.less";
import TerminateImg from "../../assets/ternimate.svg";
import MaleImg from "../../assets/male.svg";
import FemaleImg from "../../assets/female.svg";
export type TResult = {
  code: number;
  value: boolean;
};

interface ModelCardProps {
  modelInfo: IModel;
  selectedList: any;
  onSelect: (result: TResult) => void;
}
const ModelCard: React.FC<ModelCardProps> = (props) => {
  const { modelInfo, onSelect, selectedList } = props;
  const { name, code, sex, height, termination, picture } = modelInfo;

  const handleChange = (value: boolean) => {
    onSelect && onSelect({ code, value });
  };

  // useEffect(() => {

  // }, [check]);

  const handleJump = () => {
    // todo:跳转
    console.log("跳转->" + code);
  };
  return (
    <div className={style.modelCardWrap}>
      <div className={style.photoSticker}>
        <div className={style.checkBox}>
          {/* <Checkbox
            onChange={handleChange}
            checked={selectedList.find((item: any) => item.code === code)}
          /> */}
        </div>
        {termination ? (
          <div className={style.mask}>
            <img src={TerminateImg} alt="" />
          </div>
        ) : null}
        <div>{/* <Image src={picture} /> */}</div>
      </div>
      <div className={style.modelInfo}>
        <div className={style.more} onClick={handleJump}>
          {/* <Link
            hoverable={false}
            icon={
              <img
                src={sex === 1 ? MaleImg : FemaleImg}
                alt={sex === 1 ? "男" : "女"}
              />
            }
          /> */}
        </div>
        <div className={style.infoTitle}>{name}</div>
        <div>模特编码: {code}</div>
        <div>性别: {sex}</div>
        <div>身高(cm): {(Number(height) / 10).toFixed(1)}</div>
        <div>胸围(cm): 66</div>
        <div>腰围(cm): 61</div>
        <div>臀围(cm): 90</div>
        <div>风格: 走秀风格</div>
      </div>
    </div>
  );
};

export default ModelCard;
