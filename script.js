const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", ()=>{
    createPassword();
});

copyIconEl.addEventListener("click",()=>{
    copyPassword();
    alertEl.classList.add("active");
    setTimeout(()=>{
        alertEl.classList.remove("active");
    }, 2000);
});

function createPassword(){
    if (!inputEl) return;
    const chars = "01233456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}[]ABCDEFGHIJKLNOPQRSTUVWXYZ";
    const passwordLenght = 12;
    let password = "";
    for (let index = 0; index < passwordLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    inputEl.value = password;
}

function copyPassword(){
    if (!inputEl) return;
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    try {
        navigator.clipboard.writeText(inputEl.value);
        alertEl.innerText = "Copied!";
    } catch (error) {
        alertEl.innerText = "Error: " + error.message;
    }
}

alertEl.classList.add("hidden"); // add this line to hide the alert initially