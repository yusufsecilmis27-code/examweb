document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton =
        document.getElementById("mobileMenuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            mobileMenu.classList.toggle("active");

            document.body.classList.toggle("menu-open");

        });


        mobileMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("active");

                document.body.classList.remove("menu-open");

            });

        });


        document.addEventListener("click", function (event) {

            if (
                !mobileMenu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                mobileMenu.classList.remove("active");

                document.body.classList.remove("menu-open");

            }

        });

    }


    /* =====================================================
       LANGUAGE MENU
    ===================================================== */

    const language =
        document.querySelector(".language");

    const languageButton =
        document.getElementById("languageButton");

    const languageMenu =
        document.getElementById("languageMenu");

    const currentLanguage =
        document.getElementById("currentLanguage");


    if (
        language &&
        languageButton &&
        languageMenu
    ) {

        languageButton.addEventListener("click", function (event) {

            event.stopPropagation();

            language.classList.toggle("open");

        });


        languageMenu
            .querySelectorAll("button")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    const lang =
                        button.dataset.lang;

                    const label =
                        button.querySelector("strong");

                    if (label && currentLanguage) {
                        currentLanguage.textContent =
                            label.textContent;
                    }

                    language.classList.remove("open");

                    changeLanguage(lang);

                });

            });


        document.addEventListener("click", function (event) {

            if (!language.contains(event.target)) {

                language.classList.remove("open");

            }

        });

    }


    /* =====================================================
       GOOGLE TRANSLATE
    ===================================================== */

    window.googleTranslateElementInit = function () {

        new google.translate.TranslateElement({

            pageLanguage: "tr",

            includedLanguages:
                "tr,en,ar,de,fr,es,it,ru",

            autoDisplay: false

        }, "google_translate_element");

    };


    window.changeLanguage = function (languageCode) {

        const tryTranslate = function () {

            const select =
                document.querySelector(
                    ".goog-te-combo"
                );

            if (!select) {

                setTimeout(tryTranslate, 300);

                return;

            }

            select.value = languageCode;

            select.dispatchEvent(
                new Event("change")
            );

        };


        tryTranslate();

    };


    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    const header =
        document.querySelector(".site-header");


    if (header) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 30) {

                    header.classList.add("scrolled");

                } else {

                    header.classList.remove("scrolled");

                }

            },
            { passive: true }
        );

    }


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (language) {
                    language.classList.remove("open");
                }

                if (mobileMenu) {
                    mobileMenu.classList.remove("active");
                }

                document.body.classList.remove("menu-open");

            }

        }
    );

});