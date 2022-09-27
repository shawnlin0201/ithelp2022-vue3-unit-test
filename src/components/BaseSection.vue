<script setup></script>

<template>
  <div class="bg-white rounded-md shadow-sm shadow-black overflow-hidden">
    <section class="max-h-150 p-4 overflow-y-scroll">
      <slot></slot>
    </section>
    <slot name="footer"></slot>
  </div>
</template>
