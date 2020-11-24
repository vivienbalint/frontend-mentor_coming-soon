const email = document.getElementById("email");
const form = document.getElementById("form");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  let value = email.value;
  validateEmail(value);
});

function validateEmail(email) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    form.classList.remove("error");
  } else {
    form.classList.add("error");
  }
}
