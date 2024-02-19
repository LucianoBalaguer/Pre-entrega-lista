//varaibles alojadas

//Precios de la seccion Masculina
let remeraPrimerModeloM = 15500
let remeraSegundoModeloM = 13000
let remeraTercerModeloM = 17700

let bermudasPrimerModeloM = 20500
let bermudasSegundoModeloM = 14000
let bermudasTercerModeloM = 18700

let mayasPrimerModeloM = 15500
let mayasSegundoModeloM = 13000
let mayasTercerModeloM = 18200

//Precios de la seccion Femenina

let remeraPrimerModeloF = 18500
let remeraSegundoModeloF = 22500
let remeraTercerModeloF = 20222

let jogginsPrimerModeloF = 21500
let jogginsSegundoModeloF = 27500
let jogginsTercerModeloF = 20850

let camperasPrimerModeloF = 32500
let camperasSegundoModeloF = 42750
let camperasTercerModeloF = 25200

//Bienvenida (USUARIO)
let nombre=prompt("Ingrese su nombre para empezar a navegar...")
alert("Bienvenido " + nombre + " a la familia más grande de ropa deportiva");
let saldoCuenta = parseInt(prompt("Ingrese su saldo $$"))
let genero = prompt("Seleccione el genero de ropa para navegar. Ingrese... \n-M para masculino \n-F para femenino");

//funcion descontar la plata de las prendas 

function cobroDeLaPrenda(precio){
    let resultado= (saldoCuenta - precio)
    return resultado
}

