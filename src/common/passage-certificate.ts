
export const PathUrl = [
  'www.zhipin.com',
  'jn.58.com',
  '58.com',
  'www.jd.com',
  'www.taobao.com',
  'baixing.com',
];

// 常规网页验证
const httpReg = '^/((http|https)://)?([a-zA-Z0-9]{0,5}).([a-zA-Z0-9])*(.com|.cn|/)/';
export const pathUrlReg = (url: string) => {
  let isTrue = false;
  PathUrl.map((item) => {
    if (url.indexOf(item) > 0) {
      isTrue = true;
    }
    if (url.match(httpReg)) {
      isTrue = true;
    }
    return item;
  });
  return isTrue;
};

export const createMobileList = () => {
  function getMobile() {
    const prefixArray = ['130', '131', '132', '133', '135', '137', '138', '170', '187', '189'];
    const i = parseInt(String(10 * Math.random()));
    let prefix = prefixArray[i];
    for (let j = 0; j < 8; j++) {
      prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix;
  }
  let list = [];
  for (let i = 0; i < 300; i++) {
    list.push(getMobile());
  }
  return Array.from(new Set(list));
};

export const createPeopleNameList = () => {
  let NAMES =
    '尹黎易常武莫贺赖龚文顾侯邵孟龙万段漕钱汤郝孔白崔康毛邱秦江史范方石姚谭廖邹熊金陆余潘杜戴夏钟汪田任姜苏卢蒋蔡贾丁魏薛叶阎程曹袁邓许傅沈曾彭吕梁宋郑谢韩唐冯于董萧徐孙胡朱高林何郭马罗王李刘陈杨赵黄周吴公';
  let NICK_NAME = ['先生', '女士'];
  let nameIndex = Math.floor(Math.random() * 99.9);
  let nickIndex = Math.floor(Math.random() * 1.99);
  return NAMES.substring(nameIndex, nameIndex + 1) + NICK_NAME[nickIndex];
};

export function trimSpecial(str: string) {
  if (str !== '') {
    // const pattern =
    //     /[\.`~!@#$^\-&*()=|{}':;',\\\[\]<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
    const pattern = /[`~#$^lt&ns*()=|{};,\\[\]bp<>/！…【】；？\s]/g;
    str = str.replace(pattern, '');
  }
  return str;
}
