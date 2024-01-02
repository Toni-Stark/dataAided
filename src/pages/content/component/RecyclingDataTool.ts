import { getNumView } from '@/pages/content/tools';
import { updateDataBase64, updateStepData } from '@/pages/content/messageStore';
import { CLOUD_DATA_CONTROL, CLOUD_FILE_DATA } from '@/common/agreement';

const queryEle = (str: any) => {
  return document.querySelector(str);
};
const queryElementEle = (dom: any, str: any) => {
  return dom.querySelector(str);
};
const queryElementEleAll = (dom: any, str: any) => {
  return dom.querySelectorAll(str);
};
const queryIframeEle = (iframe: any, str: any) => {
  return iframe.contentDocument.querySelector('body').querySelector(str);
};
const queryIframeEleAll = (iframe: any, str: any) => {
  return iframe.contentDocument.querySelector('body').querySelectorAll(str);
};
const queryInputValue = (dom: any, str: any) => {
  return queryIframeEle(dom, str).value;
};
const queryTextContext = (dom: any, str: any) => {
  return queryIframeEle(dom, str).textContent;
};
const querySelectTextContent = (dom: any, str: any) => {
  let select = queryIframeEle(dom, str);
  let list = queryElementEleAll(select, 'option');
  let action = list.find((item: any) => item.value === select.value);
  return action.textContent;
};
const querySelectValue = (dom: any, str: any) => {
  return queryIframeEle(dom, str).value;
};
const queryInputCheckRadio = (dom: any, str: any) => {
  let radio = queryIframeEle(dom, str);
  let list = queryElementEleAll(radio, 'input');
  let action = list.find((item: any) => item.checked);
  return action.value;
};
const queryAdminInnerTextAll = (dom: any, str: any) => {
  let list = queryElementEleAll(dom, str);
  let arr = '';
  for (let i = 0; i < list.length; i++) {
    if (i != 0) {
      arr = arr + ';';
    }
    arr = arr + list[i].innerText.trim();
  }
  return arr;
};

export const recordedMainData = () => {
  let iframe = queryEle('#body #TB_window iframe');
  const data: any = {};
  let basic: any = {
    asp_type: '1',
    unit_name: queryTextContext(iframe, '#unitname'), //单位名称
    unit_cert_type: querySelectValue(iframe, '#unitcertificatetypeId'), //主办单位有效证件类型:1营业执照（个人或企业）,12组织机构代码证,27外国企业常驻代表机构登记证,20组织机构代码证,21律师事务所执业许可证,22外国在华文化中心登记证,34外国政府旅游部门常驻代表机构批准登记证,40北京市外国驻华使馆人员子女学校办学许可证,24统一社会信用代码证书,28司法鉴定许可证,25宗教活动场所登记证,35境外机构证件,38医疗机构执业许可证,39公证机构执业证,43农村集体经济组织登记证,5部队代号,23军队单位对外有偿服务许可证,9组织机构代码证,13统一社会信用代码证书,3组织机构代码证,4事业单位法人证书,15统一社会信用代码证书,2居民身份证,7护照,11台湾居民来往大陆通行证,14港澳居民来往内陆通行证,30外国人永久居留身份证,41港澳居民居住证,42台湾居民居住证,6社会团体法人登记证书,10组织机构代码证,16组织机构代码证,17民办非企业单位登记证书,36社会服务机构登记证书,37民办学校办学许可证,44仲裁委员会登记证,18组织机构代码证,19基金会法人登记证书,
    unit_cert_num: queryInputValue(iframe, '#unitcertificatenum'), //主办单位有效证件号码
    unit_property: querySelectValue(iframe, '#unitProperty'), //主办单位性质:4企业,11律师执业机构,12外国在华文化中心,13群众性团体组织,14司法鉴定机构,15宗教团体,16境外机构,17医疗机构,18公证机构,19集体经济,1国防机构,2政府机关,3事业单位,5个人,6社会团体,9民办非企业单位,20仲裁机构,10基金会
    unit_contact_address: queryTextContext(iframe, '#certificateaddress'), //主办单位通信地址
    unit_cert_address: queryTextContext(iframe, '#unitaddress'), //主办单位证件地址
    unit_province: querySelectValue(iframe, '#mainProvince'), //主办单位所在省
    unit_city: querySelectValue(iframe, '#mainCity'), //主办单位所在市
    unit_county: querySelectValue(iframe, '#mainCountry'), //主办单位所在区/县
    unit_superior: queryTextContext(iframe, '#unitsuperior'), //投资者及上级主管单位名称
    unit_cert_type_show: querySelectTextContent(iframe, '#unitcertificatetypeId'), //显示值-主办单位有效证件类型
    unit_property_show: querySelectTextContent(iframe, '#unitProperty'), //显示值-主办单位性质
    unit_province_show: querySelectTextContent(iframe, '#mainProvince'), //显示值-省
    unit_city_show: querySelectTextContent(iframe, '#mainCity'), //显示值-市
    unit_county_show: querySelectTextContent(iframe, '#mainCountry'),
  };
  let principal_data: any = {
    name: queryInputValue(iframe, '#unitprincipalname'), //负责人姓名
    cert_type: querySelectValue(iframe, '#unitprincipalcertificatetypeId'), //有效证件类型：2居民身份证7护照11台湾居民来往大陆通行证14港澳居民来往内陆通行证30外国人永久居留身份证41港澳居民居住证42台湾居民居住证
    cert_num: queryInputValue(iframe, '#unitprincipalcertificatenum'), //有效证件号码
    is_long_term: getNumView(queryInputCheckRadio(iframe, '#isLongTermUl')), //长期证件1是0否（身份证）
    cert_validity_start: queryInputValue(iframe, '#beginDateFind'), //证件有效期起始时间（身份证）
    cert_validity_end: queryInputValue(iframe, '#endDateFind'), //证件有效期结束时间（身份证）
    mobile_phone: queryInputValue(iframe, '#unitprincipalmobilephone'), //移动电话号码
    emergency_tel: queryInputValue(iframe, '#unitprincipalemergencytel'), //应急电话号码
    email: queryTextContext(iframe, '#unitprincipalemail'), //电子邮件
  };
};

