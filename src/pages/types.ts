const LST: ThingMap = {
  // options_page_setting_type;
  DATA_MANAGER: 'DATA_MANAGER',
  TOOLS_STATUS: 'TOOLS_STATUS',
  EXTENSIONS_OPTIONS: 'EXTENSIONS_OPTIONS',
  SERVERS_API: 'SERVERS_API',

  // options_storage
  OPTIONS_STORAGE: 'OPTIONS_STORAGE',
};

export { LST };

interface ThingMap {
  [thingName: string]: Thing;
}

type Thing = string;

export type MessageEventType<T = any> = {
  type: string;
  data?: T;
  msg?: string;
  create?: string;
  list?: any;
  cate?: any;
  num?: any;
  change?: any;
  params: any;
  file: any;
};

export interface CreateElementType {
  tag: string;
  cla?: string;
  sty?: string;
  val?: string;
  txt?: string;
  url?: string;
}

export type ElementType = Element | HTMLInputElement | null;

export type IndexObj = {
  x: number;
  y: number;
};
