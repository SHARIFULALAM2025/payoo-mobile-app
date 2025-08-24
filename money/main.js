const addMony = document.getElementById('add-Mony');
const myPersonalPin = 1234;

addMony.addEventListener('click', function (e) {
    e.preventDefault();
    let bankAccount = document.getElementById('Bank_Account_Number').value;
    const myTaka = parseInt(document.getElementById('taka').innerText);
//reuseable function
    function addAmount_1(id) {
        const data = document.getElementById(id);
        const dataValue = data.value;
        const result = parseInt(dataValue);
        return result;
    }
//function call
    const addAmount = addAmount_1('Amount_add');
    const pinNumber = addAmount_1('pin_Number')
    const allBank = document.getElementById('bank').value;

    if (bankAccount.length < 11) {
        alert("invalid bank account number");
        return;
    }
    if (myPersonalPin != pinNumber) {
        alert('invalid pin number');
        return ;
    }

    const newTaka = addAmount + myTaka;
    document.getElementById('taka').innerText = newTaka;

    console.log(addAmount, bankAccount, allBank, pinNumber, addingTaka);
})

// form section

document.getElementById('AddMony').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('child_1').style.display = 'block';
    document.getElementById('child_2').style.display = 'none';

})
document.getElementById('cash_1').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('child_2').style.display = 'block';
    document.getElementById('child_1').style.display = 'none';



})
document.getElementById('Transfer_Money').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('child_3').style.display = 'block';
    document.getElementById('child_2').style.display = 'none';


})
document.getElementById('Get_Bonus').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('child_4').style.display = 'block';
    document.getElementById('child_3').style.display = 'none';

})
document.getElementById('Pay_Bill').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('child_5').style.display = 'block';
    document.getElementById('child_4').style.display = 'none';


})
document.getElementById('Transactions').addEventListener('click', function () {

    document.getElementById('child_6').style.display = 'block';
    document.getElementById('child_5').style.display = 'none';


})
