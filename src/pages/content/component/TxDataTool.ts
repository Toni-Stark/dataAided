import {
  DispatchEvent,
  DispatchInputEvent,
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
  TimeoutFunEvent,
} from '@/pages/content/tools';
import { BookMap, StudyMap } from '@/common/element';

export const Tx_INFO_FIRST: any = {
  domainAndTxInput: '.app-beian-input',
};
export const Tx_INFO_MAIN: any = {
  unit_property_showAndSelectAddressAnd0: '.app-beian-text-weak',
  unit_cert_type_showAndSelectAddressAnd1: '.app-beian-text-weak',
  org_nameAndTxInput: '.org-name',
  org_numberAndTxInput: '.org-certificate-number',
  org_legalAndTxInput: '.legalPerson',
  org_cer_numberAndTxInput: '.legalPersonCerNumber',
};
export const Tx_INFO_WEB: any = {
  domainAndTxInput: '.domain',
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

export const setTxWebStartData = (data: any, num: any) => {
  const { first_info } = data;
  let list = first_info.arr[num];
  let rootNode = queryEle('#container');
  let elements1 = getKeysList(Tx_INFO_FIRST);
  currentEnterData(rootNode, elements1, list, () => {});
};
export const setTxWebData = (data: any, num: any) => {
  const { first_info } = data;
  let elements1 = getKeysList(Tx_INFO_MAIN);
  let rootNode = queryEle('#container');
  currentSelectPlaceL(first_info.tcc, () => {
    console.log(first_info);
    currentEnterData(rootNode, elements1, first_info, () => {});
  });
};
const getArtListValue = (element: any) => {
  let dom = queryEleAll(element);
  let domItem: any;
  for (let i = 0; i < dom.length; i++) {
    if (dom[i].getAttribute('aria-selected') == 'true') {
      domItem = dom[i];
    }
  }
  return parseInt(domItem?.textContent) || '';
};

const currentEnterData = (root: any, element: any, data: any, callback: any) => {
  const currentListRun = (ele: any, info: any, num: number) => {
    if (num >= ele.length) {
      callback();
      return;
    }
    let obj = ele[num];
    if (obj.type === 'TxInput') {
      setTxInput(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'UploadTypeFile') {
      setUploadFileBox(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'SelectAddress') {
      setSelectAddress(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'SelectSSS') {
      setSelectSSS(root, obj, info[obj.key], () => {
        currentListRun(ele, info, num + 1);
      });
    }
    if (obj.type === 'PatchInput') {
      setInputValuePatch(root, obj, info[obj.key], () => {
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

const setTxInput = (root: any, tag: any, val: any, callback: any) => {
  let element: any = queryFirstIframeEle(root, tag.element);
  setTxInputValue(element, val, () => {
    TimeoutFunEvent(() => {
      callback();
    }, 2000);
  });
};

const setUploadFileBox = (root: any, tag: any, val: any, callback: any) => {
  let inputDom: any = queryFirstIframeEle(root, tag.element);
  console.log(inputDom, root, tag, val, '3333333333333333333');
  let input = inputDom.parentElement.previousSibling;
  UploadImageNoBaseAndAddElement(val, input);
  TimeoutFunEvent(() => {
    callback();
  }, 2000);
};

const currentSelectPlaceL = (data: any, callback: any) => {
  let cDom: any = queryEleAll('.app-beian-input');
  cDom[0].parentElement.parentElement.click();

  const ClickBtn = (list: any, num: any) => {
    if (num >= list.length) {
      callback();
      return;
    }
    let items: any = queryEleAll('.app-beian-cascader-menu__list .app-beian-cascader-menu__label');
    let arr = [];
    for (let i = 0; i < items?.length; i++) {
      if (items[i].textContent === list[num]) {
        arr.push(items[i]);
      }
    }
    if (arr.length > 0) {
      arr[0].click();
    } else {
      items[0].click();
    }
    ClickBtn(data, num + 1);
  };

  TimeoutFunEvent(() => {
    ClickBtn(data, 0);
  }, 300);
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
const setInputValuePatch = (root: any, tag: any, val: any, callback: any) => {
  if (!val) {
    return callback();
  }
  let inputDom: any = queryEle(tag.element);
  DispatchInputEvent(inputDom, val);
  TimeoutFunEvent(() => {
    callback();
  }, 300);
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
  chooseScrollValue(tag, val, () => {
    TimeoutFunEvent(() => {
      callback();
    }, 1000);
  });
};
const chooseScrollValue = (tag: any, val: any, callback: any) => {
  let dom: any = queryEleAll(tag.element)[tag.ind];
  dom?.parentElement?.parentElement?.click();
  const scrollVal = (value: any, num: any) => {
    TimeoutFunEvent(() => {
      let listN: any = queryEleAll('.app-beian-list li');
      let arr = [];
      for (let k = 0; k < listN.length; k++) {
        if (listN[k].textContent === val) {
          arr.push(listN[k]);
        }
      }
      if (arr.length > 0) {
        arr[0].click();
      }
      TimeoutFunEvent(() => {
        if (arr.length <= 0 && num <= 3) {
          let scroll: any = queryEle('.app-beian-list');
          DispatchScrollEvent(scroll?.parentElement, 200);
          if (scroll) {
            scrollVal(value, num + 1);
          } else {
            callback();
          }
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
const setTxInputValue = (element: any, val: any, callback: any) => {
  if (val?.length < 0) {
    callback();
    return;
  }
  var d: any = Object?.getOwnPropertyDescriptor(window?.HTMLInputElement.prototype, 'value')?.set;
  d.call(element, val);
  DispatchEvent(element, 'input', { bubbles: true });
  TimeoutFunEvent(() => {
    callback();
  }, 300);
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
