<template>
  <div id="app">
    <!-- VISTAS -->
    <div id="main">
      <router-view/>
    </div>
    <!-- NAV del FOOTER -->
    <div id="nav" class="footer mt-4">
      <router-link to="/">Juego</router-link> |
      <router-link to="/about">Créditos</router-link>
    </div>
    
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-image: linear-gradient(to bottom right, red, yellow);
  background-size: 100% 100%;
  height: 90vh;
}
</style>
