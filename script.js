/* =========================================================
   JEESO HOTEL
   JavaScript
   ========================================================= */


/* =========================================================
   HEADER SCROLL
   ========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});


document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================================================
   LANGUAGE MENU
   ========================================================= */

const languageButton =
    document.getElementById("languageButton");

const languageMenu =
    document.getElementById("languageMenu");


languageButton.addEventListener("click", () => {

    languageMenu.classList.toggle("active");

});


document.addEventListener("click", (event) => {

    if (
        !event.target.closest(".language-wrapper")
    ) {

        languageMenu.classList.remove("active");

    }

});


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

    ar: {

        direction: "rtl",
        code: "AR",

        navHome: "الرئيسية",
        navGallery: "الصور",
        navWifi: "الإنترنت",
        navSupport: "الدعم الفني",

        heroEyebrow:
            "أصالة • ضيافة • تاريخ",

        heroTitle:
            "أهلاً بكم في",

        heroDescription:
            "تجربة فندقية تجمع بين روح المكان التاريخية وراحة الضيافة العصرية.",

        heroButton:
            "اكتشف الفندق",

        introLabel:
            "تجربة استثنائية",

        introTitle:
            "حيث يلتقي التاريخ بالضيافة",

        introText:
            "في JEESO HOTEL نحرص على تقديم تجربة مختلفة، مستوحاة من جمال العمارة والتراث، مع توفير أجواء مريحة للضيوف وخدمة تهتم بأدق التفاصيل.",

        galleryLabel:
            "معرض الفندق",

        galleryTitle:
            "الصور",

        galleryText:
            "استكشف أجواء الفندق وتفاصيله.",

        image1:
            "واجهة الفندق",

        image2:
            "أجواء الفندق",

        image3:
            "تفاصيل أثرية",

        image4:
            "المساحات الداخلية",

        image5:
            "تفاصيل الضيافة",

        wifiLabel:
            "خدمة الإنترنت",

        wifiTitle:
            "ابقَ متصلاً",

        wifiText:
            "شبكة الإنترنت متاحة لضيوف الفندق.",

        wifiName:
            "اسم الشبكة",

        wifiPassword:
            "كلمة المرور",

        copyWifi:
            "نسخ كلمة المرور",

        supportLabel:
            "خدمة الضيوف",

        supportTitle:
            "الدعم الفني",

        supportText:
            "نحن هنا لمساعدتك عند الحاجة.",

        phoneLabel:
            "الهاتف",

        phoneAction:
            "اتصل بالدعم الفني",

        instagramAction:
            "زيارة حساب الفندق",

        footerText:
            "أصالة المكان، دفء الضيافة."

    },


    en: {

        direction: "ltr",
        code: "EN",

        navHome: "Home",
        navGallery: "Gallery",
        navWifi: "Wi-Fi",
        navSupport: "Technical Support",

        heroEyebrow:
            "Heritage • Hospitality • History",

        heroTitle:
            "Welcome to",

        heroDescription:
            "A hotel experience where the spirit of heritage meets modern comfort and hospitality.",

        heroButton:
            "Discover the Hotel",

        introLabel:
            "An Exceptional Experience",

        introTitle:
            "Where Heritage Meets Hospitality",

        introText:
            "At JEESO HOTEL, we offer a distinctive experience inspired by architecture and heritage, combined with comfort and attentive hospitality.",

        galleryLabel:
            "Hotel Gallery",

        galleryTitle:
            "Gallery",

        galleryText:
            "Explore the atmosphere and details of the hotel.",

        image1:
            "Hotel Exterior",

        image2:
            "Hotel Atmosphere",

        image3:
            "Heritage Details",

        image4:
            "Interior Spaces",

        image5:
            "Hospitality Details",

        wifiLabel:
            "Internet Service",

        wifiTitle:
            "Stay Connected",

        wifiText:
            "Wi-Fi is available for hotel guests.",

        wifiName:
            "Network Name",

        wifiPassword:
            "Password",

        copyWifi:
            "Copy Password",

        supportLabel:
            "Guest Service",

        supportTitle:
            "Technical Support",

        supportText:
            "We are here to assist you whenever you need us.",

        phoneLabel:
            "Phone",

        phoneAction:
            "Call Technical Support",

        instagramAction:
            "Visit Hotel Instagram",

        footerText:
            "Heritage of the place, warmth of hospitality."

    },


    fr: {

        direction: "ltr",
        code: "FR",

        navHome: "Accueil",
        navGallery: "Galerie",
        navWifi: "Wi-Fi",
        navSupport: "Support",

        heroEyebrow:
            "Patrimoine • Hospitalité • Histoire",

        heroTitle:
            "Bienvenue à",

        heroDescription:
            "Une expérience hôtelière où l'esprit du patrimoine rencontre le confort moderne.",

        heroButton:
            "Découvrir l'hôtel",

        introLabel:
            "Une expérience exceptionnelle",

        introTitle:
            "Là où le patrimoine rencontre l'hospitalité",

        introText:
            "JEESO HOTEL propose une expérience unique inspirée de l'architecture et du patrimoine, avec confort et attention aux détails.",

        galleryLabel:
            "Galerie de l'hôtel",

        galleryTitle:
            "Photos",

        galleryText:
            "Découvrez l'atmosphère et les détails de l'hôtel.",

        image1:
            "Extérieur de l'hôtel",

        image2:
            "Ambiance de l'hôtel",

        image3:
            "Détails du patrimoine",

        image4:
            "Espaces intérieurs",

        image5:
            "Détails de l'hospitalité",

        wifiLabel:
            "Service Internet",

        wifiTitle:
            "Restez connecté",

        wifiText:
            "Le Wi-Fi est disponible pour les clients.",

        wifiName:
            "Nom du réseau",

        wifiPassword:
            "Mot de passe",

        copyWifi:
            "Copier le mot de passe",

        supportLabel:
            "Service client",

        supportTitle:
            "Support technique",

        supportText:
            "Nous sommes là pour vous aider.",

        phoneLabel:
            "Téléphone",

        phoneAction:
            "Appeler le support",

        instagramAction:
            "Instagram de l'hôtel",

        footerText:
            "L'authenticité du lieu, la chaleur de l'hospitalité."

    },


    es: {

        direction: "ltr",
        code: "ES",

        navHome: "Inicio",
        navGallery: "Galería",
        navWifi: "Wi-Fi",
        navSupport: "Soporte",

        heroEyebrow:
            "Patrimonio • Hospitalidad • Historia",

        heroTitle:
            "Bienvenidos a",

        heroDescription:
            "Una experiencia hotelera donde el espíritu del patrimonio se encuentra con el confort moderno.",

        heroButton:
            "Descubrir el hotel",

        introLabel:
            "Una experiencia excepcional",

        introTitle:
            "Donde el patrimonio se encuentra con la hospitalidad",

        introText:
            "JEESO HOTEL ofrece una experiencia única inspirada en la arquitectura y el patrimonio, combinada con comodidad y atención al detalle.",

        galleryLabel:
            "Galería del hotel",

        galleryTitle:
            "Fotos",

        galleryText:
            "Descubre el ambiente y los detalles del hotel.",

        image1:
            "Exterior del hotel",

        image2:
            "Ambiente del hotel",

        image3:
            "Detalles históricos",

        image4:
            "Espacios interiores",

        image5:
            "Detalles de hospitalidad",

        wifiLabel:
            "Servicio de Internet",

        wifiTitle:
            "Mantente conectado",

        wifiText:
            "Wi-Fi disponible para los huéspedes.",

        wifiName:
            "Nombre de la red",

        wifiPassword:
            "Contraseña",

        copyWifi:
            "Copiar contraseña",

        supportLabel:
            "Servicio al huésped",

        supportTitle:
            "Soporte técnico",

        supportText:
            "Estamos aquí para ayudarte.",

        phoneLabel:
            "Teléfono",

        phoneAction:
            "Llamar al soporte",

        instagramAction:
            "Instagram del hotel",

        footerText:
            "La autenticidad del lugar, la calidez de la hospitalidad."

    },


    tr: {

        direction: "ltr",
        code: "TR",

        navHome: "Ana Sayfa",
        navGallery: "Galeri",
        navWifi: "Wi-Fi",
        navSupport: "Teknik Destek",

        heroEyebrow:
            "Miras • Misafirperverlik • Tarih",

        heroTitle:
            "JEESO HOTEL'e",

        heroDescription:
            "Tarihin ruhunu modern konfor ve misafirperverlikle buluşturan özel bir otel deneyimi.",

        heroButton:
            "Oteli Keşfet",

        introLabel:
            "Benzersiz Bir Deneyim",

        introTitle:
            "Miras ve Misafirperverliğin Buluştuğu Yer",

        introText:
            "JEESO HOTEL, mimari ve kültürel mirastan ilham alan, konfor ve özenli hizmet sunan özel bir deneyim sağlar.",

        galleryLabel:
            "Otel Galerisi",

        galleryTitle:
            "Fotoğraflar",

        galleryText:
            "Otelin atmosferini ve detaylarını keşfedin.",

        image1:
            "Otel Dış Görünümü",

        image2:
            "Otel Atmosferi",

        image3:
            "Tarihi Detaylar",

        image4:
            "İç Mekanlar",

        image5:
            "Misafirperverlik Detayları",

        wifiLabel:
            "İnternet Hizmeti",

        wifiTitle:
            "Bağlantıda Kalın",

        wifiText:
            "Wi-Fi otel misafirleri için kullanılabilir.",

        wifiName:
            "Ağ Adı",

        wifiPassword:
            "Şifre",

        copyWifi:
            "Şifreyi Kopyala",

        supportLabel:
            "Misafir Hizmetleri",

        supportTitle:
            "Teknik Destek",

        supportText:
            "İhtiyacınız olduğunda size yardımcı olmak için buradayız.",

        phoneLabel:
            "Telefon",

        phoneAction:
            "Teknik Desteği Ara",

        instagramAction:
            "Otel Instagram'ı",

        footerText:
            "Mekanın ruhu, misafirperverliğin sıcaklığı."

    }

};


