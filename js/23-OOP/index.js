/* let araba = {
    renk:"mavi",
    hiz:0,
};

console.log(araba.renk);
console.log(araba.hiz);
 */

//! method
/* 
let araba = {
renk:"mavi",
hiz: 0,//23.ders 11.dakika bg
hizlandir: function(deger){
 this.hiz += deger;
}
};

araba.hizlandir(30)
console.log(araba.hiz); */

//!constructor ES5

/* function Araba(renk){
    this.renk = renk;
    this.hiz= 0;
}

Araba.prototype.hizlandir = function(){
    this.hiz +=deger;
};

let araba = new Araba("red");//const idi

console.log(araba.renk);
araba.hizlandir(100);
console.log(araba.hiz); */

//!constructor ES6

/* class Araba{
    constructor(renk){
        this.renk = renk;
    }
}


let araba = new Araba("siyah")
console.log(araba.renk); */

//!class

/* class Araba {
    constructor(renk){
        this.renk =renk;
        this.hiz = 0;
    }
 hizlanidir(deger){
    this.hiz += deger;
 }
}


let araba = new Araba("siyah")
console.log(araba.renk);
araba.hizlanidir(200);
console.log(araba.hiz); */

//! inhritance
/* class Araba {
    constructor(renk){
        this.renk =renk;
        this.hiz = 0;
    }
}
class MotorluAraba extends Araba {
    constructor(renk, motor){
        super(renk);
        this.motor= motor;
}
}

let motorAraba = new MotorluAraba("siyah", "V8");
let  araba = new Araba ("red");

console.log(motorAraba.renk);
console.log(motorAraba.motor);
console.log(araba.renk); */

//! encapsulation

/* class Araba{
    #renk;
    constructor(renk, hiz){
        this.#renk = renk;
        this.hiz = hiz;
    }
    getRenk(){
        return this.#renk;
    }

    setRenk(renk){
        return this.#renk=renk;
    }
}

const araba = new Araba("red",10)
console.log(araba.getRenk());
araba.setRenk("blue")
console.log(araba.getRenk()); */

//! polymorphism
/* 
class Shape{
    draw(){
        console.log("şekil çiziliyor.");
    }
}

class Circle extends Shape {
draw(radius){
    console.log(`${radius} raiduslu bir daire çiziliyor.`);
     }
}

let shape = new Shape();
let circle = new Circle();
console.log(circle.draw("20")); */

//! abstraction
//sınıfların, nesnelerin oluşturduğu sınıfın sadece gerekli olan özelliklerini ve metotlarını göstermesidir

class Database {
    constructor(data) {
        this._data = data;
    }
    getData() {
        return this._data;
    }
    setData() {
        this._data = value;
    }

}

class DataController extends Database {
    constructor(data) {
        super(data);
    }
    getData() {
        return "Data: " + super.getData();
    }
}


const database = new Database("Taha")
const dataController = new DataController("Nur")

console.log(database._data);
//dataController.setData("Emir") bu çalışmadı çözemedim
console.log(dataController._data);