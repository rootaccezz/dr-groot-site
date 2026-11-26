/* ======================================================== */
/* DR. GROOT INTERACTIVE SCALP & HAIR SOLUTION FINDER JS   */
/* ======================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // --- STATE ---
  const state = {
    currentStep: 1,
    concern: null,
    productType: null,
    secondaryGoal: null,
  };

  // --- PRODUCTS DATA ---
  const products = {
    // --- HAIR THINNING & LOSS REGIMEN ---
    thickeningShampoo: {
      name: "Dr. Groot Hair Thickening Shampoo",
      tag: "Regimen Step 1: Hair Loss Solution",
      image: "/wp-content/uploads/2026/05/Dr.-Groot-Hair-Thickening-Shampoo.png",
      features: [
        "Infused with biotin, capsulated prebiotics, and black yeast extract.",
        "Clinically proven to reduce hair loss due to breakage by 82.2%.",
        "Deeply cleanses pore-clogging sebum and buildup by 76%.",
        "Free from sulfates, silicones, and parabens."
      ],
      buyUrl: "https://www.amazon.com/dp/B0CGSLVL8T?tag=drgroot07-20&ref_=dg4rv2Bm4"
    },
    thickeningConditioner: {
      name: "Dr. Groot Hair Thickening Conditioner",
      tag: "Regimen Step 3: Moisture & Softness",
      image: "/wp-content/uploads/2026/05/Dr-Groot-Hair-Thikening-Conditioner.png",
      features: [
        "Nourishes hair fibers to prevent friction breakage by 82%.",
        "Formulated with capsulated prebiotics to support scalp ecosystem.",
        "Leaves fine and thinning hair feeling softer, fuller, and weightless.",
        "Dermatologist tested and safe for colored/treated hair."
      ],
      buyUrl: "https://www.amazon.com/dp/B0DK263J67?tag=drgroot07-20&ref_=dg4ruwO4K"
    },
    miracleTreatment: {
      name: "Dr. Groot Miracle In-Shower Scalp Treatment",
      tag: "Regimen Step 2: Deep Exfoliation & Hydration",
      image: "/wp-content/uploads/2026/02/Dr-Groot-Miracle-in-Shower-Moisturizing-Treatment.png",
      features: [
        "Unique 5-second liquid-to-cream formula turns creamy on contact with wet hair.",
        "Clinically shown to boost scalp moisture by 169% instantly.",
        "Gently exfoliates scalp pores to remove dry flakes and excessive sebum.",
        "Harper's Bazaar 2024 Award Winner for Best Scalp Conditioner."
      ],
      buyUrl: "https://www.amazon.com/dp/B0CGS2D8J8?tag=drgroot07-20&ref_=dg4b7XF0K"
    },
    thickeningSerum: {
      name: "Dr. Groot Hair Thickening Roll-On Serum",
      tag: "Regimen Step 4: Active Follicle Stimulator",
      image: "/wp-content/uploads/2026/02/Dr-Groot-Hair-Thickening-Roll-On-Serum-Roller.png",
      features: [
        "Direct-to-scalp triple roller massage head stimulates blood flow.",
        "Concentrated prebiotics and biotin fuel active hair root cells.",
        "Lightweight leave-in formula that absorbs quickly without grease.",
        "Clinically proven to strengthen roots for visibly thicker hair."
      ],
      buyUrl: "https://www.amazon.com/dp/B0DK22L979?tag=drgroot07-20&ref_=dg4qUJNeQ"
    },

    // --- DAMAGE & BOND REPAIR REGIMEN ---
    bondShampoo: {
      name: "Dr. Groot Bond Fortifying Shampoo",
      tag: "Bond Repair Step 1: Reconstructive Cleanse",
      image: "/wp-content/uploads/2026/05/Dr-Groot-Bond-Fortifying-Shampoo.png",
      features: [
        "Patented bond-building formula reconstructs hair fibers.",
        "Reduces split-end breakage and increases hair strand diameter.",
        "Gently cleanses chemical/heat-damaged hair without stripping moisture.",
        "Enriched with amino acids and hydrolyzed keratin proteins."
      ],
      buyUrl: "https://www.amazon.com/dp/B0CGS1QWW8?tag=drgroot07-20&ref_=dg4rCYEfp"
    },
    bondConditioner: {
      name: "Dr. Groot Bond Fortifying Conditioner",
      tag: "Bond Repair Step 3: Cuticle Smoothing Shield",
      image: "/wp-content/uploads/2026/02/Dr-Groot-Bond-Fortifying-Conditioner.png",
      features: [
        "Fills in micro-gaps along the hair cuticle to prevent split ends.",
        "Locks in moisture and leaves damaged hair silky and tangle-free.",
        "Protects hair from heat styling damage and UV exposure.",
        "Adds brilliant gloss and mirror-like shine to dull locks."
      ],
      buyUrl: "https://www.amazon.com/dp/B0CGS5BNR1?tag=drgroot07-20&ref_=dg4tUXoFR"
    },
    bondTreatment: {
      name: "Dr. Groot Bond Fortifying Keratin Mask",
      tag: "Bond Repair Step 2: Intensive Reconstructing Mask",
      image: "/wp-content/uploads/2026/02/Dr-Groot-Bond-Fortifying-Keratin-Treatment.png",
      features: [
        "Intensive mask treatment for severely bleached, colored, or styled hair.",
        "High concentration of plant-derived proteins rebuilds weak bonds.",
        "Restores structural integrity and natural elasticity to hair fibers.",
        "Reverses chemical damage from bleach, perm, or dye."
      ],
      buyUrl: "https://www.amazon.com/dp/B0CGSGT9QV?tag=drgroot07-20&ref_=dg4aRUwkv"
    },
    bondSerum: {
      name: "Dr. Groot Bond Fortifying Hair Care Serum",
      tag: "Bond Repair Step 4: Weightless Split-End Sealer",
      image: "/wp-content/uploads/2026/02/Dr-Groot-Bond-Fortifying-Hair-Care-Serum.png",
      features: [
        "Leave-in split-end sealer and daily leave-in protective shield.",
        "Shields hair from hot styling tools up to 450°F (230°C).",
        "Lightweight leave-in fluid that adds high-gloss shine.",
        "Controls stubborn frizz and flyaways in high humidity."
      ],
      buyUrl: "https://www.amazon.com/dp/B0CGSKSLQT?tag=drgroot07-20&ref_=dg3P1HV6L"
    },

    // --- SPECIALTY PRODUCTS ---
    clayShampoo: {
      name: "Dr. Groot Purifying Clay Shampoo",
      tag: "Oily Scalp Care: Sebum & Impurities Control",
      image: "/wp-content/uploads/2026/05/Dr-Groot-Purifying-Clay-Shampoo.png",
      features: [
        "Formulated with natural clay minerals to absorb excessive sebum.",
        "Purifies scalp pores, keeping hair fresh and light for 48 hours.",
        "Regulates sebum production without stripping natural moisture.",
        "Provides a cool, tingling sensation to refresh oily scalps."
      ],
      buyUrl: "https://www.amazon.com/stores/page/16F8F305-EB3B-472D-B3B4-1EF0DB558A74?tag=drgroot07-20&ref_=dg3Oxjb6l"
    },
    antiDandruffShampoo: {
      name: "Dr. Groot Anti-Dandruff Scalp Care Shampoo",
      tag: "Flake & Itch Defense: Soothing Scalp Care",
      image: "/wp-content/uploads/2026/02/Dr-Groot-Anti-Dandruff-Scalp-Care-Shampoo.png",
      features: [
        "Active anti-dandruff formula clears flakes and dry skin scaling.",
        "Soothes scalp redness, tightness, and constant itching.",
        "Infused with soothing cica extract and prebiotics.",
        "Mild, pH-balanced formula safe for sensitive, reactive skin."
      ],
      buyUrl: "https://www.amazon.com/dp/B0CTJ5RRKQ?tag=drgroot07-20&ref_=dg3ZWsQWr"
    },
    scalpReliefTonic: {
      name: "Dr. Groot Scalp Relief Soothing Tonic",
      tag: "Sensitized Scalp: Immediate Itch Relief",
      image: "/wp-content/uploads/2026/05/Dr-Groot-Scalp-Relief-Tonic.png",
      features: [
        "Leave-in cooling tonic spray for instant itch and redness relief.",
        "Provides dynamic hydration to dry, scaling, or flake-prone scalps.",
        "Non-sticky, quick-dry formula can be used anytime throughout the day.",
        "Reinforces the natural skin barrier on your scalp."
      ],
      buyUrl: "https://www.amazon.com/dp/B0DNLMNTH2?tag=drgroot07-20&ref_=dg3ZStg0b"
    }
  };

  // --- ELEMENT SELECTORS ---
  const progressLine = document.getElementById("groot-quiz-progress-line");
  const stepNodes = [
    document.getElementById("groot-step-1"),
    document.getElementById("groot-step-2"),
    document.getElementById("groot-step-3"),
    document.getElementById("groot-step-4")
  ];
  const panes = [
    document.getElementById("quiz-step-pane-1"),
    document.getElementById("quiz-step-pane-2"),
    document.getElementById("quiz-step-pane-3"),
    document.getElementById("quiz-step-pane-result")
  ];

  // --- TRANSITION FUNCTION ---
  function goToStep(nextStep) {
    const currentPane = panes[state.currentStep - 1];
    const nextPane = panes[nextStep - 1];

    // Fade out current pane
    currentPane.classList.add("fade-out");

    setTimeout(() => {
      // Hide current pane
      currentPane.classList.remove("active", "fade-out");

      // Update state step
      state.currentStep = nextStep;

      // Show next pane
      nextPane.classList.add("active");

      // Update stepper nodes
      stepNodes.forEach((node, idx) => {
        const stepNum = idx + 1;
        if (stepNum < nextStep) {
          node.classList.remove("active");
          node.classList.add("completed");
        } else if (stepNum === nextStep) {
          node.classList.add("active");
          node.classList.remove("completed");
        } else {
          node.classList.remove("active", "completed");
        }
      });

      // Update progress line width
      const percentages = [0, 33.3, 66.6, 100];
      progressLine.style.width = `${percentages[nextStep - 1]}%`;

      // If results pane, run evaluation
      if (nextStep === 4) {
        showResults();
      }
    }, 350);
  }

  // --- RECOMMENDATION LOGIC ---
  function evaluateRecommendation() {
    const { concern, productType } = state;

    // --- HAIR THINNING & LOSS PATH ---
    if (concern === "hair-thinning") {
      switch (productType) {
        case "shampoo":
          return products.thickeningShampoo;
        case "conditioner":
          return products.thickeningConditioner;
        case "treatment":
          return products.miracleTreatment;
        case "serum":
          return products.thickeningSerum;
        default:
          return products.thickeningShampoo;
      }
    }

    // --- DAMAGE & BOND REPAIR PATH ---
    if (concern === "damaged-hair") {
      switch (productType) {
        case "shampoo":
          return products.bondShampoo;
        case "conditioner":
          return products.bondConditioner;
        case "treatment":
          return products.bondTreatment;
        case "serum":
          return products.bondSerum;
        default:
          return products.bondShampoo;
      }
    }

    // --- OILY SCALP PATH ---
    if (concern === "oily-scalp") {
      switch (productType) {
        case "shampoo":
          return products.clayShampoo;
        case "conditioner":
          return products.thickeningConditioner;
        case "treatment":
          return products.miracleTreatment;
        case "serum":
          return products.thickeningSerum;
        default:
          return products.clayShampoo;
      }
    }

    // --- DRY & ITCHY SCALP PATH ---
    if (concern === "dry-itchy") {
      switch (productType) {
        case "shampoo":
          return products.antiDandruffShampoo;
        case "conditioner":
          return products.thickeningConditioner;
        case "treatment":
          return products.miracleTreatment;
        case "serum":
          return products.scalpReliefTonic;
        default:
          return products.antiDandruffShampoo;
      }
    }

    // Default Fallback
    return products.thickeningShampoo;
  }

  // --- DISPLAY RESULTS ---
  function showResults() {
    const recommendation = evaluateRecommendation();

    // Elements
    const resultImg = document.getElementById("groot-result-image");
    const resultTag = document.getElementById("groot-result-tag");
    const resultTitle = document.getElementById("groot-result-title");
    const resultFeatures = document.getElementById("groot-result-features");
    const resultBuyBtn = document.getElementById("groot-result-buy");

    // Populate
    resultImg.src = recommendation.image;
    resultImg.alt = recommendation.name;
    resultTag.textContent = recommendation.tag;
    resultTitle.textContent = recommendation.name;
    resultBuyBtn.href = recommendation.buyUrl;

    // Features list
    resultFeatures.innerHTML = "";
    recommendation.features.forEach(feature => {
      const li = document.createElement("li");
      li.textContent = feature;
      resultFeatures.appendChild(li);
    });
  }

  // --- EVENT LISTENERS ---

  // Step 1 Options
  document.querySelectorAll("#quiz-step-pane-1 .groot-quiz-option").forEach(option => {
    option.addEventListener("click", () => {
      // Clear selections
      document.querySelectorAll("#quiz-step-pane-1 .groot-quiz-option").forEach(opt => opt.classList.remove("selected"));
      option.classList.add("selected");

      // Save value
      state.concern = option.getAttribute("data-value");

      // Auto-advance
      setTimeout(() => {
        goToStep(2);
      }, 400);
    });
  });

  // Step 2 Options
  document.querySelectorAll("#quiz-step-pane-2 .groot-quiz-option").forEach(option => {
    option.addEventListener("click", () => {
      // Clear selections
      document.querySelectorAll("#quiz-step-pane-2 .groot-quiz-option").forEach(opt => opt.classList.remove("selected"));
      option.classList.add("selected");

      // Save value
      state.productType = option.getAttribute("data-value");

      // Auto-advance
      setTimeout(() => {
        goToStep(3);
      }, 400);
    });
  });

  // Step 3 Options
  document.querySelectorAll("#quiz-step-pane-3 .groot-quiz-option").forEach(option => {
    option.addEventListener("click", () => {
      // Clear selections
      document.querySelectorAll("#quiz-step-pane-3 .groot-quiz-option").forEach(opt => opt.classList.remove("selected"));
      option.classList.add("selected");

      // Save value
      state.secondaryGoal = option.getAttribute("data-value");

      // Auto-advance
      setTimeout(() => {
        goToStep(4);
      }, 400);
    });
  });

  // Reset Button
  const resetBtn = document.getElementById("groot-result-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Reset state
      state.currentStep = 1;
      state.concern = null;
      state.productType = null;
      state.secondaryGoal = null;

      // Clear HTML selections
      document.querySelectorAll(".groot-quiz-option").forEach(opt => opt.classList.remove("selected"));

      // Go back to step 1
      const currentPane = panes[3]; // result pane
      currentPane.classList.remove("active");
      panes[0].classList.add("active");

      // Reset Stepper Progress Nodes
      stepNodes.forEach((node, idx) => {
        if (idx === 0) {
          node.classList.add("active");
        } else {
          node.classList.remove("active", "completed");
        }
      });

      // Reset progress line width
      progressLine.style.width = "0%";
    });
  }
});