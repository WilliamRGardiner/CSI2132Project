CREATE TABLE rater(
    userID INTEGER PRIMARY KEY,
    email TEXT,
    name TEXT NOT NULL,
    join_date DATE NOT NULL,
    type TEXT,
    reputation INTEGER CHECK(reputation>=1 AND reputation<=5),
    username TEXT,
    password TEXT
);
CREATE TABLE restaurant(
	restaurantID INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	type TEXT,
	url TEXT
);
CREATE TABLE Rating(
	userID INTEGER REFERENCES rater(userID) ON DELETE CASCADE ON UPDATE CASCADE,
	date DATE,
	price NUMERIC(7,2) CHECK (price>=0),
	food INTEGER CHECK (food>=1 AND food<=5),
	mood INTEGER CHECK (mood>=1 AND food<=5),
	staff INTEGER CHECK (staff>=1 AND staff<=5),
	comments TEXT,
	restaurantID INTEGER REFERENCES restaurant(restaurantID) ON DELETE CASCADE ON UPDATE CASCADE
);
Create Table location(
	locationID INTEGER PRIMARY KEY,
	open_date DATE NOT NULL,
	manager_name TEXT NOT NULL,
	phone_number TEXT NOT NULL,
	address TEXT NOT NULL,
	opening_time TIME NOT NULL,
	closing_time TIME NOT NULL,
	restaurantID INTEGER REFERENCES restaurant(restaurantID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE menuitem(
	itemID INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	type TEXT NOT NULL,
	category TEXT NOT NULL,
	description TEXT,
	price NUMERIC (7,2) NOT NULL CHECK (price>=0),
	restaurantID INTEGER REFERENCES restaurant(restaurantID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE ratingitem(
	userID INTEGER REFERENCES rater(userID) ON DELETE CASCADE ON UPDATE CASCADE,
	date DATE NOT NULL,
	itemID INTEGER REFERENCES menuitem(itemID) ON DELETE CASCADE ON UPDATE CASCADE,
	rating INTEGER NOT NULL CHECK(rating>=1 AND rating<=5),
	comments TEXT
);
Create Table ratingvotes(
	userID INTEGER REFERENCES rater(userID) ON DELETE CASCADE ON UPDATE CASCADE,
	raterID INTEGER PRIMARY KEY,
	restaurantID INTEGER REFERENCES restaurant(restaurantID) ON DELETE CASCADE ON UPDATE CASCADE,
	type TEXT CHECK (type IN('UP','DOWN'))
);

INSERT INTO restaurant VALUES (0,'McDonalds','Fast Food','https://www.mcdonalds.com');
INSERT INTO location VALUES(0,'2000-02-02','manager name','6132414414','60 George Street OTTAWA, ON, K1N 1J4','00:00','23:59',0);
INSERT INTO restaurant VALUES(1,'Zaks Cantina','Mexican','http://www.zakscantina.com/menu/');
INSERT INTO location VALUES(1,'2000-02-02','manager name','6134229257','10 Byward Market Square','11:00','23:00',1);
INSERT INTO restaurant VALUES(2,'The Fry','Korean','http://www.thefry.ca/');
INSERT INTO location VALUES(2,'2000-02-02','manager name','6136951300','280 Elgin Street Unit 3','11:30','23:59',2);
INSERT INTO restaurant VALUES(3,'Mad Radish','Bar','https://www.madradish.com/');
INSERT INTO location VALUES(3,'2000-02-02','manager name','N/A','859 Bank Street Ottawa ON, K1S 3W2','11:00','21:00',3);
INSERT INTO restaurant VALUES(4,'Bar Lupus','Mediterranian','https://barlupulus.ca/');
INSERT INTO location VALUES(4,'2000-02-02','manager name','6137594677','1242 Wellington St W','11:30','23:00',4);
INSERT INTO restaurant VALUES(5,'Paradise Poke','Poke Bowls','https://www.paradisepoke.ca/');
INSERT INTO location VALUES(5,'2000-02-02','manager name','6135184432','134 Bank Street','11:00','17:00',5);
INSERT INTO restaurant VALUES(6,'Riveria','Canadian','http://www.dineriviera.com/');
INSERT INTO location VALUES(6,'2000-02-02','manager name','6132336262','62 Sparks Street','11:30','22:00',6);
INSERT INTO restaurant VALUES(7,'Casa Mexico','Mexican','https://casa-mexico.ca/');
INSERT INTO location VALUES(7,'2000-02-02','manager name','6136957899','1489 Merivale Road','11:00','20:00',7);
INSERT INTO restaurant VALUES(8,'Asian Alley','Asian','http://www.asianalley.ca/');
INSERT INTO location VALUES(8,'2000-02-02','manager name','6138609889','8 ByWard Market Square','11:00','21:00',8);
INSERT INTO restaurant VALUES(9,'Fiazza Fresh Fired','Italian','http://fiazza.ca/');
INSERT INTO location VALUES(9,'2000-02-02','manager name','6135622000','86 Murray Street','11:00','21:00',9);
INSERT INTO restaurant VALUES(10,'El Furniture Warehouse','Bar','http://www.warehousegroup.ca/el-furniture-warehouse-ottawa/');
INSERT INTO location VALUES(10,'2000-02-02','manager name','6136951771','77 Clarence Street','11:00','2:00',10);
INSERT INTO restaurant VALUES(11,'Patty Bolands','Bar','https://pattybolands.com/');
INSERT INTO location VALUES(11,'2000-02-02','manager name','6137897822','101 Clarence Street','11:00','2:00',11);
INSERT INTO restaurant VALUES(12,'Madame Fattoush Lady','Lebanese','https://www.facebook.com/FattoushLady/');
INSERT INTO location VALUES(12,'2000-02-02','manager name','6134227400','90 Elgin Street','11:00','14:30',12);
INSERT INTO restaurant VALUES(13,'Corazon De Maiz','Mexican','http://www.corazondemaizottawa.com/');

INSERT INTO rater VALUES(0,'test@test.com','test0','2018-04-05','online',2,'test0','password');
INSERT INTO rater VALUES(1,'test@test.com','test1','2018-04-05','online',2,'test1','password');
INSERT INTO rater VALUES(2,'test@test.com','test2','2018-04-05','online',2,'test2','password');
INSERT INTO rater VALUES(3,'test@test.com','test3','2018-04-05','online',2,'test3','password');
INSERT INTO rater VALUES(4,'test@test.com','test4','2018-04-05','online',2,'test4','password');
INSERT INTO rater VALUES(5,'test@test.com','test5','2018-04-05','online',2,'test5','password');
INSERT INTO rater VALUES(6,'test@test.com','test6','2018-04-05','online',2,'test6','password');
INSERT INTO rater VALUES(7,'test@test.com','test7','2018-04-05','online',2,'test7','password');
INSERT INTO rater VALUES(8,'test@test.com','test8','2018-04-05','online',2,'test8','password');
INSERT INTO rater VALUES(9,'test@test.com','test9','2018-04-05','online',2,'test9','password');
INSERT INTO rater VALUES(10,'test@test.com','test10','2018-04-05','online',2,'test10','password');
INSERT INTO rater VALUES(11,'test@test.com','test11','2018-04-05','online',2,'test11','password');
INSERT INTO rater VALUES(12,'test@test.com','test12','2018-04-05','online',2,'test12','password');
INSERT INTO rater VALUES(13,'test@test.com','test13','2018-04-05','online',2,'test13','password');
INSERT INTO rater VALUES(14,'test@test.com','test14','2018-04-05','online',2,'test14','password');

INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',0);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',0);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',0);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',0);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',0);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',0);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',0);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',0);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',0);
INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',1);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',1);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',1);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',1);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',1);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',1);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',1);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',1);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',1);
INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',2);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',2);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',2);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',2);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',2);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',2);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',2);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',2);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',2);
INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',3);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',3);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',3);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',3);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',3);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',3);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',3);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',3);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',3);
INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',4);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',4);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',4);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',4);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',4);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',4);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',4);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',4);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',4);
INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',5);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',5);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',5);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',5);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',5);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',5);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',5);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',5);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',5);
INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',6);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',6);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',6);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',6);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',6);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',6);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',6);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',6);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',6);
INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',7);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',7);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',7);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',7);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',7);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',7);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',7);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',7);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',7);
INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',8);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',8);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',8);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',8);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',8);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',8);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',8);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',8);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',8);
INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',9);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',9);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',9);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',9);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',9);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',9);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',9);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',9);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',9);
INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',10);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',10);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',10);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',10);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',10);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',10);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',10);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',10);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',10);
INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',11);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',11);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',11);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',11);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',11);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',11);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',11);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',11);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',11);
INSERT INTO rating VALUES(0,'2018-04-05',22.2,5,5,5,'comment',12);
INSERT INTO rating VALUES(1,'2018-04-05',22.2,3,5,3,'comment',12);
INSERT INTO rating VALUES(2,'2018-04-05',22.2,5,5,5,'comment',12);
INSERT INTO rating VALUES(3,'2018-04-05',22.2,3,5,5,'comment',12);
INSERT INTO rating VALUES(4,'2018-04-05',22.2,5,4,5,'comment',12);
INSERT INTO rating VALUES(5,'2018-04-05',22.2,5,5,5,'comment',12);
INSERT INTO rating VALUES(6,'2018-04-05',22.2,5,5,5,'comment',12);
INSERT INTO rating VALUES(7,'2018-04-05',22.2,5,5,5,'comment',12);
INSERT INTO rating VALUES(8,'2018-04-05',22.2,3,5,3,'comment',12);

