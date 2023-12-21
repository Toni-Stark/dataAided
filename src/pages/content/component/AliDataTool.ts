import {
  DispatchEvent,
  DispatchMouseEvent,
  DispatchScrollEvent,
  queryFirstIframeEle,
  queryFirstIframeEleAll,
} from '@/pages/content/output';
import {
  base64ToFileTypeImage,
  getCookie,
  getFileBase64,
  getFileName,
  queryEle,
  queryEleAll,
  TimeoutFunEvent,
} from '@/pages/content/tools';
import { BookMap, StudyMap } from '@/common/element';

export const Ali_INFO_MAIN: any = {
  unit_province_showAndSelectAddressAnd0: '.ant-select-selection-search-input',
  unit_city_showAndSelectAddressAnd1: '.ant-select-selection-search-input',
  unit_county_showAndSelectAddressAnd2: '.ant-select-selection-search-input',
  unit_property_showAndSelectAddressAnd3: '.ant-select-selection-search-input',
  unit_cert_type_showAndSelectAddressAnd4: '.ant-select-selection-search-input',
  entity_comNameAndInput:
    '.ant-form-horizontal .ant-space .ant-space-item:nth-child(2) .module-item-wrap:nth-child(2) .ant-space-item:nth-child(3) .ant-form-item-control-input-content input',
  entity_comIdNumAndInput:
    '.ant-form-horizontal .ant-space .ant-space-item:nth-child(2) .module-item-wrap:nth-child(2) .ant-space-item:nth-child(4) .ant-form-item-control-input-content input',
  entity_comIdAddressAndInput:
    '.ant-form-horizontal .ant-space .ant-space-item:nth-child(2) .module-item-wrap:nth-child(2) .ant-space-item:nth-child(5) .ant-form-item-control-input-content input',
};
export const Ali_INFO_WEB_FIRST: any = {
  domainAndInput:
    '.ant-form-horizontal .ant-space .ant-space-item:nth-child(3)>.module-item-wrap .ant-space-item:nth-child(2) .ant-form-item-control-input-content input',
};
export const Ali_INFO_MAIN_FIRST: any = {
  unit_province_showAndSelectAddressAnd0: '.ant-select-selection-search-input',
  unit_city_showAndSelectAddressAnd1: '.ant-select-selection-search-input',
  unit_county_showAndSelectAddressAnd2: '.ant-select-selection-search-input',
  unit_property_showAndSelectAddressAnd3: '.ant-select-selection-search-input',
  unit_cert_type_showAndSelectAddressAnd4: '.ant-select-selection-search-input',
};
const getKeysList = (data: any) => {
  let list = [];
  for (let i in data) {
    if (data?.hasOwnProperty(i)) {
      let pairs = i.split('And');
      let option = {
        key: pairs[0],
        type: pairs[1],
        ind: pairs[2],
        element: data[i],
      };
      list.push(option);
    }
  }
  return list;
};
export const setAliMainData = (data: any) => {
  const { first_info } = data;
  let elements1 = getKeysList(Ali_INFO_MAIN);
  let rootNode = queryEle('.icp-page-form');
  currentEnterData(rootNode, elements1, first_info, () => {});
};
export const setAliWebData = (data: any, num: any) => {
  const { second_info } = data;
  let rootNode = queryEle('.icp-page-form');
  let elements1 = getKeysList(Ali_INFO_WEB_FIRST);
  currentEnterData(rootNode, elements1, second_info[num], () => {});
};
export const setAliWebDataFirst = (data: any, num: any) => {
  const { first_info } = data;
  let elements1 = getKeysList(Ali_INFO_MAIN_FIRST);
  let rootNode = queryEle('.icp-page-form');
  currentEnterData(rootNode, elements1, first_info, () => {
    FetchJsonDataFirst(first_info, num);
  });
};
export const setAliWebDataSecond = (data: any) => {
  const { first_info } = data;
  // let elements1 = getKeysList(Ali_INFO_MAIN_FIRST);
  // let rootNode = queryEle('.icp-page-form');
  // // currentEnterData(rootNode, elements1, first_info, () => {
  // //   FetchJsonDataSecond(first_info, num);
  // // });
  FetchJsonDataSecond(first_info);
};

