<script setup lang="ts">
/* --- IMPORTS --- */

import { onBeforeMount, onMounted, watch, ref } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'
import router from '@/router/index'
import Icon from '@/assets/img/icon.png';
import IconBorder from '@/assets/img/icon-border.png';
import ExternalLinkIcon from '@/assets/img/external-64.svg';

/* --- IMPORTS --- */
/* --- VARIABLES --- */

// ref for header icon src
let iconRef = ref<string>(Icon);

// arrays holding list of routes, routesListSliced
const routesList: { path: string, name: string }[] = [];
const routesListAfterFirst: { path: string, name: string }[] = [];

/* --- VARIABLES --- */
/* --- FUNCTIONS --- */

// get list of routes, assign path + name to every object in both arrays
onBeforeMount(() => {
  router.getRoutes().forEach((route, i) => {
    routesList.push({ path: route.path, name: route.name as string });
    if (i > 0) {
      routesListAfterFirst.push({ path: route.path, name: route.name as string });
    }
  })
});

// get current route when useRoute changes, change title to (title + | + current route)
let curRoute: { name: any } = useRoute();
watch(curRoute, () => {
  document.title = document.title.split(" | ")[0] + " | " + curRoute.name.toUpperCase()[0] + curRoute.name.slice(1)
});

// switch src on mouseenter, mouseleave
function handleHover(e: MouseEvent) {
  iconRef.value = e.type === "mouseenter" ? IconBorder : Icon;
}

/* --- FUNCTIONS --- */
</script>

<template>
  <header>
    <div id="header-main">
      <RouterLink :to="routesList[0].path">
        <div @mouseenter="e => handleHover(e)" @mouseleave="e => handleHover(e)" id="buttonLogo" class="logo">
          <div>
            <img :src="iconRef" alt="Menu Button">
          </div>
          <div class="title-text">
            <h1>Justin Smith</h1>
            <h2>Front-End Web Developer</h2>
          </div>
        </div>
      </RouterLink>
      <nav>
        <RouterLink v-for="(route) in routesListAfterFirst" :to="route.path">
          <!-- one uppercase leter, rest are lowercase  -->
          {{ route.name.toUpperCase()[0] + route.name.slice(1) }}
        </RouterLink>
      </nav>
      <div class="links">
        <!-- Icons by https://fontawesome.com/v5.15/icons/ - License: https://fontawesome.com/license-->
        <a href="https://github.com/jasaj316/">
          <img id="github-button" src="@/assets/img/github-brands.svg" alt="Github">
        </a>
        <a href="https://www.linkedin.com/in/justin-smith-177b30ab/">
          <img id="linkedin-button" src="@/assets/img/linkedin-in-brands.svg" alt="LinkedIn">
        </a>
      </div>
    </div>
  </header>
  <RouterView />
  <footer>
    <p>
      Site Created by Justin Smith using <span>Vue</span>. Hosted on
      <a href="https://github.com/jasaj316/web-portfolio">
        Github Pages
        <img :src="ExternalLinkIcon" alt="Link to github pages" />
      </a>
    </p>

  </footer>
</template>


<style>
/* Nunito, Spartan from google fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@600&display=swap');

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background-color: #06060f;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  font-size: 16px;
  background-image: linear-gradient(#01010c 0%, #06060f 10%, #06060f 90%, #01010c 100%);
  color: #f0eee9;
  font-family: "Inter", Helvetica, Arial, sans-serif;
  letter-spacing: 0.002rem;
}


#app *::selection {
  background-color: #547cd188;
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
  color: #f1a500;
  font-size: 1.3rem;
  font-weight: 600;
}

/* Header */
#header-main {
  user-select: none;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 125px;
  background-color: #080718;
  background-image: url("@/assets/img/bg.png"), linear-gradient(#060613 0%, #080718 70%, #0c0d1d 100%);
  border-radius: 0 0 0.1rem 0.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#header-main a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

#header-main a>div:nth-of-type(1) {
  padding: 0 1.5rem 0 2.5vw;
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
  margin-left: 0.9rem
}

.title-text h1 {
  user-select: text;
  font-size: 2.2rem;
}

.title-text h2 {
  font-size: 1.14rem;
}

.logo img {
  width: calc(2vw + 70px);
  margin-top: 0.2rem;
  height: auto;
}

.logo {
  transition: filter .15s;
}

.logo:hover {
  cursor: pointer;
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
  padding-left: calc(2.2vw + 1.6rem);
  padding-right: calc(2.2vw + 1.6rem);
  border-left: 3px solid #f0eee9;
  padding-top: 22px;
  padding-bottom: 22px;
  color: unset;
  text-decoration: none;
  transition: background-color .15s, color .15s;
}

nav a:last-of-type {
  border-right: 3px solid #f0eee9;
}

nav a:hover {
  cursor: pointer;
  color: #151515;
  background-color: #f0eee9;
}

/* Footer */
footer {
  text-align: center;
  background: #080718;
  background-image: url("@/assets/img/bg.png"), linear-gradient(#0c0d1d -5%, #080718 30%, #060613 100%);
}

footer p {

  font-family: 'Inter', sans-serif;
  color: #f0eee9c9;
  font-size: 0.9rem;
  letter-spacing: -0.016rem;
}

footer p span {
  color: #6ec51d;
}

footer a {
  text-decoration: underline;
  color: #f1a500;
  filter: sepia(0%) brightness(100%);

}

footer a:hover {
  filter: hue-rotate(158deg) brightness(135%) saturate(1.2%);
}

footer a img {
  height: 1rem;
  width: auto;
  vertical-align: middle;
}

body {
  width: 100%;
}

/* Main */
main {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

main>*:first-child {
  margin-top: 45px;
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

/* Media generals */
@media only screen and (max-width: 840px) {
  nav a {
    right: auto;
    padding-left: calc(19vw - 7.2rem);
    padding-right: calc(19vw - 7.2rem);
  }

  .links {
    margin-left: auto;
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
  main {
    max-width: 100% !important;
    overflow-x: hidden !important;
  }

  #header-main a>div:nth-of-type(1) {
    margin: calc(6vw - 0.2rem);
    margin-right: 0;
    padding: 0;
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
    margin-right: calc(5vw - 0.1rem);
  }

}

/* Smaller screens */
@media only screen and (max-width: 570px) {
  main {
    align-items: center;
  }

  main h1,
  main h2,
  main h3 {
    text-align: center;
    padding: 0rem 1rem;
  }

}

/* Tiny screens */
@media only screen and (max-width: 400px) {
  nav a {
    right: auto;
    padding-top: 12px;
    padding-bottom: 12px;
    border-width: 2px;
  }

  nav a:last-of-type {
    border-width: 2px;
  }

  #header-main a>div:nth-of-type(1) {
    margin: calc(6vw - 1rem);
    margin-right: 0;
  }

  .logo img {
    width: calc(3vw + 50px);
    margin-top: 0.2rem;
    padding-left: 0.5rem;
    height: auto;
  }

}
</style>
