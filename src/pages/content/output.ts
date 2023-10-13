import { getTime } from '@/pages/content/tools';
import { ElementType } from '@/pages/types';

export const MAIN_UNIT: any = {
  unitname_textarea: '#FirstStep #formDiv #main_unit ul:first-child .formLiWidth8 .textareaClass',
  branchid_select: '#FirstStep #formDiv #main_unit ul:nth-child(2) .formLiWidth3 .formInputWidth',
  unitpropertyId_select_custom:
    '#FirstStep #formDiv #main_unit ul:nth-child(3) .formLiWidth3:nth-child(2) .formInputWidth',
  unitprovinceID_select:
    '#FirstStep #formDiv #main_unit ul:nth-child(3) .formLiWidth3:last-child .formInputWidth',
  unitcityID_select:
    '#FirstStep #formDiv #main_unit ul:nth-child(4) .formLiWidth3:nth-child(2) .formInputWidth',
  unitcountyID_select:
    '#FirstStep #formDiv #main_unit ul:nth-child(4) .formLiWidth3:last-child .formInputWidth',
  unitcertificatetypeId_select:
    '#FirstStep #formDiv #main_unit ul:nth-child(5) .formLiWidth3:nth-child(2) .formInputWidth',
  unitcertificatenum_input:
    '#FirstStep #formDiv #main_unit ul:nth-child(5) .formLiWidth3:last-child .formInputWidth',
  unitaddress_textarea:
    '#FirstStep #formDiv #main_unit ul:nth-child(6) .formLiWidth8 .textareaClass',
  certificateaddress_textarea:
    '#FirstStep #formDiv #main_unit ul:nth-child(7) .formLiWidth8 .textareaClass',
  unitsuperior_textarea:
    '#FirstStep #formDiv #main_unit ul:nth-child(9) .formLiWidth8 .textareaClass',
};
export const MAIN_UNIT_ADMIN: any = {
  unitprincipalcertificatetypeId_select:
    '#FirstStep #formDiv #main_unitAdmin ul:first-child .formLiWidth3:nth-child(2) .formInputWidth',
  isLongTerm_radio: '#FirstStep #formDiv #main_unitAdmin ul:nth-child(2) .formLiWidth3 input',
  unitprincipalcertificatenum_select:
    '#FirstStep #formDiv #main_unitAdmin ul:first-child .formLiWidth3:last-child .formInputWidth',
  certificateValidityStart_input_date:
    '#FirstStep #formDiv #main_unitAdmin ul:nth-child(3) .formLiWidth3:nth-child(2) .table_item_input_time',
  certificateValidityEnd_input_date:
    '#FirstStep #formDiv #main_unitAdmin ul:nth-child(3) .formLiWidth3:last-child .table_item_input_time',
  unitprincipalname_input:
    '#FirstStep #formDiv #main_unitAdmin ul:nth-child(4) .formLiWidth3:nth-child(2) .formInputWidth',
  unitprincipalmobilephone_input:
    '#FirstStep #formDiv #main_unitAdmin ul:nth-child(4) .formLiWidth3:last-child .formInputWidth',
  unitprincipaltel_input:
    '#FirstStep #formDiv #main_unitAdmin ul:nth-child(5) .formLiWidth3:nth-child(2) .formInputWidth',
  unitprincipalemergencytel_input:
    '#FirstStep #formDiv #main_unitAdmin ul:nth-child(5) .formLiWidth3:last-child .formInputWidth',
  unitprincipalemail_textarea:
    '#FirstStep #formDiv #main_unitAdmin ul:nth-child(6) .formLiWidth8 .textareaClass',
  instantmessageid_select:
    '#FirstStep #formDiv #main_unitAdmin ul:nth-child(7) .formLiWidth3:nth-child(2) .formInputWidth',
  instantmessageaccount_input:
    '#FirstStep #formDiv #main_unitAdmin ul:nth-child(7) .formLiWidth3:last-child .formInputWidth',
  remark_input: '#FirstStep #formDiv #main_unitAdmin ul:nth-child(8) .formLiWidth8 .formInputWidth',
};
export const BASIC_INFO: any = {
  serverType_select: '#modalFormDiv ul:nth-child(3) .formLiWidth3 #serverType',
  websitename_input: '#modalFormDiv ul:nth-child(4) .formLiWidth8 #websitename',
  domainName_input: '#domainDivVisit #domainName',
  websitefirstpageurl_input: '#websitefirstpageurlUl #websitefirstpageurl',
  websiteservicecontentDiv_checkout: '#websiteservicecontentDiv ul .formLiWidth8 div input',
  languageDiv_checkout: '#languageDiv ul .formLiWidth8 div input',
};
export const BASIC_INFO_ADMIN: any = {
  websiteprincipalcertificatetypeVO_select: '#websiteprincipalcertificatetypeVO',
  websiteprincipalcertificatenum_input: '#websiteprincipalcertificatenum',
  isLongTermUl_radio: '#isLongTermUl li input',
  certificateValidityStart_input_date:
    '#unitprincipalcertificatetypeIdUl .formLiWidth3 #beginDateFind',
  certificateValidityEnd_input_date: '#unitprincipalcertificatetypeIdUl .formLiWidth3 #endDateFind',
  websiteprincipalname_input: '#websiteprincipalname',
  websiteprincipalmobilephone_input: '#websiteprincipalmobilephone',
  websiteprincipaltel_input: '#websiteprincipaltel',
  websiteprincipalemergencytel_input: '#websiteprincipalemergencytel',
  websiteprincipalemail_input: '#websiteprincipalemail',
  webinstantmessageid_select: '#webinstantmessageid',
  instantmessageaccount_input: '#webinstantmessageaccount',
  remark_input: '#remarkMode',
};
export const BASIC_INFO_ICP: any = {
  websiteconnenctmodeVODiv_checkout: '#websiteconnenctmodeVODiv ul .formLiWidth8 input',
  webIpBegin_input: '#ipScopeDiv #ipFirstDiv ul .formLiWidth8 #webIpBegin',
  webIpEnd_input: '#ipScopeDiv #ipFirstDiv ul .formLiWidth8 #webIpEnd',
  serveraddressDiv_checkout: '#serveraddressDiv ul .formLiWidth8 input',
};

