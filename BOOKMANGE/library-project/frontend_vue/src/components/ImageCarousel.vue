<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="carWashImage" class="d-block w-100" alt="Car Wash and Detailing">
      </div>
      <div class="carousel-item">
        <img :src="bannerImage" class="d-block w-100" alt="Banner">
      </div>
    </div>
  </div>
</template>

<script setup>
import carWashImage from '@/fotos/banner2.jpg';
import bannerImage from '@/fotos/banner2.jpg';
</script>

<style scoped>
/* Estilos específicos para o Carousel */
</style>