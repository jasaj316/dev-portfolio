<script setup lang="ts">
import { reactive } from 'vue';
import Card from '../components/Card.vue';
import Modal from '../components/Modal.vue';

//import images
import Automoblox from '../assets/img/automoblox.jpg';

// data used to create card instances
const cardsList: { title: string, src: string, alt: string }[] = [
  { title: "Title1", src: Automoblox, alt: "alttext" },
  { title: "Title2", src: Automoblox, alt: "alttext" },
  { title: "Title3", src: Automoblox, alt: "alttext" }
];

// modal states
const state: { modalVis: string, title: string, src: string, alt: string } = reactive({
  modalVis: "hidden",
  title: "",
  src: "",
  alt: ""
});

// card img clicked - create modal of img
function modalHandler(title: string = "", src: string = "", alt: string = "") {
  // if modal is hidden
  if (state.modalVis == "hidden") {
    // send "vis" as a class, and img data to modal
    state.modalVis = "vis";
    state.title = title;
    state.src = src;
    state.alt = alt;
  }
  else {  // if modal is on
    // send "hidden" as a class
    state.modalVis = "hidden";
  }
}
</script>


<template>
  <main>
    <div>
      <h1>My Projects</h1>
      <h3>A selection of my creations</h3>
    </div>
    <div class="portfolio">
      <article id="portfolio-items">
        <div class="cards" v-for="card in cardsList">
          <Card @imgClicked="(title, src, alt) => modalHandler(title, src, alt)" :="card" />
        </div>
      </article>
    </div>
    <Modal @imgClicked="modalHandler" :="state" />
  </main>
</template>

<style scoped>
article {
  padding: 0.35rem 0rem;
}

#portfolio-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* Media generals */
@media only screen and (max-width: 890px) {

  /* grid */
  #portfolio-items {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>