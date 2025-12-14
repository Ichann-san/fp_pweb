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
    if(!empty($data->course_id)){
        
        $user_id = $_SESSION['user_id'];
        
        // Check if already enrolled
        $check_query = "SELECT id FROM enrollments WHERE user_id = :user_id AND course_id = :course_id";
        $check_stmt = $db->prepare($check_query);
        $check_stmt->bindParam(':user_id', $user_id);
        $check_stmt->bindParam(':course_id', $data->course_id);
        $check_stmt->execute();

        if($check_stmt->rowCount() > 0){
            http_response_code(409); // Conflict
            echo json_encode(array("message" => "User already enrolled in this course."));
            exit();
        }

        $query = "INSERT INTO enrollments SET user_id=:user_id, course_id=:course_id";
        $stmt = $db->prepare($query);

        $stmt->bindParam(":user_id", $user_id);
        $stmt->bindParam(":course_id", $data->course_id);

        if($stmt->execute()){
            http_response_code(201);
            echo json_encode(array("message" => "Enrolled successfully."));
        } else {
            http_response_code(503);
            echo json_encode(array("message" => "Unable to enroll."));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Unable to enroll. Course ID is missing."));
    }
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Unauthorized. Please login first."));
}
?>