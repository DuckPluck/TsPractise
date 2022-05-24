// enum позволяет структурировать однотипные эл-ты

enum Membership {
    Simple,          //значения данного enum'a
    Standart,
    Premium
}

const membership = Membership.Standart  // по умолчанию возвращают свой порядковый номер
console.log(membership)
const membershipReverse = Membership[2] // если обратиться к номеру, возвращают название
console.log(membershipReverse)





enum SocialMedia {        // если присвоить названия, возвращать будет их
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)