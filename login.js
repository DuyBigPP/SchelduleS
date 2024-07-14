async function login(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Starting login process...');
    const response = await fetch('http://172.16.8.231:3000/postLogin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: username,
            password: password,
        }),
    });
    console.log('Response status:', response.status);
    console.log('Response type:', response.headers.get('Content-Type'));
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    let idTypeForm = [];
    let nameForm = [];
    data.typeForm.forEach(item => {
        idTypeForm.push(item.idTypeForm);
        nameForm.push(item.name);
    });
    localStorage.setItem('jwt', data.access_token);
    localStorage.setItem('idTypeForm', idTypeForm);
    localStorage.setItem('nameForm', nameForm);
    if (data) {
        console.log('Login successful, redirecting...');
        window.location.href = 'schedule.html';
    } else {
        console.log('Login failed, incorrect credentials.');
        alert('Tài khoản hoặc mật khẩu không chính xác');
    }
}

document.getElementById('loginForm').addEventListener('submit', login);