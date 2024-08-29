let body = document.querySelector('body');
let button = document.querySelector('button');
body.style.display = 'grid';
body.style.placeItems = 'center';
body.style.marginTop = '320px';

modmeId.style.width = '300px';
modmeId.style.height = '30px';
modmeId.style.margin = '10px';
modmeId.style.padding = '10px';
modmeId.style.background = 'lightgrey';
modmeId.style.border = 'none';
modmeId.style.borderRadius = '10px';

password.style.width = '300px';
password.style.height = '30px';
password.style.margin = '10px';
password.style.padding = '10px';
password.style.background = 'lightgrey';
password.style.border = 'none';
password.style.borderRadius = '10px';

button.style.fontSize = '20px';
button.style.width = '320px';
button.style.height = '50px';
button.style.margin = '10px';
button.style.padding = '10px';
button.style.background = 'red';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '10px';

function login() {
    const modmeId = document.getElementById('modmeId').value;
    const password = document.getElementById('password').value;
    

    const correctModmeId = '123456';
    const correctPassword = '1221';
    
    if (modmeId === correctModmeId && password === correctPassword) {
        alert( `Mars Spacega kirdingiz!`);
    } else {
        alert('Login yoki parol xato kiritildi!'); 
    }

    console.log(modmeId, password);
}