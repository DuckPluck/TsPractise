// guards - вспомогательные конструкции, которые помогают работать с типами





function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)       // такой метод доступен только числам (.toFixed)
    }
    return x.trim()               // только для строчек (Ts понимает что тут только строчки, такчто без else)
}






class MyResponse {              // создадим 2 класса
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function handle(res: MyResponse | MyError)  {       // функция одновременно обрабатывает 2 класса
    if (res instanceof MyResponse) {                // проверить пренадлежность объекта к классу
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}




// частая ошибка

type AlertType = 'success' | 'danger' | 'warning'   // создадим тип, которые будет принимать значения

function setAlertType(type: AlertType) {            // создадим функцию этого типа
    //....
}

setAlertType('success')
setAlertType('warning')

//setAlertType('default') - err                   //в типе нет такого значения