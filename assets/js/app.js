
$(document).ready(function(){
    var imgItems = $('.slider li').length //me cuenta las imagenes que tengo en total.
    //console.log(imgItems);

    //agregar los circulos para que se vean dinamicos

    //$('.pagination').append('<li><span class="material-icons icon">fiber_manual_record</span></li>');//agregar al html

    for(i=1; i <= imgItems; i++){
        $('.pagination').append('<li><span class="material-icons icon">fiber_manual_record</span></li>'); 
    }

    $('.slider li').hide();//esconde todas las imagenes
    $('.slider li:first').show();//muestra el primer imagen
    $('.pagination li:first').css({'color':'#009688'});

    //Ejutando todas las funciones
    $('.pagination li').click(pagination);
    $('.left-arrow span').click(prevtSlider);
    $('.right-arrow span').click(nextSlider);

    // FUNCIONES ================================================================
    function pagination(){
        var paginationPos = $(this).index() + 1;//va a traer la posición que tiene en el index las imagenes 
        //console.log(paginationPos);
        $('.slider li').hide();
        $('.slider li:nth-child('+ paginationPos +')').fadeIn();

        $('.pagination li').css({'color':'#f1f8e9'});        
        $(this).css({'color':'#009688'});//cada circulo que realizo click se cambia de color
    }

    function nextSlider(){

        $('.slider li').hide();//ocultados todos los slider
        $('.slider li:nth-child(2)').fadeIn();//se muestra el slider seleccionado
    }

     var cont = $('#container');
    
    $('#categorias').on('change', function() {
        var selection = $('#categorias').val();
      //cont.text(selection);
      if( selection === "china") {
      cont.html('<p>Hola esto es un append Chino</p><img src="http://www.moonkitty.net/avatars/new-sailor-moon-images/new-sailor-moon-image-icon36.jpg"/><img src="http://www.moonkitty.net/avatars/new-sailor-moon-images/new-sailor-moon-image-icon36.jpg"/>');
      }
      if( selection === "venezolana") {
      cont.html('<p>Hola esto es un append Venezolano</p> <img src="http://www.moonkitty.net/avatars/sailor-moon-manga-avatar-001.jpg"/> <img src="http://www.moonkitty.net/avatars/sailor-moon-manga-avatar-001.jpg"/>');
      }
      if( selection === "arabe") {
      cont.html('<p>Hola esto es un append Árabe</p> <img src="http://images6.fanpop.com/image/photos/34800000/Sailor-Moon-icon-sailor-moon-34857518-100-100.gif"/><img src="http://images6.fanpop.com/image/photos/34800000/Sailor-Moon-icon-sailor-moon-34857518-100-100.gif"/>');
      }
      if( selection === "peruana") {
      cont.html('<p>Hola esto es un append Peruano</p> <img src="https://v.dreamwidth.org/303319/106183"/><img src="https://v.dreamwidth.org/303319/106183"/>');
      }
})

  });