export const DispatchEvent = (dom: any, event: string) => {
  let e = new Event(event);
  dom?.dispatchEvent(e);
};
export const DispatchMouseEvent = (dom: any, event: string) => {
  let e = new MouseEvent(event, {
    bubbles: true, // 事件冒泡
    cancelable: true, // 可取消事件
    view: window,
  });
  dom?.dispatchEvent(e);
};

const getElementList = (data: any) => {
  let list = [];
  for (let i in data) {
    if (data.hasOwnProperty(i)) {
      let pairs = i.split('_');
      let option: any = {
        key: pairs[0],
        type: pairs[1],
        element: data[i],
      };
      if (pairs.length > 2) {
        if (option.type === 'select') {
          option['custom'] = 'click';
        }
        if (option.type === 'input') {
          option['custom'] = pairs[2];
        }
      }
      list.push(option);
    }
  }
  return list;
};

export const thirdStepElementQuery = (str: string): ElementType => {
  let aIframe: any = document.querySelector('#TB_iframeContent');
  let bIframe: any = aIframe.contentDocument
    .querySelector('body')
    .querySelector('#ThirdStep #recordIframe');
  let cIframe: any = bIframe.contentDocument.querySelector('.modalFormBody .modalFormBody');
  return cIframe?.querySelector(str);
};

