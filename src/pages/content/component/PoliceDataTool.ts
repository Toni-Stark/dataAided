import { DispatchEvent, DispatchMouseEvent, queryFirstIframeEle, queryFirstIframeEleAll } from '@/pages/content/output';
import { infoCompany, infoMain, infoPerson } from '@/common/element';


export const POLICE_INFO_MAIN: any = {
  unitptyAndSelectAnd2: '.ant-row #form_item_unitpty',
  unitpty_subAndSelectAnd3: '.ant-row #form_item_unitpty_sub',
};
export const POLICE_INFO_COMPANY: any = {
  form_item_unitnmAndInput : '.ant-row #form_item_unitnm',
  form_item_uitcfttypeAndSelectAnd6 : '.ant-row #form_item_uitcfttype',
  form_item_uitcftnumAndInput: '.ant-row #form_item_uitcftnum',
  form_item_uitadrstrAndInput: '.ant-row #form_item_uitadrstr',
  form_item_uitregadrstrAndInput: '.ant-row #form_item_uitregadrstr',
  form_item_lglnmAndInput: '.ant-row #form_item_lglnm',
}
export const POLICE_INFO_PERSON: any = {
  form_item_rpbnmAndInput : '.ant-row #form_item_rpbnm',
  form_item_rpbcfttypeAndSelectAnd16: '.ant-row #form_item_rpbcfttype',
  form_item_rpbcftnumAndInput: '.ant-row #form_item_rpbcftnum',
  form_item_idecardvalidAndInput: '.ant-row #form_item_idecardvalid',
  form_item_isLongValidAndInput: '.ant-row #form_item_isLongValid',
  form_item_rpbadsstrAndInput: '.ant-row #form_item_rpbadsstr',
  form_item_rpbmobileAndInput: '.ant-row #form_item_rpbmobile',
  form_item_offtelAndInput: '.ant-row #form_item_offtel',
  form_item_rpbmailAndInput: '.ant-row #form_item_rpbmail',
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

export const setPoliceMainData = () => {
  let rootNode = document.querySelector('.bcyr-layout-content .bcyr-page-wrapper-content');
  let elements = getKeysList(POLICE_INFO_MAIN);
  currentEnterData(rootNode, elements, infoMain, () => {
    if(infoMain['unitpty']=="单位"){
      let elementCompany = getKeysList(POLICE_INFO_COMPANY);
      currentEnterData(rootNode, elementCompany, infoCompany, () => {

      })
    }
    let personCompany = getKeysList(POLICE_INFO_PERSON);
    currentEnterData(rootNode, personCompany, infoPerson, () => {

    })
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
      });
    }
    if (obj.type === "Input") {
      setInputValue(root, obj, info[obj.key], ()=>{
        currentListRun(ele, info, num+1);
      });
    }
  }
  currentListRun(element, data, 0)
}
const setSelectValue = (root: any, tag: any, val: any, callback: any) => {
  let clickDom = queryFirstIframeEle(root, tag.element)
  DispatchMouseEvent(clickDom, 'mousedown');
  setTimeout(()=>{
    let optionView: any =
      queryFirstIframeEleAll(root, '.ant-row>.ant-col:nth-child('+(tag.ind)+') .rc-virtual-list-holder-inner>.ant-select-item');
    let arr: any = [];
    for (let item of optionView) {
      arr.push(item)
    }
    let current = arr.findIndex((it: any)=>{
      return it.title == val;
    });
    let nth = current + 1;
    let resElement: any = queryFirstIframeEle(root, '.ant-row>.ant-col:nth-child('+(tag.ind)+') .rc-virtual-list-holder-inner>.ant-select-item:nth-child('+nth+')');
    resElement?.click();
    setTimeout(()=>{
      callback()
    }, 500);
  }, 500);
}
const setInputValue = (root: any, tag: any, val: any, callback: any) => {
  let inputDom: any = queryFirstIframeEle(root, tag.element);
  inputDom.value = val;
  DispatchEvent(inputDom, 'change');
  callback()
}
