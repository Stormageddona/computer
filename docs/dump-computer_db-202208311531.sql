-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: computer_db
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_info`
--

DROP TABLE IF EXISTS `account_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_info` (
  `aci_seq` int NOT NULL AUTO_INCREMENT,
  `aci_id` varchar(20) NOT NULL,
  `aci_pwd` varchar(64) NOT NULL,
  `aci_name` varchar(50) NOT NULL,
  `aci_nickname` varchar(20) DEFAULT NULL,
  `aci_phone` varchar(15) NOT NULL,
  `aci_birth` datetime NOT NULL,
  `aci_status` int DEFAULT '1',
  `aci_reg_dt` datetime DEFAULT CURRENT_TIMESTAMP,
  `aci_leave_dt` datetime DEFAULT NULL,
  `aci_grade` int DEFAULT '1',
  PRIMARY KEY (`aci_seq`),
  UNIQUE KEY `account_info_un` (`aci_id`),
  UNIQUE KEY `account_info_uniquephone` (`aci_phone`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_info`
--

LOCK TABLES `account_info` WRITE;
/*!40000 ALTER TABLE `account_info` DISABLE KEYS */;
INSERT INTO `account_info` VALUES (1,'user1','4g9CwF3G17sk3kn/7DQTeQ==','유저1','김유저','01051546597','2000-05-13 09:00:00',1,'2022-08-08 11:35:20',NULL,3),(2,'user2','4g9CwF3G17sk3kn/7DQTeQ==','김유저2','김유저2','01022224545','1987-08-14 10:00:00',1,'2022-08-08 14:32:30',NULL,1);
/*!40000 ALTER TABLE `account_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_log`
--

DROP TABLE IF EXISTS `admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_log` (
  `adi_seq` int NOT NULL,
  `adi_aci_seq` int NOT NULL,
  `adi_log` text NOT NULL,
  `adi_log_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`adi_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_log`
--

LOCK TABLES `admin_log` WRITE;
/*!40000 ALTER TABLE `admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `answer_info`
--

DROP TABLE IF EXISTS `answer_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer_info` (
  `asi_seq` int NOT NULL AUTO_INCREMENT,
  `asi_aci_seq` int NOT NULL,
  `asi_qsi_seq` int NOT NULL,
  `asi_title` varchar(100) NOT NULL,
  `asi_comment` varchar(50) NOT NULL,
  `asi_imgs` varchar(50) DEFAULT NULL,
  `asi_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `asi_mod_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `asi_del_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`asi_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer_info`
--

LOCK TABLES `answer_info` WRITE;
/*!40000 ALTER TABLE `answer_info` DISABLE KEYS */;
INSERT INTO `answer_info` VALUES (1,1,1,'asdasda','<p>asdadasda</p>\n',NULL,'2022-08-26 15:59:50','2022-08-26 15:59:50','2022-08-26 15:59:50');
/*!40000 ALTER TABLE `answer_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_comment_info`
--

DROP TABLE IF EXISTS `board_comment_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_comment_info` (
  `bcmi_seq` int NOT NULL AUTO_INCREMENT,
  `bcmi_aci_seq` int NOT NULL,
  `bcmi_bdi_seq` int NOT NULL,
  `bcmi_comment` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `bcmi_imgs` varchar(50) DEFAULT NULL,
  `bcmi_status` int NOT NULL DEFAULT '1',
  `bcmi_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bcmi_mod_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bcmi_del_dt` datetime DEFAULT NULL,
  PRIMARY KEY (`bcmi_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_comment_info`
--

LOCK TABLES `board_comment_info` WRITE;
/*!40000 ALTER TABLE `board_comment_info` DISABLE KEYS */;
INSERT INTO `board_comment_info` VALUES (1,1,1,'댓글 수정 테스트',NULL,1,'2022-08-25 14:11:32','2022-08-31 11:48:16',NULL),(2,1,7,'댓글 등록 테스트',NULL,1,'2022-08-31 12:03:04','2022-08-31 12:03:04',NULL);
/*!40000 ALTER TABLE `board_comment_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_count_info`
--

DROP TABLE IF EXISTS `board_count_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_count_info` (
  `bci_seq` int NOT NULL AUTO_INCREMENT,
  `bci_aci_seq` int NOT NULL,
  `bci_bdi_seq` int NOT NULL,
  `bci_count_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`bci_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_count_info`
--

LOCK TABLES `board_count_info` WRITE;
/*!40000 ALTER TABLE `board_count_info` DISABLE KEYS */;
INSERT INTO `board_count_info` VALUES (1,1,1,'2022-08-26 15:17:41'),(2,1,1,'2022-08-26 15:19:11'),(3,1,1,'2022-08-26 15:19:26'),(4,1,1,'2022-08-26 15:19:45'),(5,1,6,'2022-08-26 15:26:44');
/*!40000 ALTER TABLE `board_count_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_info`
--

DROP TABLE IF EXISTS `board_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_info` (
  `bdi_seq` int NOT NULL AUTO_INCREMENT,
  `bdi_aci_seq` int NOT NULL,
  `bdi_title` varchar(100) NOT NULL,
  `bdi_comment` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `bdi_imgs` varchar(50) DEFAULT NULL,
  `bdi_status` int NOT NULL DEFAULT '1',
  `bdi_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bdi_mod_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bdi_del_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`bdi_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_info`
--

LOCK TABLES `board_info` WRITE;
/*!40000 ALTER TABLE `board_info` DISABLE KEYS */;
INSERT INTO `board_info` VALUES (1,1,'게시글 수정 테스트','아아 1234',NULL,1,'2022-08-25 14:07:55','2022-08-31 12:23:15','2022-08-25 14:07:56'),(2,1,'asdasda','text_1661404076873.txt',NULL,1,'2022-08-25 14:07:56','2022-08-25 14:07:56','2022-08-25 14:07:56'),(3,1,'asdasdas','text_1661404098608.txt',NULL,1,'2022-08-25 14:08:18','2022-08-25 14:08:18','2022-08-25 14:08:18'),(4,1,'asdasdas','text_1661404098608.txt',NULL,1,'2022-08-25 14:08:18','2022-08-25 14:08:18','2022-08-25 14:08:18'),(5,1,'asdasdasd','text_1661404187399.txt',NULL,1,'2022-08-25 14:09:47','2022-08-25 14:09:47','2022-08-25 14:09:47'),(6,1,'테스트','text_1661495181424.txt',NULL,1,'2022-08-26 15:26:21','2022-08-26 15:26:21','2022-08-26 15:26:21'),(7,1,'asdasd','<p>asdasdasdasdas<img alt=\"\" src=\"/image/board/img_1661849313523.png\" style=\"height:100px; width:100px\" /></p>\n',NULL,1,'2022-08-30 17:48:37','2022-08-30 17:48:37','2022-08-30 17:48:37');
/*!40000 ALTER TABLE `board_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_info`
--

DROP TABLE IF EXISTS `cart_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_info` (
  `ci_seq` int NOT NULL AUTO_INCREMENT,
  `ci_aci_seq` int NOT NULL,
  `ci_prod_table` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `ci_prod_seq` int NOT NULL,
  `ci_prod_count` int NOT NULL,
  PRIMARY KEY (`ci_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_info`
--

LOCK TABLES `cart_info` WRITE;
/*!40000 ALTER TABLE `cart_info` DISABLE KEYS */;
INSERT INTO `cart_info` VALUES (1,1,'case',108,3);
/*!40000 ALTER TABLE `cart_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `case_info`
--

DROP TABLE IF EXISTS `case_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `case_info` (
  `csi_seq` int NOT NULL AUTO_INCREMENT COMMENT '번호',
  `csi_img_seq` int DEFAULT '1' COMMENT '이미지',
  `csi_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '이름',
  `csi_model_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '모델명',
  `csi_company` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '제조사',
  `csi_price` int NOT NULL COMMENT '출고가',
  `csi_size` varchar(20) NOT NULL COMMENT '사이즈',
  `csi_save_socket_num` varchar(20) NOT NULL COMMENT '저장 소켓 개수',
  `csi_release_dt` datetime NOT NULL COMMENT '출시일',
  `csi_use_board` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '사용가능 폼팩터',
  `csi_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  PRIMARY KEY (`csi_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=732 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `case_info`
--

LOCK TABLES `case_info` WRITE;
/*!40000 ALTER TABLE `case_info` DISABLE KEYS */;
INSERT INTO `case_info` VALUES (701,69,'잘만 Z10 PLUS','Z10 PLUS','잘만',87350,'488','4','2022-08-29 00:00:00','3','2022-08-29 15:22:19'),(702,72,'앱코 NCORE G30 트루포스','NCORE G30 트루포스','앱코',42660,'485','4','2022-08-29 00:00:00','3','2022-08-29 15:27:21'),(703,73,'앱코 G40 시그니처','G40 시그니처','앱코',59400,'485','4','2022-08-29 00:00:00','4','2022-08-29 15:32:08'),(704,74,'darkFlash DLH21 (민트)','DLH21 (민트)','darkFlash',101520,'412','1','2022-08-29 00:00:00','3','2022-08-29 15:35:16'),(705,75,'COX G200 시드 (블랙)','G200 시드 (블랙)','COX',40500,'480','6','2022-08-29 00:00:00','3','2022-08-29 15:37:14'),(706,76,'잘만 X3 RGB 강화유리 (WHITE)','X3 RGB 강화유리 (WHITE)','잘만',106870,'459','4','2022-08-29 00:00:00','3','2022-08-29 15:38:52'),(707,77,'앱코 G40 시그니처 (블랙)','G40 시그니처 (블랙)','앱코',54540,'485','4','2022-08-29 00:00:00','3','2022-08-29 15:40:11'),(708,78,'앱코 NCORE G30 트루포스 (블랙)','NCORE G30 트루포스 (블랙)','앱코',42660,'485','6','2022-08-29 00:00:00','3','2022-08-29 15:42:53'),(709,79,'darkFlash DLX21 RGB MESH 강화유리 (화이트)','DLX21 RGB MESH 강화유리 (화이트)','darkFlash',94500,'493','4','2022-08-29 00:00:00','3','2022-08-29 15:44:33'),(710,80,'마이크로닉스 Master M60 메쉬 (블랙)','Master M60 메쉬 (블랙)','마이크로닉스',38200,'461','6','2022-08-29 00:00:00','3','2022-08-29 15:47:50'),(711,81,'앱코 G20M 미니킬러 (블랙)','G20M 미니킬러 (블랙)','앱코',29160,'405','1','2022-08-29 00:00:00','3','2022-08-29 15:49:17'),(712,82,'앱코 SUITMASTER P1000 강화유리 (블랙)','SUITMASTER P1000 강화유리 (블랙)','앱코',63720,'460','4','2022-08-29 00:00:00','3','2022-08-29 15:50:50'),(713,83,'DAVEN KAISER AIR 강화유리 (블랙)','KAISER AIR 강화유리 (블랙)','DAVEN',45900,'483','4','2022-08-29 00:00:00','3','2022-08-29 15:54:53'),(714,84,'앱코 G40 시그니처 (화이트)','G40 시그니처 (화이트)','앱코',59400,'485','4','2022-08-29 00:00:00','3','2022-08-29 15:56:22'),(715,85,'darkFlash DK200 RGB 강화유리 (블랙)','DK200 RGB 강화유리 (블랙)','darkFlash',34560,'441','4','2022-08-29 00:00:00','3','2022-08-29 15:58:16'),(716,86,'darkFlash DK1000 MESH 강화유리 (블랙)','DK1000 MESH 강화유리 (블랙)','darkFlash',61560,'470','4','2022-08-29 00:00:00','3','2022-08-29 15:59:29'),(717,87,'darkFlash DLX21 RGB MESH 강화유리 (블랙)','darkFlash DLX21 RGB MESH 강화유리 (블랙)','darkFlash',92340,'493','4','2022-08-29 00:00:00','3','2022-08-29 16:03:03'),(718,88,'앱코 V20 베놈도어 (블랙)','V20 베놈도어 (블랙)','앱코',41040,'455','6','2022-08-29 00:00:00','3','2022-08-29 16:05:06'),(719,89,'잘만 N4 CTRL','N4 CTRL','잘만',36350,'446','6','2022-08-29 00:00:00','3','2022-08-29 16:07:05'),(720,90,'darkFlash DLX200 MESH RGB 강화유리 (블랙)','DLX200 MESH RGB 강화유리 (블랙)','darkFlash',114480,'495','4','2022-08-29 00:00:00','3','2022-08-29 16:08:22'),(721,91,'COX G200 시드 (블랙)','G200 시드 (블랙)','COX',40500,'480','6','2022-08-29 00:00:00','3','2022-08-29 16:10:35'),(722,92,'잘만 N3 FM 강화유리 (블랙)','N3 FM 강화유리 (블랙)','잘만',32940,'445','6','2022-08-29 00:00:00','3','2022-08-29 16:27:48'),(723,93,'마이크로닉스 EM1-Woofer 강화유리 (화이트)','EM1-Woofer 강화유리 (화이트)','마이크로닉스',46870,'424','2','2022-08-29 00:00:00','3','2022-08-29 16:29:01'),(724,94,'마이크로닉스 EM2-STEREO (블랙)','EM2-STEREO (블랙)','마이크로닉스',44820,'490','4','2022-08-29 00:00:00','3','2022-08-29 17:07:34'),(725,95,'마이크로닉스 COOLMAX HAMMER','COOLMAX HAMMER','마이크로닉스',27650,'455','1','2022-08-29 00:00:00','3','2022-08-29 17:09:19'),(726,96,'컴이지 킹덤 라이트','킹덤 라이트','컴이지',15960,'350','1','2022-08-29 00:00:00','3','2022-08-29 17:10:19'),(727,97,'앱코 NCORE G30 트루포스 (화이트)','NCORE G30 트루포스 (화이트)','앱코',48060,'485','4','2022-08-29 00:00:00','3','2022-08-29 17:24:46'),(728,98,'ASUS TUF Gaming GT501','TUF Gaming GT501','ASUS',168480,'551','4','2022-08-29 00:00:00','3','2022-08-29 17:25:53'),(729,99,'앱코 SUITMASTER S2000 제로노이즈 (블랙)','앱코 SUITMASTER S2000 제로노이즈 (블랙)','앱코',150000,'520','1','2022-08-29 00:00:00','3','2022-08-29 17:34:37'),(730,100,'앱코 NCORE 커넬 강화유리','NCORE 커넬 강화유리','앱코',29160,'445','1','2022-08-29 00:00:00','3','2022-08-29 17:35:31'),(731,101,'마이크로닉스 GM3-문','GM3-문','마이크로닉스',70740,'485','4','2022-08-29 00:00:00','3','2022-08-29 17:36:51');
/*!40000 ALTER TABLE `case_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cooler_info`
--

DROP TABLE IF EXISTS `cooler_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cooler_info` (
  `coi_seq` int NOT NULL AUTO_INCREMENT COMMENT '번호',
  `coi_img_seq` int DEFAULT '1' COMMENT '이미지',
  `coi_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '이름',
  `coi_model_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '모델명',
  `coi_company` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '제조사',
  `coi_price` int NOT NULL COMMENT '출고가',
  `coi_release_dt` datetime NOT NULL COMMENT '출시일',
  `coi_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  `coi_type` varchar(20) NOT NULL COMMENT '타입',
  `coi_size` varchar(20) NOT NULL COMMENT '사이즈',
  `coi_noize` varchar(20) NOT NULL COMMENT '소음',
  PRIMARY KEY (`coi_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cooler_info`
--

LOCK TABLES `cooler_info` WRITE;
/*!40000 ALTER TABLE `cooler_info` DISABLE KEYS */;
INSERT INTO `cooler_info` VALUES (1,150,'녹투아 NH-D15','NH-D15','Noctua',153690,'2020-05-10 00:00:00','2022-08-31 14:32:41','공랭','165mm','24.6dBA'),(2,1,'딥쿨 AK620','AK620','DeepCool',80120,'2021-03-27 00:00:00','2022-08-31 15:16:16','공랭','120mm*2','28dBA');
/*!40000 ALTER TABLE `cooler_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cpu_info`
--

DROP TABLE IF EXISTS `cpu_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cpu_info` (
  `cpi_seq` int NOT NULL AUTO_INCREMENT COMMENT '번호',
  `cpi_img_seq` int DEFAULT '1' COMMENT '이미지',
  `cpi_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '이름',
  `cpi_model_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '모델명',
  `cpi_company` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '제조사',
  `cpi_price` int NOT NULL COMMENT '출고가',
  `cpi_release_dt` datetime DEFAULT NULL COMMENT '출시일',
  `cpi_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  `cpi_core_num` varchar(15) DEFAULT NULL COMMENT '코어숫자',
  `cpi_thread_num` varchar(15) DEFAULT NULL COMMENT '스레드숫자',
  `cpi_clock` int DEFAULT NULL COMMENT '출력',
  `cpi_cache` varchar(15) DEFAULT NULL COMMENT '캐시',
  `cpi_graphic` int DEFAULT '1' COMMENT '내장그래픽 유무',
  PRIMARY KEY (`cpi_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cpu_info`
--

LOCK TABLES `cpu_info` WRITE;
/*!40000 ALTER TABLE `cpu_info` DISABLE KEYS */;
INSERT INTO `cpu_info` VALUES (97,34,'\'AMD 라이젠5 PRO 4650G (르누아르) (멀티팩(정품))\'','\'AMD 라이젠5 PRO 4650G\'','\'AMD\'',178000,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',3,'\'8MB\'',1),(98,35,'\'AMD 라이젠7-4세대 5800X3D (버미어) (정품)\'','\'AMD 라이젠7-4세대 5800X3D\'','\'AMD\'',613440,'2022-08-28 15:00:00','2022-08-29 11:47:59','8','16',3,'\'96MB\'',0),(99,36,'AMD 라이젠5-4세대 5600X (버미어) (멀티팩(정품))','\'AMD 라이젠5-4세대 5600X\'','\'AMD\'',225630,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',3,'\'32MB\'',0),(100,37,'\'AMD 라이젠5-4세대 5600 (버미어) (멀티팩(정품))\'','\'AMD 라이젠5-4세대 5600\'','\'AMD\'',192030,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',3,'\'32MB\'',0),(101,38,'\'인텔 i5-12세대 12400F (엘더레이크) (정품)\'','\'인텔 i5-12세대 12400F\'','\'인텔\'',258660,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',2,'\'18MB\'',0),(102,39,'\'인텔 i7-12세대 12700K (엘더레이크) (정품)\'','\'인텔 i7-12세대 12700K\'','\'인텔\'',620700,'2022-08-28 15:00:00','2022-08-29 11:47:59','\'8+4\'','\'16+4\'',3,'\'25MB\'',1),(103,40,'\'AMD 라이젠7-4세대 5800X (버미어) (멀티팩(정품))\'','\'AMD 라이젠7-4세대 5800X\'','\'AMD\'',367200,'2022-08-28 15:00:00','2022-08-29 11:47:59','8','16',3,'\'32MB\'',0),(104,41,'\'AMD 라이젠7-4세대 5800X3D (버미어) (정품)\'','\'AMD 라이젠7-4세대 5800X3D\'','\'AMD\'',613440,'2022-08-28 15:00:00','2022-08-29 11:47:59','8','16',3,'\'96MB\'',0),(105,42,'\'인텔 i9-12세대 12900KS (엘더레이크) (정품)\'','\'인텔 i9-12세대 12900KS\'','\'인텔\'',1056240,'2022-08-28 15:00:00','2022-08-29 11:47:59','\'8+8\'','\'16+8\'',3,'\'30MB\'',1),(106,43,'\'인텔 i7-12세대 12700F (엘더레이크) (정품)\'','\'인텔 i7-12세대 12700F\'','\'인텔\'',483740,'2022-08-28 15:00:00','2022-08-29 11:47:59','\'8+4\'','\'16+4\'',2,'\'25MB\'',0),(107,44,'\'AMD 라이젠5-4세대 5600G (세잔) (멀티팩(정품))\'','\'AMD 라이젠5-4세대 5600G\'','\'AMD\'',211680,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',3,'\'16MB\'',1),(108,45,'\'AMD 라이젠5 PRO 4650G (르누아르) (멀티팩(정품))\'','\'AMD 라이젠5 PRO 4650G\'','\'AMD\'',178000,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',3,'\'8MB\'',1),(109,46,'\'인텔 i5-12세대 12400 (엘더레이크) (정품)\'','\'인텔 i5-12세대 12400\'','\'인텔\'',289980,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',2,'\'18MB\'',1),(110,47,'\'인텔 i3-12세대 12100F (엘더레이크) (정품)\'','\'인텔 i3-12세대 12100F\'','\'인텔\'',140400,'2022-08-28 15:00:00','2022-08-29 11:47:59','4','8',3,'\'12MB\'',0),(111,48,'\'인텔 i3-12세대 12100 (엘더레이크) (정품)\'','\'인텔 i3-12세대 12100\'','\'인텔\'',188790,'2022-08-28 15:00:00','2022-08-29 11:47:59','4','8',3,'\'12MB\'',1),(112,49,'\'AMD 라이젠5-3세대 4600G (르누아르) (멀티팩(정품))\'','\'AMD 라이젠5-3세대 4600G\'','\'AMD\'',151740,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',3,'\'8MB\'',1),(113,50,'\'인텔 i5-12세대 12400F (엘더레이크) (벌크)\'','\'인텔 i5-12세대 12400F\'','\'인텔\'',216760,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',2,'\'18MB\'',0),(114,51,'\'AMD 라이젠9-4세대 5900X (버미어) (정품)\'','\'AMD 라이젠9-4세대\'','\'AMD\'',522180,'2022-08-28 15:00:00','2022-08-29 11:47:59','12','24',3,'\'64MB\'',0),(115,52,'\'인텔 i9-12세대 12900K (엘더레이크) (정품)\'','\'인텔 i9-12세대 12900K\'','\'인텔\'',856340,'2022-08-28 15:00:00','2022-08-29 11:47:59','\'8+8\'','\'16+8\'',3,'\'30MB\'',1),(116,53,'\'인텔 i7-12세대 12700KF (엘더레이크) (정품)\'','\'인텔 i7-12세대 12700KF\'','\'인텔\'',571320,'2022-08-28 15:00:00','2022-08-29 11:47:59','\'8+4\'','\'16+4\'',3,'\'25MB\'',0),(117,54,'\'AMD 라이젠5-4세대 5600 (버미어) (정품)\'','\'AMD 라이젠5-4세대 5600\'','\'AMD\'',195920,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',3,'\'32MB\'',0),(118,55,'\'인텔 i5-12세대 12500 (엘더레이크) (정품)\'','\'인텔 i5-12세대 12500\'','\'인텔\'',309960,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',3,'\'18MB\'',1),(119,56,'\'인텔 i5-12세대 12600KF (엘더레이크) (정품)\'','\'인텔 i5-12세대 12600KF\'','\'인텔\'',396090,'2022-08-28 15:00:00','2022-08-29 11:47:59','\'6+4\'','\'12+4\'',3,'\'20MB\'',0),(120,57,'\'AMD 라이젠9-4세대 5950X (버미어) (정품)\'','\'AMD 라이젠9-4세대 5950X\'','\'AMD\'',764640,'2022-08-28 15:00:00','2022-08-29 11:47:59','16','32',3,'\'64MB\'',0),(121,58,'\'인텔 i5-12세대 12600K (엘더레이크) (정품)\'','\'인텔 i5-12세대 12600K\'','\'인텔\'',415050,'2022-08-28 15:00:00','2022-08-29 11:47:59','\'6+4\'','\'12+4\'',3,'\'20MB\'',1),(122,59,'\'인텔 i7-12세대 12700 (엘더레이크) (정품)\'','\'인텔 i7-12세대 12700\'','\'인텔\'',504150,'2022-08-28 15:00:00','2022-08-29 11:47:59','\'8+4\'','\'16+4\'',2,'\'25MB\'',1),(123,60,'\'AMD 라이젠7-4세대 5700X (버미어) (멀티팩(정품))\'','\'AMD 라이젠7-4세대 5700X\'','\'AMD\'',313740,'2022-08-28 15:00:00','2022-08-29 11:47:59','8','16',3,'\'32MB\'',0),(124,61,'\'AMD 라이젠7-4세대 5700G (세잔) (멀티팩(정품))\'','\'AMD 라이젠7-4세대 5700G\'','\'AMD\'',321170,'2022-08-28 15:00:00','2022-08-29 11:47:59','8','16',3,'\'16MB\'',1),(125,62,'\'AMD 라이젠5-4세대 5500 (세잔) (정품)\'','\'AMD 라이젠5-4세대 5500\'','\'AMD\'',176040,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',3,'\'16MB\'',0),(126,63,'\'AMD 라이젠3 PRO 4350G (르누아르) (멀티팩(정품))\'','\'AMD 라이젠3 PRO 4350G\'','\'AMD\'',141960,'2022-08-28 15:00:00','2022-08-29 11:47:59','4','8',3,'\'4MB\'',1),(127,64,'\'AMD 라이젠 스레드리퍼 PRO 5995WX (샤갈 프로) (정품)\'','\'AMD 라이젠 스레드리퍼 PRO 5995WX\'','\'AMD\'',10584000,'2022-08-28 15:00:00','2022-08-29 11:47:59','64','128',2,'\'256MB\'',0),(128,65,'\'AMD 라이젠5-4세대 5600X (버미어) (정품)\'','\'AMD 라이젠5-4세대 5600X\'','\'AMD\'',0,'2022-08-28 15:00:00','2022-08-29 11:47:59','6','12',3,'\'32MB\'',0);
/*!40000 ALTER TABLE `cpu_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gpu_info`
--

DROP TABLE IF EXISTS `gpu_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gpu_info` (
  `gpi_seq` int NOT NULL AUTO_INCREMENT COMMENT '번호',
  `gpi_img_seq` int DEFAULT '1' COMMENT '이미지',
  `gpi_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '이름',
  `gpi_model_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '모델명',
  `gpi_company` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '제조사',
  `gpi_price` int NOT NULL COMMENT '출고가',
  `gpi_lineup` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '라인업',
  `gpi_processor_num` varchar(20) NOT NULL COMMENT '프로세스 개수',
  `gpi_boost_clock` varchar(20) NOT NULL COMMENT '부스트 클럭 출력',
  `gpi_memory_volume` varchar(20) NOT NULL COMMENT '메모리 용량',
  `gpi_release_dt` datetime NOT NULL COMMENT '출시일',
  `gpi_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  `gpi_interface` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '인터페이스',
  `gpi_dp_num` varchar(20) NOT NULL COMMENT 'DisplayPort 버전',
  `gpi_hdmi_num` varchar(20) NOT NULL COMMENT 'HDMI 버전',
  `gpi_length` varchar(20) NOT NULL COMMENT '크기',
  `gpi_power_use` varchar(20) NOT NULL COMMENT '사용전력',
  PRIMARY KEY (`gpi_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gpu_info`
--

LOCK TABLES `gpu_info` WRITE;
/*!40000 ALTER TABLE `gpu_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `gpu_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hdd_info`
--

DROP TABLE IF EXISTS `hdd_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hdd_info` (
  `hdi_seq` int NOT NULL AUTO_INCREMENT COMMENT '번호',
  `hdi_img_seq` int DEFAULT '1' COMMENT '이미지',
  `hdi_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '이름',
  `hdi_model_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '모델명',
  `hdi_company` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '제조사',
  `hdi_price` int NOT NULL COMMENT '출고가',
  `hdi_release_dt` datetime NOT NULL COMMENT '출시일',
  `hdi_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  `hdi_volume` varchar(20) NOT NULL COMMENT '용량',
  `hdi_read_speed` varchar(20) NOT NULL COMMENT '읽기 속도',
  `hdi_write_speed` varchar(20) NOT NULL COMMENT '쓰기 속도',
  PRIMARY KEY (`hdi_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hdd_info`
--

LOCK TABLES `hdd_info` WRITE;
/*!40000 ALTER TABLE `hdd_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `hdd_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_info`
--

DROP TABLE IF EXISTS `image_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_info` (
  `img_seq` int NOT NULL AUTO_INCREMENT,
  `img_src` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`img_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_info`
--

LOCK TABLES `image_info` WRITE;
/*!40000 ALTER TABLE `image_info` DISABLE KEYS */;
INSERT INTO `image_info` VALUES (34,'products/11876443_1.png'),(35,'products/16872089_1.png'),(36,'products/12625265_1.png'),(37,'products/16741211_1.png'),(38,'products/16101353_1.png'),(39,'products/15594638_1.png'),(40,'products/12836186_1.png'),(41,'products/16872089_1.png'),(42,'products/16756757_1.png'),(43,'products/16101464_1.png'),(44,'products/14927675_1.png'),(45,'products/11876443_1.png'),(46,'products/16101326_1.png'),(47,'products/16101179_1.png'),(48,'products/16101083_1.png'),(49,'products/17214128_1.png'),(50,'products/16155656_1.png'),(51,'products/12622091_1.png'),(52,'products/15594887_1.png'),(53,'products/15594701_1.png'),(54,'products/17157083_1.png'),(55,'products/16101398_1.png'),(56,'products/15594446_1.png'),(57,'products/12622319_1.png'),(58,'products/15594263_1.png'),(59,'products/16140809_1.png'),(60,'products/16741349_1.png'),(61,'products/14927759_1.png'),(62,'products/16740791_1.png'),(63,'products/11876290_1.png'),(64,'products/17570783_1.png'),(65,'products/12621851_1.png'),(69,'products/img_1661753994909.jpg'),(72,'products/img_1661754389945.jpg'),(73,'products/img_1661754667967.jpg'),(74,'products/img_1661754799835.jpg'),(75,'products/img_1661754970502.jpg'),(76,'products/img_1661755084127.jpg'),(77,'products/img_1661755168464.jpg'),(78,'products/img_1661755314130.jpg'),(79,'products/img_1661755412750.jpg'),(80,'products/img_1661755667687.jpg'),(81,'products/img_1661755711086.jpg'),(82,'products/img_1661755792001.jpg'),(83,'products/img_1661756090622.jpg'),(84,'products/img_1661756137197.jpg'),(85,'products/img_1661756251186.jpg'),(86,'products/img_1661756319018.jpg'),(87,'products/img_1661756510660.jpg'),(88,'products/img_1661756651388.jpg'),(89,'products/img_1661756777069.jpg'),(90,'products/img_1661756853482.jpg'),(91,'products/img_1661756988978.jpg'),(92,'products/img_1661758032929.jpg'),(93,'products/img_1661758084170.jpg'),(94,'products/img_1661760404213.jpg'),(95,'products/img_1661760516247.jpg'),(96,'products/img_1661760583402.jpg'),(97,'products/img_1661761437571.jpg'),(98,'products/img_1661761508254.jpg'),(99,'products/img_1661761927008.jpg'),(100,'products/img_1661762099161.jpg'),(101,'products/img_1661762156460.jpg'),(102,'products/img_1661762426903.jpg'),(103,'products/img_1661762519489.jpg'),(104,'products/img_1661762866876.jpg'),(105,'products/img_1661763056680.jpg'),(106,'products/img_1661763127722.jpg'),(107,'products/img_1661763746462.jpg'),(108,'products/img_1661837028588.jpg'),(109,'products/img_1661837089956.jpg'),(110,'products/img_1661837133276.jpg'),(111,'products/img_1661837178784.jpg'),(112,'products/img_1661837433350.jpg'),(113,'products/img_1661837476378.jpg'),(114,'products/img_1661838084035.jpg'),(115,'products/img_1661838161128.jpg'),(116,'products/img_1661838222600.jpg'),(117,'products/img_1661838274413.jpg'),(118,'products/img_1661838346469.jpg'),(119,'products/img_1661838397554.jpg'),(120,'products/img_1661838455300.jpg'),(121,'products/img_1661838536355.jpg'),(122,'products/img_1661838601638.jpg'),(123,'products/img_1661838666861.jpg'),(124,'products/img_1661838739360.jpg'),(125,'products/img_1661839052900.jpg'),(126,'products/img_1661839161934.jpg'),(127,'products/img_1661839228816.jpg'),(128,'products/img_1661839498136.jpg'),(129,'products/img_1661839554428.jpg'),(130,'products/img_1661839608221.jpg'),(131,'products/img_1661839656726.jpg'),(132,'products/img_1661839705856.jpg'),(133,'products/img_1661839750891.jpg'),(134,'products/img_1661839804939.jpg'),(137,'products/img_1661842776694.jpg'),(138,'products/img_1661842994702.jpg'),(139,'products/img_1661843129681.jpg'),(140,'products/img_1661843322335.jpg'),(141,'products/img_1661843428478.jpg'),(142,'products/img_1661844187596.jpg'),(143,'products/img_1661844324351.jpg'),(144,'products/img_1661844426084.jpg'),(145,'products/img_1661847681124.jpg'),(146,'products/img_1661847970513.jpg'),(147,'products/img_1661848085019.jpg'),(148,'products/img_1661848296189.jpg'),(149,'board/img_1661849313523.png'),(150,'products/img_1661923888544.png');
/*!40000 ALTER TABLE `image_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like_info`
--

DROP TABLE IF EXISTS `like_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `like_info` (
  `lki_seq` int NOT NULL,
  `lki_aci_seq` int NOT NULL,
  `lki_prod_seq` int NOT NULL,
  `lki_prod_table_num` int NOT NULL,
  `lki_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`lki_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like_info`
--

LOCK TABLES `like_info` WRITE;
/*!40000 ALTER TABLE `like_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `like_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mainboard_info`
--

DROP TABLE IF EXISTS `mainboard_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mainboard_info` (
  `mii_seq` int NOT NULL AUTO_INCREMENT COMMENT '번호',
  `mii_img_seq` int DEFAULT '1' COMMENT '이미지',
  `mii_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '이름',
  `mii_model_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '모델명',
  `mii_company` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '제조사',
  `mii_price` int NOT NULL COMMENT '출고가',
  `mii_fomr_factor` varchar(20) NOT NULL COMMENT '폼팩터',
  `mii_power_supply` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '전원부',
  `mii_memory_version` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '메모리 버전',
  `mii_memory_socket` varchar(20) NOT NULL COMMENT '메모리 소켓',
  `mii_release_dt` datetime NOT NULL COMMENT '출시일',
  `mii_pclex16_num` varchar(20) NOT NULL COMMENT 'pclex16숫자',
  `mii_pclex1_num` varchar(20) NOT NULL COMMENT 'pclex1 숫자',
  `mii_sata_version` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT 'sata 버전',
  `mii_sata_num` varchar(20) NOT NULL COMMENT 'sata 갯수',
  `mii_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  PRIMARY KEY (`mii_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mainboard_info`
--

LOCK TABLES `mainboard_info` WRITE;
/*!40000 ALTER TABLE `mainboard_info` DISABLE KEYS */;
INSERT INTO `mainboard_info` VALUES (1,137,'MSI MAG B660M 박격포 DDR4','MAG B660M 박격포 DDR4','MSI',220320,'M-ATX','12+1+1페이즈','DDR4','4','2022-08-30 00:00:00','2','1','3','6','2022-08-30 15:59:40'),(2,138,'BIOSTAR H610MH D4 이엠텍','H610MH D4 이엠텍','BIOSTAR',96120,'M-ATX','8+1+1페이즈','DDR4','2','2022-08-30 00:00:00','1','1','3','4','2022-08-30 16:03:17'),(3,139,'GIGABYTE B560M DS3H PLUS 듀러블에디션 피씨디렉트','B560M DS3H PLUS 듀러블에디션 피씨디렉트','GIGABYTE',97200,'M-ATX','6+2','DDR4','4','2022-08-30 00:00:00','1','2','3','6','2022-08-30 16:05:32'),(4,140,'MSI PRO H610M-G DDR4','PRO H610M-G DDR4','MSI',123120,'M-ATX','0','DDR4','2','2022-08-30 00:00:00','1','1','0','0','2022-08-30 16:08:45'),(5,141,'ASRock H610M-HDV/M.2 D4 에즈윈','H610M-HDV/M.2 D4 에즈윈','ASRock',106330,'M-ATX','6페이즈','DDR4','2','2022-08-30 00:00:00','1','2','3','4','2022-08-30 16:10:30'),(6,142,'GIGABYTE B660M DS3H D4 피씨디렉트','B660M DS3H D4 피씨디렉트','GIGABYTE',150060,'M-ATX','6+2+1페이즈','DDR4','4','2022-08-30 00:00:00','1','2','3','4','2022-08-30 16:23:09'),(7,143,'ASUS PRIME B660M-K D4 인텍앤컴퍼니','PRIME B660M-K D4 인텍앤컴퍼니','ASUS',150120,'M-ATX','6+1+1','DDR4','2','2022-08-30 00:00:00','1','2','3','4','2022-08-30 16:25:27'),(8,144,'ASUS EX A320M-GAMING 대원씨티에스','EX A320M-GAMING 대원씨티에스','ASUS',77980,'M-ATX','6페이즈','DDR4','4','2022-08-30 00:00:00','1','1','3','4','2022-08-30 16:27:08'),(9,145,'ASRock B660M Pro RS D4 에즈윈','B660M Pro RS D4 에즈윈','ASRock',151900,'M-ATX','8페이즈','DDR4','4','2022-08-30 00:00:00','2','1','3','4','2022-08-30 17:21:23'),(10,146,'ASUS TUF Gaming B550-PLUS 대원씨티에스','TUF Gaming B550-PLUS 대원씨티에스','ASUS',168950,'ATX','8+2페이즈','DDR4','4','2022-08-30 00:00:00','2','1','3','6','2022-08-30 17:26:12'),(11,147,'MSI MAG B550M 박격포','MAG B550M 박격포','MSI',160580,'M-ATX','8+2+1페이즈','DDR4','4','2022-08-30 00:00:00','2','2','3','6','2022-08-30 17:28:07'),(12,148,'ASUS PRIME B550M-A 대원씨티에스','PRIME B550M-A 대원씨티에스','ASUS',139860,'M-ATX','0','DDR4','4','2022-08-30 00:00:00','1','2','3','4','2022-08-30 17:31:38');
/*!40000 ALTER TABLE `mainboard_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memory_info`
--

DROP TABLE IF EXISTS `memory_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memory_info` (
  `mmi_seq` int NOT NULL AUTO_INCREMENT COMMENT '번호',
  `mmi_img_seq` int DEFAULT '1' COMMENT '이미지',
  `mmi_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '이름',
  `mmi_model_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '모델명',
  `mmi_company` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '제조사',
  `mmi_price` int NOT NULL COMMENT '출고가',
  `mmi_release_dt` datetime NOT NULL COMMENT '출시일',
  `mmi_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  `mmi_volume` varchar(20) NOT NULL COMMENT '용량',
  `mmi_clock` varchar(20) NOT NULL COMMENT '출력',
  `mmi_type` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '지원버전',
  PRIMARY KEY (`mmi_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memory_info`
--

LOCK TABLES `memory_info` WRITE;
/*!40000 ALTER TABLE `memory_info` DISABLE KEYS */;
INSERT INTO `memory_info` VALUES (1,33,'ㅁㄴㅇ','ㅁㄴㅇㅁ','ㅁㄴㅇㅁ',112,'1111-11-11 00:00:00','2022-08-29 11:15:05','1241','1241','12412');
/*!40000 ALTER TABLE `memory_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `power_info`
--

DROP TABLE IF EXISTS `power_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `power_info` (
  `poi_seq` int NOT NULL AUTO_INCREMENT COMMENT '번호',
  `poi_img_seq` int DEFAULT '1' COMMENT '이미지',
  `poi_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '이름',
  `poi_model_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '모델명',
  `poi_company` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '제조사',
  `poi_price` int NOT NULL COMMENT '출고가',
  `poi_release_dt` datetime NOT NULL COMMENT '출시일',
  `poi_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  `poi_reted_power` varchar(20) NOT NULL COMMENT '출력',
  `poi_size` varchar(20) NOT NULL COMMENT '크기',
  PRIMARY KEY (`poi_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `power_info`
--

LOCK TABLES `power_info` WRITE;
/*!40000 ALTER TABLE `power_info` DISABLE KEYS */;
INSERT INTO `power_info` VALUES (1,102,'앱코 XPERT XP-500N','XPERT XP-500N','앱코',32620,'2022-08-29 00:00:00','2022-08-29 17:41:15','500','140'),(2,103,'마이크로닉스 COOLMAX VISION II 500W','COOLMAX VISION II 500W','마이크로닉스',38880,'2022-08-29 00:00:00','2022-08-29 17:42:36','500','140'),(3,104,'맥스엘리트 MAXWELL BARON 800W 80PLUS BRONZE 플랫','MAXWELL BARON 800W 80PLUS BRONZE 플랫','맥스엘리트',81540,'2022-08-29 00:00:00','2022-08-29 17:48:27','800','140'),(4,105,'잘만 MegaMax ET 600W 80PLUS STANDARD','MegaMax ET 600W 80PLUS STANDARD','잘만',46200,'2022-08-29 00:00:00','2022-08-29 17:51:41','600','140'),(5,106,'ASUS ROG THOR 850P 80PLUS PLATINUM','ROG THOR 850P 80PLUS PLATINUM','ASUS',294440,'2022-08-29 00:00:00','2022-08-29 17:53:06','852','160'),(6,107,'쿨러마스터 MWE 600 BRONZE V2 230V','MWE 600 BRONZE V2 230V','쿨러마스터',52090,'2022-08-29 00:00:00','2022-08-29 18:03:07','600','140'),(7,108,'마이크로닉스 Classic II 풀체인지 700W 80PLUS BRONZE 230V EU','Classic II 풀체인지 700W 80PLUS BRONZE 230V EU','마이크로닉스',73780,'2022-08-30 00:00:00','2022-08-30 14:23:50','700','140'),(8,109,'마이크로닉스 Classic II 풀체인지 600W 80PLUS BRONZE 230V EU','Classic II 풀체인지 600W 80PLUS BRONZE 230V EU','마이크로닉스',57510,'2022-08-30 00:00:00','2022-08-30 14:24:52','600','140'),(9,110,'잘만 MegaMax 600W 80PLUS STANDARD','MegaMax 600W 80PLUS STANDARD','잘만',50770,'2022-08-30 00:00:00','2022-08-30 14:25:35','600','140'),(10,111,'마이크로닉스 Classic II 850W 80PLUS GOLD 230V EU 풀모듈러','Classic II 850W 80PLUS GOLD 230V EU 풀모듈러','마이크로닉스',156240,'2022-08-30 00:00:00','2022-08-30 14:26:20','850','140'),(11,112,'마이크로닉스 COOLMAX VISION II 500W','COOLMAX VISION II 500W','마이크로닉스',38880,'2022-08-30 00:00:00','2022-08-30 14:30:35','500','140'),(12,113,'마이크로닉스 Classic II 풀체인지 500W 80PLUS BRONZE 230V EU','Classic II 풀체인지 500W 80PLUS BRONZE 230V EU','마이크로닉스',48530,'2022-08-30 00:00:00','2022-08-30 14:31:19','500','140'),(13,114,'맥스엘리트 MAXWELL BARON 800W 80PLUS BRONZE 플랫','MAXWELL BARON 800W 80PLUS BRONZE 플랫','맥스엘리트',81540,'2022-08-30 00:00:00','2022-08-30 14:41:25','800','140'),(14,115,'EVGA 750 GQ 80PLUS GOLD','EVGA 750 GQ 80PLUS GOLD','이엠텍',113400,'2022-08-30 00:00:00','2022-08-30 14:42:42','750','165'),(15,116,'마이크로닉스 COOLMAX FOCUS II 800W ETA BRONZE','COOLMAX FOCUS II 800W ETA BRONZE','마이크로닉스',68580,'2022-08-30 00:00:00','2022-08-30 14:43:44','800','140'),(16,117,'마이크로닉스 Classic II 750W 80PLUS GOLD 230V EU 풀모듈러','Classic II 750W 80PLUS GOLD 230V EU 풀모듈러','마이크로닉스',126000,'2022-08-30 00:00:00','2022-08-30 14:44:35','750','140'),(17,118,'마이크로닉스 Classic II 1050W 80PLUS GOLD 230V EU 풀모듈러','Classic II 1050W 80PLUS GOLD 230V EU 풀모듈러','마이크로닉스',193980,'2022-08-30 00:00:00','2022-08-30 14:45:48','1050','140'),(18,119,'잘만 EcoMax 500W','EcoMax 500W','잘만',33180,'2022-08-30 00:00:00','2022-08-30 14:46:39','500','140'),(19,120,'ASUS TUF Gaming 750W 80PLUS BRONZE','TUF Gaming 750W 80PLUS BRONZE','ASUS',88320,'2022-08-30 00:00:00','2022-08-30 14:47:38','750','150'),(20,121,'시소닉 A12 STANDARD 230V EU SSR-600RA LLC','A12 STANDARD 230V EU SSR-600RA LLC','시소닉',58220,'2022-08-30 00:00:00','2022-08-30 14:48:58','600','140'),(21,122,'쿨러마스터 MWE 700 BRONZE V2 230V','MWE 700 BRONZE V2 230V','쿨러마스터',67270,'2022-08-30 00:00:00','2022-08-30 14:50:03','700','140'),(22,123,'잘만 MegaMax ET 600W 80PLUS STANDARD','MegaMax ET 600W 80PLUS STANDARD','잘만',46200,'2022-08-30 00:00:00','2022-08-30 14:51:08','600','140'),(23,124,'마이크로닉스 WIZMAX 850W 80PLUS GOLD','WIZMAX 850W 80PLUS GOLD','마이크로닉스',117720,'2022-08-30 00:00:00','2022-08-30 14:52:23','850','120'),(24,125,'FSP HYPER K 700W 80PLUS Standard 230V EU','HYPER K 700W 80PLUS Standard 230V EU','FSP',81030,'2022-08-30 00:00:00','2022-08-30 14:57:35','700','140'),(25,126,'마이크로닉스 Classic II 풀체인지 800W 80PLUS BRONZE 230V EU','Classic II 풀체인지 800W 80PLUS BRONZE 230V EU','마이크로닉스',87890,'2022-08-30 00:00:00','2022-08-30 14:59:26','800','140'),(26,127,'FSP HYDRO G PRO 1000W 80PLUS Gold Full Modular','HYDRO G PRO 1000W 80PLUS Gold Full Modular','FSP',211370,'2022-08-30 00:00:00','2022-08-30 15:00:32','1000','150'),(27,128,'Antec NeoECO 850W 80PLUS GOLD 풀모듈러','NeoECO 850W 80PLUS GOLD 풀모듈러','Antec',155050,'2022-08-30 00:00:00','2022-08-30 15:05:00','850','140'),(28,129,'시소닉 FOCUS GOLD GM-850 Modular','FOCUS GOLD GM-850 Modular','시소닉',162440,'2022-08-30 00:00:00','2022-08-30 15:05:56','850','140'),(29,130,'FSP HYPER K 600W 80PLUS Standard 230V EU','HYPER K 600W 80PLUS Standard 230V EU','FSP',61050,'2022-08-30 00:00:00','2022-08-30 15:06:50','600','140'),(30,131,'시소닉 FOCUS GOLD GM-750 Modular','FOCUS GOLD GM-750 Modular','시소닉',137690,'2022-08-30 00:00:00','2022-08-30 15:07:40','750','140'),(31,132,'마이크로닉스 Classic II SE 600W 80PLUS 230V EU','Classic II SE 600W 80PLUS 230V EU','마이크로닉스',56160,'2022-08-30 00:00:00','2022-08-30 15:08:28','600','140'),(32,133,'시소닉 FOCUS GOLD GX-1000 Full Modular','FOCUS GOLD GX-1000 Full Modular','시소닉',251430,'2022-08-30 00:00:00','2022-08-30 15:09:13','1000','140'),(33,134,'잘만 TeraMax 1000W 80PLUS Gold Full Modular','TeraMax 1000W 80PLUS Gold Full Modular','잘만',144580,'2022-08-30 00:00:00','2022-08-30 15:10:07','1000','140');
/*!40000 ALTER TABLE `power_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_review_info`
--

DROP TABLE IF EXISTS `product_review_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_review_info` (
  `pri_seq` int NOT NULL AUTO_INCREMENT,
  `pri_aci_seq` int NOT NULL,
  `pri_prod_seq` int NOT NULL,
  `pri_prod_table_num` int NOT NULL,
  `pri_imgs` varchar(50) DEFAULT NULL,
  `pri_comment` varchar(50) NOT NULL,
  `pri_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pri_mod_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pri_del_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pri_rating` int NOT NULL,
  PRIMARY KEY (`pri_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_review_info`
--

LOCK TABLES `product_review_info` WRITE;
/*!40000 ALTER TABLE `product_review_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_review_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_review_like_info`
--

DROP TABLE IF EXISTS `product_review_like_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_review_like_info` (
  `prli_seq` int NOT NULL,
  `prli_pri_seq` int NOT NULL,
  `prli_aci_seq` int NOT NULL,
  `prli_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`prli_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_review_like_info`
--

LOCK TABLES `product_review_like_info` WRITE;
/*!40000 ALTER TABLE `product_review_like_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_review_like_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `product_summary`
--

DROP TABLE IF EXISTS `product_summary`;
/*!50001 DROP VIEW IF EXISTS `product_summary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `product_summary` AS SELECT 
 1 AS `tbl_name`,
 1 AS `seq`,
 1 AS `name`,
 1 AS `model_name`,
 1 AS `company`,
 1 AS `price`,
 1 AS `release_dt`,
 1 AS `img_src`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `question_info`
--

DROP TABLE IF EXISTS `question_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_info` (
  `qsi_seq` int NOT NULL AUTO_INCREMENT,
  `qsi_aci_seq` int NOT NULL,
  `qsi_title` varchar(100) NOT NULL,
  `qsi_comment` varchar(50) NOT NULL,
  `qsi_imgs` varchar(50) DEFAULT NULL,
  `qsi_status` int NOT NULL DEFAULT '1',
  `qsi_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `qsi_mod_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `qsi_del_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`qsi_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_info`
--

LOCK TABLES `question_info` WRITE;
/*!40000 ALTER TABLE `question_info` DISABLE KEYS */;
INSERT INTO `question_info` VALUES (1,1,'asdasd','<p>asdasas</p>\n',NULL,1,'2022-08-26 15:57:09','2022-08-26 15:57:09','2022-08-26 15:57:09'),(2,1,'asdasdas','<p>dadadasda</p>\n',NULL,1,'2022-08-26 16:00:00','2022-08-26 16:00:00','2022-08-26 16:00:00');
/*!40000 ALTER TABLE `question_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ssd_info`
--

DROP TABLE IF EXISTS `ssd_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ssd_info` (
  `sdi_seq` int NOT NULL AUTO_INCREMENT COMMENT '번호',
  `sdi_img_seq` int DEFAULT '1' COMMENT '이미지',
  `sdi_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '이름',
  `sdi_model_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '모델명',
  `sdi_company` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '제조사',
  `sdi_price` int NOT NULL COMMENT '가격',
  `sdi_standard` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '분류',
  `sdi_interface` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '지원 버전',
  `sdi_volume` varchar(20) NOT NULL COMMENT '용량',
  `sdi_release_dt` datetime NOT NULL COMMENT '출시일',
  `sdi_read_speed` varchar(20) NOT NULL COMMENT '순차 읽기 속도',
  `sdi_write_speed` varchar(20) NOT NULL COMMENT '순차 쓰기 속도',
  `sdi_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  PRIMARY KEY (`sdi_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ssd_info`
--

LOCK TABLES `ssd_info` WRITE;
/*!40000 ALTER TABLE `ssd_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `ssd_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'computer_db'
--

--
-- Final view structure for view `product_summary`
--

/*!50001 DROP VIEW IF EXISTS `product_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `product_summary` AS select 'case' AS `tbl_name`,`case_info`.`csi_seq` AS `seq`,`case_info`.`csi_name` AS `name`,`case_info`.`csi_model_name` AS `model_name`,`case_info`.`csi_company` AS `company`,`case_info`.`csi_price` AS `price`,`case_info`.`csi_release_dt` AS `release_dt`,`b`.`img_src` AS `img_src` from (`case_info` left join `image_info` `b` on((`case_info`.`csi_img_seq` = `b`.`img_seq`))) union select 'cooler' AS `tbl_name`,`cooler_info`.`coi_seq` AS `seq`,`cooler_info`.`coi_name` AS `name`,`cooler_info`.`coi_model_name` AS `model_name`,`cooler_info`.`coi_company` AS `company`,`cooler_info`.`coi_price` AS `price`,`cooler_info`.`coi_release_dt` AS `release_dt`,`b`.`img_src` AS `img_src` from (`cooler_info` left join `image_info` `b` on((`cooler_info`.`coi_img_seq` = `b`.`img_seq`))) union select 'cpu' AS `tbl_name`,`cpu_info`.`cpi_seq` AS `seq`,`cpu_info`.`cpi_name` AS `name`,`cpu_info`.`cpi_model_name` AS `model_name`,`cpu_info`.`cpi_company` AS `company`,`cpu_info`.`cpi_price` AS `price`,`cpu_info`.`cpi_release_dt` AS `release_dt`,`b`.`img_src` AS `img_src` from (`cpu_info` left join `image_info` `b` on((`cpu_info`.`cpi_img_seq` = `b`.`img_seq`))) union select 'gpu' AS `tbl_name`,`gpu_info`.`gpi_seq` AS `seq`,`gpu_info`.`gpi_name` AS `name`,`gpu_info`.`gpi_model_name` AS `model_name`,`gpu_info`.`gpi_company` AS `company`,`gpu_info`.`gpi_price` AS `price`,`gpu_info`.`gpi_release_dt` AS `release_dt`,`b`.`img_src` AS `img_src` from (`gpu_info` left join `image_info` `b` on((`gpu_info`.`gpi_img_seq` = `b`.`img_seq`))) union select 'hdd' AS `tbl_name`,`hdd_info`.`hdi_seq` AS `seq`,`hdd_info`.`hdi_name` AS `name`,`hdd_info`.`hdi_model_name` AS `model_name`,`hdd_info`.`hdi_company` AS `company`,`hdd_info`.`hdi_price` AS `price`,`hdd_info`.`hdi_release_dt` AS `release_dt`,`b`.`img_src` AS `img_src` from (`hdd_info` left join `image_info` `b` on((`hdd_info`.`hdi_img_seq` = `b`.`img_seq`))) union select 'mainboard' AS `tbl_name`,`mainboard_info`.`mii_seq` AS `seq`,`mainboard_info`.`mii_name` AS `name`,`mainboard_info`.`mii_model_name` AS `model_name`,`mainboard_info`.`mii_company` AS `company`,`mainboard_info`.`mii_price` AS `price`,`mainboard_info`.`mii_release_dt` AS `release_dt`,`b`.`img_src` AS `img_src` from (`mainboard_info` left join `image_info` `b` on((`mainboard_info`.`mii_img_seq` = `b`.`img_seq`))) union select 'memory' AS `tbl_name`,`memory_info`.`mmi_seq` AS `seq`,`memory_info`.`mmi_name` AS `name`,`memory_info`.`mmi_model_name` AS `model_name`,`memory_info`.`mmi_company` AS `company`,`memory_info`.`mmi_price` AS `price`,`memory_info`.`mmi_release_dt` AS `release_dt`,`b`.`img_src` AS `img_src` from (`memory_info` left join `image_info` `b` on((`memory_info`.`mmi_img_seq` = `b`.`img_seq`))) union select 'power' AS `tbl_name`,`power_info`.`poi_seq` AS `seq`,`power_info`.`poi_name` AS `name`,`power_info`.`poi_model_name` AS `model_name`,`power_info`.`poi_company` AS `company`,`power_info`.`poi_price` AS `price`,`power_info`.`poi_release_dt` AS `release_dt`,`b`.`img_src` AS `img_src` from (`power_info` left join `image_info` `b` on((`power_info`.`poi_img_seq` = `b`.`img_seq`))) union select 'ssd' AS `tbl_name`,`ssd_info`.`sdi_seq` AS `seq`,`ssd_info`.`sdi_name` AS `name`,`ssd_info`.`sdi_model_name` AS `model_name`,`ssd_info`.`sdi_company` AS `company`,`ssd_info`.`sdi_price` AS `price`,`ssd_info`.`sdi_release_dt` AS `release_dt`,`b`.`img_src` AS `img_src` from (`ssd_info` left join `image_info` `b` on((`ssd_info`.`sdi_img_seq` = `b`.`img_seq`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-31 15:31:33
