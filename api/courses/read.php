<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Origin: *");

include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

$query = "SELECT * FROM courses";
$stmt = $db->prepare($query);
$stmt->execute();

$num = $stmt->rowCount();

if($num > 0){
    $courses_arr = array();
    $courses_arr["records"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
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

        array_push($courses_arr["records"], $course_item);
    }

    http_response_code(200);
    echo json_encode($courses_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No courses found."));
}
?>