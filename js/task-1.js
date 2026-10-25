'use strict';
function isEnoughCapacity(products, containerSize) {
  let total = 0;

  const keys = Object.keys(products);

  for (const key of keys) {
    total += products[key];
  }
  if (total <= containerSize) {
    return true;
  } else {
    return false;
  }
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false

/*Залиш цей код для перевірки ментором.



Вимоги

Оголошено функцію isEnoughCapacity(products, containerSize).
Виклик isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8) повертає true.
Виклик isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12) повертає false.
Виклик isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14) повертає true.
Виклик isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7) повертає false.
Виклик з будь-якими валідними аргументами повертає правильне значення.
Результати всіх викликів виведено в консоль.*/
