document.addEventListener("DOMContentLoaded", () => {
  function countdown(id, start, end, duration) {
    let obj = document.getElementById(id),
      now = start,
      range = end - start,
      add = end > start ? 1 : 1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        now += add;
        obj.textContent = now;
        if (now == end) {
          clearInterval(timer);
        }
      }, step);
  }
  countdown("c1", 0, 914589999, 10);
  countdown("c2", 4, 898768200, 10);
  countdown("c3", 2, 890808040, 10);
  countdown("c4", 3, 940679990, 10);
});
