/* =========================================================
   ÉLAN 逸岚 · 全站共享脚本
   1. 商品数据  2. 瓶子插图  3. 购物袋  4. 页头页脚  5. 通用交互
   ========================================================= */

/* ---------- 1. 商品数据：改这里就能换成你自己的商品 ----------
   shape: tall | round | square | jar
   notes: [前调, 中调, 后调] */
const PRODUCTS = [
  { id: "ambre", name: "琥珀夜曲", en: "Ambre Nocturne", cat: "fragrance", catLabel: "香水", desc: "琥珀 · 雪松 · 黑香草", price: 1680, was: null, tag: "畅销", shape: "tall", c1: "#d9a35b", c2: "#7a4a17", size: "100ml", rating: 4.9, reviews: 1286, notes: ["佛手柑、粉红胡椒", "琥珀、鸢尾", "雪松、黑香草、麝香"], story: "灵感来自巴黎夜晚的爵士酒馆，温暖的琥珀与香草在肌肤上缓缓展开，如一首慵懒的夜曲。" },
  { id: "the", name: "白茶晨雾", en: "Thé Blanc", cat: "fragrance", catLabel: "香水", desc: "白茶 · 佛手柑 · 麝香", price: 1280, was: 1480, tag: "限时", shape: "round", c1: "#f1e6cf", c2: "#b8a37c", size: "75ml", rating: 4.8, reviews: 942, notes: ["佛手柑、柠檬叶", "白茶、茉莉", "白麝香、檀香"], story: "取自武夷山清晨的第一泡白茶，清透、安静，像薄雾中的一缕阳光。" },
  { id: "oud", name: "墨玉沉香", en: "Oud Noir", cat: "fragrance", catLabel: "香水", desc: "沉香 · 皮革 · 焚香", price: 2380, was: null, tag: "限量", shape: "square", c1: "#4a3a2c", c2: "#14100c", size: "100ml", rating: 5.0, reviews: 418, notes: ["粉红胡椒、藏红花", "沉香木、保加利亚玫瑰", "皮革、焚香、琥珀"], story: "取自三十年老树的天然沉香，与意大利皮革和古老焚香交织，沉稳而深邃。全球限量 2026 瓶。" },
  { id: "rose", name: "玫瑰庭院", en: "Jardin de Rose", cat: "fragrance", catLabel: "香水", desc: "大马士革玫瑰 · 荔枝", price: 1480, was: null, tag: "新品", shape: "tall", c1: "#e7a7a1", c2: "#8c3f45", size: "100ml", rating: 4.8, reviews: 653, notes: ["荔枝、粉红胡椒", "大马士革玫瑰、牡丹", "广藿香、雪松"], story: "五月的格拉斯玫瑰园，晨露未干时采下的花瓣，甜美而不失骨感。" },
  { id: "neroli", name: "橙花絮语", en: "Néroli Soie", cat: "fragrance", catLabel: "香水", desc: "橙花 · 苦橙叶 · 白麝香", price: 1380, was: null, tag: null, shape: "round", c1: "#f3d6a4", c2: "#c08a3e", size: "75ml", rating: 4.7, reviews: 512, notes: ["苦橙、柠檬", "橙花、苦橙叶", "白麝香、龙涎香"], story: "地中海午后的阳光与橙花香气，轻盈得像丝绸滑过指尖。" },
  { id: "vetiver", name: "岩兰之境", en: "Vétiver Gris", cat: "fragrance", catLabel: "香水", desc: "岩兰草 · 灰琥珀 · 黑胡椒", price: 1580, was: null, tag: null, shape: "square", c1: "#8a8f86", c2: "#2f332e", size: "100ml", rating: 4.8, reviews: 387, notes: ["黑胡椒、葡萄柚", "岩兰草、鸢尾", "灰琥珀、檀香"], story: "雨后山林的泥土与草根气息，冷静、克制，又带着一丝烟熏的温度。" },
  { id: "bois", name: "松林篝火", en: "Feu de Bois", cat: "home", catLabel: "香薰蜡烛", desc: "松针 · 烟熏 · 岩兰草", price: 680, was: null, tag: null, shape: "jar", c1: "#2c2a26", c2: "#0f0e0c", size: "220g", rating: 4.9, reviews: 1104, notes: ["松针、杜松", "烟熏桦木", "岩兰草、安息香"], story: "冬夜林间小屋的壁炉，木柴噼啪作响。燃烧时长约 55 小时。" },
  { id: "figue", name: "无花果藤", en: "Figue Verte", cat: "home", catLabel: "香薰蜡烛", desc: "无花果叶 · 椰奶", price: 620, was: 760, tag: "限时", shape: "jar", c1: "#3f4a35", c2: "#151a12", size: "220g", rating: 4.7, reviews: 728, notes: ["无花果叶", "青无花果、椰奶", "雪松、麝香"], story: "南法庭院里的一棵老无花果树，绿意与奶香交织。燃烧时长约 55 小时。" },
  { id: "ambrecandle", name: "琥珀书房", en: "Bibliothèque", cat: "home", catLabel: "香薰蜡烛", desc: "旧书页 · 皮革 · 香草", price: 720, was: null, tag: "新品", shape: "jar", c1: "#6b4a2a", c2: "#24170c", size: "220g", rating: 4.8, reviews: 296, notes: ["李子、桃", "皮革、旧纸张", "香草、零陵香豆"], story: "午后的私人书房，皮质沙发与泛黄书页的味道。燃烧时长约 55 小时。" },
  { id: "iris", name: "鸢尾丝绒", en: "Iris Velours", cat: "care", catLabel: "身体护理", desc: "鸢尾根 · 胡萝卜籽", price: 880, was: null, tag: "新品", shape: "round", c1: "#b7a7c9", c2: "#4d3f63", size: "200ml", rating: 4.8, reviews: 341, notes: ["胡萝卜籽", "鸢尾根", "麝香"], story: "丝绒质地的身体乳，粉质鸢尾香气让肌肤如雾面般柔滑。" },
  { id: "sel", name: "海盐苦橙", en: "Sel & Néroli", cat: "care", catLabel: "身体护理", desc: "海盐 · 橙花 · 鼠尾草", price: 760, was: null, tag: null, shape: "square", c1: "#a9c3c4", c2: "#3a5759", size: "250ml", rating: 4.7, reviews: 465, notes: ["海盐、苦橙", "橙花、鼠尾草", "浮木、麝香"], story: "海边悬崖上的风，清爽的沐浴啫喱，适合每一个清晨。" },
  { id: "giftset", name: "臻藏礼盒", en: "Coffret Prestige", cat: "gift", catLabel: "礼盒套装", desc: "4 支 15ml 经典香水", price: 1880, was: 2160, tag: "送礼", shape: "square", c1: "#c9a96e", c2: "#5c4422", size: "4×15ml", rating: 4.9, reviews: 832, notes: ["琥珀夜曲", "白茶晨雾 · 玫瑰庭院", "墨玉沉香"], story: "一次收藏四款经典，附手写贺卡与丝带包装，是送给重要之人的最佳选择。" },
];
const CATS = { fragrance: "香水", home: "香薰蜡烛", care: "身体护理", gift: "礼盒套装" };
const findProduct = (id) => PRODUCTS.find((p) => p.id === id);
const fmt = (n) => "¥" + n.toLocaleString("zh-CN");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- 2. SVG 瓶子插图 ---------- */
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

