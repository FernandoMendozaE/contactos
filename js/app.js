var agregarContacto = document.getElementById('agregar');
var formulario = document.getElementById('formulario_crear_usuario');
var action = formulario.getAttribute('action');
var divCrear = document.getElementById('crear_contactos');
var tablaRegistrados =  document.getElementById('registrados');
var checkboxes = document.getElementsByClassName('borrar_contacto');
var btn_borrar = document.getElementById('btn_borrar');
var tableBody = document.getElementsByTagName('tbody');
var divExistentes = document.getElementsByClassName('existentes');
var inputBuscador = document.getElementById('buscador');
var totalRegistros = document.getElementById('total');
var checkTodos =  document.getElementById('borrar_todos');


////*Crear usuario*////

function registroExitoso(nombre){
	
	//crear div y agregar un id
	var divMensaje =  document.createElement('DIV');
	divMensaje.setAttribute('id', "mensaje");

	//agregar texto
	var texto = document.createTextNode('Creado: ' + nombre);
	divMensaje.appendChild(texto);

	divCrear.insertBefore(divMensaje, divCrear.childNodes[4]);

	//agregar la clase mostrar
	divMensaje.classList.add('mostrar');

	//ocultar el mensaje de creacion
	setTimeout(function(){
		divMensaje.classList.add('ocultar');
		setTimeout(function(){
			var divPadreMensaje = divMensaje.parentNode;
			divPadreMensaje.removeChild(divMensaje);
		}, 500);
	}, 3000);	
}

