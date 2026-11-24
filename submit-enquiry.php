<?php
/* ===================================================
   Aapla Bazar - submit-enquiry.php
   - Saves enquiry form data into MySQL database
   - Emails the enquiry to the business owner
   =================================================== */

header('Content-Type: application/json');

// ---------------------------------------------------
// 1) DATABASE SETTINGS
// Hostinger hPanel -> Databases -> MySQL Databases madhun
// he 4 values milतील. Ithe tuze actual values takh.
// ---------------------------------------------------
$db_host = "localhost";
$db_user = "u749647841_aaplabazar_db";
$db_pass = "Aaplabazar@2026";
$db_name = "u749647841_aaplabazar";

// ---------------------------------------------------
// 2) EMAIL SETTINGS
// Ithe enquiry kuthlya email var yaychi te take.
// ---------------------------------------------------
$to_email = "info@aaplabazar.com";

// ---------------------------------------------------
// Only allow POST requests
// ---------------------------------------------------
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
    exit;
}

// ---------------------------------------------------
// Collect + clean form data
// ---------------------------------------------------
$name    = trim($_POST['name'] ?? '');
$mobile  = trim($_POST['mobile'] ?? '');
$email   = trim($_POST['email'] ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

// Server-side validation (never trust only the browser)
if ($name === '' || $mobile === '' || $service === '') {
    echo json_encode(["success" => false, "message" => "कृपया सर्व आवश्यक फील्ड भरा."]);
    exit;
}

if (!preg_match('/^[0-9]{10}$/', $mobile)) {
    echo json_encode(["success" => false, "message" => "कृपया वैध 10-अंकी Mobile Number टाका."]);
    exit;
}

// ---------------------------------------------------
// Save to database
// ---------------------------------------------------
$db_saved = false;

$conn = @new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Database connection failed. कृपया नंतर प्रयत्न करा."]);
    exit;
}

$stmt = $conn->prepare(
    "INSERT INTO enquiries (name, mobile, email, service, message, created_at) VALUES (?, ?, ?, ?, ?, NOW())"
);
$stmt->bind_param("sssss", $name, $mobile, $email, $service, $message);
$db_saved = $stmt->execute();
$stmt->close();
$conn->close();

if (!$db_saved) {
    echo json_encode(["success" => false, "message" => "काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा."]);
    exit;
}

// ---------------------------------------------------
// Send email notification (best-effort - form still
// succeeds even if email fails, since DB save worked)
// ---------------------------------------------------
$subject = "New Enquiry - Aapla Bazar ($service)";

$body  = "नवीन Enquiry आली आहे:\n\n";
$body .= "Name: $name\n";
$body .= "Mobile: $mobile\n";
$body .= "Email: " . ($email !== '' ? $email : '-') . "\n";
$body .= "Service: $service\n";
$body .= "Message: " . ($message !== '' ? $message : '-') . "\n";

$headers  = "From: no-reply@aaplabazar.com\r\n";
$headers .= "Reply-To: " . ($email !== '' ? $email : 'no-reply@aaplabazar.com') . "\r\n";

@mail($to_email, $subject, $body, $headers);

// ---------------------------------------------------
// Respond to the browser
// ---------------------------------------------------
echo json_encode([
    "success" => true,
    "message" => "धन्यवाद! तुमची Enquiry यशस्वीरित्या पाठवली गेली आहे."
]);