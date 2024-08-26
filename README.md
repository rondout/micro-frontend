# 微前端学习以及分享

## 什么是微前端

微前端的概念是由`ThoughtWorks`在2016年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。

它主要解决了两个问题：

- 随着项目迭代应用越来越庞大，难以维护。
- 跨团队或跨部门协作开发项目导致效率低下的问题。

![image-20240820111137665](./assets/micro-chore.png)



微前端架构有以下特点：

- 技术栈无关
  主框架不限制接入应用的技术栈，微应用具备完全自主权

- 独立开发、独立部署
  微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新

- 增量升级

  在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略

- 独立运行时
  每个微应用之间状态隔离，运行时状态不共享



## 现有的微前端解决方案

现在主流的微前端解决方案有以下几种：

- `qiankun`：`qiankun` 孵化自蚂蚁金融科技基于微前端架构的云产品统一接入平台，在经过一批线上应用的充分检验及打磨后，我们将其微前端内核抽取出来并开源，希望能同时帮助社区有类似需求的系统更方便的构建自己的微前端系统。

- MicroApp：`micro-app`是由京东前端团队推出的一款微前端框架，它借鉴了`WebComponent`的思想，通过`js沙箱`、`样式隔离`、`元素隔离`、`路由隔离`模拟实现了隔离特性，从而实现微前端的组件化渲染，旨在降低上手难度、提升工作效率。

  `micro-app`和技术栈无关，也不和业务绑定，可以用于任何前端框架。

- `Wujie`：无界微前端方案基于 webcomponent 容器 + iframe 沙箱，能够完善的解决适配成本、样式隔离、运行性能、页面白屏、子应用通信、子应用保活、多应用激活、vite 框架支持、应用共享等用户的核心诉求。

目前而言，这三种方案都是不错的微前端解决方案，但是目前而言`qiankun`对vite的支持仍然不友好，`qiankun`本身是不支持vite构建的应用的，还需要使用社区的插件，而且我也有去做demo，然后觉得坑太多了，就选择了 `MicroApp` 方案来做微前端技术调研学习的方案。



## 学习目标

本次学习目标有以下几个：

- 设计微前端架构

- 实现基座应用和子应用之间的通信
- 不同子应用之间的通信
- 数据共享以及数据私有
- 部署整个微前端架构以及有关应用



## 基座和子应用

微前端架构中很重要的一个概念就是`基座和子应用`，基座就是整个应用的基础，所有的子应用就是一个个单独的前端应用（工程）。在微前端架构中，子应用是可以单独开发然后适配基座的，最终整个应用运行后，子应用是挂载在基座上的。

### 搭建基座和子应用

我们可以用任意的技术栈来搭建基座应用。由于我们现在目前以及后续的技术栈是 `vue3 + ts + vite` 这套。因此这里我也就以该技术栈搭建基座。

子应用我们可以使用各种技术栈搭建不同的子应用来进行技术实践，我这边准备了一下几种技术栈：

- `vue3 + ts + vite`
- `react + ts + vite`
- 原生`native app (使用nodejs搭建静态资源服务器)`

搭建基座应用和子应用的流程这里就无需多讲了。也不是本次分享的重点，因此这里略过。

### 初始化基座

首先是安装依赖：

```bash
npm i @micro-zoe/micro-app --save
// 或者
pnpm add @micro-zoe/micro-app
// 或者
yarn add @micro-zoe/micro-app
```

然后根据官方文档操作步骤，初始化基座的 `MicroApp` 有关的配置代码：

```ts
import microApp from "@micro-zoe/micro-app";

export function startMicro() {
    console.log("MicroApp start!");
    microApp.start();
}
```

这样子，我们的基座应用就初始化完成了，非常简单。

###  加载子应用

在基座应用中直接使用 `<micro-app>` 标签加载子应用：

```vue
<template>
  <!-- name：应用名称, url：应用地址 -->
  <micro-app name='my-app' url='http://localhost:3000/'></micro-app>
</template>

```

这里是以 `vue` 子应用为例，后续完整代码会有`react`版本的。这里注意`name`和`url`只是这个标签的属性之二，该标签还支持多种属性，后续我们遇到一个说一个。比如我们在加载 `vite` 构建的子应用就需要加上`iframe`属性。因为目前`vite`构建的子应用目前只支持 `iframe`沙箱。

### 子应用跨域配置

如果我们直接像上述配置一样直接接入子应用，由于浏览器的同源策略，如果子应用不支持跨域，则会报跨域错误。因此我们需要在子应用所在的 `web server` 进行跨域配置：

`vite`配置：

```ts
export default defineConfig({
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
```

`nodejs`配置（我的`nodejs`是使用`express`搭建的静态资源服务，因此这里以该技术栈举例）：

```ts
 private setCors() {
        this.instance.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, 								Content-Type, Accept");
            next();
        });
    }
```



### 环境变量

`Micro App`提供了一下环境变量，用于我们开发过程中的某些环境有关的逻辑判断，这些环境变量大多都通过绑定为 `window` 对象的属性的方式来使用，因此如果我们使用`Typescript`开发子应用的话，就要进行这些全局变量的变量声明，我们在我们子应用中的声明文件（`vite`构建的应用的默认声明文件就是根目录下面的`env.d.ts`）：

```ts
/// <reference types="vite/client" />

declare global {
    interface Window {
        /** 应用名称 */
        __MICRO_APP_NAME__: string;
        /** 判断应用是否在微前端环境中 */
        __MICRO_APP_ENVIRONMENT__: boolean;
        /** 子应用的静态资源前缀 */
        __MICRO_APP_PUBLIC_PATH__: string;
        /** 子应用的基础路径 */
        __MICRO_APP_BASE_ROUTE__: string;
        /** 判断当前应用是否是主应用 */
        __MICRO_APP_BASE_APPLICATION__: string;
        /** 获取真实window（即主应用window） */
        rawWindow: Window;
        /** 获取真实document（即主应用document） */
        rawDocument: Document;
    }
}

export {}
```



### 生命周期

`micro-app`通过`CustomEvent`定义生命周期，在组件渲染过程中会触发相应的生命周期事件。

#### 生命周期列表

1. created：
   <micro-app>标签初始化后，加载资源前触发。

2. beforemount：
   加载资源完成后，开始渲染之前触发。
3. mounted：
   子应用渲染结束后触发。
4. unmount：
   子应用卸载时触发。
5. error：
   子应用加载出错时触发，只有会导致渲染终止的错误才会触发此生命周期。

#### 监听方式

`Vue`：

```vue
<micro-app
  name='xx'
  url='xx'
  onCreated={() => console.log('micro-app元素被创建')}
  onBeforemount={() => console.log('即将渲染')}
  onMounted={() => console.log('已经渲染完成')}
  onUnmount={() => console.log('已经卸载')}
  onError={() => console.log('加载出错')}
/>

```

`React`:

因为React不支持自定义事件，所以我们需要引入一个`polyfill`。

`在标签所在的文件顶部` 添加`polyfill`，注释也要复制。

```tsx
/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'

<micro-app
  name='xx'
  url='xx'
  onCreated={() => console.log('micro-app元素被创建')}
  onBeforemount={() => console.log('即将渲染')}
  onMounted={() => console.log('已经渲染完成')}
  onUnmount={() => console.log('已经卸载')}
  onError={() => console.log('加载出错')}
/>

```