//contruir template para insertar datos dinamicamente
function construirTemplate(numero, nombre, nit, producto, precio, cantidad, total, registro_id){
	//crear numero
	var tdNumero = document.createElement('TD');
	var textonum = document.createTextNode(numero);
	var parrafoNum = document.createElement('P');
	parrafoNum.appendChild(textonum);
	tdNumero.appendChild(parrafoNum);

	//Crear input con el numero
	var inputNumero = document.createElement("INPUT");
	inputNumero.type = 'text';
	inputNumero.name ='numero_' + registro_id;
	inputNumero.value = numero;
	inputNumero.classList.add('numero');
	tdNumero.appendChild(inputNumero);
		
	//crear Nit
	var tdNit = document.createElement('TD');
	var textoNit = document.createTextNode(nit);
	var parrafoNit = document.createElement('P');
	parrafoNit.appendChild(textoNit);
	tdNit.appendChild(parrafoNit);

	//Crear input con el nit
	var inputNit = document.createElement("INPUT");
	inputNit.type = 'text';
	inputNit.name ='nit' + registro_id;
	inputNit.value = nit;
	inputNit.classList.add('nit');
	tdNit.appendChild(inputNit);

	//crear nombre de contacto
	var tdNombre = document.createElement('TD');
	var textoNombre = document.createTextNode(nombre);
	var parrafoNombre = document.createElement('P');
	parrafoNombre.appendChild(textoNombre);
	tdNombre.appendChild(parrafoNombre);

	//Crear input con el nombre
	var inputNombre = document.createElement("INPUT");
	inputNombre.type = 'text';
	inputNombre.name ='contacto_' + registro_id;
	inputNombre.value = nombre;
	inputNombre.classList.add('nombre');
	tdNombre.appendChild(inputNombre);

	//crear producto
	var tdProducto = document.createElement('TD');
	var textoProducto = document.createTextNode(producto);
	var parrafoProducto = document.createElement('P');
	parrafoProducto.appendChild(textoProducto);
	tdProducto.appendChild(parrafoProducto);

	//Crear input con el producto
	var inputProducto = document.createElement("INPUT");
	inputProducto.type = 'text';
	inputProducto.name ='producto' + registro_id;
	inputProducto.value = producto;
	inputProducto.classList.add('producto');
	tdNit.appendChild(inputProducto);

	//crear precio
	var tdPrecio = document.createElement('TD');
	var textoPrecio = document.createTextNode(precio);
	var parrafoPrecio = document.createElement('P');
	parrafoPrecio.appendChild(textoPrecio);
	tdPrecio.appendChild(parrafoPrecio);

	//Crear input con el precio
	var inputPrecio = document.createElement("INPUT");
	inputPrecio.type = 'text';
	inputPrecio.name ='precio' + registro_id;
	inputPrecio.value = precio;
	inputPrecio.classList.add('precio');
	tdPrecio.appendChild(inputPrecio);

	//crear cantidad
	var tdCantidad = document.createElement('TD');
	var textoCantidad = document.createTextNode(cantidad);
	var parrafoCantidad = document.createElement('P');
	parrafoCantidad.appendChild(textoCantidad);
	tdCantidad.appendChild(parrafoCantidad);

	//Crear input con el cantidad
	var inputCantidad = document.createElement("INPUT");
	inputCantidad.type = 'text';
	inputCantidad.name ='cantidad' + registro_id;
	inputCantidad.value = cantidad;
	inputCantidad.classList.add('cantidad');
	tdCantidad.appendChild(inputCantidad);

	//crear total
	var tdTotal = document.createElement('TD');
	var textoTotal = document.createTextNode(total);
	var parrafoTotal = document.createElement('P');
	parrafoTotal.appendChild(textoTotal);
	tdTotal.appendChild(parrafoTotal);

	//Crear input con el producto
	var inputTotal = document.createElement("INPUT");
	inputTotal.type = 'text';
	inputTotal.name ='total' + registro_id;
	inputTotal.value = total;
	inputTotal.classList.add('total');
	tdTotal.appendChild(inputTotal);

	//crear enlace para editar
	var nodoBtn = document.createElement('A');
	var textoEnlace = document.createTextNode('Editar');
	nodoBtn.appendChild(textoEnlace);
	nodoBtn.href = '#';
	nodoBtn.classList.add('editarBtn');	

	//crear boton para guardar
	var btnGuardar = document.createElement('A');
	var textoGuardar = document.createTextNode('Guardar');
	btnGuardar.appendChild(textoGuardar);
	btnGuardar.href = '#';
	btnGuardar.classList.add('guardarBtn');	

	//agregar el boton de td
	var nodoTdEditar = document.createElement('TD');
	nodoTdEditar.appendChild(nodoBtn);
	nodoTdEditar.appendChild(btnGuardar);	

	//crear checkbox para borrar
	var checkBorrar =document.createElement('INPUT');
	checkBorrar.type = 'checkbox';
	checkBorrar.name = registro_id;
	checkBorrar.classList.add('borrar_contacto');

	//agregar td a checkbox
	var tdCheckbox = document.createElement('TD');
	tdCheckbox.classList.add('borrar');
	tdCheckbox.appendChild(checkBorrar);

	
	//Agregar al TR
	var trContacto = document.createElement('TR');
	trContacto.setAttribute('id', registro_id);
	trContacto.style.display = 'table-row'; 
	trContacto.appendChild(tdNumero);
	trContacto.appendChild(tdNit);
	trContacto.appendChild(tdNombre);
	trContacto.appendChild(tdProducto);
	trContacto.appendChild(tdPrecio);
	trContacto.appendChild(tdCantidad);
	trContacto.appendChild(tdTotal);
	trContacto.appendChild(nodoTdEditar);
	trContacto.appendChild(tdCheckbox);

	tablaRegistrados.childNodes[3].append(trContacto);

	actualizarNumero();
	recorrerBotonesEditar();
	actualizarRegistro(registro_id);	
	
}

function crearUsuario(){
	var form_datos = new FormData(formulario);
	for([key, value] of form_datos.entries()){
		console.log(key + ": " + value);
	}
	var xhr = new XMLHttpRequest();
	xhr.open('POST', action, true);
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			var resultado = xhr.responseText;
			console.log("Resultado: "+ resultado);
			var json = JSON.parse(resultado);
			if (json.respuesta == true) {
				registroExitoso(json.nombre);
				construirTemplate(json.numero, json.nombre, json.nit, json.producto, json.precio, json.cantidad, json.total, json.id);
			}
		}
	}
	xhr.send(form_datos);
}

agregarContacto.addEventListener('click', function(e){
	e.preventDefault();
	crearUsuario();
});
//fin crear usuario


////Elimar usuario////

