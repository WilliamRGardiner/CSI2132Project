CREATE TABLE rater(
    user_id INTEGER PRIMARY KEY,
    email TEXT,
    name TEXT NOT NULL,
    join_date DATE NOT NULL,
    type TEXT,
    reputation INTEGER CHECK(reputation>=1 AND reputation<=5),
    username TEXT,
    password TEXT
);
CREATE TABLE restaurant(
	restaurant_id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	type TEXT,
	url TEXT
);
CREATE TABLE Rating(
	user_id INTEGER REFERENCES rater(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	date DATE,
	price NUMERIC(7,2) CHECK (price>=0),
	food INTEGER CHECK (food>=1 AND food<=5),
	mood INTEGER CHECK (mood>=1 AND food<=5),
	staff INTEGER CHECK (staff>=1 AND staff<=5),
	comments TEXT,
	restaurant_id INTEGER REFERENCES restaurant(restaurant_id) ON DELETE CASCADE ON UPDATE CASCADE
);
Create Table location(
	location_id INTEGER PRIMARY KEY,
	open_date DATE NOT NULL,
	manager_name TEXT NOT NULL,
	phone_number TEXT NOT NULL,
	address TEXT NOT NULL,
	opening_time TIME NOT NULL,
	closing_time TIME NOT NULL,
	restaurant_id INTEGER REFERENCES restaurant(restaurant_id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE menuitem(
	item_id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	type TEXT NOT NULL,
	category TEXT NOT NULL,
	description TEXT,
	price NUMERIC (7,2) NOT NULL CHECK (price>=0),
	restaurant_id INTEGER REFERENCES restaurant(restaurant_id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE ratingitem(
	user_id INTEGER REFERENCES rater(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	date DATE NOT NULL,
	item_id INTEGER REFERENCES menuitem(item_id) ON DELETE CASCADE ON UPDATE CASCADE,
	rating INTEGER NOT NULL CHECK(rating>=1 AND rating<=5),
	comments TEXT
);
Create Table ratingvotes(
	user_id INTEGER REFERENCES rater(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	rater_id INTEGER PRIMARY KEY,
	restaurant_id INTEGER REFERENCES restaurant(restaurant_id) ON DELETE CASCADE ON UPDATE CASCADE,
	type TEXT CHECK (type IN('UP','DOWN'))
);

INSERT INTO restaurant VALUES (0,'McDonalds','Fast Food','https://www.mcdonalds.com');
INSERT INTO location VALUES(0,'2000-02-02','manager name','6132414414','60 George Street OTTAWA, ON, K1N 1J4','00:00','23:59',0);
INSERT INTO restaurant VALUES(1,'Zaks Cantina','Mexican Diner','http://www.zakscantina.com/menu/');
INSERT INTO location VALUES(1,'2000-02-02','manager name','6134229257','10 Byward Market Square','11:00','23:00',1);
INSERT INTO restaurant VALUES(2,'The Fry','Korean','http://www.thefry.ca/');
INSERT INTO location VALUES(2,'2000-02-02','manager name','6136951300','280 Elgin Street Unit 3','11:30','23:59',2);
INSERT INTO restaurant VALUES(3,'Mad Radish','Salad Bar','https://www.madradish.com/');
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
INSERT INTO restaurant VALUES(9,'Fiazza Fresh Fired','Custom Pizza','http://fiazza.ca/');
INSERT INTO location VALUES(9,'2000-02-02','manager name','6135622000','86 Murray Street','11:00','21:00',9);
INSERT INTO restaurant VALUES(10,'El Furniture Warehouse','Bar Food','http://www.warehousegroup.ca/el-furniture-warehouse-ottawa/');
INSERT INTO location VALUES(10,'2000-02-02','manager name','6136951771','77 Clarence Street','11:00','2:00',10);
INSERT INTO restaurant VALUES(11,'Patty Bolands','Bar Food','https://pattybolands.com/');
INSERT INTO location VALUES(11,'2000-02-02','manager name','6137897822','101 Clarence Street','11:00','2:00',11);
INSERT INTO restaurant VALUES(12,'Madame Fattoush Lady','Lebanese Cuisine','https://www.facebook.com/FattoushLady/');
INSERT INTO location VALUES(12,'2000-02-02','manager name','6134227400','90 Elgin Street','11:00','14:30',12);
INSERT INTO restaurant VALUES(13,'Corazon De Maiz','Mexican Cuisine','http://www.corazondemaizottawa.com/');
INSERT INTO location VALUES(13,'2000-02-02','manager name','6132441661','55 Byward Market Square','11:00','19:30',13);
INSERT INTO restaurant VALUES(14,'World Burger','Fast Food','http://yourworldburger.com/');
INSERT INTO location VALUES(14,'2000-02-02','manager name','6136954545','1651 Merivale Road','11:00','21:00',14);
INSERT INTO restaurant VALUES(15,'The Green Door Restaurant','Vegetarian Buffet','http://www.thegreendoor.ca/');
INSERT INTO location VALUES(15,'2000-02-02','manager name','6132349597','198 Main Street','11:00','21:00',15);
INSERT INTO restaurant VALUES(16,'El Camino','Contemporary Mexican','https://www.zomato.com/ottawa/el-camino-centretown/menu');
INSERT INTO location VALUES(16,'2000-02-02','manager name','6134222800','380 Elgin Street','12:00','14:30',16);
INSERT INTO restaurant VALUES(17,'Fleur Tea House','Tea House','https://www.facebook.com/FleurTeaHouse/');
INSERT INTO location VALUES(17,'2000-02-02','manager name','6132407866','245 Somerset St','9:00','2:00',17);
INSERT INTO restaurant VALUES(18,'EVOO Greek Kitchen','Greek','http://www.evoogreekkitchen.ca/');
INSERT INTO location VALUES(18,'2000-02-02','manager name','6136953860','438 Preston Street','11:00','23:00',18);
INSERT INTO restaurant VALUES(19,'Chesterfields Gastro Diner','Gastro Diner','https://gastrodiner.ca/pages/menu');
INSERT INTO location VALUES(19,'2000-02-02','manager name','6136808990','1433 Wellington St W #111','7:00','14:00',19);
INSERT INTO restaurant VALUES(20,'Erlings Variety','Contemporary Diner','http://www.erlingsvariety.com/');
INSERT INTO location VALUES(20,'2000-02-02','manager name','6132318484','225 Strathcona Ave','11:30','14:00',20);
INSERT INTO restaurant VALUES(21,'Wilf & Adas','Scratch Diner','http://wilfandadas.com/');
INSERT INTO location VALUES(21,'2000-02-02','manager name','6132317959','510 Bank Street','7:00','15:00',21);
INSERT INTO restaurant VALUES(22,'Stoneface Dollys','Eatery','http://www.stonefacedollys.com/');
INSERT INTO location VALUES(22,'2000-02-02','manager name','6135642222','416 Preston Street','7:30','14:30',22);
INSERT INTO restaurant VALUES(23,'Sutherland Restaurant, Bar and Coffee House','Restaurant','http://sutherlandrestaurant.com/');
INSERT INTO location VALUES(23,'2000-02-02','manager name','6137417980','224 Beechwood Avenue','11:00','22:00',23);
INSERT INTO restaurant VALUES(24,'HeadQuarters','Cafe','http://hqottawa.com/');
INSERT INTO location VALUES(24,'2000-02-02','manager name','6136954747','113-115 Clarence Street','8:00','19:00',24);
INSERT INTO restaurant VALUES(25,'Feline Café','Cat Cafe','https://felinecafeottawa.com/');
INSERT INTO location VALUES(25,'2000-02-02','manager name','6136806369','1076 Wellington Street W','10:00','20:00',25);
INSERT INTO restaurant VALUES(26,'The Dreamland Cafe','Pasta Cafe','https://www.dreamlandcafe.ca/');
INSERT INTO location VALUES(26,'2000-02-02','manager name','6136807672','200 Laurier Ave W','8:00','14:30',26);
INSERT INTO restaurant VALUES(27,'Little Jo Berrys','Vegan','http://littlejoberrys.com/');
INSERT INTO location VALUES(27,'2000-02-02','manager name','6137618000','1305 Wellington Street W','8:00','18:00',27);
INSERT INTO restaurant VALUES(28,'Uji Café','Matcha Cafe','https://ujicafe.ca/');
INSERT INTO location VALUES(28,'2000-02-02','manager name','6136803232','215 Rideau Street','11:00','21:00',28);
INSERT INTO restaurant VALUES(29,'Quelque Chose Pâtisserie','Macaron Cafe','https://quelque-chose.ca/');
INSERT INTO location VALUES(29,'2000-02-02','manager name','6137284562','379 Richmond Road','10:00','18:00',29);
INSERT INTO restaurant VALUES(30,'Union Street Kitchen Cafe','Kitchen Cafe','http://onunionstreet.ca/menu.html');
INSERT INTO location VALUES(30,'2000-02-02','manager name','6136959642','42 Crichton St','8:00','16:00',30);
INSERT INTO restaurant VALUES(31,'Stella Luna Gelato Cafe','Gelato Cafe','http://www.slgelato.com/contact');
INSERT INTO location VALUES(31,'2000-02-02','manager name','6136956565','1130 Wellington Street West','8:00','22:00',31);
INSERT INTO restaurant VALUES(32,'The Grounds Cafe','Espresso Cafe','http://www.thegrounds.ca/menu.html');
INSERT INTO location VALUES(32,'2000-02-02','manager name','N/A','5703 Hazeldean Rd','8:00','17:00',32);
INSERT INTO restaurant VALUES(33,'Firehouse Subs','Restaurant','https://www.firehousesubs.ca/');
INSERT INTO location VALUES(33,'2000-02-02','manager name','6137473473','2014 Ogilvie Rd #1','11:00','21:00',33);
INSERT INTO restaurant VALUES(34,'KFC','Fast Food','https://www.kfc.ca/');
INSERT INTO location VALUES(34,'2000-02-02','manager name','6135630433','50 Rideau St','10:00','21:00',34);
INSERT INTO restaurant VALUES(35,'A&W','Fast Food','https://www.aw.ca/');
INSERT INTO location VALUES(35,'2000-02-02','manager name','6132302753','50 Rideau St','7:00','21:00',35);
INSERT INTO restaurant VALUES(36,'South St. Burger','Fast Food','https://www.southstburger.com/');
INSERT INTO location VALUES(36,'2000-02-02','manager name','6134226095','900 Exhibition Way','11:00','21:00',36);
INSERT INTO restaurant VALUES(37,'Thai Express','Thai Cuisine','https://www.thaiexpress.com/');
INSERT INTO location VALUES(37,'2000-02-02','manager name','6134221400','50 Rideau St','11:00','21:00',37);
INSERT INTO restaurant VALUES(38,'Giant Panda','Chinese Restaurant','http://giantpanda88.com/');
INSERT INTO location VALUES(38,'2000-02-02','manager name','6136959273','170 Lees Ave','11:00','22:00',38);
INSERT INTO restaurant VALUES(39,'Teriyaki Experience','Asian Fast Food','https://www.teriyakiexperience.com/');
INSERT INTO location VALUES(39,'2000-02-02','manager name','6137465067','1200 St. Laurent Blvd','9:30','21:00',39);

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