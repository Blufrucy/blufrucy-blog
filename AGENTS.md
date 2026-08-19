# AGENTS.md

本项目是 Blufrucy 的个人网站与数字花园。此文件记录 AI 协作的上下文记忆、架构决策和设计意图。

## 设计哲学

- **内容优先** — 网站是内容的容器，不为花哨牺牲可读性
- **双语原生** — 中英双语从第一天就内建于架构中，不是后期添加
- **极简克制** — 功能只加不减，动效只做必要
- **AI Native** — 整个开发流程由 Claude Code 驱动，代码生成优先于手写

## 架构决策记录 (ADR)

### ADR-1: 选择 Quartz 5 而非 Next.js/Astro
- **日期**: 2025-07
- **决定**: 使用 Quartz 5 作为静态站点生成器
- **理由**: Obsidian 原生 Markdown 兼容、内置 SPA 路由、Preact 组件系统轻量
- **代价**: 自定义灵活性受限，Quartz 的插件/布局系统有学习成本

### ADR-2: 单栏布局，移除 Quartz 默认侧边栏
- **日期**: 2025-07
- **决定**: 用 DefaultFrame 覆盖 Quartz 三栏布局为单栏居中
- **理由**: 个人博客内容以阅读为主，侧边栏分散注意力
- **实现**: `DefaultFrame.tsx` 隐藏 `.sidebar.left/.right`，CSS Grid 重定义

### ADR-3: SCSS 集中式管理而非组件级样式
- **日期**: 2025-07
- **决定**: 所有自定义样式集中在 `custom.scss`，不在每个 `.tsx` 组件各自的 `.css` 属性中分散
- **理由**: 便于全局样式一致性、暗色主题统一管理、样式复用
- **例外**: Navbar.tsx 和 Footer.tsx 因包含内联脚本保留了各自的 `.css`

### ADR-4: 页面内容用 Markdown + 内联 HTML 而非独立 TSX 组件
- **日期**: 2025-07
- **决定**: 每个页面（项目、相册、博客等）都是一个包含内联 HTML 的 `.md` 文件
- **理由**: 与 Obsidian 编辑体验兼容、非开发者也能编辑、Quartz 原生渲染管线
- **代价**: 复杂交互需要内嵌 `<script>` 标签，不如 TSX 组件优雅

### ADR-5: 收藏类页面统一设计语言
- **日期**: 2026-08
- **决定**: 相册/音乐/动漫/收藏四页重构为统一设计语言 — 共享 `.section-header`（kicker 胶囊 + 标题 + 副标题）、`1px var(--lightgray)` 描边卡片、柔和 hover 上浮
- **理由**: 四页原本风格不一且存在横向溢出；统一后视觉一致、无溢出
- **实现**: 相册为 CSS 多列瀑布流（`column-count`）+ hover 渐变字幕 + 灯箱；音乐为方形封面卡片 + hover 居中圆形播放键；动漫为横向海报卡片 + 幽灵排名序号；收藏为两列卡片网格 + 外链箭头（需隐藏 Quartz 自动注入的 `.external-icon`）
- **相关修复**: 全站横向溢出根因是 `.center` 为 `box-sizing: content-box`，`max-width: 1280px` 未含 desktop 下 `3rem×2` 内边距。已在 `.center/footer` 上加 `box-sizing: border-box` — **不要回退**，否则 108px 横向滚动条会复现

## 已知问题与 TODO

- [ ] 移动端导航栏链接在 ≤800px 时完全隐藏（`display: none`），缺少汉堡菜单
- [ ] 相册页图片源是 picsum.photos 占位图，应替换为真实照片并本地托管
- [ ] 音乐/动漫/收藏内容均为占位数据，待填充真实收藏
- [ ] 首页"Recent Posts"是硬编码单篇文章，应改为从 contentIndex.json 动态加载
- [ ] 首页 Featured 区域只有 1 张卡片，内容不足
- [ ] 构建时 TypeScript 检查有类型错误（社区插件类型声明问题），不影响构建

## 样式系统速查

| 选择器 | 用途 |
|--------|------|
| `body[data-slug="index"]` | 首页覆盖 |
| `body[data-slug="博客"]` | 博客列表页覆盖 |
| `body[data-slug="相册"]` | 相册页覆盖 |
| `body[data-slug="项目"]` | 项目页覆盖 |
| `body[data-slug="音乐"]` | 音乐页覆盖 |
| `body[data-slug="动漫"]` | 动漫页覆盖 |
| `body[data-slug="收藏"]` | 收藏页覆盖 |
| `:root[saved-theme="dark"]` | 暗色主题变量 |
| `[data-locale="en-US"]` / `[data-locale="zh-CN"]` | 语言切换 |

## 导航结构

```
/          首页 (Hero + Featured + Recent + Stack)
/项目      项目作品集
/博客      博客列表 + 标签筛选
/相册      摄影照片集 + 灯箱
/音乐      音乐收藏
/动漫      动漫推荐
/收藏      书签收藏
```
