<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    $to = 'tanyakhitushka@gmail.com';
    $subject = 'Нове повідомлення з форми зворотного зв\'язку';
    $message = "Ім'я: $name\nЕлектронна пошта: $email\nКоментар: $comment";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo 'Повідомлення успішно надіслано.';
    } else {
        echo 'Сталася помилка під час відправки повідомлення.';
    }
}

