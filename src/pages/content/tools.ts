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

export const base64ToFileTypeImage = (base64Data: any, fileName: any) => {
  let data = base64Data.split(',');
  const bstr = window.atob(data[1]);
  let type = 'image/png';
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${fileName}`, {
    type: type,
  });
};
export const getFileBase64 = (url: any) => {
  return new Promise((resolve) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blobData) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
          // 在这里处理Base64编码的图像数据
          resolve(base64Data);
        };
        reader.readAsDataURL(blobData);
      });
  });
};
export const getFileBlob = (url: any) => {
  return new Promise((resolve) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blobData) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
          // 在这里处理Base64编码的图像数据
          resolve(base64Data);
        };
        reader.readAsDataURL(blobData);
      });
  });
};
export const getFileName = (url: any) => {
  return url.match(/\/([^\/?#]+)[^\/]*$/)[1];
};

export const getMapValue = (key: any, Map: any) => {
  let value = '';
  for (let i in Map) {
    if (i == key) {
      value = Map[i];
    }
  }
  return value;
};
export const TimeoutFunEvent = (callback: any, duration: any) => {
  let timer: any = setTimeout(() => {
    callback();
    clearTimeout(timer);
    timer = null;
  }, duration);
};
