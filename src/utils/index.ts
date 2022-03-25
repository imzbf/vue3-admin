/**
 * js模拟a链接点击
 *
 * @param {string} url 目标地址
 * @param {*} option 是否新窗口、是否要求不跟踪
 */
export const goto = (
  url: string | undefined,
  option = {
    newWindow: true,
    nofollow: true
  }
) => {
  if (!url) {
    console.warn('无效的链接！');
  }

  const aEle = document.createElement('a');
  aEle.href = url as string;
  aEle.style.display = 'none';

  if (option.newWindow) {
    aEle.target = '_blank';
  }

  if (option.nofollow) {
    aEle.rel = 'noopener noreferrer';
  }

  document.body.appendChild(aEle);
  aEle.click();
  document.body.removeChild(aEle);
};

/**
 * 防抖方法封装
 *
 * @param fn 目标方法
 * @param ms 防抖延迟
 * @returns
 */
export const debounce = (fn: (...params: Array<any>) => any, ms = 200) => {
  let timer = 0;

  return (...params: Array<any>) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = window.setTimeout(() => {
      fn.apply(this, params);
      timer = 0;
    }, ms);
  };
};

export const throttle = (fn: (...params: Array<any>) => any, ms = 200) => {
  let timer = 0;
  let startStamp = 0;

  return (...params: Array<any>) => {
    if (timer > 0) {
      return;
    }

    const repeatFn = () => {
      window.requestAnimationFrame((timestamp) => {
        // 记录开始
        if (startStamp === 0) {
          startStamp = timestamp;

          // 重复执行自己
          repeatFn();
        } else {
          timer = ms - (timestamp - startStamp);

          if (timer <= 0) {
            // 到点直接执行目标方法
            fn(...params);
            // 移除开始标识
            startStamp = 0;
          } else {
            // 重复执行自己
            repeatFn();
          }
        }
      });
    };

    repeatFn();
  };
};