function mostrarEliminado(){
	//crear div y agregar id
	var divEliminado = document.createElement('DIV');
	divEliminado.setAttribute('id', 'borrado');

	//agregar texto
	var texto = document.createTextNode('Eliminado de lista de contactos');
	divEliminado.appendChild(texto);
	divExistentes[0].insertBefore(divEliminado, divExistentes[0].childNodes[0]);

	//agregar clase de CSS
	divEliminado.classList.add('mostrar');

	//ocultar el mensaje de creacion
	setTimeout(function(){
		divEliminado.classList.add('ocultar');
		setTimeout(function(){
			var divPadreMensaje = divEliminado.parentNode;
			divPadreMensaje.removeChild(divEliminado);
		}, 500);
	}, 3000);

	actualizarNumero();	
}

function eliminarHTML(ids_borrados){
	console.log(ids_borrados);
	for (var i = 0; i < ids_borrados.length; i++) {
		var elementoBorrar = document.getElementById(ids_borrados[i]);
		tableBody[0].removeChild(elementoBorrar);
	}
}

function contactosEliminar(contactos){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'borrar.php?id='+ contactos, true);
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			var resultadoBorrar = xhr.responseText;
			var json = JSON.parse(resultadoBorrar);
			//console.log("S");
			if (json.respuesta == false) {
				alert("seleciona un elemento");
			} else {
				console.log("Resultado: "+resultadoBorrar);
				eliminarHTML(contactos);
				mostrarEliminado();
			}
		}	
	}
	xhr.send();
}

function checkboxSeleccionado(){
	var contactos = [];
	for (var i = 0; i <checkboxes.length; i++) {
		if(checkboxes[i].checked == true){
			contactos.push(checkboxes[i].name);
		}
	}
	contactosEliminar(contactos);
}


for(var i = 0; i < checkboxes.length; i++){
	checkboxes[i].addEventListener('change', function(){
		if (this.checked) {
			this.parentNode.parentNode.classList.add('activo');
		} else {
			this.parentNode.parentNode.classList.remove('activo');
		}
	});
}

btn_borrar.addEventListener('click', function(){
	checkboxSeleccionado();
});
////fin eliminar

////Buscador////

function actualizarNumero(){
	var registros = tableBody[0].getElementsByTagName('tr');

	var cantidad = 0;
	var ocultos = 0;

	for (var i = 0; i < registros.length; i++) {
		var elementos = registros[i];
		if (elementos.style.display == 'table-row') {
			cantidad++;
			totalRegistros.innerHTML = cantidad;
		}else {
			if (elementos.style.display == 'none') {
				ocultos++;
				if (ocultos == registros.length) {
					ocultos -= registros.length;
					totalRegistros.innerHTML = ocultos;
				}
			}
		}
	}
}

function ocultarRegistros(nombre_buscar){
	// variable para todo los registros
	var registros = tableBody[0].getElementsByTagName('tr');
	console.log(registros);
	
	// expresion regular que busca el nombre con case insensitive
	var expresion = new RegExp(nombre_buscar, 'i');

	for (var i = 0; i < registros.length; i++) {
		registros[i].classList.add('ocultar');
		registros[i].style.display = 'none'; 
		if (registros[i].childNodes[1].textContent.replace(/\s/g, "").search(expresion) != -1  || nombre_buscar == '') {
			registros[i].classList.add('mostrar');
			registros[i].classList.remove('ocultar');
			registros[i].style.display = 'table-row';
		}
	}
	actualizarNumero();
}


inputBuscador.addEventListener('input', function(){
	ocultarRegistros(this.value);
});

// Selecionar todos
checkTodos.addEventListener('click', function(){
	var todosRegistro = tableBody[0].getElementsByTagName('tr');
	if (this.checked) {
		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = true;
			todosRegistro[i].classList.add('activo');
		}
	}else{
		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = false;
			todosRegistro[i].classList.remove('activo');
		}
	}
});

/*Recorrer botones de guardar **/
function recorrerBotonesGuardar(id){
	var btn_guardar = tableBody[0].querySelectorAll('.guardarBtn');
	for (var i = 0; i < btn_guardar.length; i++) {
		btn_guardar[i].addEventListener('click', function(){
			actualizarRegistro(id);			
		});
	}
}

