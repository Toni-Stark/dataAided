import { listenerTagLoadingMessage } from '@/pages/background/TagsLoading';
import { listenerDataInfoMessage } from '@/pages/background/DataServices';
if (process.env.NODE_ENV === 'development') {
  listenerTagLoadingMessage();
  listenerDataInfoMessage();
}
console.log('插件开始运行');

export {};
