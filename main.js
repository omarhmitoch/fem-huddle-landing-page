const form = document.querySelector(".f-top-section form");
const input = form.querySelector("input");
const spanContainer = document.querySelector(".input-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let val = input.value;
  if (val.trim().length > 0) {
    if (validateEmail(val)) {
      spanContainer.classList.add("valid");
      spanContainer.classList.remove("error");
      setTimeout(() => {
        spanContainer.classList.remove("valid");
        input.value = "";
      }, 5000);
    } else {
      spanContainer.classList.add("error");
      spanContainer.classList.remove("valid");
    }
  }
});
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
