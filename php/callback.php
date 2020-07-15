<?php
$recepient = "matvienkoigor956@gmail.com";
$sitename = "SG";
$token = "1075686909:AAERuG4YvzxCjg3ChV_vI0LCNhCKDP5cDrI"; 
$chat_id = "-424143553";


$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$message = "Имя: $name \nТелефон: $tel";

$arr = array(
  'Имя: ' => $name,
  'Телефон' => $tel
);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$pagetitle = "Сообщение с сайта: \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient"); 

?>
