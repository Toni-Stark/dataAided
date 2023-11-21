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
    approvalContent: [
      {
        id: '2',
        basic_id: '2',
        website_id: '2',
        approval_type: '2', //审批类型：1新闻,2出版,4教育,8医疗保健,16药品和医疗器械,32电子公告服务,256文化,512广播电影电视节目,2048网络预约车,4096互联网金融,8192校外培训（高中及以下阶段）,16384宗教
        approval_num: '1234567', //审批号
        remark: '',
        img_data: {
          id: '10',
          pid: '3',
          img_type: '9',
          val: '/static/batools/upload/word/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
          show_src:
            'https://cpimg.23kh.com/batools/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
          show_min_src:
            'https://cpimg.23kh.com/batools/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
        },
      },
      {
        id: '4',
        basic_id: '4',
        website_id: '4',
        approval_type: '4', //审批类型：1新闻,2出版,4教育,8医疗保健,16药品和医疗器械,32电子公告服务,256文化,512广播电影电视节目,2048网络预约车,4096互联网金融,8192校外培训（高中及以下阶段）,16384宗教
        approval_num: '1234567', //审批号
        remark: '',
        img_data: {
          id: '10',
          pid: '2',
          img_type: '9',
          val: '/static/batools/upload/word/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
          show_src:
            'https://cpimg.23kh.com/batools/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
          show_min_src:
            'https://cpimg.23kh.com/batools/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
        },
      },
    ],
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

export const stepThirdData = {
  web_side_id_card_p1: {
    mainOtherPicUl:
      'https://cpimg.compass-realestate.com/guang_img/20230712/7f05020230712143521755757.jpg',
    webOtherPicUl:
      'https://cpimg.compass-realestate.com/guang_img/20230712/7f05020230712143521755757.jpg',
    unitpic0ul:
      'https://cpimg.compass-realestate.com/guang_img/20230712/7f05020230712143521755757.jpg',
    identitypic0ul:
      'https://cpimg.compass-realestate.com/guang_img/20230712/7f05020230712143521755757.jpg',
    verificationpic0ul:
      'https://cpimg.compass-realestate.com/guang_img/20230712/7f05020230712143521755757.jpg',
    websidechiefpic0ul:
      'https://cpimg.compass-realestate.com/guang_img/20230712/7f05020230712143521755757.jpg',
    websideidentitycardpic0ul:
      'https://cpimg.compass-realestate.com/guang_img/20230712/7f05020230712143521755757.jpg',
  },
};

export const dataMainTemplate = {};
