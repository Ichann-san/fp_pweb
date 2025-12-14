<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Origin: *");

session_start();

include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

if(isset($_SESSION['user_id'])){
    $user_id = $_SESSION['user_id'];

    $query = "
        SELECT c.*, e.enrolled_at 
        FROM courses c
        JOIN enrollments e ON c.id = e.course_id
        WHERE e.user_id = :user_id
        ORDER BY e.enrolled_at DESC
    ";

    $stmt = $db->prepare($query);
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    $num = $stmt->rowCount();

    if($num > 0){
        $courses_arr = array();
        $courses_arr["records"] = array();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            // Fetch progress for this course
            $progress_query = "SELECT COUNT(*) as completed_chapters FROM progress WHERE user_id = :user_id AND course_id = :course_id";
            $progress_stmt = $db->prepare($progress_query);
            $progress_stmt->bindParam(':user_id', $user_id);
            $progress_stmt->bindParam(':course_id', $id);
            $progress_stmt->execute();
            $progress_row = $progress_stmt->fetch(PDO::FETCH_ASSOC);
            $completed_chapters = $progress_row['completed_chapters'];

            $course_item = array(
                "id" => $id,
                "slug" => $slug,
                "title" => $title,
                "description" => $description,
                "image_url" => $image_url,
                "badge_class" => $badge_class,
                "link" => $link,
                "enrolled_at" => $enrolled_at,
                "completed_chapters" => $completed_chapters
            );

            array_push($courses_arr["records"], $course_item);
        }

        http_response_code(200);
        echo json_encode($courses_arr);
    } else {
        http_response_code(200); // Return empty list instead of 404
        echo json_encode(array("records" => []));
    }
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Unauthorized. Please login first."));
}
?>