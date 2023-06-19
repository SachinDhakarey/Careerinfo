document.querySelector('.form-inline').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    console.log("Called");

    var searchValue = document.querySelector('.form-control').value.toLowerCase();
    var cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        var title = card.querySelector('.card-title').textContent.toLowerCase();
        var text = card.querySelector('.card-text').textContent.toLowerCase();

        // Check if either the title or text contains the search value
        if (title.includes(searchValue) || text.includes(searchValue)) {
            card.style.display = 'block'; // Show the card
            console.log("Found");
        } else {
            card.style.display = 'none';
            console.log("NOt Found"); // Hide the card
        }
    });
});
