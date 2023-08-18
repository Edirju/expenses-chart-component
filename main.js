import data from './data.json' assert {type: 'json'};

let chartBarsContainer = document.querySelector(".chart__bars-container");

let values = [];

data.forEach(element => {
  values.push(element.amount)  

  chartBarsContainer.innerHTML += `
    <div class="chart__bar">
      <div class="chart__bar--label">$${element.amount}</div>
      <div class="chart__bar--day">${element.day}</div>
    </div>
  `;
  
})
console.log(values)
let maxBarHeight = 150;
let maxValue = Math.max(...values)
console.log(maxValue)

let bars = document.querySelectorAll('.chart__bar')
bars = [...bars]

/*
  52.36 ==> 200px
  17.45 ==> x
  x = (17.45* 200) / 52.36
  */ 

bars.forEach(bar => {

  let nuevoValor = parseFloat(bar.childNodes[1].innerText.slice(1));

  let alturaActualpx = (nuevoValor * maxBarHeight) / maxValue

  bar.style.height = `${alturaActualpx}px`

  // Pintar el maximo valor de Cyan
  if (nuevoValor == maxValue) {
    bar.style.backgroundColor = "hsl(186, 34%, 60%)";
  }

  //Mostrar elemento cuando pase el mouse
  bar.addEventListener('mouseover', event =>{
    if (event.target.className != 'chart__bar--day') {
      let labelElement = event.target.childNodes[1]
      labelElement.style.display = 'block'
    }
  })
  // Quitar el elemento cuando se quite el mouse
  bar.addEventListener('mouseout', event =>{
    if (event.target.className != 'chart__bar--day') {
      let labelElement = event.target.childNodes[1];
      labelElement.style.display = "none";
    }
  })
})
