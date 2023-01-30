<script setup lang="ts">
import { reactive, onMounted } from 'vue';
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

// variables pertaining to scrollbar width
const scrollVars: { set: boolean, initialWidth: number, scrollBarWidth: number } = {
  set: false,
  initialWidth: 0,
  scrollBarWidth: 0
};
// hiding, showing the scrollbar
function blockScroll(hiding: boolean = true) {
  if (!scrollVars.set) {
    // get original size
    scrollVars.scrollBarWidth = window.screen.width - document.body.offsetWidth;
    scrollVars.initialWidth = window.screen.width - scrollVars.scrollBarWidth;
    scrollVars.set = true; console.log(scrollVars);
    window.addEventListener("resize", () => {
      scrollVars.initialWidth = window.screen.width - scrollVars.scrollBarWidth
    })
  }
  switch (hiding) {
    case true:
      // set body styles
      document.body.style.overflowY = "hidden";
      document.body.style.width = `${scrollVars.initialWidth}px`;
      document.body.style.paddingRight = `${scrollVars.scrollBarWidth}px`;
      return;
    case false:
      // re-set body styles
      document.body.style.overflowY = "visible";
      document.body.style.width = `${scrollVars.initialWidth}px`;
      document.body.style.paddingRight = `0px`;
      return;
  }
}

// card img clicked - create modal of img
function modalHandler(src: string = "") {
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
  if (state.modalVis == "hidden") { // if modal is off
    // prevent scrolling when modal is on
    blockScroll(true);
    // send "vis" as a class name
    state.modalVis = "vis";
  }
  // if modal is visible
  else if (src === "") {  // if exiting the modal (nothing passed)
    // allow scrolling when modal is off
    blockScroll(false);
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