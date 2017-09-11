<template>
	<div>
		<table>
			<tr>
				<th> Username</th>
				<th> Name</th>
			</tr>
			<tr v-for="user in users">
				<td id="username">{{user.username}}
					<div id="btnEdit">						
						<button class="btn btn-primary glyphicon glyphicon-pencil" v-on:click="editUser(user)"></button>
						<button class="btn btn-primary glyphicon glyphicon-trash" v-on:click="delUser(user)"></button>
					</div> 
				</td>
				<td>{{user.name}}</td>
			</tr>
		</table>

	</div>
</template>
<script>
	import Store from '../store'
	export default {
		data (){
			return {
				users:Store.fetch('users'),
			}
		},
		created: function(){
			console.log(this.users)
		},
		methods: {
			delUser: function(user){
				console.log('deleting....')
				this.users.splice(this.users.indexOf(user),1)
				Store.del('users',user.id)
			},
			editUser: function(user){
				console.log('id: '+user.id)
				this.$router.push('/user/'+user.id)
			}
		}
	}	
</script>
<style scoped>
	table {
    	border-collapse: collapse;
    	margin: auto;
	}

	table, th, td {
    	border: 1px solid black;
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

</style>