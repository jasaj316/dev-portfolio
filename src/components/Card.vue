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
  padding: 1vw;
  display: flex;
  margin-right: 1vw;
  margin-bottom: 1vw;
}

figcaption {
  margin-top: calc(1rem - 1vw);
  margin-bottom: 1rem;
  font-size: 1.05vw;
  color: #ff9a00;
  font-size: 1.3rem;
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
@media only screen and (max-width: 890px) {
  img {
    width: 40vw;
  }

  figcaption {
    font-size: 1.5vw;
  }

}
</style>

