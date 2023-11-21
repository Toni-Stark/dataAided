//
import { DomDataSheet } from '@/pages/content/config';
export const RegGsxtConfig = (local: any) => {
  let reg = '^/[a-zA-Z0-9_-]*/';
  let regVal = local.pathname.match(reg);
  let path = local.host + (regVal ? regVal[0] : '');
  let list = ['gsxt.gov.cn'];
  let res: number = 0;
  list.find((item) => {
    res = path.indexOf(item);
    if (res >= 0) {
      return item;
    } else {
      return null;
    }
  });
  return path.slice(res);
};

export const watchScreenReg = () => {
  if (DomDataSheet.hasOwnProperty(RegGsxtConfig(document.location))) {
    DomDataSheet[RegGsxtConfig(document.location)]();
  }
};
