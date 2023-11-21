import { queryEle, queryEleAll } from '@/pages/content/tools';

const getLevel = (item: any) => {
  let text = item.querySelector('.wrap-corpStatus').textContent;
  if (text.indexOf('存续') >= 0) return 1;
  if (text.indexOf('在营') >= 0) return 2;
  if (text.indexOf('未注销') >= 0) return 3;
  if (text.indexOf('注销') >= 0) return 4;
  return 5;
};
let timer: any = undefined;
const contextView = () => {
  clearTimeout(timer);
  timer = undefined;
  timer = setTimeout(() => {
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

export const DomDataSheet: any = {
  'gsxt.gov.cn': () => contextView(),
};
