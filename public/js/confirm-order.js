localStorage.clear();


const orderNumber = document.getElementById('orderNumber');

let today = new Date();
let numberGenerator = "" + today.getFullYear() + today.getMonth() + today.getDate() + today.getTime();

orderNumber.textContent = numberGenerator;