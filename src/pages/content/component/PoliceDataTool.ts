import {
  DispatchEvent,
  DispatchMouseEvent,
  DispatchScrollEvent,
  queryFirstIframeEle,
  queryFirstIframeEleAll,
} from '@/pages/content/output';
import { base64ToFileTypeImage, getFileBase64, getFileName, queryEle, queryEleAll } from '@/pages/content/tools';


export const POLICE_INFO_MAIN: any = {
  unitptyAndSelectStringAnd2: '.ant-row #form_item_unitpty',
  unitpty_subAndSelectScrollAnd3: '.ant-row #form_item_unitpty_sub',
};
export const POLICE_INFO_COMPANY: any = {
  form_item_unitnmAndInput : '.ant-row #form_item_unitnm',
  form_item_uitcfttypeAndSelectAnd6 : '.ant-row #form_item_uitcfttype',
  form_item_uitcftnumAndInput: '.ant-row #form_item_uitcftnum',
  form_item_uitadrstrAndInput: '.ant-row #form_item_uitadrstr',
  form_item_uitregadrstrAndInput: '.ant-row #form_item_uitregadrstr',
  form_item_lglnmAndInput: '.ant-row #form_item_lglnm',
  form_item_uitcftidAndUpload: '.ant-row #form_item_uitcftid',
}
export const POLICE_INFO_PERSON: any = {
  form_item_rpbnmAndInput : '.ant-row #form_item_rpbnm',
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
}

export const POLICE_WEB_INFO_MAIN: any = {
  form_item_rpbnmAndInput : '.ant-row #form_item_rpbnm',
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
}

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

export const setPoliceWebData = (data: any) => {
  // console.log(data, 1);
  // let rootNode = document.querySelector('.bcyr-layout-content .bcyr-page-wrapper-content');
  // let elements = getKeysList(POLICE_INFO_MAIN);
  // currentEnterData(rootNode, elements, infoMain, () => {
  //   if(infoMain['unitpty']=="单位"){
  //     let elementCompany = getKeysList(POLICE_INFO_COMPANY);
  //     currentEnterData(rootNode, elementCompany, infoCompany, () => {
  //
  //     })
  //   }
  //   let personCompany = getKeysList(POLICE_INFO_PERSON);
  //   currentEnterData(rootNode, personCompany, infoPerson,   () => {
  //   })
  // });
};

