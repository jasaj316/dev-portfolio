<script setup lang="ts">

const props = defineProps<{ title: string, src: string, alt: string }>();

</script>


<template>
  <figure class="card" @click="$emit('imgClicked', props.src)">
    <img :src="props.src" :alt="props.alt">
    <div class="caption-bg">
      <figcaption>{{ props.title }}</figcaption>
    </div>
  </figure>
</template>


<style scoped>
figure {
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  background-color: transparent;
  margin-inline-start: 0;
  margin-inline-end: 0;
  border: 3px solid #00000000;
  /* border-radius: 3px; */
  transition: border 0.15s;
  cursor: pointer;
}

figure:hover {
  border: 3px solid #f1a500;
}

.caption-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
  width: 100%;
  background-color: #0a091a;
  box-shadow: inset 0px -2px 30px #121229;
  position: relative;
  top: -3.2vw;
  height: 3vw;
  margin-bottom: -3.2vw;
}

figcaption {
  font-size: 1.1vw;
  color: #f0eee9;
}

img {
  user-select: none;
  margin-bottom: 0;
  width: 25vw;
  height: auto;
}


/* touch screen remove hovers */
@media (hover: none) {
  figure:hover {
    border: none;
  }
}

/* Media generals */
@media only screen and (max-width: 1090px) {
  .caption-bg {
    top: -5.2vw;
    height: 5vw;
    margin-bottom: -5.2vw;
    width: 101%;
  }

  figcaption {
    font-size: 1.8vw;
  }

  img {
    width: 42vw;
  }

}

/* Small screens */
@media only screen and (max-width: 570px) {
  .caption-bg {
    top: -10.2vw;
    height: 10vw;
    margin-bottom: -10.2vw;
  }

  figcaption {
    font-size: 3.6vw;
  }

  img {
    width: 88vw;
  }
}
</style>

