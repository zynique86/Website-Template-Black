/* 首页：精选 8 款商品 + 分类筛选 */
const grid = document.getElementById("productGrid");
const featured = PRODUCTS.filter((p) => p.cat !== "gift").slice(0, 8);
grid.innerHTML = featured.map(productCard).join("");

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    const list = f === "all" ? featured : PRODUCTS.filter((p) => p.cat === f).slice(0, 8);
    grid.innerHTML = list.map(productCard).join("");
    observeReveal(grid);
  });
});

/* 首页轮播：自动播放 6 秒一张，悬停暂停，支持左右箭头、标签和手机滑动 */
(function () {
  const root = document.querySelector(".hero-slider");
  if (!root) return;
  const slides = [...root.querySelectorAll(".slide")];
  const tabs = root.querySelector(".slider-tabs");
  const DUR = 4000;
  let i = 0, timer = null;
  root.style.setProperty("--dur", DUR / 1000 + "s");
  tabs.innerHTML = slides.map((s, k) => `<button class="slider-tab" role="tab" aria-label="第 ${k + 1} 张：${s.dataset.label}"><i></i><b>0${k + 1}</b>${s.dataset.label}</button>`).join("");
  const tabEls = [...tabs.children];

  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => { s.classList.toggle("is-active", k === i); s.setAttribute("aria-hidden", k !== i); s.inert = k !== i; });
    tabEls.forEach((t, k) => {
      t.classList.remove("on"); t.setAttribute("aria-selected", k === i);
      if (k === i) { void t.offsetWidth; t.classList.add("on"); } // 重新开始进度条
    });
    schedule();
  }
  function schedule() { clearTimeout(timer); timer = setTimeout(() => go(i + 1), DUR); }

  tabEls.forEach((t, k) => t.addEventListener("click", () => go(k)));
  root.querySelectorAll(".arrow-btn").forEach((b) => b.addEventListener("click", () => go(i + +b.dataset.dir)));
  let x0 = null;
  root.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1));
    x0 = null;
  });
  go(0);
})();
