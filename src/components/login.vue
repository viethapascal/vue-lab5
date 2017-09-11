<template>
	<div>		
		<div class ="form-group" >
			<h1>Login</h1>
			<label for="username">Username:</label>
			<input type="text" v-model="username" name="username">
			<p></p>
			<label for="password">Password: </label>
			<input type="password" v-model="password" name="password">
			<p></p>
			<button type="button" class = "btn btn-primary" v-on:click="login()">Login</button>		
			<p>{{username}}</p>	
		</div> 
	</div>
	
</template>

<script>
	import Store from '../store'
	export default {
		data () {
			return {
				users:[],
				username: '',
				password: '',
				posts:[],
			}
		},
		created: function() {
			this.$http.get('https://jsonplaceholder.typicode.com/users/').then(function(response){
				this.users=response.data
				Store.save('users',this.users)
			})
			this.$http.get('https://jsonplaceholder.typicode.com/posts/').then(function(response){
				this.posts=response.data
				Store.save('post',this.posts)				
			})
		},
		methods: {
			login: function(){
				/*var that = this
				var tem = this.users.findIndex(function(user){ return user.username == that.username})
				if (this.users[tem]) this.$router.push('/user/'+this.users[tem].id)*/
				if (this.username=="vietha" && this.password==123)
					this.$router.push('/user/')

			}
		}

	}
</script>