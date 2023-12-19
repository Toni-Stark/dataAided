import {
  DispatchEvent,
  DispatchMouseEvent,
  DispatchScrollEvent,
  queryFirstIframeEle,
  queryFirstIframeEleAll,
} from '@/pages/content/output';
import {
  base64ToFileTypeImage,
  getFileBase64,
  getFileName,
  queryEle,
  queryEleAll,
} from '@/pages/content/tools';

export const POLICE_INFO_MAIN: any = {
  unitptyAndSelectStringAnd2: '.ant-row #form_item_unitpty',
  unitpty_subAndSelectScrollAnd3: '.ant-row #form_item_unitpty_sub',
};
export const POLICE_INFO_COMPANY: any = {
  form_item_unitnmAndInput: '.ant-row #form_item_unitnm',
  form_item_uitcfttypeAndSelectAnd6: '.ant-row #form_item_uitcfttype',
  form_item_uitcftnumAndInput: '.ant-row #form_item_uitcftnum',
  form_item_uitadrstrAndInput: '.ant-row #form_item_uitadrstr',
  form_item_uitregadrstrAndInput: '.ant-row #form_item_uitregadrstr',
  form_item_lglnmAndInput: '.ant-row #form_item_lglnm',
  form_item_uitcftidAndUpload: '.ant-row #form_item_uitcftid',
};
export const POLICE_INFO_PERSON: any = {
  form_item_rpbnmAndInput: '.ant-row #form_item_rpbnm',
  form_item_rpbcfttypeAndSelectAnd16: '.ant-row #form_item_rpbcfttype',
  form_item_rpbcftnumAndInput: '.ant-row #form_item_rpbcftnum',
  form_item_idecardvalidAndInput: '.ant-row #form_item_idecardvalid',
  form_item_isLongValidAndCheckout: '.ant-row #form_item_isLongValid',
  form_item_rpbadsstrAndInput: '.ant-row #form_item_rpbadsstr',
  form_item_rpbmobileAndInput: '.ant-row #form_item_rpbmobile',
  form_item_offtelAndInput: '.ant-row #form_item_offtel',
  form_item_rpbmailAndInput: '.ant-row #form_item_rpbmail',
  form_item_idecardfrontidAndUpload: '.ant-row #form_item_idecardfrontid',
  form_item_idecardbackidAndUpload: '.ant-row #form_item_idecardbackid',
  form_item_idecardgroupidAndUpload: '.ant-row #form_item_idecardgroupid',
};

