var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
};
rect2.color = 'black'; // необязательные параметры можно задать вне блока
// пусть это и const, но изменение внутренних параметров не считается)
var rect3 = {}; // Можно заранее привести объект к типу "as"
var rect4 = {}; // (старая запись)
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
// интерфейс для объекта с большим кол-вом динамических ключей
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
