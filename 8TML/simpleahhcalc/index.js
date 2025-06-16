function die(){
  let res = 0
  const n1 = parseFloat(document.getElementById('one').value)
  const n2 = parseFloat(document.getElementById('two').value)
  try{
    res = n1+n2
  }catch(e){
    console.log(e)
    document.getElementById('results').innerHTML = "NaN"
    return
  }
  res = n1+n2
  document.getElementById('results').innerHTML = res
}