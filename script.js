document.addEventListener('DOMContentLoaded', function () {
    function updateClock() {
        const now = new Date();
        const clockElement = document.getElementById('clock');

        if (!clockElement) {
            console.error("HATA: 'clock' ID'sine sahip bir öğe bulunamadı!");
            return;
        }

        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        clockElement.innerText = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
});

let isFormVisible = true;
let canPressH = true;

document.addEventListener('keydown', function (event) {
    if (event.key === 'h' || event.key === 'H') {
        if (canPressH) {
            const loginForm = document.querySelector('.login-container');
            loginForm.style.animation = isFormVisible ? 'fadeOut 1s ease forwards' : 'fadeIn 1s ease forwards';
            document.querySelector('.press-to-enter').style.opacity = isFormVisible ? '0' : '1';
            isFormVisible = !isFormVisible;
            canPressH = false;
            setTimeout(() => { canPressH = true; }, 1000);
        }
    }
});
// ai helped me a lot after that line
document.querySelector('.login-container form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.querySelector('.input-box input[type="text"]').value;
    const password = document.querySelector('.input-box input[type="password"]').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'table.html';
    } else {
        alert('Invalid username or password');
    }
});

ddocument.addEventListener('DOMContentLoaded', function () {
    
    const form = document.getElementById('classForm');
    const classList = document.getElementById('classList');

    if (!form || !classList) {
        console.error("HATA: Form veya classList bulunamadı!");
        return;
    }

    console.log("Form ve classList bulundu!");

    function loadClasses() {
        console.log("Veriler yükleniyor...");
        const classes = JSON.parse(localStorage.getItem('classes')) || [];
        classList.innerHTML = ''; 

        classes.forEach(cls => {
            console.log("Veri ekleniyor:", cls);
            addRowToTable(cls.name, cls.people, cls.description);
        });
    }

    function addRowToTable(className, numberOfPeople, description) {
        console.log(`Tabloya satır ekleniyor: ${className}, ${numberOfPeople}, ${description}`);
        const row = document.createElement('tr');
        row.innerHTML = `<td tabindex="0">${className}</td><td tabindex="0">${numberOfPeople}</td><td tabindex="0">${description}</td>`;
        classList.appendChild(row);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("Form submit edildi!");

        const className = document.getElementById('className').value.trim();
        const numberOfPeople = document.getElementById('numberOfPeople').value.trim();
        const description = document.getElementById('description').value.trim();

        console.log(`Girilen değerler: ${className}, ${numberOfPeople}, ${description}`);

        if (className && numberOfPeople && description) {
            const newClass = { name: className, people: numberOfPeople, description: description };
            
            let classes = JSON.parse(localStorage.getItem('classes')) || [];
            classes.push(newClass);
            localStorage.setItem('classes', JSON.stringify(classes));

            addRowToTable(className, numberOfPeople, description);

            form.reset();
            console.log("Class eklendi ve form sıfırlandı.");
        } else {
            alert("Lütfen tüm alanları doldurun!");
        }
    });

    loadClasses();
});

    

    document.querySelectorAll('input, textarea').forEach(element => {
        element.addEventListener('focus', function () {
            element.style.borderColor = "#ffcc00";
        });

        element.addEventListener('blur', function () {
            element.style.borderColor = "#fff";
        });
    });

    document.querySelectorAll('table').forEach(table => {
        table.addEventListener('click', function (event) {
            if (event.target.tagName === 'TD') {
                alert(`You clicked on: ${event.target.textContent}`);
            }
        });
    });

    document.querySelectorAll('table tr').forEach(row => {
        row.addEventListener('mouseenter', function () {
            row.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        });
        row.addEventListener('mouseleave', function () {
            row.style.backgroundColor = "transparent";
        });
    });

