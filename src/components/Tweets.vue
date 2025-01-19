<script setup>
import { reactive } from 'vue';
import TweetCard from './TweetCard.vue';
import { getTweets } from "../model/tweets"

const data = await getTweets();
const tweets = reactive(data)

</script>
<template>
  <div class="" v-for="tweet in tweets">
    <div class="mb-3">
      <TweetCard :tweet="tweet" />
    </div>
  </div>
</template>
