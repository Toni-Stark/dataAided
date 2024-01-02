// @ts-ignore
const hack_code = 'window.alert = function(msg) { console.log(msg) };';

function injectScript(code) {
  // 不允许强制跳转.
  const white_list = ['www.corp.360zhishu.cn'];

  if (white_list.indexOf(window.location.host) < 0) {
    const script = document.createElement('script');

    script.innerHTML = code;

    (document.head || document.documentElement).appendChild(script);
  }
}
// 再次增加一个hack. 这个hack方式很简单.
injectScript(hack_code);
