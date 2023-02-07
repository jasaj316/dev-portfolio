<script setup lang="ts">
/* --- IMPORTS --- */

import { reactive } from 'vue';
// vue components
import Card from '@/components/Card.vue';
import Modal from '@/components/Modal.vue';
// script used to store card data
import CardData from '@/assets/scripts/CardData'

/* --- IMPORTS --- */
/* --- VARIABLES --- */

// modal's state variables
const state: {
  modalVis: string, title: string, subtitle: string, src: string, alt: string,
  link: string, linkText: string, imgPos: { x: number, anim: string }
} = reactive({
  modalVis: "hidden",
  title: "",
  subtitle: "",
  src: "",
  alt: "",
  link: "",
  linkText: "",
  imgPos: { x: 0, anim: "" }
});

// variables for getting scrollbar width (modal hides the scrollbar)
let scrollBarUnknown: boolean = true;
let scrollBarWidth: number = 0;
// re-check if window is resized
window.addEventListener("resize", () => {
  scrollBarUnknown = true;
})

// touch delay variable - ALSO set modal.vue's .modal-img.anim delay to the same number.
const animDelay: number = 125;
// position of the initial touch when dragging image
let firstTouchDrag: { x: number, tracked: boolean } = { x: 0, tracked: false };

/* --- VARIABLES --- */
/* --- FUNCTIONS --- */

// card img clicked -> create modal using img
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
    // remove hidden class
    state.modalVis = "";
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

// load prev or next project
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
  //if index was changed, set new state variables
  if (currentIndex !== initialIndex) {
    // if screen was touched
    if (firstTouchDrag.tracked) {
      // delay for swipe animation
      setTimeout(() => { modalHandler(CardData[currentIndex].src) }, animDelay)
    }
    else {
      // if buttons are shown, it's instant
      modalHandler(CardData[currentIndex].src);
    }
  }
}

// animating sliding image
function touchDragHandler(e: TouchEvent | DragEvent) {
  // If buttons aren't visible. Same media queries from Modal.vue that hide buttons
  if (window.matchMedia("only screen and (max-aspect-ratio: 72/100)\,only screen and (hover:none)").matches) {
    // if touch/drag is moving
    if (e.type === "touchmove" || e.type === "dragover") {
      //track the first position
      if (!firstTouchDrag.tracked) {
        firstTouchDrag = e instanceof TouchEvent
          ? { x: e.touches[0].clientX, tracked: true }
          : { x: e.clientX, tracked: true };
      }
      // send new position to modal
      state.imgPos = e instanceof TouchEvent
        ? { x: e.touches[0].clientX - firstTouchDrag.x, anim: "" }
        : { x: e.clientX - firstTouchDrag.x, anim: "" };
    }
    // else if touch ended
    else if (e.type === "touchend" || e.type === "dragend") {
      //if touch was moved left more than width/6
      if (state.imgPos.x > window.innerWidth / 6) {
        // move image off screen and send 'anim' class to animate
        state.imgPos = { x: window.innerWidth, anim: "anim" };
        // load previous img
        arrowHandler("l")
        // place image on left and animate to the right
        setTimeout(() => {
          state.imgPos = { x: -window.innerWidth, anim: "" };
          setTimeout(() => state.imgPos = { x: 0, anim: "anim" }, animDelay)
        }, animDelay)
      }
      //if touch was moved right more than width/6
      else if (state.imgPos.x < -window.innerWidth / 6) {
        // move image off screen and send 'anim' class to animate
        state.imgPos = { x: -window.innerWidth, anim: "anim" };
        // load next img
        arrowHandler("r")
        // place image on right and animate to the left
        setTimeout(() => {
          state.imgPos = { x: window.innerWidth, anim: "" };
          setTimeout(() => state.imgPos = { x: 0, anim: "anim" }, animDelay)
        }, animDelay)
      }
      //if touch was moved less than width/4
      else {
        //reset img position and send 'anim' class to animate
        state.imgPos = { x: 0, anim: "anim" };
      }
      // allow firstTouch to be reset
      firstTouchDrag.tracked = false;
    }
  }
}

/* --- FUNCTIONS --- */
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
    <Modal @imgTouched="(e) => touchDragHandler(e)" @imgDragged="(e) => touchDragHandler(e)" @exitClicked="modalHandler"
      @btnClicked="(dir) => arrowHandler(dir)" :="state" />
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