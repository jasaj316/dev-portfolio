<script setup lang="ts">
import { onBeforeMount, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'
import router from './router/index'

//##ROUTING
// get list of routes, assign path, name to each object
const routesList: { path: string, name: string }[] = [];
let routesListExcludeFirst: { path: string, name: string }[];
onBeforeMount(() => {
  router.getRoutes().forEach((route) => {
    routesList.push({ path: route.path, name: String(route.name) });
  })
  routesListExcludeFirst = routesList.slice(1);
});

// get current route when useRoute changes, change title to (title + | + current route)
let curRoute: { name: any } = useRoute();
watch(curRoute, () => {
  document.title = document.title.split(" | ")[0] + " | " + curRoute.name.toUpperCase()[0] + curRoute.name.slice(1)
});
//##ROUTING

</script>

<template>
  <header>
    <div id="header-main">
      <RouterLink :to="routesList[0].path">
        <div id="buttonLogo" class="logo">
          <div>
            <img src="@/assets/img/icon.png" alt="Menu Button">
          </div>
          <div class="title-text">
            <h1>Justin Smith</h1>
            <h2>Front-end Web Dev</h2>
          </div>
        </div>
      </RouterLink>
      <nav>
        <RouterLink v-for="(route) in routesListExcludeFirst" :to="route.path">
          {{ route.name.toUpperCase()[0] + route.name.slice(1) }}
        </RouterLink>
      </nav>
      <div class="links">
        <!-- Icons by https://fontawesome.com/v5.15/icons/ - License: https://fontawesome.com/license-->
        <a href="https://github.com/jasaj316/">
          <img id="github-button" src="@/assets/img/github-brands.svg" alt="Github">
        </a>
        <a href="https://www.linkedin.com/in/justin-a-smith-177b30ab/">
          <img id="linkedin-button" src="@/assets/img/linkedin-in-brands.svg" alt="LinkedIn">
        </a>
      </div>
    </div>
  </header>
  <RouterView />
  <footer>
    <p>
      Site Created by Justin Smith using Vue. Hosted on Github Pages.
    </p>
  </footer>
</template>


<style>
/* Nunito, Spartan from google fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@600&display=swap');

#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  font-size: 16px;
  background-image: linear-gradient(#030614, #09091a);
  color: #f0eee9;
  font-family: "Inter", Helvetica, Arial, sans-serif;
  letter-spacing: 0.002rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

h1 {
  font-family: 'Spartan', sans-serif;
  margin-top: 0.2rem;
  font-size: 2.5rem;
  letter-spacing: -0.016rem;
}

h2 {
  font-size: 1.61rem;
}

h3 {
  color: #ff9a00;
  font-size: 1.3rem;
  font-weight: 600;
}

/* Header */
#header-main {
  user-select: none;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 125px;
  background-image: url("../images/bg.png");
  background-color: #171820;
  border-radius: 0 0 0.1rem 0.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#header-main a {
  text-decoration: none;
}

#header-main a>div:nth-of-type(1) {
  margin: 2.5vw;
  margin-right: 1.6rem;
}

#header-main a h2 {
  font-weight: 200;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo .title-text {
  color: #f0eee9;

  margin-left: 1rem
}

.title-text h1 {
  user-select: text;
  font-size: 2.2rem;
}

.title-text h2 {
  font-size: 1.42rem;
}

.logo img {
  width: calc(2vw + 70px);
  margin-top: 0.2rem;
  padding: 0.1rem;
  height: auto;
}

.logo {
  transition: filter .15s;
}

.logo:hover {
  cursor: pointer;
}

.logo:hover img {
  filter: grayscale(100%) brightness(150%);
}

.links {
  margin-left: auto;
  margin-right: 2.5vw;
}

.links img {
  justify-self: flex-end;
  height: calc(1.8vw + 1.4rem);
  padding: calc(0.15rem + 0.8vw);
  transition: background-color .15s, filter .15s;
}

.links img:focus,
.links img:hover,
.links img:active {
  background-color: #0f1116;
  filter: invert(100%);
  cursor: pointer;
}

.links a {
  text-decoration: none;
}

nav {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
}

nav a {
  text-align: center;
  font-size: calc(1.2rem + .6vw);
  padding: 3.6rem;
  border-left: 2px solid #f0eee9;
  padding-top: 22px;
  padding-bottom: 22px;
  color: unset;
  text-decoration: none;
  transition: background-color .15s, color .15s;
}

nav a:last-of-type {
  border-right: 2px solid #f0eee9;
}

nav a:hover {
  cursor: pointer;
  color: #151515;
  background-color: #ffffff;
  font-weight: bolder;
}

/* Footer */
footer {
  text-align: center;
  background: #1718217d;
}

footer p {
  font-family: 'Inter', sans-serif;
  color: #f0eee9c9;
  font-size: 0.9rem;
  letter-spacing: -0.016rem;
}


/* Main */
main {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

main>*:first-child {
  margin-top: 172px;
}

main>* {
  margin-bottom: 1.5rem;
}

main h1,
main h2,
main h3 {
  text-align: left;
}

main p {
  font-size: 1.4rem;
}

/* touch screen remove hovers */
@media (hover: none) {
  .logo:hover img {
    filter: grayscale(0%) brightness(100%);
  }

  nav a:hover {
    color: unset;
    background-color: unset;
    font-weight: unset;
  }
}

/* Media generals */
@media only screen and (max-width: 890px) {
  nav a {
    right: auto;
    padding-left: calc(9vw - 2.6rem);
    padding-right: calc(9vw - 2.6rem);
  }

  .links {
    margin-left: auto;
    margin-right: 2.8vw;
  }

  .logo img {
    width: calc(4vw + 50px);
    margin-top: 0.2rem;
    padding: 0.1rem;
    height: auto;
  }
}

/* Small screens */
@media only screen and (max-width: 710px) {
  body #app {
    overflow-x: hidden !important;
  }

  main {
    max-width: 100% !important;
    overflow-x: hidden !important;
  }

  #header-main a>div:nth-of-type(1) {
    margin: calc(6vw - 0.2rem);
    margin-right: 0;
  }

  .title-text {
    display: none;
  }

  nav {
    margin-left: auto;
  }

  nav a {
    right: auto;
    padding-left: calc(12vw - 2rem);
    padding-right: calc(12vw - 2rem);
  }

  .links {
    margin-left: auto;
    margin-right: calc(5vw - 0.2rem);
  }

}

/* Tiny screens */
@media only screen and (max-width: 400px) {
  main {
    align-items: center;
  }

  main h1,
  main h2,
  main h3 {
    text-align: center;
    padding: 0rem 1rem;
  }

  nav a {
    right: auto;
    padding-left: 3vw;
    padding-right: 3vw;
  }

  #header-main a>div:nth-of-type(1) {
    margin: calc(6vw - 0.6rem);
    margin-right: 0;
  }

  .logo img {
    width: calc(3vw + 50px);
    margin-top: 0.2rem;
    padding: 0.1rem;
    height: auto;
  }

}
</style>
