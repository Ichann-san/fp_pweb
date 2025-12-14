-- Database: IchanHub

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--
-- Password is 'password123' ($2y$10$...)
INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'ichan_admin', 'admin@ichanhub.com', '$2y$12$E6LmO7LHv.SKk6gV3zqanuzp.W2BipGdsiP/qv246R2hoPi8lw37a', NOW()),
(2, 'student_one', 'student@ichanhub.com', '$2y$12$E6LmO7LHv.SKk6gV3zqanuzp.W2BipGdsiP/qv246R2hoPi8lw37a', NOW());

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slug` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `badge_class` varchar(50) DEFAULT NULL,
  `link` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`slug`, `title`, `description`, `image_url`, `badge_class`, `link`) VALUES
('html', 'HTML Front end', 'Create the frame for web programming using HTML as the base', 'https://placehold.co/600x400/8b5cf6/ffffff?text=HTML', 'badge-violet', '../html/course/html.html'),
('javascript', 'Javascript', 'Utilize the javascript functionality to load logical function into the design of the web', 'https://placehold.co/600x400/facc15/000000?text=JavaScript', 'badge-yellow', '../html/course/javascript.html'),
('css', 'CSS layout', 'Interactively customize the web design using CSS on your own', 'https://placehold.co/600x400/22c55e/ffffff?text=CSS', 'badge-green', '../html/course/css.html'),
('cp', 'Competitive Programming', 'Master algorithms and data structures to excel in programming contests.', 'https://placehold.co/600x400/6366f1/ffffff?text=Algorithms', 'badge-indigo', '../html/course/cp.html'),
('quantum', 'Intro to Quantum Computing', 'Explore the fascinating world of quantum mechanics and its computational power.', 'https://placehold.co/600x400/ec4899/ffffff?text=Quantum', 'badge-pink', '../html/course/quantum.html'),
('uiux', 'UI/UX Design Fundamentals', 'Create beautiful and intuitive user interfaces that users will love.', 'https://placehold.co/600x400/f97316/ffffff?text=UI/UX', 'badge-orange', '../html/course/uiux.html'),
('datascience', 'Data Science with Python', 'Analyze data, create visualizations, and build predictive models.', 'https://placehold.co/600x400/0ea5e9/ffffff?text=Data', 'badge-sky', '../html/course/datascience.html');

-- --------------------------------------------------------

--
-- Table structure for table `enrollments`
--

CREATE TABLE `enrollments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `enrolled_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_enrollment` (`user_id`, `course_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `enrollments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `enrollments_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enrollments`
--
-- Student 1 enrolled in HTML and CSS
INSERT INTO `enrollments` (`user_id`, `course_id`) VALUES 
(2, 1),
(2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `progress`
--

CREATE TABLE `progress` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `chapter_id` varchar(50) NOT NULL,
  `completed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_progress` (`user_id`, `course_id`, `chapter_id`),
  CONSTRAINT `progress_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `progress_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `progress`
--
-- Student 1 finished 'intro' chapter of HTML course
INSERT INTO `progress` (`user_id`, `course_id`, `chapter_id`) VALUES
(2, 1, 'intro');

COMMIT;
