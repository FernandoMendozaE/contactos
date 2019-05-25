<?php
	if (isset($_GET['id'])) {
		$id = htmlspecialchars($_GET['id']);
	} 
	try {
		require_once('funciones/bd_conexion.php');
		$sql = "DELETE FROM `contactos` WHERE `id`IN ({$id});";
		
		$resultado = $conn->query($sql);
		if (peticion_ajax()) {
			echo json_encode(array(
				'respuesta' => $resultado,
				'sql' => $sql
			));
		}else{
			exit;
		}
	} catch (Exception $e) {
		$error = $e->getMessage();
	}

			
	$conn->close();  
?>
