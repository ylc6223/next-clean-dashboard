[toc]

## 项目启动

First, run the development server:

```bash
安装依赖
npm install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

预览地址[http://localhost:3000](http://localhost:3000) 

这个项目使用 [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) 自动优化和加载自定义 Google 字体 Inter。

## 课程目标
构建一个简化版本的财务仪表板，具备开始构建全栈 Next.js 应用程序所需的基本技能。
其中包含：
- 公共主页
- 登陆页面
- 受身份验证保护的仪表板页面。即路由守卫
- 发票的增删改查

> 前置知识

假设已对 React 和 JavaScript及TailwindCSS的使用有基本的了解。例如组件、props、状态和钩子，以及服务器组件和 Suspense等新功能。

## 你将学习到

- **Styling**: The different ways to style your application in Next.js.
  样式：在 Next.js 中设置应用程序样式的不同方法。
- **Optimizations**: How to optimize images, links, and fonts.
  优化：如何优化图像、链接和字体。
- **Routing**: How to create nested layouts and pages using file-system routing.
  路由：如何使用文件系统路由创建嵌套布局和页面。
- **Data Fetching**: How to set up a database on Vercel, and best practices for fetching and streaming.
  数据获取：如何在 Vercel 上设置数据库，以及获取和流式传输的最佳实践。
- **Search and Pagination**: How to implement search and pagination using URL Search Params.
  搜索和分页：如何使用 URL 搜索参数实现搜索和分页。
- **Mutating Data:** How to mutate data using React Server Actions, and revalidate the Next.js cache.
  改变数据：如何使用 React Server Actions 改变数据，并重新验证 Next.js 缓存。
- **Error Handling:** How to handle general and `404` not found errors.
  错误处理：如何处理一般错误和 `404` 未找到错误。
- **Form Validation and Accessibility:** How to do server-side form validation and tips for improving accessibility.
  表单验证和可访问性：如何进行服务器端表单验证以及提高可访问性的提示。
- **Authentication**: How to add authentication to your application using [`NextAuth.js`](https://next-auth.js.org/) and Middleware.
  身份验证：如何使用 `NextAuth.js` 和中间件向应用程序添加身份验证。
- **Metadata**: How to add metadata and prepare your application for social sharing.
  元数据：如何添加元数据并准备您的应用程序以进行社交共享。

## 项目结构

```bash
├── public                     # 包含应用程序的所有静态资源，例如图像
│   │── favicon.ico            # favicon
│   └── index.html             # index.html template
├── scripts    								 # 填充数据库用的脚本。
├── src                        # 
│   ├── app                    # 
│   		├── assets             #静态资源 
│   		├── lib             	 # 存放工具类和数据获取函数
│   		├── ui             	   # UI 组件，例如卡片、表格和表单
│   		├── components         # 组件
│   		├── icons              # svg icons
│   		├── lang               # i18n 插件
│   		├── layout             # 公共布局
│   		├── store              # 全局状态管理
│   		├── styles             # 样式
│   		├── utils              # 工具函数
│   		├── layout.tsx         # 页面根布局
│   		└── 暂无      # 暂无
├── .eslintrc.js               # eslint config
├── .travis.yml                # automated CI configuration
├── tailwind.config.js         # tailwind config
├── next.config.ts         		 # next config
├── postcss.config.js          # postcss config
├── ts.config.json          	 # typescript config
└── package.json               # package.json
```

## 环境配置

## 课程章节
### 1.创建 Next.js 应用并运行开发服务器。

#### 1.1创建模板

terminal中使用脚手架创建next.js模板

```
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```

切换到项目目录

```
cd nextjs-dashboard
```

#### 1.2安装依赖

```
npm install
```

#### 1.3本地环境下启动开发服务器

```
npm run dev
```

#### 1.4预览

浏览器中预览它们。预览地址[http://localhost:3000](http://localhost:3000) 

您的主页现在应该如下所示：

![image-20240319184410563](README.assets/image-20240319184410563.png)

> 也许你会感到很惊讶，这么多东西关于Next.js该如何下手，别担心，现在你无需过度关注生成的CSS页面，我都已经提前为你准备好了。下面就跟着我一步步来体验和尝试Next.js中的特性

### 2.在Next.js中应用CSS样式

在页面根布局`layout.txs`中为项目引入全局CSS样式。

what is 根布局？先别管

查看 `/app/ui` 文件夹，看到一个名为 `global.css` 的文件。

![image-20240319185939786](README.assets/image-20240319185939786.png)

#### 开始之前

Tailwind 是一个原子化CSS 框架，允许你直接在 TSX 标记中快速编写框架提前定义好的CSS类，从而加快开发过程。

当你使用 `create-next-app` 启动新项目时，Next.js 会询问您是否要使用 Tailwind。请务必选择 `yes` ，Next.js 将自动安装必要的包并在你的应用程序中配置 Tailwind。

为了节省时间，我已经提前准备好了你将使用的所有组件的样式。

#### 2.1为项目应用全局样式

`通过/app/ui/global.css尝试修改全局样式`

使用此文件将 CSS 规则添加到应用程序中的所有路由 - 例如 CSS 重置规则、链接等 HTML 元素的站点范围样式等，在此文件`global.css` 中声明的所有css样式，将作用于项目下的所有页面。

```
import '@/app/ui/global.css';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

