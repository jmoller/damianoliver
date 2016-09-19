<?php
$name = $_POST['nombre'];
$email = $_POST['email'];
$phone = $_POST['telefono'];
$message = $_POST['mensaje'];
$formcontent=" Nombre: $name \n Telefono: $phone \n Mensaje: $message";
$recipient = "contacto@damianolivermusic.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("Location: thankyou-en.html"); /* Redirect browser */
exit();
?>
