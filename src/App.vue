<template>
  <ul>
    <li><router-link :to="{name: 'home'}">Home</router-link></li>
    <li><router-link :to="{name: 'weaving'}">Weaving</router-link></li>
  </ul>
  <router-view />
</template>

<script setup>
</script>