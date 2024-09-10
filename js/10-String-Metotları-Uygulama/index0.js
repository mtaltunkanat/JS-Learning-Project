//https://youtu.be/-VpwkjC2ft4?si=kZexlfdDC1QWFtcB video link onda bilgisayar genetiğini kullandı ad olarak o da projeyi etkiliyor




let url = "https://github.com/mtaltunkanat.com";
let youtube = "MT altunkanat";
let result;

//1-karakter sayısı bul
result = url.length;
result = youtube.length;
result = youtube.replace(" ", "").length; //replace boşlukları birleştiri


//2-youtube değişkeni kaç karakterden oluşuyor
result = youtube.split(" ").length; //ereye yani paranteze alıp tırnakiyor
result = url.split(".").length;




//3-kanal adı başlangıç kontrol
result = youtube.startsWith("MT altunkanat");
if (result) {
    console.log("yapılacaklar.");
} else {
    console.log("false döndü");
}

// 4- kelime kontrolü
if (youtube.indexOf("kanat") > -1) {
    console.log("çalıştı");
} else {
    console.log("çalışmadı");
}



// 5-url ve değişken birleştir 
youtube = youtube.toLowerCase().replace(" ", "-");
/* url = url.replace("com", "com/"); */

let newUrl = url.replace(url, url + youtube)
newUrl = `${url}/${youtube}`
console.log(newUrl);