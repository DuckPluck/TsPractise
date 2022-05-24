// tsc 01_types.ts      - скомпилировать js
// node 01_types.js     - запустить js


//                              ***ВИДЫ ТИПОВ***

// простейшие
// константа "isFetching" типа "boolean" со значением "true"

const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TypeScript'


// массивы
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]  // тоже самое, только generic тип записи

const word: string[] = ['Hello', 'TypeScript']

// Tuple - разные типы в одном массиве
const contact: [string, number] = ['Danya', 1234567]




//                          ***Any - ПЕРЕОПРЕДЕЛЕНИЕ ТИПОВ***
let variable: any = 42      // специальный тип any позволяет снять закрепление типа
//...
variable = 'New string'
variable = []




//                                  ***ФУНКЦИИ***
function sayMyName(name: string): void {    // в скобках тип аргумента, вне скобок тип возвращаемого значения
    console.log(name)
}

sayMyName('Heisenberg')




// ***ТИП Never*** - когда функция возвращает ошибку и никогда не заканчивает свое выполнение, либо когда постоянно что-то делает
function throwError(message: string): never {
    throw new Error(message)
}


// function infinite(): never {
//     while (true) {

//     }
// }





//                          ***Type - СОЗДАНИЕ СОБСТВЕННЫХ ТИПОВ***

type Login = string                     //создали тип Login, который по сути просто строка (иногда используется для наглядности кода)

const login: Login = 'admin'
// const login2: Login = 2         -error


type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true            -error







//                          ***ТИП NULL и UNDEFINED***
//                          используются для определения типов значений
//                          для функций используется "void"

type SomeType = string | null | undefined