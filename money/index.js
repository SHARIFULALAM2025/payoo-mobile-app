// console.log('add money');
document.getElementById('log-in').addEventListener('click', function (e) {
    e.preventDefault();
    let phoneNumber =1829197321;
    let phonePassword =1234;

    const numberValue = document.getElementById('mobile_number1').value;
    const numberValueConvert = parseInt(numberValue);
    const passwordValue = document.getElementById('mobile-password').value;
    const passwordValueConvert = parseInt(passwordValue);
    console.log(numberValueConvert,passwordValueConvert);

    if ((phoneNumber === numberValueConvert) && (phonePassword === passwordValueConvert)) {
        window.location.href = '../app.html';
    } else {
        alert("invalid number or password")


    }


})

