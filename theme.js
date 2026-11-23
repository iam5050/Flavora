
const savedTheme = localStorage.getItem("flavoraTheme") || "light";

document.documentElement.setAttribute("data-theme", savedTheme);

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("flavoraTheme", newTheme);
}



document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("themeToggle");

    if (themeButton) {
        function updateButtonText() {
            const theme = document.documentElement.getAttribute("data-theme");

            themeButton.textContent = theme === "dark"
                ? "Switch to Light Theme"
                : "Switch to Dark Theme";
        }

        themeButton.addEventListener("click", updateButtonText);
        updateButtonText();
    }
});
