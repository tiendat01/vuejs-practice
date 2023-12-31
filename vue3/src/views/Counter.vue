<!-- To access ref in template, need to declare and return them from a component's setup() function -->
<!-- <script>
import { ref } from 'vue';
export default {
  // To access refs from a component's template
  setup() {
    const count = ref(0)
    return { count } // unwrap
  }
}
</script>
-->

<!--  The setup attribute is a hint that makes Vue perform compile-time transforms that allow us to use Composition API with less boilerplate -->
<script setup>
import { nextTick, reactive, ref } from 'vue';
import UseMousePositionConsumer from './useMousePositionConsumer.vue';
import BlogPostConsumer from './BlogPostConsumer.vue';
import VFor from './VFor.vue';
import CustomInput from '../components/CustomInput.vue';
import UserName from '../components/UserName.vue';
import FancyListConsumer from './FancyListConsumer.vue';
import { useFetch } from './composable/useFetch';

const count = ref(0);

// ref is a property in reactive obj
const count1 = ref(0);
const state = reactive({ count1 });
console.log(state.count1); // auto unwrapped, act as a normal property
state.count1 = 1; // change value
console.log(count1.value);

const count2 = ref(2);
state.count1 = count2; // change ref

console.log(state.count1); // 2 // replace ref to count2
console.log(count1.value); // lost reactive connection with state object

// array and collection caveat
const books = reactive([ref('String type element')]);
console.log(books[0].value); // not auto unwrap .value , so need .value here

const map = reactive(new Map([['count', ref(0)]]));
console.log(map.get('count').value); // need .value here too

// ref not in top-level
const topLevelObj = { id: ref(1) };

// ref for input
const inputData = ref(undefined);

const last = ref(undefined);
const first = ref(undefined);

const url = ref('/test');

let { data, error } = useFetch(url.value);

setTimeout(() => {
  url.value = '/new-url';
}, 1000);

console.log(data.value, error.value);

// inject plugins
import { inject } from 'vue';

const i18n = inject('i18n');

console.log(i18n.greetings.hello);
</script>

<template>
  <div>
    <!-- auto unwrap ref -->
    {{ count }}
  </div>

  <div>
    <button @click="count++">Increment {{ count }}</button>
  </div>

  <div>{{ topLevelObj.id + 1 }}</div>
  <div>{{ topLevelObj.id.value + 1 }}</div>

  <div>
    <button
      @click="
        $log(Math.PI);
        $alert('haha');
      "
    >
      Click me
    </button>
  </div>

  <UseMousePositionConsumer />

  <VFor />

  <br />

  <BlogPostConsumer />

  <br />

  <CustomInput v-model:model-value.capitalize.haha="inputData" />
  {{ inputData }}

  <br />
  <!-- multiple v-model -->
  <UserName v-model:first-name.capitalize="first" v-model:last-name.uppercase="last" />
  {{ first }} - {{ last }}

  <br />

  <FancyListConsumer />
  {{ $translate('greetings.hello') }}
</template>
