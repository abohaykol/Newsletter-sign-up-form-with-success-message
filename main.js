const submit = document.querySelector(".submit");
const userinput = document.querySelector(".myinput");
const error = document.querySelector(".error");
const thankyou = document.querySelector(".thank-you");
const getback = document.querySelector(".getback");
const subscribing = document.querySelector(".subscribing");
const message = document.querySelector(".message");

const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

submit.addEventListener("click", () => {
  if (userinput.value === "" || !regex.test(userinput.value)) {
    error.style.display = "block";
    userinput.classList.add("error-input");
    userinput.style.color = "hsl(4, 100%, 67%)";
  } else {
    subscribing.style.display = "none";
    thankyou.style.display = "block";
    message.innerHTML = userinput.value;
  }
});

getback.addEventListener("click", () => {
  subscribing.style.display = "block";
  thankyou.style.display = "none";
  userinput.value = "";
});
