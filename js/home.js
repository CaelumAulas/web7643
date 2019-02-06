//quando um botão for clicado
$('.painel button').on('click', function(){

    $(this).parent().toggleClass('expandido')

    if($(this).parent().hasClass('expandido')){
        $(this).text('ver menos')
    }
    else {
        $(this).text('ver mais')
    }

})
