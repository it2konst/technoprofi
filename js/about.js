// Функция для загрузки скриптов
function loadScripts() {
    // Массив, содержащий пути к файлам JavaScript
    const scripts = [
        "./js/lib/splide.js",
        "./js/lib/splide-options-about.js",
        "./js/main-menu.js",
        "./js/main-search-form.js",
    ];

    // Проходим по каждому пути в массиве
    scripts.forEach((src) => {
        // Создаем новый элемент <script>
        const script = document.createElement("script");
        // Устанавливаем атрибут src для скрипта
        script.src = src;
        // Добавляем созданный скрипт в <head> документа
        document.head.appendChild(script);
    });
}

// Вызываем функцию для загрузки скриптов
loadScripts();
