import { createContentView } from '@/pages/content/component/FilingDataTools';
import {
  EXECUTE_SCRIPT,
  GET_DATA_NEW_JUMP,
  GET_DATA_OLD_JUMP,
  OPEN_MOUSE_LISTENER,
  POLICE_MAIN_DATA, POLICE_WEB_DATA,
  SET_FINAL_OLD_DATA,
  SET_FINAL_OLD_DATA_SECOND,
  SET_FINAL_OLD_MAIN_FILE,
  SET_FINAL_OLD_WEB_FILE,
  SET_FINAL_STEP_DATA,
  SET_FIRST_STEP_DATA,
  SET_SECOND_STEP_DATA,
  SETTING_LIST_DATA,
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
import { getMapValue, getPowerToTwo, queryEleAll } from '@/pages/content/tools';
import { createDataForServices } from '@/pages/content/messageStore';
import { RegGsxtConfig } from '@/pages/content/component/ListSortingTool';
import { setPoliceMainData, setPoliceWebData } from '@/pages/content/component/PoliceDataTool';
import { PropertyMap, ProMap, CertMap, UserMap } from '@/common/element';
chrome.runtime.onMessage.addListener(
  (
    request: MessageEventType,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response: string) => void
  ) => {
    if (document.readyState !== 'complete') return;
    if (request?.msg === SETTING_LISTENER_SCREEN) {
      settingListenerScreen();
      return;
    }
    if (request?.msg === OPEN_MOUSE_LISTENER) {
      createContentView(request.data);
      return;
    }
    if (request?.msg === SET_FIRST_STEP_DATA) {
      let data = getStepData(request.data, 1);
      setFirstStepData(data);
      return;
    }
    if (request?.msg === SET_SECOND_STEP_DATA) {
      let data = getStepData(request.data, 2);
      setSecondStepData(data, request.num);
      return;
    }
    if (request?.msg === SET_FINAL_STEP_DATA) {
      let data = getStepData(request.data, 3);
      setThreeStepData(data);
      return;
    }
    if (request?.msg === SET_FINAL_OLD_DATA) {
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
    if (request?.msg === SETTING_LIST_DATA) {
      RegGsxtConfig();
      return;
    }
    if (request?.msg === POLICE_MAIN_DATA) {
      let data = getPoliceData(request.data, 1);
      setPoliceMainData(data);
      return;
    }
    if (request?.msg === POLICE_WEB_DATA) {
      let data = getPoliceData(request.data, 2);
      setPoliceWebData(data);
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
const getPoliceData = (res: any, num: number) => {
  const { basic, principal_data, web_site } = res;
  // 备案主体
  if (num === 1) {
    let data: any = {};
    data['main_info'] = {
      unitpty: basic.unit_property==5?'个人':'单位',
      unitpty_sub: getMapValue(basic.unit_property, ProMap),
    };
    data['company_info'] = {
      form_item_unitnm: basic.unit_name,
      form_item_uitcfttype: getMapValue(basic.unit_cert_type, CertMap),
      form_item_uitcftnum: basic.unit_cert_num,
      form_item_uitcftid: basic.img_cert.show_src,
      form_item_uitadrstr: basic.unit_cert_address,
      form_item_uitregadrstr: basic.unit_contact_address,
      form_item_lglnm: principal_data.name,
    }
    data['person_info'] = {
      form_item_rpbnm: principal_data.name,
      form_item_rpbcfttype: getMapValue(principal_data.cert_type, UserMap),
      form_item_rpbcftnum: principal_data.cert_num,
      form_item_idecardvalid: principal_data.cert_validity_end,
      form_item_isLongValid: principal_data.is_long_term,
      form_item_rpbmobile: principal_data.mobile_phone,
      form_item_offtel: principal_data.tel,
      form_item_rpbmail: principal_data.email,
      form_item_idecardfrontid: principal_data.img_cert.show_src,
      form_item_idecardbackid: principal_data.img_photo.show_src,
      form_item_idecardgroupid: principal_data.img_cert.show_src,
    }
    console.log(data, 'result');
    return data;
  }
}
const getStepData = (res: any, num: number) => {
  const { basic, principal_data, web_site } = res;
  // 备案主体
  if (num === 1) {
    let data: any = {};
    data['main_unit'] = {
      form_item_unitnm: basic.unit_name,
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
    console.log(data, '最终数据1');
    return data;
  }
  // 网站业务
  if (num === 2) {
    let data: any = [];
    for (let item of web_site) {
      let obj: any = {};
      let language = item.language_type.split(',').map((item: any) => {
        return getPowerToTwo(item);
      });
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
      for (let ips of arr) {
        let ipList = ips.split('-');
        arrRes.push({
          webIpBegin: ipList[0],
          webIpEnd: ipList[1],
        });
      }
      obj['basic_info_icp'] = {
        websiteconnenctmodeVODiv: item.connect_mode,
        ipScopeDiv: arrRes,
        serveraddressDiv: item.server_address,
      };
      data.push(obj);
    }
    console.log(data, '最终数据2');
    return data;
  }
};

const getAttributeData = (dom: any, key: string) => {
  return dom.getAttribute(key);
};

const addEventClickList = (element: any, type: string, msg: string) => {
  for (let item of element) {
    item.removeEventListener('click', (e: any) => {});
    let id = getAttributeData(item, 'data-batools_id');
    let type = getAttributeData(item, 'data-batools_type');
    let baseUrl = getAttributeData(item, 'data-url');
    if (type == '1') {
      item.addEventListener('click', () => {
        createDataForServices(msg, baseUrl, id);
      });
    }
  }
};

const settingListenerScreen = () => {
  const element_site1: any = queryEleAll('.jump_site_1');
  if (element_site1.length <= 0) return;
  addEventClickList(element_site1, '1', GET_DATA_NEW_JUMP);

  const element_site2: any = queryEleAll('.jump_site_2');
  if (element_site2.length <= 0) return;
  addEventClickList(element_site2, '2', GET_DATA_OLD_JUMP);
};
chrome.runtime.sendMessage({ type: EXECUTE_SCRIPT }).then((res) => {
  console.log('info-res------------------>');
  console.log(res);
  console.log('info-res------------------>');
});
export {};
