const themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙";
    } else {
        themeButton.textContent = "☀️";
    }

});
const topButton = document.getElementById("top-button");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});
topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();