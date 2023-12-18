<script setup>
const props = defineProps({
  modelValue: String,
  modelValueModifiers: { default: () => ({}) }, // object e.g: { capitalize: true, uppercase: true } more than one property => chained modifiers
});

const emit = defineEmits(['update:modelValue']);
// console.log(props.modelModifiers);

// method
function emitValue(e) {
  console.log(props.modelValueModifiers);
  let value = e.target.value;
  if (props.modelValueModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emit('update:modelValue', value);
}
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>
