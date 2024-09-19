<script setup>
import { Blog } from '@/models/Blog.js';

const props = defineProps({
  blogProp: { type: Blog, required: true }
})
</script>


<template>
  <div class="border border-2 border-dark p-2">
    <div>Text</div>
    <div>Img</div>
  </div>
</template>


<style lang="scss" scoped></style>