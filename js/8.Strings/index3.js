const name = "Muhammed";
const surname = "Taha ";
const Age = 22;
const city = "İstanbul";
const job = " Frontend Developer";

/* const bio = "Benim adım " + name + "Soyadım " + surname +
    city + "'da yaşıyorum " + Age + " Yaşındayım" + job + "olarak çalışıyorum"; */

//backtick (string ifademin içine javascript yazmak istiyorsam backtick lazım yani alt gr+virgül ``)

const newBio =
    `Benim adım ${name} Soyadım ${surname} ${city} 'da yaşıyorum ${Age} Yaşındayım ve${job}  olarak çalışıyorum.`;
console.log(newBio)