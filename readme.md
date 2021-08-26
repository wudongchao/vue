# 渐进式框架 - vue 对自己框架和其他框架对比后，生产的一个特定的名词
# Vue 被设计为可以自底向上逐层应用

# 框架对比 
# 1. Angular => 综合性开发框架， 完整的集成化。此框架更关注的是项目应用。开箱即可应用，把所有的应用集成为一个平台。自上而下。
# 2. React => 关注的是用户的界面。如何把数据渲染到视图中。 是一个库。提供了一个管理视图和状态数据之间关系的方法库。 提供的东西只有这些，而且没有提供中央状态管理（redux）和 路由 (react-router,为react 提供了一个组件)。
# 3.Vue => 关注的是用户界面，如何把数据渲染到视图中。Vuex 可选择集成。vue-router 可选择集成。自下而上。首先有一个 核心的驱动，让数据渲染到视图上。


# 数据绑定和数据流
# 1。数据绑定 => 数据与视图渲染直接的关系
# React : 单向数据绑定 => event => state更改 => 视图变更
# Vue : 双向数据绑定 => event => state/data 更改 => 视图改变 => v-model => 视图变化 => state/data变更

# 数据流
# 1. 数据流淌的方向 => 父子组件中 数据按照什么方向流动 React/Vue 单向数据流 。从父组件 流向 子组件






# 一。vue安装方式

# 1.vite + cdn
# 2.vite 
# 3.vueCli  脚手架






# 二。使用webpack 安装vue2 和 vue3 
# vue2
# 安装webpack
# yarn add wabpack@4.44.2 webpack-cli@3.3.12 webpack-dev-server@3.11.2 -D
# 新建src目录文件夹 和 public html文件夹。
# 在html文件中 使用 cdn 方式引入 https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js 并且在src文件夹中，新建 main.js 文件。并在 public 文件夹 html 文件中引入。
# 在vue3官网中，基础 > 安装 > npm 段落中指出： “ 如果你是从 Vue 2 过渡而来的，请注意 @vue/compiler-sfc 替换掉了 vue-template-compiler”，所以要安装 vue-template-compiler 插件。 并安装 vue-loader及html-webpack-plugin。
# yarn add vue-loader@15.9.8 vue-template-compiler@2.6.14 html-webpack-plugin@4.5.0 -D

# 配置webpack
# const { resolve } require('path');
# const HtmlWebpackPlugin require('html-webpack-plugin');
# const VueLoaderPlugin require('vue-loader/lib/plugin');

# module.export = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'main.js'

	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		],
	},
	plugins:[
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: resolve(__dirname,'public/index.html')
		})

	],
	devtool: 'source-map',
	externals: {
		'vue': 'Vue'
	}
};

# 编写 main.js 文件
import App from './App.vue'
new Vue({
	render: h => h(App)
}).$mount('#app')


# vue3
# vue3 中根据文档，依赖 请注意 @vue/compiler-sfc 替换掉了 vue-template-compiler。所以要下载新的依赖。
# vue-loader@next 也需要重新下载
# yarn add  @vue/compiler-sfc vue-loader@next -D

# webpack 中 修改
# const { VueLoaderPlugin } = require('vue-loader')

# main中写入
# import App from './App.vue';
# Vue.createApp(App).mount('#app');

# 或者 const { createApp } = Vue;
# createApp(App).mount('#app');






# 三。认识Vue以及他的基本用法 
# vue的核心：模版语法 => 核心库 => 编译模版 => 渲染DOM
# template 是组件模版 script 是组件逻辑 style 是组件样式。

# vue 自定义指令
# {{}} : 插值表达式
# v-bind:变量 ，简写为 :变量。 引号内部看作变量
# v-on:click="函数声明" ， 简写为 @click="函数声明"。
# v-if || v-else 
# v-for 对象 in ，数组 of

# Vue将数据与DOM进行关联，并建立响应式关联。
# 视图改变，视图更新， 数据 => viewmodel => 视图


