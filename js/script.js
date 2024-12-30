document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");

    const button = document.querySelector(".contact button");
    if (!button) {
        console.error("Button not found");
        return;
    }

    button.addEventListener("click", function () {
        console.log("Button clicked");

        const target = document.querySelector("#contact");
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            console.error("#contact section not found");
        }
    });
});
