//                              ***ВИДЫ ТИПОВ***
// простейшие
// константа "isFetching" типа "boolean" со значением "true"
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello TypeScript';
// массивы
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13]; // тоже самое, только generic тип записи
var word = ['Hello', 'TypeScript'];
// Tuple - разные типы в одном массиве
var contact = ['Danya', 1234567];
//                          ***Any - ПЕРЕОПРЕДЕЛЕНИЕ ТИПОВ***
var variable = 42; // специальный тип any позволяет снять закрепление типа
//...
variable = 'New string';
variable = [];
//                                  ***ФУНКЦИИ***
function sayMyName(name) {
    console.log(name);
}
sayMyName('Heisenberg');
// ***ТИП Never*** - когда функция возвращает ошибку и никогда не заканчивает свое выполнение, либо когда постоянно что-то делает
function throwError(message) {
    throw new Error(message);
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
