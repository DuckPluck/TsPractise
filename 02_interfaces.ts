interface Rect {                // создаем шаблон интерфейса
    readonly id: string         // задаем параметры (readonly - блокировка изменений)
    color?: string              // "?"" - необязательный параметр
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
}
rect2.color = 'black'       // необязательные параметры можно задать вне блока
                            // пусть это и const, но изменение внутренних параметров не считается)


const rect3 = {} as Rect    // Можно заранее привести объект к типу "as"
const rect4 = <Rect>{}      // (старая запись)





//                              ***НАСЛЕДОВАНИЯ ИНТЕРФЕЙСА***

interface RectWithArea extends Rect {       // создаем новый шаблон интерфейса с наследованием (extends) от Rect
                                            // интерфейс будет с функцией, которая будет считать площадь интерфейса
getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}




//                              ***РЕАЛИЗАЦИЯ ИНТЕРФЕЙСА***
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {       // класс Clock реализуется от интерфейса IClock
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}




// интерфейс для объекта с большим кол-вом динамических ключей
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}

interface Styles {
//    border: string,           перечислять все свойства одного типа неэффективно
//    marginTop: string,
//    borderRadius: string
[key: string]: string        // вот это эффективно
}