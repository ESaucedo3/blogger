<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';
import BlogCard from './BlogCard.vue';

const activeBlog = computed(() => AppState.activeBlog)
</script>


<template>
  <!-- Modal -->
  <div class="modal fade" id="blogModal" tabindex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div v-if="activeBlog" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="blogModalLabel"></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <section class="container">
            <div class="row">
              <div class="col-12">
                <div class="border border-2 border-dark rounded box-shadow p-2 d-flex justify-content-between">
                  <div class="d-flex flex-column">
                    <div class="d-flex g-1 align-items-center">
                      <img :src="activeBlog.creator.picture" alt="" class="creator-img">
                      <p class="mb-0 ms-2">{{ activeBlog.creator.name }}</p>
                    </div>
                    <div class="d-flex flex-column flex-grow-1 justify-content-between">
                      <div>
                        <h5>{{ activeBlog.title }}</h5>
                        <p class="body-text">
                          {{ activeBlog.body }}
                        </p>
                      </div>
                      <div>
                        <p class="mb-0">{{ activeBlog.createdAt.toLocaleDateString() }}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img :src="activeBlog.imgUrl" :alt="activeBlog.title" class="blog-img">
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
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

.modal {
  --bs-modal-width: 1000px
}
</style>