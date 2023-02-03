<script setup lang="ts">
import ExternalLinkIcon from '@/assets/img/external-64.svg';
import { onUpdated, onMounted } from 'vue';

const props = defineProps<{
  modalVis: string, title: string, subtitle: string, src: string, alt: string,
  link: string, linkText: string, imgPos: { x: number, anim: string }
}>();

const arrowDirs: string[] = ["l", "r"]

let modalImg: HTMLImageElement;
onMounted(() => {
  modalImg = document.querySelector(".modal-img") as HTMLImageElement;
})

onUpdated(() => {
  modalImg.style.transform = `translateX(${props.imgPos.x}px)`
});
</script>


<template>

  <div id="modal-bg" :class="props.modalVis">
    <div class="title-bg">
      <p>{{ props.title }}</p>
    </div>
    <div class="center-bg">
      <button id="left-button" @click.stop="$emit('btnClicked', arrowDirs[0])">
        &lt;-
      </button>
      <img class="modal-img" :class="props.imgPos.anim" :src="props.src" :alt="props.alt"
        @touchmove.passive="$emit('imgTouched', $event)" @touchend="$emit('imgTouched', $event)" />
      <button id="right-button" @click.stop="$emit('btnClicked', arrowDirs[1])">
        ->
      </button>
    </div>
    <aside class="subtitle-bg">
      <p>{{ props.subtitle }}</p>
      <a v-if="props.link" :href="props.link">
        <p class="link-text">{{ props.linkText }}<img :src="ExternalLinkIcon" alt="Link to demo" /></p>
      </a>
    </aside>
    <div class="exit-button" @click="$emit('exitClicked')">&#x2716;</div>
  </div>

</template>


<style scoped>
.hidden {
  display: none !important;
}

.vis {
  backdrop-filter: blur(0px);
}

.exit-button {
  position: fixed;
  cursor: pointer;
  color: #f0eee9;
  top: 1vmax;
  right: 1vmax;
  z-index: 2;
  font-size: calc(5.3vmin + 1.1rem);
  padding: 1vmin 4vmin 1vmin 4vmin;
}

.exit-button:hover {
  color: #f1a500;
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
  z-index: 1;
}

.title-bg {
  margin-top: calc(12vh - 1.9rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  max-width: 90%;
  margin-top: 0;
  flex: 1.2;
}

.subtitle-bg {
  margin-bottom: auto;
  max-width: calc(68vw + 2rem);
  flex: 1.4;
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
  height: calc(78vh - 4.2rem);
  width: auto;
  margin: 1rem 0 1rem 0;
}

.modal-img.anim {
  transition: transform 0.125s;
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
  text-decoration: none;
  height: 15vmin;
  min-width: calc(7vmin + 0.8rem);
  transition: border .15s, color .15s;
  z-index: -1;
}

#left-button {
  border-width: 3px 0px 3px 3px;
  border-radius: 3px 0px 0px 3px;
}

#right-button {
  border-width: 3px 3px 3px 0px;
  border-radius: 0px 3px 3px 0px;
}

button:hover {
  color: #f1a500;
  border: solid #f1a500;
}

/* Text */
p {
  color: #f0eee9;
  font-size: calc(3vmin + 0.4rem);
  text-align: center;
  margin-block-start: 2vw;
  margin-block-end: 0;
}

.subtitle-bg p {
  margin-block-start: 0;
  font-size: calc(1.3vmin + 0.5rem);
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

/* User is mobile (can touch) */
@media only screen and (hover:none) {
  button {
    display: none;
  }
}

/* Tall screens */
@media only screen and (max-aspect-ratio: 72/100) {
  .exit-button {
    top: 0.5vmax;
    font-size: calc(5.4vmin + 1.2rem);
  }

  .modal-img {
    width: calc(75vw + 2rem);
    height: auto;
  }

  .title-bg {
    flex: 1.3;
  }

  .subtitle-bg {
    max-width: 90%;
    flex: 1.4;
  }

  p {
    font-size: calc(4.6vmin + 0.1rem);
  }

  .subtitle-bg p {
    font-size: calc(1.3vmin + 0.7rem);
  }
}
</style>