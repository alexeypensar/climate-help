<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['Name'];
$phone = $_POST['Phone'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    // Настройки вашей почты
    $mail->Host = ''; // SMTP сервера timeweb
    $mail->Username = ''; // Логин на почте
    $mail->Password = ''; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('alala@mail.ru', 'alala'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('alala@yandex.ru');


    // -----------------------
    // Само письмо
    // -----------------------
    $mail->isHTML(true);

    $mail->Subject = 'alala.ru - запрос с сайта';
    $mail->Body = "
    
    <head>
        <style>
    
        body {
            margin-left: 30px;
            margin-top: 30px;
            color: #242424;
        }
    
        h3 {
            font-size: 30px;
        }
        table {
            border-collapse: collapse;
        }
    
        table, td {
            border: 2px solid black;
        }
    
        td {
            padding: 10px;
            width: 120px;
            font-size: 18px;
        }
    
        .td__heading {
            background-color: #FFCC00;
            font-weight: bold;
        }
    
        </style>
    </head>
    <body>
        <h3>Заполнено обращение на сайте, информация:</h3>
        
        <table>
        
            <tr>
                <td class=\"td__heading\">Имя клиента:</td>
                <td> $name </td>
            </tr>
            <tr>
                <td class=\"td__heading\">Телефон:</td>
                <td> $phone </td>
            </tr>
        </table>
    </body>
        
        


";
// Проверяем отравленность сообщения
    if ($mail->send()) {
        echo "$msg";

    } else {
        echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
    }
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}