INSERT INTO menuitem VALUES(0,'Mighty Angus Original','food','main','description',5.49,0);
INSERT INTO menuitem VALUES(1,'Big Mac','food','main','description',5.49,0);
INSERT INTO menuitem VALUES(2,'Double Big Mac','food','main','description',5.49,0);
INSERT INTO menuitem VALUES(3,'McChicken','food','main','description',5.49,0);
INSERT INTO menuitem VALUES(4,'Enchiladas','food','main','description',5.49,1);
INSERT INTO menuitem VALUES(5,'Chimichanga','food','main','description',5.49,1);
INSERT INTO menuitem VALUES(6,'Cantina Burger','food','main','description',5.49,1);
INSERT INTO menuitem VALUES(7,'Chorizo Pogo','food','main','description',5.49,1);
INSERT INTO menuitem VALUES(8,'Green Onion Chicken','food','main','description',5.49,2);
INSERT INTO menuitem VALUES(9,'Crispy Chicken','food','main','description',5.49,2);
INSERT INTO menuitem VALUES(10,'Fried Chicken','food','main','description',5.49,2);
INSERT INTO menuitem VALUES(11,'Wings','food','main','description',5.49,2);
INSERT INTO menuitem VALUES(12,'Fired Up Chicken','food','main','description',5.49,3);
INSERT INTO menuitem VALUES(13,'Vegi Chilli Bowl','food','main','description',5.49,3);
INSERT INTO menuitem VALUES(14,'The Forager','food','main','description',5.49,3);
INSERT INTO menuitem VALUES(15,'Spicy Moraccan Stew','food','main','description',5.49,3);
INSERT INTO menuitem VALUES(16,'Smoked Salmon','food','main','description',5.49,4);
INSERT INTO menuitem VALUES(17,'Zuppa','food','main','description',8,4);
INSERT INTO menuitem VALUES(18,'Tartare','food','main','description',16,4);
INSERT INTO menuitem VALUES(19,'Farfalle','food','main','description',17,4);
INSERT INTO menuitem VALUES(24,'Mexican Rice','food','main','description',6,7);
INSERT INTO menuitem VALUES(25,'Tacos','food','main','description',4,7);
INSERT INTO menuitem VALUES(26,'Sopa de Tortilla','food','main','description',8,7);
INSERT INTO menuitem VALUES(27,'Picaditas','food','main','4 Thick mini homemade corn tortilla mixed with lard & mashed pork rinds, topped with beans, feta cheese, lettuce & sour cream.',6,7);
INSERT INTO menuitem VALUES(28,'Base Pizza','food','main','description',8.55,9);
INSERT INTO menuitem VALUES(29,'Bun Cha Ca','food','main','description',13.95,8);
INSERT INTO menuitem VALUES(30,'Beef Shank Lo Fun','food','main','description',14.95,8);
INSERT INTO menuitem VALUES(31,'Chicken Pho','food','main','description',12,8);
INSERT INTO menuitem VALUES(32,'Soft Tacos','food','main','description',8.55,10);
INSERT INTO menuitem VALUES(33,'Chicken Caesar Wrap','food','main','description',13.95,10);
INSERT INTO menuitem VALUES(34,'Smokey BBQ Burger','food','main','description',14.95,10);
INSERT INTO menuitem VALUES(35,'Roasted Turkey Sandwich','food','main','description',12,10);
INSERT INTO menuitem VALUES(36,'Fish and Chips','food','main','description',10,11);
INSERT INTO menuitem VALUES(37,'Poutine','food','main','description',5,11);
INSERT INTO menuitem VALUES(38,'Jager Bombs','food','main','description',2.50,11);
INSERT INTO menuitem VALUES(39,'Wings','food','main','description',0.35,11);

