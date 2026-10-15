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