export const recordedWebData = () => {
  let content = queryEle('#body #TB_window iframe');
  let web = queryIframeEle(content, '#websideIframe');
  let iframe = queryIframeEle(web, '#websideIframe');
  const data: any = [];
  const info: any = {
    server_type: '1', //服务类型1网站6APP(暂未接入)
    name: queryInputValue(iframe, '#websitename'), //网站名称
    domain: queryInputValue(iframe, '#domainUL .domianLi span'), //域名
    first_page_url: queryTextContext(iframe, '#websitefirstpageurl'), //首页地址
    ip_address: queryAdminInnerTextAll(iframe, '#ipScopeDiv .input'), //IP地址,多个英文;隔开，单个中间英文-隔开，例：221.225.81.248-221.225.81.248;221.229.214.158-221.229.214.158
    connect_mode: queryIframeEle(iframe, '#websiteconnenctmodeVODiv .input input:checked')?.id, //接入方式,多个英文,隔开:1专线2主机托管4虚拟主机8其他方式16云接入
    server_address: queryIframeEle(iframe, '#serveraddressDiv .input input:checked')?.id, //服务器地址,多个英文,隔开:1=安徽,2=北京,4=重庆,8=福建,16=广东,32=甘肃,64=广西,128=贵州,256=河南,512=湖北,1024=河北,2048=海南,8192=黑龙江,16384=湖南,32768=吉林,65536=江苏,131072=江西,262144=辽宁,1048576=内蒙古,2097152=宁夏,4194304=青海,8388608=四川,16777216=山东,33554432=上海,67108864=陕西,134217728=山西,268435456=天津,1073741824=新疆,2147483648=西藏,4294967296=云南,8589934592=浙江
    content_type: queryIframeEle(iframe, '#websiteservicecontentDiv .input input:checked')?.id, //内容类型多个英文,隔开：1=即时通信,2=搜索引擎,4=综合门户,8=网上邮局,16=网络新闻,32=博客/个人空间,64=网络广告/信息,128=单位门户网站,256=网络购物,512=网上支付,1024=网上银行,2048=网上炒股/股票基金,4096=网络游戏,8192=网络音乐,16384=网络影视,32768=网络图片,65536=网络软件/下载,131072=网上求职,262144=网上交友/婚介,524288=网上房产,1048576=网络教育,2097152=网站建设,4194304=WAP,8388608=其他,134217728=APP,268435456=网络借贷信息中介,536870912=互联网股权融资,1073741824=互联网保险,2147483648=互联网跨界金融及资产管理,4294967296=网上非银支付
    language_type: queryIframeEle(iframe, '#languageDiv .input input:checked')?.id, //语言类型多个英文,隔开：1中文简体,2中文繁体,3维吾尔语,4哈萨克语,5柯尔克孜语,6蒙古语,7藏语,8壮语,9朝鲜语,10彝文,11苗语,12英语,13日语,14法语,15俄罗斯语,16西班牙语,17阿拉伯语
    principal_data: {
      name: queryInputValue(iframe, '#websiteprincipalname'), //负责人姓名
      cert_type: querySelectValue(iframe, '#websiteprincipalcertificatetypeVO'), //有效证件类型：2居民身份证7护照11台湾居民来往大陆通行证14港澳居民来往内陆通行证30外国人永久居留身份证41港澳居民居住证42台湾居民居住证
      cert_num: querySelectValue(iframe, '#websiteprincipalcertificatenum'), //有效证件号码
      is_long_term: getNumView(queryInputCheckRadio(iframe, '#isLongTermUl')), //长期证件1是0否（身份证）
      cert_validity_start: queryInputValue(iframe, '#beginDateFind'), //证件有效期起始时间（身份证）
      cert_validity_end: queryInputValue(iframe, '#endDateFind'), //证件有效期结束时间（身份证）
      mobile_phone: queryInputValue(iframe, '#websiteprincipalmobilephone'), //移动电话号码
      emergency_tel: queryInputValue(iframe, '#websiteprincipalemergencytel'), //应急电话号码
      email: queryInputValue(iframe, '#websiteprincipalemail'), //电子邮件
    },
  };
};

export const recordedFileData = () => {
  let content = queryEle('#body #TB_window iframe');
  let iframe = queryIframeEle(content, '#recordIframe');
  let src = queryIframeEle(iframe, '.picLiShow img').src;
  const testUploader = async (url: any) => {
    let fileName = new Date().getTime() + '.jpg';
    await fetch(url)
      .then((res) => {
        return res.blob();
      })
      .then(async (blob) => {
        let imgFile = new File([blob], fileName, { type: blob.type });
        var reader = new FileReader();
        reader.onloadend = async function () {
          // reader.result;
          console.log(reader.result);
        };
        reader.readAsDataURL(imgFile);
      });
  };
  testUploader(src);
};
