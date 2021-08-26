const { createApp } = Vue;

const TodoList = {	
	data () {
		return {
			todoList: [
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
			this.todoList.push({
				id: new Date().getTime(),
				content: value,
				checked: false
			})
		},
		removeTodo (id) {
			this.todoList = this.todoList.filter(item => item.id !== id);
		},
		changeCompleted (id) {
			this.todoList.forEach(item => {
				if (item.id == id) {
					item.checked = !item.checked;
				}
			});

			console.log('this.todoList',this.todoList)
		}
	}
};


const App = createApp(TodoList);


App.component('todo-form', {
	template: `<div>
		<input type="text" placeholder="请输入" v-model="inputValue" />
		<button v-on:click="addTodo">submit</button>
	</div>`,
	data () {
		return {
			inputValue: ''
		}
	},
	methods: {
		addTodo () {
			this.$emit('addTodo', this.inputValue);
		}
	}
});

App.component('todo-item', {
	template: `<li>
		<input type="checkbox" :checked="todo.checked" v-on:change="change(todo.id)"/>
		<span :style= "{ textDecoration:todo.checked ? 'line-through' : 'none' }">{{ todo.content }}</span>
		<button v-on:click="del(todo.id)">del</button>
	</li>`,
	props: ['todo' ],
	methods: {
		change (id) {
			this.$emit('change-completed', id)
		},
		del (id) {
			this.$emit('remove-todo', id)
		}
	}
});


App.mount('#app');



