<script setup>
import { reactive, ref, onMounted } from 'vue';

const parentMessage = ref('Parent');
const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10',
});

const list = ref([1, 2, 3]);
const itemRefs = ref([]);

onMounted(() => console.log(itemRefs.value));
</script>

<template>
  <br />

  <ul>
    <li v-for="({ message }, index) of items" :key="index">
      {{ parentMessage }} - {{ index }} - {{ message }}
    </li>
  </ul>

  <br />

  <ul>
    <li v-for="(value, key, index) in myObject" :key="key">{{ index }}. {{ key }}: {{ value }}</li>
  </ul>

  <br />

  <ul>
    <li v-for="(item, index) in list" :key="index" :ref="itemRefs">
      {{ item }}
    </li>
  </ul>

  <span v-for="n in 10" :key="n">{{ n }}</span>
</template>
