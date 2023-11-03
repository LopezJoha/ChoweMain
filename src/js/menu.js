
// Enlace a whatsapp 
//https://api.whatsapp.com/send?phone=%2B573108639952&fbclid=IwAR3c8nr6WIywLfARdfs7pBANK643L5-OaHM3gO7uxvIS_i-bE3UXo8XbKFo
// BASE DE DATOS

var menuItems = {
  entradas: [
    {
      id: "aritos",
      imagen: "/assets/Small/smallAros.jpg",
      title: "Aritos",
      par: "Aritos de cebolla.",
      price: 4000,
    },
  ],
  combos: [
    {
      id: "combo1",
      imagen: "/assets/Small/small1.jpg",
      title: `<span id="numeroAlitas">08</span><span class="alitas">&nbsp;Alitas</span>`,
      par: "Bañadas en 1 salsa",
      price: 15900,
    },
    {
      id: "combo2",
      imagen: "/assets/Small/small2.jpg",
      title: `<span id="numeroAlitas">16</span><span class="alitas">&nbsp;Alitas</span>`,
      par: "Bañadas en 2 salsas",
      price: 27900,
    },
    {
      id: "combo3",
      imagen: "/assets/Small/small3.jpg",
      title: `<span id="numeroAlitas">24</span><span class="alitas">&nbsp;Alitas</span>`,
      par: "Bañadas en 3 salsas",
      price: 37900,
    },
    {
      id: "combo4",
      imagen: "/assets/Small/small4.jpg",
      title: `<span id="numeroAlitas">32</span><span class="alitas">&nbsp;Alitas</span>`,
      par: "Bañadas en 4 salsas",
      price: 47900,
    },
  ],
  salsas: [
    {
      id: "bbqChowe",
      nombre: "Bbq Chowé",
    },
    {
      id: "chipotle",
      nombre: "Chipotle Dulce",
    },
    {
      id: "bbqDulce",
      nombre: "Bbq Dulce",
    },
    {
      id: "mielMostaza",
      nombre: "Miel Mostaza",
    },
    {
      id: "teriyaki",
      nombre: "Teriyaki",
    },
    {
      id: "bufalo",
      nombre: "Búfalo Picante",
    },
    {
      id: "especialChowe",
      nombre: "Especial Chowé",
    },
  ],
  bebidas: [
    {
      id: "bebida1",
      imagen: "/assets/Imagen/400ml.jpg",
      title: "Gaseosa&nbsp;400ml",
      par: "Productos Postobón",
      price: 2500,
    },
    {
      id: "bebida2",
      imagen: "/assets/Imagen/1500l.jpg",
      title: "Gaseosa&nbsp;1.5L",
      par: "Productos Postobón",
      price: 4000,
    },
    {
      id: "bebida3",
      imagen: "/assets/Imagen/3125l.jpg",
      title: "Gaseosa&nbsp;3.125L",
      par: "Productos Postobón",
      price: 6000,
    },
  ],
};

function changeButtonClasses(buttonName) {
  let botonContenedor = document.getElementById("opcionesMenuContenedor");
  let botones = botonContenedor.getElementsByClassName("MenuOption");

  for (let i = 0; i < botones.length; i++) {
    if (botones[i].id !== buttonName) {
      botones[i].classList.remove("activo");
    } else {
      botones[i].classList.add("activo");
    }
  }
}


function getMenuItems(opcionMenu) {

 
  let lista = document.getElementById("allTheFood");

  if (opcionMenu !== "combos") {
    esconderTexto();
  } else {
    mostrarTexto();
  }

  let listaItems = "";


  let currentValue = store.getState(); 
  
  function findingValue(id){
    var result; 
    if(currentValue[id]){
      console.log(currentValue[id])
      result = currentValue[id]
    }else{
      result= 0
    }
    return result; 
  }
  
  if (opcionMenu !== "salsas") {
    for (let i = 0; i < menuItems[opcionMenu].length; i++){
      var obj = menuItems[opcionMenu][i];
      let counter = findingValue(obj.id)
      listaItems += `
        <li class="food-List_element">
          <img src=${obj.imagen} class="img-list-element" />            
          <div class="List-element-one">
              <h1 class="titulo-menu">${obj.title}</h1>
              <p class="parrafo-menu">${obj.par}</p>
              <p class="parrafo-menu">$${obj.price}</p>  
          </div>
          <div id="${obj.id}" class="buttonsContainer">             
            <button id="${obj.id}" class="button__foodList menos" onclick="newSubstracting(id)">-</button>                
            <div id="${obj.id}-counter" class="parrafo-menu">${counter}</div>
            <button id="${obj.id}" class="button__foodList mas" onclick="newAdding(id)">+</button>
          <div> 
        </li>
        
        `;
    }
    lista.innerHTML = listaItems;
  } else {
    for (let i = 0; i < menuItems[opcionMenu].length; i++) {
      var obj = menuItems[opcionMenu][i];

      listaItems += `<li class="food-List_else">
                    <p class="parrafo_else"> ${obj.nombre} </p>
                    <input type="checkbox" id=${obj.id} onclick="increment(${obj.id})">
                    
                </li>`;
    }

    lista.innerHTML = listaItems;
  }
}

function esconderTexto() {
  document.getElementById("esconderTexto").style.visibility = "hidden";
  document.getElementById("esconderTexto").style.height = "0";
}

function mostrarTexto() {
  document.getElementById("esconderTexto").style.visibility = "visible";
  document.getElementById("esconderTexto").style.height = "auto";
}

const handleButtonOptionClick = (id) => {
  getMenuItems(id, changeButtonClasses(id));  
};

function showConsole(){
  console.log("Cart!")
}