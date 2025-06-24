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

  // Optional: Add language toggle functionality
  const languageSelector = document.querySelector(".language-selector");

  languageSelector.addEventListener("click", function () {
 
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
            "Our work itself becomes deeply satisfying and fulfilling. We enjoy the process.",
        },
      ],
      footer: {
        imprint: "Imprint",
        address:
          "Flow State Rechtsanwaltsgesellschaft mbH<br />Bahnhofsstraße 2, 90402 Nuremberg",
        commercialRegister: "Commercial Register: Local Court of Nuremberg",
        managingDirector: "Managing Director: Sebastian Seibold",
        vatNumber: "VAT Identification Number: DE999999999",
        barAssociation: "Bar association:",
        barAssociationName: "Bar Association of Nuremberg",
        barAssociationWebsite: "www.rak-nbg.de",
        barAssociationAddress: "Fuerther Str. 115, 90429 Nuremberg",
        copyright: "Company",
      },
    },
    de: {
      headline:
        "Wir kombinieren erstklassige Rechtsberatung mit Technologie und Projektmanagement",
      subhead: "Rechtliche Lösungen, um Ihr volles Potenzial zu entfesseln",
      ctaButton: "Arbeiten Sie mit uns",
      missionTitle: "Unsere Mission",
      missionStatement: "Unternehmensrechtliche Beratung im Flow-Zustand",
      focusItems: [
        {
          title: "Volle Konzentration",
          description:
            "Wo wir vollständig in Ihr Rechtsprojekt vertieft und tief konzentriert sind",
        },
        {
          title: "Höchste Leistung",
          description:
            "Durch die Balance zwischen Fähigkeiten und Herausforderungen erreichen wir Spitzenleistungen. Wir steigern Effizienz, Produktivität und Output erheblich. Lassen Sie uns Ihre Ziele in Rekordzeit erreichen.",
        },
        {
          title: "Kreation & Innovation",
          description:
            "Völlig in der Aufgabe versunken, erschließen wir unser kreatives Potenzial. Wir wandeln Herausforderungen in Innovationen und Chancen um.",
        },
        {
          title: "Leichtigkeit & Erfüllung",
          description:
            "Unsere Arbeit selbst wird zutiefst befriedigend und erfüllend. Wir genießen den Prozess.",
        },
      ],
      footer: {
        imprint: "Impressum",
        address:
          "Flow State Rechtsanwaltsgesellschaft mbH<br />Bahnhofsstraße 2, 90402 Nürnberg",
        commercialRegister: "Handelsregister: Amtsgericht Nürnberg",
        managingDirector: "Geschäftsführer: Sebastian Seibold",
        vatNumber: "Umsatzsteuer-Identifikationsnummer: DE999999999",
        barAssociation: "Rechtsanwaltskammer:",
        barAssociationName: "Rechtsanwaltskammer Nürnberg",
        barAssociationWebsite: "www.rak-nbg.de",
        barAssociationAddress: "Fürther Str. 115, 90429 Nürnberg",
        copyright: "Unternehmen",
      },
    },
  };

  // Set default language
  let currentLanguage = "en";

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
    document.querySelectorAll(".footer-text")[1].textContent =
      data.footer.commercialRegister;
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

  // Initialize with default language
  updateLanguageDisplay(currentLanguage);
  updateContent(currentLanguage);

  // Set up click handlers
  deOption.addEventListener("click", function () {
    if (currentLanguage !== "de") {
      currentLanguage = "de";
      updateLanguageDisplay(currentLanguage);
      updateContent(currentLanguage);
      AOS.refresh();
    }
  });

  enOption.addEventListener("click", function () {
    if (currentLanguage !== "en") {
      currentLanguage = "en";
      updateLanguageDisplay(currentLanguage);
      updateContent(currentLanguage);
      AOS.refresh();
    }
  });
});
