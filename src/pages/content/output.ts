import { getTime } from '@/pages/content/tools';
import { ElementType } from '@/pages/types';
import {
  SET_FIRST_STEP_UPLOAD,
  SET_SECOND_STEP_UPLOAD,
  SET_THIRD_STEP_UPLOAD,
} from '@/common/agreement';

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
  remark_input: '#remarkMode',
};
export const BASIC_INFO_ICP: any = {
  websiteconnenctmodeVODiv_checkout: '#websiteconnenctmodeVODiv ul .formLiWidth8 input',
  webIpBegin_input: '#ipScopeDiv #ipFirstDiv ul .formLiWidth8 #webIpBegin',
  webIpEnd_input: '#ipScopeDiv #ipFirstDiv ul .formLiWidth8 #webIpEnd',
  serveraddressDiv_checkout: '#serveraddressDiv ul .formLiWidth8 input',
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
export const setThreeStepData = (data: any) => {
  let iframe: any = thirdStepElementQuery('#modalFormBody');
  let web_side_id_card_p1 = getElementList(WEB_SIDE_ID_CARD_P1);
  recursiveExecution(
    {
      iframe,
      result: data,
      list: web_side_id_card_p1,
      data: data['web_side_id_card_p1'],
      index: 0,
    },
    setThreeBtnStepData
  );
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
  if (type === 'upload') {
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
    if (custom === 'upload') {
      let checkout: any = queryFirstIframeEleAll(iframe, element);
      let list: any = [];
      data[key].map((item: any) => {
        list.push(item.id);
      });
      for (let i of checkout) {
        if (list.includes(i.value)) {
          i.click();
          let val = data[key].find((item: any) => item.id === i.value);
          addStepSecondDataFile(val);
        }
      }
    } else {
      let checkout: any = queryFirstIframeEleAll(iframe, element);
      let reg_list = data[key].split(',');
      for (let i of checkout) {
        if (reg_list.includes(i.id)) {
          i.click();
        }
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
  if (
    type === 'select' ||
    (type === 'input' && custom === 'date') ||
    type === 'radio' ||
    type === 'upload' ||
    (type === 'checkout' && custom === 'upload')
  ) {
    let duration = 800;
    if (type === 'input' && custom === 'date') {
      duration = 1600;
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
  console.log(info);
  let contentEl = '#wsManageContentDiv' + info.id;
  let manager = secondStepElementQuery(contentEl);

  // 设置input值
  let input: any = queryFirstIframeEle(manager, 'ul li input:first-child');
  input.value = info['approval_num'];
  DispatchEvent(input, 'focus');
  // 设置资源文件
  currentUploadFile({
    data: info.img_data.show_src,
    type: SET_THIRD_STEP_UPLOAD,
    info,
    manager,
    contentEl,
  });
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

const getFileNameFromUrl = (url: string) => {
  const path = new URL(url).pathname;
  return path.substring(path.lastIndexOf('/') + 1);
};

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
export const setThreeResultThirdUpload = ({ file, info, manager, contentEl }: any) => {
  let elementId = '#wsManageContentfileUl' + info.id;
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

  // 设置图片
  let previewDiv = secondStepElementQuery(contentEl);
  let inputFile: any = queryFirstIframeEle(previewDiv, elementId + ' li input:first-child');
  let imgFile: any = queryFirstIframeEle(previewDiv, elementId + ' li img');
  const dataTransfer = new DataTransfer();
  if (file) {
    dataTransfer.items.add(file);
  }
  inputFile.files = dataTransfer.files;
  checkImage(inputFile, imgFile);
};

const currentUploadFile = ({ data, element, type, key, info, manager, contentEl }: any) => {
  loadImageFile(data).then((res: any) => {
    if (type == SET_FIRST_STEP_UPLOAD) {
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
const loadImageFile = (url: string) => {
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
