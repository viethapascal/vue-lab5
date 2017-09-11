var login= false;
var last;
export default {
	fetch: function (key) { //get data ether post or user
		return JSON.parse(window.localStorage.getItem(key)) || []
	},
	save: function (key,items) { // save items as storage key
		window.localStorage.setItem(key, JSON.stringify(items))
	},
	pop: function (key,index) { //get item has required index 
		var arr = this.fetch(key);
		var res = arr.findIndex(function(item){
			return item.id == index
		})
		return arr[res]
	},
	getPost:function(index){ //get indexed post
		var arr = this.fetch('post')
		var res= arr.filter(function(item){
			return item.userId==index
		})
		return res
	},
	saveMod: function(key,index,item){ //save modification of an item
		var arr = this.fetch(key);
		var i = arr.findIndex(function(item){
			return item.id==index;
		})
		arr[i] = item;
		this.save(key, arr)
	},
	del: function(key, index){ // del indexed item
		var arr = this.fetch(key);
		var i = arr.findIndex(function(item){
			return item.id==index;
		});
		arr.splice(i,1);
		this.save(key,arr)
	},
	addPost: function(item){ //add item
		var arr = this.fetch('post');
		last = arr[arr.length-1].id;
		last++;
		item.id=last;
		arr.push(item);
		this.save('post',arr);
		console.log(last);


	}
}