/*** Editar registros***/

function recorrerBotonesEditar(){
	var btn_editar = tableBody[0].querySelectorAll('.editarBtn');
	
	for (var i = 0; i < btn_editar.length; i++) {
		btn_editar[i].addEventListener('click', function(event){
			event.preventDefault();
			deshabilitarEdicion();

			var registroActivo =this.parentNode.parentNode;
			registroActivo.classList.add('modo_edicion');
			registroActivo.classList.remove('desactivado');
			console.log(registroActivo.id);

			//Actualizar el registro em e[ecifico]
			actualizarRegistro(registroActivo.id);
		});
	}
}

function deshabilitarEdicion(){
	var registrosTr =  document.querySelectorAll('#registrados tbody tr');
	for (var i = 0; i < registrosTr.length; i++) {
		registrosTr[i].classList.add('desactivado');
	}
}

function habilitarEdicion(){
	var registrosTr =  document.querySelectorAll('#registrados tbody tr');
	for (var i = 0; i < registrosTr.length; i++) {
		registrosTr[i].classList.remove('desactivado');
	}
}
function actualizarRegistro(idRegistro){
	// Seleccionar Boton de Guardar del Registro especifico
	var btnGuardar = document.getElementById(idRegistro).getElementsByClassName('guardarBtn');

	btnGuardar[0].addEventListener('click', function(e){
		e.preventDefault();
		var inputNumeroNuevo = document.getElementById(idRegistro).getElementsByClassName('numero');
		var numeroNuevo = inputNumeroNuevo[0].value;

		var inputNitNuevo = document.getElementById(idRegistro).getElementsByClassName('nit');
		var nitNuevo = inputNitNuevo[0].value;
		
		// Obtiene el valor del campo nombre
		var inputNombreNuevo = document.getElementById(idRegistro).getElementsByClassName('nombre');
		var nombreNuevo = inputNombreNuevo[0].value;
		
		// Obtiene el valor del campo telefono
		var inputProductoNuevo = document.getElementById(idRegistro).getElementsByClassName('producto');
		var productoNuevo = inputProductoNuevo[0].value;
		
		var inputPrecioNuevo = document.getElementById(idRegistro).getElementsByClassName('precio');
		var preciofonoNuevo = inputPrecioNuevo[0].value;

		var inputTelefonoNuevo = document.getElementById(idRegistro).getElementsByClassName('telefono_contacto');
		var telefonoNuevo = inputTelefonoNuevo[0].value;
		
		var inputTelefonoNuevo = document.getElementById(idRegistro).getElementsByClassName('telefono_contacto');
		var telefonoNuevo = inputTelefonoNuevo[0].value;
		
		// Objeto con todo los datos
		var contacto = {
			nombre: nombreNuevo,
			telefono: telefonoNuevo,
			id: idRegistro
		};
		actualizarAjax(contacto);
	});
}

function actualizarAjax(datosContacto){
	// Convierte objeto a JSON
	var jsonContacto = JSON.stringify(datosContacto);
	// Crear la conexion
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'actualizar.php?datos='+ jsonContacto, true);
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			var resultado = xhr.responseText;
			var resultadoJson = JSON.parse(resultado);
			if (resultadoJson.respuesta == true) {
				var registroActivo = document.getElementById(datosContacto.id);
				//console.dir(registroActivo);
				// Inserta dinamicamente el nombre
				registroActivo.getElementsByTagName('td')[0].getElementsByTagName('p')[0].innerHTML = resultadoJson.nombre;

				// Inserta dinamicamente el telefono
				registroActivo.getElementsByTagName('td')[1].getElementsByTagName('p')[0].innerHTML = resultadoJson.telefono;
				
				// Borrar modo edicion
				registroActivo.classList.remove('modo_edicion');
				habilitarEdicion();
			}else{
				console.log("hubo un errror!!");
			}
		}	
	};
	xhr.send();	

}
document.addEventListener('DOMContentLoaded', function(event){
	recorrerBotonesEditar();
});













