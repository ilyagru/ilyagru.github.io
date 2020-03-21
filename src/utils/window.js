export const isWindowDefined = () => typeof window !== `undefined`;
export const isBrowserChrome = () => isWindowDefined() && window.chrome !== undefined;
export const getBodyHeight = () => document.body.scrollHeight;
export const getVisibleBodyHeight = () => (isWindowDefined() ? window.innerHeight : 0);

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

export const disableScroll = () => {
  if (!isWindowDefined()) {
    return;
  }

  if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener('wheel', preventDefault, { passive: false });
  }
  window.onwheel = preventDefault; // modern standard
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
};

export const enableScroll = () => {
  if (!isWindowDefined()) {
    return;
  }

  if (window.removeEventListener) {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener('wheel', preventDefault);
  }
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
};
