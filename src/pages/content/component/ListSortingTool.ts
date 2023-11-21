import { queryEle, queryEleAll } from '@/pages/content/tools';

export const DomDataSheet: any = {
  'gsxt.gov.cn': () => contextView(),
};

// 列表排序工具
const getLevel = (item: any) => {
  let text = item.querySelector('.wrap-corpStatus').textContent;
  if (text.indexOf('存续') >= 0) return 1;
  if (text.indexOf('在营') >= 0) return 2;
  if (text.indexOf('未注销') >= 0) return 3;
  if (text.indexOf('注销') >= 0) return 4;
  return 5;
};
let listTimer: any = undefined;
const contextView = () => {
  clearTimeout(listTimer);
  listTimer = undefined;
  listTimer = setTimeout(() => {
    let advList = queryEle('#advs>.main-layout>div:nth-child(2)');
    let advItems: any = queryEleAll('#advs>.main-layout>div:nth-child(2)>.search_list_item');
    let arr = [];
    for (let val of advItems) {
      arr.push(val);
    }
    let list = arr.sort((a: any, b: any) => {
      return getLevel(a) - getLevel(b);
    });
    while (advList?.firstChild) {
      advList?.removeChild(advList?.firstChild);
    }
    for (let item of list) {
      advList?.appendChild(item);
    }
  }, 2000);
};

export const RegGsxtConfig = () => {
  let local = document.location;
  let reg = '^/[a-zA-Z0-9_-]*/';
  let regVal = local.pathname.match(reg);
  let path = local.host + (regVal ? regVal[0] : '');
  let list: any = [];
  for (let key in DomDataSheet) {
    if (DomDataSheet.hasOwnProperty(key)) {
      list.push(key);
    }
  }
  let res: number = 0;
  list.find((item: string) => {
    res = path.indexOf(item);
    if (res >= 0) {
      return item;
    } else {
      return null;
    }
  });
  let str = path.slice(res);
  if (DomDataSheet.hasOwnProperty(str)) {
    DomDataSheet[str]();
    return;
  } else {
    return false;
  }
};

export const watchScreenReg = () => {};
