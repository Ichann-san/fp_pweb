<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if(
    !empty($data->username) &&
    !empty($data->email) &&
    !empty($data->password)
){
    // Check if email or username already exists
    $query = "SELECT id FROM users WHERE email = :email OR username = :username LIMIT 1";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':email', $data->email);
    $stmt->bindParam(':username', $data->username);
    $stmt->execute();
    
    if($stmt->rowCount() > 0){
        http_response_code(400);
        echo json_encode(array("message" => "Username or Email already exists."));
        exit();
    }

    $query = "INSERT INTO users SET username=:username, email=:email, password=:password";
    $stmt = $db->prepare($query);

    $data->username = htmlspecialchars(strip_tags($data->username));
    $data->email = htmlspecialchars(strip_tags($data->email));
    $password_hash = password_hash($data->password, PASSWORD_BCRYPT);

    $stmt->bindParam(":username", $data->username);
    $stmt->bindParam(":email", $data->email);
    $stmt->bindParam(":password", $password_hash);

    if($stmt->execute()){
        http_response_code(201);
        echo json_encode(array("message" => "User was registered."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to register user."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to register user. Data is incomplete."));
}
?>