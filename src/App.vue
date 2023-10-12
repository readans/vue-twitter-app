<script setup>
import { Suspense } from 'vue';
import Tweets from './components/Tweets.vue';
</script>

<template>
  <div class="flex justify-center mt-3">
    <div class="w-6/12">
      <Suspense>
        <Tweets />
        <template #fallback>
          Loading...
        </template>
      </Suspense>
    </div>
  </div>
</template>

<style scoped></style>
