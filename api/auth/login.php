<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

session_start();

include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if(!empty($data->email) && !empty($data->password)) {
    $query = "SELECT id, username, password, email FROM users WHERE email = :email LIMIT 1";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':email', $data->email);
    $stmt->execute();
    
    if($stmt->rowCount() > 0){
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $id = $row['id'];
        $username = $row['username'];
        $password_hash = $row['password'];
        $email = $row['email'];

        if(password_verify($data->password, $password_hash)){
            $_SESSION['user_id'] = $id;
            $_SESSION['username'] = $username;
            
            http_response_code(200);
            echo json_encode(array(
                "message" => "Login successful.",
                "user" => array(
                    "id" => $id,
                    "username" => $username,
                    "email" => $email
                )
            ));
        } else {
            http_response_code(401);
            echo json_encode(array("message" => "Invalid email or password."));
        }
    } else {
        http_response_code(401);
        echo json_encode(array("message" => "Invalid email or password."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to login. Data is incomplete."));
}
?>