//!ARROW FUNCTİON
/* const sayHello = function () {
    console.log("Hello, World!");
}
const sayHello2 = () => {
    console.log("hello");
}

const sayHello3 = () => console.log("Hello, World");


const sayHello4 = function (name) {
    console.log(`Hello, ${name}`);
}

const sayHello5 = (name) => console.log(`Hello, ${name}`);

sayHello5("Taha") */

//! Array method

//?map
/* const numbers = [1, 2, 3, 4, 5];//kendisini çarpmasını sağladık mesela 1.1=1 2.2=2 x 1 ise x.x = 1.1
const squares = numbers.map((x) => x*x);
console.log(squares);
 */

//? filter
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ciftSayilar = numbers.filter((x) => x % 2 === 2);//2===1 denirse tek sayılıları 2===0 denirse çift sayıları 2===2 yazarsa hiçbirşey gelir logdan
console.log(ciftSayilar) */

//?reduce
/* const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, x)=> acc + x, 0);// acc değeri sondaki sayı olan 0 ve 1 ile toplayınca cevap artık acc 1 ve 1 ile 2 yi toplayınca artık acc 3 ve 3 ile 3 ü toplayınca 6 ondan sonra 4 ve 5 ilede aynı işlem
console.log(sum); */

//? find 
/* const numbers = [0, 1, 2, 3, 4, 5];
//!const findNumber = numbers.find((x) => x > 2);//istenilen şeyi buluyor x>2 dersek 2 den sonra büyük ilk sayıyı array e atar
const findNumber = numbers.find((x) => x % 2 === 0);
console.log(findNumber);  */


//?some 
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//11 yazsaydı true verirdi çünkü x belirsiz yani 11 olabilirdi
const isBigNumberExits = numbers.some((x) => x > 10);//some boolean ile çalışıyor ve bu false dönüyor
console.log(isBigNumberExits); */

//? every
/* const numbers = [2, 4, 6, 8, 10];
const isAllEven = numbers.every(x => x % 2 === 0);//sayıların çift mi tekmi olduğunu anlıyor ve true dönüyor eğer tek sayı olsaydı içinde fqlse dönerdi
console.log(isAllEven); */


//! Spread Operator
/* const numbers1 = [1, 2, 3];
const numbers2 = [...numbers1, 4, 5, 6];
console.log(numbers2); */

/* const numbers = [ 1, 2, 3,];
const add =(x, y, z) => x + y + z;
console.log(add(...numbers));  */

/* const obj1 = {name: "John", age: 30};
const obj2 = {...obj1, job: "Developer"};
console.log(obj2); 
//*{ name: "John", age: 30, job: "Developer"} */

/* const obj1 = {name: "John", age: 30};
const obj2 = {name: "Mike", job: "Developer", ...obj1};
console.log(obj2);
 */

//!Destructuring

/* const obj1 = {name: "John", age: 30, job: "Developer"};
const obj2 = {name, age} = obj1;
const newObj = {name, age};
console.log(newObj); */


/* const obj = {name:"John", age:30};
const {name: firstName} = obj;
console.log(firstName); */

/* const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2 
console.log(rest); //[3, 4, 5] */


/* const obj = { name: "John", age: 30, job: "Developer"};
const { name, age } = obj;
const newObj = { name, age, location: "New York", ...obj };//yukarıdaki satırın nesnesini üç nokta başına gelicek şekilde yazarsak sonucu nesne olan arrayin tüm içini ekleyebiliriz o satıra yani 99 satırlık kodu 1 satıra getrebiliriz
console.log(newObj);
 */


//! Maps
/*  const map = new Map();    
 map.set("name", "john"); 
 map.set("age", 30);
 map.set("job", "Developer");

//console.log(map.get("name"));
 console.log(map.delete("job"));
 console.log(map);

map.forEach((value, key) => console.log(`${key}: ${value}`)) */


//!Sets
const set = new Set();
set.add(1);

set.add(2);
set.add(3);
set.add(3);//duplicate value will not be added
console.log(set.has(2));//has ın içinde iki varmı diyor bakıyoruz yok nedenmi çünkü kod yukarıdan aşağıya okur  aşağı yazsa true gelirdi ama şuan false
set.delete(2);//iyi sildi yada dışarı çıkardı
console.log(set);
set.forEach(value => console.log(value));