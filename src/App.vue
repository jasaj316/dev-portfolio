<script setup lang="ts">
import { onBeforeMount, onMounted, watch, ref } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'
import router from '@/router/index'
// import images
import Icon from '@/assets/img/icon.png';
import IconBorder from '@/assets/img/icon-border.png';
import ExternalLinkIcon from '@/assets/img/external-64.svg';

//##ROUTING
// get list of routes, assign path, name to each object
const routesList: { path: string, name: string }[] = [];
let routesListAfterFirst: { path: string, name: string }[];
onBeforeMount(() => {
  router.getRoutes().forEach((route) => {
    routesList.push({ path: route.path, name: String(route.name) });
  })
  routesListAfterFirst = routesList.slice(1);

});

// get current route when useRoute changes, change title to (title + | + current route)
let curRoute: { name: any } = useRoute();
watch(curRoute, () => {
  document.title = document.title.split(" | ")[0] + " | " + curRoute.name.toUpperCase()[0] + curRoute.name.slice(1)
});
//##ROUTING

// switching icon src on hover
let iconRef = ref<string>(Icon);
function handleHover(e: any) {
  iconRef.value = e.type === "mouseenter" ? IconBorder : Icon;
}

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
      Site Created by Justin Smith using <span>Vue</span>. Hosted on
      <a href="https://github.com/jasaj316/dev-portfolio">
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

#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  font-size: 16px;
  background-image: linear-gradient(#01010c 0%, #06060f 10%, #080813 50%, #06060f 90%, #01010c 100%);
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
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 125px;
  background-image: linear-gradient(#171820 0%, #1a1b24 100%);
  background-image: url("./assets/img/bg.png"), linear-gradient(#070713 70%, #0a0a16 100%);
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
  margin: 2.5vw;
  margin-right: 1.5rem;
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

.logo:hover .title-text h1 {
  color: #f7aa05;
}

.logo:hover .title-text h2 {
  color: #f0eee9;
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
  padding-left: calc(2vw + 2rem);
  padding-right: calc(2vw + 2rem);
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
  background: #16171f;
  background-image: url("./assets/img/bg.png"), linear-gradient(#0a0a16 0%, #070713 81%);
}

footer p {

  font-family: 'Inter', sans-serif;
  color: #f0eee9c9;
  font-size: 0.9rem;
  letter-spacing: -0.016rem;
}

footer p span {
  color: #89d443;
}

footer a {
  text-decoration: underline;
  color: #fab00c;
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

/* Modal is on */
body:has(main.vis) {
  overflow-y: hidden;
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
@media (hover:none) {
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
    padding-left: calc(9vw - 2.8rem);
    padding-right: calc(9vw - 2.8rem);
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
