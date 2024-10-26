<template>
  <div class="col-md-3 mb-4">
    <a :href="link">
      <img :src={} class="img-fluid" :alt="title">
    </a>
    <h5 class="mt-2">{{ title }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@import '~bootstrap/dist/css/bootstrap.min.css';
@import url(C:\Users\dsadm\Desktop\aaaaaaaaaaa\BackEND_ADS2024\BOOKMANGE\library-project\frontend_vue\src\assets\styles.css);
</style>
