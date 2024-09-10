//*Don't Repeat Yourself

//! Basit Toplama Fonksiyonu
/* function sayiToplami(sayi1, sayi2) {
    let toplam = sayi1 + sayi2;
    console.log(toplam);
}
sayiToplami(10, 20)
sayiToplami(20, 30) */


/* //! Basit Toplama Fonksiyonu
let toplam = 0;

function sayiToplami(...sayilar) {
    for (let sayi of sayilar) {
        toplam += sayi;
    }
}
 */
/* sayiToplami(10, 20, 30, 40, 50, 60, 3, 5, 2, 7, 4)
console.log(toplam); */

//! Yaş Hesaplama
function yasHesapla(dogumYili) { //yaş hesaplaya doğum yılı yazılmasını ister alltakiler örnek
    return new Date().getFullYear() - dogumYili //şuanki yılı bulur
        // console.log(yil - dogumYili); //terminale çıkarır ve şuanki yıldan aşağıda belirtilen yılı çıkarır çıkan yıl bir kişinin yaşıdı
}


const hesapla = yasHesapla(1990);

console.log(hesapla);

/* yasHesapla(1997);
yasHesapla(2005);
yasHesapla(2008); */