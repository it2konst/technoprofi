const iconOpenClick = document.getElementById("search-open");
const headerSearchForm = document.getElementById("search-box");
const searchInput = document.querySelector(".search-input");
const activeClass = "search-box--active";
let enableBlur = false;

iconOpenClick.addEventListener("click", () => {
    if (enableBlur) {
        enableBlur = false;
    } else {
        headerSearchForm.classList.toggle(activeClass);
        if (headerSearchForm.classList.contains(activeClass)) {
            setTimeout(() => searchInput.focus(), 300);
        }
    }
});

searchInput.addEventListener("blur", (e) => {
    if (headerSearchForm.classList.contains(activeClass)) {
        headerSearchForm.classList.remove(activeClass);
        enableBlur = true;
        setTimeout(() => (enableBlur = false), 300);
    }
});

// document.addEventListener("click", (e) => {
//     if (!headerSearchForm.contains(e.target) && headerSearchForm.classList.contains(activeClass)) {
//         headerSearchForm.classList.remove(activeClass);
//     }
// });
// event.stopPropagation();
