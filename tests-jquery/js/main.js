let numMax;
$( 'p' ).each(function( index ) {
    numMax = 0;
    let test = $( this ).text().split();
    test.forEach(function (unity) {
        numMax += unity.length;
    });
    $(this).children().text("Esta paragrafo contem: " + numMax + " caracteres");
    console.log('Resultado: ' + numMax);
});
