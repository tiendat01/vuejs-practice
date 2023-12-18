<script setup>
import { ref } from 'vue';
import FancyList from '../components/FancyList.vue';

const list = ref([
  { body: 'test1', username: 'test1', likes: 100 },
  { body: 'test2', username: 'test2', likes: 200 },
  { body: 'test3', username: 'test3', likes: 300 },
]);
const url = ref('/test');
</script>

<template>
  <FancyList :api-url="url" :per-page="10" :items="list">
    <template #item="{ body, username, likes }">
      <div class="item">
        <p>{{ body }}</p>
        <p>by {{ username }} | {{ likes }} likes</p>
      </div>
    </template>
  </FancyList>
</template>
