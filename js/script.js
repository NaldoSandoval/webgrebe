document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll to the contact section
    document.querySelector(".contact button").addEventListener("click", function () {
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

