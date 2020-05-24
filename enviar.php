<?php
if(isset($_POST["enviar"])){
    if(empty($_POST["name"]) && empty($_POST["email"]) && empty($_POST["coment"])){
        echo "<h4>UIS!</h4>";
    }else{
        $nombre = $_POST['name'];
        $correo = $_POST['email'];
        $mensaje = $_POST['coment'];
        $contenedor= "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;
        $mail= @mail("edwintepox58@gmail.com","QUIERO SU SERVICIO",$contenedor);
        if($mail){
            echo "<h4>Espero responderte pronto</h4>";
        }
    }
}
?>