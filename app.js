const wrapper = document.querySelector('.wrapper');
const qrInput = document.querySelector('.form input')
const generateButton = document.querySelector('.form button')
const qrImg = document.querySelector('.qr-code img')

generateButton.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;

    generateButton.innerText = "Generating QR code..."

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
    
        generateButton.innerText = "Generate QR Code";
    })

    wrapper.classList.add('active')
})

qrInput.addEventListener("keyup", () => {
    if (qrInput.value) {
        wrapper.classList.remove("active")
    }
})
