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

export const infoMain = {
  unitpty: '单位',
  unitpty_sub: "基金会",
}
export const infoCompany = {
  form_item_unitnm: '和东来公司',
  form_item_uitcfttype: "营业执照证书",
  form_item_uitcftnum: "fs43523452345",
  form_item_uitadrstr: "重庆市江北区保税港",
  form_item_uitregadrstr: "重庆市渝中区红岩村",
  form_item_lglnm: "和仁东",
  form_item_uitcftid: 'https://bt.corp.cqqgsafe.com/static/batools/upload/word/images/20231123/df2898022e4655446ae174a4b06c24cb.jpg',
}

export const infoPerson = {
  form_item_rpbnm: '和仁东',
  form_item_rpbcfttype: "居民身份证",
  form_item_rpbcftnum: "500229200109218555",
  form_item_idecardvalid: "2023-11-22",
  form_item_isLongValid: true,
  form_item_rpbadsstr: "重庆市江北区保税港",
  form_item_rpbmobile: "15502354225",
  form_item_offtel: "015-13354456",
  form_item_rpbmail: "15502354225",
  form_item_idecardfrontid: 'https://bt.corp.cqqgsafe.com/static/batools/upload/word/images/20231123/f12463e24cb39e96b47e6ec21b0c64e6.jpg',
  form_item_idecardbackid: 'https://bt.corp.cqqgsafe.com/static/batools/upload/word/images/20231123/b6d6ec7f77994e9d0d352b921df7b8ea.jpg',
  form_item_idecardgroupid: 'https://bt.corp.cqqgsafe.com/static/batools/upload/word/images/20231123/9cd92b647a16bd43124faffb4ea88037.jpg'
}

export const CertTypeMap = {
  1:'营业执照（个人或企业）',
  12: '组织机构代码证',
  27: '外国企业常驻代表机构登记证',
  20: '组织机构代码证',
  21: '律师事务所执业许可证',
  22: '外国在华文化中心登记证',
  34: '外国政府旅游部门常驻代表机构批准登记证',
  40: '北京市外国驻华使馆人员子女学校办学许可证',
  24: '统一社会信用代码证书',
  28: '司法鉴定许可证',
  25: '宗教活动场所登记证',
  35: '境外机构证件',
  38: '医疗机构执业许可证',
  39: '公证机构执业证',
  43: '农村集体经济组织登记证',
  5: '部队代号',
  23: '军队单位对外有偿服务许可证',
  9: '组织机构代码证',
  13: '统一社会信用代码证书',
  3: '组织机构代码证',
  4: '事业单位法人证书',
  15: '统一社会信用代码证书',
  2: '居民身份证',
  7: '护照',
  11: '台湾居民来往大陆通行证',
  14: '港澳居民来往内陆通行证',
  30: '外国人永久居留身份证',
  41: '港澳居民居住证',
  42: '台湾居民居住证',
  6: '社会团体法人登记证书',
  10: '组织机构代码证',
  16: '组织机构代码证',
  17: '民办非企业单位登记证书',
  36: '社会服务机构登记证书',
  37: '民办学校办学许可证',
  44: '仲裁委员会登记证',
  18: '组织机构代码证',
  19: '基金会法人登记证书'
}
export const PropertyMap = {
  4: '企业',
  11:'律师执业机构',
  12:'外国在华文化中心',
  13:'群众性团体组织',
  14:'司法鉴定机构',
  15:'宗教团体',
  16:'境外机构',
  17:'医疗机构',
  18:'公证机构',
  19:'集体经济',
  1:'国防机构',
  2:'政府机关',
  3:'事业单位',
  5:'个人',
  6:'社会团体',
  9:'民办非企业单位',
  20:'仲裁机构',
  10:'基金会'
}
export const UserIdMap = {
  2: '居民身份证',
  7: '护照',
  11: '台湾居民来往大陆通行证',
  14: '港澳居民来往内陆通行证',
  30: '外国人永久居留身份证',
  41: '港澳居民居住证',
  42: '台湾居民居住证',
}

// 公安表单匹配字典--主体性质
export const ProMap: any = {
  1:'2',
  10:'3',
  16:'4',
  11:'5',
  9:'6',
  14:'7',
  3:'8',
  6:'9',
  2:'10',
  4:'11',
}
// 公安表单匹配字典--证书
export const CertMap: any = {
  24:'1',
  1:'2',
  20:'3',
}
// 公安表单匹配字典--证件类型
export const UserMap: any = {
  2: '1',
  7: '10',
  11: '12',
  14: '13',
  30: '14',
}
