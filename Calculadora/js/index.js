var nueve = document.getElementById("9");
var ocho = document.getElementById("8");
var siete = document.getElementById("7");
var sies = document.getElementById("6");
var cinco = document.getElementById("5");
var cuatro = document.getElementById("4");
var tres = document.getElementById("3");
var dos = document.getElementById("2");
var uno = document.getElementById("1");
var division = document.getElementById("/");
var multiplicacion = document.getElementById("X");
var resta = document.getElementById("-");
var suma = document.getElementById("+");
var punto = document.getElementById(".");
var resultado = document.getElementById("=");
var reiniciar = document.getElementById("reiniciar");
var pantalla = document.getElementById("pantalla");


var numero1 = 0;
var numero2 = 0;
var oper = "";
var error = true;

function button_content(num) {
	if(pantalla.innerHTML == ' Resultado ' || pantalla.innerHTML == 'Math Error' || pantalla.innerHTML == 'Math Error / 0'){
		pantalla.innerHTML = num;
	}else if(pantalla.innerHTML.length < 9){
		pantalla.innerHTML = pantalla.innerHTML + num;
	}else{
		console.log("El numero ingreasdo no puede ser mayor a 9");
	}
}

function reset(){
	pantalla.innerHTML = ' Resultado ';
}

function reset2(){
	pantalla.innerHTML = ' Resultado ';
	numero1 = 0;
	numero2 = 0;
}

function operacion(operador){
	oper = operador;
	if(numero1 == 0){
		numero1 = pantalla.innerHTML;
		reset();
	}else{
		numero2 = pantalla.innerHTML;

		reset();
	}

}

//El String mostrado en pantalla no puede ser mas grande de 9 caracteres
function result(){
	numero2 = pantalla.innerHTML;

	if(numero2 != ' Resultado '){
		if(oper == 'X' && (numero1 * numero2) < 999999999){
			pantalla.innerHTML = numero1 * numero2;
			error = false;
		}
		if(oper == '/' && (numero1 / numero2) < 999999999){
			if(numero2==0){
				pantalla.innerHTML = "Math Error / 0";
				numero1 = 0;
				numero2 = 0;
				console.log("division por cero no esta definida");
			}else{
				pantalla.innerHTML = numero1 / numero2;
			}
			error = false;
		}
		if(oper == '-' && (numero1 - numero2) < 999999999){
			pantalla.innerHTML = numero1 - numero2;
			error = false;
		}
		if(oper == '+' && (numero1 + numero2) < 999999999){
			pantalla.innerHTML = numero1*1 + numero2*1;
			error = false;
		}
		

		numero1 = pantalla.innerHTML;
		numero2 = 0;
		oper = "";

		if(error){
			pantalla.innerHTML = "Math Error";
			numero1 = 0;
			numero2 = 0;
		}
		error = true;
	}
}