#### 2.2为单独页面应用样式

如果你查看 `/app/page.tsx` ，你会发现我们在示例中使用了 Tailwind 类。

![image-20240319191319477](README.assets/image-20240319191319477.png)

#### 2.3CSS Modules

如果您更喜欢编写传统的 CSS 规则或将样式与 JSX 分开 - CSS 模块是一个很好的选择。

CSS 模块允许您通过自动创建唯一的类名来将 CSS 范围限定为组件，因此您也不必担心样式冲突。

在 `/app/ui` 内，创建一个名为 `home.module.css` 的新文件并添加任意CSS 规则：

```
.btn-primary{
    font-size: 2rem;
    color: orange;
}
```

然后，在 `/app/page.tsx` 文件中导入样式并用 `styles["btn-primary"]` 替换 开始使用按钮`<div>` 中的 Tailwind 类名称：

```
import styles from '@/app/ui/home.module.css';
<div className={styles["btn-primary"]} />;
```

保存更改并在浏览器中预览它们。你应该看到与之前相同的形状。

Tailwind 和 CSS Modules是设计 Next.js 应用程序样式的两种最常见的方法。无论使用其中一种还是另一种，都取决于个人偏好 - 你甚至可以在同一个应用程序中同时使用两者！

但为了方便演示，接下来的步骤都全程使用`tailwindcss`来进行演示

#### 2.4.关于动态切换类名

在某些情况下，可能需要根据状态或其他条件有条件地设置元素的样式。

`clsx` 或`classnames`是一个可让你轻松切换类名称的库。

#### 2.5.其他方案

- 使用SASS
- 使用CSS-in-JS方案

#### 课后思考:

为什么要使用CSS模块化，有什么好处吗，可以展开来说说吗？

https://github.com/css-modules/css-modules

- 防止命名冲突

CSS 模块使用本地作用域来避免不同项目部分之间的样式冲突，从而允许组件作用域内的样式设置。

- 明确样式依赖

将样式导入到各自的组件中可以明确哪些样式影响哪些区域，从而增强代码的可读性和可维护性。

- 解决全局范围问题

CSS 模块通过将样式本地化到特定组件，防止一个文件中影响整个项目的常见样式问题。

- 提高可重用性和模块化性

CSS 模块允许在不同模块中使用相同的类名，从而促进模块化、可重用的样式。



### 3.优化字体和图像

#### 3.1优化图像和字体的目的

**可以从性能、用户体验、降本增效说起**

> 优化图像和字体对于提高网站性能、用户体验以及降低运营成本都非常重要

- 移动设备性能优化

在移动设备上，带宽和处理能力可能有限。通过优化图像和字体，可以减少移动设备上的资源消耗，加载速度更快。

- 响应式设计支持

在响应式网站设计中，网站必须适应不同设备和屏幕尺寸。通过优化图像和字体，可以提供适合不同分辨率和屏幕尺寸的资源，使网站在各种设备上加载更快并呈现更好的外观。

