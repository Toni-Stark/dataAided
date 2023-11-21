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
    tabTimer[tabId] = setTimeout(() => {
      clearTimeout(tabTimer[tabId]);
      tabTimer[tabId] = null;
      console.log(oldFinalData, '数据深度1');
      // 功能二 列表排序
      if (tab?.url && tab.url.indexOf('corp-query-search') >= 0) {
        chrome.tabs.sendMessage(tabId, { msg: SETTING_LIST_DATA });
      }
      chrome.tabs.sendMessage(tabId, { msg: OPEN_MOUSE_LISTENER, num: 1, data: oldFinalData });
      // 验证是否处于中台系统；
      let isSystem = verifyOldVersionPath(tab.url, '/batools/enter/index');
      if (isSystem) {
        chrome.tabs.sendMessage(tabId, { msg: SETTING_LISTENER_SCREEN });
      }
    }, 1000);
  });
  chrome.tabs.onActivated.addListener(function (activeInfo) {
    // 获取当前活动标签页的ID
    const tabId = activeInfo.tabId;
    // 根据ID获取当前标签页的信息
    chrome.tabs.get(tabId, function (tab) {
      // 获取该标签页的标题和URL
      let isSystem = verifyOldVersionPath(tab.url, '/batools/enter/index');
      console.log(oldFinalData, '数据深度2');
      if (isSystem) {
      }
    });
  });
  chrome.webRequest.onCompleted.addListener(
    (detail) => {
      if (detail.url.indexOf('corp-query-search') >= 0) {
        chrome.tabs.sendMessage(detail.tabId, { msg: SETTING_LIST_DATA });
      }
    },
    { urls: ['<all_urls>'] }
  );
};

const verifyOldVersionPath = (src?: string, target?: string): boolean => {
  if (!src) {
    return false;
  }
  const url = new URL(src);
  const path = url.pathname;
  return target === path;
};
