function cadastrarNewsletter () {
    let email = document.getElementbyId ("campo-email").value 
    alert(email) 
    console.log(email)
}

$("#barras").click(function() {

      $("#menu").toggleClass("menu-ativo");

     Toggle
   if( $("#menu").hasClass("menu-ativo") ) {
         $("#menu").removeClass("menu-ativo")
       } else {
           $("#menu").addClass("menu-ativo")
        }

})