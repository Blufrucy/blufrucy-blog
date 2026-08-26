---
title: AI编码工作流
description: 我的AI编码探索第一步
tags:
  - AI
date: 2026年7月18日
---
编程工具+工具管理站+开发IDE

## Claude code安装
我们首先需要安装一个AI编程工具，我这里选择Claude code

管理员打开终端，运行

```
安装命令：npm install -g @anthropic-ai/claude-code

检查安装版本：claude --version
```

提示版本信息，说明安装成功了
如果没有npm的话，可以下载node.js或者参考官网使用对应命令安装

## CC Switch安装

工具管理站我使用CC Switch

[CC Switch 下载 - macOS / Windows / Linux 官方安装包](https://ccswitch.io/zh/download)

配置在CC Switch中添加Deepseek供应商

获取deepseek的APi_keys后填入，请在模型映射处，勾选申明1M上下文

保存后请在终端执行命令claude，如果出现claude界面并可以使用说明配置成功

CC Switch右上角每个选项作用

	skills：为AI添加技能，若搜索不到对应技能，请先添加技能对应的url地址，再进行搜索
	
	提示词：用于添加你编码的习惯，以及对ai的全局规则，例如：用中文回复，代码注释用英文，注释写 why 不写 how

	会话：查看历史聊天记录
	
	MCP服务器：实现大语言模型与外部工具和数据系统统一通信的服务端，
	
		例如：添加MCP服务器context7（获取最新技术信息-提供给ai）
		
		步骤：CC Switch中添加MCP服务器，直接选择context7，勾选claude，保存，

进入context官网[Context7 - Up-to-date documentation for LLMs and AI code editors](https://context7.com/)

登陆后获取api_key

在环境变量的系统变量中新建变量：

	变量名：CONTEXT7_API_KEY
	
	变量值：你刚获取的api_key

保存后记得在cc switch设置->路由->本地路由->打开（在主页面显示本地路由开关 和 路由总开关）

然后重新在终端中输入时加入context7，就能让ai去获取最新的信息

	例如：用 context7 帮我查一下 React 的最新 hooks 文档，根据这个文档分析项目是否可以使用最新版本特性


## deepseek-api获取

[DeepSeek 开放平台](https://platform.deepseek.com/api_keys)

## 如何在vscode或其他IDE中使用claude

vscode直接安装claude插件就能使用

其他IDEA如果没有claude插件，在IDE中的终端打开claude就行

