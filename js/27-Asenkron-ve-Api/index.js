//! Asenkron Programlama
/* console.log("1.işlem");
setTimeout(()=> {
    console.log("2.işlem");
}, 2000)//*bu functionun logu 2 saniye geç gelir yani 1-2-3 işem diye gelmek yerine 1-3-2 şeklinde gelir 200 yazması 2 saniye geç gelmesini  sağlar
console.log("3.işlem"); */
 //zamanlama ile çalıştırmayı öğrendik 
//! callback Fonksiyonu

/* function sayHello(name, callback){
    console.log(`Hello ${name}`);
        callback();//yukarıda olursa görüşürüz yazısı üste geliyor
}
//* tıklandığında hangisi önce çalışsın bunu öğrendik
function goodbye () {
    console.log("Görüşmek Üzere");
}

sayHello("Taha", goodbye);
 */

//! Ajax ve Http İstekleri
//bir veri nasıl alınır nasıl çekilir nasıl json formatına çevrilir bunu öğrendik
/* let myList;
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.onload = function () {
   
    const response = xhr.responseText;
    if (xhr.status === 200){
        myList = JSON.parse(response);
    }else{
     console.log("Hata Oluştu:" + xhr.status);   
    }
      
    //*console.log(JSON.parse(response));//özellikleri gösteriyor

//* console.log(xhr.responseText);//eğer içine responseText yazarsak çektiğimiz apinin içini görebiliriz yazmazsak log da sadece api nin özelliklerini görürüz aslında responseText bunun özelliği bu özelliğin i.çine bakıyoruz yanına yazarak

};

xhr.send()
 */

//! Promise
 //asenkron puanlamayı öğrendik then-catch  paramerelerini öğrendik 
 //resolve - reject parametrelerini nasıl kullanılır onu öğrendik
/* //çifterli 100 e kadar sayma uygulaması 
function getRandomNumber(){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        const number = Math.floor(Math.random() * 100)
        if (number % 2 === 0) {
       resolve(number);
       } else {
        reject(`Hata: ${number} sayısı tek bir sayıdır.`); //hatalıysa rejectten catch a düşüyor
}
      }, 1000);    
    })
}
getRandomNumber()
.then(number => console.log("Çözümlendi:" + number))
.catch((error)=> console.log(error));
 */

//new Promise(resolve, reject) // bir işlem başlatılıp birilirse resolve döndürülüyormuş bunada istediğimizi yazıyormuşuz hatalı ise reject new yazarsak içinden döndürebiliriz

 //! Fetch
 // yukarıdakinin hemen hemen aynısı
/* 
  fetch("https://jsonplaceholder.typicode.com/users")
 .then(response=> response.json())
 .then((data) => console.log(data))
 .catch(error=> console.log (error));  */

//? yukarıdakinin daha farklı versiyonu
 /* const response = fetch ("https://jsonplaceholder.typicode.com/users");
 console.log(
 response
.then((response) => response.json())
.then ((data) => console.log(data))
 .catch((error)=> console.log(error))
); */

//! Async & Await
// thenler ile işlem yapılıyor promisi kullanıyor 
// async yani asenkron veri alınacağını bildirir functiondan önce yazılırsa
/* async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // await veriyi bekletir veriyi aldıktan sonra alt satıra geçirir
    const data = await response.json(); //await key word
    console.log(data);
} */
    //todo yukarıdakinin aynısı
   /*  const getData = async () =>{ //? eski tiplerde async functiondan önce yeni tiplerde sonra kullanılıt
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // await veriyi bekletir veriyi aldıktan sonra alt satıra geçirir
    const data = await response.json(); //await key word yukarı gelen satır bilgisi ile kendi bilgisini alt satıra aktarır
    console.log(data);//gelen verileri yazdırır
    }; */
    const getData = async () => { // şeklinde kullanıyoruz
        try{//hata yoksa bunu
            const response = await fetch("https://jsonplaceholder.typicode.com/users"); // await veriyi bekletir veriyi aldıktan sonra alt satıra geçirir
    const data = await response.json(); //await key word yukarı gelen satır bilgisi ile kendi bilgisini alt satıra aktarır
    console.log(data);//gelen verileri yazdırır
        }catch(error){//hata varsa bunu okur
       console.log(error);
        }
    }
getData();