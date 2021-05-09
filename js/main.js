const timeRef = document.getElementById('time'),
      greetingRef = document.getElementById('greeting'),
      nameRef = document.getElementById('name'),
      focusRef = document.getElementById('focus');

const showAmPm = true;

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    timeRef.innerHTML = `${getZero(hour)}<span>:</span>${getZero(min)}<span>:</span>${getZero(
        sec
    )} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
    
    if (hour < 12) {
        document.body.style.backgroundImage = "url('./img/morning.jpeg')";
        greetingRef.textContent = 'Good Morning, ';
        document.body.style.color = 'white';
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greetingRef.textContent = 'Good Afternoon, ';
        
    } else {
        document.body.style.backgroundImage = "url('./img/evening.jpeg')";
        greetingRef.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        nameRef.textContent = '[Enter Name]';
    } else {
        nameRef.textContent = localStorage.getItem('name');
    }
}

function setName(event) {
    if (event.type === 'keypress') {
    if (event.which == 13 || event.keyCode == 13) {
            localStorage.setItem('name', event.target.innerText);
            nameRef.blur();
        }
    } else {
        localStorage.setItem('name', event.target.innerText);
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focusRef.textContent = '[Enter Focus]';
    } else {
        focusRef.textContent = localStorage.getItem('focus');
    }
}

function setFocus(event) {
    if (event.type === 'keypress') {
    if (event.which == 13 || event.keyCode == 13) {
            localStorage.setItem('focus', event.target.innerText);
            focusRef.blur();
        }
    } else {
        localStorage.setItem('focus', event.target.innerText);
    }
}

nameRef.addEventListener('keypress', setName);
nameRef.addEventListener('blur', setName);
focusRef.addEventListener('keypress', setFocus);
focusRef.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();
