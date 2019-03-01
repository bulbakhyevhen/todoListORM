-- Host: localhost    Database: tododb
-- ------------------------------------------------------
-- Server version	5.7.24-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `record` (
  `recordId` mediumint(9) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `record` varchar(500) DEFAULT NULL,
  `done` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`recordId`)
) ENGINE=InnoDB AUTO_INCREMENT=191 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
INSERT INTO `record` VALUES (2,2,'Sql wtih Mysql','Learn how to use mysql server','1'),(4,2,'REST API','Learn how to create REST','0'),(105,1,'Update From Postman2','Update From Postman2','0'),(111,2,'Pohooy','Voobwe pohooy','1'),(179,1,'new title','new record',NULL),(182,1,'new title22','new record2',NULL),(185,1,'Title3','Record3',NULL),(186,3,'title-userid-3','record-userid-3',NULL),(187,4,'title-userid-4','record-userid-4',NULL),(188,5,'title-userid-5','record-userid-5',NULL),(189,6,'title-userid-6','record-userid-6',NULL),(190,7,'title-userid-7','record-userid-7',NULL);
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `userName` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `refresh_token` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Admin','Admin@gmail.com','5f4dcc3b5aa765d61d8327deb882cf99','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjF9.SmhmOUR5cVJHRmp0R0I4RU9yblhhWDJweVEyUEJLWDZRKzFUUlpBR21LQT0='),(2,'Hanry','hanryjob@gmail.com','ee11cbb19052e40b07aac0ca060c23ee',NULL),(3,'Alex','alexalex@gmail.com','24c9e15e52afc47c225b757e7bee1f9d',NULL),(4,'John','johnemailx@gmail.com','7e58d63b60197ceb55a1c487989a3720',NULL),(5,'David','david@gmail.com','172522ec1028ab781d9dfd17eaca4427',NULL),(6,'rempl','rempl@gmail.com','172522ec1028ab781d9dfd17eaca4427',NULL),(7,'someone','some@gmail.com','172522ec1028ab781d9dfasfhsdfgdfgdfgd17eaca4427',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-02  7:11:26