//seccion MASCULINA
if (genero == "M" ||  genero=="m"){
    alert ("Ingreso a la seccion Masculina");
    let selecion= prompt ("Seleccione el tipo de prenda deseada: \n1-Remeras \n2-Bermudas \n3-Mayas");
    
    switch(selecion){

        case "1": alert("Selecciono Remeras");
        let selecionarModelo1= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $15.500 \n2° modelo / $13.000 \n3° modelo / $17.700")
            
            switch(selecionarModelo1){

            case "1": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=remeraPrimerModeloM){saldoFinal= cobroDeLaPrenda(remeraPrimerModeloM)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo1= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo1 != "C")
                //condicion de salida
                selecionarModelo1= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "2": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=remeraSegundoModeloM){saldoFinal= cobroDeLaPrenda(remeraSegundoModeloM)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            //saldoFinal= cobroDeLaPrenda(remeraSegundoModeloM)
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo1= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo1 != "C")
                //condicion de salida
                selecionarModelo1= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "3": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=remeraTercerModeloM){saldoFinal= cobroDeLaPrenda(remeraTercerModeloM)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo1= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo1 != "C")
                //condicion de salida
                selecionarModelo1= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")

        break;

        case "2": alert("Selecciono Bermudas");

        let selecionarModelo2= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $20.500 \n2° modelo / $14.000 \n3° modelo / $18.700")
            
            switch(selecionarModelo2){

            case "1": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=bermudasPrimerModeloM){saldoFinal= cobroDeLaPrenda(bermudasPrimerModeloM)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo2= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo2 != "C")
                //condicion de salida
                selecionarModelo2= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "2": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=bermudasSegundoModeloM){saldoFinal= cobroDeLaPrenda(bermudasSegundoModeloM)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo2= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo2 != "C")
                //condicion de salida
                selecionarModelo2= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "3": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=bermudasTercerModeloM){saldoFinal= cobroDeLaPrenda(bermudasTercerModeloM)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo2= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo2 != "C")
                //condicion de salida
                selecionarModelo2= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")

        break;

        case "3": alert("Selecciono Mayas");

        let selecionarModelo3= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $15.500 \n2° modelo / $13.000 \n3° modelo / $18.200")
            
            switch(selecionarModelo3){

            case "1": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=mayasPrimerModeloM){saldoFinal= cobroDeLaPrenda(mayasPrimerModeloM)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo3= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo3 != "C")
                //condicion de salida
                selecionarModelo3= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "2": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=mayasSegundoModeloM){saldoFinal= cobroDeLaPrenda(mayasSegundoModeloM)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo3= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo3 != "C")
                //condicion de salida
                selecionarModelo3= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "3": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=mayasTercerModeloM){saldoFinal= cobroDeLaPrenda(mayasTercerModeloM)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo3= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo3 != "C")
                //condicion de salida
                selecionarModelo3= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")

        break;

    }
    


}else{
//seccion Femenina
if (genero == "F" ||  genero=="f"){
        alert ("Ingreso a la seccion Femenina");
        let selecionarModelo4= prompt ("Seleccione el tipo de prenda deseada: \n1-Remeras manga larga \n2-joggins \n3-camperas");

            switch(selecionarModelo4){

            case "1": alert("Selecciono Remeras manga larga");
            let selecionarModelo4= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $18.500 \n2° modelo / $22.500 \n3° modelo / $20.222")
            
            switch(selecionarModelo4){

            case "1": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=remeraPrimerModeloF){saldoFinal= cobroDeLaPrenda(remeraPrimerModeloF)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo4= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo4 != "C")
                //condicion de salida
                selecionarModelo4= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "2": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=remeraSegundoModeloF){saldoFinal= cobroDeLaPrenda(remeraSegundoModeloF)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo4= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo4 != "C")
                //condicion de salida
                selecionarModelo4= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "3": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=remeraTercerModeloF){saldoFinal= cobroDeLaPrenda(remeraTercerModeloF)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo4= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo4 != "C")
                //condicion de salida
                selecionarModelo4= prompt("... Introdusca C- para confirmar la compra")
            break;


            }
            alert("Hasta la proxima!")

            break;

            case "2": alert("Selecciono Joggins");

            let selecionarModelo5= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $21.500 \n2° modelo / $27.500 \n3° modelo / $20.850");

            switch(selecionarModelo5){

            case "1": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=jogginsPrimerModeloF){saldoFinal= cobroDeLaPrenda(jogginsPrimerModeloF)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo5= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo5 != "C")
                //condicion de salida
                selecionarModelo5= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "2": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=jogginsSegundoModeloF){saldoFinal= cobroDeLaPrenda(jogginsSegundoModeloF)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo5= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo5 != "C")
                //condicion de salida
                selecionarModelo5= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "3": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=jogginsTercerModeloF){saldoFinal= cobroDeLaPrenda(jogginsTercerModeloF)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo5= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo5 != "C")
                //condicion de salida
                selecionarModelo5= prompt("... Introdusca C- para confirmar la compra")
            break;
            }
            alert("Hasta la proxima!")
            break;

            case "3": alert("Selecciono Camperas");
            let selecionarModelo6= prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $32.500 \n2° modelo / $42.750 \n3° modelo / $25.200");

            switch(selecionarModelo6){

            case "1": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=camperasPrimerModeloF){saldoFinal= cobroDeLaPrenda(camperasPrimerModeloF)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo6= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo6 != "C")
                //condicion de salida
                selecionarModelo6= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "2": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=camperasSegundoModeloF){saldoFinal= cobroDeLaPrenda(camperasSegundoModeloF)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo6= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo6 != "C")
                //condicion de salida
                selecionarModelo6= prompt("... Introdusca C- para confirmar la compra")
            break;

            case "3": alert("Seleccionaste la prenda deseada!");
            if(saldoCuenta>=camperasTercerModeloF){saldoFinal= cobroDeLaPrenda(camperasTercerModeloF)}else{
                alert("No hay saldo suficiente! (El precio mínimo en esta pagina es de $13.000...");
            };
            alert("El precio se desconto, el saldo restante cera de: " + saldoFinal)
            selecionarModelo6= prompt("... Introdusca C- para confirmar la compra y cerrar la tienda")
            while(selecionarModelo6 != "C")
                //condicion de salida
                selecionarModelo6= prompt("... Introdusca C- para confirmar la compra")
            break;
            }
            alert("Hasta la proxima!")
            break;
        } 
    }   
}