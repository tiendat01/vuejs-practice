<script setup>
const props = defineProps({
  items: Array,
});
</script>

<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <slot name="item" v-bind="item">Fallback content</slot>
    </li>
  </ul>
</template>
