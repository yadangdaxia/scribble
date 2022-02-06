
document.addEventListener('turbolinks:load', () => {
  // How to grab all cards generated?
  const viewCard = document.querySelectorAll('.entry-card')
  console.log(viewCard, "This is the view card")



  // Calling event listener on each card
  viewCard.forEach(viewCard => viewCard.addEventListener('click', (e) => {
    console.log(e, 'Event logged. You clicked a view card :) ');

  showHideEntry()
  }));
});

function showHideEntry() {
  // let card = document.querySelectorAll("view-card");
  const bodyCard = document.getElementById('body-card')
  console.log(bodyCard, "This is the body card")

  if (bodyCard.style.display === "none") {
    bodyCard.style.display = "block";
  } else {
    bodyCard.style.display = "none";
  }
}
