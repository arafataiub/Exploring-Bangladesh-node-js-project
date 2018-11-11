-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2018 at 06:37 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ebdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_details`
--

CREATE TABLE `admin_details` (
  `name` varchar(20) NOT NULL,
  `admin_id` int(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_details`
--

INSERT INTO `admin_details` (`name`, `admin_id`, `Email`, `phone`, `password`) VALUES
('arafat', 1, 'aa@y', '123', '12'),
('arafat', 2, 'aa@y', '123', '0'),
('arafat', 3, 'arafat@gmail.com', '0183', 'arafat');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `user_email` varchar(10) NOT NULL,
  `post_id` int(10) NOT NULL,
  `post_title` varchar(100) NOT NULL,
  `post_details` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`user_email`, `post_id`, `post_title`, `post_details`) VALUES
('dip@Y', 7, 'dgdfgdfg', 'dfgdfgdfgdf'),
('dip@Y', 8, 'araada', 'ararafa');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_email` varchar(20) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  `user_type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_email`, `user_password`, `user_type`) VALUES
('arafat@gmail.com', 'arafat', 'admin'),
('1@ya', 'asd', 'user'),
('sho@y', 'ass', 'user'),
('dip@Y', '123', 'user'),
('tanj@y', '01', 'user'),
('sabita@y', '02', 'user'),
('asda@y', '11', 'user'),
('asda@w', '12', 'user'),
('arshi@y', '69', 'user'),
('arafat@gmail.com', 'arafat', 'admin'),
('a@y', '0', 'admin'),
('a@y.com', '1', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `user_name` varchar(20) NOT NULL,
  `user_id` int(10) NOT NULL,
  `user_email` varchar(20) NOT NULL,
  `user_phoneno` varchar(20) NOT NULL,
  `user_password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`user_name`, `user_id`, `user_email`, `user_phoneno`, `user_password`) VALUES
('aaaaa', 3, 'aaa@dfsdf', 'asfasd', '11'),
('tan', 4, 'asasd@gmail.com', '123', '11'),
('tan', 6, '1@ya', '123', 'asd'),
('sho', 7, 'sho@y', '123', 'ass'),
('tanj', 9, 'tanj@y', '01', '01'),
('tan', 10, 'arafat@gmail.com', '123', '1'),
('arafat', 11, 'a@y.com', '1', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_details`
--
ALTER TABLE `admin_details`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_details`
--
ALTER TABLE `admin_details`
  MODIFY `admin_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
