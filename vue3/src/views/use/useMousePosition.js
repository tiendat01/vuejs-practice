import { ref, onMounted, onUnmounted, reactive, toRefs, toRef } from 'vue';

// original
// export function useMousePosition() {
//   const x = ref(0);
//   const y = ref(0);

//   function update(e) {
//     x.value = e.pageX;
//     y.value = e.pageY;
//   }

//   onMounted(() => {
//     window.addEventListener("mousemove", update);
//   });

//   onUnmounted(() => {
//     window.removeEventListener("mousemove", update);
//   });

//   return { x, y };
// }

// compose x,y to object => use reactive
export function useMousePosition() {
  const pos = reactive({
    x: 0,
    y: 0,
  });

  function update(e) {
    pos.x = e.pageX;
    pos.y = e.pageY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  // return pos; // cannot spread to refs in consumer
  return toRefs(pos); // Converts a reactive object to a plain object where each property of the resulting object is a ref pointing to the corresponding property of the original object. Each individual ref is created using toRef().
}
