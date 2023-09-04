// variabel untuk mengambil element
const form = document.querySelector("form");

const resultText = document.getElementById("result");

const inputProductName = document.getElementById("productName");
const errorProductName = document.getElementById("errorProductName");

const inputProductPrice = document.getElementById("productPrice");
const errorProductPrice = document.getElementById("errorProductPrice");

// mencegah formnya refresh dan validasi ProductName dan ProductPrice
form.addEventListener("submit", function (event) {
  event.preventDefault();

  checkProductName(inputProductName.value);
  checkProductPrice(inputProductPrice.value);

  if (errorProductName.textContent === "" && errorProductPrice.textContent === "") {
    resultText.textContent = "berhasil diinput!";
  } else {
    resultText.textContent = "tolong masukkan nama dan harga produk!";
  }
});

// validasi panjang ProductName
inputProductName.addEventListener("input", function (event) {
  const inputProductValue = event.target.value;
  checkProductName(inputProductValue);
});
function checkProductName(inputProductValue) {
  const regex = /^[^@#{}\/]*$/;
  if (inputProductValue.length === 0) {
    errorProductName.innerHTML = "<p>nama produk masih kosong!</p>";
    errorProductName.style.color = "red";
  } else if (inputProductValue.length > 25) {
    errorProductName.innerHTML = "<p>nama produk tidak boleh lebih dari 25 karakter!</p>";
  } else {
    errorProductName.innerHTML = "";
  }
  if (regex.test(inputProductValue) === false) {
    errorProductName.innerHTML = errorProductName.innerHTML + "<p>nama produk tidak boleh mengandung @ # / atau {}</p>";
  }
}

// validasi ProductPrice
inputProductPrice.addEventListener("input", function (event) {
  const inputPriceValue = event.target.value;
  checkProductPrice(inputPriceValue);
});
function checkProductPrice(inputPriceValue) {
  if (inputPriceValue.length < 1) {
    errorProductPrice.textContent = "tolong masukkan nilai harga yang valid!";
    errorProductPrice.style.color = "red";
  } else {
    errorProductPrice.textContent = "";
  }
}
