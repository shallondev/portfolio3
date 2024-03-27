// When achor tag is clicked scrollinto view with smooth behavior
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

    // Function to be called when a card or heading comes into view
    function elementInView(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a class to the element when it comes into view
                entry.target.classList.add('visible');
            } 
        });
    }

    // Options for the intersection observer
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(elementInView, options);

    // Select all project cards and headings to observe
    const elementsToObserve = document.querySelectorAll('.project-card, h1, .border-b, a, button, img, #hero-detail, #form-info');

    // Start observing each element
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });

    // Get the modal
    const modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    const span = document.querySelector(".close");

    // When the user submits the form, show the modal
    function onSubmit() {
    modal.classList.remove("hidden");
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.classList.add("hidden");
    }

});
