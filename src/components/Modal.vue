<script setup lang="ts">

const props = defineProps<{ modalVis: string, title: string, src: string, alt: string }>();

</script>


<template>
  <div id="modal-bg" @click="$emit('imgClicked')" :class="props.modalVis">
    <figure class="modal-container">
      <img class="modal-img" :src="props.src" :alt="props.alt" />
      <div class="caption-bg">
        <figcaption>{{ props.title }}</figcaption>
      </div>
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
  top: 0;
  cursor: pointer;
}

figcaption {
  text-align: center;
  margin-top: 1rem;
  color: #ff9a00;
  font-size: 1.6rem;
  font-weight: 600;
}

.caption-bg {
  background-image: linear-gradient(to right, #09091a77, #02020f, #09091a77);
  width: 100%;
  height: 60px;
  margin-top: auto;
}

.modal-container {
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.modal-img {
  margin-top: auto;
  user-select: none;
  height: 80vh;
  width: auto;
}

/* Small screens */
@media only screen and (max-width: 580px) {

  figcaption {
    text-align: center;
    margin-top: 1rem;
    color: #ff9a00;
    font-size: 5vw;
    font-weight: 600;
  }

  .caption-bg {
    margin: 0;
  }

  .modal-img {
    margin: 0;
    height: auto;
    width: 100%;
  }
}
</style>