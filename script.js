function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); 
let isFormVisible = true; 
let canPressH = true; 

document.addEventListener('keydown', function(event) {
    if (event.key === 'h' || event.key === 'H') {
        if (canPressH) {
            if (isFormVisible) {
                
                const loginForm = document.querySelector('.login-container');
                loginForm.style.animation = 'fadeOut 1s ease forwards'; 
                document.querySelector('.press-to-enter').style.opacity = '0'; 
            } else {
                
                const loginForm = document.querySelector('.login-container');
                loginForm.style.animation = 'fadeIn 1s ease forwards'; 
                document.querySelector('.press-to-enter').style.opacity = '1'; 
            }
           
            isFormVisible = !isFormVisible;

            canPressH = false;
            setTimeout(() => {
                canPressH = true; 
            }, 1000);
        }
    }
});





