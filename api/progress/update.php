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

if(isset($_SESSION['user_id'])){
    if(!empty($data->course_id) && !empty($data->chapter_id)){
        
        $user_id = $_SESSION['user_id'];
        
        // Check if progress already exists
        $check_query = "SELECT id FROM progress WHERE user_id = :user_id AND course_id = :course_id AND chapter_id = :chapter_id";
        $check_stmt = $db->prepare($check_query);
        $check_stmt->bindParam(':user_id', $user_id);
        $check_stmt->bindParam(':course_id', $data->course_id);
        $check_stmt->bindParam(':chapter_id', $data->chapter_id);
        $check_stmt->execute();

        if($check_stmt->rowCount() > 0){
            http_response_code(200); // Already completed
            echo json_encode(array("message" => "Progress already recorded."));
            exit();
        }

        $query = "INSERT INTO progress SET user_id=:user_id, course_id=:course_id, chapter_id=:chapter_id";
        $stmt = $db->prepare($query);

        $stmt->bindParam(":user_id", $user_id);
        $stmt->bindParam(":course_id", $data->course_id);
        $stmt->bindParam(":chapter_id", $data->chapter_id);

        if($stmt->execute()){
            http_response_code(201);
            echo json_encode(array("message" => "Progress updated."));
        } else {
            http_response_code(503);
            echo json_encode(array("message" => "Unable to update progress."));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Unable to update progress. Data is incomplete."));
    }
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Unauthorized. Please login first."));
}
?>