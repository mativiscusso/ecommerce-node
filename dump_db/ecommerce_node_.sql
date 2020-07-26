-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 25, 2020 at 11:56 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce_node`
--
CREATE DATABASE IF NOT EXISTS `ecommerce_node` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ecommerce_node`;

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `position` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `image`, `position`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'image-1595690761379.jpg', 'top', NULL, '2020-07-25 15:26:01', NULL),
(2, 'image-1595690767722.jpg', 'top', NULL, '2020-07-25 15:26:07', NULL),
(3, 'image-1595690794440.jpeg', 'top', NULL, '2020-07-25 15:26:34', NULL),
(4, 'image-1595690806207.png', 'center', NULL, '2020-07-25 15:26:46', NULL),
(5, 'image-1595690816888.jpg', 'bottom', NULL, '2020-07-25 15:26:56', NULL),
(6, 'image-1595690824022.jpg', 'bottom', NULL, '2020-07-25 15:27:04', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(13, 'Prueba1', '2020-07-25 15:38:50', '2020-07-25 15:38:50', NULL),
(14, 'Prueba2', '2020-07-25 15:38:59', '2020-07-25 15:38:59', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `filters`
--

DROP TABLE IF EXISTS `filters`;
CREATE TABLE `filters` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `item` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `orderId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `item`, `quantity`, `price`, `orderId`) VALUES
(271, 'DESODORANTE DE PISOS CONCENTRADO AROMA CHERRY X 1 LT\n                                ', 1, '570', 80),
(272, 'DESODORANTE DE PISOS CONCENTRADO AROMA LAVANDA X 1 LT\n                                ', 1, '570', 80),
(273, 'DESODORANTE PARA PISOS BEBE X 5 LT\n                                ', 1, '160', 80),
(274, 'DESODORANTE PARA PISOS NUEVA LUZ X 5 LT\n                                ', 1, '160', 80);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `totalPrice` decimal(10,0) DEFAULT NULL,
  `shipping` varchar(100) NOT NULL,
  `payment` tinyint(1) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `userId`, `totalPrice`, `shipping`, `payment`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(80, 1002, '1460', 'Envio', 1, '2020-07-25', '2020-07-25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `name` varchar(150) CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_spanish_ci,
  `stock` int(10) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `inOffer` tinyint(1) DEFAULT NULL,
  `discount` tinyint(1) DEFAULT NULL,
  `sku` tinyint(15) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `categoryId`, `name`, `image`, `description`, `stock`, `price`, `inOffer`, `discount`, `sku`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(292, 13, 'Apple Magic Teclado', 'image-1595691560675.jpg', 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.\r\n\r\nAt cum soleat disputationi, quo veri admodum vituperata ad. Ea vix ceteros complectitur, vel cu nihil nullam. Nam placerat oporteat molestiae ei, an putant albucius qui. Oblique menandri ei his, mei te mazim oportere comprehensam.\r\n\r\nExpetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id.', NULL, 7000, 0, 0, NULL, '2020-07-25 15:39:20', '2020-07-25 15:39:20', NULL),
(293, 14, 'Cafetera Moulinex', 'image-1595691748058.jpg', 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.\r\n\r\nAt cum soleat disputationi, quo veri admodum vituperata ad. Ea vix ceteros complectitur, vel cu nihil nullam. Nam placerat oporteat molestiae ei, an putant albucius qui. Oblique menandri ei his, mei te mazim oportere comprehensam.', NULL, 15000, 1, 10, NULL, '2020-07-25 15:42:28', '2020-07-25 15:42:28', NULL),
(294, 13, 'Camara Nikon', 'image-1595691790184.jpg', 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.\r\n\r\nAt cum soleat disputationi, quo veri admodum vituperata ad. Ea vix ceteros complectitur, vel cu nihil nullam. Nam placerat oporteat molestiae ei, an putant albucius qui. Oblique menandri ei his, mei te mazim oportere comprehensam.', NULL, 5520, 0, 0, NULL, '2020-07-25 15:43:10', '2020-07-25 15:43:10', NULL),
(295, 13, 'Tv Samsung Smart', 'image-1595691857695.jpg', 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.\r\n\r\nAt cum soleat disputationi, quo veri admodum vituperata ad. Ea vix ceteros complectitur, vel cu nihil nullam. Nam placerat oporteat molestiae ei, an putant albucius qui. Oblique menandri ei his, mei te mazim oportere comprehensam.', NULL, 55200, 0, 10, NULL, '2020-07-25 15:44:17', '2020-07-25 15:44:17', NULL),
(296, 14, 'Macbook Pro 2019', 'image-1595691897908.jpg', 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.\r\n\r\nAt cum soleat disputationi, quo veri admodum vituperata ad. Ea vix ceteros complectitur, vel cu nihil nullam. Nam placerat oporteat molestiae ei, an putant albucius qui. Oblique menandri ei his, mei te mazim oportere comprehensam.', NULL, 198900, 0, 0, NULL, '2020-07-25 15:44:57', '2020-07-25 15:44:57', NULL),
(297, 13, 'Samsung Galaxy S10 DELUXE', 'image-1595691924601.jpg', 'Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.\r\n\r\nAt cum soleat disputationi, quo veri admodum vituperata ad. Ea vix ceteros complectitur, vel cu nihil nullam. Nam placerat oporteat molestiae ei, an putant albucius qui. Oblique menandri ei his, mei te mazim oportere comprehensam.', NULL, 32500, 1, 5, NULL, '2020-07-25 15:45:24', '2020-07-25 15:45:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200613120847-create-banners.js'),
('20200626004546-create-cart.js'),
('20200626005100-create-shipping.js'),
('20200626005315-create-filter.js'),
('20200709200245-create-item.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `image` varchar(100) NOT NULL,
  `country` varchar(50) DEFAULT NULL,
  `state` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `zipCode` smallint(6) NOT NULL,
  `gender` varchar(5) DEFAULT NULL,
  `phone` bigint(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `isAdmin`, `image`, `country`, `state`, `city`, `zipCode`, `gender`, `phone`, `address`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1001, 'Mati', 'Viscusso', 'mativiscusso@gmail.com', '$2b$10$E1OFjEt6m1UeKl8OesZrbOtrGLnUCTCTOWx6epVzVzRLpQt9Q9lWu', NULL, 'image-1592946618986.jpg', NULL, 'Rosario', 'Rosario', 2000, NULL, 3416460725, 'Calle falsa 123', '2020-06-23', '2020-06-23', NULL),
(1002, 'Administrador', 'Administrador', 'admin@admin.com', '$2b$10$JiuAO7rWRplvJVKG/XACt.ciLLmlafir9cmd/RKcHYfHONiEBGsmS', 1, 'image-1593117262440.png', NULL, 'Rosario', 'Rosario', 2000, NULL, 341341341, 'admin@admin.com', '2020-06-25', '2020-06-25', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `filters`
--
ALTER TABLE `filters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `filterId` (`categoryId`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `items-orders` (`orderId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user-order` (`userId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `filters`
--
ALTER TABLE `filters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=275;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=298;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1003;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `filters`
--
ALTER TABLE `filters`
  ADD CONSTRAINT `filterId` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items-orders` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `user-order` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `categoryId` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