function productCard(p, i = 0) {
  return `
  <article class="product reveal d${i % 4}" data-cat="${p.cat}" style="--glow:${p.c1}33">
    <div class="product-figure">
      <a class="product-media" href="product.html?id=${p.id}" aria-label="${p.name}">
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
        ${bottle(p.shape, p.c1, p.c2)}
      </a>
      <button class="quick-add" data-add="${p.id}">加入购物袋</button>
    </div>
    <div class="product-info">
      <div class="cat">${p.catLabel} · ${p.en}</div>
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="desc">${p.desc}</div>
      <div class="price-row">
        <span class="price">${fmt(p.price)}${p.was ? `<s>${fmt(p.was)}</s>` : ""}</span>
        <span class="stars" aria-label="${p.rating} 星">★ ${p.rating.toFixed(1)}</span>
      </div>
    </div>
  </article>`;
}

/* ---------- 3. 购物袋（保存在浏览器本地，各页面共享） ---------- */
const CART_KEY = "elan-cart";
const Cart = {
  read() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return Cart._mem || []; } },
  write(items) { Cart._mem = items; try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch {} updateCartCount(); document.dispatchEvent(new CustomEvent("cart:change")); },
  add(id, qty = 1) { const items = Cart.read(); const it = items.find((x) => x.id === id); if (it) it.qty += qty; else items.push({ id, qty }); Cart.write(items); },
  set(id, qty) { Cart.write(Cart.read().map((x) => (x.id === id ? { ...x, qty } : x)).filter((x) => x.qty > 0)); },
  remove(id) { Cart.write(Cart.read().filter((x) => x.id !== id)); },
  count() { return Cart.read().reduce((s, x) => s + x.qty, 0); },
};
function updateCartCount(bump) {
  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = Cart.count();
    if (bump) { el.classList.add("bump"); setTimeout(() => el.classList.remove("bump"), 300); }
  });
}

