/* =========================================================
   产品数据：改这里就能换成你自己的商品
   shape: tall | round | square | jar
   ========================================================= */
const PRODUCTS = [
  { name: "琥珀夜曲", en: "Ambre Nocturne", cat: "fragrance", catLabel: "香水", desc: "琥珀 · 雪松 · 黑香草", price: 1680, was: null, tag: "畅销", shape: "tall", c1: "#d9a35b", c2: "#7a4a17" },
  { name: "白茶晨雾", en: "Thé Blanc", cat: "fragrance", catLabel: "香水", desc: "白茶 · 佛手柑 · 麝香", price: 1280, was: 1480, tag: "限时", shape: "round", c1: "#f1e6cf", c2: "#b8a37c" },
  { name: "墨玉沉香", en: "Oud Noir", cat: "fragrance", catLabel: "香水", desc: "沉香 · 皮革 · 焚香", price: 2380, was: null, tag: "限量", shape: "square", c1: "#4a3a2c", c2: "#14100c" },
  { name: "玫瑰庭院", en: "Jardin de Rose", cat: "fragrance", catLabel: "香水", desc: "大马士革玫瑰 · 荔枝", price: 1480, was: null, tag: "新品", shape: "tall", c1: "#e7a7a1", c2: "#8c3f45" },
  { name: "松林篝火", en: "Feu de Bois", cat: "home", catLabel: "香薰蜡烛", desc: "松针 · 烟熏 · 岩兰草", price: 680, was: null, tag: null, shape: "jar", c1: "#2c2a26", c2: "#0f0e0c" },
  { name: "无花果藤", en: "Figue Verte", cat: "home", catLabel: "香薰蜡烛", desc: "无花果叶 · 椰奶", price: 620, was: 760, tag: "限时", shape: "jar", c1: "#3f4a35", c2: "#151a12" },
  { name: "鸢尾丝绒", en: "Iris Velours", cat: "care", catLabel: "身体护理", desc: "鸢尾根 · 胡萝卜籽", price: 880, was: null, tag: "新品", shape: "round", c1: "#b7a7c9", c2: "#4d3f63" },
  { name: "海盐苦橙", en: "Sel & Néroli", cat: "care", catLabel: "身体护理", desc: "海盐 · 橙花 · 鼠尾草", price: 760, was: null, tag: null, shape: "square", c1: "#a9c3c4", c2: "#3a5759" },
];

/* ---------- SVG 瓶子绘制 ---------- */
let uid = 0;
function bottle(shape, c1, c2, label = "ÉLAN") {
  const id = "b" + uid++;
  const defs = `
    <defs>
      <linearGradient id="${id}l" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
      </linearGradient>
      <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#7d6136"/><stop offset=".35" stop-color="#f3dfb0"/>
        <stop offset=".6" stop-color="#c9a96e"/><stop offset="1" stop-color="#6b5129"/>
      </linearGradient>
      <linearGradient id="${id}s" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#fff" stop-opacity=".0"/><stop offset=".5" stop-color="#fff" stop-opacity=".35"/>
        <stop offset="1" stop-color="#fff" stop-opacity="0"/>
      </linearGradient>
    </defs>`;
  const lbl = (y, w = 70) => `
    <rect x="${100 - w / 2}" y="${y}" width="${w}" height="34" fill="none" stroke="#f3dfb0" stroke-opacity=".7" stroke-width="1"/>
    <text x="100" y="${y + 22}" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="14" letter-spacing="4" fill="#f6ead0">${label}</text>`;
  const shapes = {
    tall: `
      <rect x="78" y="8" width="44" height="54" rx="3" fill="url(#${id}g)"/>
      <rect x="88" y="62" width="24" height="16" fill="url(#${id}g)" opacity=".85"/>
      <rect x="40" y="76" width="120" height="214" rx="16" fill="url(#${id}l)"/>
      <rect x="40" y="76" width="120" height="214" rx="16" fill="none" stroke="#fff" stroke-opacity=".25"/>
      <rect x="54" y="90" width="16" height="186" rx="8" fill="url(#${id}s)"/>
      ${lbl(170)}`,
    round: `
      <rect x="80" y="18" width="40" height="48" rx="3" fill="url(#${id}g)"/>
      <rect x="89" y="66" width="22" height="30" fill="url(#${id}g)" opacity=".85"/>
      <circle cx="100" cy="192" r="98" fill="url(#${id}l)"/>
      <circle cx="100" cy="192" r="98" fill="none" stroke="#fff" stroke-opacity=".25"/>
      <ellipse cx="62" cy="160" rx="14" ry="50" fill="url(#${id}s)" transform="rotate(18 62 160)"/>
      ${lbl(178)}`,
    square: `
      <rect x="66" y="12" width="68" height="56" rx="2" fill="url(#${id}g)"/>
      <rect x="66" y="38" width="68" height="2" fill="#000" opacity=".25"/>
      <rect x="86" y="68" width="28" height="14" fill="url(#${id}g)" opacity=".85"/>
      <rect x="28" y="80" width="144" height="210" rx="5" fill="url(#${id}l)"/>
      <rect x="36" y="88" width="128" height="194" rx="3" fill="none" stroke="#fff" stroke-opacity=".22"/>
      <rect x="46" y="96" width="14" height="178" fill="url(#${id}s)"/>
      ${lbl(172, 80)}`,
    jar: `
      <rect x="26" y="70" width="148" height="34" rx="6" fill="url(#${id}g)"/>
      <rect x="32" y="104" width="136" height="186" rx="10" fill="url(#${id}l)"/>
      <rect x="32" y="104" width="136" height="186" rx="10" fill="none" stroke="#fff" stroke-opacity=".2"/>
      <rect x="46" y="116" width="14" height="160" rx="7" fill="url(#${id}s)"/>
      ${lbl(182, 84)}`,
  };
  return `<svg viewBox="0 0 200 300" aria-hidden="true">${defs}${shapes[shape]}</svg>`;
}

