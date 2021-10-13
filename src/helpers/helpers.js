export function format(msec, secFlag = false) {
  const f = v => v < 10 ? "0" + v : v;
  let sec = Math.floor(msec / 1000)
  let h = Math.floor(sec / 3600);
  let restSec = sec - h * 3600;
  let m = Math.floor((restSec) / 60);
  restSec -= m * 60;
  return (secFlag) ? h + ":" + f(m) + ":" + f(restSec) : h + ":" + f(m)
}