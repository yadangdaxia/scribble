
document.addEventListener('turbolinks:load', () => {
  const clickButton = document.getElementById("greet-user-button");
  console.log(clickButton, "hi yumeng")
  clickButton.addEventListener('click', (event) => {
    hello('Beautiful Wife')
  });
});

function hello(name) {
  let greeting = "Hello, " + name + "!";
  console.log(greeting);
  alert(greeting);
}
