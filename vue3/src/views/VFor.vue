<script setup>
import { reactive, ref } from 'vue';

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<template>
  <br>

  <ul>
    <li v-for="({ message }, index) of items" :key="index">
      {{ parentMessage }} - {{ index }} - {{ message }}
    </li>
  </ul>

  <br>

  <ul>
    <li v-for="(value, key, index) in myObject" :key="key">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>

  <br>

  <span v-for="n in 10" :key="n">{{ n }}</span>
</template>