import { createContentView } from '@/pages/content/component/FloatView';
import {
  OPEN_MOUSE_LISTENER,
  SET_FINAL_STEP_DATA,
  SET_FIRST_STEP_DATA,
  SET_SECOND_STEP_DATA,
} from '@/common/agreement';
import { MessageEventType } from '@/pages/types';
import { setFirstStepData, setSecondStepData, setThreeStepData } from '@/pages/content/output';
chrome.runtime.onMessage.addListener(
  (
    request: MessageEventType,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response: string) => void
  ) => {
    if (document.readyState !== 'complete') return;
    if (request?.msg === OPEN_MOUSE_LISTENER) {
      createContentView();
      return;
    }
    if (request?.msg === SET_FIRST_STEP_DATA) {
      setFirstStepData(request.data);
      return;
    }
    if (request?.msg === SET_SECOND_STEP_DATA) {
      setSecondStepData(request.data);
      return;
    }
    if (request?.msg === SET_FINAL_STEP_DATA) {
      setThreeStepData(request.data);
      return;
    }
    sendResponse('received');
    if (process.env.NODE_ENV === 'development') {
      if (request.type === 'window.location.reload') {
        console.log('current page will reload.');
        window.location.reload();
      }
    }
  }
);
export {};
