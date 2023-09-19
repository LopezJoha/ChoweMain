const SHIFT_SIZE = 480;

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(4.6390329,-74.1954503),
      zoom:10,
    };
    var map = new google.maps.Map(document.getElementById("Mapa"),mapProp);
};

function mostrarMapa(){
    document.getElementById("Mapa").style.overflow="hidden";
    document.getElementById("Mapa").style.visibility="visible";    
    document.getElementById("Mapa").style.width="90%";
    document.getElementById("Mapa").style.border="2px solid black";
    document.getElementById("Mapa").style.zIndex="99"; 
    document.getElementById("cerrar").style.visibility="visible";
    document.getElementById("Mapa").style.height="26rem";
    
};

function ocultarMapa(){
    console.log("Esconder Mapa")
    document.getElementById("Mapa").style.visibility="hidden"; 
    document.getElementById("Mapa").style.height="0";
    document.getElementById("cerrar").style.visibility="hidden";   
};

function leftScroll(){
    console.log("LEFT")
    var left = document.querySelector(".Wrapper-Fifth-Media");
    left.scrollBy(-SHIFT_SIZE,0);
};

function scrollRight(){
    console.log("RIGHT")
    var right = document.querySelector(".Wrapper-Fifth-Media");
    right.scrollBy(SHIFT_SIZE,0);
};
