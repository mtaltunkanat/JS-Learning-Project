/* 
Student İnformation

  1-Hakan Uçar
  Dogum Tarihi:2003
  Bilgisayar Notları:100,90,10

  2-Nehir Bakır
  Dogum Tarihi:2001
  Bilgisayar Notları:60,30,50

  Geçer Not:50 

  Program Şartları:
  1-Öğrencilerin yaşlarını hesaplayınız.
  2-Öğrencilerin ders ortalamalarını hesaplayınız.
  3-Öğrencilerin dersten kalıp kalmadığını hesaplayınız
  */

let currentYear = new Date().getFullYear();
let StudyAverage = 50;
let std1 = "Hakan Uçar";
let std1YearOfBird = 2003;
let std1Age = currentYear - std1YearOfBird;
let std1LectureNotes1 = 100;
let std1LectureNotes2 = 90;
let std1LectureNotes3 = 10;
let std1StudyAverage = parseInt((std1LectureNotes1 + std1LectureNotes2 + std1LectureNotes3)) / 3;
let std1StudySitutaion = std1StudyAverage > StudyAverage;



let std2 = " Nehir Bakır";
let std2YearOfBird = 2001;
let std2Age = currentYear - std2YearOfBird;
let std2LectureNotes1 = 60;
let std2LectureNotes2 = 30;
let std2LectureNotes3 = 50;
let std2StudyAverage = ((std2LectureNotes1 + std2LectureNotes2 + std2LectureNotes3)) / 3;
let std2StudySitutaion = std2StudyAverage > StudyAverage;




console.log("1. Öğrenci Adı:", std1)
console.log("1. Öğrenci'nin Yaşı:", std1Age)
console.log("1. Öğrenci Ders Notu Ortalaması:", parseInt(std1StudyAverage))
console.log("1. Öğrenci Geçme Durumu:", std1StudySitutaion)

console.log("    ")

console.log("2. Öğrenci Adı:", std2)
console.log("2. Öğrenci'nin Yaşı:", std2Age)
console.log("2. Öğrenci Ders Notu Ortalaması:", parseInt(std2StudyAverage))
console.log("2. Öğrenci Geçme Durumu:", std2StudySitutaion)