- 页面加载速度优化

大图像和未经优化的字体文件会增加网页的加载时间。优化图像和字体可以减少页面的文件大小，从而`加快页面加载速度`。这对于`提高用户体验`和`用户留存率`非常关键，因为用户更倾向于访问加载速度更快的网站。

- 节省带宽

优化图像和字体可以`节省服务器带宽`。减少传输的数据量有助于`降低服务器负载`，同时也`降低了网站的运营成本`，特别是对于流量较大的网站来说尤为重要。

- 提高搜索引擎排名

网站加载速度是搜索引擎排名的一个重要因素之一。通过优化图像和字体，可以提高网站的加载速度，从而有助于提高在搜索引擎中的排名。

- 减少累积布局偏移

**Cumulative Layout Shift**(简称CLS)是 Google 用于评估网站性能和用户体验的指标

对于字体，当浏览器最初以后备字体或系统字体呈现文本，然后在加载后将其交换为自定义字体时，就会发生布局转换。这种交换可能会导致文本大小、间距或布局发生变化，从而移动其周围的元素。

![Mock UI showing initial load of a page, followed by a layout shift as the custom font loads.](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Ffont-layout-shift.png&w=3840&q=75&dpl=dpl_8iFhYcsMR1yZCSy8P48EVBnnKv9e)

#### 3.2用next/font优化字体

使用 `next/font` 模块时，Next.js 会自动优化应用程序中的字体。**Next会在构建时下载字体文件并将它们与其他静态资产一起托管。**这意味着当用户访问您的应用程序时，不会出现会影响性能的额外网络请求字体。

##### 3.2.1引入并初始化字体

向项目添加自定义 Google 字体，并观察它是如何工作的

在`/app/ui`文件夹中，创建一个名为 的新文件`fonts.ts`。我们将使用此文件来存放将在整个项目中使用的字体相关配置。

`/app/ui/fonts.ts`

```
//这个代码的作用是引入了Google Fonts中的Noto_Sans字体
import { Noto_Sans } from 'next/font/google';

export const notoSans = Noto_Sans({
  subsets: ['latin'],//指定了使用的字符集为 latin
  style: ['italic', 'normal'],//指定字体样式
  weight: ['300', '500', '700'],//指定字体粗细
  variable: '--noto-sans',  // 指定使用css变量方法时的字体变量名
});

```

variable 选项配置例子：

- `variable: '--font-inter'` ：声明 CSS 变量 `--font-inter`

使用的CSS变量方法的时候将可以使用声明的CSS变量

![image-20240321021748927](README.assets/image-20240321021748927.png)

`notoSans`从模块导入字体`next/font/google`- 这说我们本次课程所使用的主要字体。然后指定哪个[子集](https://fonts.google.com/knowledge/glossary/subsetting)你想加载。在这种情况下，`'latin'`：

> 这里需要了解一些背景知识。某些字体为了支持不同的语言和符号，通常包含多个字符集。 如果我们不指定字符集，通常网页加载的字体文件会包含所有字符集。而包含多个字符集的字体文件通常体积更大，这会影响到页面的加载时间，特别是在网络连接速度较慢的情况下。
>
> 了解了这些后回到项目代码。因为这个项目是个文字内容只有英文的网页。若我们要使用`Inter`字体，在实例化`Inter`字体时，可以特别声明，我们只需要`latin`字符集，用于支持英文。
>
> 这样可以缩小字体体积，减少不必要的资源加载，优化网页性能。

##### 3.2.2为整个项目应用字体

`/app/layout.tsx`

```
import type { Metadata } from 'next';
import { notoSans } from '@/app/ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'MyAdmin',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} antialiased`}>{children}</body>
    </html>
  );
}

