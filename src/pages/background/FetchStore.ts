import { rejects } from 'assert';
import { getFileName } from '@/pages/content/tools';

export const FetchApi = ({ url, method, data }: FetchType) => {
  return new Promise((resolve) => {
    const option: any = {
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify(data),
    };
    fetch(url, option).then((res) => {
      switch (res.status) {
        case 200:
          res.text().then((result: any) => {
            let resultData = JSON.parse(result);
            if (result.code === 200) {
              return resolve({ data: resultData.data });
            } else {
              return resolve({ data: resultData.data });
            }
          });
          break;
        default:
          return resolve(res);
      }
    });
  });
};

export const PostAPI = async (params: FetchType) => {
  return await FetchApi({ ...params, method: 'POST' });
};

export const GetAPI = async (params: FetchType) => {
  return await FetchApi({ ...params, method: 'GET' });
};


// let option = {
//   fileName: getFileName(src),
//   Referer: location.href,
//   Origin: location.origin,
// }
export const UploadFiles = async (option: any, blob: any) => {
  return new Promise((resolve, reject)=>{
    let formData = new FormData();
    formData.append('filetype', 'beian_web_');
    formData.append('file', blob, option.fileName);

    const headers = new Headers({
      'Referer': option.Referer,
      'Origin': option.Origin,
      'Token': 'auto',
      'Timestamp': new Date().getTime().toString(),
      'Zo': 'bwtiQ2oTjN+9PQWMmn2MimF0MmH8NgrwIVXak/+7DORhQvZ/OGEhfv0Gj/s4Kl7Uk6JOLs62wxzyy6/YLAFtLtIInmOp/9lL1bAs3SgYpkwglq36V/3qEjWDZ3221BFj0+jAYow3sQ5Rc/1meKOPFiqO8ael14azmBJx011veeM=',
      'X-Requested-With': 'XMLHttpRequest'
    });

    fetch('https://beian.mps.gov.cn/fileservice/file/upload', {
      method: 'POST',
      headers: headers,
      body: formData,
      credentials: 'include',
    })
    .then((response) => response.json())
    .then((res) => {
      // 处理上传成功后的响应
      resolve(res.data);
    })
    .catch((error) => {
      // 处理上传失败的情况
      console.error('上传失败:', error);
    });
  })
};

export type FetchType = {
  url: string;
  data?: any;
  method?: any;
  type?: string;
};
