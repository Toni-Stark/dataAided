// 云网备案工具
import { stylesContextTwo } from '@/pages/content/component/styleSheet';
import { updateStepData, updateStepDataIndex } from '@/pages/content/messageStore';
import { createDom, queryEle } from '@/pages/content/tools';
import {
  ALI_MAIN_DATA,
  ALI_VERSION_DATA,
  ALI_WEB_DATA_FIRST,
  ALI_WEB_DATA_THIRD,
  CLOUD_DATA_CONTROL,
  CLOUD_MAIN_DATA,
  NEW_VERSION_FILING_DATA,
  OLD_VERSION_FILING_DATA,
  POLICE_INFO_MAIN_DATA,
  POLICE_INFO_MINI_DATA,
  POLICE_MAIN_DATA,
  POLICE_VERSION_DATA,
  POLICE_WEB_DATA,
  SET_FINAL_OLD_DATA,
  SET_FINAL_OLD_DATA_SECOND,
  SET_FINAL_OLD_MAIN_FILE,
  SET_FINAL_OLD_WEB_FILE,
  SET_FINAL_STEP_DATA,
  SET_FIRST_STEP_DATA,
  SET_SECOND_STEP_DATA,
  TX_VERSION_DATA,
  TX_WEB_DATA,
  TX_WEB_START_DATA,
} from '@/common/agreement';
import {
  recordedFileData,
  recordedMainData,
  recordedWebData,
} from '@/pages/content/component/RecyclingDataTool';
// 设置css;
export const createContentStyle = (css: string) => {
  let style: any = document.createElement('style');
  style.type = 'text/css';
  try {
    style.appendChild(document.createTextNode(css));
  } catch (ex) {
    style.styleSheet.cssText = css;
  }
  let head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
};
// 筛选工信备案域名
export const RegUrlConfig = (local: any) => {
  let list = [
    '116.177.253.34:8088',
    '61.136.101.51:8443',
    'beian.mps.gov.cn',
    'beian.aliyun.com',
    'console.cloud.tencent.com',
  ];
  let res = -1;
  list.find((item, index) => {
    if (local.host?.indexOf(item) !== -1) {
      res = index;
    }
  });
  return res;
};
// 云网版本数据填写
export const createContentView = (data: any) => {
  let idx = RegUrlConfig(document.location);
  let dom: any = queryEle('body');
  createContentStyle(stylesContextTwo);
  if (idx === 0) {
    CreateDataModal(dom);
    CreateStepTwoDataStep(data.web_site);
    CreateStepThreeDataStep(data.web_site);
    // 收集数据;
    CreateAddDataIdx(dom);
  }
  if (idx === 1) {
    CreateOldModal(dom);
    CreateOldFileList(dom);
    CreateWebDataModal(data);
    CreateOldDataList(data);
  }
  if (idx === 2) {
    CreatePoliceModal(dom, data);
  }
  if (idx === 3) {
    CreateAliModal(dom, data);
  }
  if (idx === 4) {
    CreateTXModal(dom, data);
  }
};
export const CreateOldModal = (dom: any) => {
  let oldView = queryEle('.oldView');
  if (oldView) oldView.remove();
  oldView = createDom({ tag: 'div', cla: 'oldView' });
  dom.appendChild(oldView);
  let NewTitle = createDom({ tag: 'div', cla: 'NewTitle', txt: '新众一' });
  oldView?.appendChild(NewTitle);

  let firstModal: any = queryEle('.oldView>.OldViewModal');
  firstModal?.remove();
  firstModal = createDom({ tag: 'div', cla: 'OldViewModal', txt: '第一步' });
  oldView?.appendChild(firstModal);
  firstModal.addEventListener('click', () => {
    updateStepData(OLD_VERSION_FILING_DATA, SET_FINAL_OLD_DATA);
  });
};
export const CreateStepTwoDataStep = (data: any) => {
  let stepTwoView = queryEle('.floatView');
  let AddModal: any = queryEle('.floatView>.AddModal');
  AddModal?.remove();
  AddModal = createDom({ tag: 'div', cla: 'AddModal' });
  if (data?.length) {
    for (let i = 0; i <= data.length - 1; i++) {
      let Modal: any = createDom({ tag: 'div', cla: 'OldViewModal', txt: '网站' + (i + 1) });
      Modal.addEventListener('click', () => {
        updateStepDataIndex(NEW_VERSION_FILING_DATA, SET_SECOND_STEP_DATA, i);
      });
      AddModal.appendChild(Modal);
    }
  }
  stepTwoView?.appendChild(AddModal);
};
export const CreateStepThreeDataStep = (data: any) => {
  let stepTwoView = queryEle('.floatView');
  let FiModal: any = queryEle('.floatView>.FiModal');
  FiModal?.remove();
  FiModal = createDom({ tag: 'div', cla: 'FiModal' });
  if (data?.length) {
    for (let i = 0; i <= data.length - 1; i++) {
      let FinalModal = createDom({ tag: 'div', cla: 'FinalModal', txt: '核验单' + (i + 1) });
      FinalModal.addEventListener('click', () => {
        updateStepData(NEW_VERSION_FILING_DATA, SET_FINAL_STEP_DATA, i);
      });
      FiModal?.appendChild(FinalModal);
    }
  }
  stepTwoView?.appendChild(FiModal);
};
// 老网站版本数据填写
export const CreateOldDataList = (data: any) => {
  let oldView = queryEle('.oldView');
  const { web_site } = data;
  let AddModal: any = queryEle('.oldView>.AddModal');
  AddModal?.remove();
  AddModal = createDom({ tag: 'div', cla: 'AddModal' });
  for (let i = 0; i <= web_site.length - 1; i++) {
    let Modal: any = createDom({ tag: 'div', cla: 'OldViewModal', txt: '网站' + (i + 1) });
    Modal.addEventListener('click', () => {
      updateStepDataIndex(OLD_VERSION_FILING_DATA, SET_FINAL_OLD_DATA_SECOND, i);
    });
    AddModal.appendChild(Modal);
  }
  oldView?.appendChild(AddModal);
};
export const CreateOldFileList = (dom: any) => {
  let oldFileView = queryEle('.oldFileView');
  if (oldFileView) oldFileView.remove();
  oldFileView = createDom({ tag: 'div', cla: 'oldFileView' });
  dom.appendChild(oldFileView);
  let NewTitle = createDom({ tag: 'div', cla: 'NewTitle', txt: '旧版本附件' });
  oldFileView?.appendChild(NewTitle);

  let AddModal: any = queryEle('.oldFileView>.AddModal');
  AddModal?.remove();
  AddModal = createDom({ tag: 'div', cla: 'AddModal' });
  let Modal: any = createDom({ tag: 'div', cla: 'OldViewModal', txt: '主体材料' });
  Modal.addEventListener('click', () => {
    updateStepData(OLD_VERSION_FILING_DATA, SET_FINAL_OLD_MAIN_FILE);
  });
  AddModal.appendChild(Modal);
  oldFileView?.appendChild(AddModal);
};
export const CreateWebDataModal = (data: any) => {
  const { web_site } = data;
  setTimeout(() => {
    let oldFileView = queryEle('.oldFileView');
    let WebModal: any = queryEle('.oldFileView>.WebModal');
    WebModal?.remove();
    WebModal = createDom({ tag: 'div', cla: 'WebModal' });
    oldFileView?.appendChild(WebModal);
    for (let i = 0; i < web_site?.length; i++) {
      let Modal: any = createDom({ tag: 'div', cla: 'OldViewModal', txt: '网站' + (i + 1) });
      Modal.addEventListener('click', () => {
        updateStepDataIndex(OLD_VERSION_FILING_DATA, SET_FINAL_OLD_WEB_FILE, i);
      });
      WebModal.appendChild(Modal);
    }
  }, 300);
};
export const CreateDataModal = (dom: any) => {
  let floatView = queryEle('.floatView');
  if (floatView) floatView.remove();
  floatView = createDom({ tag: 'div', cla: 'floatView' });
  dom.appendChild(floatView);
  let NewTitle = createDom({ tag: 'div', cla: 'NewTitle', txt: '云网' });
  floatView?.appendChild(NewTitle);

  let FirstStepModal: any = queryEle('.floatView>.FirstStepModal');
  FirstStepModal?.remove();
  FirstStepModal = createDom({ tag: 'div', cla: 'FirstStepModal', txt: '第一步' });
  floatView?.appendChild(FirstStepModal);
  FirstStepModal.addEventListener('click', () => {
    updateStepData(NEW_VERSION_FILING_DATA, SET_FIRST_STEP_DATA);
  });
};

