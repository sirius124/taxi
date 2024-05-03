<?php

$where1 = $_POST['where-1'];
$address1 = $_POST['address-1'];
$where2 = $_POST['where-2'];
$address2 = $_POST['address-2'];
$passengers = $_POST['passengers'];
$luggage = $_POST['luggage'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];

$token = "6879643947:AAEkYDDxeiQ_WgKyRt5qY9G5nWPl3LTH2E4";
$chat_id = "-1002116865695";
$arr = array(
    'Откуда:' => $where1,
    'Адрес отправления:' => $address1,
    'Куда:' => $where2,
    'Адрес доставки:' => $address2,
    'Количество пассажиров:' => $passengers,
    'Багаж:' => $luggage,
    'Телефон номер:' => $phone,
    'Дата:' => $date,
    'Время:' => $time,
);

$txt = '';
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header('Location: thank-you.html');
} else {
    echo "Error";
}

?>