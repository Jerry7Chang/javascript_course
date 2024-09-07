let G1;
let G2;
let G3;

function groceryTracker() {
 G1 = parseFloat(document.getElementById('G1').value);
 G2 = parseFloat(document.getElementById('G2').value);
 G3 = parseFloat(document.getElementById('G3').value);
 let amount = G1 + G2 + G3;
  document.getElementById('result').innerText = `The total amount is:$ ${amount}`;
}