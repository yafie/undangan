-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2022 at 06:13 AM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `undangan`
--

-- --------------------------------------------------------

--
-- Table structure for table `kirim-doa`
--

CREATE TABLE `kirim-doa` (
  `id` int(10) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `kota` varchar(30) NOT NULL,
  `kehadiran` varchar(15) NOT NULL,
  `ucapan` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kirim-doa`
--

INSERT INTO `kirim-doa` (`id`, `nama`, `kota`, `kehadiran`, `ucapan`) VALUES
(1, 'test', '1', '2', '3'),
(2, 'Aji dan Partner', 'adfasfsa', 'hadir', 'afsafsdafsadfsafsdf asdfsadfsafsa'),
(3, 'yoyo dan makan', 'Jakarta', 'hadir', 'Semoga Anda sehat selalu yaa hehehehe :)'),
(4, 'Aji dan istri', 'jakarta', 'mungkin-hadir', 'dan mungkin bila nanti'),
(5, 'Aji dan Partners', 'afsafsa', 'hadir', 'testsafsafs'),
(6, 'Aji dan Partner', 'adfasf', 'hadir', 'adfasfsadfsdafsdfsafsfds'),
(7, 'Aji dan Partner 3333', 'asdfasdfas', 'hadir', 'adfsafsafsafsaf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kirim-doa`
--
ALTER TABLE `kirim-doa`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kirim-doa`
--
ALTER TABLE `kirim-doa`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
