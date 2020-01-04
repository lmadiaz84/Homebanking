//Declaración de variables
var nombreUsuario = "Leandro Diaz";
var saldoCuenta = 1000;
var limiteExtraccion = 3000;
var num = 0;
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    this.iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}



function cambiarLimiteDeExtraccion() {
    var ingresar = prompt();
    ingresar=parseInt(ingresar);
    if(ingresar > 0){
        var anteslimite = parseInt(limiteExtraccion);
        limiteExtraccion = ingresar;
        alert("El límite anterior era: $ "+ anteslimite +
        "\n Su nuevo límite es: $ " + limiteExtraccion);
        actualizarLimiteEnPantalla();
    }else{
        alert("Operación cancelada. No ingreso ningun valor");
    }
    
}

function extraerDinero() {
    var ingresar = prompt("Ingresa un valor a retirar $ ");
    var ingresar = parseInt(ingresar);
    var saldoanterior = parseInt(saldoCuenta);
    limiteExtraccion= parseInt(limiteExtraccion);
    alert("recuerde que sea multiplos de $100");
    if(ingresar > 0){
        if(ingresar <= limiteExtraccion && ingresar % 100 == 0 ){
            if(ingresar < saldoCuenta){
                var restanueva = restarDinero(ingresar);
                alert("Has depositado: $ " + ingresar +  
                "\nSaldo Anterior: $ " + saldoanterior + 
                "\n Saldo Nuevo: $ " + saldoCuenta);
                actualizarSaldoEnPantalla();   
            } else{
                alert("puede retirar un valor menor al pedido");
                alert("Usted desea retirar el efectivo de su cuenta: S / N");
                var a= prompt();
                if("S" == a || "s"== a){
                    ingresar = saldoCuenta;
                    var restanueva = restarDinero(ingresar);
                    alert("Operando transacción");
                    alert("Has depositado: $ " + ingresar +  
                    "\nSaldo Anterior: $ " + saldoanterior + 
                    "\n Saldo Nuevo: $ " + saldoCuenta);
                    actualizarSaldoEnPantalla();
                }else{
                    alert("Operación cancelada");
                } 
            }
            
        } else{
            alert("No puede retirar,no es multiplo de $100 o la cantidad que pide supera su limite.");
          
        }
        
    } else {
        alert("Operación cancelada");
        
    }
    
}

function depositarDinero() {
    var ingresar = prompt();
    var ingresar = parseInt(ingresar);
    if(ingresar > 0){
       var saldoanterior = parseInt(saldoCuenta);
       var sumanueva = sumaDinero(ingresar);
       alert("Has depositado: $ " + ingresar +  
       "\n Saldo Anterior: $ " + saldoanterior + 
       "\n Saldo Nuevo: $ " + saldoCuenta);
       actualizarSaldoEnPantalla(); 
    }else {
        alert("No ingreso un valor");
    }
}

function pagarServicio() {
    var opcion = prompt("Que servicio desea pagar: " + "\n 1-Agua" + "\n 2-Luz" + "\n 3-Internet" + "\n 4-Teléfono");

    switch (opcion){
        case "1":
        var a = prompt("Cuanto va a pagar de Agua: $"); 
        a= parseInt(a);
        if (a<= saldoCuenta){
            var saldoanterior = saldoCuenta;
            saldoCuenta -= a;
            alert("Has pagado el servicio de agua " + "\n Saldo anterior: $ "+ saldoanterior + "\n Dinero descontado: $ "+ a +"\n Saldo actual: $ "+ saldoCuenta);
            actualizarSaldoEnPantalla();
        }  else {
            alert("Su saldo es insuficiente");
        } 
        break;
        case "2":
        var a = prompt("Cuanto va a pagar de Luz: $"); 
        a= parseInt(a);
        if (a<= saldoCuenta){
            var saldoanterior = saldoCuenta;
            saldoCuenta -= a;
            alert("Has pagado el servicio de luz " + "\n Saldo anterior: $ "+ saldoanterior + "\n Dinero descontado: $ "+ a +"\n Saldo actual: $ "+ saldoCuenta);
            actualizarSaldoEnPantalla();
        }  else {
            alert("Su saldo es insuficiente");
        } 
        break;
        case "3":
        var a = prompt("Cuanto va a pagar de Internet: $"); 
        a= parseInt(a);
        if (a<= saldoCuenta){
            var saldoanterior = saldoCuenta;
            saldoCuenta -= a;
            alert("Has pagado el servicio de internet " + "\n Saldo anterior: $ "+ saldoanterior + "\n Dinero descontado: $ "+ a +"\n Saldo actual: $ "+ saldoCuenta);
            actualizarSaldoEnPantalla();
        }  else {
            alert("Su saldo es insuficiente");
        }
        break;
        case "4":
        var a = prompt("Cuanto va a pagar de Teléfono: $"); 
        a= parseInt(a);
        if (a<= saldoCuenta){
             var saldoanterior = saldoCuenta;
             saldoCuenta -= a;
             alert("Has pagado el servicio de teléfono " + "\n Saldo anterior: $ "+ saldoanterior + "\n Dinero descontado: $ "+ a +"\n Saldo actual: $ "+ saldoCuenta);
             actualizarSaldoEnPantalla();
        }  else {
                    alert("Su saldo es insuficiente");
        }
        break;
        default :
        alert("Valor no asignado o servicio abonado");  
    }

}

function transferirDinero() {
    var a = prompt("Elija a que cuenta amiga decea transferir dinero: "+"\n 1 -1234567"+"\n 2 -7654321");
    a= parseInt(a);
    switch(a){
        case 1: 
        alert("Usted a eligido la cuenta amiga 1234567");
        var pasar = prompt("Ingrese el valor a transferir: $ ");
        pasar = parseInt(pasar);
        if(pasar<= saldoCuenta){
            saldoCuenta -= pasar;
            var cuenta1 = pasar;
            alert("Se ha tranferido: $ "+pasar + "\ln Cuenta destino: 1234567");
            actualizarSaldoEnPantalla();
        }else {
            alert("El monto que desea tranferir es superior a su saldo actual");
        }
        break;
        case 2:
        alert("Usted a eligido la cuenta amiga 7654321");
        var pasar = prompt("Ingrese el valor a transferir: $ ");
        pasar = parseInt(pasar);
        if(pasar<= saldoCuenta){
            saldoCuenta -= pasar;
            var cuenta2 = pasar;
            alert("Se ha tranferido: $ "+pasar + "\ln Cuenta destino: 7654321");
            actualizarSaldoEnPantalla();
        }else {
            alert("El monto que desea tranferir es superior a su saldo actual");
        }
        break;
        default:
        alert("Operacion cancelada");
    }
}

function iniciarSesion() {
    var a = prompt("Ingrese su codigo de 4 digitos: ");
    a= parseInt(a);
    if(a == 1234){
        alert("Bienvenido Sr/a : "+ nombreUsuario + " ya puede comenzar a operar en tu cuenta");
    
    }else {
        alert("Código incorrecto. Tu dinero sera retenido por cuestiones de seguridad");
        iniciarSesion();
        saldoCuenta=0;
    }
}

function sumaDinero(num) {
    saldoCuenta += parseInt(num);
    actualizarSaldoEnPantalla();
}

function restarDinero(num) {
    saldoCuenta -= parseInt(num);
    actualizarSaldoEnPantalla();
}


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario ;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
