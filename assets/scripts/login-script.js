/** @module Login-Script */
/**
* Membuat variabel LoginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/

const loginFormElement = document.querySelector('#loginForm');


/**
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';


/**
* Membuat variabel expectedPassword untuk menyimpan informasi passowrd sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';


/* Comment : membuat aksi klik pada button.*/
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    /**
    * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
    * @constant {string}
    */
    const email = inputEmailElement.value;


    /**
    * Membuat variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan.
    * @constant {string}
    */
    const password = inputPasswordElement.value;

  
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */

    /* Comment : memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan.*/
    if (email == expectedEmail && password == expectedPassword) {

      /* Comment : jika sesuai maka program akan berpindah pada halaman home.*/
      goToHome();
    } else {

      /* Comment : namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah.*/
      showPopUp();
    }
});
