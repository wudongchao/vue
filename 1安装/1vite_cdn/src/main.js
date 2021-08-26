 

// 3.1.2 
// const { createApp } = Vue;

// const App = {
// 	data () {
// 		return {
// 			text: 'Hello'
// 		}
// 	},
// 	template: `<div>
// 		<h1>{{ text }}</h1>
// 		<button @click="change"></button>
// 	</div>`,
// 	methods: {
// 		change () {
// 			this.text = 'haha'
// 		}
// 	}
// };

// createApp(App).mount('#app')


// 2.6.14 构造函数
// const App = {
// 	data () {
// 		return {
// 			text: 'Hello'
// 		}
// 	},
// 	template: `<div>
// 		<h1>{{ text }}</h1>
// 		<button @click="change"></button>
// 	</div>`,
// 	methods: {
// 		change () {
// 			this.text = 'haha'
// 		}
// 	}
// };


// new Vue ({
// 	render:h => h(App)
// }).$mount('#app');


// 3.1.2 


const { createApp, ref } = Vue;


const App = {
	template: `
		<div>
			<h1>{{ text }}</h1>
	 		<button @click="change"></button>
		</div>
	`,
	setup () {
		const text = ref('hello');
		const change = function () {
			
			text.value = 'haha'
		
		}
		return {
			text,
			change
		}
	}

	
}


createApp(App).mount('#app')
