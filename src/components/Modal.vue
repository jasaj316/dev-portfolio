<script setup lang="ts">

const props = defineProps<{ modalVis: string, title: string, src: string, alt: string }>();

</script>


<template>
  <div id="modal-bg" @click="$emit('imgClicked')" :class="props.modalVis">
    <figure class="modal-container">
      <img class="modal-img" :src="props.src" :alt="props.alt" />
      <div class="caption-bg"></div>
      <figcaption>{{ props.title }}</figcaption>
    </figure>
  </div>
</template>


<style scoped>
.hidden {
  display: none;
}

/* Modal Images */
#modal-bg {
  position: fixed;
  z-index: 2;
  background-color: #040611bb;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  cursor: pointer;
}

figcaption {
  margin-top: calc(1rem - 1vw);
  margin-bottom: 1rem;
  font-size: 1.05vw;
  color: #ff9a00;
  font-size: 1.3rem;
  font-weight: 600;
}

.caption-bg {}

.modal-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 3;
}

.modal-img {
  height: 80vh;
  width: auto;
}




/* Small screens */
@media only screen and (max-width: 710px) {
  .modal-img {
    margin: auto;
    height: auto;
    width: 100vw;
  }
}
</style>