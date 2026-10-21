document.addEventListener("DOMContentLoaded", function () {

    const welcomeBtn = document.getElementById("welcomeBtn");

    if (welcomeBtn) {
        welcomeBtn.addEventListener("click", function () {
            alert("Welcome to my portfolio! Thank you for visiting.");
        });
    }

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("portfolioTheme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");

            const isLight =
                document.body.classList.contains("light-mode");

            localStorage.setItem(
                "portfolioTheme",
                isLight ? "light" : "dark"
            );
        });
    }

    const readMoreBtn = document.getElementById("readMoreBtn");
    const moreInfo = document.getElementById("moreInfo");

    if (readMoreBtn && moreInfo) {
        readMoreBtn.addEventListener("click", function () {
            moreInfo.classList.toggle("hidden");

            if (moreInfo.classList.contains("hidden")) {
                readMoreBtn.textContent = "Read More";
            } else {
                readMoreBtn.textContent = "Show Less";
            }
        });
    }

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
