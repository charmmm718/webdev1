# WebDev1 - Radix UI Layout Showcase

基于 Radix UI 实现的现代 Web 布局设计展示项目，重现了 Sarasota Tech 和 Factory.ai 两种不同风格的界面设计。

## 🚀 项目特点

### 技术栈
- **React 18** - 现代 React 框架
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 快速的构建工具
- **Radix UI** - 无障碍的组件库
- **Lucide React** - 现代图标库

### 设计风格

#### 1. Sarasota Tech 风格
- 🧡 温暖的橙色主题配色
- 👥 社区化的用户界面
- 📱 三栏布局设计
- 🎨 现代卡片式组件

#### 2. Factory.ai 风格  
- ⚫ 极简的黑白灰配色
- 📄 企业级文档布局
- 🔧 专业的技术内容展示
- 📊 清晰的信息层级

## 🎯 设计分析要点

### 配色系统
- **Sarasota**: 橙色主调 + 温暖灰色
- **Factory**: 黑白对比 + 橙色点缀

### 字体层级
- 主标题: 48-56px (Bold)
- 副标题: 24-28px (Semi-Bold) 
- 正文: 16-18px (Regular)
- 小字: 12-14px (Regular)

### 布局特点
- **响应式设计** - 适配移动端和桌面端
- **组件化架构** - 可复用的 UI 组件
- **无障碍支持** - 基于 Radix UI 的可访问性

## 🛠️ 开发指南

### 安装依赖
\`\`\`bash
npm install
\`\`\`

### 启动开发服务器
\`\`\`bash
npm run dev
\`\`\`

### 构建生产版本
\`\`\`bash
npm run build
\`\`\`

## 📁 项目结构

\`\`\`
src/
├── components/          # UI 组件
│   ├── Sarasota*       # Sarasota 风格组件
│   └── Factory*        # Factory 风格组件
├── layouts/            # 布局组件
├── styles/             # 样式文件
└── App.tsx            # 主应用组件
\`\`\`

## 🎨 组件设计原则

1. **一致性** - 统一的设计语言和交互模式
2. **可访问性** - 支持键盘导航和屏幕阅读器
3. **响应式** - 适配不同设备和屏幕尺寸
4. **性能** - 优化的组件渲染和资源加载

## 📱 响应式设计

- **移动端** (< 768px): 单栏布局，隐藏侧边栏
- **平板端** (768px - 1024px): 压缩侧边栏宽度
- **桌面端** (> 1024px): 完整三栏布局

## 🔗 相关链接

- [Radix UI 官网](https://www.radix-ui.com/)
- [Sarasota Tech 参考](https://sarasota.tech/)
- [Factory.ai 参考](https://factory.ai/)

## 📄 许可证

MIT License - 详见 LICENSE 文件
