const loadScript = (src) =>
    new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(src);
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.head.appendChild(script);
    });

const loadScripts = async () => {
    const scripts = ["./js/lib/scrollreveal.js", "./js/lib/swiper-bundle.min.js", "./js/lib/swiper-options.js", "./js/main-menu.js", "./js/main-animate.js", "./js/main-form-validation.js"];

    try {
        for (const script of scripts) {
            await loadScript(script);
            console.log(`Script ${script} loaded`);
        }
    } catch (error) {
        console.error("Error loading scripts:", error);
    }
};

loadScripts();

function closeDisclaimer() {
    document.getElementById("disclaimer").style.display = "none";
}
