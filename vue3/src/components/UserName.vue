<script setup>
import { computed } from 'vue';

const props = defineProps({
  firstName: String,
  lastName: String,
  firstNameModifiers: { default: () => ({}) },
  lastNameModifiers: { default: () => ({}) },
});
const emit = defineEmits(['update:firstName', 'update:lastName']);

// v-bind and emit way
function emitFirstName(e) {
  let value = e.target.value;
  if (props.firstNameModifiers?.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emit('update:firstName', value);
}

// computed way
const lastNameComputed = computed({
  get() {
    return props.lastName;
  },
  set(value) {
    let result = value;
    if (props.lastNameModifiers?.uppercase) {
      result = value.toUpperCase();
    }
    emit('update:lastName', result);
  },
});

console.log(props.firstNameModifiers); // { capitalize: true }
console.log(props.lastNameModifiers); // { uppercase: true}
</script>

<template>
  <input type="text" :value="firstName" @input="emitFirstName" />
  <input type="text" v-model="lastNameComputed" />
</template>
