<template>
	<div >
		<div class="container">
			
			<h1>Editor</h1>
			<div class="form-group">
				<label for="title">Title:</label>
				<input type="text" id="title"  class="form-control" v-bind:value="post.title"  v-model="post.title">
			</div>
			<div class="form-group">
				<label for="body">Body:</label>
				<textarea type="text" id="body" v-bind:value="post.body" class="form-control"  v-model="post.body"> </textarea> 
			</div>	
			<button class="btn btn-primary" style="float:left" v-on:click="save()" >Ok</button>		
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
			post:{},
			id: this.$route.params.postId,

		}
	},
	created :function(){
		this.post = Store.pop('post',this.id)
		console.log('hello')
	},
	methods:{
		save: function(){
			Store.saveMod('post',this.id,this.post)
			this.$router.push('/user/'+this.$route.params.id+'/post')
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
	textarea{
		resize: none;
		min-height: 200px;
	}
	
</style>