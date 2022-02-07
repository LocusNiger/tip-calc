const bill = document.getElementById("calcBill"); /* Cant a pagar */
const people = document.getElementById("calcPeople"); /* Personas */

/* Función para redondear precios a 2 decimales */
function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

/* Recibe el porcentaje y retorna el total a pagar */
function calculate(percentage) {
  let billValue = bill.value;
  let peopleValue = people.value;
  //Solo entra a la funcion si la cuenta es válida
  if (billValue >= 1) {
    const tip = (parseFloat(percentage) * parseFloat(billValue)) / 100; /* Propina */
    if (peopleValue >= 1) {
      let tipPerPerson = tip / peopleValue; /* Propina por persona */
      let totalPerPerson = (parseFloat(billValue) + tip) / peopleValue; /* Total por persona */
      tipPerPerson = roundToTwo(tipPerPerson); //redondeo los resultados
      totalPerPerson = roundToTwo(totalPerPerson);
      document.getElementById("tip-amount").innerHTML = `$ ${tipPerPerson}`;
      document.getElementById("total-amount").innerHTML = `$ ${totalPerPerson}`;
    } else {
      // error por cant. de personas
      document.getElementById("tip-amount").innerHTML = ` `;
      document.getElementById("total-amount").innerHTML = ` `;
      document.getElementById("text-error").innerHTML = `Number of people must be greater than 1`;
    }
  } else {
    // error por cant de $
    document.getElementById("tip-amount").innerHTML = ` `;
    document.getElementById("total-amount").innerHTML = ` `;
    document.getElementById("text-error").innerHTML = `Bill cannot be less than $1.00`;
    billValue = 1;
  }
}

/* calcula el porcentaje custom */
function customCalculate() {
  let percentage = document.getElementById("customTip").value;
  if (percentage >= 1 && percentage <= 99) {
    calculate(percentage);
    document.getElementById("customTip").placeholder = `${percentage}%`; //muestro % en input
    document.getElementById("text-error").innerHTML = ``;
  } else {
    //Muestro mensaje de error
    document.getElementById(
      "text-error"
    ).innerHTML = `Wrong value. Place a value between 1% and 99%`;
    reset();
  }
  //un-focus el input
  document.getElementById("customTip").disabled = true;
  document.getElementById("customTip").disabled = false;
  document.getElementById("customTip").value = "";
}

/* botón reset */
function reset() {
  bill.value = 1;
  people.value = 1;
  document.getElementById("tip-amount").innerHTML = ` `;
  document.getElementById("total-amount").innerHTML = ` `;
}
