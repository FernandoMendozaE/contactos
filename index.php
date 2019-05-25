<?php 
	try {
		require_once('funciones/bd_conexion.php');
		$sql = 'SELECT * FROM factura';
		$resultado = $conn->query($sql);
	} catch (Exception $e) {
		$error = $e->getMessage();
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Agenda PHP</title>
	<link rel="stylesheet" href="css/estilos.css" media="screen">
</head>
<body>
	<div class="contenedor">
		<h1>Factura de Productos</h1>
		
		<div class="contenido">
			<div id="crear_contactos" class="crear">
				<h2>Nuevo Factura</h2>
					<form action="crear.php" method="post" id="formulario_crear_usuario">
						<div class="campo">
							<label for="numero">N:</label>
								<input type="text" name="numero" id="numero" placeholder="Número">
						</div>
						<div class="campo">
							<label for="nombre">Nit:</label>
								<input type="text" name="nit" id="nit" placeholder="Nit">
						</div>
						<div class="campo">
							<label for="nit">Nombre:</label>
								<input type="text" name="nombre" id="nombre" placeholder="Nombre">
						</div>
						<div class="campo">
							<label for="nit">Producto:</label>
								<input type="text" name="producto" id="producto" placeholder="Nombre producto">
						</div>
						<div class="campo">
							<label for="nit">Precio:</label>
								<input type="number" name="precio" id="precio" placeholder="Precio">
						</div>
						<div class="campo">
							<label for="nit">Cantidad:</label>
								<input type="number" name="cantidad" id="cantidad" placeholder="Cantidad">
						</div>
						
						<input type="submit" value="Agregar" id="agregar" class="boton">

					</form>		
			</div><!--.crear_contacto-->
		</div><!--.contenido-->

		<div class="contenido existentes">
			<div class="buscar">
				<h2>Buscar</h2>
				<input type="text" id="buscador" name="buscador" placeholder="Buscar" class="buscador">
			</div>

			<h2>Contactos Existentes</h2>
			<p>
				Resultados: <span id="total"><?php echo $resultado->num_rows; ?> </span>
			</p>

			<table id="registrados">
				<thead>
					<tr>
						<th>N</th>
						<th>Nit</th>
						<th>Nombre</th>
						<th>Producto</th>
						<th>Precio</th>
						<th>Cantidad</th>
						<th>Total</th>
						<th></th>
						<th>
							<button type="button" name="Borrar" id="btn_borrar" class="borrar">Borrar</button>
							<input type="checkbox" id="borrar_todos">
						</th>
					</tr>
				</thead>
				<tbody>
					<?php while ($registros = $resultado->fetch_assoc() ){  ?>
						<tr id="<?php echo $registros['id']; ?>" style = "display: table-row";>
							<td> 
								<p><?php echo $registros['numero'] ?></p>
								<input type="text" class="numero" value="<?php echo $registros['numero']; ?>" name="contacto_"<?php echo$registros['id']; ?>>	
							</td>
							<td> 
								<p><?php echo $registros['nit'] ?></p>
								<input type="text" class="nit" value="<?php echo $registros['nit'] ?>" name="nit_"<?php echo$registros['id'] ?>>	
							</td>
							<td> 
								<p><?php echo $registros['nombre'] ?></p>
								<input type="text" class="nombre" value="<?php echo $registros['nombre']; ?>" name="contacto_"<?php echo$registros['id']; ?>>	
							</td>
							<td> 
								<p><?php echo $registros['producto'] ?></p>
								<input type="text" class="producto" value="<?php echo $registros['producto']; ?>" name="contacto_"<?php echo$registros['id']; ?>>	
							</td>
							<td> 
								<p><?php echo $registros['precio'] ?></p>
								<input type="text" class="precio" value="<?php echo $registros['precio']; ?>" name="contacto_"<?php echo$registros['id']; ?>>	
							</td>
							<td> 
								<p><?php echo $registros['cantidad'] ?></p>
								<input type="text" class="cantidad" value="<?php echo $registros['cantidad']; ?>" name="contacto_"<?php echo$registros['id']; ?>>	
							</td>
							<td> 
								<p><?php echo $registros['total'] ?></p>
								<input type="text" class="total" value="<?php echo $registros['total']; ?>" name="contacto_"<?php echo$registros['id']; ?>>	
							</td>
							<td>
								<a href="#" class="editarBtn">Editar</a>
								<a href="#" class="guardarBtn">Guardar</a>
							</td>
							<td class="borrar">
								<input class="borrar_contacto" type="checkbox" name="<?php echo $registros['id']; ?>">
							</td>
						</tr>
					<?php } ?>
				</tbody>

			</table>
		</div>
	</div>
	<?php  
		$conn->close();
	?>

	<script src="js/app.js"></script>
</body>
</html>