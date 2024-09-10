//! Fonksiyonlar kendi scope alannlarını oluşturur.
//!var ile if block içerisinde oluşturmaz.
//! let ve const ile block içi scope oluşumunu sağlayabilir.
//! scope de genelde const kullanılmaz çünkü değişmicek diye tanımlar
let kullanici = "Global scope: Muhammed";
const isim = "Muhammed" // hata verir hata gitmesi için let yap yada alttaki ismi sil
    /* isim = "Taha" */

function isimYazdir() {
    var kullanici = "Function scope:Nane";
    console.log(kullanici);
}

if (true) {
    let kullanici = "if scope: Yasin"
    console.log(kullanici);

}


console.log(kullanici);
isimYazdir();