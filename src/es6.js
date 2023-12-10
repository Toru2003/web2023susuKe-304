"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [lastName, firstName, middleName] = fio.split(' '); // через сплит добавляем пробел

  // Проверяем, есть ли отчество
  if (middleName) {
    return `${firstName} ${lastName}`;
  } else {
    return `${firstName} ${lastName}`.trim(); // удаляем пробелы, если они есть(по сути удаляет лишние пробелы)
  }
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {return Array.from(new Set(array));} //set удаляет повторы, Array.from-возвращает все в массив

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
      // Проверка на пустой массив
  if (array.length === 0) {
    return false;
  }

  // Находим максимальное и минимальное значение в массиве зарплат
  const maxSalary = Math.max(...array);
  const minSalary = Math.min(...array);

  // Проверка, чтобы избежать деления на ноль необезательно но пусть будет
  if (minSalary === 0) {
    return 0; 
  }

  // Вычисляем разницу и возвращаем результат
  const difference = maxSalary / minSalary;
  return difference;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
      this.wordsMap = new Map();
    }
  
    // Добавление слова в словарь
    addWord(key, value) {
      // Проверка на null и undefined
      if (key != null && value != null) {
        // Проверка, что ключ и значение являются строками
        if (typeof key === 'string' && typeof value === 'string') {
          this.wordsMap.set(key, value);
        } else {
          throw new Error('Ключ и значение должны быть строками');
        }
      } else {
        throw new Error('Ключ и значение не могут быть null или undefined');
      }
    }
  
    // Получение значения по ключу
    getWord(key) {
      return this.wordsMap.get(key);
    }
  
    // Удаление слова из словаря
    removeWord(key) {
      this.wordsMap.delete(key);
    }
  
    // Получение всех слов в словаре
    getAllWords() {
      return Array.from(this.wordsMap.keys());
    }
  }

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
