<template>
  <div id="app">
    <!--<router-link to="/">Home</router-link>-->
    <router-view/>
  </div>
</template>

<style>
@import '../src/assets/icomoon/style.css';

a{
  color: green !important;
}

a:focus {
  outline: 3px solid orange !important;
   z-index: 1;
}
</style>
