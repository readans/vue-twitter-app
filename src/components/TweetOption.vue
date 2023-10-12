<script setup>

/**
 * @typedef {Object} Props
 * @property {string} url
 * @property {number} num
 * @property {Function} handleClick
 */

/**
 * @type {Props}
 */
const props = defineProps({
  url: String,
  num: Number,
})

defineEmits(['clicked'])

</script>

<template>
  <div
    :class="`flex items-center hover:cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 p-1 rounded transition-colors ${num != undefined && 'space-x-1'}`"
    @click="$emit('clicked')">
    <div class="w-5 h-5 object-cover">
      <img :src="url" alt="" class="">
    </div>
    <div class="font-normal text-slate-500 pointer-events-none">{{ num }}</div>
  </div>
</template>