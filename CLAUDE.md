# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

贺钰堂 (Blufrucy) 的个人网站与数字花园。中英双语，由 Obsidian 管理 Markdown 内容，Quartz 5 编译为静态站点，Vercel 部署。

## 构建命令

```bash
cd quartz
npm install
npx quartz build -d ../content           # 生产构建 → public/
npx quartz build -d ../content --serve    # 开发服务器 http://localhost:8080
npm run check                              # TypeScript 检查
npm run format                             # Prettier 格式化
```

## 架构

```
Blufrucy-blog/
├── content/               # Obsidian vault — 页面和博客文章 (.md)
│   ├── index.md           # 首页 Hero + Featured + Tech Stack
│   ├── *.md               # 页面：项目、博客、相册、音乐、动漫、收藏
│   └── docs/              # 博客文章，拖放 .md 即发布
├── quartz/
│   ├── quartz.config.yaml # Quartz 配置：主题颜色、字体、插件、布局
│   ├── quartz/
│   │   ├── components/    # 自定义 Preact 组件
│   │   │   ├── Navbar.tsx  # 粘性导航栏，内联明暗切换 + 语言切换脚本
│   │   │   ├── Footer.tsx  # 自定义页脚 (Blufrucy 品牌)
│   │   │   └── frames/     # DefaultFrame: 单栏居中布局，覆盖 Quartz 三栏
│   │   └── styles/
│   │       └── custom.scss # 全部自定义样式 (~2000 行 SCSS)
│   └── public/             # 构建产物 (Vercel 部署到此目录)
└── vercel.json
```

## 核心设计模式

### 双语系统
- HTML 中通过 `lang-en` / `lang-zh` class 包裹对应语言内容
- CSS 用 `[data-locale="en-US"]` / `[data-locale="zh-CN"]` 控制显示
- 语言分隔线：`<hr data-lang-split="en-zh"/>`（默认隐藏）
- localStorage `locale` 记忆用户偏好

### 明暗主题
- CSS 自定义属性驱动，通过 `:root[saved-theme="dark"]` / `:root[saved-theme="light"]` 切换
- 暗色背景 `#0f0f0f`（纯黑），亮色背景 `#faf8f8`
- Navbar.tsx 内联 `beforeDOMLoaded` 脚本防 FOUC
- `color-scheme: dark/light` 声明跟随主题

### 页面自定义内容
- Quartz 将 Markdown 编译为 HTML 并以 `Content` 组件渲染至 DefaultFrame 的 center 区域
- 页面使用 `body[data-slug="slug名"]` 隐藏 Quartz 默认元素 (`.page-header`, `.note-properties`, `.article-title`, `.search-button`)
- 交互逻辑（博客筛选、相册灯箱）通过 Markdown 文件内嵌 `<script>` 实现

### 组件注册
- 自定义组件通过 `componentRegistry.register("name", factory, "local")` 本地注册，覆盖 Quartz 默认

### 博客文章约定
- 文章放 `content/docs/`，frontmatter 含 `tags` 数组 → 自动出现在博客列表页
- 博客列表从 `/static/contentIndex.json` 动态加载（构建时生成）

## 样式约定
- 所有页面自定义样式在 `custom.scss`，按模块分节（`// ========` 分隔）
- CSS 变量使用 Quartz 语义 token：`--light`, `--dark`, `--gray`, `--lightgray`, `--darkgray`, `--secondary`, `--tertiary`, `--highlight`
- 页面级覆盖使用 `body[data-slug="xxx"]` 选择器
- 卡片交互：`scale(0.985)` 按下反馈，`prefers-reduced-motion` 全局禁用
- 暗色模式卡片 shadow 使用 `rgba(255,255,255,0.08)` 微弱发光 + `rgba(0,0,0,0.5)` 投影
