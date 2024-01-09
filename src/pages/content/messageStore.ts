import { GET_FILES_ADDRESS, SETTING_LISTENER_SCREEN } from '@/common/agreement';

export const sendMessageStoreIndex = ({ key, cate, type }: any) => {
  chrome.runtime.sendMessage({ type, key, cate });
};

// 修改当前数据的地址
export const updateStepData = (type: string, step: string, num?: number) => {
  chrome.runtime.sendMessage({ type, step, num });
};
// 修改当前数据的地址老版本
export const updateStepDataIndex = (type: string, step: string, num: number) => {
  chrome.runtime.sendMessage({ type, step, num });
};

// 获取数据
export const createDataForServices = (event: string, position: string, id: number) => {
  chrome.runtime.sendMessage({ type: SETTING_LISTENER_SCREEN, event, position, id });
};
// 上传图片文件
export const createRequestFileServices = (url: string, params: any) => {
  chrome.runtime.sendMessage({ type: GET_FILES_ADDRESS, url, params });
};

// 上传数据获取base64
export const updateDataBase64 = (type: string, step: string, src?: any) => {
  chrome.runtime.sendMessage({ type, step, src });
};
