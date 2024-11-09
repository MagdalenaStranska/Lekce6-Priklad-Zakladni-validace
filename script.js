console.log(validator.isEmail("stranska.magdalena@gmail.com"))
console.log(validator.isCreditCard("4125010001000208", ""))


const email = prompt("Zadej e-mail")

const message = document.querySelector(".msg")

if(validator.isEmail(email)) {
    message.textContent = "E-mail v pořádku";
    message.classList.add('msg--valid');
    } else {
    message.textContent = "Neplatný e-mail";
    message.classList.add('msg--invalid');
    }