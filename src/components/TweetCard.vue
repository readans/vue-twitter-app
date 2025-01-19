<script setup>
import { computed } from 'vue';
import TweetOption from './TweetOption.vue';
import { updateTweet } from "../model/tweets.js"

/** @typedef {object} Tweet
 * @property {string} id
 * @property {string} name
 * @property {string} nickname
 * @property {string} image
 * @property {boolean} isVerified
 * @property {boolean} isFollowed
 * @property {boolean} isLiked
 * @property {string} content
 * @property {string} date
 * @property {number} retweets
 * @property {number} likes
 * @property {number} comments
 */

/**
 * @typedef {Object} Props
 * @property {Tweet} tweet
 */

/**
 * @type {Props}
 */
const props = defineProps({
  tweet: Object
})

const btnProps = computed(() => {
  const className = `rounded-full px-4 py-1 font-bold border ${props.tweet.isFollowed ? 'bg-transparent text-black border-black' : 'bg-blue-500 text-white border-transparent'}`;
  const text = props.tweet.isFollowed ? 'Following' : 'Follow';

  return { className, text };
});

const changeFollow = async () => {
  await updateTweet(props.tweet.id, { ...props.tweet, isFollowed: !props.tweet.isFollowed })
  props.tweet.isFollowed = !props.tweet.isFollowed;
}

const handleLike = () => {
  props.tweet.isLiked ? props.tweet.likes-- : props.tweet.likes++
  props.tweet.isLiked = !props.tweet.isLiked;
}

</script>

<template>
  <div class="bg-white rounded-xl py-2 px-3">
    <div class="flex justify-between mb-3">
      <div class="flex space-x-2">
        <div class="w-12 h-12 object-cover rounded-full overflow-hidden">
          <img :src="tweet.image" :alt="tweet.nickname">
        </div>
        <div class="">
          <div class="flex items-center space-x-1">
            <h3 class="font-bold text-lg">{{ tweet.name }}</h3>
            <svg v-if="tweet.isVerified" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <h4 class="text-slate-500 text-sm">{{ tweet.nickname }}</h4>
        </div>
      </div>
      <div class="flex items-center">
        <button :class="btnProps.className" @click="changeFollow">{{ btnProps.text
        }}</button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-4 h-4 ml-2 hover:cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
    <p v-html="tweet.content" class="text-xl"></p>
    <div class="text-slate-500 font-normal py-3">{{ tweet.date }}</div>
    <div class="border-t border-b flex">
      <div class="py-3 w-3/12 flex justify-center space-x-2 border-r">
        <p class="text-slate-500"><span class="font-bold text-black">{{ tweet.retweets }}</span> Retweets</p>
        <p class="text-slate-500"><span class="font-bold text-black">{{ tweet.likes }}</span> Likes</p>
      </div>
      <div class="py-3 flex-1"></div>
    </div>
    <div class="flex space-x-4 py-3">
      <TweetOption url="/img/comment.svg" :num="tweet.comments" />
      <TweetOption url="/img/retweet.svg" :num="tweet.retweets" />
      <TweetOption :url="tweet.isLiked ? '/img/heart-alt.svg' : '/img/heart.svg'" :num="tweet.likes"
        @clicked="handleLike" />
      <TweetOption url="/img/envelope.svg" />
      <TweetOption url="/img/shield.svg" />
    </div>
  </div>
</template>
<style></style>