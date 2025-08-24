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

// form section reuseable function

function reuseable_function(bun) {
    const addManyButtons = document.getElementsByClassName('child');
    for (const recentButton of addManyButtons) {
        recentButton.style.display = 'none';
    };
    document.getElementById(bun).style.display = 'block';
};
// color change
function colorChange(Color) {
    const formBtns = document.getElementsByClassName('form-btn');
    for (const element of formBtns) {
        element.classList.remove('border-blue-500', 'bg-[#0874f20d]');
    };

    document.getElementById(Color).classList.remove('bg-[#ffffff]');
    document.getElementById(Color).classList.add('border-blue-500', 'bg-[#0874f20d]');

}

document.getElementById('AddMony').addEventListener('click', function (e) {
    e.preventDefault();
    reuseable_function('fast_button');
    colorChange('AddMony')

})
document.getElementById('cash_1').addEventListener('click', function (e) {
    e.preventDefault();
    reuseable_function('second_button');
    colorChange('cash_1');
})
document.getElementById('Transfer_Money').addEventListener('click', function (e) {
    e.preventDefault();
    reuseable_function('third_button');
    colorChange('Transfer_Money')
})
document.getElementById('Get_Bonus').addEventListener('click', function (e) {
    e.preventDefault();
    reuseable_function('four_button');
    colorChange('Get_Bonus')
})
document.getElementById('Pay_Bill').addEventListener('click', function (e) {
    e.preventDefault();
    reuseable_function('five_button');
    colorChange('Pay_Bill');
})
document.getElementById('Transactions').addEventListener('click', function () {
    reuseable_function('six_button');
    colorChange('Transactions')
})
