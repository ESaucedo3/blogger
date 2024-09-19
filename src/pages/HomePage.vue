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
    catch (error){
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

      <div class="col-12 border border-2 border-dark">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi laudantium obcaecati quis quam praesentium sit ratione iure veritatis sapiente officiis iusto deleniti, quod nesciunt, rem exercitationem id fugit optio.</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
