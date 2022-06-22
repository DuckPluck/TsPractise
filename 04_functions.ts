function add(a: number, b: number): number {    // вид обычной функции c числами
    return a + b
}

function toUpperCase(str: string): string {     // вид обычной функции со строкой
    return str.trim().toUpperCase()
}


//                  ***ПЕРЕГРУЗКА ПАРАМЕТРОВ И ФУНКЦИЙ***
//                  позволяет вызывать функцию с разными параметрами и значениями

interface MyPosition {                                    //создаем шаблон
    x: number | undefined
    y: number | undefined
}

                                                    //перегрузки

function position(): MyPosition                           // ничего не возвращает 
function position(a: number): MyPosition | string       // если 1 параметр
function position(a: number, b: number): MyPosition       // если 2 параметра


function position(a?: number, b?: number) {               // определяем саму функцию
    if (!a && !b) {                                       // если нет двух аргументов возвращаем undefined                     
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(10, 15))