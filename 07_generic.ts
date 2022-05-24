// это запись типов, в которой можно указывать разные типы

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Danya']


function reverse<T>(array: T[]): T[] {      // функция работает с разными типами данных
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)