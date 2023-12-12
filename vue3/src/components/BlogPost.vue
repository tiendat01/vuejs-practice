<script setup>
const props = defineProps(['title']);
const emit = defineEmits(['enlarge-text']);

//
console.log(props.title);
emit('enlarge-text'); // this.$emit('...')
</script>

<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>
