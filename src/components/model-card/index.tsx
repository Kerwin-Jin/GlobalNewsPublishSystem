import { Checkbox, Image, Link } from "@arco-design/web-react";
import React from "react";

// import style from "./index.module.css";
import { IconSearch } from "@arco-design/web-react/icon";
import { IModel } from "../../data";
import style from "./index.module.less";

export type TResult = {
  code: number;
  value: boolean;
};

interface ModelCardProps {
  modelInfo: IModel;
  onSelect: (result: TResult) => void;
}
const ModelCard: React.FC<ModelCardProps> = (props) => {
  const { modelInfo, onSelect } = props;
  const { name, code, sex, height } = modelInfo;

  const handleChange = (value: boolean) => {
    onSelect && onSelect({ code, value });
  };

  const handleJump = () => {
    // todo:跳转
  };
  return (
    <div className={style.modelCardWrap}>
      <div className={style.photoSticker}>
        <div className={style.checkBox}>
          <Checkbox onChange={handleChange} />
        </div>
        <div>
          <Image src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp" />
        </div>
      </div>
      <div className={style.modelInfo}>
        <div className={style.more} onClick={handleJump}>
          <Link hoverable={false} icon={<IconSearch />} />
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
