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
  EXECUTE_SCRIPT,
} from '@/common/agreement';
import { sendMessageQueryCurrent } from '@/pages/background/SettingStore';
import { GetAPI } from '@/pages/background/FetchStore';
import { appConfig } from '@/common/config';

export let oldFinalData: any = {};

export const listenerDataInfoMessage = (mobiles: string[]) => {
  chrome.runtime.onMessage?.removeListener(() => {});
  chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
    if (response?.type === EXECUTE_SCRIPT) {
      const { tab } = sender;
      if (!tab?.id) {
        return;
      }
      const code =
        'let script = document.createElement(\'script\');script.text = \'$(".jump_site").off("click")\';(document.head || document.documentElement).appendChild(script);';
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: function (code) {
          const el = document.createElement('script');
          el.textContent = code;
          document.documentElement.appendChild(el);
          el.remove();
        },
        args: [code],
        world: 'MAIN',
        //injectImmediately: true, // Chrome 102+
      });
    }

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
        console.log(result, '结果');
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
        queryAllScreen('https://61.136.101.51:8443/ispis/login/loginSuccess', (res: any) => {
          if (res?.id) {
            chrome.tabs.update(res?.id, { active: true });
            chrome.tabs.reload(res?.id);
          } else {
            chrome.tabs.create({
              url: 'https://61.136.101.51:8443/ispis/login/loginSuccess.action',
            });
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
    const { basic, principal_data, web_site } = res.data;
    loadImageFile(basic.img_cert).then((res) => {
      basic.img_cert = res;
      loadImageFile(basic.img_supp).then((res) => {
        basic.img_supp = res;
        loadImageFile(principal_data.img_cert).then((res) => {
          principal_data.img_cert = res;
          loadImageFile(principal_data.img_photo).then((res) => {
            principal_data.img_photo = res;
            getAllImgFile(web_site, 0, (list: any) => {
              const data = {
                basic,
                principal_data,
                web_site: list,
              };
              callback(data);
            });
          });
        });
      });
    });
  });
};

const getAllImgFile = (list: any, index: any, callback: any) => {
  if (index >= list.length) {
    callback(list);
    return;
  }
  let item = list[index];
  loadImageFile(item.img_cert).then((res) => {
    item.img_cert = res;
    loadImageFile(item.img_promise).then((res) => {
      item.img_promise = res;
      loadImageFile(item.img_supp).then((res) => {
        item.img_supp = res;
        getAllApprovalFile(item.approval_list, 0, (aList: any) => {
          item.approval_list = aList;
          console.log(item);
          getAllPrincipalFile(item.principal_data, (pList: any) => {
            item.principal_data = pList;
            list[index] = { ...item };
            getAllImgFile(list, index + 1, callback);
          });
        });
      });
    });
  });
};

const getAllApprovalFile = (list: any, index: any, callback: any) => {
  if (index >= list.length) {
    callback(list);
    return;
  }
  let item = list[index];
  loadImageFile(item.img_data).then((res) => {
    item.img_data = res;
    list[index] = { ...item };
    getAllApprovalFile(list, index + 1, callback);
  });
};

const getAllPrincipalFile = (item: any, callback: any) => {
  loadImageFile(item.img_cert).then((res) => {
    item.img_cert = res;
    loadImageFile(item.img_photo).then((res) => {
      item.img_photo = res;
      callback(item);
    });
  });
};
const loadImageFile = async (file: any) => {
  console.log(file, '文件数据');
  if (!file) return undefined;
  let url = file.show_src;
  let fileName = getFileNameFromUrl(url);
  return new Promise((resolve, rejects) => {
    fetch(url)
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        let imgFile = new File([blob], fileName, { type: blob.type });
        var reader = new FileReader();
        reader.onloadend = function () {
          // 将 base64data 发送给 content 页面
          file.show_src = reader.result;
          resolve({ ...file });
        };
        reader.readAsDataURL(imgFile);
      })
      .catch((err) => {
        resolve(undefined);
      });
  });
};

const getFileNameFromUrl = (url: string) => {
  const path = new URL(url).pathname;
  return path.substring(path.lastIndexOf('/') + 1);
};
