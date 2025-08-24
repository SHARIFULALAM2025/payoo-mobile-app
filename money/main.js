const addMony = document.getElementById('add-Mony');
const myPersonalPin = 1234;

addMony.addEventListener('click', function (e) {
    e.preventDefault();


    //reuseable function
    function addAmount_1(id) {
        const data = document.getElementById(id);
        const dataValue = data.value;
        const result = parseInt(dataValue);
        return result;
    }
    //add value reuseable function
    function addValue(val) {
        const data1 = document.getElementById(val);
        const dataValue1 = data1.value;
        return dataValue1;


    }
    //inner text reuseable function
    function AddInnerText(text) {
        const addText = document.getElementById(text);
        const addInner = addText.innerText;
        const intAddText = parseInt(addInner);
        return intAddText;
    }
    //set inner text
    function setInnerText(value) {
        const setBallance = document.getElementById('taka');
        setBallance.innerText = value;

    }


    //function call
    const addAmount = addAmount_1('Amount_add');
    const pinNumber = addAmount_1('pin_Number');
    const allBank = addValue('bank');
    const bankAccount = addValue('Bank_Account_Number');
    const myTaka = AddInnerText('taka');


    if (bankAccount.length < 11) {
        alert("invalid bank account number");
        return;
    }
    if (pinNumber !== myPersonalPin) {
        alert('invalid pin number');
        return;
    }
    const newTaka = addAmount + myTaka;
    setInnerText(newTaka);



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
