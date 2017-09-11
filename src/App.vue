<template>
  <div id="app">    
    <nav class="navbar navbar-default" style="width:50% margin: auto">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">My Page</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#user">User</a></li>
        </ul>
      </div>
    </nav>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;

}


</style>
