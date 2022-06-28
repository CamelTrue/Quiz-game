CREATE DATABASE IF NOT EXISTS quiz_game;

USE quiz_game;

DROP TABLE IF EXISTS `answer`;
	CREATE TABLE `answer` (
		`id_answer` int NOT NULL AUTO_INCREMENT,
		`answer` varchar(255) NOT NULL,
		`is_correct` tinyint NOT NULL,
		PRIMARY KEY (`id_answer`)
)

DROP TABLE IF EXISTS `questions`;
	CREATE TABLE `questions` (
		`id_questions` int NOT NULL,
		`question` varchar(255) NOT NULL,
		`difficulty` int NOT NULL,
		PRIMARY KEY (`id_questions`)
)

DROP TABLE IF EXISTS `questions_answer`;
	CREATE TABLE `questions_answer` (
		`id_question_answer` int NOT NULL AUTO_INCREMENT,
		`id_questions` int NOT NULL,
		`id_answer` int NOT NULL,
		`points` int DEFAULT NULL,
		PRIMARY KEY (`id_question_answer`),
		KEY `fk_question_answer_idx` (`id_answer`),
		KEY `fk_answer_question_idx` (`id_questions`),
		CONSTRAINT `fk_answer_question` FOREIGN KEY (`id_questions`) REFERENCES `questions` (`id_questions`) ON UPDATE CASCADE,
		CONSTRAINT `fk_question_answer` FOREIGN KEY (`id_answer`) REFERENCES `answer` (`id_answer`) ON UPDATE CASCADE
)

DROP TABLE IF EXISTS `users`;
	CREATE TABLE `users` (
		`id_user` int NOT NULL AUTO_INCREMENT,
		`username` varchar(45) NOT NULL,
		`password` varchar(45) NOT NULL,
		`first_name` varchar(45) NOT NULL,
		`last_name` varchar(45) NOT NULL,
		`registration_date` date NOT NULL,
		PRIMARY KEY (`id_user`)
)

DROP TABLE IF EXISTS `result_test`;
	CREATE TABLE `result_test` (
		`score_id` int NOT NULL AUTO_INCREMENT,
		`id_user` int NOT NULL,
		`score` int NOT NULL,
		`date_execution_test` date NOT NULL,
		PRIMARY KEY (`score_id`),
		KEY `fk_score_user_idx` (`id_user`),
		CONSTRAINT `fk_score_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
)