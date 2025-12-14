<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Origin: *");

include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

$id = isset($_GET['id']) ? $_GET['id'] : die();

$query = "SELECT * FROM courses WHERE id = ? LIMIT 0,1";

$stmt = $db->prepare($query);
$stmt->bindParam(1, $id);
$stmt->execute();

$num = $stmt->rowCount();

if($num > 0){
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
    extract($row);

    $course_item = array(
        "id" => $id,
        "slug" => $slug,
        "title" => $title,
        "description" => $description,
        "image_url" => $image_url,
        "badge_class" => $badge_class,
        "link" => $link
    );

    http_response_code(200);
    echo json_encode($course_item);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "Course not found."));
}
?>