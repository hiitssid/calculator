let display = document.getElementById("display");
// let buttons = document.getElementById("button");
let button = Array.from(document.getElementsByTagName("button"));

button.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "⌫":
        display.innerText = display.innerText.slice(0, -1);
        break;

      case "=":
        // ----------------code here--------------
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
