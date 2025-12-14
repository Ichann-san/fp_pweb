<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Origin: *");

session_start();

if(isset($_SESSION['user_id'])){
    http_response_code(200);
    echo json_encode(array(
        "is_logged_in" => true,
        "user" => array(
            "id" => $_SESSION['user_id'],
            "username" => $_SESSION['username']
        )
    ));
} else {
    http_response_code(200);
    echo json_encode(array(
        "is_logged_in" => false,
        "user" => null
    ));
}
?>