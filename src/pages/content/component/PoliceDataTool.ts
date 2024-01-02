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
  getNumbers,
  queryEle,
  queryEleAll,
  TimeoutFunEvent,
} from '@/pages/content/tools';
import { BookMap, MiniStudyMap, StudyMap } from '@/common/element';

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
  form_item_uitcftidAndUpload: '#form_item_uitcftid',
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
export const POLICE_INFO_MAIN_PERSON: any = {
  form_item_webSecurityAndCheckBoxTrue: '#form_item_webSecurity',
  form_item_wzyjllrAndCheckBoxTrue: '#form_item_wzyjllr',
  form_item_idecardfrontidAndUpload: '#form_item_safeidecardfrontid',
  form_item_idecardbackidAndUpload: '#form_item_safeidecardbackid',
  form_item_idecardgroupidAndUpload: '#form_item_safeidecardgroupid',
  form_item_emergenidecardfrontidAndUpload: '#form_item_emergenidecardfrontid',
  form_item_emergenidecardbackidAndUpload: '#form_item_emergenidecardbackid',
  form_item_emergenidecardgroupidAndUpload: '#form_item_emergenidecardgroupid',
};
export const POLICE_INFO_MINI_PERSON: any = {
  form_item_appnameAndInput: '#form_item_appname',
  form_item_typeAndTree2: '.ant-tree-list-holder-inner',
  form_item_serverinfoAndInput: '#form_item_serverinfo',
  approval_listAndCheckUploadVal: '#approval_list',
  form_item_filesAndUploadList: '#form_item_files',
};

