let youtube = "MTA Yazılım";

let result;

result = youtube.toUpperCase(); //tüm harfler büyük
result = youtube.length; //kelime uzunluğunu number olarak sunar sayıyla yazar
result = youtube.toLowerCase(); //tüm harfler küçük
result = youtube.trim(); //isimdeki kelimedeki boşluğu kapatıyor
result = youtube.slice(0, 6); //belirledğin harf sayısı kadar kelime harflerini kullanır örnek yazılım ama adam 0,5 yazdı yazıl yazar terminalde
result = youtube.split(" "); //paranteze alıp kelimeleri tırnaklar ile ayırıyor

console.log(result);