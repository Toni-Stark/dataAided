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
  unitpty_sub: '基金会',
};
export const infoCompany = {
  form_item_unitnm: '和东来公司',
  form_item_uitcfttype: '营业执照证书',
  form_item_uitcftnum: 'fs43523452345',
  form_item_uitadrstr: '重庆市江北区保税港',
  form_item_uitregadrstr: '重庆市渝中区红岩村',
  form_item_lglnm: '和仁东',
  form_item_uitcftid:
    'https://bt.corp.cqqgsafe.com/static/batools/upload/word/images/20231123/df2898022e4655446ae174a4b06c24cb.jpg',
};

export const infoPerson = {
  form_item_rpbnm: '和仁东',
  form_item_rpbcfttype: '居民身份证',
  form_item_rpbcftnum: '500229200109218555',
  form_item_idecardvalid: '2023-11-22',
  form_item_isLongValid: true,
  form_item_rpbadsstr: '重庆市江北区保税港',
  form_item_rpbmobile: '15502354225',
  form_item_offtel: '015-13354456',
  form_item_rpbmail: '15502354225',
  form_item_idecardfrontid:
    'https://bt.corp.cqqgsafe.com/static/batools/upload/word/images/20231123/f12463e24cb39e96b47e6ec21b0c64e6.jpg',
  form_item_idecardbackid:
    'https://bt.corp.cqqgsafe.com/static/batools/upload/word/images/20231123/b6d6ec7f77994e9d0d352b921df7b8ea.jpg',
  form_item_idecardgroupid:
    'https://bt.corp.cqqgsafe.com/static/batools/upload/word/images/20231123/9cd92b647a16bd43124faffb4ea88037.jpg',
};

export const CertTypeMap = {
  1: '营业执照（个人或企业）',
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
  19: '基金会法人登记证书',
};
export const PropertyMap = {
  4: '企业',
  11: '律师执业机构',
  12: '外国在华文化中心',
  13: '群众性团体组织',
  14: '司法鉴定机构',
  15: '宗教团体',
  16: '境外机构',
  17: '医疗机构',
  18: '公证机构',
  19: '集体经济',
  1: '国防机构',
  2: '政府机关',
  3: '事业单位',
  5: '个人',
  6: '社会团体',
  9: '民办非企业单位',
  20: '仲裁机构',
  10: '基金会',
};
export const UserIdMap = {
  2: '居民身份证',
  7: '护照',
  11: '台湾居民来往大陆通行证',
  14: '港澳居民来往内陆通行证',
  30: '外国人永久居留身份证',
  41: '港澳居民居住证',
  42: '台湾居民居住证',
};

// 公安表单匹配字典--主体性质
export const ProMap: any = {
  1: '2',
  10: '3',
  16: '4',
  11: '5',
  9: '6',
  14: '7',
  3: '8',
  6: '9',
  2: '10',
  4: '11',
};
// 公安表单匹配字典--证书
export const CertMap: any = {
  24: '1',
  1: '2',
  20: '3',
};
// 公安表单匹配字典--证件类型
export const UserMap: any = {
  2: '1',
  7: '10',
  11: '12',
  14: '13',
  30: '14',
};
// 文件上传id字典--id转字符串
export const BookMap: any = {
  31: '#form_item_mvwpfile',
  32: '#form_item_fsxwpfile',
  33: '#form_item_gzqjfile',
  34: '#form_item_jdhxwfile',
  35: '#form_item_jyzbfile',
  36: '#form_item_qzdyfile',
  37: '#form_item_yzbwxhxpfile',
};
// 文件上传id字典--id转字符串
export const StudyMap: any = {
  '1': '新闻',
  '2': '#form_item_cbfile',
  '4': '#form_item_jyfile',
  '8': '#form_item_ylbjfile',
  '16': '#form_item_ylbjfile',
  '32': '#form_item_cbfile',
  '256': '#form_item_cbfile',
  '512': '#form_item_cbfile',
  '2048': '#form_item_cbfile',
  '4096': '#form_item_cbfile',
  '8192': '#form_item_cbfile',
  '16384': '#form_item_zjfile',
};

