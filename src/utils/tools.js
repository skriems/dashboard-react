/*
 * removes the `/api` part of a given URL
 */
export function viewUrl(url) {
  let view = url;
  if (url) {
    view = url.toLowerCase().startsWith("/api")
      ? url.replace(/^\/api/, "")
      : url;
  }
  return view;
}

/*
 * Code to be found here:
 * https://gist.github.com/tcase360/3d0e370eca06189f025670d7dd40fe30#file-debounce-js
 *
 * Read: https://medium.com/@TCAS3/debounce-deep-dive-javascript-es6-e6f8d983b7a1
 *
 * about lodash's `shakable` issue:
 * https://stackoverflow.com/questions/41991178/correct-way-of-importing-and-using-lodash-in-angular
 */
export const debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};
