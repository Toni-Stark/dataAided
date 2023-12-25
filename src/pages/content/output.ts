import { base64ToFile } from '@/pages/content/tools';
import { ElementType } from '@/pages/types';
import {
  SET_FIRST_STEP_UPLOAD,
  SET_SECOND_STEP_UPLOAD,
  SET_THIRD_STEP_UPLOAD,
} from '@/common/agreement';

export const MAIN_UNIT: any = {
  unitname_textarea: '#FirstStep #formDiv #main_unit ul .formLiWidth8 #unitname',
  branchid_select: '#FirstStep #formDiv #main_unit ul:nth-child(2) .formLiWidth3 .formInputWidth',
  unitpropertyId_select_custom: '#FirstStep #formDiv #main_unit ul .formLiWidth3 #unitProperty',
  unitprovinceID_select: '#FirstStep #formDiv #main_unit ul .formLiWidth3 #mainProvince',
  unitcityID_select: '#FirstStep #formDiv #main_unit ul .formLiWidth3 #mainCity',
  unitcountyID_select: '#FirstStep #formDiv #main_unit ul .formLiWidth3 #mainCountry',
  unitcertificatetypeId_select:
    '#FirstStep #formDiv #main_unit ul .formLiWidth3 #unitcertificatetypeId',
  unitcertificatenum_input: '#FirstStep #formDiv #main_unit ul .formLiWidth3 #unitcertificatenum',
  unitaddress_textarea: '#FirstStep #formDiv #main_unit ul .formLiWidth8 #unitaddress',
  certificateaddress_textarea:
    '#FirstStep #formDiv #main_unit ul .formLiWidth8 #certificateaddress',
  unitsuperior_textarea: '#FirstStep #formDiv #main_unit ul .formLiWidth8 #unitsuperior',
};
export const MAIN_UNIT_ADMIN: any = {
  unitprincipalcertificatetypeId_select:
    '#FirstStep #formDiv #main_unitAdmin ul:first-child .formLiWidth3:nth-child(2) .formInputWidth',
  isLongTerm_radio: '#FirstStep #formDiv #main_unitAdmin ul:nth-child(2) .formLiWidth3 input',
  unitprincipalcertificatenum_input:
    '#FirstStep #formDiv #main_unitAdmin ul:first-child .formLiWidth3:last-child .formInputWidth',
  certificateValidityStart_input_date:
    '#FirstStep #formDiv #main_unitAdmin ul:nth-child(3) .formLiWidth3 #beginDateFind',
  certificateValidityEnd_input_date:
    '#FirstStep #formDiv #main_unitAdmin ul:nth-child(3) .formLiWidth3 #endDateFind',
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
  approvalContent_checkout_upload: '#approvalContent ul li div input',
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
  remark_remark: '#remarkMode',
};
export const BASIC_INFO_ICP: any = {
  websiteconnenctmodeVODiv_checkout: '#websiteconnenctmodeVODiv ul li input',
  ipScopeDiv_column: '#ipScopeDiv',
  serveraddressDiv_checkout: '#serveraddressDiv ul li input',
};
export const WEB_SIDE_ID_CARD_P1: any = {
  mainOtherPicUl_upload_not: '#otherPicDiv #mainOtherPicUl',
  webOtherPicUl_upload_not: '#otherPicDiv #webOtherPicUl',
  unitpic0ul_upload_have: '#traditionUploadDiv #unitpic0ul',
  identitypic0ul_upload_have: '#traditionUploadDiv #identitypic0ul',
  verificationpic0ul_upload_have: '#traditionUploadDiv #verificationpic0ul',
  websidechiefpic0ul_upload_have: '#traditionUploadDiv #websidechiefpic0ul',
  websideidentitycardpic0ul_upload_have: '#traditionUploadDiv #websideidentitycardpic0ul',
};
export const OLD_FIRST_STEP: any = {
  unit_name: '.x-form #ext-comp-1029 .x-form-item .x-form-element input',
  unit_property_show: '.x-form #ext-comp-1030 .x-form-item .x-form-field-wrap img',
  unit_province_show: '.x-form #nullparent .x-form-item .x-form-field-wrap img',
  unit_cert_type_show: '.x-form #ext-comp-1033 .x-form-item .x-form-element .x-form-field-wrap img',
  unit_city_show: '.x-form #ext-comp-1035 .x-form-item .x-form-element .x-form-field-wrap img',
  unit_cert_num: '.x-form #ext-comp-1037 .x-form-item .x-form-element .x-form-field',
  unit_county_show: '.x-form #ext-comp-1038 .x-form-item .x-form-element .x-form-field-wrap img',
  unit_contact_address: '.x-form #ext-comp-1040 .x-form-item .x-form-element .x-form-field',
  unit_superior: '.x-form #ext-comp-1041 .x-form-item .x-form-element .x-form-field',
  unit_cert_address: '.x-form #ext-comp-1042 .x-form-item .x-form-element .x-form-field',
  connect_mode:
    '.x-form #ext-comp-1043 .x-form-item .x-form-element .x-form-field-wrap .x-form-field',
};
export const OLD_SECOND_STEP: any = {
  // 第二部分
  name: '.x-form #ext-comp-1047 .x-form-item .x-form-element .x-form-field',
  cert_type_show: '.x-form #ext-comp-1048 .x-form-item .x-form-element .x-form-field-wrap img',
  mobile_phone: '.x-form #ext-comp-1050 .x-form-item .x-form-element .x-form-field',
  cert_num: '.x-form #ext-comp-1051 .x-form-item .x-form-element .x-form-field',
  tel: '.x-form #ext-comp-1052 .x-form-item .x-form-element .x-form-field',
  cert_validity_start:
    '.x-form #ext-comp-1053 .x-form-item .x-form-element .x-form-field-wrap .x-form-field',
  cert_validity_end:
    '.x-form #ext-comp-1054 .x-form-item .x-form-element .x-form-field-wrap .x-form-field',
  instant_msg_type:
    '.x-form #ext-comp-1055 .x-form-item .x-form-element .x-form-field-wrap .x-form-field',
  emergency_tel: '.x-form #ext-comp-1057 .x-form-item .x-form-element .x-form-field',
  instant_msg_account: '.x-form #ext-comp-1058 .x-form-item .x-form-element .x-form-field',
  email: '.x-form #ext-comp-1060 .x-form-item .x-form-element .x-form-field',
  remark: '.x-form #ext-comp-1061 .x-form-item .x-form-element .x-form-field',
};
export const OLD_THIRD_STEP: any = {
  // 第三部分
  name: '#ext-comp-1096 .x-form-element input',
  domain: '#ext-comp-1097 .x-form-element textarea',
  first_page_url: '#ext-comp-1098 .x-form-element input',
  ip_address: '#ext-comp-1271 .x-form-element textarea',
};
export const OLD_THIRD_CHECK_STEP: any = {
  // 第三部分
  language_type:
    '#ext-comp-1099>.x-panel-bwrap>.x-panel-body>.x-column-inner>.x-panel>.x-panel-bwrap>.x-panel-body>.x-column-inner',
  content_type:
    '#ext-comp-1183>.x-panel-bwrap>.x-panel-body>.x-column-inner>.x-panel>.x-panel-bwrap>.x-panel-body>.x-column-inner',
  server_type:
    '#ext-comp-1246>.x-panel-bwrap>.x-panel-body>.x-column-inner>.x-panel>.x-panel-bwrap>.x-panel-body>.x-column-inner',
  connect_mode:
    '#ext-comp-1272>.x-panel-bwrap>.x-panel-body>.x-column-inner>.x-panel>.x-panel-bwrap>.x-panel-body>.x-column-inner',
  server_address:
    '#ext-comp-1285>.x-panel-bwrap>.x-panel-body>.x-column-inner>.x-panel>.x-panel-bwrap>.x-panel-body>.x-column-inner',
};
export const OLD_THIRD_UPLOAD_STEP: any = {
  // 第三部分
  approval_list:
    '#ext-comp-1136>.x-panel-bwrap>.x-panel-body>.x-column-inner>.x-panel>.x-panel-bwrap>.x-panel-body>.x-column-inner',
};

