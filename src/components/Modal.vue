<script setup lang="ts">

import ExternalLinkIcon from '@/assets/img/external-64.svg';
const props = defineProps<{ modalVis: string, title: string, src: string, alt: string, link: string }>();
const arrowDirs: string[] = ["l", "r"]

</script>


<template>
  <div id="modal-bg" :class="props.modalVis">
    <button id="left-button" @click="$emit('leftClicked', arrowDirs[0])">&lt;-</button>
    <button id="right-button" @click="$emit('rightClicked', arrowDirs[1])">-></button>
    <figure @click="$emit('imgClicked')" class="modal-container">
      <img class="modal-img" :src="props.src" :alt="props.alt" />
      <div class="caption-bg">
        <a v-if="props.link" :href="props.link">
          <figcaption class="link-text">{{ props.title }}
            <img :src="ExternalLinkIcon" alt="link to demo" />
          </figcaption>
        </a>
        <figcaption v-else>{{ props.title }}</figcaption>
      </div>
    </figure>

  </div>
</template>


<style scoped>
.hidden {
  display: none;
}

.vis {
  backdrop-filter: blur(4px);
}

/* Modal Images */
#modal-bg {
  -webkit-tap-highlight-color: transparent;
  position: fixed;
  z-index: 2;
  background-image: radial-gradient(#04061166, #040611ef);
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  cursor: pointer;
}

button {
  -webkit-tap-highlight-color: transparent;
  font-size: 2rem;
  font-weight: 600;
  background-color: #040611;
  color: #f0eee9;
  top: calc(44vh - 3rem);
  padding: calc(0.8vw + 18px) calc(0.8vw + 8px) calc(0.8vw + 18px) calc(0.8vw + 8px);
  margin: 0;
  border: 0;
  text-decoration: none;
  position: absolute;
  cursor: pointer;
  border-radius: 3px;
  transition: color, background-color .15s;
}

button:hover {
  background-color: #f0eee9;
  color: #040611;
}

#left-button {
  border: solid #f0eee9;
  border-width: 3px 0 3px 3px;
  left: calc(30vw - 9rem);
}

#right-button {
  border: solid #f0eee9;
  border-width: 3px 3px 3px 0;
  right: calc(30vw - 9rem);
}

figcaption {
  display: flex;
  align-items: flex-end;
  color: #f0eee9;
  font-size: 1.8rem;
  padding-bottom: 0.5rem;
}


.link-text {
  text-decoration: underline;
  color: #f1a500;
}

.link-text:hover {
  filter: hue-rotate(158deg) brightness(135%) saturate(1.2%);
}

.link-text img {
  height: 1.8rem;
}

.caption-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 0;
  border-style: solid;
  border-width: 3px 0 0 0;
  border-image: linear-gradient(to right, transparent, #88899122 calc(20% - 10rem), #f1a500, #f1a500, #88899122 calc(80% + 10rem), transparent) 1;
  background-color: #040611cf;
  width: 100%;
  height: 120px;
}

.modal-container {
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-img {
  margin-top: auto;
  user-select: none;
  height: 80vh;
  width: auto;
}

/* Small screens */
@media only screen and (max-width: 570px) {
  figcaption {
    font-size: 5vw;
  }

  .modal-img {
    height: auto;
    width: 90%;
  }
}

/* Tiny screens */
@media only screen and (max-width: 500px) {

  /* button {
    display: none;
  } */

  #left-button {
    left: 1vw;
  }

  #right-button {
    right: 1vw;
  }

}
</style>