export const POLICE_WEB_INFO_FIRST: any = {
  form_item_webnmAndInput: '.ant-row #form_item_webnm',
  form_item_moinumAndInput: '.ant-row #form_item_moinum',
  form_item_webopentimeAndInput: '.ant-row #form_item_webopentime',
  form_item_maindmnAndInput: '.ant-row #form_item_maindmn',
  form_item_ymzsidAndUpload: '#form_item_ymzsid',
  form_item_ymzsvalidAndDateFull: '#form_item_ymzsvalid',
  form_item_ip0AndList: '#form_item_ip0',
};
export const POLICE_WEB_INFO_SECOND: any = {
  form_item_aspnameAndSelectSSS: '.ant-row #form_item_aspname',
  form_item_acctypeAndSelectSSS: '.ant-row #form_item_acctype',
};
export const POLICE_WEB_INFO_THIRD: any = {
  form_item_dspnameAndSelectSSS: '#form_item_dspname',
  form_item_interactiveAndTree1: '.ant-tree-list-holder-inner',
};
export const POLICE_WEB_INFO_FOUR: any = {
  form_item_cotitemFileAndCheckout: '#form_item_cotitemFile',
  form_item_proaudFileAndCheckout: '#form_item_proaudFile',
};
export const POLICE_WEB_INFO_FIVE: any = {
  form_item_languageAndRadio: '#form_item_language',
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

export const setPoliceWebData = (data: any, num: number) => {
  console.log(data, '666666');
  let info = data[num];
  let rootNode = document.querySelector('.bcyr-layout-content .bcyr-page-wrapper-content');
  let elements1 = getKeysList(POLICE_WEB_INFO_FIRST);
  currentEnterData(rootNode, elements1, info.info_first, () => {
    if (info.info_second?.ycc) {
      chooseSelectListValue('#form_item_asppvs', info.info_second.ycc, () => {
        let elements2 = getKeysList(POLICE_WEB_INFO_SECOND);
        currentEnterData(rootNode, elements2, info.info_second, () => {
          chooseSelectListValue('#form_item_dsppvs', info.info_third.zcc, () => {
            let elements3 = getKeysList(POLICE_WEB_INFO_THIRD);
            currentEnterData(rootNode, elements3, info.info_third, () => {});
          });
        });
      });
    }
  });
};

export const setPoliceMainData = (data: any) => {
  console.log(data, 2);
  const { main_info, company_info, person_info } = data;
  let rootNode = document.querySelector('.bcyr-layout-content .bcyr-page-wrapper-content');
  let elements = getKeysList(POLICE_INFO_MAIN);
  currentEnterData(rootNode, elements, main_info, () => {
    if (main_info['unitpty'] == '单位') {
      let elementCompany = getKeysList(POLICE_INFO_COMPANY);
      currentEnterData(rootNode, elementCompany, company_info, () => {
        chooseSelectListValue('#form_item_uitadrpvs', company_info.dcc, () => {
          let personCompany = getKeysList(POLICE_INFO_PERSON);
          currentEnterData(rootNode, personCompany, person_info, () => {
            if (person_info?.pcc) {
              chooseSelectListValue('#form_item_rpbadspvs', person_info.pcc, () => {});
            }
          });
        });
      });
    } else {
      let personCompany = getKeysList(POLICE_INFO_PERSON);
      currentEnterData(rootNode, personCompany, person_info, () => {
        if (person_info?.pcc) {
          chooseSelectListValue('#form_item_rpbadspvs', person_info.pcc, () => {});
        }
      });
    }
  });
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
      setUploadValue(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
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
  setTimeout(() => {
    if (scroll) {
      let needScroll: any = queryFirstIframeEle(
        root,
        '.ant-row>.ant-col:nth-child(' + tag.ind + ') .ant-select-dropdown .rc-virtual-list-holder'
      );
      if (val >= 10) {
        DispatchScrollEvent(needScroll, 130);
      }
    }
    setTimeout(() => {
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
      setTimeout(() => {
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
  console.log(val, tag.element, clickDom, 'select_value');
  DispatchMouseEvent(clickDom, 'mousedown');
  setTimeout(() => {
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
    for (let i = 0; i < arrList.length - 1; i++) {
      if (arrList[i].textContent === val) {
        index = i;
      }
    }

    if (index !== null) {
      let parentE = btn.parentElement.parentElement.parentElement;
      let ele = parentE.querySelector(
        '.rc-virtual-list-holder-inner>.ant-select-item-option:nth-child(' + index + ')'
      );
      DispatchMouseEvent(ele, 'click');
    }
    setTimeout(() => {
      callback();
    }, 500);
  }, 500);
};
const setUploadValue = (root: any, tag: any, val: any, callback: any) => {
  console.log('upload', val);
  if (!val) {
    return callback();
  }
  let uploadDom: any = queryFirstIframeEle(root, tag.element);
  UploadImageAndAddElement(val, uploadDom);
  callback();
};
const setCheckValue = (root: any, tag: any, val: any, callback: any) => {
  let checkDom: any = queryFirstIframeEle(root, tag.element);
  if (val) {
    DispatchMouseEvent(checkDom, 'click');
  }
  callback();
};
const setFullDateValue = (root: any, tag: any, val: any, callback: any) => {
  setTimeout(() => {
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
  setTimeout(() => {
    let btnArr = queryEleAll('.ant-btn-noStyle svg');
    for (let i = 0; i < val.length; i++) {
      if (i > 0) {
        DispatchMouseEvent(btnArr[1], 'click');
      }
    }
    setTimeout(() => {
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
  let raVs = queryEle('#form_item_interactive .ant-radio-wrapper');
  // if(){}
  callback();
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
  setTimeout(() => {
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
