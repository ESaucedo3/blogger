<script setup>
import { AppState } from "@/AppState.js";
import { accountService } from "@/services/AccountService.js";
import { profilesService } from "@/services/ProfileService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const activeUser = computed(() => AppState.activeAccount)
const route = useRoute()

watch(() => route.params.userId, () => {
  findUserById()

}, { immediate: true })


async function findUserById() {
  try {
    const userId = route.params.userId
    logger.log(`getting User with Id of`, userId)
    await profilesService.findUserById(userId)
  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }
}
</script>


<template>

  <body>
    <div>
      <h1>{{ activeUser.name }}</h1>
    </div>
  </body>
</template>


<style lang="scss" scoped></style>