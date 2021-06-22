const usersInput = document.getElementById('users');
const daysInput = document.getElementById('days');
const resultElement = document.getElementById('itogo');

usersInput.addEventListener('input', updateUsersValue);
daysInput.addEventListener('input', updateDaysValue);

let days = 0, users = 0;

function updateUsersValue(e) {
    if (+e.target.value<0)
        usersInput.value = 0;
    else
        users = usersInput.value || 0;

    recalcResult()
}

function updateDaysValue(e) {
    if (+e.target.value<0)
        daysInput.value = 0;
    else
        days = daysInput.value || 0;

    recalcResult()
}

function recalcResult() {
    let result = users*days*100;
    
    resultElement.textContent = result > 9900 ? `${result.toLocaleString('ru-RU')} руб` : '9 900 руб';
}

function openOrder() {
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('company').value = '';
    document.getElementById('phone').value = '';

    $('#orderModal').modal('show')
}

function cancel() {
    document.getElementById('invalidEmail').style.display = 'none';
    document.getElementById('invalidName').style.display = 'none';
    document.getElementById('invalidCompany').style.display = 'none';

    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('company').value = '';
    document.getElementById('phone').value = '';

    $('#orderModal').modal('hide')
}

function sendForm() {
    document.getElementById('invalidEmail').style.display = 'none';
    document.getElementById('invalidName').style.display = 'none';
    document.getElementById('invalidCompany').style.display = 'none';
    
    // сохраняем данные
    let email = document.getElementById('email').value,
        username = document.getElementById('username').value,
        company = document.getElementById('company').value,
        phone = document.getElementById('phone').value;

    let emailRegex = re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
        document.getElementById('invalidEmail').style.display = 'block';
        return;
    }

    if (company.length<1) {
        document.getElementById('invalidCompany').style.display = 'block';
        return;
    }

    if (username.length<1) {
        document.getElementById('invalidName').style.display = 'block';
        return;
    }

    // обратная связь

        /*$.post( 
            'https://getlocus.io/api/v1.0/regEmail', 
            { 
                email: `Про хакатоны: ${username} (${company}), ${email}, ${phone}` 
            },
            onAjaxSuccess
        )*/

        function onAjaxSuccess(data) {
            console.log(data)
        }

    //активируем блок с инфой, что мы все получили и скоро свяжемся
    document.getElementById('preOrder').style.display = 'none';
    document.getElementById('orderDone').style.display = 'block';
}