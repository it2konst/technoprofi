// <input type="tel" id="phone" placeholder="+7 (932) 152 11 22">
document.getElementById("phone").addEventListener("input", function (e) {
    const input = e.target;
    const value = input.value.replace(/\D/g, ""); // Удаляем все нецифровые символы
    const formattedValue = formatPhoneNumber(value);
    input.value = formattedValue;
});

function formatPhoneNumber(value) {
    if (!value) return value;

    const phoneNumber = value.replace(/\D/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 2) return `+${phoneNumber}`;
    if (phoneNumberLength < 5) return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}`;
    if (phoneNumberLength < 8) return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}`;
    if (phoneNumberLength < 10) return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 9)}`;
    return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(9, 11)}`;
}

// <input type="email" id="email" class="form__input" placeholder="info@gmail.com" autocomplete="email" required />
// <div id="email-error" class="error-message" style="display: none; color: #721c24">Неверный формат email</div>
document.getElementById("email").addEventListener("input", function (e) {
    const input = e.target;
    const value = input.value;
    const isValid = validateEmail(value);

    if (isValid) {
        input.classList.remove("error");
        document.getElementById("email-error").style.display = "none";
    } else {
        input.classList.add("error");
        document.getElementById("email-error").style.display = "block";
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
