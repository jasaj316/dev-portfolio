<script setup lang="ts">
import { onBeforeMount, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'
import router from './router/index'

// get list of routes, assign path, name to each object
const routesList: { path: string, name: string }[] = [];
onBeforeMount(() => {
  router.getRoutes().forEach((route) => {
    routesList.push({ path: route.path, name: String(route.name) });
  })
});

// get current route when useRoute changes, change title to (title + | + current route)
let curRoute: { name: any } = useRoute();
watch(curRoute, () => {
  console.log(curRoute);
  document.title = document.title.split(" | ")[0] + " | " + String(curRoute.name).toUpperCase();
});

</script>


<template>
  <header>
    <div class="wrapper">
      <nav v-for="route in routesList">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>


<style scoped>

</style>
