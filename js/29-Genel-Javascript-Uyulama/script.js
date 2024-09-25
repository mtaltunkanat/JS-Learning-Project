//! Asenkron Javascript

/* console.log("Hello 1");
console.log("Hello 2");

setTimeout(function() {
console.log("Hello 3");
}, 1000);
console.log("Hello 4"); */

//? --------------------
//? --------------------
//? --------------------

/* //! Callback Fonksiyonu

function sayHello(callback){
    setTimeout(function() {
        console.log("hello 1");
    }, 1000);
    callback();
}

function sayHello2(){
    console.log("hello 2");

}
sayHello(sayHello2); */

//? --------------------
//? --------------------
//? --------------------

//! callback hell

/*function userList() {
  console.log("Kullanıcı Listesi");
}

function productList() {
  console.log("ürün Listesi");
}

function priceList() {
  console.log("fiyat Listesi");
}

function dataList(waitTime, callback) {
  setTimeout(function () {
    callback();
  }, waitTime * 1000);
}

dataList(1, function () {
  userList();
  dataList(2, function () {
    productList();
    dataList(3, function () {
      priceList();
    });
  });
});*/

//? --------------------
//? --------------------
//? --------------------

//! Javascript Promise

function userList() {
  //*javascript async await bölümü ile bağlantılı
  console.log("Kullanıcı Listesi");
}

function productList() {
  console.log("ürün Listesi");
}

function priceList() {
  console.log("fiyat Listesi");
}
//? --------------------
//? --------------------
//? --------------------
/*function myPromise(waitTime,callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (callback) {
        resolve(callback());
      } else {
        reject();
      }
    }, waitTime * 1000);
  });
}

myPromise(1, userList)
  .then(() => myPromise(2, productList))
  .then(() => myPromise(1, priceList));
 */

//? --------------------
//? --------------------
//? --------------------

//! Javascript Sync/Await

/* function dataList(waitTime,callback) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (callback) {
          resolve(callback());
        } else {
          reject();
        }
      }, waitTime * 1000);
    });
  }
  
  async function executeDataList(){ //async await daha okunabilirmiş
    try {
        await dataList(1, userList)
        await dataList(2, productList)
        await dataList(3, priceList)
    } catch (error) {
        console.log(error);
    }finally{
        console.log("işlem tamamlandı");
    }
  }

  executeDataList(); */
//? --------------------
//? --------------------
//? --------------------
//! AJAX ile xhr nesnesini oluşturup asenkron veri alma
/* const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    myFunction(data);
  }
};
xhr.send();
function myFunction(userList) {
    const data = userList.map((user)=>user.name)//user.name yazdığımız için sadece isimlerini veriyor
    console.log(data); 
}*/

/* function getUserData(){
    const response = fetch ("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data)=>console.log(data));
}

getUserData(); */

//! async/await veri çekme

async function getUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userList = await response.json();
    getUserList(userList);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("işlem tamamlandı");
  }
}

function getUserList(userList) {
  const userListDOM = document.querySelector(".user-list");
  let userItem = "";
  userList.forEach((user) => {
    userItem += `
   <li class="user-card">
        <img
          src="https://i.pravatar.cc/150?img=${user.id}"
          alt="${user.name}"
          class="user-image"
        />
        <div class="user-info">
          <h3 class="user-name">${user.name}</h3>
          <p class="user-username">${user.username}</p>
          <p class="user-email">${user.email}</p>
          <p class="user-website">${user.website}</p>
          <p class="user-userId">UserID: ${user.id}</p>
        </div>
      </li>
   `
  });
  userListDOM.innerHTML = userItem;
}

getUserData();
