<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "sg19rs092@iiserkol.ac.in"; // Your email address
    $subject = "New Message from Website Contact Form";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong, please try again.";
    }
}
?>
