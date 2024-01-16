
document.addEventListener("DOMContentLoaded", function () {
  const urlInput = document.getElementById("urlInput");
  const qrCodeBtn = document.getElementById("qrcodeBtn");
  const qrCodeContainer = document.getElementById("qrcode");
  let qrcodeInstance = null;

  
  qrCodeBtn.addEventListener("click", function () {
    const url = urlInput.value;
    
    if (url.trim() !== "") {
      //Зачищає минулий QR code
      if (qrcodeInstance !== null) {
        qrcodeInstance.clear();
      }
//видаляє вміст контейнера QR-коду
      qrCodeContainer.innerHTML = "";

      //Використання бібліотеки qrcode.js для генерації QR-коду
      qrcodeInstance = new QRCode(qrCodeContainer, {
        text: url,
        width: 128,
        height: 128,
      });

            qrcodeBtn.disabled = false;
    } else {

      qrCodeBtn.disabled = true;
      alert("Please enter a valid URL");
    }
  });

  //Oбробник події для вводу URL, щоб деактивувати кнопку при очищенні поля вводу
  urlInput.addEventListener("input", function () {
    qrCodeBtn.disabled = urlInput.value.trim() === "";
  });
});