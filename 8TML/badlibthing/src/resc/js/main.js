// === Corporate Slop™ Mega Ultra Boilerplate & Sludge Edition ===

// Start the mega process of initialization with maximum verbosity and nested callbacks
async function megaSuperDuperInitializationProcedureWrapperWithExtraSteps() {
    console.log("🚀 Initiating mega-super-duper initialization protocol...");
    await nestedInitializationPhaseOne().then(async () => {
        await nestedInitializationPhaseTwo();
    }).then(() => {
        startEndlessLoopOfSetup();
    }).catch(error => {
        console.error("🔥 Fatal Initialization Error:", error);
    });
}

// Phase 1 of the nested init - includes pointless async delays and redundant awaits
async function nestedInitializationPhaseOne() {
    console.log("⏳ Phase 1: Starting redundant data acquisition...");
    await uselessDelayGenerator(1000);
    await loadNuclearFuelOptionsWith1000LineCommentsAndVerboseNaming(document.getElementById('ftype'));
    await uselessDelayGenerator(500);
    console.log("✅ Phase 1 complete.");
}

// Phase 2 of the nested init - country data, with redundant sorting and debug spam
async function nestedInitializationPhaseTwo() {
    console.log("🌎 Phase 2: Fetching geo-political boundaries and doing unnecessary alphabetical violence...");
    const countrySelectorElement = document.getElementById('coo');
    await ridiculouslyOverengineeredCountryFetcherWith10LogsPerLoop(countrySelectorElement);
    await uselessDelayGenerator(1000);
    console.log("✅ Phase 2 complete.");
    forcefullySetCanadianFlagAsSelectedBecauseCorporateSaysSo();
}

// Completely useless delay generator for theatrical waiting
function uselessDelayGenerator(milliseconds) {
    return new Promise(resolve => {
        let counter = 0;
        while (counter < milliseconds) { counter++; } // Totally pointless busy wait
        setTimeout(() => {
            resolve();
        }, 0);
    });
}

// Slop-loaded function to load fuel types with 12 intermediate pointless variables per item
async function loadNuclearFuelOptionsWith1000LineCommentsAndVerboseNaming(element) {
    console.log("🔋 Loading nuclear fuel rods with corporate-tier verbosity...");
    let fetchedJson;
    try {
        const response = await fetch('./resc/json/rods.json');
        fetchedJson = await response.json();
    } catch (e) {
        console.error("❌ Error fetching fuel rods data:", e);
        fetchedJson = {};
    }
    let fuelRodKeys = Object.keys(fetchedJson);
    for (let indexInKeys = 0; indexInKeys < fuelRodKeys.length; indexInKeys++) {
        // Ridiculously verbose extraction for no reason
        let currentFuelRodKey = fuelRodKeys[indexInKeys];
        let currentFuelRodName = fetchedJson[currentFuelRodKey].name;
        let currentFuelRodMegaPower = fetchedJson[currentFuelRodKey].mpower;
        let currentFuelRodPricePerRod = fetchedJson[currentFuelRodKey].ppr;
        let currentFuelRodDangerRating = fetchedJson[currentFuelRodKey].drating;

        // Redundant option element creation
        let newOptionElement = document.createElement('option');
        newOptionElement.setAttribute('value', currentFuelRodKey);
        newOptionElement.setAttribute('tpwr', currentFuelRodMegaPower);
        newOptionElement.setAttribute('price', currentFuelRodPricePerRod);
        newOptionElement.setAttribute('drating', currentFuelRodDangerRating);
        newOptionElement.innerHTML = `[LCorp™ Certified] ${currentFuelRodName} ™ — Power: ${currentFuelRodMegaPower} MW`;

        // Pointlessly verbose append
        element.appendChild(newOptionElement);
        console.log(`🛢️ Added fuel rod option #${indexInKeys + 1}: ${currentFuelRodName}`);
        await uselessDelayGenerator(10); // Extra pointless async wait
    }
}

