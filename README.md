<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://readme-typing-svg.demolab.com?font=Schibsted+Grotesk&weight=600&size=36&duration=3000&pause=1000&color=FFFFFF&center=true&vCenter=true&width=600&lines=%E8%B4%BA%E9%92%B0%E5%A0%82+%2F+Blufrucy;AI+Native+Developer;Designer+%C2%B7+Creator" />
    <source media="(prefers-color-scheme: light)" srcset="https://readme-typing-svg.demolab.com?font=Schibsted+Grotesk&weight=600&size=36&duration=3000&pause=1000&color=1A1A1A&center=true&vCenter=true&width=600&lines=%E8%B4%BA%E9%92%B0%E5%A0%82+%2F+Blufrucy;AI+Native+Developer;Designer+%C2%B7+Creator" />
    <img src="https://readme-typing-svg.demolab.com?font=Schibsted+Grotesk&weight=600&size=36&duration=3000&pause=1000&color=1A1A1A&center=true&vCenter=true&width=600&lines=%E8%B4%BA%E9%92%B0%E5%A0%82+%2F+Blufrucy;AI+Native+Developer;Designer+%C2%B7+Creator" alt="Typing SVG" />
  </picture>
</p>

<p align="center">
  <samp>个人网站 &amp; 数字花园 — 由 <b>Obsidian</b> 驱动内容 · <b>Quartz 5</b> 生成站点 · <b>Vercel</b> 部署</samp>
</p>

<p align="center">
  <a href="https://blufrucy.top"><img src="https://img.shields.io/badge/blufrucy.top-%E2%86%97-1a1a1a?style=flat-square" alt="blufrucy.top" /></a>
  <a href="https://quartz.jzhao.xyz"><img src="https://img.shields.io/badge/Quartz-5.0.0-9588dd?style=flat-square" alt="Quartz 5.0.0" /></a>
  <a href="https://vercel.com"><img src="https://img.shields.io/badge/Vercel-deployed-171717?style=flat-square&logo=vercel" alt="Vercel" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-84a59d?style=flat-square" alt="MIT License" /></a>
</p>

<br />

---

## ✦ 关于本站

这是我的个人主页与数字花园。我在**桂林电子科技大学**读软件工程本科，以 **AI Native Developer** 的身份工作 — 不亲手写每一行代码，而是定义需求、调度 Coding Agent、审查生成、集成系统、持续验证。

本站用 **Obsidian** 管理 Markdown 笔记，**Quartz 5** 编译为静态站点，部署在 **Vercel**。所有内容中英双语，一套 CSS 实现明暗主题切换。

## ✦ 页面

| 页面 | 路由 | 内容 |
|------|------|------|
| **首页** | `/` | Hero 双栏布局 + Social Pills + 项目卡片 + 技术栈 |
| **项目** | `/项目` | 6 个作品卡片网格，含标签和外部链接图标 |
| **博客** | `/博客` | 动态列表 + 标签筛选，从 `contentIndex.json` 自动加载 |
| **相册** | `/相册` | 9 图网格 + 灯箱，图片懒加载淡入 + shimmer 骨架屏 |
| **音乐** | `/音乐` | 6 张专辑卡片，渐变封面 + 流派标签 + hover 播放图标 |
| **动漫** | `/动漫` | 6 部推荐横向卡片，海报 + 评分 + 类型标签 + 个人评价 |
| **收藏** | `/收藏` | 5 分类书签列表，AI/设计/工具/学习/博客 |

## ✦ 功能亮点

