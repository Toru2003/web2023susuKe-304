//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n | 0) == n; //отбрасываем диситичную часть числа и сверяем его
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let array = [];
    for (let i = 2; i <= 20; i += 2) array.push(i);

    return array;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + recSumTo(n - 1);
    }
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let fibNum = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
    }
    return fibNum[n];
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    let result = initialValue;
    return function (value) {
        if (operatorFn) {
            return (result = operatorFn(result, value));
        } else {
            return result;
        }
    };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
    let currentValue = start;
    function generator() {
        const result = currentValue;
        currentValue += step;
        return result;
    }
    return generator;
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    // Проверка на строгое равенство (для примитивных значений и ссылок на один и тот же объект)
    if (firstObject === secondObject) {
        return true;
    }

    // Проверка на NaN (так как NaN === NaN всегда false)
    if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) {
        return true;
    }

    // Проверка на тип объекта
    if (typeof firstObject !== 'object' || typeof secondObject !== 'object') {
        return false;
    }

    // Получение ключей объектов
    const firstKeys = Object.keys(firstObject);
    const secondKeys = Object.keys(secondObject);

    // Проверка на количество ключей
    if (firstKeys.length !== secondKeys.length) {
        return false;
    }

    // Рекурсивное сравнение значений свойств
    for (const key of firstKeys) {
        if (
            !(
                secondKeys.includes(key) &&
                deepEqual(firstObject[key], secondObject[key])
            )
        ) {
            return false;
        }
    }

    // Если все проверки пройдены, объекты считаются глубоко равными
    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