export const POLICE_WEB_INFO_FIRST: any = {
  form_item_webnmAndInput: '.ant-row #form_item_webnm',
  form_item_moinumAndInput: '.ant-row #form_item_moinum',
  form_item_webopentimeAndDatePicker: '.ant-row #form_item_webopentime',
  form_item_maindmnAndInput: '.ant-row #form_item_maindmn',
  form_item_ymzsidAndUpload: '#form_item_ymzsid',
  form_item_ymzsvalidAndDateFull: '#form_item_ymzsvalid',
  form_item_ip0AndList: '#form_item_ip0',
};
export const POLICE_WEB_INFO_SECOND: any = {
  form_item_aspnameAndSelectSSS: '#form_item_aspname',
  form_item_acctypeAndSelectSSS: '#form_item_acctype',
};
export const POLICE_WEB_INFO_THIRD: any = {
  form_item_dspnameAndSelectSSS: '#form_item_dspname',
  form_item_interactiveAndTree1: '.ant-tree-list-holder-inner',
  permit_listFileAndCheckUpload: '#form_item_cotitemFile .ant-checkbox-wrapper',
  approval_listFileAndCheckUploadRun: '#form_item_proaudFile .ant-checkbox-wrapper',
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
export const setPoliceInfoMainData = (data: any, num: any) => {
  let rootNode = document.querySelector('#app');
  let elements = getKeysList(POLICE_INFO_MAIN_PERSON);
  currentEnterData(rootNode, elements, data[num], () => {
    console.log(data, '结果');
  });
};
export const setPoliceInfoMiniData = (data: any, num: any) => {
  console.log(data[num], 'log-------------');
  let rootNode = document.querySelector('#app');
  let elements = getKeysList(POLICE_INFO_MINI_PERSON);
  currentEnterData(rootNode, elements, data[num], () => {
    console.log(data, '结果');
  });
};
const currentEnterData = (root: any, element: any, data: any, callback: any) => {
  const currentListRun = (ele: any, info: any, num: number) => {
    if (num >= ele.length) {
      callback();
      return;
    }
    let obj = ele[num];
    if (obj.type === 'CheckBoxTrue') {
      setCheckBox(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }

    if (obj.type === 'Tree2') {
      setTree2Value(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'UploadList') {
      setUploadListValue(
        root,
        obj,
        info[obj.key],
        () => {
          currentListRun(ele, info, num + 1);
        },
        true
      );
    }
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
    if (obj.type === 'DatePicker') {
      setDatePickerValue(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'DateFull') {
      setFullDateValue(root, obj, info[obj.key], () => {
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
    if (obj.type === 'CheckUploadVal') {
      setCheckUploadRunInfo(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
  };
  currentListRun(element, data, 0);
};
const setDatePickerValue = (root: any, tag: any, val: any, callback: any) => {
  let clickDom = queryFirstIframeEle(root, tag.element);
  DispatchMouseEvent(clickDom, 'mousedown');
  TimeoutFunEvent(() => {
    let rv: any = queryEleAll('.ant-picker-panel-container');
    let rov: any = rv[0];

    let ryv = new Date(val).getFullYear();
    let rmv = new Date(val).getMonth() + 1;
    let rdv = new Date(val).getDate();
    TimeoutFunEvent(() => {
      let rmb: any = queryFirstIframeEle(rov, '.ant-picker-header-next-btn');
      let lmb: any = queryFirstIframeEle(rov, '.ant-picker-header-prev-btn');
      let mText: any = queryFirstIframeEle(rov, '.ant-picker-month-btn');
      let mv: any = getNumbers(mText?.textContent);
      if (rmv > mv) {
        clickDomView(rmb, rmv - mv);
      } else if (rmv < mv) {
        clickDomView(lmb, mv - rmv);
      }
    }, 800);
    TimeoutFunEvent(() => {
      let ryb: any = queryFirstIframeEle(rov, '.ant-picker-header-super-next-btn');
      let lyb: any = queryFirstIframeEle(rov, '.ant-picker-header-super-prev-btn');
      let yText: any = queryFirstIframeEle(rov, '.ant-picker-year-btn');
      let yv: any = getNumbers(yText?.textContent);
      if (ryv > yv) {
        clickDomView(ryb, ryv - yv);
      } else if (ryv < yv) {
        clickDomView(lyb, yv - ryv);
      }
    }, 1400);
    TimeoutFunEvent(() => {
      let list: any = queryFirstIframeEleAll(
        rov,
        'tr .ant-picker-cell-in-view .ant-picker-cell-inner'
      );
      for (let i = 0; i < list.length; i++) {
        if (list[i].textContent == rdv) {
          list[i].click();
        }
      }
      callback();
    }, 1900);
  }, 500);
};

const clickDomView = (ele: any, num: any) => {
  let val = 0;
  function clickView(e: any, n: any) {
    val += 1;
    if (val > num) {
      return;
    }
    ele.click();
    clickView(e, n + 1);
  }
  clickView(ele, 0);
};
const setCheckBox = (root: any, tag: any, val: any, callback: any) => {
  let clickDom: any = queryFirstIframeEle(root, tag.element);
  clickDom.click();
  callback();
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
      TimeoutFunEvent(() => {
        callback();
      }, 500);
    } else if (arrList[0]) {
      let parentE = btn.parentElement.parentElement.parentElement;
      let ele = parentE.querySelector(
        '.rc-virtual-list-holder-inner>.ant-select-item-option:nth-child(' + (index + 1) + ')'
      );
      DispatchMouseEvent(ele, 'click');
      TimeoutFunEvent(() => {
        let textViewText: any = arrList[0].textContent;
        DispatchMouseEvent(arrList[0], 'click');
        if (textViewText == '其他') {
          currentInputVal(tag.element, val, () => {
            callback();
          });
        } else {
          callback();
        }
      }, 400);
    } else {
      callback();
    }
  }, 500);
};
const currentInputVal = (ele: any, val: any, callback: any) => {
  TimeoutFunEvent(() => {
    let inputDom: any = queryEle(ele + 1);
    if (inputDom?.value) {
      inputDom.value = val;
      DispatchEvent(inputDom, 'change');
    }
    TimeoutFunEvent(() => {
      callback();
    }, 500);
  }, 800);
};
const setUploadListValue = (root: any, tag: any, val: any, callback: any, bool = false) => {
  if (!val) {
    return callback();
  }
  let uploadDom: any = queryEle(tag.element);
  for (let i = 0; i < val.length; i++) {
    TimeoutFunEvent(() => {
      let file: any = val[i].show_src;
      UploadImageNoBaseAndAddElement(file, uploadDom);
    }, i + 1200);
  }
  TimeoutFunEvent(() => {
    callback();
  }, val.length * 2000);
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
  let clickDom = queryFirstIframeEle(root, tag.element);
  DispatchMouseEvent(clickDom, 'mousedown');
  TimeoutFunEvent(() => {
    let rv: any = queryEleAll('.ant-picker-panel-container');
    let rov: any = rv[1];
    let lyv = new Date(val[0]).getFullYear();
    let lmv = new Date(val[0]).getMonth();
    let ldv = new Date(val[0]).getDate();
    let ryv = new Date(val[1]).getFullYear();
    let rmv = new Date(val[1]).getMonth();
    let rdv = new Date(val[1]).getDate();
    clickDateTimeBtn(rov, lyv, lmv, ldv, () => {
      TimeoutFunEvent(() => {
        clickDateTimeBtn(rov, ryv, rmv, rdv, () => {
          callback();
        });
      }, 500);
    });
  }, 500);
};
const clickFullView = (rov: any, vv: any, v: any) => {
  let val = 0;
  let mb: any;
  if (vv > v) {
    val = vv - v;
    mb = true;
  } else if (vv < v) {
    val = v - vv;
    mb = false;
  }
  function clickView(e: any, vl: any, n: any) {
    let rmb: any = queryFirstIframeEle(rov, '.ant-picker-header-next-btn');
    let lmb: any = queryFirstIframeEle(rov, '.ant-picker-header-prev-btn');
    if (n >= vl) {
      return;
    }
    (e ? rmb : lmb).click();
    TimeoutFunEvent(() => {
      clickView(e, vl, n + 1);
    }, 100);
  }
  clickView(mb, val, 0);
};
const clickFullViewYear = (rov: any, vv: any, v: any) => {
  let val = 0;
  let nv = 0;
  let mb: any;
  if (vv > v) {
    val = vv - v;
    mb = true;
  } else if (vv < v) {
    val = v - vv;
    mb = false;
  }
  function clickView(e: any, n: any) {
    let ryb: any = queryFirstIframeEle(rov, '.ant-picker-header-super-next-btn');
    let lyb: any = queryFirstIframeEle(rov, '.ant-picker-header-super-prev-btn');
    nv += 1;
    if (nv > val) {
      return;
    }
    (mb ? ryb : lyb).click();
    TimeoutFunEvent(() => {
      clickView(e, n + 1);
    }, 100);
  }
  clickView(mb, 0);
};
const clickDateTimeBtn = (rov: any, vyv: any, vmv: any, vdv: any, callback?: any) => {
  let mText: any = queryFirstIframeEle(rov, '.ant-picker-month-btn');
  let mv: any = getNumbers(mText?.textContent);
  clickFullView(rov, vmv, mv);
  TimeoutFunEvent(() => {
    let yText: any = queryFirstIframeEle(rov, '.ant-picker-year-btn');
    let yv: any = getNumbers(yText?.textContent);
    clickFullViewYear(rov, vyv, yv);
  }, 2000);
  TimeoutFunEvent(() => {
    let list: any = queryFirstIframeEleAll(
      rov,
      'tr .ant-picker-cell-in-view .ant-picker-cell-inner'
    );
    for (let i = 0; i < list.length; i++) {
      if (list[i].textContent == vdv) {
        list[i].click();
      }
    }
    if (callback) {
      callback();
    }
  }, 3600);
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
const setTree2Value = (root: any, tag: any, val: any, callback: any) => {
  if (val?.length > 0) {
    let swiCs: any = queryEleAll(
      '.ant-tree-list-holder-inner .ant-tree-treenode .ant-tree-switcher'
    );
    for (let i = 0; i < swiCs.length; i++) {
      TimeoutFunEvent(() => {
        DispatchEvent(swiCs[i], 'click');
      }, i * 200);
    }
    TimeoutFunEvent(() => {
      let texts: any = queryEleAll(
        '.ant-tree-list-holder-inner .ant-tree-treenode .ant-tree-node-content-wrapper-normal .ant-tree-title span:first-child'
      );
      let checks: any = queryEleAll(
        '.ant-tree-list-holder-inner .ant-tree-treenode .ant-tree-checkbox .ant-tree-checkbox-inner'
      );
      for (let j = 0; j < texts.length; j++) {
        for (let k = 0; k < val.length; k++) {
          if (texts[j].textContent.indexOf(val[k].type) >= 0) {
            console.log(texts[j], val);
            TimeoutFunEvent(() => {
              checks[j].click();
            }, 50 * j);
          }
        }
      }
    }, swiCs.length * 500 + 500);
  }
  callback();
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
const setCheckUploadRunInfo = (root: any, tag: any, val: any, callback: any) => {
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
        { element: MiniStudyMap[list[num].approval_type] },
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
