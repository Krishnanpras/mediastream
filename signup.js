function Signup() {
    //Phone Validation
    let phone = document.getElementById("Phone").value;
    let phone_flag = false;
    if (phone >= 6000000000 && phone <= 9999999999) {
      phone_flag = true;
    }
    //Email _validation
    let Email = document.getElementById("email").value;
    let email_flag = false;
    let flag1 = true;

    let flag2 = false;
    for (let i = 0; i < Email.length; i++) {
      if (Email[i] >= "A" && Email[i] <= "Z") {
        flag1 = false;
      }
      if (Email[i] == "@") {
        flag2 = true;
      }
    }
    if (flag1 == true && flag2 == true) {
      email_flag = true;
    }
    //Password validation
    let password = document.getElementById("pass").value;
    let password_flag = false;
    let size = 0,
      lower = 0,
      upper = 0,
      special = 0,
      num = 0;
    for (let i = 0; i < password.length; i++) {
      size++;
      if (password[i] >= "a" && password[i] <= "z") {
        lower++;
      } else if (password[i] >= "A" && password[i] <= "Z") {
        upper++;
      } else if (password[i] >= "0" && password[i] <= "9") {
        num++;
      } else {
        special++;
      }
    }
    if (
      size >= 8 &&
      size <= 16 &&
      num >= 1 &&
      lower >= 1 &&
      upper >= 1 &&
      special >= 1
    ) {
      password_flag = true;
    }
    //confirm password
    let confirmPass = document.getElementById("ConfirmPassword").value;
    let con_flag = false;
    if (password == confirmPass) {
      con_flag = true;
    }

    if (
      phone_flag == true &&
      email_flag == true &&
      password_flag == true &&
      con_flag == true
    ) {
      window.location.href = "http://127.0.0.1:5501/HomePage.html";
  
    } else {
      document.getElementById("error").innerHTML = "Invaild Details ! ";
    }
  }