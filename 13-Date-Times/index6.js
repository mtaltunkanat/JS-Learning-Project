let tarih = new Date();

let result;
//Get Methods
result = tarih.getDate(); //gün bilgisi
result = tarih.getDay(); // haftanın hangi günü olduğunu söyler 0=pazar gününden başlar 1=pazartesi diye gider
result = tarih.getFullYear(); //yıl bilgisi veriri
result = tarih.getHours(); //saati söyler küsüratsız yani 16:44 ise 16 der
result = tarih.getTime(); //milisaniyeyi gösterir

//Tarihi Güncelleme Methodları - Set Methods
/* tarih.setUTCFullYear(2025); */
tarih.setMonth(7);
tarih.setDate(15);
result = tarih;

//! Doğum - Tarihi

let dogumTarihi = new Date(1992, 8, 14)
result = tarih.getFullYear() - dogumTarihi.getFullYear();

//burada belirlediğimiz yıldan şimki zamanı çıkararak kişinin yaşını öğreniyoruz

console.log(result);


//console.log(dogumTarihi);