/* ---------- 4. 页头页脚 ---------- */
const NAV = [
  ["collection.html", "臻选系列"],
  ["craft.html", "匠心工艺"],
  ["spotlight.html", "本季主推"],
  ["reviews.html", "客户口碑"],
  ["membership.html", "会员礼遇"],
];
const PAGE = location.pathname.split("/").pop() || "index.html";
const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
        <symbol id="laurel" viewBox="0 0 40 80"><path d="M30 4C14 22 6 44 22 76" fill="none" stroke="currentColor" stroke-width="1.2"/><g fill="currentColor"><ellipse cx="0" cy="0" rx="3.2" ry="7" transform="translate(25 10) rotate(30)"/><ellipse cx="0" cy="0" rx="3.2" ry="7" transform="translate(18 20) rotate(20)"/><ellipse cx="0" cy="0" rx="3.2" ry="7" transform="translate(13 31) rotate(10)"/><ellipse cx="0" cy="0" rx="3.2" ry="7" transform="translate(10 43) rotate(0)"/><ellipse cx="0" cy="0" rx="3.2" ry="7" transform="translate(11 55) rotate(-12)"/><ellipse cx="0" cy="0" rx="3.2" ry="7" transform="translate(15 66) rotate(-28)"/><ellipse cx="0" cy="0" rx="2.6" ry="5.5" transform="translate(30 24) rotate(70)"/><ellipse cx="0" cy="0" rx="2.6" ry="5.5" transform="translate(25 36) rotate(60)"/><ellipse cx="0" cy="0" rx="2.6" ry="5.5" transform="translate(22 48) rotate(52)"/><ellipse cx="0" cy="0" rx="2.6" ry="5.5" transform="translate(23 60) rotate(40)"/></g></symbol>
        <symbol id="flourish" viewBox="0 0 600 40">
          <path d="M40 20H252M348 20H560" fill="none" stroke="currentColor" stroke-width="1"/>
          <path d="M252 20c10 0 14-11 24-10 7 1 7 10 1 10-4 0-5-4-2-5M348 20c-10 0-14-11-24-10-7 1-7 10-1 10 4 0 5-4 2-5" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
          <path d="M252 20c10 0 14 11 24 10 7-1 7-10 1-10M348 20c-10 0-14 11-24 10-7-1-7-10-1-10" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" opacity=".6"/>
          <path d="M300 6l14 14-14 14-14-14z" fill="none" stroke="currentColor" stroke-width="1.1"/>
          <path d="M300 13l7 7-7 7-7-7z" fill="currentColor"/>
          <circle cx="226" cy="20" r="2" fill="currentColor"/><circle cx="374" cy="20" r="2" fill="currentColor"/>
          <circle cx="212" cy="20" r="1.3" fill="currentColor"/><circle cx="388" cy="20" r="1.3" fill="currentColor"/>
        </symbol>
      </svg>`;

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  el.outerHTML = `
  ${SPRITE}
  <div class="announce">全场满 ¥1,000 包邮 · 每笔订单附赠两支旅行装小样</div>
  <header class="nav">
    <div class="container nav-inner">
      <a href="index.html" class="logo">ÉL<span>A</span>N<small>逸岚</small></a>
      <ul class="nav-links">
        ${NAV.map(([href, label]) => `<li><a href="${href}"${PAGE === href ? ' class="active" aria-current="page"' : ""}>${label}</a></li>`).join("")}
      </ul>
      <div class="nav-actions">
        <a class="icon-btn${PAGE === "search.html" ? " active" : ""}" href="search.html" aria-label="搜索">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        </a>
        <a class="icon-btn${PAGE === "cart.html" ? " active" : ""}" href="cart.html" aria-label="购物袋">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>
          <span class="cart-count">0</span>
        </a>
        <button class="icon-btn menu-toggle" aria-label="菜单" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
        </button>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.outerHTML = `
  <div class="perks">
    <div class="container perks-grid">
      <div class="perk"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M3 9h17v13H3zM20 13h5l4 4v5h-9"/><circle cx="9" cy="24" r="2.5"/><circle cx="24" cy="24" r="2.5"/></svg><div><strong>顺丰包邮</strong><span>满 ¥1,000 全国包邮</span></div></div>
      <div class="perk"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M16 3 5 7v8c0 7 5 12 11 14 6-2 11-7 11-14V7L16 3Z"/><path d="m11 16 4 4 7-8"/></svg><div><strong>正品保证</strong><span>每瓶附专属防伪编号</span></div></div>
      <div class="perk"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="4" y="12" width="24" height="16"/><path d="M2 8h28v4H2zM16 8v20M16 8c-3-5-9-4-8 0M16 8c3-5 9-4 8 0"/></svg><div><strong>精美礼盒</strong><span>免费礼品包装与贺卡</span></div></div>
      <div class="perk"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M5 16a11 11 0 1 0 3-7.5"/><path d="M5 4v5h5"/></svg><div><strong>30 天无忧退换</strong><span>未拆封商品随时可退</span></div></div>
    </div>
  </div>
  <footer class="footer">
    <div class="container">
      <div class="divider-ornate" aria-hidden="true"><svg><use href="#flourish"/></svg></div>
      <div class="footer-grid">
        <div>
          <a href="index.html" class="logo">ÉL<span>A</span>N<small>逸岚</small></a>
          <p>源自格拉斯的高级香氛品牌，以气味记录生活中每一个值得珍藏的瞬间。</p>
          <div class="socials">
            <a href="#" aria-label="微信">微</a><a href="#" aria-label="微博">博</a><a href="#" aria-label="小红书">红</a><a href="#" aria-label="抖音">抖</a>
          </div>
        </div>
        <div><h5>选购</h5><ul>${Object.entries(CATS).map(([k, v]) => `<li><a href="collection.html?cat=${k}">${v}</a></li>`).join("")}</ul></div>
        <div><h5>探索</h5><ul>${NAV.slice(1).map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul></div>
        <div><h5>联系我们</h5><ul><li>400-888-0000</li><li>service@elan.example</li><li>上海市静安区南京西路 1266 号</li></ul></div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ÉLAN 逸岚. 保留所有权利。</span>
        <span>隐私政策 · 使用条款</span>
      </div>
    </div>
  </footer>
  <div class="toast" role="status"></div>`;
}