const getArtListValue = (element: any) => {
  let dom = queryEleAll(element);
  let domItem: any;
  for (let i = 0; i < dom.length; i++) {
    if (dom[i].getAttribute('aria-selected') == 'true') {
      domItem = dom[i];
    }
  }
  return parseInt(domItem?.textContent);
};

// 第一步JSON文件上传
const FetchJsonDataFirst = (data: any, num: number) => {
  let addressT = [
    getArtListValue('#rc_select_0_list>div'),
    getArtListValue('#rc_select_1_list>div'),
    getArtListValue('#rc_select_2_list>div'),
  ];
  let sel1 = getArtListValue('#rc_select_3_list>div');
  let sel2 = getArtListValue('#rc_select_4_list>div');
  let stor: any = localStorage.getItem('beian_groupHidden');
  let obj: any = JSON.parse(stor)[0];
  const formData = new URLSearchParams();
  let jsonObj: any = {
    baOrderId: obj.baOrderId,
    orderType: obj.orderType,
    isModifiedKey: obj.isModifiedKey,
    isVirtualMerchant: obj.isVirtualMerchant,
    icpSiteId: obj.icpSiteId,
    pageAction: 'saveDraft',
    isAliyun: obj.isAliyun,
    organizersNature: obj.organizersNature,
    customerDomainId: obj.customerDomainId,
    page: obj.page,
    customerSiteId: obj.customerSiteId,
    provinceId: addressT[0],
    domMap: JSON.stringify({
      baOrderId: obj.baOrderId,
      orderType: obj.orderType,
      isModifiedKey: obj.isModifiedKey,
      isVirtualMerchant: obj.isVirtualMerchant,
      icpSiteId: obj.icpSiteId,
      pageAction: 'saveDraft',
      isAliyun: obj.isAliyun,
      organizersNature: obj.organizersNature,
      customerDomainId: obj.customerDomainId,
      page: obj.page,
      customerSiteId: obj.customerSiteId,
      provinceId: addressT[0],
      entity_comArea: addressT,
      entity_comType: sel1,
      entity_comName: data.entity_comName,
      entity_comIdType: sel2,
      entity_comIdNum: data.entity_comIdNum,
      entity_comIdAddress: data.entity_comIdAddress,
      site_serviceType: '1',
      site_selfDomain: data.arr[num].domain,
    }),
    _csrf: getCookie('BA-XSRF-TOKEN'),
  };
  for (const key in jsonObj) {
    formData.append(key, jsonObj[key]);
  }
  let url = 'https://beian.aliyun.com/front/execute.json';
  let headers = {
    // Accept: 'application/json, text/plain, */*',
    'Bx-V': '2.5.6',
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  function makePostRequest(url: any, headers: any) {
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: formData,
    }).then(async (rawResponse) => {
      var content = await rawResponse.json();
      console.log(content);
      location.reload();
    });
  }
  makePostRequest(url, headers);
};

