'use strict';

function filterArray(numbers, value) {
  const filter = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filter.push(numbers[i]);
    }
  }
  return filter;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

/*Залиш цей код для перевірки ментором.



Вимоги

Оголошено функцію filterArray(numbers, value).
Виклик filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5].
Виклик filterArray([1, 2, 3, 4, 5], 4) повертає [5].
Виклик filterArray([1, 2, 3, 4, 5], 5) повертає [].
Виклик filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76].
Виклик filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76].
Виклик з будь-якими валідними аргументами повертає правильний масив.
Результати всіх викликів виведено в консоль.*/
