
// form

const todoForm = {
	template: `<div>
		<input type="text" placeholder="请输入" v-model="inputValue" />
		<button v-on:click="submit">submit</button>
	</div>`,
	data () {
		return {
			inputValue: ''
		}
	},
	methods: {
		submit () {
			this.$emit('addTodo', this.inputValue)
		}
	}
};

// list 

const todoItem = {
	template: `<li>
		<input type="checkbox" :checked="todo.checked" v-on:change="change(todo.id)"/>
		<span :style="{ textDecoration:todo.checked ? 'line-through' : 'none'}" >{{ todo.content }}</span>
		<button v-on:click="del(todo.id)">Del</button>
	</li>`,


	props: ['todo' ],
	methods: {
		del (id) {
			this.$emit('delItem', id)
		},
		change (id) {
			this.$emit('change', id)
		}
	}
}

// 父组件

Vue.component('todo-list', {
	template: `<div>
		<todo-form v-on:addTodo="addTodo"></todo-form>

		<ul>	
			<todo-item v-for="item in todoList" :key="item.id" :todo="item" v-on:delItem="delItem" v-on:change="change"></todo-item>
		</ul>
	</div>`,
	components: {
		'todo-form': todoForm,
		'todo-item': todoItem
	},
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
				},
			]
		}
	},
	methods: {
		addTodo (value ) {
			this.todoList.push({
				id: new Date().getTime(),
				content: value,
				checked: false
			})
		},
		delItem (id) {
			this.todoList = this.todoList.filter(item => {
				return item.id !== id;
			})
		},
		change (id) {
			this.todoList.forEach(item => {
				if (item.id == id) {
					item.checked = !item.checked;
				}
			})

			console.log('this.todoList', this.todoList)
		}
	}
})


new Vue({
	el: '#app'
})