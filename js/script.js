document.addEventListener("DOMContentLoaded", function () {
    // Function to integrate LibreTranslate API
    const translateText = async (text, targetLanguage) => {
        const response = await fetch('https://libretranslate.com/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                q: text,
                source: 'en',
                target: targetLanguage,
                format: 'text',
            }),
        });
        const data = await response.json();
        return data.translatedText;
    };

    // const updateContentLanguage = async (targetLanguage) => {
    //     const elementsToTranslate = document.querySelectorAll("[data-translate]");
    //     for (const element of elementsToTranslate) {
    //         const originalText = element.dataset.translate; // Get the data-translate attribute
    //         if (originalText) {
    //             const translatedText = targetLanguage === 'en'
    //                 ? originalText // Use the original text for English
    //                 : await translateText(originalText, targetLanguage);
    //             element.innerText = translatedText; // Replace text content with the translation
    //         } else {
    //             console.error('Missing data-translate attribute on:', element);
    //         }
    //     }
    // };

    // Language switcher: English
    document.getElementById('en').addEventListener('click', async () => {
        const enButton = document.getElementById('en');
        const espButton = document.getElementById('esp');

        // Update button states
        enButton.classList.add('active');
        enButton.classList.remove('inactive');
        espButton.classList.remove('active');
        espButton.classList.add('inactive');

        // Update content language
        // await updateContentLanguage('en');
    });

    // Language switcher: Spanish
    document.getElementById('esp').addEventListener('click', async () => {
        const espButton = document.getElementById('esp');
        const enButton = document.getElementById('en');

        // Update button states
        espButton.classList.add('active');
        espButton.classList.remove('inactive');
        enButton.classList.remove('active');
        enButton.classList.add('inactive');

        // Update content language
        // await updateContentLanguage('es');
    });

    // Existing functionality: Video overlay
    const videoOverlay = document.getElementById('videoOverlay');
    const reelVideo = document.getElementById('reelVideo');
    if (videoOverlay && reelVideo) {
        videoOverlay.addEventListener('click', function () {
            reelVideo.play();
            videoOverlay.style.display = 'none';
        });

        reelVideo.addEventListener('ended', function () {
            videoOverlay.style.display = 'flex';
        });
    }

    // Smooth scrolling for menu links
    const smoothScroll = (selector, targetSelector, yOffset) => {
        document.querySelector(selector).addEventListener('click', function () {
            const target = document.querySelector(targetSelector);
            const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({
                top: yPosition,
                behavior: 'smooth',
            });
        });
    };

    smoothScroll("#reelLink", "#reel", 180);
    smoothScroll(".contact-btn button", "#contact", 8600);
    smoothScroll("#logoLink", "body", 0);
    smoothScroll("#servicesLink", "#services", 1020);
    smoothScroll("#projectsLink", "#projects", 1860);
    smoothScroll("#aboutLink", "#about", 6060);
});
