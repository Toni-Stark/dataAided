import {
  ASK_CATE_TO_SERVICES,
  COPY_INFO_TO_SERVICES,
  EDI,
  GET_FILES_ADDRESS,
  SCREENSHOT_SHORTCUT,
  SETTING_INDEX_EDI_SERVICES,
  SETTING_INDEX_ICP_SERVICES,
  SETTING_LISTENER_SCREEN,
  UPLOAD_IMG_FILES,
  WAKE_FILE_SELECTION,
} from '@/common/agreement';
import { InfoType } from '@/pages/types';

export const copyInfoToServices = (info: any) => {
  chrome.runtime.sendMessage({ ...info, type: COPY_INFO_TO_SERVICES }).then((res) => {
    console.log('info-res------------------>');
    console.log(res);
    console.log('info-res------------------>');
  });
};
export const AskServicesEdiTYPE = () => {
  chrome.runtime.sendMessage({ type: ASK_CATE_TO_SERVICES }).then((res) => {
    console.log('info-res------------------>');
    console.log(res);
    console.log('info-res------------------>');
  });
};
export const sendMessageSetIndex = ({ key, addText, type, listData }: any) => {
  let val = SETTING_INDEX_ICP_SERVICES;
  if (type === EDI) {
    val = SETTING_INDEX_EDI_SERVICES;
  }

  chrome.runtime.sendMessage({ type: val, cate: key, address: addText, listData }).then((res) => {
    console.log('info-res------------------>');
    console.log(res);
    console.log('info-res------------------>');
  });
};
export const sendMessageStoreIndex = ({ key, cate, type }: any) => {
  chrome.runtime.sendMessage({ type, key, cate }).then((res) => {
    console.log('info-res------------------>');
    console.log(res);
    console.log('info-res------------------>');
  });
};
// 截取当前屏幕
export const sendMessageScreenIndex = () => {
  chrome.runtime.sendMessage({ type: SCREENSHOT_SHORTCUT }).then((res) => {
    console.log('info-res------------------>');
    console.log(res);
    console.log('info-res------------------>');
  });
};

// 唤醒文件选择
export const wakeFileSelection = () => {
  chrome.runtime.sendMessage({ type: WAKE_FILE_SELECTION }).then((res) => {
    console.log('info-res------------------>');
    console.log(res);
    console.log('info-res------------------>');
  });
};

// 截取当前屏幕
export const sendFilesForServices = (files: any, blob: any, callback: (e: any) => void) => {
  chrome.runtime.sendMessage({ type: UPLOAD_IMG_FILES, files, blob }).then((res) => {
    callback(res);
  });
};

// 修改当前数据的地址
export const changeInfoServices = (type: string, params?: Partial<InfoType>) => {
  chrome.runtime.sendMessage({ type, params }).then((res) => {
    console.log('info-res------------------>');
    console.log(res);
    console.log('info-res------------------>');
  });
};

// 修改当前数据的地址
export const updateStepData = (type: string, step: string) => {
  chrome.runtime.sendMessage({ type, step }).then((res) => {
    console.log('info-res------------------>');
    console.log(res);
    console.log('info-res------------------>');
  });
};
// 修改当前数据的地址老版本
export const updateStepDataIndex = (type: string, step: string, num: number) => {
  chrome.runtime.sendMessage({ type, step, num }).then((res) => {
    console.log('info-res------------------>');
    console.log(res);
    console.log('info-res------------------>');
  });
};

// 修改当前数据的地址老版本
export const createDataForServices = (event: string, position: string, id: number) => {
  chrome.runtime.sendMessage({ type: SETTING_LISTENER_SCREEN, event, position, id }).then((res) => {
    console.log('info-res------------------>');
    console.log(res);
    console.log('info-res------------------>');
  });
};
// 上传图片文件
export const createRequestFileServices = (url: string, params: any) => {
  chrome.runtime.sendMessage({ type: GET_FILES_ADDRESS, url, params }).then((res) => {
    console.log('info-res------------------>');
    console.log(res);
    console.log('info-res------------------>');
  });
};
