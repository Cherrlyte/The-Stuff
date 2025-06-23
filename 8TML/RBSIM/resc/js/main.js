async function loadVals() {
  const ftypesel = document.getElementById('ftype')
  const countries = document.getElementById("coo")
  await dynaLoadSelIn("rods.json", ftypesel)
  await countryFetcher(countries)
  document.querySelector('[value=CA]').setAttribute('selected', 'selected')
  updateVals()
}

async function countryFetcher(element) {
  const res = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2')
  let json = await res.json()
  json.sort(function (a, b) {
    if (a.name.common < b.name.common) { return -1 }
    else if (a.name.common > b.name.common) { return 1 }
    return 0
  })
  for (i in json) {
    const node = document.createElement('option')
    node.setAttribute("value", json[i].cca2)
    node.innerHTML = `${json[i].name.common}`
    element.appendChild(node)
  }
}

async function dynaLoadSelIn(filename, element) {
  let thejson; const res = await fetch(`./resc/json/${filename}`); thejson = await res.json()
  for (i in thejson) {
    const node = document.createElement('option')
    node.setAttribute("value", i)
    node.setAttribute("tpwr", thejson[i].mpower)
    node.setAttribute("price", thejson[i].ppr)
    node.setAttribute("drating", thejson[i].drating)
    node.innerHTML = thejson[i].name
    element.appendChild(node)
  }
}

function updateVals() {
  //HTML Elements
  let rnamef = document.getElementById('rnamef')
  let country = document.getElementById("coo").options[document.getElementById("coo").selectedIndex].getAttribute("value")
  const tpress = document.getElementById("presses")
  const ftypesel = document.getElementById('ftype')

  //External Stuff
  const flagbaseurl = "https://flagsapi.com/"

  //Actual Variables
  const rodn = document.getElementById('nrods').value
  const opname = document.getElementById("op").value
  let eee = ""
  let ROSSIYA = false
  let TPWR = parseFloat(ftypesel.options[ftypesel.selectedIndex].getAttribute('tpwr')) * parseFloat(rodn)
  let tnumber = document.getElementById('ntbines').value
  let teff = parseFloat(tpress.options[tpress.selectedIndex].getAttribute('eff'))
  let tprice = parseFloat(tpress.options[tpress.selectedIndex].getAttribute('price')) * tnumber
  let ultrascarynumber = 0
  
  tefficiency = (tnumber / 25) * parseFloat(teff)
  ultrascarynumber = (TPWR * 0.75) * tefficiency

  for (let i = 0; i < Math.sqrt(rodn); i++) {
    eee = eee + ("⬛").repeat(Math.sqrt(rodn)) + "<br/>"

  }

  if (document.getElementById('ctype').value == "ROSSIYA") {
    document.getElementById('flag').src = "./resc/img/soviet.png"
    document.getElementById('desc').setAttribute('disabled', 'true')
    document.getElementById('desc').value = "This is great soviet work! It always works as expected! No meltdown, no explosion, no nothing! Always trust highest grade soviet infrastructure, it never break and is better than western propaganda!"
    ROSSIYA = true
    rnamef.innerHTML = `USSR RBMK-${Math.floor(ultrascarynumber) * 1.2}`
  }
  else {
    ROSSIYA = false
    document.getElementById('desc').removeAttribute('disabled')
    document.getElementById('desc').value = "This is a Boiling Water Reactor. Boiling Water Reactors are Light Water Reactors, meaning they use mostly pure but chemically treated water (H²O) in its reactor cycle. Using fission, it heats up the water and vaporizes it into steam, which spins a turbine once at a high enough pressure and thus spins a generator, before being condensed back into water, chemically treated and put back into the reactor."
    document.getElementById('flag').src = flagbaseurl + `${country}/flat/64.png`
    const fname = rnamef.value ? `"${rnamef.value}"` : ''
    const fop = opname ? opname : '"Default Inc."'
    rnamef.innerHTML = `${fop} BWR-${Math.floor(ultrascarynumber)} <i>${fname}<i/>`
  }

  //Final Section Stuff
  document.getElementById("tprwt").innerHTML = `${TPWR}MWt`
  document.getElementById("epwrreal").innerHTML = `${ultrascarynumber}MWe`
  document.getElementById("tefficiency").innerHTML = `${100 * (tefficiency)}%`
  document.getElementById("test").innerHTML = eee
  if (!ROSSIYA) {
    document.getElementById("tpricefinal").innerHTML = `US$${tprice.toLocaleString('us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    document.getElementById("fuelcost").innerHTML = `US$${(parseFloat(ftypesel.options[ftypesel.selectedIndex].getAttribute('price')) * parseFloat(rodn)).toLocaleString('us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  } else {
    document.getElementById("tpricefinal").innerHTML = `₽${(80.5 * tprice).toLocaleString('us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    document.getElementById("fuelcost").innerHTML = `₽${(80.5 * ((parseFloat(ftypesel.options[ftypesel.selectedIndex].getAttribute('price')) * parseFloat(rodn)))).toLocaleString('us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }
}

for (let i = 0; i < document.getElementsByTagName('input').length; i++) {
  document.getElementsByTagName('input')[i].addEventListener('input', updateVals)
}

for (let i = 0; i < document.getElementsByTagName('select').length; i++) {
  document.getElementsByTagName('select')[i].addEventListener('change', updateVals)
}

loadVals()