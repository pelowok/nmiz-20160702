<?php
$to = "zak@mynameiszak.com";
$subject = "sent from portfolio Quick Message" ;
$message = $_REQUEST['message'] ; 
$author = $_REQUEST['author'];
$email = $_REQUEST['email'];
$body = "You have received a new message from the user: \n $author.\n $email \n".
                            "MESSAGE : \n $message";
$echostring = "Your message: \n $author.\n $email \n".
                            "MESSAGE : \n $message";
if (mail($to, $subject, $body, $author, $email)) {
include( 'success.html' );
} else {
include( 'fail.html' );
}
?>
