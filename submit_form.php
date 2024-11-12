<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Vérification de champs vides
    if (empty($name) || empty($email) || empty($message)) {
        echo "Tous les champs sont requis.";
        exit;
    }

    // Préparation de l'email
    $to = "contact@airvolt.fr";
    $subject = "Nouvelle demande de contact de la part de $name";
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    $headers = "From: $email";

    // Envoi de l'email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Votre message a bien été envoyé. Nous vous répondrons dès que possible.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.";
    }
}
?>
