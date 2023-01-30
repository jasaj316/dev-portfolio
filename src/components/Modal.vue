<script setup lang="ts">

import ExternalLinkIcon from '@/assets/img/external-64.svg';
const props = defineProps<{ modalVis: string, title: string, subtitle: string, src: string, alt: string, link: string, linkText: string }>();
const arrowDirs: string[] = ["l", "r"]
</script>


<template>
  <div id="modal-bg" @click="$emit('imgClicked')" :class="props.modalVis">
    <div class="title-bg">
      <p>{{ props.title }}</p>
    </div>
    <div class="center-bg">
      <button id="left-button" @click.stop="$emit('btnClicked', arrowDirs[0])">
        &lt;-
      </button>
      <img class="modal-img" :src="props.src" :alt="props.alt" />
      <button id="right-button" @click.stop="$emit('btnClicked', arrowDirs[1])">
        ->
      </button>
    </div>
    <aside class="subtitle-bg ">
      <p>{{ props.subtitle }}</p>
      <a v-if="props.link" :href="props.link">
        <p class="link-text">{{ props.linkText }}<img :src="ExternalLinkIcon" alt="Link to demo" /></p>
      </a>
    </aside>
  </div>

</template>


<style scoped>
.hidden {
  display: none !important;
}

.vis {
  backdrop-filter: blur(0px);
}

#modal-bg {
  backdrop-filter: blur(3px);
  transition: backdrop-filter 1s;
  -webkit-tap-highlight-color: transparent;
  background-image: radial-gradient(#04061196, #040611f4);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1;
}

.title-bg,
.subtitle-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 0 0 3px 0;
  border-image: linear-gradient(to right, transparent, #88899122 calc(20% - 10rem), #f1a500, #f1a500, #88899122 calc(80% + 10rem), transparent) 1;
  background-color: #040714e4;
  width: 100%;
  height: 12vmin;
}


.center-bg {
  width: 60vmin;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.subtitle-bg {
  border-width: 3px 0 0 0;
}

/* Img */
.modal-img {
  user-select: none;
  height: 76vmin;
}

/* Buttons */
button {
  -webkit-tap-highlight-color: transparent;
  font-size: 2rem;
  font-weight: 600;
  background-color: #040714e4;
  border: solid transparent;
  color: #f0eee9;
  cursor: pointer;
  margin: 0;
  text-decoration: none;
  height: 15vmin;
  min-width: 10vmin;
  border-radius: 3px;
  transition: border .15s;
}

#left-button {
  border-width: 3px 0 3px 3px;
}

#right-button {
  border-width: 3px 3px 3px 0;
}

button:hover {
  border: solid #f1a500;
}

/* Text */

p {
  color: #f0eee9;
  margin: 0;
  font-size: 4vmin;
  text-align: center;
}

.subtitle-bg p {
  padding: 2vmin 2.5vmin 2.5vmin 2.5vmin;
  font-size: 2.4vmin;
}

p.link-text {
  position: relative;
  bottom: 2.5vmin;
  padding: 0;
  text-decoration: underline;
  color: #f1a500;
}

p.link-text:hover {
  filter: hue-rotate(158deg) brightness(135%) saturate(1.2%);
}

p.link-text img {
  position: relative;
  bottom: -0.75vmin;
  height: 2.5vmin;
  margin: 0 0 0.25vmin 0.25vmin;
}


/* Small screens */
@media only screen and (max-width: 550px) {
  button {
    display: none;
  }

  .modal-img {
    width: 100vmin;
    height: auto;
  }

  .title-bg,
  .subtitle-bg {
    height: 10vmax;
  }

  .center-bg {
    width: 60vmin;
  }
}
</style>