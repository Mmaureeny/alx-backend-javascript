const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let count = 0;
  if (weakMap.has(endpoint)) {
    count = weakMap.get(endpoint);
  }
  count++;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
