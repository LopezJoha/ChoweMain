function sendEmail() {
    let nombreForm = document.getElementById("nombre");
    let celForm = document.getElementById("celular");
    let correoForm = document.getElementById("correo");
    let mensajeForm = document.getElementById("mensaje");
      

	Email.send({
        Host: "smtp.gmail.com",
        Username : "chowebogota@gmail.com",
        Password : "Admin1234567890*",
        To : `${correoForm.value}, chowebogota@gmail.com`,
        From : "chowebogota@gmail.com",
        Subject : "Confirmación Correo Electrónico",
        Body : `Este mensaje fue remitido por:${correoForm.value}, los datos de contacto proporcionados son
            Nombre: ${nombreForm.value} y el mensaje es el siguiente: ${mensajeForm.value}` 
	}).then(function (message){
         alert("Mensaje Enviado Exitosamente");
         document.getElementById("formulario").reset();
    });
};


function moveMenu(){

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header_Lista2").className = "cambio_Lista2";
        document.getElementById("header_Lista3").className = "cambio_Lista3";
        document.getElementById("header_Cont2").className = "cambio_header_Cont2";
        document.getElementById("arrowUp").style.visibility="visible";
        document.getElementById("borde-Img").className="borde-img";
        document.getElementById("imagen-Header").className="img-header";
            }else {
                    document.getElementById("header_Lista2").className = "header-contenido1__list2";
                    document.getElementById("header_Lista3").className = "header-contenido2__list1";
                    document.getElementById("header_Cont2").className = "header-contenido2";
                    document.getElementById("arrowUp").style.visibility="hidden"; 
                    document.getElementById("borde-Img").className="Img-Borde";
                    document.getElementById("imagen-Header").className="header-imagen";
                    }
        
};

function smallNavButton(){
    let menuSmall = document.getElementById("header_Lista3");  
    menuSmall.classList.toggle('visible');  
  
    
};

window.addEventListener('scroll', function(){
    let menuSmall = document.getElementById("header_Lista3");
    if (menuSmall.classList == 'visible'){
        menuSmall.classList.toggle('navBar');
    } else{       
        menuSmall.className = "navBar"
    }     
    
});
