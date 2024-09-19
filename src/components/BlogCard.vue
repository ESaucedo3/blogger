<script setup>
import { Blog } from '@/models/Blog.js';
import { blogsService } from "@/services/BlogsService.js";
import { logger } from "@/utils/Logger.js";

const props = defineProps({
  blogProp: { type: Blog, required: true }
})

function setActiveBlog() {
  blogsService.setActiveBlog(props.blogProp)
}
</script>


<template>
  <div class="border border-2 border-dark rounded box-shadow p-2 d-flex justify-content-between">
    <div>
      <div class="d-flex g-1 align-items-center">
        <img :src="blogProp.creator.picture" alt="" class="creator-img">
        <p class="mb-0 ms-2">{{ blogProp.creator.name }}</p>
      </div>
      <div class="d-flex flex-column" @click="setActiveBlog()" role="button" data-bs-toggle="modal" data-bs-target="#blogModal">
        <h5>{{ blogProp.title }}</h5>
        <p class="body-text">
          {{ blogProp.body.substring(0, 200) }}...
        </p>
        <p class="mb-0">{{ blogProp.createdAt.toLocaleDateString() }}</p>
      </div>
    </div>
    <div>
      <img :src="blogProp.imgUrl" :alt="blogProp.title" class="blog-img">
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  object-fit: cover;
  object-position: center;
}

.blog-img {
  width: 20vw;
  aspect-ratio: 1/1;
  border-radius: 8px;
  margin-left: 2em;
}

.creator-img {
  width: 4vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin-bottom: 1em;
}

.box-shadow {
  box-shadow: 1px 1px 2px rgb(104, 103, 103);
}

.body-text {
  color: rgb(82, 82, 82);
}
</style>