export const nObj = {
  code: 200,
  data: {
    basic: {
      id: '31',
      unit_name: '济南市历下区慧彩电子商务服务中心（个体工商户）',
      unit_cert_type: '1',
      unit_cert_num: '92370102MAD4CX6AX6',
      unit_property: '4',
      unit_contact_address: '山东省济南市历下区和平路47号诚基中心B8-916',
      unit_cert_address: '山东省济南市历下区和平路47号诚基中心B8-916',
      unit_province: '370000',
      unit_city: '370100',
      unit_county: '370102',
      unit_superior: '济南市历下区慧彩电子商务服务中心（个体工商户）',
      asp_type: '1',
      img_cert: {
        id: '872',
        pid: '31',
        img_type: '1',
        img_type_show: '主办单位证件',
        val: '/static/batools/upload/word/images/20231214/7075b46a92c47d88992a94e3bebdec3c.jpg',
        show_src:
          'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/7075b46a92c47d88992a94e3bebdec3c.jpg',
        show_min_src:
          'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/7075b46a92c47d88992a94e3bebdec3c.jpg',
      },
      img_supp: [
        {
          id: '873',
          pid: '31',
          img_type: '2',
          img_type_show: '主体其他材料',
          val: '/static/batools/upload/word/images/20231214/1a0e17c90d9d5c7f1d917d6e0420e6c9.jpg',
          show_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/1a0e17c90d9d5c7f1d917d6e0420e6c9.jpg',
          show_min_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/1a0e17c90d9d5c7f1d917d6e0420e6c9.jpg',
        },
      ],
      unit_cert_type_show: '营业执照（个人或企业）',
      unit_property_show: '企业',
      unit_province_show: '山东省',
      unit_city_show: '济南市',
      unit_county_show: '历下区',
    },
    principal_data: {
      id: '151',
      basic_id: '31',
      website_id: '0',
      type: '1',
      name: '郭自超',
      cert_type: '2',
      cert_num: '421302200003292315',
      is_long_term: '0',
      cert_validity_start: '2020-01-21',
      cert_validity_end: '2030-01-21',
      mobile_phone: '15623612529',
      tel: '023-12345678',
      emergency_tel: '15784123562',
      email: 'jielang6821@163.com',
      instant_msg_type: '1',
      instant_msg_account: 'qq12345678',
      remark: '备注内容\r\n1234\r\n第3行',
      province: '370000',
      city: '370100',
      county: '370102',
      address: '和平路47号诚基中心B8-916',
      img_cert: {
        id: '892',
        pid: '151',
        img_type: '3',
        img_type_show: '主体负责人有效证件',
        val: '/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
        show_src:
          'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
        show_min_src:
          'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
      },
      img_photo: {
        id: '893',
        pid: '151',
        img_type: '4',
        img_type_show: '主体负责人照片',
        val: '/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
        show_src:
          'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
        show_min_src:
          'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
      },
      img_cert_profile: {
        id: '894',
        pid: '151',
        img_type: '21',
        img_type_show: '主体负责人身份证人像面',
        val: '/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
        show_src:
          'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
        show_min_src:
          'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
      },
      img_cert_emblem: {
        id: '895',
        pid: '151',
        img_type: '22',
        img_type_show: '主体负责人身份证国徽面',
        val: '/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
        show_src:
          'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
        show_min_src:
          'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
      },
      img_cert_holder: {
        id: '896',
        pid: '151',
        img_type: '23',
        img_type_show: '主体负责人身份证手持',
        val: '/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
        show_src:
          'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
        show_min_src:
          'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
      },
      cert_type_show: '居民身份证',
      instant_msg_type_show: 'QQ',
      province_show: '山东省',
      city_show: '济南市',
      county_show: '历下区',
    },
    web_site: [
      {
        id: '85',
        server_type: '1',
        name: '济南市历下区慧彩电子商务服务中心（个体工商户）',
        domain: 'whtte.cn',
        first_page_url: 'www.whtte.cn',
        ip_address: '116.177.253.36-116.177.253.36',
        connect_mode: '4',
        server_address: '4194304',
        content_type: '128',
        language_type: '1',
        record_num: '渝ICP备290712035号-2',
        record_date: '2023-12-15',
        cert_validity_start: '2023-12-15',
        cert_validity_end: '2024-12-15',
        dsp_name: '万网',
        dsp_province: '500000',
        dsp_city: '500100',
        dsp_county: '500108',
        interactive: 'B1,B2,B3,B4',
        web_open_date: '2023-12-15',
        approval_list: [
          {
            id: '82',
            basic_id: '31',
            website_id: '85',
            approval_type: '4',
            approval_num: 'jy12345',
            remark: '',
            img_data: {
              id: '890',
              pid: '82',
              img_type: '9',
              img_type_show: '前置/专项审批图片',
              val: '/static/batools/upload/word/images/20231214/7fefa2374b3d86a147138b4950ed386f.jpg',
              show_src:
                'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/7fefa2374b3d86a147138b4950ed386f.jpg',
              show_min_src:
                'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/7fefa2374b3d86a147138b4950ed386f.jpg',
            },
            approval_type_show: '教育',
          },
        ],
        img_cert: {
          id: '874',
          pid: '85',
          img_type: '5',
          img_type_show: '服务备案信息真实性核验单',
          val: '/static/batools/upload/word/images/20231214/d83285b2081cfd7ead4633c16c6bfd92.jpg',
          show_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/d83285b2081cfd7ead4633c16c6bfd92.jpg',
          show_min_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/d83285b2081cfd7ead4633c16c6bfd92.jpg',
        },
        img_supp: null,
        img_promise: null,
        principal_data: {
          id: '152',
          basic_id: '31',
          website_id: '85',
          type: '2',
          name: '郭自超',
          cert_type: '2',
          cert_num: '421302200003292315',
          is_long_term: '0',
          cert_validity_start: '2020-01-21',
          cert_validity_end: '2030-01-21',
          mobile_phone: '15623612529',
          tel: '023-12345678',
          emergency_tel: '15784123562',
          email: 'jielang6821@163.com',
          instant_msg_type: '1',
          instant_msg_account: 'qq12345678',
          remark: '备注内容\r\n1234\r\n第3行',
          province: '370000',
          city: '370100',
          county: '370102',
          address: '和平路47号诚基中心B8-916',
          img_cert: {
            id: '897',
            pid: '152',
            img_type: '7',
            img_type_show: '服务负责人有效证件',
            val: '/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
          },
          img_photo: {
            id: '898',
            pid: '152',
            img_type: '8',
            img_type_show: '服务负责人核验现场拍摄照片电子件',
            val: '/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
          },
          img_cert_profile: {
            id: '899',
            pid: '152',
            img_type: '24',
            img_type_show: '网站负责人身份证人像面',
            val: '/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
          },
          img_cert_emblem: {
            id: '900',
            pid: '152',
            img_type: '25',
            img_type_show: '网站负责人身份证国徽面',
            val: '/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
          },
          img_cert_holder: {
            id: '901',
            pid: '152',
            img_type: '26',
            img_type_show: '网站负责人身份证手持',
            val: '/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
          },
          cert_type_show: '居民身份证',
          instant_msg_type_show: 'QQ',
          province_show: '山东省',
          city_show: '济南市',
          county_show: '历下区',
        },
        asp_data: {
          asp_type: '1',
          asp_name: '云网',
          asp_info: {
            province: '630000',
            city: '630100',
            county: '630104',
            province_show: '青海省',
            city_show: '西宁市',
            county_show: '城西区',
            company_name: '青海云网电子科技有限公司',
          },
        },
        domain_cert: {
          id: '875',
          pid: '85',
          img_type: '30',
          img_type_show: '域名证书',
          val: '/static/batools/upload/word/images/20231214/e673b77bc9b26ac27450bad514709dbc.png',
          show_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/e673b77bc9b26ac27450bad514709dbc.png',
          show_min_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/e673b77bc9b26ac27450bad514709dbc.png',
        },
        interactive_arr: [
          {
            type: 'B1',
            name: '综合商品交易类（B1）',
            desc: '专门或主要从事衣帽鞋靴、箱包饰品、数码电器、食品洗护等各类商品交易的综合平台。',
            disable: false,
          },
          {
            type: 'B2',
            name: '垂直商品交易类（B2）',
            desc: '专门或主要从事某一类型产品交易，具有精准的差异化定位的平台。',
            disable: false,
          },
          {
            type: 'B3',
            name: '商超团购类（B3）',
            desc: '专门或主要从事蔬菜水果、肉蛋水产、粮油调味、酒水饮料、日用百货等生活用品交易，并提供团购等服务的平台。',
            disable: false,
          },
          {
            type: 'B4',
            name: '二手交易类（B4）',
            desc: '专门或主要从事二手物品回收、检测、鉴定、估值、翻新、维保、资源化利用及无害化处置等服务的二手商品交易平台。',
            disable: false,
          },
        ],
        server_type_show: '网站',
        connect_mode_show: '虚拟主机',
        server_address_show: '青海',
        content_type_show: '单位门户网站',
        language_type_show: '中文简体',
        dsp_province_show: '重庆市',
        dsp_city_show: '市辖区',
        dsp_county_show: '南岸区',
        permit_list: [
          {
            id: '876',
            pid: '85',
            img_type: '31',
            img_type_show: '民爆物品许可证',
            val: '/static/batools/upload/word/images/20231214/609440be9511e1edb3debc4a80dc23aa.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/609440be9511e1edb3debc4a80dc23aa.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/609440be9511e1edb3debc4a80dc23aa.jpg',
          },
          {
            id: '877',
            pid: '85',
            img_type: '33',
            img_type_show: '管制器具许可证',
            val: '/static/batools/upload/word/images/20231215/WechatIMe5c299e9e6c1c5a4fccf3b8ee7bc3c86.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/WechatIMe5c299e9e6c1c5a4fccf3b8ee7bc3c86.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/WechatIMe5c299e9e6c1c5a4fccf3b8ee7bc3c86.jpg',
          },
          {
            id: '878',
            pid: '85',
            img_type: '34',
            img_type_show: '剧毒化学物许可证',
            val: '/static/batools/upload/word/images/20231214/db38edcdd2c6c01122ebcb874caa477f.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/db38edcdd2c6c01122ebcb874caa477f.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/db38edcdd2c6c01122ebcb874caa477f.jpg',
          },
          {
            id: '879',
            pid: '85',
            img_type: '35',
            img_type_show: '警用装备许可证',
            val: '/static/batools/upload/word/images/20231215/IMG_0562097cc5b4be6a3b7d8d2ab620e6f79eff.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_0562097cc5b4be6a3b7d8d2ab620e6f79eff.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_0562097cc5b4be6a3b7d8d2ab620e6f79eff.jpg',
          },
        ],
      },
      {
        id: '86',
        server_type: '1',
        name: '网站2',
        domain: 'compass.com',
        first_page_url: 'www.compass.com',
        ip_address: '106.10.22.44-106.10.22.44',
        connect_mode: '4',
        server_address: '4',
        content_type: '524288',
        language_type: '1',
        record_num: '',
        record_date: null,
        cert_validity_start: null,
        cert_validity_end: null,
        dsp_name: '',
        dsp_province: '',
        dsp_city: '',
        dsp_county: '',
        interactive: '',
        web_open_date: '2023-12-15',
        approval_list: [
          {
            id: '83',
            basic_id: '31',
            website_id: '86',
            approval_type: '2048',
            approval_num: 'wlyyc1234',
            remark: '',
            img_data: {
              id: '891',
              pid: '83',
              img_type: '9',
              img_type_show: '前置/专项审批图片',
              val: '/static/batools/upload/word/images/20231215/IMG_05621800dc5c91e3540253da06587185b4f0.jpg',
              show_src:
                'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_05621800dc5c91e3540253da06587185b4f0.jpg',
              show_min_src:
                'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_05621800dc5c91e3540253da06587185b4f0.jpg',
            },
            approval_type_show: '网络预约车',
          },
        ],
        img_cert: {
          id: '880',
          pid: '86',
          img_type: '5',
          img_type_show: '服务备案信息真实性核验单',
          val: '/static/batools/upload/word/images/20231215/IMG_05632f955b08a8098b305cb8cadefe300004.jpg',
          show_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_05632f955b08a8098b305cb8cadefe300004.jpg',
          show_min_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_05632f955b08a8098b305cb8cadefe300004.jpg',
        },
        img_supp: [
          {
            id: '881',
            pid: '86',
            img_type: '6',
            img_type_show: '服务其他材料',
            val: '/static/batools/upload/word/images/20231215/IMG_0565f81deca8f87a88c27db30e11c4d0f486.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_0565f81deca8f87a88c27db30e11c4d0f486.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_0565f81deca8f87a88c27db30e11c4d0f486.jpg',
          },
        ],
        img_promise: {
          id: '882',
          pid: '86',
          img_type: '10',
          img_type_show: '相关承诺书',
          val: '/static/batools/upload/word/images/20231215/IMG_05644f52b2f6a9b60a2d4357a6f38eb986db.jpg',
          show_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_05644f52b2f6a9b60a2d4357a6f38eb986db.jpg',
          show_min_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_05644f52b2f6a9b60a2d4357a6f38eb986db.jpg',
        },
        principal_data: {
          id: '153',
          basic_id: '31',
          website_id: '86',
          type: '2',
          name: '郭自超',
          cert_type: '2',
          cert_num: '421302200003292315',
          is_long_term: '0',
          cert_validity_start: '2020-01-21',
          cert_validity_end: '2030-01-21',
          mobile_phone: '15623612529',
          tel: '023-12345678',
          emergency_tel: '15784123562',
          email: 'jielang6821@163.com',
          instant_msg_type: '1',
          instant_msg_account: 'qq12345678',
          remark: '备注内容\r\n1234\r\n第3行',
          province: '370000',
          city: '370100',
          county: '370102',
          address: '和平路47号诚基中心B8-916',
          img_cert: {
            id: '902',
            pid: '153',
            img_type: '7',
            img_type_show: '服务负责人有效证件',
            val: '/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
          },
          img_photo: {
            id: '903',
            pid: '153',
            img_type: '8',
            img_type_show: '服务负责人核验现场拍摄照片电子件',
            val: '/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
          },
          img_cert_profile: {
            id: '904',
            pid: '153',
            img_type: '24',
            img_type_show: '网站负责人身份证人像面',
            val: '/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
          },
          img_cert_emblem: {
            id: '905',
            pid: '153',
            img_type: '25',
            img_type_show: '网站负责人身份证国徽面',
            val: '/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
          },
          img_cert_holder: {
            id: '906',
            pid: '153',
            img_type: '26',
            img_type_show: '网站负责人身份证手持',
            val: '/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
          },
          cert_type_show: '居民身份证',
          instant_msg_type_show: 'QQ',
          province_show: '山东省',
          city_show: '济南市',
          county_show: '历下区',
        },
        asp_data: {
          asp_type: '1',
          asp_name: '云网',
          asp_info: {
            province: '630000',
            city: '630100',
            county: '630104',
            province_show: '青海省',
            city_show: '西宁市',
            county_show: '城西区',
            company_name: '青海云网电子科技有限公司',
          },
        },
        domain_cert: {
          id: '883',
          pid: '86',
          img_type: '30',
          img_type_show: '域名证书',
          val: '/static/batools/upload/word/images/20231215/图片30b3ec7a7ef756ce4520b3f3f54648718.png',
          show_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/图片30b3ec7a7ef756ce4520b3f3f54648718.png',
          show_min_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/图片30b3ec7a7ef756ce4520b3f3f54648718.png',
        },
        interactive_arr: [],
        server_type_show: '网站',
        connect_mode_show: '虚拟主机',
        server_address_show: '重庆',
        content_type_show: '网上房产',
        language_type_show: '中文简体',
        dsp_province_show: '',
        dsp_city_show: '',
        dsp_county_show: '',
        permit_list: [
          {
            id: '884',
            pid: '86',
            img_type: '31',
            img_type_show: '民爆物品许可证',
            val: '/static/batools/upload/word/images/20231215/IMG_20196d9c32df6df4d8cc71c05b833f9f19fc.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_20196d9c32df6df4d8cc71c05b833f9f19fc.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_20196d9c32df6df4d8cc71c05b833f9f19fc.jpg',
          },
          {
            id: '885',
            pid: '86',
            img_type: '32',
            img_type_show: '放射性物品许可证',
            val: '/static/batools/upload/word/images/20231215/IMG_0564b9a6c5657e21782ed106c50ccfd65c66.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_0564b9a6c5657e21782ed106c50ccfd65c66.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_0564b9a6c5657e21782ed106c50ccfd65c66.jpg',
          },
        ],
      },
      {
        id: '87',
        server_type: '1',
        name: '站3',
        domain: 'caa.com',
        first_page_url: 'www.caa.com',
        ip_address: '11.233.45.6-11.233.45.6',
        connect_mode: '4',
        server_address: '4',
        content_type: '2',
        language_type: '1',
        record_num: '1',
        record_date: '2023-12-13',
        cert_validity_start: null,
        cert_validity_end: null,
        dsp_name: '2',
        dsp_province: '140000',
        dsp_city: '140200',
        dsp_county: '140212',
        interactive: 'A1,A3',
        web_open_date: '2023-12-15',
        approval_list: [],
        img_cert: null,
        img_supp: null,
        img_promise: null,
        principal_data: {
          id: '154',
          basic_id: '31',
          website_id: '87',
          type: '2',
          name: '郭自超',
          cert_type: '2',
          cert_num: '421302200003292315',
          is_long_term: '0',
          cert_validity_start: '2020-01-21',
          cert_validity_end: '2030-01-21',
          mobile_phone: '15623612529',
          tel: '023-12345678',
          emergency_tel: '15784123562',
          email: 'jielang6821@163.com',
          instant_msg_type: '1',
          instant_msg_account: 'qq12345678',
          remark: '备注内容\r\n1234\r\n第3行',
          province: '370000',
          city: '370100',
          county: '370102',
          address: '和平路47号诚基中心B8-916',
          img_cert: {
            id: '907',
            pid: '154',
            img_type: '7',
            img_type_show: '服务负责人有效证件',
            val: '/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
          },
          img_photo: {
            id: '908',
            pid: '154',
            img_type: '8',
            img_type_show: '服务负责人核验现场拍摄照片电子件',
            val: '/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
          },
          img_cert_profile: {
            id: '909',
            pid: '154',
            img_type: '24',
            img_type_show: '网站负责人身份证人像面',
            val: '/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
          },
          img_cert_emblem: {
            id: '910',
            pid: '154',
            img_type: '25',
            img_type_show: '网站负责人身份证国徽面',
            val: '/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
          },
          img_cert_holder: {
            id: '911',
            pid: '154',
            img_type: '26',
            img_type_show: '网站负责人身份证手持',
            val: '/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
          },
          cert_type_show: '居民身份证',
          instant_msg_type_show: 'QQ',
          province_show: '山东省',
          city_show: '济南市',
          county_show: '历下区',
        },
        asp_data: {
          asp_type: '1',
          asp_name: '云网',
          asp_info: {
            province: '630000',
            city: '630100',
            county: '630104',
            province_show: '青海省',
            city_show: '西宁市',
            county_show: '城西区',
            company_name: '青海云网电子科技有限公司',
          },
        },
        domain_cert: {
          id: '886',
          pid: '87',
          img_type: '30',
          img_type_show: '域名证书',
          val: '/static/batools/upload/word/images/20231215/图片3aed7a2f8343831dcac685169d616676a.png',
          show_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/图片3aed7a2f8343831dcac685169d616676a.png',
          show_min_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/图片3aed7a2f8343831dcac685169d616676a.png',
        },
        interactive_arr: [
          {
            type: 'A1',
            name: '接入服务类（A1）',
            desc: '专门或主要从事互联网接入服务的平台，包括基础运营商。',
            disable: false,
          },
          {
            type: 'A3',
            name: 'CDN加速服务类（A3）',
            desc: '专门或主要从事内容分发网络服务。',
            disable: false,
          },
        ],
        server_type_show: '网站',
        connect_mode_show: '虚拟主机',
        server_address_show: '重庆',
        content_type_show: '搜索引擎',
        language_type_show: '中文简体',
        dsp_province_show: '山西省',
        dsp_city_show: '大同市',
        dsp_county_show: '新荣区',
        permit_list: [
          {
            id: '887',
            pid: '87',
            img_type: '33',
            img_type_show: '管制器具许可证',
            val: '/static/batools/upload/word/images/20231215/图片15ebb85546a11fcd7d98afa2ede0c5989.png',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/图片15ebb85546a11fcd7d98afa2ede0c5989.png',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/图片15ebb85546a11fcd7d98afa2ede0c5989.png',
          },
        ],
      },
      {
        id: '88',
        server_type: '1',
        name: '站4',
        domain: 'dff.com',
        first_page_url: 'www.dff.com',
        ip_address: '123.22.33.44-123.22.33.44',
        connect_mode: '4',
        server_address: '8',
        content_type: '8',
        language_type: '1',
        record_num: '',
        record_date: null,
        cert_validity_start: '2023-12-28',
        cert_validity_end: '2024-02-17',
        dsp_name: '',
        dsp_province: '110000',
        dsp_city: '110100',
        dsp_county: '110101',
        interactive: 'G1',
        web_open_date: '2023-12-15',
        approval_list: [],
        img_cert: null,
        img_supp: null,
        img_promise: null,
        principal_data: {
          id: '155',
          basic_id: '31',
          website_id: '88',
          type: '2',
          name: '郭自超',
          cert_type: '2',
          cert_num: '421302200003292315',
          is_long_term: '0',
          cert_validity_start: '2020-01-21',
          cert_validity_end: '2030-01-21',
          mobile_phone: '15623612529',
          tel: '023-12345678',
          emergency_tel: '15784123562',
          email: 'jielang6821@163.com',
          instant_msg_type: '1',
          instant_msg_account: 'qq12345678',
          remark: '备注内容\r\n1234\r\n第3行',
          province: '370000',
          city: '370100',
          county: '370102',
          address: '和平路47号诚基中心B8-916',
          img_cert: {
            id: '912',
            pid: '155',
            img_type: '7',
            img_type_show: '服务负责人有效证件',
            val: '/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/55eae824d8a08a47ef084bb7cee803ef.jpg',
          },
          img_photo: {
            id: '913',
            pid: '155',
            img_type: '8',
            img_type_show: '服务负责人核验现场拍摄照片电子件',
            val: '/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/78740be886da0626457182e4761ee3ca.jpg',
          },
          img_cert_profile: {
            id: '914',
            pid: '155',
            img_type: '24',
            img_type_show: '网站负责人身份证人像面',
            val: '/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/35a3c0421914a1a22b5cd17ce163269d.jpg',
          },
          img_cert_emblem: {
            id: '915',
            pid: '155',
            img_type: '25',
            img_type_show: '网站负责人身份证国徽面',
            val: '/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/aa7acc24282b67eadb61409eec8d0190.jpg',
          },
          img_cert_holder: {
            id: '916',
            pid: '155',
            img_type: '26',
            img_type_show: '网站负责人身份证手持',
            val: '/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231214/e395783b7fa753942450abec65b7add8.png',
          },
          cert_type_show: '居民身份证',
          instant_msg_type_show: 'QQ',
          province_show: '山东省',
          city_show: '济南市',
          county_show: '历下区',
        },
        asp_data: {
          asp_type: '1',
          asp_name: '云网',
          asp_info: {
            province: '630000',
            city: '630100',
            county: '630104',
            province_show: '青海省',
            city_show: '西宁市',
            county_show: '城西区',
            company_name: '青海云网电子科技有限公司',
          },
        },
        domain_cert: {
          id: '888',
          pid: '88',
          img_type: '30',
          img_type_show: '域名证书',
          val: '/static/batools/upload/word/images/20231215/IMG_0569beeba35bbccb0de5ad6bb977536505b3.jpg',
          show_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_0569beeba35bbccb0de5ad6bb977536505b3.jpg',
          show_min_src:
            'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/IMG_0569beeba35bbccb0de5ad6bb977536505b3.jpg',
        },
        interactive_arr: [
          {
            type: 'G1',
            name: '系统平台类（G1）',
            desc: '由经中央金融管理部门依法批准设立并实施监督管理的从事金融业务的机构提供金融服务的平台。',
            disable: false,
          },
        ],
        server_type_show: '网站',
        connect_mode_show: '虚拟主机',
        server_address_show: '福建',
        content_type_show: '网上邮局',
        language_type_show: '中文简体',
        dsp_province_show: '北京市',
        dsp_city_show: '市辖区',
        dsp_county_show: '东城区',
        permit_list: [
          {
            id: '889',
            pid: '88',
            img_type: '31',
            img_type_show: '民爆物品许可证',
            val: '/static/batools/upload/word/images/20231215/图片10c9a52daae4e095cdb2c39732b61643b.png',
            show_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/图片10c9a52daae4e095cdb2c39732b61643b.png',
            show_min_src:
              'http://www.dev.cms.cn/static/batools/upload/word/images/20231215/图片10c9a52daae4e095cdb2c39732b61643b.png',
          },
        ],
      },
    ],
  },
  req_id: '657fe16d48e18',
  msg: '成功',
};
