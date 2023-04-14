function removeDuplicates(values) {
  // Tu código aquí 👈
  let set = new Set(values);
  return Array.from(set);
}

const fruits = [
  "melon",
  "melon",
  "mango",
  "banana",
  "apple",
  "banana",
  "apple",
];

console.log(removeDuplicates(fruits))