'use strict';
function slugify(title) {
  const slug = title.toLowerCase();
  return slug.replaceAll(' ', '-');
}
console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

/*Залиш цей код для перевірки ментором.



Вимоги

Оголошено функцію slugify(title).
Виклик slugify("Arrays for beginners") повертає "arrays-for-beginners".
Виклик slugify("English for developer") повертає "english-for-developer".
Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript".
Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks".
Виклик з будь-якими валідними аргументами повертає правильне значення.
Результати всіх викликів виведено в консоль.*/
