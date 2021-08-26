import App from './App.vue';

const { createApp } = Vue;


const Article = {
	data () {
		return {
			name: 'hi Vue',
			age: '10',
			ver: '3',
			num: 0,
			isLogin: true,
			myComment: '',
			commentList: []
		}
	},
	methods: {
		likeArr () {
			this.num++ ;
			this.isLogin = !this.isLogin;
		},
		subComment () {
			if (this.myComment.length > 0) {
				this.commentList.push({
					id: new Date().getTime(),
					time: new Date(),
					content: this.myComment
				})
			};

			console.log('this.commentList', this.commentList)
		}
	}
}


createApp(Article).mount('#app');