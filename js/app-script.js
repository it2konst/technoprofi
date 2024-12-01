// Получаем необходимые элементы из DOM
const navBtn = document.querySelector(".nav-menu-btn");
const navBar = document.querySelector(".nav-menu");
const navMenu = document.querySelector(".nav-menu__list");
const navLinks = document.querySelectorAll(".nav-menu__item");
const htmlElement = document.documentElement;

// Универсальная функция для переключения класса
const toggleClass = (elements, className) => {
    elements.forEach((el) => el.classList.toggle(className));
};

// Универсальная функция для удаления класса
const removeClass = (elements, className) => {
    elements.forEach((el) => el.classList.remove(className));
};

// Функция для переключения состояния меню
const toggleMenu = () => {
    toggleClass([navBtn, navBar, navMenu], "active");
    htmlElement.style.overflowY = htmlElement.style.overflowY === "hidden" ? "auto" : "hidden";
};

// Функция для закрытия меню
const closeMenu = () => {
    removeClass([navBtn, navBar, navMenu], "active");
    htmlElement.style.overflowY = "auto";
};

// Добавляем обработчик события для кнопки меню
navBtn.addEventListener("click", toggleMenu);

// Добавляем обработчики событий для каждого элемента меню
navLinks.forEach((link) => link.addEventListener("click", closeMenu));

// Добавляем обработчик события для закрытия меню при нажатии клавиши Esc
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
});

// Добавляем обработчик события для закрытия меню при клике на подложку (вне меню)
navBar.addEventListener("click", (e) => {
    if (e.target === navBar) closeMenu(); // Проверяем, что клик был именно на подложке
});

// Добавляем обработчик события для закрытия меню при клике вне его области
// document.addEventListener("click", (e) => {
//     // Проверяем, что клик был вне меню и кнопки меню
//     if (!navBar.contains(e.target) && !navBtn.contains(e.target)) {
//         closeMenu();
//     }
//     console.log(e.target);
// });

// Предотвращаем закрытие меню при клике внутри меню
// navBar.addEventListener("click", (e) => {
//     e.stopPropagation();
// });
