<script>
import { useMousePosition } from './composable/useMousePosition';

export default {
  setup() {
    const { x, y } = useMousePosition();
    return { x, y };

    // return {
    //   pos: useMousePosition() // in <template> pos.x - pos.y </template>
    // }
  },
};
</script>

<template>
  <h1>Use Mouse Demo</h1>
  <p>x: {{ x }} | y: {{ y }}</p>
</template>
