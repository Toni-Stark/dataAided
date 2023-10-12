import { DomDataSheet } from '../config';
import { stylesContextTwo } from '@/pages/content/component/styleSheet';
import { updateStepData } from '@/pages/content/messageStore';
import { createDom, queryEle } from '@/pages/content/tools';
import {
  FILING_DATA,
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

export const RegUrlConfig = (local: any) => {
  let reg = '^/[a-zA-Z0-9_-]*/';
  let regVal = local.pathname.match(reg);
  let path = local.host + (regVal ? regVal[0] : '');
  let list = [
    '58',
    '5i5j',
    'zu.anjuke',
    'anjuke',
    'baixing',
    'zhipin',
    'che168',
    'ichong123',
    'ziroom',
    'taobao',
    'tmall',
    '116.177.253',
  ];
  let res: number = 0;
  list.find((item) => {
    res = path.indexOf(item);
    if (res >= 0) {
      return item;
    } else {
      return null;
    }
  });
  return path.slice(res);
};

export const createContentView = () => {
  createContentStyle(stylesContextTwo);
  let dom: any = queryEle('body');
  let floatView = queryEle('.floatView');
  if (floatView) floatView.remove();
  floatView = createDom({ tag: 'div', cla: 'floatView' });
  dom.appendChild(floatView);
  CreateDataModal();

  if (DomDataSheet.hasOwnProperty(RegUrlConfig(document.location))) {
    DomDataSheet[RegUrlConfig(document.location)]();
  }
};

const CreateDataModal = () => {
  let floatView = queryEle('.floatView');

  let FirstStepModal: any = queryEle('.floatView>.FirstStepModal');
  FirstStepModal?.remove();
  FirstStepModal = createDom({ tag: 'div', cla: 'FirstStepModal', txt: '第一步' });
  floatView?.appendChild(FirstStepModal);
  FirstStepModal.addEventListener('click', () => {
    updateStepData(FILING_DATA, SET_FIRST_STEP_DATA);
  });

  let SecondStepModal: any = queryEle('.floatView>.SecondStepModal');
  SecondStepModal?.remove();
  SecondStepModal = createDom({ tag: 'div', cla: 'SecondStepModal', txt: '第二步' });
  floatView?.appendChild(SecondStepModal);
  SecondStepModal.addEventListener('click', () => {
    updateStepData(FILING_DATA, SET_SECOND_STEP_DATA);
  });

  let FinalModal: any = queryEle('.floatView>.FinalModal');
  FinalModal?.remove();
  FinalModal = createDom({ tag: 'div', cla: 'FinalModal', txt: '第三步' });
  floatView?.appendChild(FinalModal);
  FinalModal.addEventListener('click', () => {
    updateStepData(FILING_DATA, SET_FINAL_STEP_DATA);
  });
};

// const createDataInfo = () => {
//   let params: any = getHostDataParams(document.location);
//   copyInfoToServices(params);
// };
