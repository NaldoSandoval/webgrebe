document.addEventListener("DOMContentLoaded", function () {

    // Get references to the video and overlay elements
    const videoOverlay = document.getElementById('videoOverlay');
    const reelVideo = document.getElementById('reelVideo');

    // Play video and hide overlay on click
    videoOverlay.addEventListener('click', function () {
        reelVideo.play();
        videoOverlay.style.display = 'none';
    });

    // Show overlay when video ends
    reelVideo.addEventListener('ended', function () {
        videoOverlay.style.display = 'flex'; // Use 'flex' if it contains elements aligned like flexbox
    });

    // Smooth scroll to the contact section
    document.querySelector(".contact-btn button").addEventListener("click", function () {
        const target = document.querySelector("#contact");
        const yOffset = 6600; // Adjust this value to account for fixed headers or desired offset
        const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: yPosition,
            behavior: "smooth"
        });
    });

    // Smooth scroll to the top when clicking the logo
    document.querySelector("#logoLink").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    document.querySelector("#servicesLink").addEventListener("click", function () {
        const target = document.querySelector("#services");
        const yOffset = -2210; // Adjust this value for the desired offset
        const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: yPosition,
            behavior: "smooth"
        });
    });

    document.querySelector("#projectsLink").addEventListener("click", function () {
        const target = document.querySelector("#projects");
        const yOffset = -1160; // Adjust this value for the desired offset
        const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: yPosition,
            behavior: "smooth"
        });
    });

    document.querySelector("#aboutLink").addEventListener("click", function () {
        const target = document.querySelector("#about");
        const yOffset = 5140; // Adjust this value for the desired offset
        const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: yPosition,
            behavior: "smooth"
        });
    });
});

