// 云网备案工具
import { stylesContextTwo } from '@/pages/content/component/styleSheet';
import { updateStepData, updateStepDataIndex } from '@/pages/content/messageStore';
import { createDom, queryEle } from '@/pages/content/tools';
import {
  NEW_VERSION_FILING_DATA,
  OLD_VERSION_FILING_DATA,
  SET_FINAL_OLD_DATA,
  SET_FINAL_OLD_DATA_SECOND,
  SET_FINAL_OLD_MAIN_FILE,
  SET_FINAL_OLD_WEB_FILE,
  SET_FINAL_STEP_DATA,
  SET_FIRST_STEP_DATA,
  SET_SECOND_STEP_DATA,
} from '@/common/agreement';
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
  let list = ['116.177.253.34:8088', '61.136.101.51:8443'];
  let res = -1;
  list.find((item, index) => {
    if (local.host?.indexOf(item) !== -1) {
      res = index;
    }
  });
  return res;
};
// 创建第一步按钮
export const createContentView = (data: any) => {
  let idx = RegUrlConfig(document.location);
  let dom: any = queryEle('body');
  createContentStyle(stylesContextTwo);
  if (idx === 0) {
    CreateDataModal(dom);
    CreateStepTwoDataStep(data.web_site);
    CreateStepThreeDataStep();
  }
  if (idx === 1) {
    CreateOldModal(dom);
    CreateOldFileList(dom);
    CreateWebDataModal(data);
    CreateOldDataList(data);
  }
};
export const CreateOldModal = (dom: any) => {
  let oldView = queryEle('.oldView');
  if (oldView) oldView.remove();
  oldView = createDom({ tag: 'div', cla: 'oldView' });
  dom.appendChild(oldView);
  let NewTitle = createDom({ tag: 'div', cla: 'NewTitle', txt: '旧版本' });
  oldView?.appendChild(NewTitle);

  let firstModal: any = queryEle('.oldView>.OldViewModal');
  firstModal?.remove();
  firstModal = createDom({ tag: 'div', cla: 'OldViewModal', txt: '第一步' });
  oldView?.appendChild(firstModal);
  firstModal.addEventListener('click', () => {
    updateStepData(OLD_VERSION_FILING_DATA, SET_FINAL_OLD_DATA);
  });
};
// 创建第二步按钮
export const CreateStepTwoDataStep = (data: any) => {
  let stepTwoView = queryEle('.floatView');
  let AddModal: any = queryEle('.floatView>.AddModal');
  AddModal?.remove();
  AddModal = createDom({ tag: 'div', cla: 'AddModal' });
  for (let i = 0; i <= data.length - 1; i++) {
    let Modal: any = createDom({ tag: 'div', cla: 'OldViewModal', txt: '网站' + (i + 1) });
    Modal.addEventListener('click', () => {
      updateStepDataIndex(NEW_VERSION_FILING_DATA, SET_SECOND_STEP_DATA, i);
    });
    AddModal.appendChild(Modal);
  }
  stepTwoView?.appendChild(AddModal);
};
// 创建第三步按钮
export const CreateStepThreeDataStep = () => {
  let FinalModal: any = queryEle('.floatView>.FinalModal');
  FinalModal?.remove();
  let floatView = queryEle('.floatView');
  FinalModal = createDom({ tag: 'div', cla: 'FinalModal', txt: '第三步' });
  floatView?.appendChild(FinalModal);
  FinalModal.addEventListener('click', () => {
    updateStepData(NEW_VERSION_FILING_DATA, SET_FINAL_STEP_DATA);
  });
};
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
  let NewTitle = createDom({ tag: 'div', cla: 'NewTitle', txt: '新版本' });
  floatView?.appendChild(NewTitle);

  let FirstStepModal: any = queryEle('.floatView>.FirstStepModal');
  FirstStepModal?.remove();
  FirstStepModal = createDom({ tag: 'div', cla: 'FirstStepModal', txt: '第一步' });
  floatView?.appendChild(FirstStepModal);
  FirstStepModal.addEventListener('click', () => {
    updateStepData(NEW_VERSION_FILING_DATA, SET_FIRST_STEP_DATA);
  });
};
