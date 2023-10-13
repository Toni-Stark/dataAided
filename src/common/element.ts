// export let iframe = document.querySelector('#TB_iframeContent').contentDocument;
// let select = iframe.querySelectorAll('.formInputWidth')[1];
// let options = select.querySelector('option');
// console.log(options);

export const stepOneData = {
  main_unit: {
    unitname: '单位名称',
    // branchid: '2',
    unitpropertyId: '3',
    unitprovinceID: '110000',
    unitcityID: '110100',
    unitcountyID: '110105',
    unitcertificatetypeId: '3',
    unitcertificatenum: '2023',
    unitaddress: '主办单位通信地址',
    certificateaddress: '证件住所',
    unitsuperior: '投资者或上级单位主管名称',
  },
  main_unit_admin: {
    unitprincipalcertificatetypeId: '2',
    unitprincipalcertificatenum: '500229200109218555',
    isLongTerm: '1',
    certificateValidityStart: '2023-5-18',
    certificateValidityEnd: '2023-8-20',
    unitprincipalname: '姓名',
    unitprincipalmobilephone: '16623057548',
    unitprincipaltel: '16623057545',
    unitprincipalemergencytel: '15502354554',
    unitprincipalemail: '15502354554@163.com',
    instantmessageid: '2',
    instantmessageaccount: '2225445688',
    remark: '备注信息',
  },
};

export const stepTwoData = {
  basic_info: {
    serverType: '1',
    websitename: '哔哩哔哩',
    domainName: 'baidu.com',
    websitefirstpageurl: 'www.baidu.com',
    websiteservicecontentDiv: '1,8,32,64',
    languageDiv: '3,6,8',
  },
  basic_info_admin: {
    websiteprincipalcertificatetypeVO: '2',
    websiteprincipalcertificatenum: '500229200109218555',
    isLongTermUl: '1',
    certificateValidityStart: '2023-5-18',
    certificateValidityEnd: '2023-8-20',
    websiteprincipalname: '姓名',
    websiteprincipalmobilephone: '16623057548',
    websiteprincipaltel: '16623057545',
    websiteprincipalemergencytel: '15502354554',
    websiteprincipalemail: '15502354554@163.com',
    webinstantmessageid: '2',
    instantmessageaccount: '2225445688',
    remark: '备注信息',
  },
  basic_info_icp: {
    websiteconnenctmodeVODiv: '1,4,16',
    webIpBegin: '116.177.253.34',
    webIpEnd: '116.177.253.34',
    serveraddressDiv: '32,128,65536,4194304,134217728',
  },
};
//
// const secondStepElementQuery = (str) => {
//   let aIframe = document.querySelector('#TB_iframeContent');
//   console.log(1, aIframe);
//   let bIframe = aIframe.contentDocument
//     .querySelector('body')
//     .querySelector('#SecondStep #websideIframe');
//   console.log(2, bIframe);
//   let cIframe = bIframe.contentDocument.querySelector('body').querySelector('#websideIframe');
//   console.log(3, cIframe);
//   let dIframe = cIframe.contentDocument.querySelector('body #modalFormBody');
//   console.log(4, dIframe);
//   return dIframe?.querySelectorAll(str);
// };
// secondStepElementQuery('#modalFormDiv ul:nth-child(3) .formLiWidth3 #serverType');

export const stepThirdData = {
  main_unit: {
    unitname: '单位名称',
    // branchid: '2',
    unitpropertyId: '3',
    unitprovinceID: '110000',
    unitcityID: '110100',
    unitcountyID: '110105',
    unitcertificatetypeId: '3',
    unitcertificatenum: '2023',
    unitaddress: '主办单位通信地址',
    certificateaddress: '证件住所',
    unitsuperior: '投资者或上级单位主管名称',
  },
  main_unit_admin: {
    unitprincipalcertificatetypeId: '2',
    unitprincipalcertificatenum: '500229200109218555',
    isLongTerm: '1',
    certificateValidityStart: '2023-5-18',
    certificateValidityEnd: '2023-8-20',
    unitprincipalname: '姓名',
    unitprincipalmobilephone: '16623057548',
    unitprincipaltel: '16623057545',
    unitprincipalemergencytel: '15502354554',
    unitprincipalemail: '15502354554@163.com',
    instantmessageid: '2',
    instantmessageaccount: '2225445688',
    remark: '备注信息',
  },
};
// let files = document.querySelector('#unitpic0');
// const DispatchEvent = (dom, event) => {
//   let e = new Event(event);
//   dom?.dispatchEvent(e);
// };
// DispatchEvent(files, 'change');
