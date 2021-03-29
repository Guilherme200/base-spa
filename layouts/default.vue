<template>
  <div>
    <navbar/>
    <header/>

    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script lang="ts">
import Navbar from "~/components/layout/navbar.vue";
import Header from "~/components/layout/header.vue";

export default {
  name: 'default',
  components: {Header, Navbar},
}
</script>
