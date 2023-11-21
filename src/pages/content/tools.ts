import { CreateElementType, ElementType } from '@/pages/types';

export const queryEle = (str: string): ElementType => {
  return document.querySelector(str);
};
export const queryEleAll = (str: string): NodeListOf<Element> => {
  return document.querySelectorAll(str);
};
// 创建dom元素
export const createDom = ({ tag, cla, sty, val, txt, url }: CreateElementType): Element => {
  let dom: any = document.createElement(tag);
  try {
    if (cla) {
      dom.className = cla;
    }
    if (sty) {
      dom.style = sty;
    }
    if (val) {
      dom.value = val;
    }
    if (txt) {
      dom.textContent = txt;
    }
    if (url) {
      dom.src = url;
    }
  } catch (err) {
    console.log(err, 'err');
  }
  return dom;
};

// 获取数字是2的几次方
export const getPowerToTwo = (num: any) => {
  if (num == 1) {
    return '1';
  }
  let power = 0;
  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
      power += 1;
    } else {
      return -1;
    }
  }
  return power;
};
export const base64ToFile = (base64Data: any, fileName: any) => {
  let data = base64Data.split(',');
  const bstr = window.atob(data[1]);
  let type = fileName.split('.')[1];
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${fileName}`, {
    type: type,
  });
};
