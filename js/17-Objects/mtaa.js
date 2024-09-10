 //let customers = ["emin", ["asus", "monster", "dell", [10, 20, 30]]];

 /*console.log(`ürün: ${customer1[1][0]} fiyatı; $${customer1[1][3][0]}`); */


 let customer1 = {
     "ad": "Taha", //key value şeklinde ilki key diğeri value
     "soyad": "Altunkanat",
     "sehir": "İstanbul",
     "yas": 25,
     "products": [
         "laptop", "car", "phone"

     ]
 };
 let customer2 = {
     "ad": "Muhammed", //key value şeklinde ilki key diğeri value
     "soyad": "Altun",
     "sehir": "Diyarbakır",
     "yas": 25,
     "products": {
         "phone": "iphone 15",
         "price": 69.999
     }
 };
 let customer3 = {
     "ad": "Tarık", //key value şeklinde ilki key diğeri value
     "soyad": "Altunkanat",
     "sehir": "Antalya",
     "yas": 25,
     "products": [
         "laptop", "car", "phone"

     ]
 };



 let musteriler = [
     customer1,
     customer2,
     customer3
 ]

 let urunler = [{
         id: 1,
         "urunAdi": "huawei",
         "fiyati": 10

     }, {
         id: 2,
         "urunAdi": "apple",
         "fiyati": 20

     },
     {
         id: 3,
         "urunAdi": "vestel",
         "fiyati": 30

     },
 ]

 console.log(urunler);