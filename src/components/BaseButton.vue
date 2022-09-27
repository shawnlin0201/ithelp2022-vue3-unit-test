<script setup>
defineProps({
  type: {
    default: 'default',
    type: String,
    validator: (val) => ['default', 'disabled'].includes(val),
  },
})
</script>

<template>
  <button
    class="rounded-md flex py-2 px-3 transition text-[#24264B] justify-center items-center"
    :class="{
      'bg-[#FEC600] hover:bg-[#f0b306] active:shadow-inner active:shadow-[#b58503]': type === 'default',
      'bg-[#ccc] cursor-not-allowed': type === 'disabled',
    }"
  >
    <slot></slot>
  </button>
</template>
