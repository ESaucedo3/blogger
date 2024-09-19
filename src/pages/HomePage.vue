<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
import { blogsService } from '@/services/BlogsService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const blogs = computed(() => AppState.blogs);

onMounted(() => {
  getBlogs();
})

async function getBlogs() {
  try {
    await blogsService.getBlogs();
  }
  catch (error) {
    Pop.meow(error);
  }
}
</script>

<template>
  <section class="container">
    <div class="row gy-4 p-4">
      <div v-for="blog in blogs" :key="blog.id" class="col-12">
        <BlogCard :blogProp="blog" />
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss"></style>
