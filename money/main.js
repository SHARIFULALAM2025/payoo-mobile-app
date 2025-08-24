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
}

document.getElementById('AddMony').addEventListener('click', function (e) {
    e.preventDefault();
    reuseable_function('fast_button');
    const formBtns = document.getElementsByClassName('form-btn');
    for (const element of formBtns) {
        element.classList.remove('border-blue-500', 'bg-[#0874f20d]');
    };

    document.getElementById('AddMony').classList.remove('bg-[#ffffff]');
    document.getElementById('AddMony').classList.add('border-blue-500', 'bg-[#0874f20d]');
})
document.getElementById('cash_1').addEventListener('click', function (e) {
    e.preventDefault();
    reuseable_function('second_button');
    const formBtns = document.getElementsByClassName('form-btn');
    for (const element of formBtns) {
        element.classList.remove('border-blue-500', 'bg-[#0874f20d]');
    };

    document.getElementById('cash_1').classList.remove('bg-[#ffffff]');
    document.getElementById('cash_1').classList.add('border-blue-500', 'bg-[#0874f20d]');
})
document.getElementById('Transfer_Money').addEventListener('click', function (e) {
    e.preventDefault();
    reuseable_function('third_button');
    const formBtns = document.getElementsByClassName('form-btn');
    for (const element of formBtns) {
        element.classList.remove('border-blue-500', 'bg-[#0874f20d]');
    };

    document.getElementById('Transfer_Money').classList.remove('bg-[#ffffff]');
    document.getElementById('Transfer_Money').classList.add('border-blue-500', 'bg-[#0874f20d]');

})
document.getElementById('Get_Bonus').addEventListener('click', function (e) {
    e.preventDefault();
    reuseable_function('four_button');
    const formBtns = document.getElementsByClassName('form-btn');
    for (const element of formBtns) {
        element.classList.remove('border-blue-500', 'bg-[#0874f20d]');
    };

    document.getElementById('Get_Bonus').classList.remove('bg-[#ffffff]');
    document.getElementById('Get_Bonus').classList.add('border-blue-500', 'bg-[#0874f20d]');
})
document.getElementById('Pay_Bill').addEventListener('click', function (e) {
    e.preventDefault();
    reuseable_function('five_button');
    const formBtns = document.getElementsByClassName('form-btn');
    for (const element of formBtns) {
        element.classList.remove('border-blue-500', 'bg-[#0874f20d]');
    };

    document.getElementById('Pay_Bill').classList.remove('bg-[#ffffff]');
    document.getElementById('Pay_Bill').classList.add('border-blue-500', 'bg-[#0874f20d]');
})
document.getElementById('Transactions').addEventListener('click', function () {
    reuseable_function('six_button');
    const formBtns = document.getElementsByClassName('form-btn');
    for (const element of formBtns) {
        element.classList.remove('border-blue-500', 'bg-[#0874f20d]');
    };

    document.getElementById('Transactions').classList.remove('bg-[#ffffff]');
    document.getElementById('Transactions').classList.add('border-blue-500', 'bg-[#0874f20d]');
})
