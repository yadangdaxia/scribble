document.addEventListener('turbolinks:load', () => {
  // const viewCard = document.querySelector('.entry-card')

  const viewCard = document.querySelectorAll('.entry-card')

  console.log(viewCard)
  viewCard.addEventListener('click', (event) => {
    // call function
    console.log(event, 'logging the click event');
    display('view card')
  });
});


// function display(date) {
//   let entry = "This is the " + date + ".";
//   console.log(entry);
//   alert(entry);
// }


// document.addEventListener('turbolinks:load', () => {
//   const bigButton = document.getElementById('big-button')
//   console.log(bigButton)
//   bigButton.addEventListener('click', (event) => {
//     // call function
//     display('2/4/2022')
//     console.log(event);
//   });
// });


function display(date) {
  let entry = "This is the " + date + ".";
  console.log(entry);
  alert(entry);
}