/* ---------- 5. 通用交互 ---------- */
let toastTimer;
function showToast(msg) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

const qs = (k) => new URLSearchParams(location.search).get(k);

function observeReveal(root = document) {
  if (!("IntersectionObserver" in window)) { root.querySelectorAll(".reveal").forEach((el) => el.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  root.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
}

function fillBottles(root = document) {
  root.querySelectorAll("[data-bottle]").forEach((el) => {
    const [shape, c1, c2] = el.dataset.bottle.split(",");
    el.innerHTML = bottle(shape, c1, c2);
  });
}

function initSite() {
  renderHeader();
  renderFooter();
  fillBottles();
  updateCartCount();

  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const links = document.querySelector(".nav-links");
  document.querySelector(".menu-toggle").addEventListener("click", (e) => {
    const open = links.classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  });

  // 加入购物袋：任意带 data-add 的按钮
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-add]");
    if (!btn) return;
    const p = findProduct(btn.dataset.add);
    const qty = +(btn.dataset.qty || 1);
    Cart.add(p.id, qty);
    updateCartCount(true);
    showToast(`「${p.name}」已加入购物袋`);
  });

  // 订阅表单
  document.querySelectorAll(".subscribe").forEach((f) => f.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = f.querySelector("input");
    const note = f.parentElement.querySelector(".form-note");
    if (note) note.textContent = "感谢订阅，首单礼遇已发送至 " + input.value;
    input.value = "";
  }));

  // 页面内锚点：内容居中落在导航栏下方
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.getAttribute("href").length < 2) return;
    const section = document.getElementById(a.getAttribute("href").slice(1));
    if (!section) return;
    e.preventDefault();
    const navH = nav.getBoundingClientRect().height;
    const content = section.querySelector(".container") || section;
    const r = content.getBoundingClientRect();
    const avail = window.innerHeight - navH;
    const offset = r.height < avail - 48 ? (avail - r.height) / 2 : 32;
    window.scrollTo({ top: window.scrollY + r.top - navH - offset, behavior: "smooth" });
  });

  // 数字滚动
  if ("IntersectionObserver" in window) {
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
  }

  window.addEventListener("storage", (e) => { if (e.key === CART_KEY) updateCartCount(); });
}

initSite();
// 页面脚本在 initSite 之后运行，最后统一启用渐显
requestAnimationFrame(() => observeReveal());
