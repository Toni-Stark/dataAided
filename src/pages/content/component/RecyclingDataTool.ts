import { getFileBase64, getNumView, queryEleAll, TimeoutFunEvent } from '@/pages/content/tools';
import { AdminMap, CertTypeMap, PropertyMap, TypeMap, UserIdMap } from '@/common/element';
import { queryFirstIframeEleAll } from '@/pages/content/output';

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
  let body: any = iframe.contentDocument?.querySelector('body');
  return body?.querySelector(str);
};
const queryIframeEleAll = (iframe: any, str: any) => {
  return iframe.contentDocument.querySelector('body').querySelectorAll(str);
};
const queryInputValue = (dom: any, str: any) => {
  return queryIframeEle(dom, str)?.value;
};
const queryTextContext = (dom: any, str: any) => {
  return queryIframeEle(dom, str)?.textContent;
};
const queryTextInnerHtml = (dom: any, str: any) => {
  let atr = queryIframeEle(dom, str)?.innerHTML?.trim();
  return atr?.replaceAll(/[\t]+/g, '');
};
const queryContext = (dom: any, str: any) => {
  let atr = queryElementEle(dom, str)?.innerHTML?.trim();
  return atr?.replaceAll(/[\t]+/g, '');
};
const querySelectTextContent = (dom: any, str: any) => {
  let select = queryIframeEle(dom, str);
  let list = queryElementEleAll(select, 'option');
  let action = list?.find((item: any) => item.value === select.value);
  return action?.textContent;
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

const queryElementImg = async (list: any): Promise<any> => {
  return new Promise((resolve) => {
    let arr: any = [];
    function upload(l: any, n: any) {
      if (n >= l.length) {
        return resolve(arr);
      }
      // getFileBase64(l[n].src).then((res) => {
      if (!l[n]?.src) {
        upload(l, n + 1);
        return;
      }
      fetchDownload(l[n].src, 'GET').then(({ blob, url, fileName }) => {
        downloadFile(url, fileName); // 调用方案二的download方法
        arr.push(fileName);
        upload(l, n + 1);
      });
      // });
    }
    upload(list, 0);
  });
};

export const recordedFileData = (data: any) => {
  return new Promise((resolve, rejects) => {
    // 将base64转换为blob对象
    const byteCharacters = atob(data.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });

    // 创建下载链接
    const url = URL.createObjectURL(blob);

    // 创建a标签进行下载
    const link = document.createElement('a');
    link.href = url;
    link.download = 'image.png';
    document.body.appendChild(link);
    link.click();

    // 释放资源
    URL.revokeObjectURL(url);
  });
};

const regVal = (str: any, map: any) => {
  if (!str) {
    return '';
  }
  let k: any = undefined;
  for (const i in map) {
    if (map[i] === str.trim()) {
      k = i;
    }
  }
  return k;
};
const regTextVal = (str: any, map: any) => {
  let k: any = undefined;
  for (const i in map) {
    if (map[i].indexOf(str.trim()) >= 0) {
      k = i;
    }
  }
  return k;
};

const getQuerySplit = (str: any, reg: any) => {
  return str?.split(reg);
};
const getQueryReplace = (dom: any, ele: any) => {
  let res: any = queryIframeEle(dom, ele)?.innerHTML?.split(';')[0];
  return res?.trim();
};

export const closeModal = () => {};

export const startPushData = () => {
  function clickDom(n: any) {
    let iframe = document.querySelector('#mainFrame');
    let list = queryIframeEleAll(
      iframe,
      '#tableList_Body_middle .operationLi .thickbox:first-child'
    );
    if (n >= list.length) {
      let btn = queryIframeEle(iframe, '#next a');
      btn.click();
      TimeoutFunEvent(() => {
        clickDom(0);
      }, 3000);
      return;
    }
    list[n].click();
    TimeoutFunEvent(() => {
      recordedAllData(() => {
        let btn: any = document.querySelector('#TB_closeWindowButton');
        btn.click();
        TimeoutFunEvent(() => {
          clickDom(n + 1);
        }, 1000);
      });
    }, 1000);
  }
  clickDom(0);
};

