import {
  createContentView,
  CreateOldDataList,
  CreateStepThreeDataStep,
  CreateStepTwoDataStep,
} from '@/pages/content/component/FloatView';
import {
  GET_DATA_NEW_JUMP,
  GET_DATA_OLD_JUMP,
  OPEN_MOUSE_LISTENER,
  SET_FINAL_OLD_DATA,
  SET_FINAL_OLD_DATA_SECOND,
  SET_FINAL_OLD_MAIN_FILE,
  SET_FINAL_OLD_WEB_FILE,
  SET_FINAL_STEP_DATA,
  SET_FIRST_STEP_DATA,
  SET_SECOND_STEP_DATA,
  SETTING_LISTENER_SCREEN,
} from '@/common/agreement';
import { MessageEventType } from '@/pages/types';
import {
  setFirstStepData,
  setSecondStepData,
  setThreeStepData,
  setWriteOldData,
  setWriteOldDataSecond,
  setWriteOldMainFile,
  setWriteOldWebFile,
} from '@/pages/content/output';
import { getPowerToTwo, queryEleAll } from '@/pages/content/tools';
import { createDataForServices } from '@/pages/content/messageStore';
chrome.runtime.onMessage.addListener(
  (
    request: MessageEventType,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response: string) => void
  ) => {
    console.log(request, '页面的变化');
    if (document.readyState !== 'complete') return;
    if (request?.msg === OPEN_MOUSE_LISTENER) {
      createContentView(request.data);
      return;
    }
    if (request?.msg === SET_FIRST_STEP_DATA) {
      let data = getStepData(request.data, 1);
      CreateStepTwoDataStep(request.data.web_site);
      setFirstStepData(data);
      return;
    }
    if (request?.msg === SET_SECOND_STEP_DATA) {
      let data = getStepData(request.data, 2);
      CreateStepThreeDataStep();
      setSecondStepData(data, request.num);
      return;
    }
    if (request?.msg === SET_FINAL_STEP_DATA) {
      let data = getStepData(request.data, 3);
      setThreeStepData(data);
      return;
    }
    if (request?.msg === SET_FINAL_OLD_DATA) {
      CreateOldDataList(request.data);
      setWriteOldData(request.data);
      return;
    }
    if (request?.msg === SET_FINAL_OLD_DATA_SECOND) {
      setWriteOldDataSecond(request.data, request.num);
      return;
    }
    if (request?.msg === SET_FINAL_OLD_MAIN_FILE) {
      setWriteOldMainFile(request.data);
      return;
    }
    if (request?.msg === SET_FINAL_OLD_WEB_FILE) {
      setWriteOldWebFile(request.data, request.num);
      return;
    }
    if (request?.msg === SETTING_LISTENER_SCREEN) {
      settingListenerScreen();
      return;
    }

    sendResponse('received');
    if (process.env.NODE_ENV === 'development') {
      if (request.type === 'window.location.reload') {
        console.log('current page will reload.');
        window.location.reload();
      }
    }
  }
);
const getStepData = (res: any, num: number) => {
  const { basic, principal_data, web_site } = res;
  // 第一步表单数据
  if (num === 1) {
    let data: any = {};
    data['main_unit'] = {
      unitname: basic.unit_name,
      unitpropertyId: basic.unit_property,
      unitprovinceID: basic.unit_province,
      unitcityID: basic.unit_city,
      unitcountyID: basic.unit_county,
      unitcertificatetypeId: basic.unit_cert_type,
      unitcertificatenum: basic.unit_cert_num,
      unitaddress: basic.unit_contact_address,
      certificateaddress: basic.unit_cert_address,
      unitsuperior: basic.unit_superior,
    };
    data['main_unit_admin'] = {
      unitprincipalcertificatetypeId: principal_data.cert_type,
      unitprincipalcertificatenum: principal_data.cert_num,
      isLongTerm: principal_data.is_long_term,
      certificateValidityStart: principal_data.cert_validity_start,
      certificateValidityEnd: principal_data.cert_validity_end,
      unitprincipalname: principal_data.name,
      unitprincipalmobilephone: principal_data.mobile_phone,
      unitprincipaltel: principal_data.tel,
      unitprincipalemergencytel: principal_data.emergency_tel,
      unitprincipalemail: principal_data.email,
      instantmessageid: principal_data.instant_msg_type,
      instantmessageaccount: principal_data.instant_msg_account,
      remark: principal_data.remark,
    };
    return data;
  }
  // 第二步表单数据
  if (num === 2) {
    let data: any = [];
    for (let item of web_site) {
      let obj: any = {};
      let language = item.language_type.split(',').map((item: any) => {
        return getPowerToTwo(item);
      });
      console.log(item.approval_list);
      obj['basic_info'] = {
        serverType: item.server_type,
        websitename: item.name,
        domainName: item.domain,
        websitefirstpageurl: item.first_page_url,
        websiteservicecontentDiv: item.content_type,
        languageDiv: language?.toString() || '',
        approvalContent: item.approval_list,
      };
      let principal = item.principal_data;
      obj['basic_info_admin'] = {
        websiteprincipalcertificatetypeVO: principal.cert_type,
        websiteprincipalcertificatenum: principal.cert_num,
        isLongTermUl: principal.is_long_term,
        certificateValidityStart: principal.cert_validity_start,
        certificateValidityEnd: principal.cert_validity_end,
        websiteprincipalname: principal.name,
        websiteprincipalmobilephone: principal.mobile_phone,
        websiteprincipaltel: principal.tel,
        websiteprincipalemergencytel: principal.emergency_tel,
        websiteprincipalemail: principal.email,
        webinstantmessageid: principal.instant_msg_type,
        instantmessageaccount: principal.instant_msg_account,
        remark: principal.remark,
      };
      let arr = item.ip_address.split(';');
      let arrRes: any = [];
      arr.map((ips: any) => {
        let ipList = ips.split('-');
        arrRes.push({
          webIpBegin: ipList[0],
          webIpEnd: ipList[1],
        });
      });
      obj['basic_info_icp'] = {
        websiteconnenctmodeVODiv: item.connect_mode,
        ipScopeDiv: arrRes,
        serveraddressDiv: item.server_address,
      };
      data.push(obj);
    }
    return data;
  }
  // 第三步表单数据
  if (num === 3) {
    let data: any = {};
    let img_cert: any = []; // 网站核验单扫描件
    let img_supp: any = []; // 网站补充材料
    let img_main_cert: any = []; // 网站补充材料
    let img_main_photo: any = [];
    web_site.map((file: any) => {
      if (file.img_cert?.show_src) {
        img_cert.push(file.img_cert?.show_src);
      }
      if (file.img_supp?.show_src) {
        img_supp.push(file.img_supp?.show_src);
      }
      if (file.principal_data?.img_cert?.show_src) {
        img_main_cert.push(file.principal_data?.img_cert?.show_src);
      }
      if (file.principal_data?.img_cert?.show_src) {
        img_main_photo.push(file.principal_data?.img_photo?.show_src);
      }
    });
    data['web_side_id_card_p1'] = {
      mainOtherPicUl: [basic.img_cert.show_src],
      webOtherPicUl: img_supp,
      unitpic0ul: [basic.img_cert.show_src],
      identitypic0ul: [principal_data.img_cert.show_src],
      verificationpic0ul: img_cert,
      websidechiefpic0ul: img_main_photo,
      websideidentitycardpic0ul: img_main_cert,
    };
    return data;
  }
};

const getAttributeData = (dom: any, key: string) => {
  return dom.getAttribute(key);
};
const settingListenerScreen = () => {
  const element_site1: any = queryEleAll('.jump_site_1');
  if (element_site1.length <= 0) return;
  for (let item of element_site1) {
    let id = getAttributeData(item, 'data-batools_id');
    let type = getAttributeData(item, 'data-batools_type');
    let baseUrl = getAttributeData(item, 'data-url');
    if (type === '1') {
      item?.removeEventListener('click', () => {});
      item.addEventListener('click', (e: any) => {
        e.preventDefault();
        createDataForServices(GET_DATA_NEW_JUMP, baseUrl, id);
      });
    }
  }
  const element_site2: any = queryEleAll('.jump_site_2');
  if (element_site2.length <= 0) return;
  for (let item of element_site2) {
    let id = getAttributeData(item, 'data-batools_id');
    let type = getAttributeData(item, 'data-batools_type');
    let baseUrl = getAttributeData(item, 'data-url');
    if (type === '2') {
      item?.removeEventListener('click', () => {});
      item.addEventListener('click', (e: any) => {
        e.preventDefault();
        createDataForServices(GET_DATA_OLD_JUMP, baseUrl, id);
      });
    }
  }
};

export {};