export const secondStepElementQuery = (str: string): ElementType => {
  let aIframe: any = document.querySelector('#TB_iframeContent');
  let bIframe: any = aIframe.contentDocument
    .querySelector('body')
    .querySelector('#SecondStep #websideIframe');
  let cIframe: any = bIframe.contentDocument.querySelector('body').querySelector('#websideIframe');
  let dIframe: any = cIframe.contentDocument.querySelector('body');
  return dIframe?.querySelector(str);
};
export const secondStepElementQueryAll = (str: string): ElementType => {
  let aIframe: any = document.querySelector('#TB_iframeContent');
  let bIframe: any = aIframe.contentDocument
    .querySelector('body')
    .querySelector('#SecondStep #websideIframe');
  let cIframe: any = bIframe.contentDocument.querySelector('body').querySelector('#websideIframe');
  let dIframe: any = cIframe.contentDocument.querySelector('body #modalFormBody');
  return dIframe?.querySelectorAll(str);
};

export const queryFirstIframeEle = (dom: any, str: string): ElementType => {
  return dom.querySelector(str);
};
export const queryFirstIframeEleAll = (dom: any, str: string): ElementType => {
  return dom.querySelectorAll(str);
};

export const setThreeStepData = (data: any) => {
  let iframe: any = thirdStepElementQuery('#traditionUploadDiv');
  let inputFile = iframe.querySelector('#unitpic0ul #unitpic0');
  console.log(inputFile);

  function getFileNameFromUrl(url: string | URL) {
    const path = new URL(url).pathname;
    return path.substring(path.lastIndexOf('/') + 1);
  }
  function loadImageAsFile(url: string | URL) {
    return new Promise((resolve, reject) => {
      // 创建一个 HTTP 请求对象
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = 'blob';

      // 当请求加载完成后触发事件
      xhr.onload = function () {
        if (xhr.status === 200) {
          // 创建一个 Blob 对象
          const blob = xhr.response;

          // 获取图片文件名
          const fileName = getFileNameFromUrl(url);

          try {
            // 创建一个 File 对象
            const file = new File([blob], fileName, { type: blob.type });

            // 返回转换后的 File 对象
            resolve(file);
          } catch (error) {
            reject(new Error('无法创建文件对象'));
          }
        } else {
          reject(new Error(`请求失败: ${xhr.statusText}`));
        }
      };

      // 发送 HTTP 请求
      xhr.send();
    });
  }
  const imageUrl =
    'https://img1.baidu.com/it/u=730099028,263687001&fm=253&fmt=auto&app=138&f=PNG?w=855&h=500';

  loadImageAsFile(imageUrl)
    .then((file: any) => {
      // 在这里可以使用转换后的 File 对象
      console.log(file);
      const dataTransfer = new DataTransfer();

      // 获取所选择的图片文件

      if (file) {
        // 将所选择的图片文件添加到 DataTransfer 中
        dataTransfer.items.add(file);
      }

      // 将 DataTransfer 对象设置为文件选择控件的 files 属性
      inputFile.files = dataTransfer.files;
      DispatchEvent(inputFile, 'change');
    })
    .catch((error) => {
      console.error(error);
    });
};

export const setSecondDownInfoStepData = (data: any) => {
  let iframe: any = secondStepElementQuery('#modalFormBody');
  let basic_info_icp = getElementList(BASIC_INFO_ICP);
  recursiveExecution(
    { iframe, result: data, list: basic_info_icp, data: data['basic_info_icp'], index: 0 },
    () => {
      console.log('备案数据第二步');
    }
  );
};
export const setSecondDownStepData = (data: any) => {
  let iframe: any = secondStepElementQuery('#modalFormBody');
  let basic_info_admin = getElementList(BASIC_INFO_ADMIN);
  recursiveExecution(
    { iframe, result: data, list: basic_info_admin, data: data['basic_info_admin'], index: 0 },
    setSecondDownInfoStepData
  );
};
export const setSecondStepData = (data: any) => {
  let iframe: any = secondStepElementQuery('#modalFormBody');
  console.log(iframe, 'iframe');
  let basic_info = getElementList(BASIC_INFO);
  recursiveExecution(
    { iframe, result: data, list: basic_info, data: data['basic_info'], index: 0 },
    setSecondDownStepData
  );
};

