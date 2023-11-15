<!-- <script>
import { ref } from 'vue';
export default {
  // To access refs in a component's template
  setup() {
    const count = ref(0)
    return {
      count
    }
  }
}
</script>
-->

<!--  The setup attribute is a hint that makes Vue perform compile-time transforms that allow us to use Composition API with less boilerplate -->
<script setup>
import { reactive, ref } from 'vue';

const count = ref(0)

const count1 = ref(0);
const state = reactive({ count1 });
console.log(state.count1);

state.count1 = 1;
console.log(count1.value);

const count2 = ref(2);
state.count1 = count2;
console.log(state.count1); // 2 // replace ref to count2
console.log(count1.value); // lost reactive connection with state object

// array and collection caveat
const books = reactive([ref('String type element')]);
console.log(books[0].value); // not auto unwrapp .value , so need .value here

const map = reactive(new Map([['count', ref(0)]]))
console.log(map.get('count').value) // need .value here too

// ref not in top-level
const topLevelObj = { id: ref(1) }

</script>

<template>
  <div>
    {{ count }}
    <button @click="count++">
      {{ count }}
    </button>
    <div>{{ topLevelObj.id }}</div>
  </div>
</template>