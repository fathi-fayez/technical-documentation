// Get the cobyButton and codes
let buttons = document.getElementsByTagName("i");
let codes = document.getElementsByTagName("code");

// callback the function
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    copyText(codes[i].innerHTML);
  };
}
// coby function
function copyText(textCode) {
  /* Copy text into clipboard */
  navigator.clipboard.writeText(textCode);
}
