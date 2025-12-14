<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Origin: *");

session_start();
session_destroy();

http_response_code(200);
echo json_encode(array("message" => "Logout successful."));
?>