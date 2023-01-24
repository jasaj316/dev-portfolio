<script setup lang="ts">
import { reactive } from 'vue';
import Card from '@/components/Card.vue';
import Modal from '@/components/Modal.vue';

//import images
import Automoblox from '@/assets/img/automoblox.jpg';
import Flag from '@/assets/img/flag.jpg';
import TypeAhead from '@/assets/img/typeAhead.jpg';
import Pong from '@/assets/img/pong.jpg';

// data used to create card instances
const cardsList: { title: string, src: string, alt: string, link: string }[] = [
  // src HAS to be unique
  { title: "'Guess The Flag' Game with Map API", src: Flag, alt: "Click on a map to guess where a flag comes from", link: "" },
  { title: "Pong vs AI in VanillaJS and Canvas", src: Pong, alt: "Pong made with html canvas and vanillaJS", link: "https://jasaj316.github.io/pong/pong.html" },
  { title: "Dynamic Search Filter in VanillaJS", src: TypeAhead, alt: "List of cities and states, filtered using a search box", link: "" },
  { title: "Bootstrap Site for Automoblox", src: Automoblox, alt: "A site that fully uses bootstrap classes + carousel", link: "" }
];

// modal state variables
const state: { modalVis: string, title: string, src: string, alt: string, link: string } = reactive({
  modalVis: "hidden",
  title: "",
  src: "",
  alt: "",
  link: ""
});


// card img clicked - create modal of img
function modalHandler(src: string = "") {
  // match clicked src property to one of the card objects
  cardsList.forEach(card => {
    if (src == card.src) {
      state.title = card.title;
      state.src = card.src;
      state.alt = card.alt;
      state.link = card.link;
    }
  })
  // if modal is hidden
  if (state.modalVis == "hidden") { // if modal is off
    // send "vis" as a class name
    state.modalVis = "vis";
  }
  else if (src === "") {  // if clicking off the modal (nothing passed)
    // send "hidden" as a class name
    state.modalVis = "hidden";
  }
}
// modal arrow clicked - load new image
function arrowHandler(dir: string) {
  let currentIndex: number = 0;
  let initialIndex: number = 0;
  // get the current card's index, track it
  cardsList.forEach((card, i) => {
    if (card.src == state.src) {
      currentIndex = i;
      initialIndex = currentIndex;
    }
  })


  // if left and not out of index
  if (dir === "l") {
    if (currentIndex > 0) {
      currentIndex = currentIndex - 1;
    }
    else {
      currentIndex = cardsList.length - 1;
    }
  }
  // if right and not out of index
  else if (dir === "r") {
    if (currentIndex < cardsList.length - 1) {
      currentIndex = currentIndex + 1;
    }
    else {
      currentIndex = 0;
    }
  }
  // set new state variables if index was changed
  if (currentIndex !== initialIndex) {
    modalHandler(cardsList[currentIndex].src)
  }
}

</script>


<template>
  <main :class="state.modalVis">
    <div>
      <h1>My Projects</h1>
      <h3>A selection of my creations</h3>
    </div>
    <div class="portfolio">
      <article id="portfolio-items">
        <Card v-for="card in cardsList" @imgClicked="(title) => modalHandler(title)" :="card" />
      </article>
    </div>
    <Modal @imgClicked="modalHandler" @leftClicked="(dir) =>arrowHandler(dir)" @rightClicked="(dir) =>arrowHandler(dir)"
      :="state" />
  </main>
</template>

<style scoped>
article {
  padding: 0.35rem 0rem;
}

#portfolio-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

/* Media generals */
@media only screen and (max-width: 1090px) {

  /* grid */
  #portfolio-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Small screens */
@media only screen and (max-width: 570px) {

  /* grid */
  #portfolio-items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>