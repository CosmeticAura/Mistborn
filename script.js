const choiceButtons = document.querySelectorAll(".choice-btn");
const mistbornPanel = document.getElementById("mistborn-panel");
const mistingPanel = document.getElementById("misting-panel");
const metalSelect = document.getElementById("metalSelect");
const mistingResult = document.getElementById("mistingResult");

const mistingMap = {
  iron: {
    metal: "Iron",
    name: "Lurcher",
    ability: "Pulls metal objects.",
    explanation: "Yank weapons close or pull toward large metal anchors."
  },
  steel: {
    metal: "Steel",
    name: "Coinshot",
    ability: "Pushes metal objects.",
    explanation: "Launch coins as projectiles or propel yourself through the city."
  },
  pewter: {
    metal: "Pewter",
    name: "Thug",
    ability: "Enhances physical strength and endurance.",
    explanation: "Fight through injuries, move faster, and hit harder."
  },
  tin: {
    metal: "Tin",
    name: "Tineye",
    ability: "Enhances the senses.",
    explanation: "Scout the mists with sharper sight and hearing, but risk overload when flaring."
  },
  zinc: {
    metal: "Zinc",
    name: "Rioter",
    ability: "Intensifies emotions.",
    explanation: "Inflame anger, fear, or excitement to sway crowds and individuals."
  },
  brass: {
    metal: "Brass",
    name: "Soother",
    ability: "Calms emotions.",
    explanation: "Reduce suspicion or fear to keep attention away from the crew."
  },
  copper: {
    metal: "Copper",
    name: "Smoker",
    ability: "Hides Allomantic activity.",
    explanation: "Create a coppercloud that blocks Seekers from detecting burns."
  },
  bronze: {
    metal: "Bronze",
    name: "Seeker",
    ability: "Detects Allomancy.",
    explanation: "Sense rhythmic pulses from nearby Allomancers burning metals."
  }
};

const setActiveChoice = (choice) => {
  choiceButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.choice === choice);
  });

  if (choice === "mistborn") {
    mistbornPanel.classList.remove("hidden");
    mistingPanel.classList.add("hidden");
  } else {
    mistbornPanel.classList.add("hidden");
    mistingPanel.classList.remove("hidden");
  }
};

choiceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveChoice(btn.dataset.choice);
  });
});

if (metalSelect && mistingResult) {
  metalSelect.addEventListener("change", (event) => {
    const value = event.target.value;
    if (!value || !mistingMap[value]) {
      mistingResult.innerHTML =
        "<p class=\"result-title\">Awaiting selection</p><p class=\"result-detail\">Pick a metal to reveal the Misting name, ability, and a short explanation.</p>";
      return;
    }

    const { metal, name, ability, explanation } = mistingMap[value];
    mistingResult.innerHTML =
      `<p class="result-title">${metal}</p><p class="result-detail">Known as: ${name}</p><p class="result-detail">${ability}</p><p class="result-detail">${explanation}</p>`;
  });
}

setActiveChoice("mistborn");
