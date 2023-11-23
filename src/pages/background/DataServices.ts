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
  POLICE_VERSION_DATA,
  POLICE_MAIN_DATA,
} from '@/common/agreement';
import { sendMessageQueryCurrent } from '@/pages/background/SettingStore';
import { GetAPI } from '@/pages/background/FetchStore';
import { appConfig } from '@/common/config';
import { dataMainTemplate } from '@/common/element';

export let oldFinalData: any = {};

export const listenerDataInfoMessage = () => {
  chrome.runtime.onMessage?.removeListener(() => {});
  chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
    if (response?.type === EXECUTE_SCRIPT) {
      const { tab } = sender;
      if (!tab?.id) return;
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
        //injectImmediately: true,
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
    if (response?.type === POLICE_VERSION_DATA) {
      const { tab } = sender;
      if (!tab?.id) return true;
      if (response?.step === POLICE_MAIN_DATA) {
        sendMessageQueryCurrent(tab.id, {
          msg: POLICE_MAIN_DATA,
          data: dataMainTemplate,
        });
      }
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

// 判断目标链接是否有标签页存在
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

// 对数据进行处理将文件转为Base64
const getCurrentData = (id: any, callback: any) => {
  let BaseUrl = appConfig.prod;
  GetAPI({
    url: BaseUrl + '/api/batools/enter/info?id=' + id + '&merchant_sn=7J6zvmx81&ver=1',
  }).then((res: any) => {
    const { basic, principal_data, web_site } = res.data;
    loadImageFiles([basic.img_cert], 0, (res: any[]) => {
      basic.img_cert = res[0];
      loadImageFiles(basic.img_supp, 0, (res: any[]) => {
        basic.img_supp = res;
        loadImageFiles([principal_data.img_cert], 0, (res: any[]) => {
          principal_data.img_cert = res[0];
          loadImageFiles([principal_data.img_photo], 0, (res: any[]) => {
            principal_data.img_photo = res[0];
            // 处理网站文件的格式
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
  loadImageFiles([item.img_cert], 0, (res: any[]) => {
    item.img_cert = res[0];
    loadImageFiles([item.img_promise], 0, (res: any[]) => {
      item.img_promise = res[0];
      loadImageFiles(item.img_supp, 0, (res: any[]) => {
        item.img_supp = res;
        getAllApprovalFile(item.approval_list, 0, (aList: any) => {
          item.approval_list = aList;
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
  loadImageFiles([item.img_data], 0, (res: any[]) => {
    item.img_data = res[0];
    list[index] = { ...item };
    getAllApprovalFile(list, index + 1, callback);
  });
};
const getAllPrincipalFile = (item: any, callback: any) => {
  loadImageFiles([item.img_cert], 0, (res: any[]) => {
    item.img_cert = res;
    loadImageFiles([item.img_photo], 0, (res: any[]) => {
      item.img_photo = res;
      callback(item);
    });
  });
};
const loadImageFiles = async (data: any, ind: number, callback: any) => {
  let list: any[] = [];
  if (!data || !data[0]) {
    callback([]);
    return;
  }
  const uploadList: any = async (file: any, num: number) => {
    let url = file[num].show_src;
    let fileName = getFileNameFromUrl(url);
    await fetch(url)
      .then((res) => {
        return res.blob();
      })
      .then(async (blob) => {
        let imgFile = new File([blob], fileName, { type: blob.type });
        var reader = new FileReader();
        reader.onloadend = async function () {
          file[num].show_src = reader.result;
          list = [...list, file[num]];
          if (num + 1 >= file.length || !file[num + 1]) {
            await callback(list);
            return;
          } else {
            await uploadList(file, num + 1, callback);
          }
        };
        reader.readAsDataURL(imgFile);
      });
  };
  await uploadList(data, ind);
};
const getFileNameFromUrl = (url: string) => {
  const path = new URL(url).pathname;
  return path.substring(path.lastIndexOf('/') + 1);
};