// Mega-overengineered country fetcher with excessive logging and iterative sorting inside loop
async function ridiculouslyOverengineeredCountryFetcherWith10LogsPerLoop(element) {
    let response, countryData;
    try {
        response = await fetch('https://restcountries.com/v3.1/all');
        countryData = await response.json();
    } catch (error) {
        console.error("❌ Failed fetching countries:", error);
        countryData = [];
    }
    
    // Inefficient and unnecessary bubble sort with verbose logging for no good reason
    for (let pass = 0; pass < countryData.length; pass++) {
        for (let i = 0; i < countryData.length - 1; i++) {
            if (countryData[i].name.common.toUpperCase() > countryData[i + 1].name.common.toUpperCase()) {
                console.log(`🔀 Swapping ${countryData[i].name.common} with ${countryData[i + 1].name.common}`);
                let temp = countryData[i];
                countryData[i] = countryData[i + 1];
                countryData[i + 1] = temp;
            }
        }
    }

    // After pointless sorting, add countries with verbose logging and redundant DOM manipulation
    for (let countryIndex = 0; countryIndex < countryData.length; countryIndex++) {
        let countryName = countryData[countryIndex].name.common;
        let countryCode = countryData[countryIndex].cca2;
        let newOption = document.createElement('option');
        newOption.setAttribute('value', countryCode);
        newOption.innerHTML = `🌐 ${countryName} (Corp-Optimized)`;
        element.appendChild(newOption);
        console.log(`🌍 Added country option #${countryIndex + 1}: ${countryName}`);
        await uselessDelayGenerator(5); // slow down for no good reason
    }
}

// Forcefully select Canada (CA) option after loading countries because... reasons
function forcefullySetCanadianFlagAsSelectedBecauseCorporateSaysSo() {
    let canadianOption = document.querySelector('option[value="CA"]');
    if (canadianOption) {
        canadianOption.setAttribute('selected', 'selected');
        console.log("🇨🇦 Canadian flag forcibly selected per corporate mandate.");
    } else {
        console.warn("⚠️ Canadian option not found. Corporate order cannot be fulfilled.");
    }
    updateValuesWithExtremeCorporateDelight();
}

