<?php
class Database {
    private $host;
    private $db_name;
    private $username;
    private $password;
    public $conn;

    public function __construct() {
        // Use environment variables for Vercel deployment
        // Falls back to localhost values for local development
        $this->host = getenv('DB_HOST') ?: 'localhost';
        $this->db_name = getenv('DB_NAME') ?: 'learning_hub';
        $this->username = getenv('DB_USER') ?: 'learninghub_user';
        $this->password = getenv('DB_PASS') ?: 'password123';
    }

    public function getConnection() {
        $this->conn = null;

        try {
            $dsn = "mysql:host=" . $this->host . ";dbname=" . $this->db_name;
            
            // Add SSL for cloud databases (PlanetScale, TiDB, etc.)
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];
            
            // Enable SSL for production (cloud databases require it)
            if (getenv('DB_HOST') && getenv('DB_HOST') !== 'localhost') {
                $options[PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT] = false;
            }
            
            $this->conn = new PDO($dsn, $this->username, $this->password, $options);
            $this->conn->exec("set names utf8mb4");
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(["error" => "Database connection failed: " . $exception->getMessage()]);
            exit();
        }

        return $this->conn;
    }
}
?>