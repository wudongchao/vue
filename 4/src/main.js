
// const CreatApp = {
// 	data () {
// 		return {
// 			title: 'Vue3'
// 		}
// 	}
// };

// Vue.createApp(CreatApp).mount('#app');


// 全局注册组件
const { createApp } = Vue;

const TodoList = {
	data () {
		return {
			todoList: [
				{
					id: 1,
					content: '123',
					completed: false
				},
				{
					id: 2,
					content: '234',
					completed: false
				},
				{
					id: 3,
					content: '345',
					completed: false
				},
			]
		}
	},
	methods: {
		removeTodo (id) {
			this.todoList = this.todoList.filter((item) => {
				return item.id !== id
			});
		},
		addTodo (value) {
			this.todoList.push({
				id: new Date().getTime(),
				content: value,
				completed: false
			})
		},
		changeCompleted (id) {
			this.todoList = this.todoList.map(item => {
				if (item.id === id) {
					item.completed = !item.completed
				};

				return item;
			})
		}
	}
};

const App = createApp(TodoList);



App.component('todo-form', {
	data () {
		return {
			inputValue: ''
		}
	},
	template: `
		<div>
			<input type="text" placeholder="请填写" v-model="inputValue" />
			<button @click="addTodo">增加</button>
		</div>	
	`,
	methods: {
		addTodo () {
			this.$emit('add-todo')	
		}
	}
});


App.component('todo-item', {
	props: ['todo'],
	template: `<li>
		<input type="checkbox" :checked="todo.completed" @click="changeCompleted(todo.id)"/>
		<span :style="{ textDecoration:todo.completed ? 'line-through' : 'none' }">{{ todo.content }}</span>
		<button @click="removeTodo(todo.id)">删除</button>
	</li>`,
	methods: {
		changeCompleted (id) {
			this.$emit('change-completed', id);
		},
		removeTodo (id) {
			this.$emit('remove-todo', id);
		}
	}
})



App.mount('#app');




