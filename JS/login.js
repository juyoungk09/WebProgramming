
function login() {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    
    if (id === 'admin' && password === '1234') {
        alert('Login successful');
    } else {
        alert('Login failed');
    }
    
}