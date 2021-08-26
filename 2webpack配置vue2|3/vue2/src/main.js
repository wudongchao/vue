// import App from './App.vue';

// new Vue ({
// 	render: h => h(App)
// }).$mount('#app');



const todoForm = {
	template: `<div>
		<input type="text" v-model="inputValue" />
		<button v-on:click="addTodo">submit</button>
	</div>`,
	data () {
		return {
			inputValue: ''
		}
	},
	methods: {
		addTodo () {
			
			this.$emit('add-todo', this.inputValue)
		}
	}

}

		Vue.component('todo-list', {
			template: `<div>
				<todo-form @add-todo="addTodo"></todo-form>
			</div>`,
			components: {
				'todo-form': todoForm
			},
			data () {
				return {
					todoListArr: [
						{
							id: 1,
							content: '1234',
							checked: false
						},
						{
							id: 2,
							content: '2345',
							checked: false
						},
						{
							id: 3,
							content: '3456',
							checked: false
						}
					]
				}
			},
			methods: {
				addTodo (value) {
					
				}
			}
		})

		

		new Vue({
			el: '#root',
			
		
		})

