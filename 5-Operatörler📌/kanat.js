let number1 = 10;
let number2 = 20;
let number3 = 30;
let result;

// 1 - Aritmetik Oparetörler
//? +,-,/,*,%,++,--
result = number1 + number3; //toplama
result = number1 - number3; //çıkarma
result = number1 / number3; //bölme
result = number1 * number3; //çarpma
result = number3 % number1; //bölümden kalanı gösterir 10 ile 10 u bölersen 0 ama 10 ile 9 u bölersen 1 kalır yani kalan gösterici
/* result = number1++; //+1 oluyor ++ artılar sağ taraftaysa
result = ++number1; */ // aynı şeyin laciveri sadece sayıyı resulta gitmeden +1 liyor


// 2 - Atama Operatöerleri
//=,+=,-=,/=,*=,%=
result = number1;
result += number2; /* result + number2; aynı işe yarıyor += kendisiyle topluo*/
result -= number2; /* result - number2; */
result /= number2; /* result / number2; */
result *= number2; /* result * number2; */
result %= number2; /* result % number2; */

// 3 - Karşılaştırma Oparetörleri
// ==, !=, ===, >, <, >=, <=
result = number1 == number2; //içindeki değerler aynıysa true değilse false
result = number1 != number2; //eşit değilse true eşit ise false
result = 10 === "10"; /* tip kontrolü 3 eşittir varsa ikisindede aynı şey yoksa false birebir aynıysa true */
result = number1 < number2;
result = number1 > number2;
result = number1 >= number2;
result = number1 <= number2;
/*  console.log(result)*/

// 3 - Mantıksal Oparetörleri
//&&: ve, ||: veya, !:tersi

//&& ve 2 şartı sağlıyorsa true, biri false biri true olursa false oluyor
//console.log(number1 !== number2 && number1 > number2);


// || veya;true için  bir şartı sağlaması yeterli ikisinde biri true ise true olur ikiside false ise false olur
/* console.log(number1 > number3 || number1 === number1); */


// ! tersi yani false olanı true ve true olanı false yapıyor

console.log(!(number1 > number3) && number2 >= number1);