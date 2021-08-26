
const { createApp } = Vue;



// 全局注册组件，createApp返回应用实例，应用实例中包含 component & direction % filter & use
const App = createApp({});

const App2 = App.component('todo', {
	template: `<h1>全局组册组件<h1>`
});

console.log(App === App2,'应用实例', App)

App.mount('#app');

// 根组件实例 根组件 mount 返回 跟组件的实例

const AppComponent = {
	data () {
		return {
			a: 1,
			b: 2
		}
	},
	methods: {
		plus () {
			return this.a + this.b;
		}
	}
}

const Root = createApp(AppComponent);

const vm = Root.mount('#app1');

console.log('根组件实例',vm)


// 组件的实例
// 一个应用中所有的组件都共享一个应用实例


const MyTitle = {
	template: `<h1>
		<slot></slot>
	<h1>`,
	mounted () {
		console.log(this,'组件实例')
	}
};


const MyAuthor = {
	template: `<h1>
		<slot></slot>
	<h1>`
};


const MyContent = {
	template: `<h1>
		<slot></slot>
	<h1>`
};

const OneApp = {
	components: {
		'my-title': MyTitle,
		'my-author': MyAuthor,
		'my-content': MyContent,

	},
	data () {
		return {
			title: 'This is a TITLE',
			author: 'Vue',
			content: 'This is a CONTENT'
		}
	},
	template: `<div>
		<my-title>{{ title }}</my-title>
		<my-author>{{ author }}</my-author>
		<my-content>{{ content }}</my-content>
	</div>`
};





const vm1 = createApp(OneApp).mount('#app2');

console.log('组件实例',vm1)







