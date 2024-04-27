document.addEventListener('DOMContentLoaded', function() {
    var map = document.getElementById('manhattan-map');
    var neighborhoodDetails = document.querySelectorAll('.neighborhood-detail');
    var lastKnownScrollPosition = 0;
    var ticking = false;

    function doSomething(scrollPos) {
        // Check the scroll position to determine the current section
        neighborhoodDetails.forEach(function(detail, index) {
            if (scrollPos > index * window.innerHeight && scrollPos < (index + 1) * window.innerHeight) {
                detail.classList.add('active');
                map.style.transform = 'scale(2)'; // Example scale, you'll need to calculate this based on the section
            } else {
                detail.classList.remove('active');
            }
        });
    }

    document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                doSomething(lastKnownScrollPosition);
                ticking = false;
            });

            ticking = true;
        }
    });
});
