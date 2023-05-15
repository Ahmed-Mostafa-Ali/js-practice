const form = document.getElementById("form");
const userName = document.getElementById("userName");
const emailUser = document.getElementById("emailUser");
const userPassword = document.getElementById("userPassword");
const confirmPassword = document.getElementById("confirmPassword");
// function show error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }
function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmailValid(input,message) {
   const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
     showError(input,'Email should be valid') 
    }
}
//function check if password match
function checkPasswordMatch(input1,input2) {
  if (input1.value !== input2.value) {
    showError(input2,'not matched')
  } else {
    showSuccess(input2)
  }
}
function checkRequired(inputarr) {
    inputarr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    })
}
// function check the length
function checkedLength(input,min,max) {
    if (input.value.length < min) {
        showError(
          input,
          `${getFieldName(input)} must be at least ${min} characters`
        );
      } else if (input.value.length > max) {
        showError(
          input,
          `${getFieldName(input)} must be less than ${max} characters`
        );
      } else {
        showSuccess(input);
      }
}
//upper case for message
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }  
//form add event listner to 
form.addEventListener("submit",stopRefresh)
function stopRefresh (event) {
    event.preventDefault();
    checkRequired([userName, emailUser,userPassword , confirmPassword]);
    checkedLength(userName, 3, 15);
    checkedLength(userPassword, 6, 25);
    checkedLength(confirmPassword, 6, 25);
    checkEmailValid(emailUser)
    checkPasswordMatch(userPassword,confirmPassword)
}
/* way we use if statement and didn't clean coz of repeat */
// form.addEventListener("submit",stopRefresh)
// function stopRefresh(e) {
//      e.preventDefault(e);

//      if (userName.value === "")  {
//         showError(userName,"you should write your name")
//      }else{
//         showSuccess(userName)
//      }
//      if (emailUser.value === "")  {
//         showError(emailUser,"you should write your Email")
//      }else if ( !checkEmailValid(emailUser.value)) {
//         showError(emailUser,"email should be valid")
//      }
//      else{
//         showSuccess(emailUser)
//      }
//      if (userPassword.value === "")  {
//         showError(userPassword,"Write a password")
//      }else{
//         showSuccess(userPassword)
//      }
//      if (confirmPassword.value === "")  {
//         showError(confirmPassword,"confirm your password")
//      }else{
//         showSuccess(confirmPassword)
//      }
// }