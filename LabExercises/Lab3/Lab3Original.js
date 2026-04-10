//Original codes
function addCard() { 
    const template = document.getElementById("card-template") // clone the template
    .content.cloneNode(true); // deep copy (w/o "true", child elements not included)
    template.querySelector('.card-title').innerText = "My Card Title"; // populate the template
    template.querySelector('.card-text').innerText = "lorem ipsum ble bla";
    document.querySelector('#card-list') // include the populated template into the page
    .appendChild(template);
}
addCard();