/* =========================================================
   APPLY LANGUAGE
   ========================================================= */

function setLanguage(language) {

    const data = translations[language];

    if (!data) return;

    document.documentElement.lang = language;

    document.documentElement.dir = data.direction;

    languageButton.textContent =
        data.code + " ▾";


    document.querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (data[key]) {

                element.textContent =
                    data[key];

            }

        });


    localStorage.setItem(
        "jeesoLanguage",
        language
    );


    languageMenu.classList.remove("active");

}


/* =========================================================
   LANGUAGE BUTTONS
   ========================================================= */

document
    .querySelectorAll("[data-lang]")
    .forEach(button => {

        button.addEventListener("click", () => {

            setLanguage(
                button.dataset.lang
            );

        });

    });


/* =========================================================
   DEFAULT LANGUAGE
   ========================================================= */

const savedLanguage =
    localStorage.getItem("jeesoLanguage");

setLanguage(
    savedLanguage || "ar"
);


/* =========================================================
   COPY WIFI PASSWORD
   ========================================================= */

const copyWifi =
    document.getElementById("copyWifi");

const wifiPassword =
    document.getElementById("wifiPassword");


copyWifi.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(
            wifiPassword.textContent.trim()
        );

        const original =
            copyWifi.textContent;

        copyWifi.textContent =
            "✓ تم النسخ";

        setTimeout(() => {

            copyWifi.textContent =
                original;

        }, 1800);

    } catch (error) {

        alert(
            "jeeso1234"
        );

    }

});


/* =========================================================
   CURRENT YEAR
   ========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();