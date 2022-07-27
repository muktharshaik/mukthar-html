var createAccount = document.querySelector("#createAccount");
var passwordContainer = document.querySelector("#passwordContainer");

createAccount.addEventListener("click", (e) => {
  if (e.target.checked) {
    passwordContainer.classList.add("show_container");
  } else {
    passwordContainer.classList.remove("show_container");
  }
});

// SHIPPING ADDRESS

var billingAddress = document.querySelector("#billingAddress");
var shippingAddressContainer = document.querySelector(
  "#shippingAddressContainer"
);

billingAddress.addEventListener("click", (e) => {
  if (e.target.checked) {
    shippingAddressContainer.classList.add("hide_container");
  } else {
    shippingAddressContainer.classList.remove("hide_container");
  }
});
