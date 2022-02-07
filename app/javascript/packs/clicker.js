
document.addEventListener('turbolinks:load', () => {
  // How to grab all cards generated?
  const viewCard = document.querySelectorAll('.entry-card')
  // console.log(viewCard, "This is the view card")
  const bodyText = document.querySelector
  // Calling event listener on each card
  viewCard.forEach(viewCard => viewCard.addEventListener('click', (e) => {
    // console.log(e, 'Event logged. You clicked a view card :) ');
    // e.preventDefault();
    // showHideEntry()
    // revealText();
    insertText()
  }));
});

function insertText() {
  const body = document.getElementById('body-content').textContent;
    console.log(body, ' <- this should be the text content, yo.');
  // body.insertAdjacentElement("beforeend", bodyText);
  document.getElementById('body-fill').innerHTML = body
}







function insertTextOld() {
  const body = document.getElementById('body-card');
  console.log(body, 'Clicking the view card gives you this body card.');
  body.insertAdjacentHTML("beforeend", "<p><%= entry.body %></p>");
  // body.insertAdjacentElement("beforeend", bodyText);

}

// const table = document.querySelector("tbody");
// let newRow = table.insertAdjacentHTML("beforeend", "<tr><td>15</td><td>New Team </td><td>0</td></tr>"); // Was expecting to see row inserted (?)


function revealText() {
  const body = document.getElementById('body-card').textContent="<%= entry.body %>"
  if (body.style.display == "none") {
    body.style.display = "block";
  }
  else {
    body.style.display == "none";
  }
}


function showHideEntry() {
  // let card = document.querySelectorAll("view-card");
  const bodyCard = document.getElementById('body-card')
  // console.log(bodyCard, "This is the body card")

  if (bodyCard.style.display === "none") {
    bodyCard.style.display = "block";
  } else {
    bodyCard.style.display = "none";
  }
}
