


const marcos = (num1, num2, num3)=> {
	    return (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
}
const julieta = (num1, num2, num3)=> {
	    return (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
}
const emanuel = (num1, num2, num3)=> {
	    return (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
}
const maria = (num1, num2, num3)=> {
	    return (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;;
}


alert("Calcula la nota final de tus alumnos");
let operacion = prompt("1: Marcos,  2: Julieta,  3: Emanuel,  4: Maria");

let numero1 = prompt("primer Trimestre");
let numero2 = prompt("segundo Trimestre");
let numero3 = prompt("tercer Trimestre");


class alumnos {
	constructor (nombre, grado, resultado) {
		this.nombre = nombre;
			this.grado = grado;
				this.info = `${this.nombre} esta en ${this.grado} grado, su nota final es `
		}

	pase() {
		if (this.grado >= 7) {
			alert("pase de grado")

						} else {
							alert("repeti")
						}
					}



				}

				const Marcos = new alumnos("Marcos", "7")

				const Julieta = new alumnos ("Julieta", "5")

				const Emanuel = new alumnos("Emanuel", "7°")

				const Maria = new alumnos("Maria", "6")





				if (operacion == 1 && numero1 <= 10 && numero2 <= 10 && numero3 <= 10) {

					    resultado = marcos(numero1, numero2, numero3);
						    alert(Marcos.info + resultado);
							    Marcos.pase();

				} else if (numero1 > 10) {
					    alert("el primer trimestre supero la nota maxima 10")
				} else if (numero2 > 10) {
					    alert("el segundo trimestre supero la nota maxima 10")
				} else if (numero3 > 10) {
					    alert("el tercer trimestre supero la nota maxima 10")
				}

				if (operacion == 2 && numero1 <= 10 && numero2 <= 10 && numero3 <= 10) {

					    resultado = julieta(numero1, numero2, numero3);
						    alert(Julieta.info + resultado);
							    Julieta.pase();
				}

				if (operacion == 3 && numero1 <= 10 && numero2 <= 10 && numero3 <= 10) {

					    resultado = emanuel(numero1, numero2, numero3);
						    alert(Emanuel.info + resultado);
							    Emanuel.pase();
				}

				if (operacion == 4 && numero1 <= 10 && numero2 <= 10 && numero3 <= 10) {

					    resultado = maria(numero1, numero2, numero3);
						    alert(Maria.info + resultado);
							    Maria.pase();
				}

