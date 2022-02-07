const bill = document.getElementById("calcBill"); /* Cant a pagar */
const people = document.getElementById("calcPeople"); /* Personas */

/* Recibe el porcentaje y retorna el total a pagar */
function calculate(percentage) {
  const billValue = bill.value;
  const peopleValue = people.value;
  const tip = (parseFloat(percentage) * parseFloat(billValue)) / 100; /* Propina */
  const tipPerPerson = tip / peopleValue; /* Propina por persona */
  document.getElementById("tip-amount").innerHTML = `$ ${tipPerPerson}`;
  const totalPerPerson = (parseFloat(billValue) + tip) / peopleValue; /* Total por persona */
  document.getElementById("total-amount").innerHTML = `$ ${totalPerPerson}`;
}

/* calcula el porcentaje custom */
function customCalculate() {
  const percentage = document.getElementById("customTip").value;
  calculate(percentage);
}
