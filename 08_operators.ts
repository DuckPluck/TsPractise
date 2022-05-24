// вспомогательные операторы, помогающие взаимодействовать с типами

interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // теперь на выходе будут 'name' | 'age'

const myName: PersonKeys = 'name'  // спокойно заносим в myName 'name'

let key: PersonKeys = 'name'
key = 'age'

//key = 'job' - err                 // такого значения в типе нет


type User = {          // предположим нужно воспользоваться данным типом, но убрать некоторые поля
    _id: number
    name: string
    email: string
    createdAt: Date
}

// 2 способа
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>     // теперь в этом типе не будет данных полей ('_id' 'createdAt')

type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>                 // теперь в этом типе будут только данные поля ('name' 'email')


let u1: UserKeysNoMeta1 = 'name'                                 //создадим переменные, которые будут принимать эти значения
// u1 = '_id' - err