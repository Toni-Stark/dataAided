import {
  NEW_VERSION_FILING_DATA,
  SET_FINAL_STEP_DATA,
  SET_FIRST_STEP_DATA,
  SET_SECOND_STEP_DATA,
  SET_FINAL_OLD_DATA,
  OLD_VERSION_FILING_DATA,
  SET_FINAL_OLD_DATA_SECOND,
  SET_FINAL_OLD_MAIN_FILE,
  SET_FINAL_OLD_WEB_FILE,
} from '@/common/agreement';
import { sendMessageQueryCurrent } from '@/pages/background/SettingStore';
import { oldFinalData } from '@/common/element';

export const listenerDataInfoMessage = (mobiles: string[]) => {
  chrome.runtime.onMessage?.removeListener(() => {});
  chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
    if (response?.type === NEW_VERSION_FILING_DATA) {
      const { tab } = sender;
      if (!tab?.id) return true;
      if (response?.step === SET_FIRST_STEP_DATA) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_FIRST_STEP_DATA,
          data: oldFinalData,
        });
      }
      if (response?.step === SET_SECOND_STEP_DATA) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_SECOND_STEP_DATA,
          data: oldFinalData,
          num: response?.num,
        });
      }
      if (response?.step === SET_FINAL_STEP_DATA) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_FINAL_STEP_DATA,
          data: oldFinalData,
        });
      }
    }
    if (response?.type === OLD_VERSION_FILING_DATA) {
      const { tab } = sender;
      if (!tab?.id) return true;
      if (response?.step === SET_FINAL_OLD_DATA) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_FINAL_OLD_DATA,
          data: oldFinalData,
        });
      }
      if (response?.step === SET_FINAL_OLD_DATA_SECOND) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_FINAL_OLD_DATA_SECOND,
          data: oldFinalData,
          num: response?.num,
        });
      }
      if (response?.step === SET_FINAL_OLD_MAIN_FILE) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_FINAL_OLD_MAIN_FILE,
          data: oldFinalData,
        });
      }
      if (response?.step === SET_FINAL_OLD_WEB_FILE) {
        sendMessageQueryCurrent(tab.id, {
          msg: SET_FINAL_OLD_WEB_FILE,
          data: oldFinalData,
          num: response?.num,
        });
      }

      return true;
    }
    return true;
  });
};
