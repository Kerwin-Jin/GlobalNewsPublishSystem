export interface IModel {
  code: number;
  name: string;
  sex: string;
  height: number;
}
export interface IStateTree {
  id: string;
  name: string;
  code?: string;
  children?: IStateTree[];
}

export interface IGroup {
  id: string;
  name: string;
  code: string;
}

export const stateTree: IStateTree[] = [
  {
    id: "GRADING",
    name: "放码中",
    children: [
      {
        id: "WAIT_FOR_PATTERN_UPDATE_G",
        name: "待纸样修改",
        code: "",
      },
      {
        id: "WAIT_FOR_GRAD",
        name: "待放码",
        code: "",
      },
      {
        id: "GRAD_EXCEPTION",
        name: "放码异常",
        code: "",
      },
    ],
  },
  {
    id: "WAIT_FOR_PATTERN_AFFIRM",
    name: "待版师确认",
    children: [],
  },
  {
    id: "PROCESSING",
    name: "工艺制单中",
    children: [
      {
        id: "WAIT_FOR_WRITE_REVIEW_RESULT",
        name: "待审版修改",
        code: "",
      },
      {
        id: "WAIT_FOR_PROCESS",
        name: "待工艺制单",
        code: "",
      },
      {
        id: "PROCESS_EXCEPTION",
        name: "工艺制单异常",
        code: "",
      },
    ],
  },
  {
    id: "FINISHED",
    name: "已完成",
    children: [],
  },
  {
    id: "PATTERNING_OUT_M_P",
    name: "打版中（纸物缩裁车）",
    children: [
      {
        id: "WAIT_FOR_SIGN_FOR_OUT_P",
        name: "待签收",
        code: "",
      },
      {
        id: "SIGN_FOR_EXCEPTION_OUT_P",
        name: "签收异常",
        code: "",
      },
      {
        id: "PATTERNING_OUT_M_P_S",
        name: "打版中",
        code: "",
      },
      {
        id: "WAIT_FOR_INFORMATION",
        name: "待信息维护",
        code: "",
      },
      {
        id: "PATTERN_EXCEPTION_OUT_P",
        name: "打版异常",
        code: "",
      },
      {
        id: "WAIT_FOR_UPLOAD_PAPER_PATTERN_M_P",
        name: "待完善信息",
        code: "",
      },
    ],
  },
  {
    id: "PATTERNING_OUT_SE",
    name: "打版中（车）",
    children: [
      {
        id: "WAIT_FOR_SIGN_FOR_OUT_SE",
        name: "待签收",
        code: "",
      },
      {
        id: "SIGN_FOR_EXCEPTION_OUT_SE",
        name: "签收异常",
        code: "",
      },
      {
        id: "PATTERNING_OUT_SE",
        name: "打版中",
        code: "",
      },
      {
        id: "PATTERN_EXCEPTION_OUT_SE",
        name: "打版异常",
        code: "",
      },
    ],
  },
  {
    id: "REVIEWING",
    name: "审版中",
    children: [
      {
        id: "WAIT_FOR_SEWING_UPDATE_R",
        name: "待车版修改",
        code: "",
      },
      {
        id: "SEWING_UPDATEING",
        name: "车版修改中",
        code: "",
      },
      {
        id: "SEWING_UPDATE_EXCEPTION",
        name: "车版修改异常",
        code: "",
      },
      {
        id: "WAIT_FOR_PATTERN_UPDATE_R",
        name: "待纸样修改",
        code: "",
      },
      {
        id: "WAIT_FOR_PATTERN_UPDATE_R_P",
        name: "待纸样修改",
        code: "",
      },
      {
        id: "REVIEWING_S",
        name: "审版中",
        code: "",
      },
      {
        id: "WAIT_FOR_CONFIRM_R",
        name: "待返修确认",
        code: "",
      },
      {
        id: "SEWING_UPDATEING_OUT",
        name: "外协修改中",
        code: "",
      },
      {
        id: "WAIT_FOR_SIGN_FOR_REVIEW",
        name: "待签收",
        code: "",
      },
      {
        id: "SIGN_FOR_EXCEPTION_REVIEW",
        name: "签收异常",
        code: "",
      },
      {
        id: "WAIT_FOR_START_REVIEW",
        name: "待开始审版",
        code: "",
      },
    ],
  },
  {
    id: "COMPLETEING",
    name: "齐套中",
    children: [
      {
        id: "MATERIAL_COMPLETEING",
        name: "调料中",
        code: "",
      },
      {
        id: "MATERIAL_EXCEPTION",
        name: "调料异常",
        code: "",
      },
      {
        id: "WAIT_FOR_LEADER_ALLOC",
        name: "待组长分配",
        code: "",
      },
      {
        id: "ALLOC_PAPER_PATTERN_EXCEPTION",
        name: "分配异常",
        code: "",
      },
      {
        id: "WAIT_FOR_INFORMATION",
        name: "待信息维护",
        code: "",
      },
      {
        id: "ALLOC_COMPLETE",
        name: "待齐套",
        code: "",
      },
      {
        id: "ALLOC_UPLOAD_THE_PATTERN",
        name: "待上传纸样",
        code: "",
      },
      {
        id: "WAIT_FOR_BOM_COMFIRM",
        name: "待确认BOM",
        code: "",
      },
      {
        id: "WAIT_FOR_MATERIAL_SIGN_FOR",
        name: "待签收物料",
        code: "",
      },
      {
        id: "WAIT_FOR_INFORMATION_M",
        name: "待信息维护",
        code: "",
      },
      {
        id: "WAIT_FOR_PATTERN_SIGN_FOR",
        name: "待纸样签收",
        code: "",
      },
      {
        id: "SIGN_FOR_EXCEPTION_C",
        name: "签收异常",
        code: "",
      },
      {
        id: "WAIT_FOR_ALLOC_CHANNEL_COMFIRM",
        name: "待分配确认",
        code: "",
      },
    ],
  },
  {
    id: "END_PROD_SED_PROC_ING",
    name: "成品二次工艺中",
    children: [
      {
        id: "WAIT_FOR_SIGN_FOR_SAMPLE",
        name: "待签收样衣",
        code: "",
      },
      {
        id: "WAIT_FOR_INFORMATION_EP",
        name: "待信息维护",
        code: "",
      },
      {
        id: "PROCESS_EXCEPTION_END",
        name: "加工异常",
        code: "",
      },
      {
        id: "WAIT_FOR_SED_PROC_UPDATE_S",
        name: "待二次工艺修改",
        code: "",
      },
      {
        id: "WAIT_FOR_ALLOC_SUPPLIER_E",
        name: "待分配加工厂",
        code: "",
      },
      {
        id: "ALLOC_END_EXCEPTION",
        name: "分配异常",
        code: "",
      },
      {
        id: "WAIT_FOR_INFORMATION_EA",
        name: "待信息维护",
        code: "",
      },
      {
        id: "SIGN_FOR_END_SED_PROC",
        name: "待签收",
        code: "",
      },
      {
        id: "WAIT_FOR_SIGN_FOR_OUT_E",
        name: "签收异常",
        code: "",
      },
      {
        id: "WAIT_FOR_PATTERN_CONFIRM_E",
        name: "待纸样确认",
        code: "",
      },
    ],
  },
  {
    id: "PATTERNING_OUT_M",
    name: "打版中（纸缩裁车）",
    children: [
      {
        id: "WAIT_FOR_SIGN_FOR_OUT_M",
        name: "待签收",
        code: "",
      },
      {
        id: "SIGN_FOR_EXCEPTION_OUT_M",
        name: "签收异常",
        code: "",
      },
      {
        id: "WAIT_FOR_MATERIAL_SIGN_FOR_OUT_M",
        name: "待签收物料",
        code: "",
      },
      {
        id: "WAIT_FOR_MATERIAL_SIGN_FOR",
        name: "待签收物料",
        code: "",
      },
      {
        id: "WAIT_FOR_INFORMATION_M",
        name: "待信息维护",
        code: "",
      },
      {
        id: "PATTERNING_OUT_M_S",
        name: "打版中",
        code: "",
      },
      {
        id: "WAIT_FOR_INFORMATION",
        name: "待信息维护",
        code: "",
      },
      {
        id: "PATTERN_EXCEPTION_OUT_M",
        name: "打版异常",
        code: "",
      },
      {
        id: "WAIT_FOR_UPLOAD_PAPER_PATTERN_M",
        name: "待完善信息",
        code: "",
      },
    ],
  },
  {
    id: "PATTERNING_OUT_M_S",
    name: "打版中（缩裁车）",
    children: [
      {
        id: "WAIT_FOR_SIGN_FOR_OUT_S",
        name: "待签收",
        code: "",
      },
      {
        id: "SIGN_FOR_EXCEPTION_OUT_S",
        name: "签收异常",
        code: "",
      },
      {
        id: "PATTERNING_OUT_M_S_S",
        name: "打版中",
        code: "",
      },
      {
        id: "PATTERN_EXCEPTION_OUT_S",
        name: "打版异常",
        code: "",
      },
      {
        id: "MATERIAL_EXCEPTION_C",
        name: "非纸样问题异常",
        code: "",
      },
    ],
  },
  {
    id: "SEWING",
    name: "车版中",
    children: [
      {
        id: "WAIT_FOR_SEWING",
        name: "待车版",
        code: "",
      },
      {
        id: "SIGN_FOR_EXCEPTION_SEWING",
        name: "签收异常",
        code: "",
      },
      {
        id: "SEWING_S",
        name: "车版中",
        code: "",
      },
      {
        id: "MATERIAL_EXCEPTION_S",
        name: "车版异常",
        code: "",
      },
      {
        id: "WAIT_FOR_PATTERN_UPDATE_S",
        name: "待纸样修改",
        code: "",
      },
      {
        id: "WAIT_FOR_PATTERN_CONFIRM_S",
        name: "待纸样确认",
        code: "",
      },
    ],
  },
  {
    id: "SHRINKING",
    name: "缩水中",
    children: [
      {
        id: "WAIT_FOR_SHRINK_SIGN_FOR",
        name: "待签收",
        code: "",
      },
      {
        id: "SIGN_FOR_EXCEPTION_S",
        name: "签收异常",
        code: "",
      },
      {
        id: "WAIT_FOR_SHRINK",
        name: "待缩水",
        code: "",
      },
      {
        id: "SHRINKING_S",
        name: "缩水中",
        code: "",
      },
      {
        id: "SHRINKING_EXCEPTION_S",
        name: "缩水异常",
        code: "",
      },
    ],
  },
  {
    id: "CROPING",
    name: "裁版中",
    children: [
      {
        id: "WAIT_FOR_PATTERN_UPDATE_C",
        name: "待纸样修改",
        code: "",
      },
      {
        id: "WAIT_FOR_CROP",
        name: "待裁版",
        code: "",
      },
      {
        id: "SIGN_FOR_EXCEPTION_CROP",
        name: "签收异常",
        code: "",
      },
      {
        id: "CROPING_S",
        name: "裁版中",
        code: "",
      },
      {
        id: "MATERIAL_EXCEPTION_C",
        name: "非纸样问题异常",
        code: "",
      },
    ],
  },
  {
    id: "WAIT_FOR_ALLOC_CHANNEL",
    name: "待分配渠道",
    children: [
      {
        id: "WAIT_FOR_ALLOC_CHANNEL_S",
        name: "待分配渠道",
        code: "",
      },
      {
        id: "ALLOC_CHANNEL_EXCEPTION",
        name: "分配异常",
        code: "",
      },
    ],
  },
  {
    id: "CROP_SED_PROC_ING",
    name: "裁片二次工艺中",
    children: [
      {
        id: "WAIT_FOR_ALLOC_SUPPLIER_C",
        name: "待分配加工厂",
        code: "",
      },
      {
        id: "WAIT_FOR_INFORMATION_CA",
        name: "待信息维护",
        code: "",
      },
      {
        id: "ALLOC_CROP_EXCEPTION",
        name: "分配异常",
        code: "",
      },
      {
        id: "SIGN_FOR_CROP_SED_PROC",
        name: "待签收",
        code: "",
      },
      {
        id: "WAIT_FOR_SIGN_FOR_OUT_C",
        name: "签收异常",
        code: "",
      },
      {
        id: "WAIT_FOR_SIGN_FOR_CROP",
        name: "待签收裁片",
        code: "",
      },
      {
        id: "WAIT_FOR_INFORMATION_CP",
        name: "待信息维护",
        code: "",
      },
      {
        id: "PROCESS_EXCEPTION_CROP",
        name: "加工异常",
        code: "",
      },
    ],
  },
  {
    id: "INSPECTING",
    name: "稽查中",
    children: [
      {
        id: "WAIT_FOR_PATTERN_UPDATE_I",
        name: "待纸样修改",
        code: "",
      },
      {
        id: "WAIT_FOR_PROCESS_UPDATE_I_1",
        name: "待工艺修改",
        code: "",
      },
      {
        id: "WAIT_FOR_GRAD_UPDATE_I_1",
        name: "待放码修改",
        code: "",
      },
      {
        id: "WAIT_FOR_INSPECT",
        name: "待稽查",
        code: "",
      },
      {
        id: "WAIT_FOR_CONFIRM_I",
        name: "待确认",
        code: "",
      },
    ],
  },
  {
    id: "CANCELED",
    name: "已取消",
    children: [],
  },
];

export const groupList: IGroup[] = [
  {
    id: "2981927615",
    name: "跟单组",
    code: "",
  },
  {
    id: "2981927535",
    name: "理单组",
    code: "",
  },
  {
    id: "2981927534",
    name: "纸样组",
    code: "",
  },
];

export const modelList: Array<IModel> = [
  {
    code: 1001,
    name: "Ariana Grande",
    sex: "女",
    height: 1780,
  },
  {
    code: 1002,
    name: "Nana",
    sex: "女",
    height: 1880,
  },
  {
    code: 1003,
    name: "Julier",
    sex: "女",
    height: 1683,
  },

  {
    code: 1004,
    name: "Crystal",
    sex: "女",
    height: 1724,
  },

  {
    code: 1005,
    name: "Seline",
    sex: "女",
    height: 1802,
  },
];
