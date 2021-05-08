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
        // Morning
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greetingRef.textContent = 'Good Morning, ';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('./img/afternoon.jpeg')";
        greetingRef.textContent = 'Good Afternoon, ';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('./img/evening.jpeg')";
        greetingRef.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    }
}

// Get/Set Name
function getName() {
    if (localStorage.getItem('name') === null) {
        nameRef.textContent = '[Enter Name]';
    } else {
        nameRef.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            nameRef.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get/Set Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focusRef.textContent = '[Enter Focus]';
    } else {
        focusRef.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focusRef.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
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