INSERT INTO ratingitem VALUES(0,'2018-04-05',0,3,'comments');
INSERT INTO ratingitem VALUES(0,'2018-04-05',1,4,'good comments');
INSERT INTO ratingitem VALUES(1,'2018-04-05',0,3,'comments');
INSERT INTO ratingitem VALUES(1,'2018-04-05',1,3,'comments');
INSERT INTO ratingitem VALUES(2,'2018-04-05',2,3,'comments');
INSERT INTO ratingitem VALUES(2,'2018-04-05',3,3,'comments');
INSERT INTO ratingitem VALUES(3,'2018-04-05',4,3,'comments');
INSERT INTO ratingitem VALUES(3,'2018-04-05',5,3,'comments');
INSERT INTO ratingitem VALUES(1,'2018-04-05',6,3,'comments');
INSERT INTO ratingitem VALUES(1,'2018-04-05',7,3,'comments');
INSERT INTO ratingitem VALUES(4,'2018-04-05',8,3,'comments');
INSERT INTO ratingitem VALUES(4,'2018-04-05',9,3,'comments');
INSERT INTO ratingitem VALUES(5,'2018-04-05',10,3,'comments');
INSERT INTO ratingitem VALUES(6,'2018-04-05',11,3,'comments');

INSERT INTO ratingvotes VALUES(0,0,0,'UP');
INSERT INTO ratingvotes VALUES(1,1,1,'DOWN');
INSERT INTO ratingvotes VALUES(2,2,2,'UP');
INSERT INTO ratingvotes VALUES(3,3,3,'DOWN');
INSERT INTO ratingvotes VALUES(4,4,4,'UP');
INSERT INTO ratingvotes VALUES(5,5,5,'DOWN');
INSERT INTO ratingvotes VALUES(6,6,6,'UP');
INSERT INTO ratingvotes VALUES(7,7,7,'DOWN');