function checkStrength(){
    const password = document.getElementById('password').value;
    const strength = document.getElementById('strength');
    if (password.length < 4) {
        strength.style.width = '25%';
        strength.style.backgroundColor = 'red';
    } else if (password.length < 8) {
        strength.style.width = '50%';
        strength.style.backgroundColor = 'orange';
    } else if (password.length < 12) {
        strength.style.width = '75%';
        strength.style.backgroundColor = 'yellow';
    } else {
        strength.style.width = '100%';
        strength.style.backgroundColor = 'green';
    }
}