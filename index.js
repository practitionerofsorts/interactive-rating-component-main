const myBtn = document.getElementById("rb1");
const myBtn2 = document.getElementById("rb2");
const myBtn3 = document.getElementById("rb3");
const myBtn4 = document.getElementById("rb4");
const myBtn5 = document.getElementById("rb5");
const submitBtn = document.getElementById("submitButton");
const mainContainer = document.getElementById("container");
const thanksSection = document.getElementById("thanks");
const ouputValue = document.getElementById("selected");

var rateValue;
myBtn.addEventListener("click", () => {
  myBtn.style.backgroundColor = "#959eac";
  myBtn.style.color = "white";
  rateValue = this.length + 1;
});
myBtn2.addEventListener("click", () => {
  myBtn2.style.backgroundColor = "#959eac";
  myBtn2.style.color = "white";
  rateValue = this.length + 2;
});
myBtn3.addEventListener("click", () => {
  myBtn3.style.backgroundColor = "#959eac";
  myBtn3.style.color = "white";
  rateValue = this.length + 3;
});
myBtn4.addEventListener("click", () => {
  myBtn4.style.backgroundColor = "#959eac";
  myBtn4.style.color = "white";
  rateValue = this.length + 4;
});
myBtn5.addEventListener("click", () => {
  myBtn5.style.backgroundColor = "#959eac";
  myBtn5.style.color = "white";
  rateValue = this.length + 5;
});

submitBtn.addEventListener("click", () => {
  if (rateValue == null) {
    alert(
      "Please rate us so we can maybe eat something other than frozen pizzas, ulcer is not good at all, i will tell you that"
    );
  } else {
    ouputValue.textContent = `${rateValue}`;
    mainContainer.style.display = "none";
    thanksSection.style.display = "block";
  }
});