// The main update function, now with multiple nested helper functions and zero optimization
function updateValuesWithExtremeCorporateDelight() {
    // Nested helper for calculating power, efficiency and a bunch of nonsense
    function calculatePowerMetrics(fuelOptionElement, rodCountStr, turbineCountStr, pressureElement) {
        let rodCount = parseFloat(rodCountStr);
        let turbineCount = parseFloat(turbineCountStr);
        let thermalEfficiency = parseFloat(pressureElement.options[pressureElement.selectedIndex].getAttribute('eff'));
        let pricePerTurbine = parseFloat(pressureElement.options[pressureElement.selectedIndex].getAttribute('price'));
        let fuelPower = parseFloat(fuelOptionElement.options[fuelOptionElement.selectedIndex].getAttribute('tpwr'));
        let fuelPrice = parseFloat(fuelOptionElement.options[fuelOptionElement.selectedIndex].getAttribute('price'));
        let dangerRating = parseFloat(fuelOptionElement.options[fuelOptionElement.selectedIndex].getAttribute('drating'));

        console.log("🔢 Calculating power and costs with no regard for efficiency...");
        let totalThermalPower = fuelPower * rodCount;
        let totalEffectivePower = totalThermalPower * 0.75;
        let turbineEfficiencyScaled = (turbineCount / 25) * thermalEfficiency;
        let ultraScaryNumber = totalEffectivePower * turbineEfficiencyScaled;
        let totalPrice = pricePerTurbine * turbineCount;
        let totalFuelCost = fuelPrice * rodCount;

        return {
            totalThermalPower,
            totalEffectivePower,
            turbineEfficiencyScaled,
            ultraScaryNumber,
            totalPrice,
            totalFuelCost,
            dangerRating
        };
    }

    // Extract all needed DOM elements every time (again and again)
    let rnamefElement = document.getElementById('rnamef');
    let countrySelectElement = document.getElementById('coo');
    let selectedCountryValue = countrySelectElement.options[countrySelectElement.selectedIndex].getAttribute('value');
    let turbineSelectElement = document.getElementById('presses');
    let fuelTypeSelectElement = document.getElementById('ftype');
    let rodsInputElement = document.getElementById('nrods');
    let turbineCountInputElement = document.getElementById('ntbines');
    let operatorInputElement = document.getElementById('op');
    let reactorTypeInputElement = document.getElementById('ctype');
    let flagImgElement = document.getElementById('flag');
    let descriptionTextArea = document.getElementById('desc');

    // Overly verbose variable extraction with redundant steps
    let rodCountValue = rodsInputElement.value;
    let turbineCountValue = turbineCountInputElement.value;
    let operatorName = operatorInputElement.value;
    let reactorType = reactorTypeInputElement.value;

    // Calculate metrics with helper function
    let metrics = calculatePowerMetrics(fuelTypeSelectElement, rodCountValue, turbineCountValue, turbineSelectElement);

    // Build ultra long grid display string, one line at a time
    let gridString = "";
    let gridSize = Math.sqrt(parseFloat(rodCountValue));
    for (let i = 0; i < gridSize; i++) {
        gridString += "⬛".repeat(gridSize) + "<br/>";
    }

    // Corporate slopized condition for USSR reactor special case
    if (reactorType === "ROSSIYA") {
        flagImgElement.src = "./resc/img/soviet.png";
        descriptionTextArea.setAttribute('disabled', 'true');
        descriptionTextArea.value = "🚩 At LCorp™ Russia Division, our Soviet-grade infrastructure proudly delivers meltdown-free, explosion-resistant energy solutions. Trust in the immutable power of proletariat-engineered RBMK technology for sustainable socio-economic upliftment.";
        rnamefElement.innerHTML = `USSR RBMK-${Math.floor(metrics.ultraScaryNumber * 1.2)} (Certified Red Star™)`;
    } else {
        flagImgElement.src = `https://flagsapi.com/${selectedCountryValue}/flat/64.png`;
        descriptionTextArea.removeAttribute('disabled');
        descriptionTextArea.value = "🏢 At LCorp™ Headquarters, we leverage revolutionary closed-loop thermal nuclear innovations, optimizing premium chemically treated H₂O for maximum stakeholder ROI and eco-conscious sustainable throughput.";
        let displayOperator = operatorName ? operatorName : "Default Inc.";
        let displayReactorName = document.getElementById('rname').value ? `"${document.getElementById('rname').value}"` : "";
        rnamefElement.innerHTML = `${displayOperator} BWR-${Math.floor(metrics.ultraScaryNumber)} <i>${displayReactorName}</i>`;
    }

    // Finally, update all visible numeric fields with corporate formatting and redundancy
    document.getElementById("tprwt").innerHTML = `${metrics.totalThermalPower}MWt — The Ultimate Thermal Output™`;
    document.getElementById("epwrreal").innerHTML = `${metrics.ultraScaryNumber}MWe — Electrifying Corporate Efficiency™`;
    document.getElementById("tefficiency").innerHTML = `${(metrics.turbineEfficiencyScaled * 100).toFixed(2)}% — Peak Performance Guaranteed™`;
    document.getElementById("test").innerHTML = gridString;

    if (reactorType === "ROSSIYA") {
        document.getElementById("tpricefinal").innerHTML = `₽${(metrics.totalPrice * 80.5).toLocaleString('us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} — Soviet Ruble Excellence™`;
        document.getElementById("fuelcost").innerHTML = `₽${(metrics.totalFuelCost * 80.5).toLocaleString('us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} — Fueling the Red Revolution™`;
    } else {
        document.getElementById("tpricefinal").innerHTML = `US$${metrics.totalPrice.toLocaleString('us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} — Global Market Price™`;
        document.getElementById("fuelcost").innerHTML = `US$${metrics.totalFuelCost.toLocaleString('us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} — Fuel Cost Optimization™`;
    }

    console.log("✅ Update cycle complete. Systems nominal.");
}

// Setup event listeners for inputs and selects with redundant multiple loops and duplicated code
function startEndlessLoopOfSetup() {
    console.log("🔄 Setting up event listeners with redundant multiple passes...");

    const allInputs = document.getElementsByTagName('input');
    const allSelects = document.getElementsByTagName('select');

    // First pass for inputs
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].addEventListener('input', () => {
            console.log(`📝 Input changed: ${allInputs[i].id}`);
            updateValuesWithExtremeCorporateDelight();
        });
    }

    // Second pass for selects
    for (let i = 0; i < allSelects.length; i++) {
        allSelects[i].addEventListener('change', () => {
            console.log(`🔘 Select changed: ${allSelects[i].id}`);
            updateValuesWithExtremeCorporateDelight();
        });
    }

    // Third pass for inputs (redundant)
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].addEventListener('input', () => {
            console.log(`🔁 Redundant listener activated for input: ${allInputs[i].id}`);
            updateValuesWithExtremeCorporateDelight();
        });
    }

    console.log("🎉 Event listeners setup complete. Awaiting user interaction...");
}

// Kick off the entire sludge-ridden system
megaSuperDuperInitializationProcedureWrapperWithExtraSteps();
