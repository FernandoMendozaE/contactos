<?php

	require_once('funciones/bd_conexion.php');

	if (peticion_ajax()) {
		$datos = $_GET['datos'];
		$datos = json_decode($datos, true);
		
		$nombre = $datos['nombre'];
		$numero = $datos['telefono'];
		$id = $datos['id'];

		try {
			$sql = "UPDATE `contactos` SET";
			$sql .= "`nombre` = '{$nombre}',";
			$sql .= "`telefono` = '{$numero}'";
			$sql .= "WHERE `id` = {$id}";
			
			$resultado = $conn->query($sql);
			
			echo json_encode(array(
				'respuesta' => $resultado,
				'nombre' => $nombre,
				'id' => $id,
				'telefono' => $numero
			));

			$conn->close();  	
		} catch (Exception $e) {
			$error = $e->getMessage();
		}
	}else{
		exit;
	}
	
