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
  backdrop-filter: blur(8px) saturate(50%);
  -webkit-tap-highlight-color: transparent;
  background-image: radial-gradient(#040611e6 60%, #040611fd);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
}

.title-bg {
  margin-top: calc(12vh - 1.9rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90%;
}

.subtitle-bg {
  margin-bottom: auto;
  max-width: 60%;
}

.center-bg {
  width: 60vmin;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}


/* Img */

.modal-img {
  height: 70vh;
  width: auto;
  padding: 1rem 0 1rem 0;
}

/* Buttons */
button {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  font-size: 5vmin;
  background-color: #040611e6;
  box-shadow: inset 0px 0px 30px #121229;
  border: solid #f0eee9;
  color: #f0eee9;
  cursor: pointer;
  margin: 1rem;
  text-decoration: none;
  height: 15vmin;
  min-width: calc(7vmin + 0.8rem);
  transition: border .15s, color .15s;
}

#left-button {
  border-width: 3px 3px 3px 3px;
  border-radius: 3px 3px 3px 3px;
}

#right-button {
  border-width: 3px 3px 3px 3px;
  border-radius: 3px 3px 3px 3px;
}

button:hover {
  color: #f1a500;
  border: solid #f1a500;
}

/* Text */

p {
  color: #f0eee9;
  font-size: 5rem;
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;
}

.subtitle-bg p {
  font-size: 3vmin;
}


p.link-text {
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

p {
  font-size: calc(1.5vmin + 0.8rem);
}

.subtitle-bg p {
  font-size: calc(1.3vmin + 0.4rem);
}

/* Tall screens */
@media only screen and (max-aspect-ratio: 83/100) {
  .modal-img {
    width: 72vmin;
    height: auto;
  }

  .title-bg {
    margin-top: calc(29rem - 50vw);
  }

  p {
    font-size: calc(1.2vmin + 0.8rem);
  }

  .subtitle-bg p {
    font-size: calc(1vmin + 0.8rem);
  }
}

/* Taller screens */
@media only screen and (max-aspect-ratio: 65/100) {
  .modal-img {
    width: 100vw;
    height: auto;
  }

  .title-bg {
    margin-top: calc(22rem - 50vw);
  }

  .subtitle-bg,
  .subtitle-bg {
    max-width: 85%;
  }

  button {
    display: none;
  }
}
</style>