export const setPoliceMainData = (data: any) => {
  console.log(data, 2);
  const {main_info, company_info, person_info} = data;
  let rootNode = document.querySelector('.bcyr-layout-content .bcyr-page-wrapper-content');
  let elements = getKeysList(POLICE_INFO_MAIN);
  currentEnterData(rootNode, elements, main_info, () => {
    if(main_info['unitpty']=="单位"){
      let elementCompany = getKeysList(POLICE_INFO_COMPANY);
      currentEnterData(rootNode, elementCompany, company_info, () => {
        chooseSelectListValue("#form_item_uitadrpvs", company_info.dcc, ()=>{
          let personCompany = getKeysList(POLICE_INFO_PERSON);
          currentEnterData(rootNode, personCompany, person_info, () => {
            if(person_info?.pcc){
              chooseSelectListValue("#form_item_rpbadspvs", person_info.pcc, ()=>{
              })
            }
          })
        })
      })
    } else {
      let personCompany = getKeysList(POLICE_INFO_PERSON);
      currentEnterData(rootNode, personCompany, person_info, () => {
        if(person_info?.pcc){
          chooseSelectListValue("#form_item_rpbadspvs", person_info.pcc, ()=>{
          })
        }
      })
    }
  });
};
const currentEnterData = (root: any, element: any, data: any, callback: any) => {
  const currentListRun = (ele: any, info: any, num: number) => {
    if(num>=ele.length){
      callback();
      return;
    }
    let obj = ele[num];
    if (obj.type === "Select") {
      setSelectValue(root, obj, info[obj.key], ()=>{
        currentListRun(ele, info, num+1);
      }, 0, false);
    }
    if (obj.type === "SelectString") {
      setSelectValue(root, obj, info[obj.key], ()=>{
        currentListRun(ele, info, num+1);
      }, 1, false);
    }
    if (obj.type === "SelectScroll") {
      setSelectValue(root, obj, info[obj.key], ()=>{
        currentListRun(ele, info, num+1);
      }, 0, true);
    }
    if (obj.type === "Input") {
      setInputValue(root, obj, info[obj.key], ()=>{
        currentListRun(ele, info, num+1);
      });
    }
    if (obj.type === "Upload") {
      setUploadValue(root, obj, info[obj.key], ()=>{
        currentListRun(ele, info, num+1);
      });
    }
    if(obj.type === "Checkout") {
      setCheckValue(root, obj, info[obj.key], ()=>{
        currentListRun(ele, info, num+1);
      });
    }
  }
  currentListRun(element, data, 0)
}
const setSelectValue = (root: any, tag: any, val: any, callback: any, type: number, scroll: any) => {
  let clickDom = queryFirstIframeEle(root, tag.element)
  DispatchMouseEvent(clickDom, 'mousedown');
  setTimeout(()=>{
    if(scroll) {
      let needScroll:any = queryFirstIframeEle(root, '.ant-row>.ant-col:nth-child('+(tag.ind)+') .ant-select-dropdown .rc-virtual-list-holder');
      if(val >= 10){
        DispatchScrollEvent(needScroll, 130);
      }
    }
    setTimeout(()=>{
      let optionView: any =
        queryFirstIframeEleAll(root, '.ant-row>.ant-col:nth-child('+(tag.ind)+') .rc-virtual-list-holder-inner>.ant-select-item');
      let arr: any = [];
      for (let item of optionView) {
        arr.push(item)
      }
      let current = arr.findIndex((it: any)=>{
        let value;
        if(type){
          value = it.title;
        } else {
          value = it.getAttribute('dictorder');
        }
        return value == val;
      });
      let nth = current + 1;
      let resElement: any = queryFirstIframeEle(root, '.ant-row>.ant-col:nth-child('+(tag.ind)+') .rc-virtual-list-holder-inner>.ant-select-item:nth-child('+nth+')');
      resElement?.click();
      setTimeout(()=>{
        callback()
      }, 500);
    }, 500);
  }, 500);
}
const setInputValue = (root: any, tag: any, val: any, callback: any) => {
  let inputDom: any = queryFirstIframeEle(root, tag.element);
  inputDom.value = val;
  DispatchEvent(inputDom, 'change');
  callback()
}
const setUploadValue = (root: any, tag: any, val: any, callback: any) => {
  let uploadDom: any = queryFirstIframeEle(root, tag.element);
  UploadImageAndAddElement(val, uploadDom);
  callback()
}
const setCheckValue = (root: any, tag: any, val: any, callback: any) => {
  let checkDom: any = queryFirstIframeEle(root, tag.element);
  console.log(checkDom, val)
  if(val){
    DispatchMouseEvent(checkDom, 'click');
  }
  callback()
}
const UploadImageAndAddElement = (src: string, imgView: any) => {
  getFileBase64(src).then(base => {
    let file = base64ToFileTypeImage(base, getFileName(src));
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    imgView.files = dataTransfer.files;
    let e = new Event('change');
    imgView.dispatchEvent(e);
  })
    .catch(error => {
      console.error('Error converting image to Blob:', error);
    });
}
const chooseSelectListValue = (root: any, data: any, callback:any) => {
  let selectDiv = queryEle(root);
  DispatchMouseEvent(selectDiv, 'mousedown');
  setTimeout(()=>{
    let dom = getOnlyDom(queryEleAll(".ant-cascader-dropdown"));
    const chooseItem = (data: any, num: any, callback: any) => {
      if(num>=data.length){
        callback();
        return;
      }
      let lev = num+1;
      let val = data[num];
      let list: any = queryFirstIframeEleAll(dom, ".ant-cascader-menus>.ant-cascader-menu:nth-child("+lev+")>.ant-cascader-menu-item");
      for (let i = 0; i<=list?.length-1; i++){
        if(list[i].title == val){
          DispatchMouseEvent(list[i], 'click');
        }
      }
      chooseTimerFun(()=>{
        chooseItem(data, num+1, callback)
      },700)
    }
    chooseItem(data, 0, callback);
  }, 1200);
}
const getOnlyDom = (list: any) => {
  if(!list || list?.length<=0){
    return undefined;
  }
  let dom = undefined;
  for(let i = 0; i<=list.length-1;i++){
    if(list[i].style.display != "none" && !dom){
      dom = list[i];
    }
  }
  return dom;
}
let chooseTimer: any = null;
const chooseTimerFun = (callback: any, time = 600)=>{
  clearTimeout(chooseTimer);
  chooseTimer = null;
  chooseTimer = setTimeout(()=>{
    callback();
  }, time)
}
