document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript logic can go here
    // For instance, if you want to do something when a destination is clicked:
    const destinations = document.querySelectorAll('.destination');
    destinations.forEach(destination => {
        destination.addEventListener('click', function() {
            // Example action when a destination is clicked
            console.log(Clickedon$,{this:querySelector('h3').innerText});
        });
    });
});