export const CreateAddDataIdx = (dom: any) => {
  let modalView = queryEle('.modalView');
  if (modalView) modalView.remove();
  modalView = createDom({ tag: 'div', cla: 'modalView leftModal' });
  dom.appendChild(modalView);
  let NewTitle = createDom({ tag: 'div', cla: 'NewTitle', txt: '云网' });
  modalView?.appendChild(NewTitle);

  let FirstStepModal: any = queryEle('.modalView>.FirstStepModal');
  FirstStepModal?.remove();
  FirstStepModal = createDom({ tag: 'div', cla: 'FirstStepModal', txt: '收集' });
  modalView?.appendChild(FirstStepModal);
  FirstStepModal.addEventListener('click', () => {
    // updateStepData(CLOUD_DATA_CONTROL, CLOUD_MAIN_DATA);
    recordedFileData();
  });
};
// 阿里云备案数据填写
export const CreateAliModal = (dom: any, data: any) => {
  let floatView = queryEle('.floatView');
  if (floatView) floatView.remove();
  floatView = createDom({ tag: 'div', cla: 'floatView' });
  dom.appendChild(floatView);
  let NewTitle = createDom({ tag: 'div', cla: 'NewTitle', txt: '阿里备案' });
  floatView?.appendChild(NewTitle);
  if (data?.web_site?.length > 0) {
    for (let i = 0; i < data.web_site.length; i++) {
      let WebStepModal = createDom({ tag: 'div', cla: 'FinalModal', txt: '域名' + (i + 1) });
      floatView?.appendChild(WebStepModal);
      WebStepModal.addEventListener('click', () => {
        updateStepData(ALI_VERSION_DATA, ALI_WEB_DATA_FIRST, i);
      });
    }
  }
  let FirstStepModal: any = queryEle('.floatView>.FirstStepModal');
  FirstStepModal?.remove();
  FirstStepModal = createDom({ tag: 'div', cla: 'FirstStepModal', txt: '主办信息' });
  floatView?.appendChild(FirstStepModal);
  FirstStepModal.addEventListener('click', () => {
    updateStepData(ALI_VERSION_DATA, ALI_MAIN_DATA);
  });
  if (data?.web_site?.length > 0) {
    for (let i = 0; i < data.web_site.length; i++) {
      let WebStepModal = createDom({ tag: 'div', cla: 'FinalModal', txt: '网站' + (i + 1) });
      floatView?.appendChild(WebStepModal);
      WebStepModal.addEventListener('click', () => {
        updateStepData(ALI_VERSION_DATA, ALI_WEB_DATA_THIRD, i);
      });
    }
  }
};
// 腾讯云备案数据填写
export const CreateTXModal = (dom: any, data: any) => {
  let floatView = queryEle('.floatView');
  if (floatView) floatView.remove();
  floatView = createDom({ tag: 'div', cla: 'floatView' });
  dom.appendChild(floatView);
  let NewTitle = createDom({ tag: 'div', cla: 'NewTitle', txt: '腾讯备案' });
  floatView?.appendChild(NewTitle);
  for (let i = 0; i < data.web_site.length; i++) {
    let WebStepModal = createDom({ tag: 'div', cla: 'FinalModal', txt: '备案' + (i + 1) });
    floatView?.appendChild(WebStepModal);
    WebStepModal.addEventListener('click', () => {
      updateStepData(TX_VERSION_DATA, TX_WEB_START_DATA, i);
    });
  }
  for (let i = 0; i < data.web_site.length; i++) {
    let WebStepModal = createDom({ tag: 'div', cla: 'FinalModal', txt: '网站' + (i + 1) });
    floatView?.appendChild(WebStepModal);
    WebStepModal.addEventListener('click', () => {
      updateStepData(TX_VERSION_DATA, TX_WEB_DATA, i);
    });
  }
};
// 公安版本数据填写
export const CreatePoliceModal = (dom: any, data: any) => {
  let floatView = queryEle('.floatView');
  if (floatView) floatView.remove();
  floatView = createDom({ tag: 'div', cla: 'floatView' });
  dom.appendChild(floatView);
  let NewTitle = createDom({ tag: 'div', cla: 'NewTitle', txt: '公安版本' });
  floatView?.appendChild(NewTitle);

  let FirstStepModal: any = queryEle('.floatView>.FirstStepModal');
  FirstStepModal?.remove();
  FirstStepModal = createDom({ tag: 'div', cla: 'FirstStepModal', txt: '主体数据' });
  floatView?.appendChild(FirstStepModal);
  FirstStepModal.addEventListener('click', () => {
    updateStepData(POLICE_VERSION_DATA, POLICE_MAIN_DATA);
  });

  for (let i = 0; i < data.web_site.length; i++) {
    let WebStepModal = createDom({ tag: 'div', cla: 'FinalModal', txt: '网站' + (i + 1) });
    floatView?.appendChild(WebStepModal);
    WebStepModal.addEventListener('click', () => {
      updateStepData(POLICE_VERSION_DATA, POLICE_WEB_DATA, i);
    });
  }
  for (let i = 0; i < data.web_site.length; i++) {
    let WebStepModal = createDom({ tag: 'div', cla: 'FinalModal', txt: '资源' + (i + 1) });
    floatView?.appendChild(WebStepModal);
    WebStepModal.addEventListener('click', () => {
      updateStepData(POLICE_VERSION_DATA, POLICE_INFO_MAIN_DATA, i);
    });
  }
  for (let i = 0; i < data.web_site.length; i++) {
    let WebStepModal = createDom({ tag: 'div', cla: 'FinalModal', txt: '小程序' + (i + 1) });
    floatView?.appendChild(WebStepModal);
    WebStepModal.addEventListener('click', () => {
      updateStepData(POLICE_VERSION_DATA, POLICE_INFO_MINI_DATA, i);
    });
  }
};
