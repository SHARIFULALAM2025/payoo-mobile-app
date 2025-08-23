const addMony = document.getElementById('add-Mony');
const myPersonalPin = 4321;

addMony.addEventListener('click', function (e) {
    e.preventDefault();
    let bankAccount = document.getElementById('Bank_Account_Number').value;
    const addAmount = parseInt(document.getElementById('Amount_add').value);
    const pinNumber = parseInt(document.getElementById('pin_Number').value);
    const allBank = document.getElementById('bank').value;

    const myTaka = parseInt(document.getElementById('taka').innerText);
    if (bankAccount.length == 11 && pinNumber === myPersonalPin) {
        const newTaka = addAmount + myTaka;
        document.getElementById('taka').innerText = newTaka;

    } else {
        alert('please validate pin or bankAccount number');
    }
    console.log(addAmount, bankAccount, allBank, pinNumber, addingTaka);
})

// form section

// const fastChild = document.getElementById('child_1');
// const secondChild = document.getElementById('child_2');
// const thirdChild = document.getElementById('child_3');
// const fourChild = document.getElementById('child_4');
// const fiveChild = document.getElementById('child_5');
// const sixChild = document.getElementById('child_6');

document.getElementById('AddMony').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('child_1').style.display = 'block';
    document.getElementById('child_6').style.display = 'none';
    document.getElementById('child_5').style.display = 'none';
    document.getElementById('child_4').style.display = 'none';
    document.getElementById('child_3').style.display = 'none';
    document.getElementById('child_2').style.display = 'none';

})
document.getElementById('cash_1').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('child_2').style.display = 'block';
    document.getElementById('child_6').style.display = 'none';
    document.getElementById('child_5').style.display = 'none';
    document.getElementById('child_4').style.display = 'none';
    document.getElementById('child_3').style.display = 'none';
    document.getElementById('child_1').style.display = 'none';


})
document.getElementById('Transfer_Money').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('child_3').style.display = 'block';
    document.getElementById('child_1').style.display = 'none';
    document.getElementById('child_2').style.display = 'none';
    document.getElementById('child_6').style.display = 'none';
    document.getElementById('child_5').style.display = 'none';
    document.getElementById('child_4').style.display = 'none';

})
document.getElementById('Get_Bonus').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('child_4').style.display = 'block';
    document.getElementById('child_3').style.display = 'none';
    document.getElementById('child_1').style.display = 'none';
    document.getElementById('child_2').style.display = 'none';
    document.getElementById('child_6').style.display = 'none';
    document.getElementById('child_5').style.display = 'none';

})
document.getElementById('Pay_Bill').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('child_5').style.display = 'block';
    document.getElementById('child_4').style.display = 'none';
    document.getElementById('child_3').style.display = 'none';
    document.getElementById('child_1').style.display = 'none';
    document.getElementById('child_2').style.display = 'none';
    document.getElementById('child_6').style.display = 'none';

})
document.getElementById('Transactions').addEventListener('click', function () {

    document.getElementById('child_6').style.display = 'block';
    document.getElementById('child_5').style.display = 'none';
    document.getElementById('child_4').style.display = 'none';
    document.getElementById('child_3').style.display = 'none';
    document.getElementById('child_1').style.display = 'none';
    document.getElementById('child_2').style.display = 'none';

})
