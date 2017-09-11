<template>
	<div >
		<div class="container">
			<table>
				<tr>
					<th> All your posts</th>
					<button class="btn btn-primary glyphicon glyphicon-plus" v-on:click="addPost()"></button>
				</tr>
				<tr v-for="post in posts">
					<td id="username">{{post.title}}
						<div id="btnEdit">						
							<button class="btn btn-primary glyphicon glyphicon-pencil" v-on:click="editPost(post)"></button>
							<button class="btn btn-primary glyphicon glyphicon-trash" v-on:click="delPost(post)"></button>
						</div> 
					</td>
				</tr>
			</table>			
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
			users:{},
			posts:[],
			id: this.$route.params.id,

		}
	},
	created :function(){
		this.posts = Store.getPost(this.id)
		console.log(this.posts)
	},
	methods:{
		editPost: function(post){
			this.$router.push('/user/'+this.id+'/post/'+post.id)
		},
		delPost: function(post){
			Store.del('post',post.id)
			this.posts.splice(this.posts.indexOf(post),1)

		},
		addPost: function(){
			this.$router.push('/user/'+this.id+'/newpost')
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
	ul{
		list-style-type: none;
	}
	li{
		text-align: left;
		margin: 5px;
		display: block;
	}
		table, th, td {
    	font-size: 20px;
    	padding: 5px;
	}
	th{
		text-align: center;
	}
	td{
		text-align: left;
	}

	#btnEdit{
		position: absolute;
		display: none;
		right: 0px;
		top: 0px;
	}
	#username{
		position: relative;
	}
	#username:hover #btnEdit{
		display: inline-block;
	}
	#username:hover{
		background: #CEE6E8;
	}
</style>