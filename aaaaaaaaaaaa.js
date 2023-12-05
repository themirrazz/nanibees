var f = 0;
var m = 0;
var totalBees = 0;
var generation = 0;
function addFemaleBee() {
  f++;totalBees++;
}
function addMaleBee() {
  m++;totalBees++;
}
function increaseGeneration() {
  if(generation === 0) { generation = 1; addMaleBee(); return }
  generation++;
  var ff = f, mm = m;
  for(var g = 0; g < ff; g++) { addMaleBee(); addFemaleBee(); }
  for(var k = 0; k < mm; k++) { addFemaleBee(); }
}
function fixNumber(d) {
if(d<10){return"0000"+d}else if(d<100){return"000"+d}else if(d<1000){return "00"+d}else if(d<10000){return "0"+d}else{return ""+d}
}
for(var i = 0; i < 10; i++) {
  increaseGeneration();
  console.log("| Iteration | Male bees | Female Bees | Total Bees |");
  console.log("| "+fixNumber(generation)+"    | "+fixNumber(m)+"     | "+fixNumber(6)+"      | "+fixNumber(totalBees)+"      |");
}
