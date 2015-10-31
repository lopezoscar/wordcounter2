var parrafo = "hola hola como estas hola";



var palabras = parrafo.split(" "); //separar palabras
console.log ('hay ', palabras.length, ' palabras');

for ( var i = 0; i < palabras.length; i++) {

	var palabraActual;
	if(palabras[i] != null) {
		palabraActual = palabras[i];


		cantOcurrencias = 1;

		for ( var j = i+1; j < palabras.length; j++) {
			if (palabraActual == palabras[j]) {
				cantOcurrencias++;
				palabras[j] = null;
			} else {};
		}

		
	};

	console.log(palabraActual + ': ' + cantOcurrencias + ' veces');	

}


 