export const DispatchEvent = (dom: any, event: string, option?: any) => {
  let e = new Event(event, option);
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
export const DispatchScrollEvent = (dom: any, num: number) => {
  const wheelEvent = new WheelEvent('wheel', {
    deltaY: num,
  });
  dom?.dispatchEvent(wheelEvent);
};
export const DispatchInputEvent = (dom: any, text: any) => {
  const event = new KeyboardEvent('input', {
    bubbles: true,
    cancelable: true,
    composed: true,
  });
  Object.defineProperty(dom, 'value', { value: text });
  console.log(dom, text, '1111111111');
  dom.dispatchEvent(event);
};

const getElementList = (data: any) => {
  let list = [];
  for (let i in data) {
    if (data?.hasOwnProperty(i)) {
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
        if (option.type === 'upload') {
          option['custom'] = pairs[2];
        }
        if (option.type === 'checkout') {
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
  let cIframe: any = bIframe.contentDocument.querySelector('.modalFormBody');
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

export const setThreeBtnStepData = () => {
  console.log('上传成功，在此触发保存按钮');
};
export const setThreeStepData = (data: any, num: number) => {
  let iframe: any = thirdStepElementQuery('#modalFormBody');
  removeThreeStrpData(iframe);
  let web_side_id_card_p1 = getElementList(WEB_SIDE_ID_CARD_P1);
  let res: any = data['web_side_id_card_p1'];
  let obj = { ...res };
  console.log({ ...obj }, 'res-------------------');
  if (res.Verification.length > num) {
    obj = { ...obj, ...res.Verification[num] };
  }
  console.log(data, web_side_id_card_p1, num, res.Verification, obj, '-----------------------');
  recursiveExecution(
    {
      iframe,
      result: data,
      list: web_side_id_card_p1,
      data: obj,
      index: 0,
    },
    setThreeBtnStepData
  );
};

const removeBtnClick = (list: any) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i]) {
      console.log(list[i]);
      DispatchMouseEvent(list[i], 'click');
    }
  }
};

export const removeThreeStrpData = (iframe: any) => {
  let webOtherPicUl: any = queryFirstIframeEleAll(iframe, '#webOtherPicUl .fileDel_button');
  let mainOtherPicUl: any = queryFirstIframeEleAll(iframe, '#mainOtherPicUl .fileDel_button');
  let unitpic0ul: any = queryFirstIframeEleAll(
    iframe,
    '#traditionUploadDiv #unitpic0ul .fileDel_button'
  );
  let identitypic0ul: any = queryFirstIframeEleAll(
    iframe,
    '#traditionUploadDiv #identitypic0ul .fileDel_button'
  );
  let verificationpic0ul: any = queryFirstIframeEleAll(
    iframe,
    '#traditionUploadDiv #verificationpic0ul .fileDel_button'
  );
  let websidechiefpic0ul: any = queryFirstIframeEleAll(
    iframe,
    '#traditionUploadDiv #websidechiefpic0ul .fileDel_button'
  );
  let websideidentitycardpic0ul: any = queryFirstIframeEleAll(
    iframe,
    '#traditionUploadDiv #websideidentitycardpic0ul .fileDel_button'
  );
  if (webOtherPicUl.length > 0) removeBtnClick(webOtherPicUl);
  if (mainOtherPicUl.length > 0) removeBtnClick(mainOtherPicUl);
  if (unitpic0ul.length > 0) removeBtnClick(unitpic0ul);
  if (identitypic0ul.length > 0) removeBtnClick(identitypic0ul);
  if (verificationpic0ul.length > 0) removeBtnClick(verificationpic0ul);
  if (websidechiefpic0ul.length > 0) removeBtnClick(websidechiefpic0ul);
  if (websideidentitycardpic0ul.length > 0) removeBtnClick(websideidentitycardpic0ul);
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
export const setSecondStepData = (res: any, num: number) => {
  let data = res[num];
  let iframe: any = secondStepElementQuery('#modalFormBody');
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
  console.log(key, '---', type, data, !data?.hasOwnProperty(key), data[key] === undefined);

  if (!data?.hasOwnProperty(key) || data[key] === undefined) {
    recursiveExecution({ ...params, index: index + 1 }, callback);
    return;
  }
  if (type === 'textarea') {
    let dom: any = queryFirstIframeEle(iframe, element);
    dom.value = data[key];
  }
  if (type === 'input') {
    let dom: any = queryFirstIframeEle(iframe, element);
    dom.value = data[key];
    if (!custom) {
      DispatchEvent(dom, 'focus');
    }
  }
  if (type === 'upload') {
    if (typeof data[key] === 'object') {
      for (let i of data[key]) {
        if (custom === 'have') {
          currentUploadFile({
            data: i,
            element,
            type: SET_FIRST_STEP_UPLOAD,
          });
        } else if (custom === 'not') {
          currentUploadFile({
            data: i,
            element,
            type: SET_SECOND_STEP_UPLOAD,
            key,
          });
        } else {
        }
      }
    } else {
      if (custom === 'have') {
        currentUploadFile({
          data: data[key],
          element,
          type: SET_FIRST_STEP_UPLOAD,
        });
      } else if (custom === 'not') {
        currentUploadFile({
          data: data[key],
          element,
          type: SET_SECOND_STEP_UPLOAD,
          key,
        });
      } else {
      }
    }
  }
  if (type === 'radio') {
    let radio: any = queryFirstIframeEleAll(iframe, element);
    for (let i of radio) {
      if (i.value === data[key]) {
        i.click();
      }
    }
  }
  if (type === 'remark') {
    if (!custom) {
      let remark: any = queryFirstIframeEle(iframe, '#remark');
      let remarkMode: any = queryFirstIframeEle(iframe, '#remarkMode');
      if (remark) {
        remark.value = data[key];
        DispatchEvent(remark, 'focus');
      }
      if (remarkMode) {
        remarkMode.value = data[key];
        DispatchEvent(remarkMode, 'focus');
      }
    }
  }
  if (type === 'checkout') {
    if (custom === 'upload') {
      let checkout: any = queryFirstIframeEleAll(iframe, element);
      let list: any = [];
      for (let item of data[key]) {
        list.push(item.approval_type);
      }
      for (let i of checkout) {
        if (list.includes(i.value)) {
          DispatchMouseEvent(i, 'click');
          let val = data[key].find((item: any) => item.approval_type === i.value);
          addStepSecondDataFile(val);
        }
      }
    } else {
      let checkout: any = queryFirstIframeEleAll(iframe, element);
      let reg_list = data[key].split(',');
      for (let i of checkout) {
        if (reg_list.includes(i.id)) {
          DispatchMouseEvent(i, 'click');
        }
      }
    }
  }
  if (type === 'select') {
    let dom: any = queryFirstIframeEle(iframe, element);
    if (dom?.value && data?.hasOwnProperty(key)) {
      if (custom === 'click') {
        dom.value = data[key];
        DispatchMouseEvent(dom, 'click');
      } else {
        let dom: any = queryFirstIframeEle(iframe, element);
        dom.value = data[key];
        DispatchEvent(dom, 'change');
      }
    }
  }
  if (type === 'column') {
    let inputList = data[key];
    let btnElement = '#addIpButton';
    let addBtn: any = queryFirstIframeEle(iframe, btnElement);
    addBtn?.click();
    for (let i = 0; i < inputList.length; i++) {
      let resInput = element + ' div:nth-child(' + (i + 1) + ') ul .formLiWidth8 input';
      let view: any = queryFirstIframeEleAll(iframe, resInput);
      view[0].value = inputList[i].webIpBegin;
      view[1].value = inputList[i]?.webIpEnd || inputList[i].webIpBegin;
      DispatchEvent(view[0], 'focus');
      DispatchEvent(view[1], 'focus');
      if (i < inputList.length - 1) {
        addBtn.click();
      }
    }
    setTimeout(() => {
      let inputDiv = queryFirstIframeEle(iframe, '#ipScopeDiv>div:last-child');
      let input: any = queryFirstIframeEle(iframe, '#ipScopeDiv>div:last-child .formInputWidth');
      if (!input?.value) {
        inputDiv?.remove();
      }
    }, 1200);
  }
  // 延时等待请求填充数据处理
  if (
    type === 'select' ||
    (type === 'input' && custom === 'date') ||
    type === 'radio' ||
    type === 'upload' ||
    (type === 'checkout' && custom === 'upload')
  ) {
    let duration = 800;
    if (type === 'input' && custom === 'date') {
      duration = 800;
    }
    if (type === 'checkout') {
      let num = data[key].length;
      duration = num * 800;
    }
    if (type === 'checkout' && custom === 'upload') {
      let num = data[key].length;
      duration = num * 2500;
    }
    if (type === 'upload') {
      duration = 2500;
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

const addStepSecondDataFile = (info: any) => {
  let contentEl = '#wsManageContentDiv' + info.approval_type;
  let manager = secondStepElementQuery(contentEl);
  // 设置input值
  let input: any = queryFirstIframeEle(manager, 'ul li input:first-child');
  input.value = info['approval_num'];
  DispatchEvent(input, 'focus');
  // 设置资源文件
  currentUploadFile({
    data: info.img_data,
    type: SET_THIRD_STEP_UPLOAD,
    info,
    manager,
    contentEl,
  });
};
const getFileNameFromUrl = (url: string) => {
  const path = new URL(url).pathname;
  return path.substring(path.lastIndexOf('/') + 1);
};

// 资源预览
export const setThreeResultFirstUpload = ({ file, element }: any) => {
  let iframe = thirdStepElementQuery('#modalFormBody');
  let ulDom: any = queryFirstIframeEle(iframe, element);
  let imgInput: any = queryFirstIframeEle(iframe, element + ' input:nth-child(3)');
  let preElement: any = queryFirstIframeEle(iframe, element + ' img');
  const dataTransfer = new DataTransfer();
  if (file) {
    dataTransfer.items.add(file);
  }
  imgInput.files = dataTransfer.files;
  ulDom.style.display = 'flex';
  checkImage(imgInput, preElement);
};

// 第三步资源文件填入
export const setThreeResultSecondUpload = ({ file, element, key }: any) => {
  let iframe = thirdStepElementQuery('#modalFormBody');
  let typeName = key.split('Ul')[0];
  const thatFileUl: any = queryFirstIframeEle(iframe, element);
  const id = typeName + new Date().getTime();
  let htmlStr: string = '';
  htmlStr +=
    '<li class="picLiHide" style="margin-right: 20px; position: relative; height: 105px;">';
  htmlStr +=
    '<input id=' +
    id +
    ' onchange="otherJpgPreviewApprove(this);" type="file" accept=".jpg" value="">';
  htmlStr +=
    '<img alt="附件" onclick="transformImg(this)" style="width: 100px; height: 100px" class="" src="" >';
  htmlStr +=
    '<input type="button" value="X" class="fileDel_button" style="margin-top:0px;" onclick=\'javascript:$(this.parentNode).remove();\'>';
  htmlStr += '</li>';
  thatFileUl.insertAdjacentHTML('beforeend', htmlStr);
  let iframeNow = thirdStepElementQuery('#modalFormBody');
  let input: any = queryFirstIframeEle(iframeNow, '#' + id);
  let imgEl = element + ' .picLiHide img';
  let image: any = queryFirstIframeEle(iframeNow, imgEl);
  const dataTransfer = new DataTransfer();

  if (file) {
    dataTransfer.items.add(file);
  }
  input.files = dataTransfer.files;
  checkImage(input, image, element, (e) => {
    let imgEl = element + ' .picLiHide';
    let iframeAfter = thirdStepElementQuery('#modalFormBody');
    let domLi: any = queryFirstIframeEle(iframeAfter, imgEl);
    domLi.className = 'picLiShow';
  });
};

// 图片预览
export const setThreeResultThirdUpload = ({ file, info, manager, contentEl }: any) => {
  let elementId = '#wsManageContentfileUl' + info.approval_type;
  let ul: any = queryFirstIframeEle(manager, elementId);
  let num = Math.floor(Math.random() * 10000000 + 1);
  let htmlStr = '<li class="input preLi" style="background: white;">';
  htmlStr +=
    '<input onchange="jpgPreviewApprove(this);" onblur="closethis(\'unitpicName\')" name="icpApprovalVOList.file" id="annexFile' +
    num +
    '" type="file" />';
  htmlStr +=
    '<img src="" alt="附件" onclick="transformImg(this)" style="width: 100px; height: 100px">';
  htmlStr +=
    '<input type="button" value="X" style="margin-left: 4px;" class="fileDel_button" onclick=\'javascript:$(this.parentNode).remove();updateLiColor("modalFormDiv");\'  />';
  htmlStr +=
    '<input name="icpApprovalVOList.fileName" id="nameannexFile' + num + '" type="hidden"/>';
  htmlStr +=
    '<input name="icpApprovalVOList.approvalnumber" id="approvalnumberannexFile' +
    num +
    '" type="hidden"/>';
  htmlStr +=
    '<input name="icpApprovalVOList.managecontentidVo" id="managecontentidVoannexFile' +
    num +
    '" type="hidden"/></li>';

  ul.insertAdjacentHTML('beforeend', htmlStr);

  let previewDiv = secondStepElementQuery(contentEl);
  let inputFile: any = queryFirstIframeEle(previewDiv, elementId + ' li input:first-child');
  let imgFile: any = queryFirstIframeEle(previewDiv, elementId + ' li img');
  const dataTransfer = new DataTransfer();
  if (file) {
    dataTransfer.items.add(file);
  }
  console.log(dataTransfer.files, file, '当前渲染ID ');
  inputFile.files = dataTransfer.files;
  checkImage(inputFile, imgFile);
};

const currentUploadFile = ({ data, element, type, key, info, manager, contentEl }: any) => {
  loadImageFile(data).then((res: any) => {
    if (type === SET_FIRST_STEP_UPLOAD) {
      setThreeResultFirstUpload({
        file: res,
        element,
      });
    } else if (type === SET_SECOND_STEP_UPLOAD) {
      setThreeResultSecondUpload({
        file: res,
        element,
        key,
      });
    } else if (type === SET_THIRD_STEP_UPLOAD) {
      setThreeResultThirdUpload({
        file: res,
        info,
        manager,
        contentEl,
      });
    }
  });
};

const loadImageFile = (data: any) => {
  return new Promise((resolve) => {
    const fileName = getFileNameFromUrl(data.show_min_src);
    const file = base64ToFile(data.show_src, fileName);
    resolve(file);
  });
};
const checkImage = (input: any, preview: any, element?: string, callback?: (e: string) => void) => {
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    preview.src = reader.result;
  };
  reader.readAsDataURL(file);
  if (element && callback) {
    callback(element);
  }
};

export const finalElementQuery = (str: string): ElementType => {
  let aIframe: any = document.getElementById('docs-CONSOLE.BAGL.DWBBIframe');
  let bIframe: any = aIframe.contentDocument
    .querySelector('body')
    .querySelector('#commonMainBodyTab #commonMainBodyTab1 #commonMainBodyForm ');
  return bIframe?.querySelector(str);
};
export const finalElementQueryFromBody = (str: string): ElementType => {
  let aIframe: any = document.getElementById('docs-CONSOLE.BAGL.DWBBIframe');
  let bIframe: any = aIframe.contentDocument;
  return bIframe?.querySelector(str);
};
export const finalElementQueryFilesBody = (str: string): ElementType => {
  let aIframe: any = document.getElementById('docs-CONSOLE.BAGL.BAHSIframe');
  let bIframe: any = aIframe.contentDocument;
  return bIframe?.querySelector(str);
};

let site_input_list = [
  { key: 'name' },
  { key: 'domain' },
  { key: 'first_page_url' },
  // { key: 'cert_validity_end' },
  { key: 'ip_address' },
];
let checkout_list = [
  { key: 'language_type' },
  { key: 'content_type' },
  { key: 'server_type' },
  { key: 'connect_mode' },
  { key: 'server_address' },
];
let upload_list = [{ key: 'approval_list' }];
export const setWriteOldDataSecond = (res: any, num: any) => {
  const { web_site } = res;
  let data = web_site[num];
  setInputVal(
    {
      iframeId: '#commonMainBodyWebSiteForm',
      list: OLD_THIRD_STEP,
      data: data,
      json: site_input_list,
      index: 0,
    },
    () => {
      setCheckoutVal(
        {
          iframeId: '#commonMainBodyWebSiteForm',
          list: OLD_THIRD_CHECK_STEP,
          data: data,
          json: checkout_list,
          index: 0,
        },
        () => {
          setUploadVal(
            {
              iframeId: '#commonMainBodyWebSiteForm',
              list: OLD_THIRD_UPLOAD_STEP,
              data: data.approval_list,
              json: upload_list,
              index: 0,
            },
            () => {
              console.log('执行完毕');
            }
          );
        }
      );
    }
  );
};

let select_list = [
  { key: 'unit_property_show' },
  { key: 'unit_province_show' },
  { key: 'unit_cert_type_show' },
  { key: 'unit_city_show' },
  { key: 'unit_county_show' },
];
let input_list = [
  { key: 'unit_name' },
  { key: 'unit_cert_num' },
  { key: 'unit_contact_address' },
  { key: 'unit_superior' },
  { key: 'unit_cert_address' },
];
let pri_select_list = [{ key: 'cert_type_show' }];
let pri_input_list = [
  { key: 'name' },
  { key: 'mobile_phone' },
  { key: 'cert_num' },
  { key: 'tel' },
  { key: 'cert_validity_start' },
  { key: 'cert_validity_end' },
  { key: 'emergency_tel' },
  { key: 'instant_msg_account' },
  { key: 'email' },
  { key: 'remark' },
];

export const setWriteOldData = (data: any) => {
  setSelectVal(
    {
      iframeId: '#ext-comp-1024',
      list: OLD_FIRST_STEP,
      data: data.basic,
      json: select_list,
      index: 0,
    },
    (json: any) => {
      select_list = json;
      setInputVal(
        {
          iframeId: '#ext-comp-1024',
          list: OLD_FIRST_STEP,
          data: data.basic,
          json: input_list,
          index: 0,
        },
        () => {
          setSelectVal(
            {
              iframeId: '#ext-comp-1046',
              list: OLD_SECOND_STEP,
              data: data.principal_data,
              json: pri_select_list,
              index: 0,
            },
            (json: any) => {
              pri_select_list = json;
              setInputVal(
                {
                  iframeId: '#ext-comp-1046',
                  list: OLD_SECOND_STEP,
                  data: data.principal_data,
                  json: pri_input_list,
                  index: 0,
                },
                () => {}
              );
            }
          );
        }
      );
    }
  );
};

const getFileIndex = (img: any) => {
  let val = img.img_type;
  if (val == 1) return 0;
  if (val == 2) return 2;
  if (val == 3) return 1;
  if (val == 5) return 0;
  if (val == 6) return 3;
  if (val == 7) return 1;
  if (val == 8) return 2;
  if (val == 9) return 4;
};
export const setWriteOldMainFile = (res: any) => {
  const { basic, principal_data } = res;
  let list = [];
  if (basic?.img_cert) {
    list.push({ ind: getFileIndex(basic.img_cert), val: basic.img_cert });
  }
  if (principal_data?.img_cert) {
    list.push({ ind: getFileIndex(principal_data.img_cert), val: principal_data.img_cert });
  }
  if (basic?.img_supp) {
    list.push({ ind: getFileIndex(basic.img_supp), val: basic.img_supp });
  }
  setUploadFile({ data: list, index: 0 }, () => {});
};
let elList: any = {};
export const setWriteOldWebFile = (res: any, num: any) => {
  elList = {};
  const { web_site } = res;
  let list = [];
  for (let i = 0; i < web_site.length; i++) {
    let arr = [];
    let obj = web_site[i];
    let pObj = web_site[i].principal_data;
    arr.push({ ind: getFileIndex(obj.img_cert), val: obj.img_cert });
    arr.push({ ind: getFileIndex(obj.img_supp), val: obj.img_supp });
    arr.push({ ind: getFileIndex(pObj.img_cert), val: pObj.img_cert });
    arr.push({ ind: getFileIndex(pObj.img_photo), val: pObj.img_photo });
    arr.push({ ind: getFileIndex(obj.img_promise), val: obj.img_promise });
    list.push(arr);
  }
  setUploadFile({ data: list[num], index: 0 }, () => {});
};

const setSelectVal = ({ iframeId, list, data, json, index }: any, callback: any) => {
  let jsonObj = json;
  if (index >= jsonObj.length) {
    callback(jsonObj);
    return;
  }
  let iframe: any = finalElementQuery(iframeId);
  let key = jsonObj[index].key;
  let fInput = queryFirstIframeEle(iframe, list[key]);
  DispatchMouseEvent(fInput, 'click');
  setTimeout(() => {
    let views: any;
    if (jsonObj[index].eId) {
      views = finalElementQueryFromBody('body #' + jsonObj[index].eId);
    } else {
      views = finalElementQueryFromBody('body .x-combo-list:last-child');
      jsonObj[index].eId = views.id;
    }
    let itemEl = '.x-combo-list-inner .x-combo-list-item';
    let items: any = queryFirstIframeEleAll(views, itemEl);
    for (let item of items) {
      if (item.textContent === data[key]) {
        DispatchMouseEvent(item, 'click');
        setTimeout(() => {
          setSelectVal(
            {
              iframeId,
              list,
              data,
              json: jsonObj,
              index: index + 1,
            },
            callback
          );
        }, 200);
      }
    }
  }, 1200);
};
const setInputVal = ({ iframeId, list, data, json, index }: any, callback: any) => {
  if (index >= json.length) {
    callback();
    return;
  }
  let iframe: any = finalElementQueryFromBody(iframeId);
  let key = json[index].key;
  let fInput: any = queryFirstIframeEle(iframe, list[key]);
  fInput.value = data[key];
  DispatchEvent(fInput, 'focus');
  setTimeout(() => {
    setInputVal(
      {
        iframeId,
        list,
        data,
        json,
        index: index + 1,
      },
      callback
    );
  }, 300);
};
const setCheckoutVal = ({ iframeId, list, data, json, index }: any, callback: any) => {
  if (index >= json.length) {
    callback();
    return;
  }
  let iframe: any = finalElementQueryFromBody(iframeId);
  let key = json[index].key;
  let checkView: any = queryFirstIframeEle(iframe, list[key]);
  let checks: any = queryFirstIframeEleAll(checkView, '.x-form-check-wrap input');
  let values = data[key].split(',');
  for (let item of checks) {
    if (values.includes(item.value)) {
      item.click();
    }
  }
  setTimeout(() => {
    setCheckoutVal(
      {
        iframeId,
        list,
        data,
        json,
        index: index + 1,
      },
      callback
    );
  }, 200);
};
const setUploadVal = ({ iframeId, list, data, json, index }: any, callback: any) => {
  if (index >= json.length) {
    callback();
    return;
  }
  let iframe: any = finalElementQueryFromBody(iframeId);
  let key = json[index].key;
  let view: any = queryFirstIframeEle(iframe, list[key]);
  let inputView: any = queryFirstIframeEleAll(
    view,
    '.x-column-inner .x-column .x-panel-bwrap>.x-panel-body>.x-column-inner'
  );
  setOldUpload({ list: inputView, data, num: 0 }, () => {});
};
const setOldUpload = ({ list, data, num }: any, callback: any) => {
  if (num >= data.length) {
    callback();
    return;
  }
  let bool = false;
  for (let item of list) {
    let input: any = queryFirstIframeEle(
      item,
      '.x-panel>.x-panel-bwrap>.x-panel-body>.x-form-check-wrap>input'
    );
    let btn: any = queryFirstIframeEle(item, '.x-panel>.x-panel-bwrap>.x-panel-body>table');
    if (data[num].approval_type == input?.value) {
      bool = true;
      btn.click();
      setTimeout(() => {
        chooseImage({ el: '#importDataWin', data: data[num] }, () => {
          setOldUpload({ list, data, num: num + 1 }, callback);
        });
      }, 400);
    }
  }
  if (!bool) {
    setOldUpload({ list, data, num: num + 1 }, callback);
  }
};
const chooseImage = ({ el, data }: any, callback: any) => {
  let element = finalElementQueryFromBody(el);
  let input: any = queryFirstIframeEle(element, '#x-form-el-approveNumber input');
  input.value = data.approval_num;
  let upload: any = queryFirstIframeEle(element, '#uploadForm0 .x-form-element .x-form-file');
  let fileData = data.img_data;
  if (!fileData?.show_src) {
    callback();
    return;
  }
  loadImageFile(fileData).then((res: any) => {
    const dataTransfer = new DataTransfer();

    if (res) {
      dataTransfer.items.add(res);
    }
    upload.files = dataTransfer.files;

    DispatchEvent(upload, 'change');
    setTimeout(() => {
      let confirmBtn: any = queryFirstIframeEle(
        element,
        '.x-window-bwrap .x-window-bl .x-window-footer .x-panel-btns table tr .x-panel-btn-td table'
      );
      confirmBtn.click();
      callback();
    }, 400);
  });
};
const setUploadFile = ({ data, index, elements }: any, callback: any) => {
  if (index >= data.length) {
    callback();
    return;
  }
  let dataItem = data[index];
  let iframe = finalElementQueryFilesBody('#ICP-Upload-picture-window #ICP-Upload-picture-form');
  let btnView: any = queryFirstIframeEle(
    iframe,
    '.x-form>.x-form-item:nth-child(3) .x-form-element .x-form-field-wrap img'
  );
  btnView.click();
  setTimeout(() => {
    let mainElement = '.x-combo-list:last-child';
    let mainViews: any;
    if (elList?.mainId) {
      mainViews = finalElementQueryFilesBody('body #' + elList.mainId);
    } else {
      mainViews = finalElementQueryFilesBody('body ' + mainElement);
    }
    elList.mainId = mainViews.id;
    let mainList: any = queryFirstIframeEleAll(mainViews, '.x-combo-list-inner .x-combo-list-item');
    if (mainList) {
      mainList[index].click();
    }
    setTimeout(() => {
      let fileTypeView: any = queryFirstIframeEle(
        iframe,
        '.x-form>.x-form-item:nth-child(4) .x-form-element .x-form-field-wrap img'
      );
      fileTypeView.click();
      let mainElement = '.x-combo-list:last-child';
      let typeViews: any;
      if (elList?.typeId) {
        typeViews = finalElementQueryFilesBody('body #' + elList.typeId);
      } else {
        typeViews = finalElementQueryFilesBody('body ' + mainElement);
      }
      let typeList: any = queryFirstIframeEleAll(
        typeViews,
        '.x-combo-list-inner .x-combo-list-item'
      );
      elList.typeId = typeViews.id;
      if (typeList) {
        typeList[0].click();
      }

      let fileView = queryFirstIframeEle(
        iframe,
        '.x-form>.x-form-item:nth-child(5) .x-form-element input'
      );
      console.log(elList, 'elList', dataItem);
      chooseFileImage({ upload: fileView, data: dataItem.val }, () => {
        setUploadFile({ data: data, index: index + 1, elements: elList }, callback);
      });
    }, 1000);
  }, 900);
};
const chooseFileImage = ({ upload, data }: any, callback: any) => {
  if (!data) {
    callback();
    return;
  }
  loadImageFile(data).then((res: any) => {
    const dataTransfer = new DataTransfer();
    if (res) {
      dataTransfer.items.add(res);
    }
    upload.files = dataTransfer.files;

    DispatchEvent(upload, 'change');
    let uploadConfirm =
      '#ICP-Upload-picture-window .x-window-bwrap .x-window-bl .x-panel-btns table tr table';
    let confirm: any = finalElementQueryFilesBody(uploadConfirm);
    confirm.click();
    let dialogEl = '.x-window-dlg .x-window-bwrap .x-panel-btns table tr table';
    setTimeout(() => {
      let dialog: any = finalElementQueryFilesBody(dialogEl);
      dialog.click();
      setTimeout(() => {
        callback();
      }, 500);
    }, 1500);
  });
};
