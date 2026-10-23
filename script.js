/* =========================================================
   JEESO HOTEL
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       PAGE START
    ===================================================== */

    setTimeout(function () {

        document.body.classList.add("page-loaded");

    }, 100);


    /* =====================================================
       HEADER
    ===================================================== */

    const header =
        document.getElementById("header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener(
            "click",
            function () {

                nav.classList.toggle("active");

            }
        );


        nav.querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        nav.classList.remove("active");

                    }
                );

            });

    }


    /* =====================================================
       LANGUAGE MENU
    ===================================================== */

    const language =
        document.querySelector(".language");

    const languageButton =
        document.querySelector(".language-btn");

    if (language && languageButton) {

        languageButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                language.classList.toggle("active");

            }
        );


        document.addEventListener(
            "click",
            function (event) {

                if (!language.contains(event.target)) {

                    language.classList.remove("active");

                }

            }
        );

    }


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        ar: {

            home: "الرئيسية",

            about: "الفندق",

            gallery: "الصور",

            wifi: "الواي فاي",

            support: "الدعم",

            book: "احجز الآن",

            heroSubtitle:
                "إقامة فاخرة بطابع أصيل",

            heroButton:
                "احجز إقامتك الآن",

            introTitle:
                "مرحباً بكم في JEESO HOTEL",

            introText:
                "نرحب بكم في جيزو هوتيل، حيث الراحة والأناقة والضيافة الأردنية الأصيلة. صُمم الفندق ليمنحكم تجربة إقامة هادئة ومميزة تجمع بين الطابع التراثي والخدمات الحديثة.",

            galleryTitle:
                "استكشف الفندق",

            wifiTitle:
                "شبكة الإنترنت",

            wifiNetwork:
                "اسم الشبكة",

            wifiPassword:
                "كلمة المرور",

            copy:
                "نسخ",

            supportTitle:
                "خدمة العملاء",

            supportPhone:
                "للدعم الفني والحجوزات",

            supportInstagram:
                "تابعونا على إنستغرام",

            bookingTitle:
                "جاهز للإقامة؟",

            bookingText:
                "احجز غرفتك الآن واستمتع بتجربة JEESO HOTEL.",

            bookingButton:
                "احجز عبر Booking.com",

            footerRights:
                "جميع الحقوق محفوظة"

        },


        en: {

            home: "Home",

            about: "Hotel",

            gallery: "Gallery",

            wifi: "Wi-Fi",

            support: "Support",

            book: "Book Now",

            heroSubtitle:
                "Luxury stay with authentic charm",

            heroButton:
                "Book Your Stay",

            introTitle:
                "Welcome to JEESO HOTEL",

            introText:
                "Welcome to JEESO HOTEL, where comfort, elegance and authentic Jordanian hospitality come together. Our hotel offers a peaceful and memorable stay combining heritage character with modern services.",

            galleryTitle:
                "Explore the Hotel",

            wifiTitle:
                "Wi-Fi",

            wifiNetwork:
                "Network",

            wifiPassword:
                "Password",

            copy:
                "Copy",

            supportTitle:
                "Guest Support",

            supportPhone:
                "Technical support & reservations",

            supportInstagram:
                "Follow us on Instagram",

            bookingTitle:
                "Ready to Stay?",

            bookingText:
                "Book your room now and enjoy the JEESO HOTEL experience.",

            bookingButton:
                "Book via Booking.com",

            footerRights:
                "All Rights Reserved"

        },


        fr: {

            home: "Accueil",

            about: "Hôtel",

            gallery: "Galerie",

            wifi: "Wi-Fi",

            support: "Assistance",

            book: "Réserver",

            heroSubtitle:
                "Un séjour luxueux au charme authentique",

            heroButton:
                "Réserver votre séjour",

            introTitle:
                "Bienvenue au JEESO HOTEL",

            introText:
                "Bienvenue au JEESO HOTEL, où confort, élégance et hospitalité jordanienne authentique se rencontrent. Profitez d'un séjour paisible et mémorable alliant charme traditionnel et services modernes.",

            galleryTitle:
                "Découvrez l'hôtel",

            wifiTitle:
                "Wi-Fi",

            wifiNetwork:
                "Réseau",

            wifiPassword:
                "Mot de passe",

            copy:
                "Copier",

            supportTitle:
                "Service client",

            supportPhone:
                "Assistance technique et réservations",

            supportInstagram:
                "Suivez-nous sur Instagram",

            bookingTitle:
                "Prêt à séjourner ?",

            bookingText:
                "Réservez votre chambre dès maintenant et profitez de l'expérience JEESO HOTEL.",

            bookingButton:
                "Réserver via Booking.com",

            footerRights:
                "Tous droits réservés"

        },


        es: {

            home: "Inicio",

            about: "Hotel",

            gallery: "Galería",

            wifi: "Wi-Fi",

            support: "Soporte",

            book: "Reservar",

            heroSubtitle:
                "Una estancia de lujo con encanto auténtico",

            heroButton:
                "Reserva tu estancia",

            introTitle:
                "Bienvenido a JEESO HOTEL",

            introText:
                "Bienvenido a JEESO HOTEL, donde el confort, la elegancia y la auténtica hospitalidad jordana se unen. Disfruta de una estancia tranquila y memorable con carácter tradicional y servicios modernos.",

            galleryTitle:
                "Descubre el hotel",

            wifiTitle:
                "Wi-Fi",

            wifiNetwork:
                "Red",

            wifiPassword:
                "Contraseña",

            copy:
                "Copiar",

            supportTitle:
                "Atención al cliente",

            supportPhone:
                "Soporte técnico y reservas",

            supportInstagram:
                "Síguenos en Instagram",

            bookingTitle:
                "¿Listo para alojarte?",

            bookingText:
                "Reserva tu habitación ahora y disfruta de la experiencia JEESO HOTEL.",

            bookingButton:
                "Reservar en Booking.com",

            footerRights:
                "Todos los derechos reservados"

        },


        tr: {

            home: "Ana Sayfa",

            about: "Otel",

            gallery: "Galeri",

            wifi: "Wi-Fi",

            support: "Destek",

            book: "Rezervasyon",

            heroSubtitle:
                "Otantik bir atmosferde lüks konaklama",

            heroButton:
                "Konaklamanızı Rezerve Edin",

            introTitle:
                "JEESO HOTEL'e Hoş Geldiniz",

            introText:
                "Konfor, zarafet ve otantik Ürdün misafirperverliğinin buluştuğu JEESO HOTEL'e hoş geldiniz. Geleneksel atmosferi modern hizmetlerle birleştiren huzurlu ve unutulmaz bir konaklama deneyimi sunuyoruz.",

            galleryTitle:
                "Oteli Keşfedin",

            wifiTitle:
                "Wi-Fi",

            wifiNetwork:
                "Ağ",

            wifiPassword:
                "Şifre",

            copy:
                "Kopyala",

            supportTitle:
                "Misafir Desteği",

            supportPhone:
                "Teknik destek ve rezervasyon",

            supportInstagram:
                "Instagram'da bizi takip edin",

            bookingTitle:
                "Konaklamaya Hazır mısınız?",

            bookingText:
                "Odanızı şimdi rezerve edin ve JEESO HOTEL deneyiminin keyfini çıkarın.",

            bookingButton:
                "Booking.com üzerinden rezerve et",

            footerRights:
                "Tüm hakları saklıdır"

        }

    };


    /* =====================================================
       LANGUAGE FUNCTION
    ===================================================== */

    window.setLanguage =
        function (language) {

            if (!translations[language]) {
                return;
            }

            const html =
                document.documentElement;

            html.lang = language;

            if (language === "ar") {

                html.dir = "rtl";

            } else {

                html.dir = "ltr";

            }


            document
                .querySelectorAll("[data-i18n]")
                .forEach(function (element) {

                    const key =
                        element.getAttribute("data-i18n");

                    if (
                        translations[language][key]
                    ) {

                        element.textContent =
                            translations[language][key];

                    }

                });


            if (languageButton) {

                languageButton.textContent =
                    language.toUpperCase();

            }


            localStorage.setItem(
                "jeesoLanguage",
                language
            );


            if (language) {

                language
                    = language;

            }


            if (document.querySelector(".language")) {

                document
                    .querySelector(".language")
                    .classList.remove("active");

            }

        };


    /* =====================================================
       LOAD LANGUAGE
    ===================================================== */

    const savedLanguage =
        localStorage.getItem(
            "jeesoLanguage"
        ) || "ar";

    setLanguage(savedLanguage);


    /* =====================================================
       WIFI COPY
    ===================================================== */

    const copyButton =
        document.getElementById("copyWifi");

    const password =
        document.getElementById("wifiPassword");


    if (copyButton && password) {

        copyButton.addEventListener(
            "click",
            async function () {

                const text =
                    password.textContent.trim();

                try {

                    await navigator.clipboard.writeText(
                        text
                    );

                    const oldText =
                        copyButton.textContent;

                    copyButton.textContent =
                        "✓ تم النسخ";

                    copyButton.style.background =
                        "#b79a66";

                    copyButton.style.color =
                        "#fff";


                    setTimeout(function () {

                        copyButton.textContent =
                            oldText;

                        copyButton.style.background =
                            "";

                        copyButton.style.color =
                            "";

                    }, 1800);

                } catch (error) {

                    const textarea =
                        document.createElement(
                            "textarea"
                        );

                    textarea.value = text;

                    document.body.appendChild(
                        textarea
                    );

                    textarea.select();

                    document.execCommand(
                        "copy"
                    );

                    textarea.remove();

                    copyButton.textContent =
                        "✓ تم النسخ";

                    setTimeout(function () {

                        copyButton.textContent =
                            "نسخ";

                    }, 1800);

                }

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .reveal-scale"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("visible");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -70px 0px"
            }
        );


    revealElements.forEach(
        function (element) {

            observer.observe(element);

        }
    );


    /* =====================================================
       PARALLAX HERO
    ===================================================== */

    const hero =
        document.querySelector(".hero");

    const heroImage =
        document.querySelector(".hero-image");


    if (hero && heroImage) {

        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.innerWidth <= 768
                ) {
                    return;
                }

                const scroll =
                    window.scrollY;

                if (scroll < window.innerHeight) {

                    heroImage.style.transform =
                        `scale(1.08) translateY(${scroll * 0.12}px)`;

                }

            },
            { passive: true }
        );

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav > a"
        );


    window.addEventListener(
        "scroll",
        function () {

            let current = "";

            sections.forEach(
                function (section) {

                    const sectionTop =
                        section.offsetTop - 180;

                    if (
                        window.scrollY >=
                        sectionTop
                    ) {

                        current =
                            section.getAttribute(
                                "id"
                            );

                    }

                }
            );


            navLinks.forEach(
                function (link) {

                    link.classList.remove(
                        "active-link"
                    );

                    const href =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        href === "#" + current
                    ) {

                        link.classList.add(
                            "active-link"
                        );

                    }

                }
            );

        },
        { passive: true }
    );


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        const targetId =
                            link.getAttribute(
                                "href"
                            );

                        if (
                            !targetId ||
                            targetId === "#"
                        ) {
                            return;
                        }

                        const target =
                            document.querySelector(
                                targetId
                            );

                        if (!target) {
                            return;
                        }

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }
                );

            }
        );

});
