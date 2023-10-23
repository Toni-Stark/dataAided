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

// export const oldFinalData = {
//   basic: {
//     id: '2', //主体单位ID
//     unit_name: '江北区南彩食品经营部-单位名称', //单位名称
//     unit_cert_type: '1', //主办单位有效证件类型:1营业执照（个人或企业）,12组织机构代码证,27外国企业常驻代表机构登记证,20组织机构代码证,21律师事务所执业许可证,22外国在华文化中心登记证,34外国政府旅游部门常驻代表机构批准登记证,40北京市外国驻华使馆人员子女学校办学许可证,24统一社会信用代码证书,28司法鉴定许可证,25宗教活动场所登记证,35境外机构证件,38医疗机构执业许可证,39公证机构执业证,43农村集体经济组织登记证,5部队代号,23军队单位对外有偿服务许可证,9组织机构代码证,13统一社会信用代码证书,3组织机构代码证,4事业单位法人证书,15统一社会信用代码证书,2居民身份证,7护照,11台湾居民来往大陆通行证,14港澳居民来往内陆通行证,30外国人永久居留身份证,41港澳居民居住证,42台湾居民居住证,6社会团体法人登记证书,10组织机构代码证,16组织机构代码证,17民办非企业单位登记证书,36社会服务机构登记证书,37民办学校办学许可证,44仲裁委员会登记证,18组织机构代码证,19基金会法人登记证书,
//     unit_cert_type_show: '营业执照（个人或企业）', //主办单位有效证件类型:1营业执照（个人或企业）,12组织机构代码证,27外国企业常驻代表机构登记证,20组织机构代码证,21律师事务所执业许可证,22外国在华文化中心登记证,34外国政府旅游部门常驻代表机构批准登记证,40北京市外国驻华使馆人员子女学校办学许可证,24统一社会信用代码证书,28司法鉴定许可证,25宗教活动场所登记证,35境外机构证件,38医疗机构执业许可证,39公证机构执业证,43农村集体经济组织登记证,5部队代号,23军队单位对外有偿服务许可证,9组织机构代码证,13统一社会信用代码证书,3组织机构代码证,4事业单位法人证书,15统一社会信用代码证书,2居民身份证,7护照,11台湾居民来往大陆通行证,14港澳居民来往内陆通行证,30外国人永久居留身份证,41港澳居民居住证,42台湾居民居住证,6社会团体法人登记证书,10组织机构代码证,16组织机构代码证,17民办非企业单位登记证书,36社会服务机构登记证书,37民办学校办学许可证,44仲裁委员会登记证,18组织机构代码证,19基金会法人登记证书,
//     unit_cert_num: '92500105MAC817EJ5D', //主办单位有效证件号码
//     unit_property: '4', //主办单位性质:4企业,11律师执业机构,12外国在华文化中心,13群众性团体组织,14司法鉴定机构,15宗教团体,16境外机构,17医疗机构,18公证机构,19集体经济,1国防机构,2政府机关,3事业单位,5个人,6社会团体,9民办非企业单位,20仲裁机构,10基金会
//     unit_property_show: '企业',
//     unit_contact_address: '重庆市江北区红原路169号15-19', //主办单位通信地址
//     unit_cert_address: '重庆市江北区红原路169号15-19', //主办单位证件地址
//     unit_province: '500000', //主办单位所在省
//     unit_city: '500100', //主办单位所在市
//     unit_county: '500105', //主办单位所在区/县
//     unit_province_show: '重庆市', //主办单位所在省
//     unit_city_show: '市辖区', //主办单位所在市
//     unit_county_show: '江北区', //主办单位所在区/县
//     unit_superior: '江北区南彩食品经营部', //投资者及上级主管单位名称
//     img_cert: {
//       id: '3', //图片ID
//       pid: '2', //图片所属类型ID
//       img_type: '1', //图片类型：1主体单位证件扫描件,2主体单位补充材料,3主体负责人证件扫描件,4主体负责人照片,5网站核验单扫描件,6网站补充材料,7网站负责人证件扫描件,8网站负责人照片,9前置/专项审批图片
//       val: '/static/batools/upload/word/images/20231016/919befaab2ed59a7e4a51e8e76f4614f.jpg', //图片用于存放的值
//       show_src:
//         'https://cpimg.23kh.com/batools/images/20231016/919befaab2ed59a7e4a51e8e76f4614f.jpg', //可供直接显示的大图
//       show_min_src:
//         'https://cpimg.23kh.com/batools/images/20231016/919befaab2ed59a7e4a51e8e76f4614f.jpg', //可供直接显示的小图
//     }, //图片-1主体单位证件扫描件
//     img_supp: {
//       id: '4',
//       pid: '2',
//       img_type: '2',
//       val: '/static/batools/upload/word/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
//       show_src:
//         'https://cpimg.23kh.com/batools/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
//       show_min_src:
//         'https://cpimg.23kh.com/batools/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
//     }, //图片-2主体单位补充材料
//   }, //主体单位数据
//   principal_data: {
//     id: '2', //负责人ID
//     basic_id: '2',
//     website_id: '0',
//     type: '1',
//     name: '樊羿希', //负责人姓名
//     cert_type: '2', //有效证件类型：2居民身份证7护照11台湾居民来往大陆通行证14港澳居民来往内陆通行证30外国人永久居留身份证41港澳居民居住证42台湾居民居住证
//     cert_type_show: '居民身份证',
//     cert_num: '142723199808044118', //有效证件号码
//     is_long_term: '0', //长期证件1是0否（身份证）
//     cert_validity_start: '2016-07-12', //证件有效期起始时间（身份证）
//     cert_validity_end: '2026-07-12', //证件有效期结束时间（身份证）
//     mobile_phone: '15080406580', //移动电话号码
//     tel: '18334053698', //办公电话号码
//     emergency_tel: '17634053698', //应急电话号码
//     email: '307564674@qq.com', //电子邮件
//     instant_msg_type: '-1', //即时通信类型（非必填）,-1未选择，1QQ2微信3钉钉4HI
//     instant_msg_account: '3209233083', //即时通信账号（非必填）
//     remark: '备注文本', //备注（非必填）
//     img_cert: {
//       id: '12',
//       pid: '2',
//       img_type: '3',
//       val: '/static/batools/upload/word/images/20231016/7aaf17a8098f4ad5aa84d9549157c3b1.jpg',
//       show_src:
//         'https://cpimg.23kh.com/batools/images/20231016/7aaf17a8098f4ad5aa84d9549157c3b1.jpg',
//       show_min_src:
//         'https://cpimg.23kh.com/batools/images/20231016/7aaf17a8098f4ad5aa84d9549157c3b1.jpg',
//     }, //图片-3主体负责人证件扫描件
//     img_photo: null, //图片-4主体负责人照片
//   }, //主体负责人数据
//   web_site: [
//     {
//       id: '2', //网站ID
//       server_type: '1', //服务类型1网站6APP(暂未接入)
//       name: '江北区南彩食品经营部', //网站名称
//       domain: 'cqhongbosp.icu', //域名
//       first_page_url: 'www.cqhongbosp.icu', //首页地址
//       ip_address: '116.177.253.37-116.177.253.37', //IP地址,多个英文;隔开，单个中间英文-隔开，例：221.225.81.248-221.225.81.248;221.229.214.158-221.229.214.158
//       connect_mode: '4', //接入方式,多个英文,隔开:1专线2主机托管4虚拟主机8其他方式16云接入
//       server_address: '4,1,8', //服务器地址,多个英文,隔开:1=安徽,2=北京,4=重庆,8=福建,16=广东,32=甘肃,64=广西,128=贵州,256=河南,512=湖北,1024=河北,2048=海南,8192=黑龙江,16384=湖南,32768=吉林,65536=江苏,131072=江西,262144=辽宁,1048576=内蒙古,2097152=宁夏,4194304=青海,8388608=四川,16777216=山东,33554432=上海,67108864=陕西,134217728=山西,268435456=天津,1073741824=新疆,2147483648=西藏,4294967296=云南,8589934592=浙江
//       content_type: '1,16', //内容类型多个英文,隔开：1=即时通信,2=搜索引擎,4=综合门户,8=网上邮局,16=网络新闻,32=博客/个人空间,64=网络广告/信息,128=单位门户网站,256=网络购物,512=网上支付,1024=网上银行,2048=网上炒股/股票基金,4096=网络游戏,8192=网络音乐,16384=网络影视,32768=网络图片,65536=网络软件/下载,131072=网上求职,262144=网上交友/婚介,524288=网上房产,1048576=网络教育,2097152=网站建设,4194304=WAP,8388608=其他,134217728=APP,268435456=网络借贷信息中介,536870912=互联网股权融资,1073741824=互联网保险,2147483648=互联网跨界金融及资产管理,4294967296=网上非银支付
//       language_type: '128,512', //语言类型多个英文,隔开：1中文简体,2中文繁体,3维吾尔语,4哈萨克语,5柯尔克孜语,6蒙古语,7藏语,8壮语,9朝鲜语,10彝文,11苗语,12英语,13日语,14法语,15俄罗斯语,16西班牙语,17阿拉伯语
//       cert_validity_end: '2026-07-12',
//       approval_list: [
//         {
//           id: '2',
//           basic_id: '2',
//           website_id: '2',
//           approval_type: '2', //审批类型：1新闻,2出版,4教育,8医疗保健,16药品和医疗器械,32电子公告服务,256文化,512广播电影电视节目,2048网络预约车,4096互联网金融,8192校外培训（高中及以下阶段）,16384宗教
//           approval_num: '1234567', //审批号
//           remark: '',
//           img_data: {
//             id: '10',
//             pid: '2',
//             img_type: '9',
//             val: '/static/batools/upload/word/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
//             show_src:
//               'https://cpimg.23kh.com/batools/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
//             show_min_src:
//               'https://cpimg.23kh.com/batools/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
//           }, //图片-9前置/专项审批图片
//         },
//       ], //网站信息前置/专项审批数据
//       img_promise: {
//         id: '7',
//         pid: '2',
//         img_type: '5',
//         val: '/static/batools/upload/word/images/20231016/51718b0483740b36145d1127c96070b3.jpg',
//         show_src:
//           'https://cpimg.23kh.com/batools/images/20231016/51718b0483740b36145d1127c96070b3.jpg',
//         show_min_src:
//           'https://cpimg.23kh.com/batools/images/20231016/51718b0483740b36145d1127c96070b3.jpg',
//       },
//       img_cert: {
//         id: '7',
//         pid: '2',
//         img_type: '5',
//         val: '/static/batools/upload/word/images/20231016/51718b0483740b36145d1127c96070b3.jpg',
//         show_src:
//           'https://cpimg.23kh.com/batools/images/20231016/51718b0483740b36145d1127c96070b3.jpg',
//         show_min_src:
//           'https://cpimg.23kh.com/batools/images/20231016/51718b0483740b36145d1127c96070b3.jpg',
//       }, //图片-5网站核验单扫描件   -  核验单
//       img_supp: {
//         id: '8',
//         pid: '2',
//         img_type: '6',
//         val: '/static/batools/upload/word/images/20231016/dc2157b08923b0b64e77fb38fcb5000c.jpg',
//         show_src:
//           'https://cpimg.23kh.com/batools/images/20231016/dc2157b08923b0b64e77fb38fcb5000c.jpg',
//         show_min_src:
//           'https://cpimg.23kh.com/batools/images/20231016/dc2157b08923b0b64e77fb38fcb5000c.jpg',
//       }, //图片-6网站补充材料  -  服务材料
//       principal_data: {
//         id: '4',
//         basic_id: '2',
//         website_id: '2',
//         type: '2',
//         name: '朱素芳',
//         cert_type: '2',
//         cert_num: '44152319930906632X',
//         is_long_term: '0',
//         cert_validity_start: '2021-12-24',
//         cert_validity_end: '2041-12-24',
//         mobile_phone: '15986971146',
//         tel: '',
//         emergency_tel: '15080406580',
//         email: '972217032@qq.com',
//         instant_msg_type: '-1',
//         instant_msg_account: '15080406580342',
//         remark: '备注学习',
//         img_cert: {
//           id: '15',
//           pid: '4',
//           img_type: '7',
//           val: '/static/batools/upload/word/images/20231016/87c274055fd99524e317ff28b8bb7071.jpg',
//           show_src:
//             'https://cpimg.23kh.com/batools/images/20231016/87c274055fd99524e317ff28b8bb7071.jpg',
//           show_min_src:
//             'https://cpimg.23kh.com/batools/images/20231016/87c274055fd99524e317ff28b8bb7071.jpg',
//         }, // 有效证件
//         img_photo: {
//           id: '16',
//           pid: '4',
//           img_type: '8',
//           val: '/static/batools/upload/word/images/20231016/40296e1b1ce9dd2af155e200513c0cdf.jpg',
//           show_src:
//             'https://cpimg.23kh.com/batools/images/20231016/40296e1b1ce9dd2af155e200513c0cdf.jpg',
//           show_min_src:
//             'https://cpimg.23kh.com/batools/images/20231016/40296e1b1ce9dd2af155e200513c0cdf.jpg',
//         }, // 电子件
//       },
//     },
//     {
//       id: '3', //网站ID
//       server_type: '1', //服务类型1网站6APP(暂未接入)
//       name: '单位名称', //网站名称
//       domain: 'cqhongbosp.icu', //域名
//       first_page_url: 'www.cqhongbosp.icu', //首页地址
//       ip_address: '116.177.253.37-116.177.253.37;116.177.253.37-116.177.253.37', //IP地址,多个英文;隔开，单个中间英文-隔开，例：221.225.81.248-221.225.81.248;221.229.214.158-221.229.214.158
//       connect_mode: '4', //接入方式,多个英文,隔开:1专线2主机托管4虚拟主机8其他方式16云接入
//       server_address: '4,1,8', //服务器地址,多个英文,隔开:1=安徽,2=北京,4=重庆,8=福建,16=广东,32=甘肃,64=广西,128=贵州,256=河南,512=湖北,1024=河北,2048=海南,8192=黑龙江,16384=湖南,32768=吉林,65536=江苏,131072=江西,262144=辽宁,1048576=内蒙古,2097152=宁夏,4194304=青海,8388608=四川,16777216=山东,33554432=上海,67108864=陕西,134217728=山西,268435456=天津,1073741824=新疆,2147483648=西藏,4294967296=云南,8589934592=浙江
//       content_type: '1,16', //内容类型多个英文,隔开：1=即时通信,2=搜索引擎,4=综合门户,8=网上邮局,16=网络新闻,32=博客/个人空间,64=网络广告/信息,128=单位门户网站,256=网络购物,512=网上支付,1024=网上银行,2048=网上炒股/股票基金,4096=网络游戏,8192=网络音乐,16384=网络影视,32768=网络图片,65536=网络软件/下载,131072=网上求职,262144=网上交友/婚介,524288=网上房产,1048576=网络教育,2097152=网站建设,4194304=WAP,8388608=其他,134217728=APP,268435456=网络借贷信息中介,536870912=互联网股权融资,1073741824=互联网保险,2147483648=互联网跨界金融及资产管理,4294967296=网上非银支付
//       language_type: '128,512', //语言类型多个英文,隔开：1中文简体,2中文繁体,3维吾尔语,4哈萨克语,5柯尔克孜语,6蒙古语,7藏语,8壮语,9朝鲜语,10彝文,11苗语,12英语,13日语,14法语,15俄罗斯语,16西班牙语,17阿拉伯语
//       cert_validity_end: '2026-07-12',
//       approval_list: [
//         {
//           id: '2',
//           basic_id: '2',
//           website_id: '2',
//           approval_type: '2', //审批类型：1新闻,2出版,4教育,8医疗保健,16药品和医疗器械,32电子公告服务,256文化,512广播电影电视节目,2048网络预约车,4096互联网金融,8192校外培训（高中及以下阶段）,16384宗教
//           approval_num: '1234567', //审批号
//           remark: '',
//           img_data: {
//             id: '10',
//             pid: '2',
//             img_type: '9',
//             val: '/static/batools/upload/word/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
//             show_src:
//               'https://cpimg.23kh.com/batools/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
//             show_min_src:
//               'https://cpimg.23kh.com/batools/images/20231016/cf134c673df2492de68780348cec87a2.jpg',
//           }, //图片-9前置/专项审批图片
//         },
//       ], //网站信息前置/专项审批数据
//       img_cert: {
//         id: '7',
//         pid: '2',
//         img_type: '5',
//         val: '/static/batools/upload/word/images/20231016/51718b0483740b36145d1127c96070b3.jpg',
//         show_src:
//           'https://cpimg.23kh.com/batools/images/20231016/51718b0483740b36145d1127c96070b3.jpg',
//         show_min_src:
//           'https://cpimg.23kh.com/batools/images/20231016/51718b0483740b36145d1127c96070b3.jpg',
//       }, //图片-5网站核验单扫描件
//       img_promise: {
//         id: '7',
//         pid: '2',
//         img_type: '5',
//         val: '/static/batools/upload/word/images/20231016/51718b0483740b36145d1127c96070b3.jpg',
//         show_src:
//           'https://cpimg.23kh.com/batools/images/20231016/51718b0483740b36145d1127c96070b3.jpg',
//         show_min_src:
//           'https://cpimg.23kh.com/batools/images/20231016/51718b0483740b36145d1127c96070b3.jpg',
//       },
//       img_supp: {
//         id: '8',
//         pid: '2',
//         img_type: '6',
//         val: '/static/batools/upload/word/images/20231016/dc2157b08923b0b64e77fb38fcb5000c.jpg',
//         show_src:
//           'https://cpimg.23kh.com/batools/images/20231016/dc2157b08923b0b64e77fb38fcb5000c.jpg',
//         show_min_src:
//           'https://cpimg.23kh.com/batools/images/20231016/dc2157b08923b0b64e77fb38fcb5000c.jpg',
//       }, //图片-6网站补充材料
//       principal_data: {
//         id: '4',
//         basic_id: '2',
//         website_id: '2',
//         type: '2',
//         name: '朱素芳',
//         cert_type: '2',
//         cert_num: '44152319930906632X',
//         is_long_term: '0',
//         cert_validity_start: '2021-12-24',
//         cert_validity_end: '2041-12-24',
//         mobile_phone: '15986971146',
//         tel: '',
//         emergency_tel: '15080406580',
//         email: '972217032@qq.com',
//         instant_msg_type: '-1',
//         instant_msg_account: '15080406580342',
//         remark: '备注二',
//         img_cert: {
//           id: '15',
//           pid: '4',
//           img_type: '7',
//           val: '/static/batools/upload/word/images/20231016/87c274055fd99524e317ff28b8bb7071.jpg',
//           show_src:
//             'https://cpimg.23kh.com/batools/images/20231016/87c274055fd99524e317ff28b8bb7071.jpg',
//           show_min_src:
//             'https://cpimg.23kh.com/batools/images/20231016/87c274055fd99524e317ff28b8bb7071.jpg',
//         },
//         img_photo: {
//           id: '16',
//           pid: '4',
//           img_type: '8',
//           val: '/static/batools/upload/word/images/20231016/40296e1b1ce9dd2af155e200513c0cdf.jpg',
//           show_src:
//             'https://cpimg.23kh.com/batools/images/20231016/40296e1b1ce9dd2af155e200513c0cdf.jpg',
//           show_min_src:
//             'https://cpimg.23kh.com/batools/images/20231016/40296e1b1ce9dd2af155e200513c0cdf.jpg',
//         },
//       },
//     },
//   ],
// };
