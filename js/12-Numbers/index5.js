const username = "emirbasbayan";
const yas = 25;

let result;

result = 25;
result = Number("25"); //direkt number parantezi
result = parseInt("25.7"); //stringi number'a çeviriyor küsüratı almıyor (kullanmıyo)
result = parseFloat("25.7"); //stringi number'a çeviriyor küsürüyle braber
result = parseInt("27");
result = isNaN("a25"); // bir syaı mı değil mi anlamamızı sağlar false derse sayıdır true derse sayı değildir




let myNumber = 10.3456757;

result = myNumber.toPrecision(5) //sayıların baştan ilk rakamlarını alır mesela 10500 ve bu kişi 2 değeri verdi 10 alır ve geriye 500 kalır
result = myNumber.toFixed(2); //noktadan sonra kaç tane sayı alabileceğimizi ayarlayabileceğimiz yer


result = Math.round(1.4); //yuvarlamaya yarıyor 1.4 ü 1 e 1.6 yı 2 ye
result = Math.round(1.6);
result = Math.ceil(1.2); //bir sonraki sayıya tamamlıyor 1.1 bile 2 oluyor
result = Math.floor(1.2); // 1.9 olsa bile 1 oluyor hep bir altına
result = Math.pow(5, 3) //karesini alıyor yani (5, 3) yani 5 üzeri 3 oluyor cevabı 125 
result = Math.sqrt(100); // kare kökünü alır yazılan sayının
result = Math.abs(-25) // ne yazılırsa artı şekilde çıkar pozitif parantezi gibi
result = Math.max(10, 1, 5, 7, 9, 20); // arasından en yüksek değerli sayıyı seçer
result = Math.min(10, 1, 5, 7, 9, 20) // arasından en küçük değerli sayıyı seçer

console.log(result);