// 第二步JSON文件上传
const FetchJsonDataSecond = (data: any) => {
  let stor: any = localStorage.getItem('beian_groupHidden');
  let obj: any = JSON.parse(stor)[0];
  let addStr = queryEle('.address-prefix')?.textContent + data.entity_comIdAddress;
  const formData = new URLSearchParams();
  let jsonObj: any = {
    baOrderId: obj.baOrderId,
    orderType: obj.orderType,
    isModifiedKey: obj.isModifiedKey,
    isVirtualMerchant: obj.isVirtualMerchant,
    icpSiteId: obj.icpSiteId,
    isAliyun: obj.isAliyun,
    entityId: obj.entityId,
    customerDomainId: obj.customerDomainId,
    customerSiteId: obj.customerSiteId,
    provinceId: obj.provinceId,
    pageAction: 'saveDraft',
    organizersNature: obj.organizersNature,
    page: obj.page,
    domMap: JSON.stringify({
      baOrderId: obj.baOrderId,
      orderType: obj.orderType,
      isModifiedKey: false,
      isVirtualMerchant: false,
      icpSiteId: null,
      isAliyun: true,
      entityId: obj.entityId,
      customerDomainId: null,
      customerSiteId: null,
      provinceId: obj.provinceId,
      pageAction: 'saveDraft',
      organizersNature: obj.organizersNature,
      page: obj.page,
      entity_comMailingAddress: addStr,
      entity_fixAddress: queryEle('.address-prefix')?.textContent,
      entity_remark: '',
      entity_fzrName: data.entity_comName,
      entity_fzrIdType: '2',
      entity_fzrIdNum: data.entity_comIdNum,
      entity_fzrMobile: data.mobile_phone,
      entity_phoneVfCode: null,
      entity_fzrTel_extension: '',
      extension: '',
      entity_fzrTel: '',
      entity_fzrEmergencyMobile: data.emergency_tel,
      entity_fzrEmail: data.email,
      entity_userSuppAddress: data.entity_comIdAddress,
    }),
    _csrf: getCookie('BA-XSRF-TOKEN'),
  };
  for (const key in jsonObj) {
    formData.append(key, jsonObj[key]);
  }
  let url = 'https://beian.aliyun.com/front/execute.json';
  let headers = {
    // Accept: 'application/json, text/plain, */*',
    'Bx-V': '2.5.6',
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  function makePostRequest(url: any, headers: any) {
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: formData,
    }).then(async (rawResponse) => {
      var content = await rawResponse.json();
      console.log(content);
      location.reload();
    });
  }
  makePostRequest(url, headers);
};