/* ---------- 渲染产品 ---------- */
const fmt = (n) => "¥" + n.toLocaleString("zh-CN");
const grid = document.getElementById("productGrid");
grid.innerHTML = PRODUCTS.map((p, i) => `
  <article class="product reveal d${i % 4}" data-cat="${p.cat}" style="--glow:${p.c1}33">
    <div class="product-media">
      ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
      ${bottle(p.shape, p.c1, p.c2)}
      <button class="quick-add" data-name="${p.name}">加入购物袋</button>
    </div>
    <div class="product-info">
      <div class="cat">${p.catLabel} · ${p.en}</div>
      <h3>${p.name}</h3>
      <div class="desc">${p.desc}</div>
      <div class="price-row">
        <span class="price">${fmt(p.price)}${p.was ? `<s>${fmt(p.was)}</s>` : ""}</span>
        <span class="stars" aria-label="5 星">★★★★★</span>
      </div>
    </div>
  </article>`).join("");

document.querySelectorAll("[data-bottle]").forEach((el) => {
  const [shape, c1, c2] = el.dataset.bottle.split(",");
  el.innerHTML = bottle(shape, c1, c2);
});

/* ---------- 分类筛选 ---------- */
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    grid.querySelectorAll(".product").forEach((card) => {
      card.classList.toggle("hide", f !== "all" && card.dataset.cat !== f);
    });
  });
});

/* ---------- 购物袋 & 提示 ---------- */
const countEl = document.querySelector(".cart-count");
const toast = document.querySelector(".toast");
let cart = 0, toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-name]");
  if (!add) return;
  cart++;
  countEl.textContent = cart;
  countEl.classList.add("bump");
  setTimeout(() => countEl.classList.remove("bump"), 300);
  showToast(`「${add.dataset.name}」已加入购物袋`);
});

/* ---------- 订阅表单 ---------- */
document.querySelector(".subscribe").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.querySelector("input");
  document.querySelector(".form-note").textContent = "感谢订阅，首单礼遇已发送至 " + input.value;
  input.value = "";
});

/* ---------- 导航 ---------- */
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const links = document.querySelector(".nav-links");
document.querySelector(".menu-toggle").addEventListener("click", (e) => {
  const open = links.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });

/* ---------- 导航跳转：内容居中落在导航栏下方 ---------- */
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  const navH = nav.getBoundingClientRect().height;
  const content = section.querySelector(".container") || section;
  const r = content.getBoundingClientRect();
  const avail = window.innerHeight - navH;
  const offset = r.height < avail - 48 ? (avail - r.height) / 2 : 32;
  window.scrollTo({ top: window.scrollY + r.top - navH - offset, behavior: "smooth" });
}
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || a.getAttribute("href").length < 2) return;
  e.preventDefault();
  links.classList.remove("open");
  scrollToSection(a.getAttribute("href").slice(1));
});

/* ---------- 滚动渐显 & 数字滚动 ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    io.unobserve(en.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const countIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target, end = +el.dataset.count, suffix = el.dataset.suffix || "";
    const t0 = performance.now(), dur = 1800;
    const tick = (t) => {
      const k = Math.min((t - t0) / dur, 1), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
      el.textContent = v.toLocaleString("zh-CN") + suffix;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll("[data-count]").forEach((el) => countIO.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
