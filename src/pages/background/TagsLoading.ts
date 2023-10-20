import { OPEN_MOUSE_LISTENER } from '@/common/agreement';
import { GetAPI } from '@/pages/background/FetchStore';
import { oldFinalData } from '@/common/element';
let tabTimer: any = {};
let recently: any = {};
export const listenerTagLoadingMessage = () => {
  chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    if (tab.status !== 'complete') return;
    tabTimer[tabId] = setTimeout(() => {
      clearTimeout(tabTimer[tabId]);
      tabTimer[tabId] = null;
      let res = regCurrentScreenRefresh(recently, tab);
      if (res) {
        chrome.tabs.sendMessage(tabId, { msg: OPEN_MOUSE_LISTENER, num: 1, data: oldFinalData });
      }
    }, 1000);
  });
};

const getCurrentData = (callback: any) => {
  GetAPI({
    url: 'http://www.dev.cms.cn/api/batools/enter/info?id=2&merchant_sn=7J6zvmx81',
  }).then((res: any) => {
    callback(res.data);
  });
};

const regCurrentScreenRefresh = (resent: any, tab: any): boolean => {
  let id = tab.id;
  if (resent.hasOwnProperty(id) && resent[id].id === tab.id) {
    if (resent[id].url !== tab.url) {
      resent[id] = tab;
      return true;
    } else {
      resent[id] = tab;
      return false;
    }
  } else {
    resent[id] = tab;
    return true;
  }
};
