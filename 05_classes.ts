//                                          ***КЛАССЫ***

class Typescript {
    version: string             // поля класса

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}


// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }


// можно записать этот класс короче, Ts схавает:
class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

//                                      ***МОДИФИКАТОРЫ***
// есть три модификатора - protect, public, private. По умолчанию public

class Animal {
    protected voice: string = ''            //данное поле доступно для класса Animal и для всех кто наследует
    public color: string = 'black'          //данное поле доступно для всех
    private go() {                          //данное поле доступно только для Animal, не наследуется
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice                  // protected
//      this.go - err                       // private
    } 
}

const cat = new Cat()
cat.setVoice('test')                        // public from Cat
cat.color                                   // public from Animal
// cat.voice - err                          // protected
// this.go   - err                          // private





//                                      ***АБСТРАКТНЫЕ КЛАССЫ И МЕТОДЫ***
// используются на этапе разработки, в финальный код не идут
// от них удобно наследоваться, но при этом они не во что не компилируются

abstract class Component {                   //абстрактный класс
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {      //наследовали от абстрактного класса
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'This is info';
    }
}