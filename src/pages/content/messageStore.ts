import {
  ASK_CATE_TO_SERVICES,
  GET_FILES_ADDRESS,
  SETTING_LISTENER_SCREEN,
  UPLOAD_IMG_FILES,
} from '@/common/agreement';

export const AskServicesEdiTYPE = () => {
  chrome.runtime.sendMessage({ type: ASK_CATE_TO_SERVICES }).then((res) => {
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
export const sendFilesForServices = (files: any, blob: any, callback: (e: any) => void) => {
  chrome.runtime.sendMessage({ type: UPLOAD_IMG_FILES, files, blob }).then((res) => {
    callback(res);
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
