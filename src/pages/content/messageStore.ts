import { GET_FILES_ADDRESS, SETTING_LISTENER_SCREEN } from '@/common/agreement';

export const sendMessageStoreIndex = ({ key, cate, type }: any) => {
  chrome.runtime.sendMessage({ type, key, cate }).then((res) => {
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

// 获取数据
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
