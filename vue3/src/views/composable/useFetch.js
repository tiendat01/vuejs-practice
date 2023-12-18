// fetch.js
import { ref, toValue } from 'vue';

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  fetch(toValue(url))
    .then(res => res.json())
    .then(json => (data.value = json))
    .catch(err => (error.value = err));

  console.log(toValue(url));
  console.log(data.value);
  console.log(error.value);

  return { data, error };
}
