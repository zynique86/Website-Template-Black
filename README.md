# ÉLAN 逸岚 · 高端产品展示网站模板

纯静态单页（HTML + CSS + 原生 JS），无需构建，直接双击 `index.html` 即可在浏览器打开。

## 页面
| 文件 | 内容 |
| --- | --- |
| `index.html` | 首页 |
| `collection.html` | 臻选系列：分类筛选与排序（支持 `?cat=fragrance`） |
| `product.html` | 商品详情（`?id=ambre`） |
| `craft.html` | 匠心工艺：品牌故事、历程、工序、原料 |
| `spotlight.html` | 本季主推：限量款 |
| `reviews.html` | 客户口碑：评分分布、筛选、写评价 |
| `membership.html` | 会员礼遇：等级、权益对比、注册、常见问题 |
| `search.html` | 搜索（`?q=玫瑰`） |
| `cart.html` | 购物袋：数量、优惠码（ELAN10 / WELCOME）、包邮进度、结算 |

## 资源
- `assets/core.js`：全站共享。顶部 `PRODUCTS` 数组即商品数据；页头页脚、购物袋（保存在浏览器 localStorage）也在这里
- `assets/home.js`：首页脚本
- `assets/styles.css`：样式。顶部 `:root` 变量控制整体配色和字体

## 配色
| 用途 | 色值 |
| --- | --- |
| 背景 曜石黑 | `#0b0b0c` |
| 主色 香槟金 | `#c9a96e` |
| 浅金 | `#e6cf9f` |
| 文字 象牙白 | `#f4efe6` |

产品图目前用 SVG 绘制的占位瓶子，替换成真实产品照片时把 `bottle(...)` 换成 `<img>` 即可。
