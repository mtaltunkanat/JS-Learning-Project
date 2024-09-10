let meyve = ["Elma", "Armut", "Muz", "Portakal", "Karpuz"];

/* console.log(meyve[0]);
console.log(meyve[1]);
console.log(meyve[2]);
console.log(meyve[3]);
console.log(meyve[4]); */
/* 
for (let i = 0; i < meyve.length; i++) {
    console.log(meyve[i]);

} */



//! 0'dan 100'e kadar sayıları yazdır

/* for (let i = 0; i <= 100; i = i + 2) {
    console.log(i);
} */

//! sayı toplama
//* sayıları toluyor her seferinde mesela 10+20 =30 sonra 30+5=35 
//sonra 35 + 50 = 85 + 100 = 185 + 200 = 385 yani parantez içlerini döngüleyeerek her sefer topluyor ve cevabı veriyor
/*let sayilar = [10, 20, 5, 50, 100, 200];
 console.log(sayilar[0] + sayilar[1] + sayilar[2] + sayilar[3] + sayilar[4] + sayilar[5]);


let toplam = 0;
for (let i = 0; i < sayilar.length; i++) {
    console.log(toplam = toplam + sayilar[i]);
} */

/* //? Kısayol İndex
let sayilar = [10, 20, 5, 50, 100, 200];
let toplam = 0;
for (let i in sayilar) {
    console.log(toplam += sayilar[i]);
} */


/* //direkt sayılar alma
let sayilar = [10, 20, 5, 50, 100, 200];
let toplam = 0;
for (let sayi of sayilar) {
    console.log(toplam += sayi);
} */

// object ile döngü
/* const user = {
    //klasik kullanıcı bilgileri paneli yapımı
    "ad": "Taha",
    "soyad": "Altunkanat",
    "email": "muhammedaltnknt@gmail.com",
    "yas": 25
} */

//aynı özelliklerin sadece cevabını aldık şuanlık
/* for (let key in user) {
    console.log(user[key]);

} */

//  çoklu kullanıcı
let users = [{
            "id": "1",
            "ad": "Taha",
            "soyad": "Altunkanat",
            "email": "muhammedaltnknt@gmail.com",
            "yas": "25"
        },
        {
            "id": "2",
            "ad": "Muhammed",
            "soyad": "Altunkanat",
            "email": "muhammedaltnknt@gmail.com",
            "yas": "25"
        },
        {
            "id": "3",
            "ad": "Berkay",
            "soyad": "Altunkanat",
            "email": "muhammedaltnknt@gmail.com",
            "yas": "25"
        },
    ]
    /* console.log(users[0].ad);
    console.log(users[1].ad);
    console.log(users[2].ad); */

for (let i = 0; i < users.length; i++) {
    console.log(users[i].ad);
}


//