# 四 认识vue及组件化构建
# Vue 组件化的核心是 Vue组件系统，Vue利用ES模块化,来构建Vue组件系统。
# 组件化： 抽象小型、独立、可预先定义配置的、可复用的
# 小型： 页面的构成拆分成一个一个的小单元
# 独立： 每一个小单元尽可能都能独立开发
# 预先定义： 小单元都可以定义好，在需要的时候导入
# 预先配置： 小单元可以接受一些在使用的时候需要的一些配置
# 可复用： 小单元可以在多个地方使用
# 可复用性药适当考量，组件最大的作用是独立开发，预先配置。为了更好的维护和扩展。
# 代码提纯和功能性更强这个属于博弈的问题
# ToDoList 组件
# Vue3 全局注册组件化
# Vue3 全局注册与Vue2 不同点
# 1.Vue3可以不设置 template,在挂在DOM内写 template。 
# 2.构建方式不同，vue2 采用 Vue.component() 来注册全局组件，使用 new Vue()来寻找挂在点或者 mount来设置挂在点。Vue3 采用 createApp() 来注册全局组件，使用 全局组件属性component来注册子组件。
# Vue3 方法 const TodoList = { data || methods }; Vue.createApp(TodoList).mount('#app');
# Vue2 方法 Vue.component({ template || data || methods }); new Vue({ el: '#app' });
# Vue组件的嵌套形成了一个组件树

# 五。应用实例 和 组件实例
# 应用实例 createApp => 创建APP => 返回一个应用实例。
# 应用实例主要用来注册全局组件
# const app = Vue.craeteApp();
# Vue2 用new Vue() 来返回应用实例，Vue3用createApp 来返回应用实例。
# Vue3 createApp 返回应用实例，暴露的方法有 component(注册全局组件)，directive（注册自定义指令），filter （注册过滤器），use (使用插件)
# 大多数这样的方法都会返回createApp 创建出来的应用实例。
# const App2 = App.component('App');  App2 === App， App2 全等于 App ,说明可以链式调用。
# 应用实例是有 vue.createApp 创建出来的

# 根组件的本质就是一个对象{}; createApp执行的时候需要一个根组件， crateApp({}) 。根组件是Vue渲染的起点。

# 根元素是一个HTML元素，createApp执行创建Vue应用实例的时候，需要一个HTML根元素 <div id="app"></div>

# mount 方法执行返回的是根组件实例。
# const vm = app.mount('#app'); 
# vm => ViewModel => MVVM => VM

# 组件实例
# 每个组件都有自己的组件实例
# 一个应用中所有的组件都共享一个应用实例
# 无论是根组件还是应用组件内的其他组件
# 配置选项、组件行为都是一样的

# 在组件中可以打印 this, 可以看到组件中Vue内置的方法和属性


# 生命周期函数
# 组件是有初始化过程的
# 在这个过程中，Vue提供了很多每个阶段运行的函数
# 函数会在对应的初始化阶段自动执行

# vue2生命周期
# 用关键字 new 来实例化 Vue2
# 初始化事件和生命周期
# beforeCreate
# 注入外部事件和数据双向绑定
# created
# 查看是都有 el 和 mount 来寻找挂在点 ，如果有 el 查看是否有模版 如果没有el 寻找mount的挂在点
# 是否有template,如果有模版可以渲染模版，如果没有模版就把除<div id="app"></div> 内的元素当作挂在点
#



# vue3 生命周期
# 创建应用实例并且挂载
# 初始化事件和生命周期函数
# beforeCreate
# 初始化 注入 和 响应式
# created (组件本身的逻辑，数据，响应式加载完成)
# 是否有模版，有模版就编译模版渲染函数。没有模版，就编译el的 innerHTML 至模版，也就是 html模版<div id="app"></div>中的东西。
# beforeMount
# 创建 app.$el并添加到el 上，也就是说挂载到真正的根结点上
# mounted
# beforeUpdate ,当有数据变化时
# updated 虚拟dom 重新渲染和更新


















