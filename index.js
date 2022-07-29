// SHIPPING ADDRESS

$(document).ready(() => {
  var createAccount = $("#createAccount");
  var passwordContainer = $("#passwordContainer");

  createAccount.click((e) => {
    if (e.target.checked) {
      passwordContainer.addClass("show_container");
    } else {
      passwordContainer.removeClass("show_container");
    }
  });

  var billingAddress = $("#billingAddress");
  var shippingAddressContainer = $("#shippingAddressContainer");

  billingAddress.click((e) => {
    if (e.target.checked) {
      shippingAddressContainer.addClass("hide_container");
    } else {
      shippingAddressContainer.removeClass("hide_container");
    }
  });

  function slideItem(label) {
    $(`#slide_${label}`).slideToggle("slow");
    $(`#arrow_${label}`).toggleClass("rotate_svg");
  }

  $(document).click((e) => {
    console.log(e.target.dataset.label);
    slideItem(e.target.dataset.label);
  });
});