const currentEnterData = (root: any, element: any, data: any, callback: any) => {
  const currentListRun = (ele: any, info: any, num: number) => {
    if (num >= ele.length) {
      callback();
      return;
    }
    let obj = ele[num];
    if (obj.type === 'Select') {
      setSelectValue(
        root,
        obj,
        info[obj.key],
        () => {
          currentListRun(ele, info, num + 1);
        },
        0,
        false
      );
    }
    if (obj.type === 'SelectAddress') {
      setSelectAddress(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'SelectString') {
      setSelectValue(
        root,
        obj,
        info[obj.key],
        () => {
          currentListRun(ele, info, num + 1);
        },
        1,
        false
      );
    }
    if (obj.type === 'SelectScroll') {
      setSelectValue(
        root,
        obj,
        info[obj.key],
        () => {
          currentListRun(ele, info, num + 1);
        },
        0,
        true
      );
    }
    if (obj.type === 'SelectSSS') {
      setSelectSSS(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'Input') {
      setInputValue(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'Upload') {
      setUploadValue(
        root,
        obj,
        info[obj.key],
        () => {
          currentListRun(ele, info, num + 1);
        },
        true
      );
    }
    if (obj.type === 'Checkout') {
      setCheckValue(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'DateFull') {
      setFullDateValue(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'List') {
      setListAddValue(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'Tree1') {
      setTree1Value(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'CheckUpload') {
      setCheckUploadValue(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'CheckUploadRun') {
      setCheckUploadRun(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
  };
  currentListRun(element, data, 0);
};

const setSelectValue = (
  root: any,
  tag: any,
  val: any,
  callback: any,
  type: number,
  scroll: any
) => {
  let clickDom = queryFirstIframeEle(root, tag.element);
  DispatchMouseEvent(clickDom, 'mousedown');
  TimeoutFunEvent(() => {
    if (scroll) {
      let needScroll: any = queryFirstIframeEle(
        root,
        '.ant-row>.ant-col:nth-child(' + tag.ind + ') .ant-select-dropdown .rc-virtual-list-holder'
      );
      if (val >= 10) {
        DispatchScrollEvent(needScroll, 130);
      }
    }
    TimeoutFunEvent(() => {
      let optionView: any = queryFirstIframeEleAll(
        root,
        '.ant-row>.ant-col:nth-child(' +
          tag.ind +
          ') .rc-virtual-list-holder-inner>.ant-select-item'
      );
      let arr: any = [];
      for (let item of optionView) {
        arr.push(item);
      }
      let current = arr.findIndex((it: any) => {
        let value;
        if (type) {
          value = it.title;
        } else {
          value = it.getAttribute('dictorder');
        }
        return value == val;
      });
      let nth = current + 1;
      let resElement: any = queryFirstIframeEle(
        root,
        '.ant-row>.ant-col:nth-child(' +
          tag.ind +
          ') .rc-virtual-list-holder-inner>.ant-select-item:nth-child(' +
          nth +
          ')'
      );
      resElement?.click();
      TimeoutFunEvent(() => {
        callback();
      }, 500);
    }, 500);
  }, 500);
};
const setInputValue = (root: any, tag: any, val: any, callback: any) => {
  if (!val) {
    return callback();
  }
  let inputDom: any = queryFirstIframeEle(root, tag.element);
  inputDom.value = val;
  DispatchEvent(inputDom, 'change');
  callback();
};
const setSelectSSS = (root: any, tag: any, val: any, callback: any) => {
  if (!val) {
    return callback();
  }
  let clickDom = queryFirstIframeEle(root, tag.element);
  DispatchMouseEvent(clickDom, 'mousedown');
  TimeoutFunEvent(() => {
    let btn: any = clickDom;
    let list: any = btn.parentElement.parentElement.parentElement.childNodes;

    let selectView = list[list.length - 1].querySelector(
      '.ant-select-dropdown .rc-virtual-list-holder-inner'
    );
    let arrList: any = queryFirstIframeEleAll(selectView, '.ant-select-item-option-content');
    if (!arrList) {
      callback();
      return;
    }
    let index: any = null;
    for (let i = 0; i < arrList.length; i++) {
      if (arrList[i].textContent === val) {
        index = i;
      }
    }

    if (index !== null) {
      let parentE = btn.parentElement.parentElement.parentElement;
      let ele = parentE.querySelector(
        '.rc-virtual-list-holder-inner>.ant-select-item-option:nth-child(' + (index + 1) + ')'
      );
      DispatchMouseEvent(ele, 'click');
    }
    TimeoutFunEvent(() => {
      callback();
    }, 500);
  }, 500);
};
const setSelectAddress = (root: any, tag: any, val: any, callback: any) => {
  if (!val) {
    return callback();
  }
  console.log(root, tag, val, '22222222');
  chooseScrollValue(tag, val, () => {
    TimeoutFunEvent(() => {
      callback();
    }, 1000);
  });
};
const chooseScrollValue = (tag: any, val: any, callback: any) => {
  let dom: any = queryEleAll(tag.element)[tag.ind];
  DispatchMouseEvent(dom, 'mousedown');
  const scrollVal = (value: any, num: any) => {
    TimeoutFunEvent(() => {
      let root: any = queryEleAll('.rc-virtual-list-holder-inner')[tag.ind];
      let listN: any = queryFirstIframeEleAll(
        root,
        ' .ant-select-item .ant-select-item-option-content'
      );
      let btnN: any = queryFirstIframeEleAll(root, ' .ant-select-item');
      let arr = [];
      for (let k = 0; k < listN.length; k++) {
        if (listN[k].textContent === val) {
          arr.push(btnN[k]);
        }
      }
      if (arr.length > 0) {
        arr[0].click();
      }
      TimeoutFunEvent(() => {
        if (arr.length <= 0 && num <= 6) {
          console.log(dom, root.parentElement.parentElement, 'root4------');
          DispatchScrollEvent(root.parentElement.parentElement, 225);
          scrollVal(value, num + 1);
        } else {
          callback();
        }
      }, 500);
    }, 500);
  };
  scrollVal(val, 0);
};
const setUploadValue = (root: any, tag: any, val: any, callback: any, bool = false) => {
  if (!val) {
    return callback();
  }
  let uploadDom: any = queryEle(tag.element);
  if (!bool) {
    UploadImageAndAddElement(val, uploadDom);
  }
  if (bool) {
    UploadImageNoBaseAndAddElement(val, uploadDom);
  }
  TimeoutFunEvent(() => {
    callback();
  }, 2000);
};
const setCheckValue = (root: any, tag: any, val: any, callback: any) => {
  let checkDom: any = queryFirstIframeEle(root, tag.element);
  if (val) {
    DispatchMouseEvent(checkDom, 'click');
  }
  callback();
};
const setFullDateValue = (root: any, tag: any, val: any, callback: any) => {
  TimeoutFunEvent(() => {
    let checkDom: any = queryEle(tag.element);
    if (val.length >= 1) {
      checkDom.value = val[0];
      DispatchEvent(checkDom, 'change');
    }
    if (val.length >= 2) {
      let bro = checkDom.parentNode.nextSibling.nextSibling.childNodes[0];
      bro.value = val[1];
      DispatchEvent(bro, 'change');
    }
    callback();
  }, 500);
};
const setListAddValue = (root: any, tag: any, val: any, callback: any) => {
  TimeoutFunEvent(() => {
    let btnArr = queryEleAll('.ant-btn-noStyle svg');
    for (let i = 0; i < val.length; i++) {
      if (i > 0) {
        DispatchMouseEvent(btnArr[1], 'click');
      }
    }
    TimeoutFunEvent(() => {
      for (let i = 0; i < val.length; i++) {
        let inputEl: any = queryEle('#form_item_ip' + i);
        inputEl.value = val[i];
        DispatchEvent(inputEl, 'change');
      }
      callback();
    }, 500);
  }, 1000);
};
const setTree1Value = (root: any, tag: any, val: any, callback: any) => {
  let raVs: any = queryEleAll('#form_item_interactive .ant-radio-wrapper');
  if (val?.length > 0) {
    DispatchEvent(raVs[0], 'click');
    let swiCs: any = queryEleAll(
      '.ant-tree-list-holder-inner .ant-tree-treenode .ant-tree-switcher'
    );
    for (let i = 0; i < swiCs.length; i++) {
      TimeoutFunEvent(() => {
        DispatchEvent(swiCs[i], 'click');
      }, i * 500);
    }
    TimeoutFunEvent(() => {
      let texts: any = queryEleAll(
        '.ant-tree-list-holder-inner .ant-tree-treenode .ant-tree-node-content-wrapper-normal .ant-tree-title span'
      );
      let checks: any = queryEleAll(
        '.ant-tree-list-holder-inner .ant-tree-treenode .ant-tree-checkbox .ant-tree-checkbox-inner'
      );
      for (let j = 0; j < texts.length; j++) {
        for (let k = 0; k < val.length; k++) {
          if (texts[j].textContent.indexOf(val[k].type) >= 0) {
            checks[j].click();
          }
        }
      }
    }, swiCs.length * 500 + 500);
  }
  callback();
};
const setCheckUploadValue = (root: any, tag: any, val: any, callback: any) => {
  if (val?.length < 0) {
    callback();
    return;
  }
  let checkText: any = queryEleAll('#form_item_cotitemFile .ant-checkbox-wrapper>span:last-child');
  let checkBtn: any = queryEleAll('#form_item_cotitemFile .ant-checkbox-wrapper');
  for (let j = 0; j < checkText.length; j++) {
    for (let k = 0; k < val.length; k++) {
      if (val[k].img_type_show.indexOf(checkText[j].textContent) >= 0) {
        TimeoutFunEvent(() => {
          checkBtn[j].click();
        }, j * 500);
      }
    }
  }
  TimeoutFunEvent(() => {
    const checkBtnList = (list: any, num: any) => {
      if (list.length <= num) {
        callback();
        return;
      }
      setUploadValue(
        root,
        { element: BookMap[list[num].img_type] },
        list[num].show_src,
        () => {
          checkBtnList(list, num + 1);
        },
        true
      );
    };
    checkBtnList(val, 0);
  }, val.length * 500 + 500);
};
const setCheckUploadRun = (root: any, tag: any, val: any, callback: any) => {
  if (val?.length < 0) {
    callback();
    return;
  }
  let checkText: any = queryEleAll('#form_item_proaudFile .ant-checkbox-wrapper>span:last-child');
  let checkBtn: any = queryEleAll('#form_item_proaudFile .ant-checkbox-wrapper');
  for (let j = 0; j < checkText.length; j++) {
    for (let k = 0; k < val.length; k++) {
      if (val[k].approval_type_show.indexOf(checkText[j].textContent) >= 0) {
        TimeoutFunEvent(() => {
          checkBtn[j].click();
        }, j * 500);
      }
    }
  }
  TimeoutFunEvent(() => {
    const checkBtnList = (list: any, num: any) => {
      if (list.length <= num) {
        callback();
        return;
      }
      setUploadValue(
        root,
        { element: StudyMap[list[num].approval_type] },
        list[num].img_data.show_src,
        () => {
          checkBtnList(list, num + 1);
        },
        true
      );
    };
    checkBtnList(val, 0);
  }, val.length * 500 + 500);
};
const UploadImageNoBaseAndAddElement = (src: string, imgView: any) => {
  let file = base64ToFileTypeImage(src, new Date().getTime() + '.jpg');
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(file);
  imgView.files = dataTransfer.files;
  let e = new Event('change');
  imgView.dispatchEvent(e);
  return;
};
const UploadImageAndAddElement = (src: string, imgView: any) => {
  getFileBase64(src)
    .then((base) => {
      let file = base64ToFileTypeImage(base, getFileName(src));
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      imgView.files = dataTransfer.files;
      let e = new Event('change');
      imgView.dispatchEvent(e);
    })
    .catch((error) => {
      console.error('Error converting image to Blob:', error);
    });
};
const chooseSelectListValue = (root: any, data: any, callback: any) => {
  let selectDiv = queryEle(root);
  DispatchMouseEvent(selectDiv, 'mousedown');
  TimeoutFunEvent(() => {
    let dom = getOnlyDom(queryEleAll('.ant-cascader-dropdown'));
    const chooseItem = (data: any, num: any, callback: any) => {
      if (num >= data.length) {
        callback();
        return;
      }
      let lev = num + 1;
      let val = data[num];
      let list: any = queryFirstIframeEleAll(
        dom,
        '.ant-cascader-menus>.ant-cascader-menu:nth-child(' + lev + ')>.ant-cascader-menu-item'
      );
      for (let i = 0; i <= list?.length - 1; i++) {
        if (list[i].title == val) {
          DispatchMouseEvent(list[i], 'click');
        }
      }
      chooseTimerFun(() => {
        chooseItem(data, num + 1, callback);
      }, 700);
    };
    chooseItem(data, 0, callback);
  }, 1200);
};
const getOnlyDom = (list: any) => {
  if (!list || list?.length <= 0) {
    return undefined;
  }
  let dom = undefined;
  for (let i = 0; i <= list.length - 1; i++) {
    if (list[i].style.display != 'none' && !dom) {
      dom = list[i];
    }
  }
  return dom;
};
let chooseTimer: any = null;
const chooseTimerFun = (callback: any, time = 600) => {
  clearTimeout(chooseTimer);
  chooseTimer = null;
  chooseTimer = setTimeout(() => {
    callback();
  }, time);
};
