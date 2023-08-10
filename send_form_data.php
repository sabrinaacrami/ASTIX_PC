<!-- <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $preferred_contact = $_POST["preferred_contact"];

    // Сформируем текст электронного письма
    $subject = "Новая заявка с формы";
    $message = "Имя: $name\n";
    $message .= "Email: $email\n";
    $message .= "Телефон: $phone\n";
    $message .= "Предпочитаемый способ связи: $preferred_contact\n";

  
    $to = "sabrina.acrami@gmail.com";

    // Отправим электронное письмо
    mail($to, $subject, $message);
}
?> -->
