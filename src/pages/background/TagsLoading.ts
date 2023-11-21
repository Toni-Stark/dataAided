import {
  OPEN_MOUSE_LISTENER,
  SETTING_LIST_DATA,
  SETTING_LISTENER_SCREEN,
} from '@/common/agreement';
import { oldFinalData } from '@/pages/background/DataServices';
let tabTimer: any = {};
export const listenerTagLoadingMessage = () => {
  chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    if (tab.status !== 'complete') return;
    clearTimeout(tabTimer[tabId]);
    tabTimer[tabId] = null;
    tabTimer[tabId] = setTimeout(() => {
      RegUrlListSort(tab, tabId);
      RegUrlFiling(tab, tabId);
    }, 1000);
  });
  chrome.tabs.onActivated.addListener(function (activeInfo) {
    const tabId = activeInfo.tabId;
    chrome.tabs.get(tabId, function (tab) {});
  });
  chrome.webRequest.onCompleted.addListener(
    (detail) => {
      RegUrlListSort(detail, detail.tabId);
    },
    { urls: ['<all_urls>'] }
  );
};

// 判断是否企业信用信息列表排序页面
const RegUrlListSort = (tab: any, tabId: any) => {
  if (tab?.url && tab.url.indexOf('corp-query-search') >= 0) {
    chrome.tabs.sendMessage(tabId, { msg: SETTING_LIST_DATA });
  }
};
// 判断是否备案数据添加页面
const RegUrlFiling = (tab: any, tabId: any) => {
  chrome.tabs.sendMessage(tabId, { msg: OPEN_MOUSE_LISTENER, num: 1, data: oldFinalData });
  // 判断是否后台系统
  let isSystem = verifyOldVersionPath(tab.url, '/batools/enter/index');
  if (isSystem) {
    chrome.tabs.sendMessage(tabId, { msg: SETTING_LISTENER_SCREEN });
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
