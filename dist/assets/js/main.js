document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("mainHeader");
  const scrollThreshold = 50; // Number of pixels to scroll before changing opacity

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Language data
  const languageData = {
    en: {
      headline:
        "We Combine Top Legal Advice with Technology and Project Management Capabilities",
      subhead: "Legal Solutions to Unleash Your Full Potential",
      ctaButton: "Work with us",
      serviceArea:
        "Corporate Law | Restructurings | Mergers & Acquisitions | Joint Ventures | Venture Capital | Capital Markets Law | Legal Corporate/M&A as a Service",
      missionTitle: "Our Mission",
      missionStatement: "Providing Corporate Legal Advice in a State of Flow",
      focusItems: [
        {
          title: "Full Focus",
          description:
            "Where we are fully immersed and deeply focused on your legal project",
        },
        {
          title: "Heightened Performance",
          description:
            "Finding balance between skills and challenge, we unlock peak performance. We massively increase efficiency, productivity and output. Let's reach your goals in record time.",
        },
        {
          title: "Creation & Innovation",
          description:
            "Absorbed in the task, we tap into our creative potential. Turning challenges into innovation and opportunities.",
        },
        {
          title: "Ease & Fulfilment",
          description:
            "We are convinced that deeply satisfying and fulfilling work provides the best possible results. We appreciate a structured process based on our longstanding transaction experience and every win along the way.",
        },
      ],
      footer: {
        imprint: "Imprint",
        address:
          "Flow State Rechtsanwaltsgesellschaft mbH<br />Bahnhofsstraße 2, 90402 Nuremberg",
        email: "info@flowstate-law.de",
        phoneNumber: "+49 911 47 88 27 55",
        commercialRegister: "Commercial Register: Local Court of Nuremberg",
        registerNumber:"Commercial Register Number: HRB 99999 ",
        managingDirector: "Managing Director: Sebastian Seibold",
        vatNumber: "VAT Identification Number: DE999999999",
        barAssociation: "Bar association:",
        barAssociationName: "Bar Association of Nuremberg",
        barAssociationWebsite: "www.rak-nbg.de",
        barAssociationAddress: "Fuerther Str. 115, 90429 Nuremberg",
        copyright: "Flow State Rechtsanwaltsgesellschaft mbH 2025. All rights reserved",
      },
    },
    de: {
      headline:
        "Wir vereinen erstklassige Rechtsberatung mit dem Einsatz von Technologie und Projektmanagement-Tools",
      subhead:
        "Entfalten Sie mit unseren rechtlichen Lösungen Ihr volles Potential",
      ctaButton: "Zusammenarbeiten",
      serviceArea:
        "Gesellschaftsrecht | Umstrukturierungen | Mergers & Acquisitions | Joint Ventures | Venture Capital | Kapitalmarktrecht | Legal Corporate as a Service | Legal M&A as a Service",
      missionTitle: "Unsere Mission",
      missionStatement: `Unternehmensrechtliche Beratung im "Flow State"`,
      focusItems: [
        {
          title: "Volle Aufmerksamkeit",
          description:
            "Wir konzentrieren uns voll uns ganz auf Ihr rechtliches Projekt.",
        },
        {
          title: "Hohe Leistungsfähigkeit",
          description:
            "Wir finden die richtige Balance zwischen Herausforderungen und unseren Fähigkeiten. Das schafft Raum für Spitzenleistungen. Wir steigern die Effizienz, die Produktivität und den Output. Lassen Sie uns gemeinsam Ihre Ziele in Rekordzeit erreichen.",
        },
        {
          title: "Gestaltung & Innovation",
          description: `Im "Flow State" schöpfen wir unser kreatives Potenzial aus und verwandeln Herausforderungen in Chancen und Innovation.`,
        },
        {
          title: "Leichtigkeit & Erfüllung",
          description:
            "Wir sind davon überzeugt, dass eine erfüllende Arbeit zu den bestmöglichen Ergebnissen führt. Wir schätzen strukturierte Prozesse, die auf unserer langjährigen Transaktionserfahrung basieren, und jeden Erfolg auf dem Weg zum Ziel.",
        },
      ],
      footer: {
        imprint: "Impressum",
        address:
          "Flow State Rechtsanwaltsgesellschaft mbH Bahnhofstraße 2, 90402 Nürnberg",
        email: "info@flowstate-law.de",
        phoneNumber: "+49 911 47 88 27 55",
        commercialRegister: "Handelsregister: Amtsgericht Nürnberg",
        registerNumber: "Registernummer: HRB 99999",
        managingDirector: "Geschäftsführer: Sebastian Seibold ",
        vatNumber: "Umsatzsteuer-Identifikationsnummer: DE999999999 ",
        barAssociation: "Zuständige Rechtsanwaltskammer:",
        barAssociationName: "Rechtsanwaltskammer Nürnberg",
        barAssociationWebsite: "www.rak-nbg.de",
        barAssociationAddress: "Fürther Str. 115, 90429 Nürnberg",
        copyright: "Flow State Rechtsanwaltsgesellschaft mbH 2025. Alle Rechte sind vorbehalten.",
      },
    },
  };

  // Get language from localStorage or default to 'en'
  let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

  // Get language elements
  const deOption = document.querySelector('[data-lang="de"]');
  const enOption = document.querySelector('[data-lang="en"]');

  // Function to update language display style
  function updateLanguageDisplay(lang) {
    if (lang === "de") {
      deOption.classList.add("active");
      deOption.classList.remove("inactive");
      enOption.classList.add("inactive");
      enOption.classList.remove("active");
    } else {
      enOption.classList.add("active");
      enOption.classList.remove("inactive");
      deOption.classList.add("inactive");
      deOption.classList.remove("active");
    }
  }

  // Function to update all text content
  function updateContent(lang) {
    const data = languageData[lang];

    // Update header content
    document.getElementById("headline").textContent = data.headline;
    document.getElementById("subhead").textContent = data.subhead;
    document.getElementById("ctaButton").textContent = data.ctaButton;
    document.getElementById("serviceArea").textContent = data.serviceArea;

    // Update mission section
    document.querySelector(".mission-title").textContent = data.missionTitle;
    document.querySelector(".mission-statement").textContent =
      data.missionStatement;

    // Update focus items
    const focusItems = document.querySelectorAll(".focus-item");
    focusItems.forEach((item, index) => {
      item.querySelector(".title").textContent = data.focusItems[index].title;
      item.querySelector(".description").textContent =
        data.focusItems[index].description;
    });

    // Update footer
    document.querySelector(".footer-title").textContent = data.footer.imprint;
    document.querySelectorAll(".footer-text")[0].innerHTML =
      data.footer.address;
    document.getElementById("email").textContent = data.footer.email;
    document.getElementById("phone-number").textContent =
      data.footer.phoneNumber;
    document.querySelectorAll(".footer-text")[1].textContent =
      data.footer.commercialRegister;
    if (data.footer.registerNumber) {
      document.getElementById("register-number").textContent = data.footer.registerNumber;
    }
    document.querySelectorAll(".footer-text")[2].textContent =
      data.footer.managingDirector;
    document.querySelectorAll(".footer-text")[3].textContent =
      data.footer.vatNumber;
    document.querySelectorAll(".footer-text")[4].textContent =
      data.footer.barAssociation;
    document.querySelectorAll(".footer-text")[5].textContent =
      data.footer.barAssociationName;
    document.querySelector(".footer-link").textContent =
      data.footer.barAssociationWebsite;
    document.querySelectorAll(".footer-link")[1].textContent =
      data.footer.barAssociationAddress;
    document.querySelector(".copyright").textContent = data.footer.copyright;
  }

  // Initialize with saved language
  updateLanguageDisplay(currentLanguage);
  updateContent(currentLanguage);

  // Set up click handlers
  deOption.addEventListener("click", function () {
    if (currentLanguage !== "de") {
      currentLanguage = "de";
      localStorage.setItem('selectedLanguage', currentLanguage);
      updateLanguageDisplay(currentLanguage);
      updateContent(currentLanguage);
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }
  });

  enOption.addEventListener("click", function () {
    if (currentLanguage !== "en") {
      currentLanguage = "en";
      localStorage.setItem('selectedLanguage', currentLanguage);
      updateLanguageDisplay(currentLanguage);
      updateContent(currentLanguage);
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }
  });
});