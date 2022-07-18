const mainContainer = document.getElementById("container");
const thanksSection = document.getElementById("thanks");
const ouputValue = document.getElementById("selected");
const rateBtn = document.querySelectorAll(".rateBtn");
const rb = document.querySelectorAll(".rb");
const submitBtn = document.getElementById("submitButton");
var output;

rateBtn.forEach((btn) => {
  btn.addEventListener("click", (b) => {
    btn.style.backgroundColor = "#959eac";
    btn.style.color = "white";
    output = b.currentTarget.id;
  });
});

submitBtn.addEventListener("click", () => {
  if (output === undefined) {
    alert(
      "Please rate us so we can maybe eat something other than frozen pizzas, ulcer is not good at all, i will tell you that"
    );
  } else {
    ouputValue.textContent = `${output}`;
    mainContainer.style.display = "none";
    thanksSection.style.display = "flex";
  }
});
