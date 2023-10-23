import {
  NEW_VERSION_FILING_DATA,
  SET_FINAL_STEP_DATA,
  SET_FIRST_STEP_DATA,
  SET_SECOND_STEP_DATA,
  SET_FINAL_OLD_DATA,
  OLD_VERSION_FILING_DATA,
  SET_FINAL_OLD_DATA_SECOND,
  SET_FINAL_OLD_MAIN_FILE,
  SET_FINAL_OLD_WEB_FILE,
  GET_DATA_NEW_JUMP,
  SETTING_LISTENER_SCREEN,
  GET_DATA_OLD_JUMP,
} from '@/common/agreement';
import { sendMessageQueryCurrent } from '@/pages/background/SettingStore';
import { GetAPI } from '@/pages/background/FetchStore';
import { appConfig } from '@/common/config';

export let oldFinalData: any = {};

export const listenerDataInfoMessage = (mobiles: string[]) => {
  chrome.runtime.onMessage?.removeListener(() => {});
  chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
    if (response?.type === NEW_VERSION_FILING_DATA) {
      const { tab } = sender;
      if (!tab?.id) return true;
      if (response?.step === SET_FIRST_STEP_DATA) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_FIRST_STEP_DATA,
          data: oldFinalData,
        });
      }
      if (response?.step === SET_SECOND_STEP_DATA) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_SECOND_STEP_DATA,
          data: oldFinalData,
          num: response?.num,
        });
      }
      if (response?.step === SET_FINAL_STEP_DATA) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_FINAL_STEP_DATA,
          data: oldFinalData,
        });
      }
    }
    if (response?.type === OLD_VERSION_FILING_DATA) {
      const { tab } = sender;
      if (!tab?.id) return true;
      if (response?.step === SET_FINAL_OLD_DATA) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_FINAL_OLD_DATA,
          data: oldFinalData,
        });
      }
      if (response?.step === SET_FINAL_OLD_DATA_SECOND) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_FINAL_OLD_DATA_SECOND,
          data: oldFinalData,
          num: response?.num,
        });
      }
      if (response?.step === SET_FINAL_OLD_MAIN_FILE) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_FINAL_OLD_MAIN_FILE,
          data: oldFinalData,
        });
      }
      if (response?.step === SET_FINAL_OLD_WEB_FILE) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_FINAL_OLD_WEB_FILE,
          data: oldFinalData,
          num: response?.num,
        });
      }
      return true;
    }
    if (response?.type === SETTING_LISTENER_SCREEN) {
      const { position, id } = response;
      getCurrentData(id, (result: any) => {
        oldFinalData = { ...result, dateTimes: new Date().getTime() };
      });
      if (response?.event === GET_DATA_NEW_JUMP) {
        queryAllScreen(position, (res: any) => {
          if (res?.id) {
            chrome.tabs.update(res?.id, { active: true });
            chrome.tabs.reload(res?.id);
          } else {
            chrome.tabs.create({ url: position + 'user/gotoLoginPage.action' });
          }
        });
      }
      if (response?.event === GET_DATA_OLD_JUMP) {
        queryAllScreen(position, (res: any) => {
          if (res?.id) {
            chrome.tabs.update(res?.id, { active: true });
            chrome.tabs.reload(res?.id);
          } else {
            chrome.tabs.create({ url: position });
          }
        });
      }
    }
    return true;
  });
};

const queryAllScreen = (position: string, callback: any) => {
  // 新系统链接;
  let strList = [position];
  // 旧系统链接
  let result: any = undefined;
  chrome.tabs.query({}, function (tabs) {
    // 遍历所有标签页
    tabs.forEach(function (tab) {
      // 在控制台输出标签页ID和URL
      let url: any = tab.url;
      for (let i of strList) {
        if (url.indexOf(i) !== -1) {
          result = tab;
        }
      }
    });
    callback(result);
  });
};

const getCurrentData = (id: any, callback: any) => {
  let BaseUrl = appConfig.prod;
  GetAPI({
    url: BaseUrl + '/api/batools/enter/info?id=' + id + '&merchant_sn=7J6zvmx81',
  }).then((res: any) => {
    callback(res.data);
  });
};
