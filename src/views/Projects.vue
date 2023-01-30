<script setup lang="ts">
import { reactive } from 'vue';
// vue components
import Card from '@/components/Card.vue';
import Modal from '@/components/Modal.vue';
// script used to store card data
import CardData from '@/assets/scripts/CardData'

// modal state variables
const state: { modalVis: string, title: string, subtitle: string, src: string, alt: string, link: string, linkText: string } = reactive({
  modalVis: "hidden",
  title: "",
  subtitle: "",
  src: "",
  alt: "",
  link: "",
  linkText: ""
});

// variables for getting scrollbar width (modal hides the scrollbar)
let scrollBarUnknown: boolean = true;
let scrollBarWidth: number = 0;
// re-check if window is resized
window.addEventListener("resize", () => {
  scrollBarUnknown = true;
})

// card img clicked - create modal of img
function modalHandler(src: string = "") {
  // if the scrollbar width needs to be re-checked
  if (scrollBarUnknown) {
    scrollBarWidth = scrollBarWidth = window.innerWidth - document.body.clientWidth;
    scrollBarUnknown = false;
  }
  // match the clicked src property to one of the card objects
  CardData.forEach(card => {
    if (src == card.src) {
      state.title = card.title;
      state.subtitle = card.subtitle;
      state.src = card.src;
      state.alt = card.alt;
      state.link = card.link;
      state.linkText = card.linkText;
    }
  })
  // if modal is hidden
  if (state.modalVis == "hidden") {
    // hide the scrollbar and shift the body left
    document.body.style.overflow = "hidden";
    document.body.style.marginLeft = `-${scrollBarWidth / 2}px`
    // send "vis" as a class name
    state.modalVis = "vis";
  }
  // if function wasn't passed a card (modal already on)
  else if (!src) {
    // show the scrollbar and reset the body
    document.body.style.marginLeft = "0"
    document.body.style.overflow = "visible";
    // send "hidden" as a class name
    state.modalVis = "hidden";
  }
}

// modal arrow clicked - load new image
function arrowHandler(dir: string) {
  let currentIndex: number = 0;
  let initialIndex: number = 0;
  // get the current card's index, track it
  CardData.forEach((card, i) => {
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
      currentIndex = CardData.length - 1;
    }
  }
  // if right and not out of index
  else if (dir === "r") {
    if (currentIndex < CardData.length - 1) {
      currentIndex = currentIndex + 1;
    }
    else {
      currentIndex = 0;
    }
  }
  // set new state variables if index was changed
  if (currentIndex !== initialIndex) {
    modalHandler(CardData[currentIndex].src)
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
        <Card v-for="card in CardData" @imgClicked="(title) => modalHandler(title)" :="card" />
      </article>
    </div>
    <Modal @imgClicked="modalHandler" @btnClicked="(dir) => arrowHandler(dir)" :="state" />
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