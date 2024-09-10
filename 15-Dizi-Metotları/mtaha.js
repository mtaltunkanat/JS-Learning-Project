let products = ["iphone5", "samsung", "huawei"];
let result;


result = products.length;

//! array to string
//result = products.toString(); //* stringe çevirir type'nı
//result = products.join("/") //? ayracı değiştirmeye yarar boş bırakılırsa ayraç olmaz ama / koyulursa kelimeler arası / koyulur örnek 1/2/3 şeklinde



//! diziden eleman silme
//result = products.shift(); //! ilk elemanı siler geri döndürür
//result = products.pop() //TODO: son elemanı siler ve geri döndürür aslında parantezin içinden çıkarır parametreye atar mesela şuan resultun içine atıyor bu shift te de geçerli


//diziye eleman ekleme

//result = products.push("xiaomi"); //* dizi sonuna eleman ekler
// result = products.unshift("xiaomi"); //? dizi başına eleman ekler

//! dizi birleştirme
let urunler1 = ["asus", "apple"];
let urunler2 = ["dell", "casper"];
let urunler3 = ["acer", "exper"];

// result = urunler1.concat(urunler2, urunler3)//TODO: concat birleştiriyor arrayleri parantezler birleşior kısaca birden fazla array birleştirmeye yarar kısaca.
//result = urunler1.splice(0, 0, urunler2) //ekleme olarak  kullanıyor mesela şuan urunler 2 yi urunler 1 ekledi buraya ne yazarsam belirlediğim parametreye ekler
// result = urunler1.splice(0, 0, "elma");//* yukarıdakinin aynısı
result = urunler1.splice(0, 1); //? ürünleri silip resulta atar yada orda yazan parametre içine 

console.log(result);
console.log(urunler1);