export const isWindowDefined = () => typeof window !== 'undefined';
export const isBrowserChrome = () => isWindowDefined() && window.chrome !== undefined;
export const getBodyHeight = () => document.body.scrollHeight;
export const getVisibleBodyHeight = () => (isWindowDefined() ? window.innerHeight : 0);

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys: { [key: number]: number } = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(event: Event) {
  const eventInternal = event || window.event;
  if (eventInternal.preventDefault) {
    eventInternal.preventDefault();
  }
  eventInternal.returnValue = false;
}
function preventDefaultForScrollKeys(event: KeyboardEvent) {
  if (keys[event.keyCode]) {
    preventDefault(event);
  }

  return false;
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
