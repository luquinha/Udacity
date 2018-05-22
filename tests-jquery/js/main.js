// console.log('Funcionou');
// let p = $('p');
// console.log(p.text());
let numMax;
$( 'p' ).each(function( index ) {
    numMax = 0;
    let test = $( this ).text().split();
    test.forEach(function (unity) {
        numMax += unity.length;
    });
    console.log('Resultado: ' + numMax);
});
// console.log('Resultado: ' + numMax);
