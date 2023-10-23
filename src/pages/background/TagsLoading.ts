import { OPEN_MOUSE_LISTENER, SETTING_LISTENER_SCREEN } from '@/common/agreement';
import { oldFinalData } from '@/pages/background/DataServices';
let tabTimer: any = {};
let recently: any = {};
let data: any = {};
export const listenerTagLoadingMessage = () => {
  chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    if (tab.status !== 'complete') return;
    tabTimer[tabId] = setTimeout(() => {
      clearTimeout(tabTimer[tabId]);
      tabTimer[tabId] = null;

      // 验证是否多次运行当前页面；
      let res = regCurrentScreenRefresh(recently, tab);
      if (res || data.dateTimes !== oldFinalData.dateTimes) {
        data = oldFinalData;
        chrome.tabs.sendMessage(tabId, { msg: OPEN_MOUSE_LISTENER, num: 1, data: oldFinalData });
      }

      // 验证是否处于中台系统；
      let isSystem = verifyOldVersionPath(tab.url, '/batools/enter/index');
      if (isSystem) {
        recently = {};
        chrome.tabs.sendMessage(tabId, { msg: SETTING_LISTENER_SCREEN });
      }
    }, 1000);
  });
  chrome.tabs.onActivated.addListener(function(activeInfo) {
    // 获取当前活动标签页的ID
    const tabId = activeInfo.tabId;

    // 根据ID获取当前标签页的信息
    chrome.tabs.get(tabId, function(tab) {
      // 获取该标签页的标题和URL
      let isSystem = verifyOldVersionPath(tab.url, '/batools/enter/index');
      console.log('监听页面', isSystem)
      if(isSystem){
        recently = {};
      }
    });
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

const verifyOldVersionPath = (src?: string, target?: string): boolean => {
  if (!src) {
    return false;
  }
  const url = new URL(src);
  const path = url.pathname;
  return target === path;
};
