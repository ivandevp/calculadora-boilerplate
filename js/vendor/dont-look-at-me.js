+function() {
	// Elementos
	var suma = document.getElementById("suma");
	var resta = document.getElementById("resta");
	var multiplicacion = document.getElementById("multiplicacion");
	var division = document.getElementById("division");
    
    // Función principal
    var operar = function (operacion) {
        var numero1 = document.getElementById("numero1").value;
		var numero2 = document.getElementById("numero2").value;
		var resultado = document.getElementById("resultado");
		resultado.textContent = operacion(numero1, numero2);
    };
    
	// Manejadores de Evento
	suma.addEventListener("click", function () {
        operar(sumar);
	});
	resta.addEventListener("click", function () {
        operar(restar);
	});
	multiplicacion.addEventListener("click", function () {
        operar(multiplicar);
	});
	division.addEventListener("click", function () {
        operar(dividir);
	});
}();