<table>
  <tr>
    <td><b>🌗 明暗主题</b></td>
    <td>纯黑背景 (<code>#0f0f0f</code>) · CSS 变量驱动 · 系统跟随 + 手动切换 · 零 FOUC</td>
  </tr>
  <tr>
    <td><b>🌐 中英双语</b></td>
    <td><code>data-locale</code> 属性切换 · 导航栏一键中/EN · localStorage 记忆语言偏好</td>
  </tr>
  <tr>
    <td><b>📝 博客系统</b></td>
    <td><code>docs/</code> 文件夹拖放即发布 · 自动读取 <code>contentIndex.json</code> 渲染列表 · 标签动态生成 · 前端筛选</td>
  </tr>
  <tr>
    <td><b>🏠 主页 Hero</b></td>
    <td>响应式双栏布局 · 人物肖像 + 装饰边框 · Social Pills · 操作按钮 · 技术栈胶囊</td>
  </tr>
  <tr>
    <td><b>🧭 Sticky 导航栏</b></td>
    <td>全宽毛玻璃 · <code>backdrop-filter: blur(8px)</code> · active 高亮 · 移动端自适应</td>
  </tr>
  <tr>
    <td><b>🎬 动效系统</b></td>
    <td>卡片 hover 阴影 · 按下 <code>scale(0.985)</code> 反馈 · <code>:focus-visible</code> 键盘焦点 · <code>prefers-reduced-motion</code> 全局禁用</td>
  </tr>
  <tr>
    <td><b>📊 访问统计</b></td>
    <td>Plausible Analytics · 隐私友好 · 零 Cookie · SPA 页面切换追踪</td>
  </tr>
</table>

## ✦ 目录结构

```
Blufrucy-blog/
├── content/                  # Obsidian 笔记库
│   ├── index.md              # 首页 (Hero + Featured + Recent + Stack)
│   ├── 项目.md               # 项目作品集 (卡片网格)
│   ├── 博客.md               # 博客列表页 (动态列表 + 标签筛选)
│   ├── 相册.md               # 摄影相册 (网格 + 灯箱)
│   ├── 音乐.md               # 音乐收藏 (专辑卡片)
│   ├── 动漫.md               # 动漫推荐 (海报卡片)
│   ├── 收藏.md               # 收藏夹 (分类链接)
│   └── docs/                 # 博客文章 (拖放 .md 即发布)
├── quartz/                   # Quartz 5 生成器
│   ├── quartz/
│   │   ├── components/       # 自定义 Preact 组件
│   │   │   ├── Navbar.tsx    #   导航栏 (明暗 + 语言切换)
│   │   │   ├── Footer.tsx    #   自定义页脚 (Blufrucy 品牌)
│   │   │   └── frames/       #   布局框架 (Default, FullWidth, Minimal)
│   │   ├── styles/
│   │   │   ├── custom.scss   #   ⭐ 全部自定义样式 (~1960 行)
│   │   │   └── variables.scss
│   │   └── plugins/
│   ├── quartz.config.yaml    # ⭐ Quartz 配置 (主题/插件/布局)
│   ├── public/               # 构建产物 (Vercel 部署目录)
│   └── package.json
├── vercel.json               # Vercel 配置 (cleanUrls)
├── CLAUDE.md                 # Claude Code 项目指南
├── AGENTS.md                 # AI 协作上下文与 ADR
└── README.md
```

## ✦ 技术栈

| 层 | 选型 | 理由 |
|---|---|---|
| **内容创作** | Obsidian | Markdown 笔记 + 双向链接 + 本地 vault |
| **静态生成** | Quartz 5 (TypeScript) | Obsidian 原生风格 · 插件生态 · SPA 路由 |
| **样式** | SCSS + CSS Variables | 主题变量 · 响应式断点 · ~1960 行精细化样式 |
| **组件** | Preact (JSX) | 轻量 · Quartz 内置 · 自定义 Navbar/Footer/Frame |
| **字体** | Schibsted Grotesk + Source Sans Pro | Google Fonts · 标题/正文分层 |
| **分析** | Plausible Analytics | 隐私优先 · 零 Cookie · SPA 追踪 |
| **部署** | Vercel | 边缘网络 · 自动 HTTPS · `blufrucy.top` |

## ✦ 本地开发

```bash
# 1. 安装依赖
cd quartz
npm install

# 2. 启动开发服务器 (含热重载)
npx quartz build -d ../content --serve
# → http://localhost:8080

# 3. 生产构建 (输出到 public/)
npx quartz build -d ../content

# 4. 检查 TypeScript + 格式化
npm run check
npm run format
```

## ✦ 博客文章约定

```yaml
---
title: 文章标题
description: 简短描述，会显示在博客列表中。
tags:
  - Arduino
  - 嵌入式
date: 2026-07-20
---
```

文章放 `content/docs/`，frontmatter 中的 `tags` 自动出现在博客筛选系统。

## ✦ 自定义组件

| 组件 | 文件 | 功能 |
|---|---|---|
| **Navbar** | `quartz/components/Navbar.tsx` | Sticky 导航 · 明暗切换 · 中/EN 语言切换 · active 高亮 · 内联防 FOUC 脚本 |
| **Footer** | `quartz/components/Footer.tsx` | 全宽页脚 · Blufrucy 品牌字标 · 邮箱 + 电话 |
| **DefaultFrame** | `quartz/components/frames/DefaultFrame.tsx` | 单栏居中布局 · 无侧边栏 · 使用自定义 Footer |

所有组件通过 `componentRegistry.register()` 本地注册，覆盖 Quartz 默认实现。

## ✦ 样式系统

[`custom.scss`](quartz/quartz/styles/custom.scss) 包含 ~1960 行 SCSS，按模块组织：

| 模块 | 内容 |
|---|---|
| **Layout** | CSS Grid 单栏居中 · 100vw 全宽技巧 · footer 贴底 |
| **Navbar** | 毛玻璃效果 · 响应式 · 暗色模式 |
| **Hero** | 双栏响应式 · 肖像框装饰边框 · 字体阶梯缩放 (3rem → 4.5rem) |
| **Cards** | 圆角 12px 项目卡片 · 3 列响应式网格 · 暗色适配阴影 |
| **Pills** | 圆角胶囊 · Social Pills · Stack Pills · 标签滤镜 |
| **Blog** | 列表化布局 · 2 行截断描述 · 标签胶囊 · 筛选按钮 · hover 高亮背景 |
| **Gallery** | 3 列网格相册 · 灯箱 · shimmer 骨架屏 · 图片淡入 |
| **Music** | 专辑卡片 · 渐变封面 · hover 播放图标 · 试听按钮 |
| **Anime** | 横向海报卡片 · 评分展示 · 类型标签 · 日文标题副行 |
| **Bookmarks** | 分类区段 · 书签列表 · 来源标签 · hover 色移 |
| **Footer** | 全宽 · 响应式 flex · 品牌展示 |
| **Theme** | CSS Variables 暗色/亮色双主题 · `#0f0f0f` 纯黑背景 · `prefers-reduced-motion` |

## ✦ AI 协作

本项目由 Claude Code 驱动开发，项目配置了 [CLAUDE.md](CLAUDE.md)（项目指南）和 [AGENTS.md](AGENTS.md)（AI 协作上下文，含架构决策记录）。

## ✦ 许可

[MIT](LICENSE) · 贺钰堂 © 2026

---

<p align="center">
  <samp>
    ⋆｡°✩  Built with
    <a href="https://obsidian.md">Obsidian</a> +
    <a href="https://quartz.jzhao.xyz">Quartz</a> +
    <a href="https://vercel.com">Vercel</a>  ✩°｡⋆
  </samp>
</p>
