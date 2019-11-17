$(document).ready(function() {
  $(".menu-toggler").on("click", function() {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function() {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  $('nav a[href*="#"]').on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100
      },
      2000
    );
  });

  $("#up").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      2000
    );
  });

  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true
  });
});

// $('[type="submit"]').on("click", function() {
//   // this adds 'required' class to all the required inputs under the same <form> as the submit button
//   $(this)
//     .closest("form")
//     .find("[required]")
//     .addClass("required");
// });

// document.addEventListener(
//   "invalid",
//   (function() {
//     return function(e) {
//       e.preventDefault();
//       document.getElementById("name").focus();
//     };
//   })(),
//   true
// );

function validateForm() {
  let name = document.getElementById("name");
  let subject = document.getElementById("subject");
  let valid = true;
  let regName = /^[a-zA-Z]/;
  removeMessage();
  if (name.value.length === 0 || !regName.test(name.value)) {
    name.className = "wrong-input";
    name.nextElementSibling.innerHTML =
      "Name should not be empty or include any number";
    valid = false;
  }

  if (subject.value.length < 10 || subject.value.length > 400) {
    subject.className = "wrong-input";
    subject.nextElementSibling.innerHTML =
      "The message should be at least 10 letters";
    valid = false;
  }

  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)
  ) {
    return valid;
  } else {
    email.className = "wrong-input";
    email.nextElementSibling.innerHTML = "Please Enter a Valid Email.";
    valid = false;
  }
  return valid;
}

function removeMessage() {
  let errorInput = document.querySelectorAll(".wrong-input");
  [].forEach.call(errorInput, function(el) {
    el.classList.remove("wrong-input");
  });

  let errorP = document.querySelectorAll(".error");
  [].forEach.call(errorP, function(el) {
    el.innerHTML = "";
  });
}