export const setFirstDownStepData = (data: any) => {
  let iframe: any = document.getElementById('TB_iframeContent');
  let iframeBody = iframe?.contentDocument.querySelectorAll('body')[0];
  let admin_list = getElementList(MAIN_UNIT_ADMIN);
  recursiveExecution(
    { iframe: iframeBody, result: data, list: admin_list, data: data['main_unit_admin'], index: 0 },
    () => {
      console.log('运行工单2');
    }
  );
};
export const setFirstStepData = (data: any) => {
  let iframe: any = document.getElementById('TB_iframeContent');
  let iframeBody = iframe?.contentDocument.querySelectorAll('body')[0];
  let main_list = getElementList(MAIN_UNIT);
  recursiveExecution(
    { iframe: iframeBody, result: data, list: main_list, data: data['main_unit'], index: 0 },
    setFirstDownStepData
  );
};

export const recursiveExecution = (params: any, callback: any) => {
  const { iframe, result, list, data, index } = params;
  if (index > list.length - 1) {
    callback(result);
    return;
  }
  const { type, element, key, custom } = list[index];
  if (!data.hasOwnProperty(key) || data[key] === undefined) {
    recursiveExecution({ ...params, index: index + 1 }, callback);
    return;
  }
  if (type === 'textarea') {
    let dom: any = queryFirstIframeEle(iframe, element);
    dom.value = data[key];
  }
  if (type === 'input') {
    if (custom === 'date') {
      let dom: any = queryFirstIframeEle(iframe, element);
      if (!dom?.disabled) {
        dom.click();
        setTimeout(() => {
          let dateIframe: any = document.querySelectorAll('iframe')[1];
          let dateBody: any = dateIframe.contentDocument.querySelector('body');
          dateTimeSetting({ body: dateBody, value: data[key] });
        }, 200);
      }
    } else {
      let dom: any = queryFirstIframeEle(iframe, element);
      dom.value = data[key];
      DispatchEvent(dom, 'focus');
    }
  }
  if (type === 'radio') {
    let radio: any = queryFirstIframeEleAll(iframe, element);
    for (let i of radio) {
      console.log('检查', i.value, data[key]);
      if (i.value === data[key]) {
        i.click();
      }
    }
  }
  if (type === 'checkout') {
    let checkout: any = queryFirstIframeEleAll(iframe, element);
    let reg_list = data[key].split(',');
    for (let i of checkout) {
      console.log('检查', i.value, data[key]);
      if (reg_list.includes(i.id)) {
        i.click();
      }
    }
  }
  if (type === 'select') {
    if (custom === 'click') {
      let dom: any = queryFirstIframeEle(iframe, element);
      dom.value = data[key];
      DispatchMouseEvent(dom, 'click');
    } else {
      let dom: any = queryFirstIframeEle(iframe, element);
      dom.value = data[key];
      DispatchEvent(dom, 'change');
    }
  }

  // 延时等待请求填充数据处理
  if (type === 'select' || (type === 'input' && custom === 'date') || type === 'radio') {
    let duration = 800;
    if (type === 'input' && custom === 'date') {
      duration = 1600;
    }
    let timer: any = setTimeout(() => {
      recursiveExecution({ ...params, index: index + 1 }, callback);
      clearTimeout(timer);
      timer = null;
    }, duration);
    return;
  }
  recursiveExecution({ ...params, index: index + 1 }, callback);
};

const dateTimeSetting = ({ body, value }: any) => {
  let yyDate = body.querySelector('#dpTitle>div:nth-child(4)>.yminput');
  yyDate.value = getTime(value, 'year');
  DispatchMouseEvent(yyDate, 'blur');

  let mmDate = body.querySelector('#dpTitle>div:nth-child(3)>.yminput');
  mmDate.value = getTime(value, 'month');
  DispatchMouseEvent(mmDate, 'blur');

  let dateList = body.querySelectorAll('.WdayTable tbody>tr>td');
  let list: any[] = [];
  for (let item of dateList) {
    if (['Wday', 'Wwday', 'Wselday'].includes(item?.className)) {
      list.push(item);
    }
  }
  let dateDom = list.find((item) => item.textContent == getTime(value, 'date'));
  if (dateDom) {
    DispatchMouseEvent(dateDom, 'click');
  }
};
