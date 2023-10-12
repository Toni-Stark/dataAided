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
  websitefirstpageurl: '#websitefirstpageurlUl #websitefirstpageurl',
  websitefirstpageurl: '#websitefirstpageurlUl #websitefirstpageurl',
};
export const BASIC_INFO_ADMIN: any = {
  serverType_select: '#modalFormDiv ul:nth-child(3) .formLiWidth3 #serverType',
};
export const BASIC_INFO_ICP: any = {
  serverType_select: '#modalFormDiv ul:nth-child(3) .formLiWidth3 #serverType',
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

export const secondStepElementQuery = (str: string): ElementType => {
  let aIframe: any = document.querySelector('#TB_iframeContent');
  let bIframe: any = aIframe.contentDocument
    .querySelector('body')
    .querySelector('#SecondStep #websideIframe');
  let cIframe: any = bIframe.contentDocument.querySelector('body').querySelector('#websideIframe');
  let dIframe: any = cIframe.contentDocument.querySelector('body #modalFormBody');
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
  let iframe: any = secondStepElementQuery('#modalFormBody');
  // let dom =
  // #wsManageContentfileUl1 .preLiHide #annexFile9120915
  console.log(iframe);
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
