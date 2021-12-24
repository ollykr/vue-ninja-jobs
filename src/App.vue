<template>
  <div id="nav">
    <!-- Router-link intercepts client's (browser) requests for new pages  and re-route them by swaping components -->
    <router-link to="/">Home</router-link> |
   <!-- Bnefit of using data binding in router-links: what if link path changes from /About to about-us in "routes" object? -->
   <!-- it comes from "routes" object from router/index.js  -->
    <!-- <router-link to="{ name: 'About' }">About</router-link> -->
    <router-link :to="{ name: 'About' }">About</router-link> |
    <!-- By using <a></a> we request a fresh page and router doesn't intercept it as the <a></a> doesn't have that requests intercepting behaviour built in unlike <router-link></router-link> -->
    <!-- <a href="about">About</a> -->
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>
  <!-- The place where our router components are dynamically injected depending on a the router we visit -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
