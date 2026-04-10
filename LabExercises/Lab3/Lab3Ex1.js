//Exercise1
function addCard(title, text) { // dynamic version, accepting "title" and "text" as parameters
    const template = document.getElementById("card-template")
    .content.cloneNode(true); 
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerHTML = text; 
    document.querySelector('#card-list')
    .appendChild(template);
}
    addCard("Card 1", "This is the first card");
    addCard("Card 2", "This is the second card");
    addCard("Card 3", "This is the third card");