document.getElementById('newCard').addEventListener('click', function() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(response => response.json())
    .then(data => {
        var cardImage = document.getElementById('card');
        cardImage.src = data.cards[0].image;
        cardImage.style.display = 'block';
    })
    .catch(error => console.error('Erro:', error));
});