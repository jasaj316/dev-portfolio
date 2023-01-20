<script setup lang="ts">

const props = defineProps<{ title: string, src: string, alt: string }>();

</script>


<template>
  <figure class="card">
    <figcaption>{{ props.title }}</figcaption>
    <img @click="$emit('imgClicked', props.title, props.src, props.alt)" :src="props.src" :alt="props.alt">
  </figure>
</template>


<style scoped>
.card {
  flex-direction: column;
  align-items: center;
  background: #1718217d;
  border-radius: 0.1rem;
  width: 25vw;
  padding: 1vw;
  display: flex;
  margin-right: 2vw;
  margin-bottom: 2vw;
}

figure {
  margin-inline-start: 0;
  margin-inline-end: 0;
}

figcaption {
  margin-top: calc(1rem - 1vw);
  margin-bottom: 1rem;
  font-size: 1.1vw;
  color: #ff9a00;
  font-weight: 600;
}

img {
  user-select: none;
  width: 24vw;
  height: auto;
  border: 2px solid #00000000;
  border-radius: 0.1rem;
  transition: border 0.15s;
  cursor: pointer;
}

img:hover {
  border: 2px solid #ff8800;
}

/* touch screen remove hovers */
@media (hover: none) {
  img:hover {
    border: none;
  }
}

/* Media generals */
@media only screen and (max-width: 1090px) {
  .card {
    width: unset;
  }

  img {
    width: 40vw;
  }

  figcaption {
    font-size: 1.6vw;
  }

}

@media only screen and (max-width: 580px) {
  figcaption {
    visibility: hidden;
    margin: 0;
  }

}
</style>

