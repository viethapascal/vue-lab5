<template>
	<div >
		<h1>User Infomation</h1>
		<div class="container">
			<div class="form-group">
				<label for="name">Name:</label>
				<input type="text" id="name"  class="form-control" v-bind:value="user.name" v-bind:disabled="en" v-model="user.name">
			</div>
			<div class="form-group">
				<label for="username">User name:</label>
				<input type="text" id="username" v-bind:value="user.username" class="form-control" v-bind:disabled="en" v-model="user.username">
			</div>
			<div class="form-group">
				<label for="email">Email:</label>
				<input type="text" id="email" v-bind:value="user.email" class="form-control" v-bind:disabled="en" v-model="user.email">
			</div>
			<div class="form-group">
				<label for="website">Website:</label>
				<input type="text" id="website" v-bind:value="user.website" class="form-control" v-bind:disabled="en" v-model="user.website">
			</div>
			<div class="form-group">
				<label for="phone">Phone:</label>
				<input type="text" id="phone" v-bind:value="user.phone" class="form-control" v-bind:disabled="en" v-model="user.phone">
			</div>
			<button v-if="en"class="btn btn-primary" style="float:left" v-on:click="enable()">Edit</button>
			<button v-else="en" class="btn btn-primary" style="float:left" v-on:click="save()" >Ok</button>	
			<button class="btn btn-primary"  v-on:click="loadPost()" >Load Post</button>		
			
					
		</div>
		
	</div>
</template>

<script>
import Store from '../store'
export default {
	data () {
		return {
			user:{},
			en: true,
			users:Store.fetch('users'),
			id: this.$route.params.id

		}
	},
	created :function(){
		this.user = Store.pop('users',this.id)
		console.log(this.user)
	},
	methods:{
		enable:function(){
			this.en=false;
		},
		save:function(){
			this.en=true;
			console.log(this.user)
			this.users[this.id]=this.user
			console.log(this.users)
		},
		loadPost: function(){
			this.$router.push('/user/'+this.id+'/post')

		}
	}
}
	
</script>

<style scoped>
	.container{
		margin: auto;
		width: 50%;
	}
	label{
		float: left;
	}
</style>