function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const switcherButton = document.getElementById('switcher');

switcherButton.addEventListener('click', () => {
  myFunction();
})