```

像这样，通过添加`Noto_Sans`到`<body>`元素，字体将作用于整个项目。在这里，我们还添加了 Tailwind[`antialiased`](https://tailwindcss.com/docs/font-smoothing)平滑字体的类。没有必要使用这个类，但它增加了一个不错的感觉。

ok，让我们回到浏览器界面，F12，打开开发工具并选择`body`元素。可以看到`Noto_Sans`并且`Noto_Sans_Fallback`现在已应用在样式下

![image-20240321014441789](README.assets/image-20240321014441789.png)

##### 3.2.3为局部应用字体

还可以将字体添加到项目的特定元素。只需要将对应的类名绑定在非`<body>`的对应标签上即可

##### **练习**使用自定义字体

现在轮到你了！在你的`fonts.ts`文件中，导入名为 的汉字字体`ZCOOL_XiaoWei`并将其应用到/app/pa ge.tsx`<h1>`元素。除了像以前一样指定子集之外，你还需要指定字体**粗细**。

`/app/ui/fonts.tsx`

```
import { Inter, Noto_Sans, ZCOOL_XiaoWei } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const notoSans = Noto_Sans({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['300', '500', '700'],
  variable: '--noto-sans',
});

export const zcoolXiaoWei = ZCOOL_XiaoWei({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
  // 指定生成的字体变量名
  variable: '--ZCOOL-XiaoWei',
});

```

`/app/page.tsx`

```
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/app/components/nav';
import logo from '@/assets/img/logo.svg';
import { zcoolXiaoWei } from '@/app/ui/fonts';
import clsx from 'clsx';
 
export default function Page() {
  return (
    // ...
    <h1 
    className={clsx(`text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ${zcoolXiaoWei.className}`
  )}
>
  欢迎来到 DashEase.
</h1>
    // ...
  );
}

```

#### 3.3用next/image优化图像

太棒了，现在已经向项目添加了两种自定义字体！接下来，让我们向主页添加Hero图片并对图片进行优化

#### 课后思考

你可能对下列的描述感到困惑

> **Next会在构建时下载字体文件并将它们与其他静态资产一起托管**。为什么说不会产生额外的网络请求?

在构建过程中例如 `next build`，Next.js 会下载字体文件并将它们与其他静态资产一起托管。这意味着字体文件将会被打包进你的 Next.js 应用程序的构建输出中例如dist文件夹。当用户访问你的应用程序时，这些字体文件将会从与应用程序相同的服务器上提供，而不需要额外的网络请求。这样就避免了从外部 CDN 或字体服务器请求字体文件的网络开销，因此说不会产生额外的网络请求。

## 依赖介绍

```
{
  "dependencies": {
    "@heroicons/react": "^2.0.18",//hero图标
    "@tailwindcss/forms": "^0.5.7",//提供表单样式的基本重置，使表单元素易于使用tailwind工具类覆盖的插件
    "@types/node": "20.5.7",			//nodejs的类型声明
    "@vercel/postgres": "^0.5.0",
    "autoprefixer": "10.4.15",//postcss插件 自动加上兼容性前缀
    "bcrypt": "^5.1.1",//对字符串使用加密算法
    "clsx": "^2.0.0",//动态切换class
    "next": "^14.0.2",
    "postcss": "8.4.31",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "3.3.3",//原子化css库
    "typescript": "5.2.2"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.1",
    "@types/react": "18.2.21",
    "@types/react-dom": "18.2.14",
    "@vercel/style-guide": "^5.0.1",
    "dotenv": "^16.3.1",//环境变量从 .env 文件加载到 process.env 中
    "eslint": "^8.52.0",
    "eslint-config-next": "^14.0.0",
    "eslint-config-prettier": "9.0.0",
    "prettier": "^3.0.3",
    "prettier-plugin-tailwindcss": "0.5.4"//Tailwind CSS 的 Prettier 插件，可根据我们推荐的类顺序自动对类进行排序
  },
}
```



## tips:常见的类名分类
- 布局类： row, col, grid, flex
- 包裹类： container, wrapper, outer, inner, box, header, footer, main, content, aside, page, section, block
- 状态类： primary, secondary, success, danger, warning, info, error, Link, light, dark, disabled, active, checked, loading
- 尺寸类： large, middle, small, bigger, smaller
- 组件类： card, list, picture, carousel, swiper, menu, navs, badge, hint, modal, dialog
- 位置类： first, last, current, prev, next, forward, back
- 文本类： title, desc, content, date, author, category,label,tag
- 人物类： avatar, name, age, post, intro reference
- 图标类： icon, logo, brand







