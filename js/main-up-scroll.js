// function upScroll() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// }

// Получаем ссылки на элементы
const upScrollButton = document.querySelector(".up-scroll");
const footer = document.querySelector(".footer");

// Обработчик события прокрутки для отображения/скрытия кнопки
window.addEventListener("scroll", () => {
    upScrollButton.style.display = window.scrollY > 700 ? "flex" : "none";
});

// Функция для корректировки позиции кнопки
const adjustButtonPosition = () => {
    // Получаем положение верхнего края футера относительно viewport
    const { top } = footer.getBoundingClientRect();

    // Рассчитываем значение translateY для трансформации
    const translateYValue = top < window.innerHeight - upScrollButton.offsetHeight - 20 ? `${top - window.innerHeight + upScrollButton.offsetHeight + 20}px` : "0px";

    // Применяем трансформацию для позиционирования кнопки
    upScrollButton.style.transform = `translateY(${translateYValue})`;
};

// Добавляем обработчик события прокрутки для корректировки позиции кнопки
window.addEventListener("scroll", adjustButtonPosition, { passive: true });