export const recordedAllData = async (callback: any) => {
  let iframe = queryEle('#body');
  let basic: any = {
    asp_type: '1',
    unit_name: queryContext(iframe, '#modalFormDiv ul:nth-child(2) .formLiWidth8'), //单位名称
    unit_cert_type: queryContext(iframe, '#modalFormDiv ul:nth-child(5) li:nth-child(2)'),
    unit_cert_num: queryContext(iframe, '#modalFormDiv ul:nth-child(5) li:last-child'), //主办单位有效证件号码
    unit_property: regVal(
      queryContext(iframe, '#modalFormDiv ul:nth-child(3) .formLiWidth8'),
      PropertyMap
    ), //主办单位性质:4企业,11律师执业机构,12外国在华文化中心,13群众性团体组织,14司法鉴定机构,15宗教团体,16境外机构,17医疗机构,18公证机构,19集体经济,1国防机构,2政府机关,3事业单位,5个人,6社会团体,9民办非企业单位,20仲裁机构,10基金会
    unit_contact_address: queryContext(iframe, '#modalFormDiv ul:nth-child(6) .formLiWidth8'), //主办单位通信地址
    unit_cert_address: queryContext(iframe, '#modalFormDiv ul:nth-child(7) .formLiWidth8'), //主办单位证件地址
    unit_province_show: getQuerySplit(
      queryContext(iframe, '#modalFormDiv ul:nth-child(6) .formLiWidth8'),
      '\n'
    )[0], //主办单位所在省
    unit_city_show: getQuerySplit(
      queryContext(iframe, '#modalFormDiv ul:nth-child(6) .formLiWidth8'),
      '\n'
    )[1], //主办单位所在市
    unit_county_show: getQuerySplit(
      queryContext(iframe, '#modalFormDiv ul:nth-child(6) .formLiWidth8'),
      '\n'
    )[2], //主办单位所在区/县
    unit_superior: queryContext(iframe, '#modalFormDiv ul:nth-child(9) .formLiWidth8'), //投资者及上级主管单位名称
    unit_cert_type_show: queryContext(iframe, '#modalFormDiv ul:nth-child(5) .formLiWidth3'), //显示值-主办单位有效证件类型
    unit_property_show: queryContext(iframe, '#modalFormDiv ul:nth-child(3) .formLiWidth8'), //显示值-主办单位性质
    img_cert: {
      show_src: await queryElementImg(
        queryEleAll('#modalFormDiv ul:nth-child(10) .formLiWidth8 img')
      ),
    },
    img_supp: {
      show_src: await queryElementImg(
        queryEleAll('#modalFormDiv ul:nth-child(12) .formLiWidth8 img')
      ),
    },
  };
  let principal_data: any = {
    name: queryContext(iframe, '#modalFormDiv2 ul:nth-child(1) li:nth-child(2)'), //负责人姓名
    cert_type: regVal(
      queryContext(iframe, '#modalFormDiv2 ul:nth-child(1) li:nth-child(4)'),
      UserIdMap
    ), //有效证件类型：2居民身份证7护照11台湾居民来往大陆通行证14港澳居民来往内陆通行证30外国人永久居留身份证41港澳居民居住证42台湾居民居住证
    cert_num: queryContext(iframe, '#modalFormDiv2 ul:nth-child(2) li:nth-child(2)'), //有效证件号码
    // is_long_term: getNumView(queryInputCheckRadio(iframe, '#isLongTermUl')), //长期证件1是0否（身份证）
    cert_validity_start: queryContext(iframe, '#modalFormDiv2 ul:nth-child(5) li:nth-child(2)'), //证件  有效期起始时间（身份证）
    cert_validity_end: queryContext(iframe, '#modalFormDiv2 ul:nth-child(5) li:nth-child(4)'), //证件有效期结束时间（身份证）
    mobile_phone: queryContext(iframe, '#modalFormDiv2 ul:nth-child(3) li:nth-child(2)'), //移动电话号码
    emergency_tel: queryContext(iframe, '#modalFormDiv2 ul:nth-child(3) li:nth-child(4)'), //应急电话号码
    email: queryContext(iframe, '#modalFormDiv2 ul:nth-child(4) li:nth-child(2)'), //电子邮件
    img_cert: {
      show_src: await queryElementImg(
        queryEleAll('#modalFormDiv ul:nth-child(11) .formLiWidth8 img')
      ),
    },
  };

  let web_list: any = [];
  let list: any = [];
  let btn_arr = queryElementEleAll(iframe, '#myTab li a');
  async function clickDom(btn_list: any, num: any) {
    if (num >= btn_list.length) {
      web_list = list;
      let nameDom = queryContext(iframe, '#modalFormDiv ul:nth-child(2) .formLiWidth8');
      await saveJsonDataFile({ list, basic, principal_data }, nameDom + '.json');
      callback();
      return;
    }
    btn_list[num].click();
    await TimeoutFunEvent(async () => {
      let type = regTextVal(
        queryEle(
          '#modalFormDiv3 #websideIframe1 #websideIframe #modalFormBody .tableList_Body_top_midden span'
        ).innerHTML,
        TypeMap
      );
      if (type == '1') {
        let iframe = queryEle('#websideIframe');
        let iframe1 = queryEle('#websideIframe #connectIframe');
        let connectIframe1 = queryIframeEle(iframe1, '#connectIframe');

        let web = queryEle('#modalFormDiv3');
        const info: any = {
          server_type: '1', //服务类型1网站6APP(暂未接入)
          name: queryContext(iframe, '#modalFormDiv ul:nth-child(2) .formLiWidth8'), //网站名称
          domain: queryContext(iframe, '#modalFormDiv ul:nth-child(3) .formLiWidth8'), //域名
          first_page_url: queryContext(iframe, '#modalFormDiv ul:nth-child(4) .formLiWidth8'), //首页地址
          principal_data: {
            name: queryContext(web, '#modalFormDiv2 ul li:nth-child(2)'), //负责人姓名
            cert_type: queryContext(web, '#modalFormDiv2 ul li:nth-child(4)'), //有效证件类型：2居民身份证7护照11台湾居民来往大陆通行证14港澳居民来往内陆通行证30外国人永久居留身份证41港澳居民居住证42台湾居民居住证
            cert_num: queryContext(web, '#modalFormDiv2 ul:nth-child(2) li:nth-child(2)'), //有效证件号码
            // is_long_term: getNumView(queryInputCheckRadio(iframe, '#isLongTermUl')), //长期证件1是0否（身份证）
            cert_validity_start: queryContext(
              web,
              '#modalFormDiv2 ul:nth-child(5) li:nth-child(2)'
            ), //证件有效期起始时间（身份证）
            cert_validity_end: queryContext(web, '#modalFormDiv2 ul:nth-child(5) li:nth-child(4)'), //证件有效期结束时间（身份证）
            mobile_phone: queryContext(web, '#modalFormDiv2 ul:nth-child(2) li:nth-child(4)'), //移动电话号码
            emergency_tel: queryContext(web, '#modalFormDiv2 ul:nth-child(3) li:nth-child(4)'), //应急电话号码
            email: queryContext(web, '#modalFormDiv2 ul:nth-child(4) li:nth-child(2)'), //电子邮件
            img_photo: {
              show_src: await queryElementImg(
                queryFirstIframeEleAll(web, '#modalFormDiv2 ul:nth-child(9) .formLiWidth8 img')
              ),
            },
            img_cert: {
              show_src: await queryElementImg(
                queryFirstIframeEleAll(web, '#modalFormDiv2 ul:nth-child(10) .formLiWidth8 img')
              ),
            },
          },
          img_cert: {
            show_src: await queryElementImg(
              queryFirstIframeEleAll(web, '#modalFormDiv2 ul:nth-child(8) .formLiWidth8 img')
            ),
          },
        };
        if (connectIframe1) {
          info.ip_address = getQueryReplace(connectIframe1, '#ipScopeDiv ul .formLiWidth8'); //IP地址,多个英文;隔开，单个中间英文-隔开，例：221.225.81.248-221.225.81.248;221.229.214.158-221.229.214.158
          let val = queryTextContext(connectIframe1, '#icpWebSiteBrowseForm ul li:nth-child(4)');
          info.connect_mode = regVal(val, AdminMap); //接入方式,多个英文,隔开:1专线2主机托管4虚拟主机8其他方式16云接入
          info.server_address = queryTextInnerHtml(
            connectIframe1,
            '#icpWebSiteBrowseForm ul:nth-child(3) .formLiWidth8'
          ); //服务器地址,多个英文,隔开:1=安徽,2=北京,4=重庆,8=福建,16=广东,32=甘肃,64=广西,128=贵州,256=河南,512=湖北,1024=河北,2048=海南,8192=黑龙江,16384=湖南,32768=吉林,65536=江苏,131072=江西,262144=辽宁,1048576=内蒙古,2097152=宁夏,4194304=青海,8388608=四川,16777216=山东,33554432=上海,67108864=陕西,134217728=山西,268435456=天津,1073741824=新疆,2147483648=西藏,4294967296=云南,8589934592=浙江
        }
        list.push(info);
        await clickDom(btn_list, num + 1);
      } else if (type == '6') {
        // let connectIframe1 = queryIframeEle(iframe1, '#connectIframe');
        // let web = queryEle('#modalFormDiv3');
        const info: any = {
          server_type: '6', //服务类型1网站6APP(暂未接入)
          name: btn_list[num].title,
        };
        list.push(info);
        await clickDom(btn_list, num + 1);
      }
    }, 3500);
  }
  clickDom(btn_arr, 0);
};

// 下载
function downloadFile(url: any, fileName: any) {
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  TimeoutFunEvent(() => {
    a.remove();
  }, 500);
}
async function fetchDownload(fetchUrl: any, method = 'POST', body = null) {
  const response = await window.fetch(fetchUrl, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
  const fileName = getFileNameCurrent(response);
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  return { blob, url, fileName }; // 返回blob、download url、fileName
}
// 根据response header获取文件名
export const getFileNameCurrent = (response: any) => {
  const disposition = response.headers.get('Content-Disposition');

  // 本例格式是："attachment; filename="img.jpg""
  let fileName = new Date().getTime() + '.jpg';
  fileName = decodeURIComponent(fileName);
  return fileName;
};

// 保存json文件
export const saveJsonDataFile = (jsonString: any, name: any) => {
  // 创建 Blob 对象
  const blob = new Blob([JSON.stringify(jsonString)], { type: 'application/json' });

  // 创建下载链接
  const url = URL.createObjectURL(blob);

  // 创建 a 标签进行下载
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();

  // 释放资源
  URL.revokeObjectURL(url);
};
