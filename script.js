/* =========================================================
   JEESO HOTEL — SMOOTH ANIMATION SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PAGE LOAD ANIMATION
       ===================================================== */

    requestAnimationFrame(() => {
        document.body.classList.add("page-loaded");
    });


    /* =====================================================
       HEADER SCROLL
       ===================================================== */

    const header = document.querySelector("header");

    function handleHeader() {
        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleHeader, {
        passive: true
    });

    handleHeader();


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                nav.classList.contains("active")
            );
        });

        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });
    }


    /* =====================================================
       LANGUAGE MENU
       ===================================================== */

    const language = document.querySelector(".language");
    const languageBtn = document.querySelector(".language-btn");

    if (language && languageBtn) {

        languageBtn.addEventListener("click", (event) => {
            event.stopPropagation();

            language.classList.toggle("active");
        });

        document.addEventListener("click", (event) => {

            if (!language.contains(event.target)) {
                language.classList.remove("active");
            }

        });
    }


    /* =====================================================
       TRANSLATIONS
       ===================================================== */

    const translations = {

        ar: {
            home: "الرئيسية",
            gallery: "الصور",
            wifi: "الواي فاي",
            support: "الدعم",
            book: "احجز الآن",

            heroTitle: "JEESO HOTEL",
            heroSubtitle: "إقامة فاخرة بطابع أصيل",
            heroButton: "احجز إقامتك الآن",

            introTitle: "مرحباً بكم في JEESO HOTEL",
            introText:
                "نرحب بكم في جيزو هوتيل، حيث الراحة والأناقة والضيافة الأردنية الأصيلة. صُمم الفندق ليمنحكم تجربة إقامة هادئة ومميزة تجمع بين الطابع التراثي والخدمات الحديثة.",

            galleryTitle: "استكشف الفندق",

            wifiTitle: "شبكة الإنترنت",
            wifiNetwork: "اسم الشبكة",
            wifiPassword: "كلمة المرور",
            copy: "نسخ",

            supportTitle: "خدمة العملاء",
            supportPhone: "للدعم الفني والحجوزات",
            supportInstagram: "تابعونا على إنستغرام",

            bookingTitle: "جاهز للإقامة؟",
            bookingText: "احجز غرفتك الآن واستمتع بتجربة JEESO HOTEL.",
            bookingButton: "احجز عبر Booking.com",

            footer:
                "© 2026 JEESO HOTEL — جميع الحقوق محفوظة"
        },

        en: {
            home: "Home",
            gallery: "Gallery",
            wifi: "Wi-Fi",
            support: "Support",
            book: "Book Now",

            heroTitle: "JEESO HOTEL",
            heroSubtitle: "Luxury stay with authentic charm",
            heroButton: "Book Your Stay",

            introTitle: "Welcome to JEESO HOTEL",
            introText:
                "Welcome to JEESO HOTEL, where comfort, elegance and authentic Jordanian hospitality come together. Our hotel offers a peaceful and memorable stay combining heritage character with modern services.",

            galleryTitle: "Explore the Hotel",

            wifiTitle: "Wi-Fi",
            wifiNetwork: "Network",
            wifiPassword: "Password",
            copy: "Copy",

            supportTitle: "Guest Support",
            supportPhone: "Technical support & reservations",
            supportInstagram: "Follow us on Instagram",

            bookingTitle: "Ready to Stay?",
            bookingText:
                "Book your room now and enjoy the JEESO HOTEL experience.",
            bookingButton: "Book via Booking.com",

            footer:
                "© 2026 JEESO HOTEL — All Rights Reserved"
        },

        fr: {
            home: "Accueil",
            gallery: "Galerie",
            wifi: "Wi-Fi",
            support: "Assistance",
            book: "Réserver",

            heroTitle: "JEESO HOTEL",
            heroSubtitle: "Un séjour luxueux au charme authentique",
            heroButton: "Réserver votre séjour",

            introTitle: "Bienvenue au JEESO HOTEL",
            introText:
                "Bienvenue au JEESO HOTEL, où confort, élégance et hospitalité jordanienne authentique se rencontrent. Profitez d'un séjour paisible et mémorable alliant charme traditionnel et services modernes.",

            galleryTitle: "Découvrez l'hôtel",

            wifiTitle: "Wi-Fi",
            wifiNetwork: "Réseau",
            wifiPassword: "Mot de passe",
            copy: "Copier",

            supportTitle: "Service client",
            supportPhone: "Assistance technique et réservations",
            supportInstagram: "Suivez-nous sur Instagram",

            bookingTitle: "Prêt à séjourner ?",
            bookingText:
                "Réservez votre chambre dès maintenant et profitez de l'expérience JEESO HOTEL.",
            bookingButton: "Réserver via Booking.com",

            footer:
                "© 2026 JEESO HOTEL — Tous droits réservés"
        },

        es: {
            home: "Inicio",
            gallery: "Galería",
            wifi: "Wi-Fi",
            support: "Soporte",
            book: "Reservar",

            heroTitle: "JEESO HOTEL",
            heroSubtitle: "Una estancia de lujo con encanto auténtico",
            heroButton: "Reserva tu estancia",

            introTitle: "Bienvenido a JEESO HOTEL",
            introText:
                "Bienvenido a JEESO HOTEL, donde el confort, la elegancia y la auténtica hospitalidad jordana se unen. Disfruta de una estancia tranquila y memorable con carácter tradicional y servicios modernos.",

            galleryTitle: "Descubre el hotel",

            wifiTitle: "Wi-Fi",
            wifiNetwork: "Red",
            wifiPassword: "Contraseña",
            copy: "Copiar",

            supportTitle: "Atención al cliente",
            supportPhone: "Soporte técnico y reservas",
            supportInstagram: "Síguenos en Instagram",

            bookingTitle: "¿Listo para alojarte?",
            bookingText:
                "Reserva tu habitación ahora y disfruta de la experiencia JEESO HOTEL.",
            bookingButton: "Reservar en Booking.com",

            footer:
                "© 2026 JEESO HOTEL — Todos los derechos reservados"
        },

        tr: {
            home: "Ana Sayfa",
            gallery: "Galeri",
            wifi: "Wi-Fi",
            support: "Destek",
            book: "Rezervasyon",

            heroTitle: "JEESO HOTEL",
            heroSubtitle: "Otantik bir atmosferde lüks konaklama",
            heroButton: "Konaklamanızı Rezerve Edin",

            introTitle: "JEESO HOTEL'e Hoş Geldiniz",
            introText:
                "Konfor, zarafet ve otantik Ürdün misafirperverliğinin buluştuğu JEESO HOTEL'e hoş geldiniz. Geleneksel atmosferi modern hizmetlerle birleştiren huzurlu ve unutulmaz bir konaklama deneyimi sunuyoruz.",

            galleryTitle: "Oteli Keşfedin",

            wifiTitle: "Wi-Fi",
            wifiNetwork: "Ağ",
            wifiPassword: "Şifre",
            copy: "Kopyala",

            supportTitle: "Misafir Desteği",
            supportPhone: "Teknik destek ve rezervasyon",
            supportInstagram: "Instagram'da bizi takip edin",

            bookingTitle: "Konaklamaya Hazır mısınız?",
            bookingText:
                "Odanızı şimdi rezerve edin ve JEESO HOTEL deneyiminin keyfini çıkarın.",
            bookingButton: "Booking.com üzerinden rezerve et",

            footer:
                "© 2026 JEESO HOTEL — Tüm hakları saklıdır"
        }
    };


    /* =====================================================
       LANGUAGE SWITCHING
       ===================================================== */

    window.setLanguage = function(language) {

        if (!translations[language]) return;

        const html = document.documentElement;

        html.lang = language;

        if (language === "ar") {
            html.dir = "rtl";
        } else {
            html.dir = "ltr";
        }

        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key = element.getAttribute("data-i18n");

                if (translations[language][key]) {
                    element.textContent =
                        translations[language][key];
                }

            });

        const languageBtn =
            document.querySelector(".language-btn");

        if (languageBtn) {
            languageBtn.textContent =
                language.toUpperCase();
        }

        localStorage.setItem(
            "jeesoLanguage",
            language
        );

        if (language) {
            document
                .querySelector(".language")
                ?.classList.remove("active");
        }
    };


    /* =====================================================
       LOAD SAVED LANGUAGE
       ===================================================== */

    const savedLanguage =
        localStorage.getItem("jeesoLanguage") || "ar";

    if (translations[savedLanguage]) {
        window.setLanguage(savedLanguage);
    } else {
        window.setLanguage("ar");
    }


    /* =====================================================
       WIFI COPY
       ===================================================== */

    const copyBtn =
        document.querySelector(".copy-btn");

    const wifiPassword =
        "jeeso1234";

    if (copyBtn) {

        copyBtn.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(
                    wifiPassword
                );

                const originalText =
                    copyBtn.textContent;

                copyBtn.textContent = "✓ تم النسخ";

                setTimeout(() => {
                    copyBtn.textContent =
                        originalText;
                }, 1800);

            } catch (error) {

                const textarea =
                    document.createElement("textarea");

                textarea.value = wifiPassword;

                document.body.appendChild(textarea);

                textarea.select();

                document.execCommand("copy");

                textarea.remove();

                copyBtn.textContent = "✓ تم النسخ";

                setTimeout(() => {
                    copyBtn.textContent = "نسخ";
                }, 1800);
            }
        });
    }


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-title, " +
            ".intro, " +
            ".intro > *, " +
            ".wifi-card, " +
            ".support-card, " +
            ".booking-section > *"
        );

    revealElements.forEach((element, index) => {

        if (
            element.classList.contains("section-title") ||
            element.classList.contains("wifi-card") ||
            element.classList.contains("booking-section")
        ) {
            element.classList.add("reveal-scale");
        } else {
            element.classList.add("reveal");
        }

        element.style.setProperty(
            "--delay",
            `${Math.min(index * 0.08, 0.45)}s`
        );
    });


    /* =====================================================
       GALLERY ANIMATION
       ===================================================== */

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item, index) => {

        item.style.transitionDelay =
            `${Math.min(index * 0.08, 0.5)}s`;
    });


    /* =====================================================
       INTERSECTION OBSERVER
       ===================================================== */

    const observer =
        new IntersectionObserver(
            (entries, obs) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        obs.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -60px 0px"
            }
        );


    document
        .querySelectorAll(
            ".reveal, .reveal-left, .reveal-right, .reveal-scale, .gallery-item"
        )
        .forEach(element => {

            observer.observe(element);

        });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const year =
        document.querySelector("#year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       SMOOTH ANCHOR SCROLL
       ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });

});
