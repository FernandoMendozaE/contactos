<?php

	//conexion a la base de datos
	require_once('funciones/bd_conexion.php');
			
	if (peticion_ajax()) {
		//LLamar datos del formulario index.php
		if (isset($_POST['numero'])) {
			$numero = htmlspecialchars($_POST['numero']);
		} 
		if (isset($_POST['nit'])) {
			$nit = htmlspecialchars($_POST['nit']);
		}  
		if (isset($_POST['nombre'])) {
		 	$nombre = htmlspecialchars($_POST['nombre']);
		}
		if (isset($_POST['producto'])) {
		 	$producto = htmlspecialchars($_POST['producto']);
		}
		if (isset($_POST['precio'])) {
		 	$precio = htmlspecialchars($_POST['precio']);
		}
		if (isset($_POST['cantidad'])) {
		 	$cantidad = htmlspecialchars($_POST['cantidad']);
		}
		$total = htmlspecialchars($_POST['cantidad'])*htmlspecialchars($_POST['precio']);

		try {
			//consulta
			$sql = "INSERT INTO `factura` (`id`, `numero`, `nit`, `nombre`, `producto`, `precio`, `cantidad`, `total`)";
			$sql .= "VALUES(NULL, '{$numero}', '{$nombre}', '{$nit}', '{$producto}', '{$precio}', '{$cantidad}', '{$total}');";
			//query
			$resultado = $conn->query($sql);

			//Enviando respuesta "respuesta, ....  yTrue" a AJAX
			echo json_encode(array(
				'respuesta'=>$resultado,
				'numero' => $numero,
				'nit' => $nit,
				'nombre' => $nombre,
				'producto' => $producto,
				'precio' => $precio,
				'cantidad' => $cantidad,
				'total' => $total,
				'id' => $conn->insert_id));		
			} catch (Exception $e) {
			$error = $e->getMessage();
		}	

		$conn->close();  

	}else{
		exit();
	}

?>	