
document.addEventListener('turbolinks:load', () => {
  // Grab all the cards generated
  const viewCards = document.querySelectorAll('.entry-card')

  // Call event listener on each card
  viewCards.forEach(viewCard => viewCard.addEventListener('click', (e) => {
    console.log(e, 'Event logged. You clicked a view card :) ');
    console.log(e.currentTarget, 'Current target is here')
    console.log(e.currentTarget, 'DIV is here')


    const entryBody = e.currentTarget.textContent
      console.log(entryBody, "Text content here")

  // Identify location for text to be filled in
  document.getElementById('body-fill').innerText = entryBody

  // Switch text
  if (entryBody.style.display == "none") {
    entryBody.style.display = "block";
  }
  else {
    entryBody.style.display == "none";
  }

  }));


});






function insertText() {
  // Get the entry body content from the preview card
  const body = document.querySelector('.entry-card-body').textContent;
    console.log(body, ' <- this should be the text content, yo.');
  // Fill in the text

  document.getElementById('body-fill').innerHTML = body
  if (body.style.display == "none") {
    body.style.display = "block";
  }
  else {
    body.style.display == "none";
  }
 }






function revealText() {
  const body = document.getElementById('body-card').textContent = "<%= entry.body %>"
  if (body.style.display == "none") {
    body.style.display = "block";
  }
  else {
    body.style.display == "none";
  }
}




function insertTextOld() {
  const body = document.getElementById('body-card');
  console.log(body, 'Clicking the view card gives you this body card.');
  body.insertAdjacentHTML("beforeend", "<p><%= entry.body %></p>");
  // body.insertAdjacentElement("beforeend", bodyText);
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
