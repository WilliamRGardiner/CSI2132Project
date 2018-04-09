set search_path='project';
CREATE TABLE rater(
    userID INTEGER NOT NULL,
    email TEXT,
    name TEXT NOT NULL,
    join_date DATE NOT NULL,
    type TEXT,
    reputation INTEGER,
    username TEXT,
    password TEXT,
	CONSTRAINT rater_pkey PRIMARY KEY (userID),
	CONSTRAINT rater_reputation CHECK(reputation>=1 AND reputation<=5)
);
CREATE TABLE restaurant(
	restaurantID INTEGER,
	name TEXT NOT NULL,
	type TEXT,
	url TEXT,
	CONSTRAINT restaurant_pkey PRIMARY KEY (restaurantID)
);
CREATE TABLE Rating(
	userID INTEGER NOT NULL,
	date DATE NOT NULL,
	price NUMERIC(7,2),
	food INTEGER,
	mood INTEGER,
	staff INTEGER,
	comments TEXT,
	restaurantID INTEGER,
	CONSTRAINT rating_pkey PRIMARY KEY (userID, date, restaurantID),
	CONSTRAINT userid_fkey FOREIGN KEY(userID) REFERENCES rater(userID) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT restaurantID_fkey FOREIGN KEY (restaurantID) REFERENCES restaurant(restaurantID) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT price_amount CHECK (price>=0),
	CONSTRAINT food_rating CHECK (food>=1 AND food<=5),
	CONSTRAINT mood_rating CHECK (mood>=1 AND mood<=5),
	CONSTRAINT staff_rating CHECK (staff>=1 AND staff<=5)
);
Create Table location(
	locationID INTEGER NOT NULL,
	open_date DATE NOT NULL,
	manager_name TEXT NOT NULL,
	phone_number TEXT NOT NULL,
	address TEXT NOT NULL,
	opening_time TIME NOT NULL,
	closing_time TIME NOT NULL,
	restaurantID INTEGER NOT NULL,
	CONSTRAINT location_pkey PRIMARY KEY (locationID),
	CONSTRAINT restaurantID_fkey FOREIGN KEY (restaurantID) REFERENCES restaurant(restaurantID) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE menuitem(
	itemID INTEGER NOT NULL,
	name TEXT NOT NULL,
	type TEXT NOT NULL,
	category TEXT NOT NULL,
	description TEXT,
	price NUMERIC (7,2) NOT NULL,
	restaurantID INTEGER NOT NULL,
	CONSTRAINT menuitem_pkey PRIMARY KEY (itemID),
	CONSTRAINT restaurantID_fkey FOREIGN KEY (restaurantID) REFERENCES restaurant(restaurantID) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT price_amount CHECK (price>=0)
);
CREATE TABLE ratingitem(
	userID INTEGER NOT NULL,
	date DATE NOT NULL,
	itemID INTEGER NOT NULL,
	rating INTEGER NOT NULL CHECK(rating>=1 AND rating<=5),
	comments TEXT,
	CONSTRAINT ratingitem_pkey PRIMARY KEY (userID, date, itemID),
	CONSTRAINT userID_fkey FOREIGN KEY (userID) REFERENCES rater(userID) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT itemID_fkey FOREIGN KEY (itemID) REFERENCES menuitem(itemID) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT rating_number CHECK (rating>=1 AND rating<=5)
);
Create Table ratingvotes(
	userID INTEGER NOT NULL,
	raterID INTEGER NOT NULL,
	restaurantID INTEGER NOT NULL,
	date DATE NOT NULL,
	type TEXT NOT NULL,
	CONSTRAINT ratingvotes_pkey PRIMARY KEY (userID, raterID, restaurantID, date),
	CONSTRAINT userID_fkey FOREIGN KEY (userID) REFERENCES rater(userID) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT raterID_fkey FOREIGN KEY (raterID) REFERENCES rater(userID) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT restaurantID_fkey FOREIGN KEY (restaurantID) REFERENCES restaurant(restaurantID) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT ratingvotes_type CHECK(type IN('UP','DOWN'))
);

INSERT INTO restaurant VALUES (0,'McDonalds','Fast Food','www.mcdonalds.com');
INSERT INTO location VALUES(0,'2000-02-02','John McDonald','(613)241-4414','60 George Street OTTAWA, ON, K1N 1J4','00:00','23:59',0);
INSERT INTO restaurant VALUES(1,'C','Mexican','www.zakscantina.com');
INSERT INTO location VALUES(1,'2017-06-15','Zack Free','(613)422-9257','10 Byward Market Square','11:00','23:00',1);
INSERT INTO restaurant VALUES(2,'The Fry','Korean','www.thefry.ca');
INSERT INTO location VALUES(2,'2016-10-12','Fred Jones','(613)695-1300','280 Elgin Street Unit 3','11:30','23:59',2);
INSERT INTO restaurant VALUES(3,'Mad Radish','Bar','www.madradish.com');
INSERT INTO location VALUES(3,'2017-02-04','Max Stevens','N/A','859 Bank Street Ottawa ON, K1S 3W2','11:00','21:00',3);
INSERT INTO restaurant VALUES(4,'Bar Lupulus','Mediterranian','www.barlupulus.ca');
INSERT INTO location VALUES(4,'2015-10-11','Ashley Thomas','(613)759-4677','1242 Wellington St W','11:30','23:00',4);
INSERT INTO restaurant VALUES(5,'Paradise Poke','Poke Bowls','www.paradisepoke.ca');
INSERT INTO location VALUES(5,'2016-01-22','Rob Stevens','(613)518-4432','134 Bank Street','11:00','17:00',5);
INSERT INTO restaurant VALUES(6,'Riveria','Canadian','www.dineriviera.com');
INSERT INTO location VALUES(6,'2016-06-09','Katy Mills','(613)233-6262','62 Sparks Street','11:30','22:00',6);
INSERT INTO restaurant VALUES(7,'Casa Mexico','Mexican','casa-mexico.ca');
INSERT INTO location VALUES(7,'2017-12-02','Derek Settler','(613)695-7899','1489 Merivale Road','11:00','20:00',7);
INSERT INTO restaurant VALUES(8,'Asian Alley','Asian','www.asianalley.ca');
INSERT INTO location VALUES(8,'2017-04-08','Li Long','(613)860-9889','8 ByWard Market Square','11:00','21:00',8);
INSERT INTO restaurant VALUES(9,'Fiazza Fresh Fired','Italian','www.fiazza.ca');
INSERT INTO location VALUES(9,'2014-09-16','Tony Tomato','(613)562-2000','86 Murray Street','11:00','21:00',9);
INSERT INTO restaurant VALUES(10,'El Furniture Warehouse','Bar','www.warehousegroup.ca/el-furniture-warehouse-ottawa/');
INSERT INTO location VALUES(10,'2015-01-24','Trisha Trend','(613)695-1771','77 Clarence Street','11:00','2:00',10);
INSERT INTO restaurant VALUES(11,'Patty Bolands','Bar','www.pattybolands.com');
INSERT INTO location VALUES(11,'2012-02-20','Carl Earling','(613)789-7822','101 Clarence Street','11:00','2:00',11);
INSERT INTO restaurant VALUES(12,'Fattoush Lady','Lebanese','www.facebook.com/FattoushLady/');
INSERT INTO location VALUES(12,'2016-03-03','Beth Drope','(613)422-7400','90 Elgin Street','11:00','14:30',12);
INSERT INTO restaurant VALUES(13,'Corazon De Maiz','Mexican','www.corazondemaizottawa.com');

INSERT INTO rater VALUES(0,'peterpark@gmail.com','Peter Parker','2018-01-03','Online',3,'Spiderman','uncleben');
INSERT INTO rater VALUES(1,'tonystark@starkindustries.com','Tony Stark','2017-08-25','Online',4,'IronMan','jarvis');
INSERT INTO rater VALUES(2,'bwidow@avengers.com','Natasha Romanova','2017-12-03','Online',2,'BlackWidow','assasin');
INSERT INTO rater VALUES(3,'rbbanner@avengers.com','Robert Bruce Banner','2017-06-05','Online',2,'Hulk','smash');
INSERT INTO rater VALUES(4,'bpanther@wakanda.com','TChalla','2018-03-12','Online',2,'BlackPanther','protect');
INSERT INTO rater VALUES(5,'thor@avengers.com','Thor Odinson','2017-04-15','Online',2,'Thor','mjolnir');
INSERT INTO rater VALUES(6,'falcon@avengers.com','Sam Wilson','2018-01-22','Online',2,'Falcon','wings');
INSERT INTO rater VALUES(7,'captamerica@avengers.com','Steve Rogers','2017-09-06','Online',2,'CaptAmerica','justice');
INSERT INTO rater VALUES(8,'cbarton@avengers.com','Clint Barton','2017-04-01','Online',2,'Hawkeye','bullseye');
INSERT INTO rater VALUES(9,'vision@avengers.com','Vision','2017-11-05','Online',2,'Vision','infinity');
INSERT INTO rater VALUES(10,'loki@asgard.com','Loki Odinson','2018-01-15','Online',2,'Loki','scepter');
INSERT INTO rater VALUES(11,'thanos@eternals.com','Thanos','2018-02-11','Online',2,'Thanos','balance');
INSERT INTO rater VALUES(12,'mariahill@shield.com','Maria Hill','2018-02-23','Online',2,'Maria','secret');
INSERT INTO rater VALUES(13,'wandamaximoff@avengers.com','Wanda Maximoff','2017-08-11','Online',2,'ScarletWitch','mind');
INSERT INTO rater VALUES(14,'antman@avengers.com','Scott Lang','2017-06-24','Online',2,'AntMan','size');

INSERT INTO rating VALUES(0,'2018-02-03',22.20,5,5,5,'Waited less than five mins for four meals during lunch rush...and it tasted just like McD''s should',0);
INSERT INTO rating VALUES(1,'2017-09-15',15.55,3,5,3,'There was about 20 people waiting for our food and we were all served in like 5 minutes. Can''t complain.',0);
INSERT INTO rating VALUES(2,'2017-12-28',17.20,5,5,5,'In here on a semi-regular basis and always the same things happen, either my patties are cold or the toppings arent on the burgers themselves.',0);
INSERT INTO rating VALUES(3,'2018-04-05',18.10,3,5,5,'Worst McDonald in Ottawa. Dirty and bad customer experience.',0);
INSERT INTO rating VALUES(4,'2018-04-01',18.00,5,4,5,'Didn''t realize it took 10 minutes to make a burger.',0);
INSERT INTO rating VALUES(5,'2018-04-05',8.50,5,5,5,'Dont go without a racoon',0);
INSERT INTO rating VALUES(6,'2018-04-05',11.60,5,5,5,'Service and food was fine. Although the place was extremely wet and full of slush, not very organized and very small.',0);
INSERT INTO rating VALUES(7,'2018-04-05',5.45,5,5,5,'Polite and helpful.  Passing customers fairly quickly.',0);
INSERT INTO rating VALUES(8,'2018-04-05',10.00,3,5,3,'Typical McD. Staff was nice.',0);
INSERT INTO rating VALUES(0,'2018-04-05',18.55,5,5,5,'This place is really cool - half of the restaurant is a school bus!',1);
INSERT INTO rating VALUES(1,'2017-09-13',13.24,3,5,3,'Interior decoration is interesting to look at, reminds me of a back then diner. Friendly staff and clean. Food was ok... good hangout place',1);
INSERT INTO rating VALUES(2,'2018-01-15',20.15,5,5,5,'Cool vibes. Tacos were OK. Martguerita was great.',1);
INSERT INTO rating VALUES(3,'2018-04-05',16.30,3,5,5,'Good burrito... I would go back but I wouldn''t recommend it like it''s the best to anyone else. Decent overall... no complaints',1);
INSERT INTO rating VALUES(4,'2018-04-05',25.00,5,4,5,'Amazing food and amazing atmosphere! I have been for drinks and dinner with friends and I have been with family and I have always had an amazing time!',1);
INSERT INTO rating VALUES(5,'2018-04-05',20.00,5,5,5,'Awesome decor and food options! You might think the food is overpriced until you receive it - the portions are HUGE.',1);
INSERT INTO rating VALUES(6,'2018-04-05',22.20,5,5,5,'Had a team dinner here. Food was great, service was excellent and the venue is very cool. We all had a great time!! Highly recommend.',1);
INSERT INTO rating VALUES(7,'2018-04-05',22.20,5,5,5,'Literally thee worst I''ve ever had. The chicken in they use is clearly factory grade, manufactured chicken. ',1);
INSERT INTO rating VALUES(8,'2018-04-05',18.00,3,5,3,'We had a pretty bad experience here several months back, and won''t be returning. The food was SO awful, and devoid of any flavour. The kids "mac and cheese" was literally Kraft dinner, and was served cold.',1);
INSERT INTO rating VALUES(0,'2018-03-22',22.20,5,5,5,'Pretty nice little korean fried chicken joint.',2);
INSERT INTO rating VALUES(1,'2018-02-19',22.20,3,5,3,'The fried chicken here is a new and interesting spin on that traditional Southern fried fare with some delicious sauces.',2);
INSERT INTO rating VALUES(2,'2018-03-07',22.20,5,5,5,'Tried a The Fry location in Toronto last summer and was beyond excited to see one opening here in our fair city. The food is delicious, service is great, and the atmosphere is super chill. ',2);
INSERT INTO rating VALUES(3,'2018-04-05',22.20,3,5,5,'The chicken was so tender!!',2);
INSERT INTO rating VALUES(4,'2018-04-05',22.20,5,4,5,'Love this place for the fantastic fried chicken!',2);
INSERT INTO rating VALUES(5,'2018-04-05',22.20,5,5,5,'Great food, great service, friendly staff. The crispy chicken is so good without being greasy.',2);
INSERT INTO rating VALUES(6,'2018-04-05',22.00,5,5,5,'Got delivered. Not worth the price. Taste was overpowering, poor quality/cheaply prepared.',2);
INSERT INTO rating VALUES(7,'2018-04-05',22.20,5,5,5,'It was okay. Food was good, but the place is very small. I would recommend for take out.',2);
INSERT INTO rating VALUES(8,'2018-04-05',22.20,3,5,3,'Very good fried chicken. Much better than any fast food chicken place...',2);
INSERT INTO rating VALUES(0,'2018-01-11',15.00,5,5,5,'Great experience at the Mad Radish. Friendly service, very clean and they recycle everything even the cutlery, which is impressive.',3);
INSERT INTO rating VALUES(1,'2018-01-20',22.20,3,5,3,'Definitely a must. Great food and even better service.',3);
INSERT INTO rating VALUES(2,'2017-12-14',22.20,5,5,5,'Really trying to shake up the standards for serving healthy food at reasonable prices.',3);
INSERT INTO rating VALUES(3,'2018-04-05',19.00,3,5,5,'Exceptionally friendly and knowledgeable staff! I would highly recommend after my wonderful experience!',3);
INSERT INTO rating VALUES(4,'2018-04-05',22.20,5,4,5,'Food is fresh. Just doesn''t do it for me. Made my vegan friend happy. But I''m good with two visits.',3);
INSERT INTO rating VALUES(5,'2018-04-05',16.50,5,5,5,'I like this concept, enjoy the flavour combinations and the fresh ingredients',3);
INSERT INTO rating VALUES(6,'2018-04-05',22.20,5,5,5,'Found half a zip tie in my salad after eating half of it. They made me a new one and it was good.',3);
INSERT INTO rating VALUES(7,'2018-04-05',22.20,5,5,5,'I ate two salads there, couldn''t finish because they''re terrible. Too many leafs.',3);
INSERT INTO rating VALUES(8,'2018-04-05',22.20,3,5,3,'Great fresh salads! Real food with local ingredients. The staff were super helpful and friendly. Can’t wait to go back!',3);
INSERT INTO rating VALUES(0,'2018-02-01',22.20,5,5,5,'Wow! First timer. The food is wonderful here. Flavours and presentation are perfect. ',4);
INSERT INTO rating VALUES(1,'2018-04-05',22.20,3,5,3,'An exceptional dining experience! The service is old style (women served first) which is a nice touch. The food is incredible.',4);
INSERT INTO rating VALUES(2,'2018-01-09',23.00,5,5,5,'Good upmarket bar food and extensive beer list. Great service, but a bit hit or miss with some plates.',4);
INSERT INTO rating VALUES(3,'2018-04-05',22.20,3,5,5,'A fantastic food and beverage experience. To top it off, we had amazing service. I will be back. Guaranteed.',4);
INSERT INTO rating VALUES(4,'2018-04-05',22.20,5,4,5,'Perfect date night spot. The drinks are great, the atmosphere is awesome. Highly recommend it!',4);
INSERT INTO rating VALUES(5,'2018-04-05',22.20,5,5,5,'The food was delicious however the portion was very small',4);
INSERT INTO rating VALUES(6,'2018-04-05',22.20,5,5,5,'Overrated. I haven''t tried their food but drink-wise they have a great selection but the service is horrible without any suggestion/help.',4);
INSERT INTO rating VALUES(7,'2018-04-05',16.30,5,5,5,'Busy and hip(ster). Top notch beers and that''s all you need to know.',4);
INSERT INTO rating VALUES(8,'2018-04-05',22.20,3,5,3,'They nailed the style. Sooooo many beers. If you''re into IPAs, they menu tended in that direction.',4);
INSERT INTO rating VALUES(0,'2018-02-15',14.00,5,5,5,'Delicious, fresh food with tropical flair. Good sized portion with quality ingredients.',5);
INSERT INTO rating VALUES(1,'2018-04-05',19.00,3,5,3,'Friendly service. The place is cute but pretty uncomfortable to eat in there if it’s busy. And it was pretty busy that day. Food was great. Seemed fresh. The place itself was clean. Lots of choices of ingredients. Staff was knowledgeable and helpful',5);
INSERT INTO rating VALUES(2,'2018-04-01',22.20,5,5,5,'This little place was super cute + friendly, with an awesome staff and food! ',5);
INSERT INTO rating VALUES(3,'2018-04-05',22.20,3,5,5,'Great staff and great food. Small venue but great if you like sushi! Fast healthy and highly recommended.',5);
INSERT INTO rating VALUES(4,'2018-04-05',22.20,5,4,5,'Kinda pricey. They used a little too much soy sauce.',5);
INSERT INTO rating VALUES(5,'2018-04-05',20.00,5,5,5,'Fresh food! Price is a bit high for the amount of meat given but still food is delicious!',5);
INSERT INTO rating VALUES(6,'2018-04-05',18.00,5,5,5,'the place looks nice and clean. unfortunately the food itself did not impress me whatsoever.',5);
INSERT INTO rating VALUES(7,'2018-04-05',22.20,5,5,5,'Best new spot in Ottawa. Great food, great atmosphere. Highly recommend!',5);
INSERT INTO rating VALUES(8,'2018-04-05',22.20,3,5,3,'My favorite lunch spot downtown.  Delicious and fresh ingredients,',5);
INSERT INTO rating VALUES(0,'2018-04-01',22.20,5,5,5,'What a night!!! It’s was a great night of Great Eats. The food was. Idk. Words can’t say how good it was.',6);
INSERT INTO rating VALUES(1,'2018-04-05',22.20,3,5,3,'The staff here is so snobby! I would never dare walk in.',6);
INSERT INTO rating VALUES(2,'2018-01-28',22.20,5,5,5,'Very good service. A touch of "different" with the high ceilings and decor.',6);
INSERT INTO rating VALUES(3,'2018-04-05',13.90,3,3,5,'Everything was mediocre. It is frigid near the front door which taints the whole experience. If you can eat the food fast enough before it gets cold good luck.',6);
INSERT INTO rating VALUES(4,'2018-04-05',15.00,5,4,5,'Great drinks, great food! Must try in ottawa.',6);
INSERT INTO rating VALUES(5,'2018-04-05',20.00,5,5,5,'Amazing food with great ambiance and  cocktails. The food was above my expectations. Service was impeccable. It''s quite an experience to have dinner in an old bank.',6);
INSERT INTO rating VALUES(6,'2018-04-05',28.00,3,5,5,'Quite disappointed with our main course. Atmosphere, wine, service is excellent as always.',6);
INSERT INTO rating VALUES(7,'2018-04-05',25.00,5,5,5,'Excellent. Great food and excellent service. Really enjoyed it.',6);
INSERT INTO rating VALUES(8,'2018-04-05',23.00,3,5,3,'Fantastic food and atmosphere. Definitely recommend.',6);
INSERT INTO rating VALUES(0,'2018-03-25',29.00,5,5,5,'The food was good but I felt like the portion sizes were small for what I was paying.',7);
INSERT INTO rating VALUES(1,'2018-04-05',22.20,3,5,3,'Cozy & authentic, super friendly staff and prices are very reasonable.',7);
INSERT INTO rating VALUES(2,'2018-02-13',22.20,5,5,5,'Went for lunch today. Really good, really authentic. They''re just getting this business going so get over there for a meal!! I''m thrilled to finally have a legit Mexican restaurant close to home!',7);
INSERT INTO rating VALUES(3,'2018-04-05',22.20,3,5,5,'Tasty, authentic, pricey',7);
INSERT INTO rating VALUES(4,'2018-04-05',22.20,5,4,5,'Amazing, affordable, awesome',7);
INSERT INTO rating VALUES(5,'2018-04-05',22.20,5,5,5,'I love this place... Food is awesome, the people super friendly and laid back... I''d eat here every day if I could afford it!',7);
INSERT INTO rating VALUES(6,'2018-04-05',22.20,5,5,5,'Very clean, but if I wanted microwaved food I would have gotten some at the grocery store .',7);
INSERT INTO rating VALUES(7,'2018-04-05',22.20,5,5,5,'The food here is simple, traditional and tasty. It seems to be very homemade and very much like the food in Mexico.',7);
INSERT INTO rating VALUES(8,'2018-04-05',18.00,3,5,3,'I stopped in on a whim and was blown away. The staff are friendly, the restaurant is colourful, and the food is excellent!',7);
INSERT INTO rating VALUES(0,'2018-01-22',22.20,5,5,5,'Don’t underestimate this little place. The food here is good.',8);
INSERT INTO rating VALUES(1,'2018-04-05',15.80,3,5,3,'Lots of food for a good price, servings are big. Excellent beer selection as well.',8);
INSERT INTO rating VALUES(2,'2018-04-08',22.20,5,5,5,'Great food. Generous portions. Competitive prices',8);
INSERT INTO rating VALUES(3,'2018-04-05',22.20,3,5,5,'Staff very friendly, food is delicious, prices are adequate. All in all, definitely recommend.',8);
INSERT INTO rating VALUES(4,'2018-04-05',22.20,5,4,5,'Their selection of music is awesome!',8);
INSERT INTO rating VALUES(5,'2018-04-05',22.20,5,5,5,'Honestly was not impressed. The food had almost no flavor & prices were much higher than the portion given. Wasted time and money.',8);
INSERT INTO rating VALUES(6,'2018-04-05',22.20,5,5,5,'Great and quick asian food! Love the decor in this spot!',8);
INSERT INTO rating VALUES(7,'2018-04-05',16.50,5,5,5,'Multiple vegan and vegetarian options',8);
INSERT INTO rating VALUES(8,'2018-04-05',22.20,3,5,3,'Great food, great atmosphere.',8);
INSERT INTO rating VALUES(0,'2018-01-19',22.20,5,5,5,'The best pizza downtown at an affordable price. You can''t go wrong going here.',9);
INSERT INTO rating VALUES(1,'2018-04-05',22.20,3,5,3,'Best pizza in town!',9);
INSERT INTO rating VALUES(2,'2018-02-11',22.20,5,5,5,'Excellent freshly made to order pizzas with a wide variety of options. Staff are always very nice and accommodating to special requests.',9);
INSERT INTO rating VALUES(3,'2018-04-05',15.00,3,5,5,'Stumbled across this beauty of a pizza place tonight. Fresh ingredients, made to order, at your table in less than five minutes.',9);
INSERT INTO rating VALUES(4,'2018-04-05',20.00,5,4,5,'The only thing we enjoyed at Fiazza was our wine.',9);
INSERT INTO rating VALUES(5,'2018-04-05',22.20,5,5,5,'Delicious pizza but the pizza crust is too dry. There is no pull and chew. Sorry guys. Work a bit more on your crust. The toppings and salads are amazing. Really good value.',9);
INSERT INTO rating VALUES(6,'2018-04-05',16.50,5,5,5,'REALLY thin crust pizza with bland sauce but the toppings were OK.',9);
INSERT INTO rating VALUES(7,'2018-04-05',23.00,5,5,5,'The price of a restaurant for the service of a subway.',9);
INSERT INTO rating VALUES(8,'2018-04-05',16.00,3,5,3,'dont recomend imcompetent high school staff will never make your pizza on time',9);
INSERT INTO rating VALUES(0,'2018-04-02',22.20,5,5,5,'Young crowd and unbeatable prices. Good portion sizes too!',10);
INSERT INTO rating VALUES(1,'2018-04-05',22.20,3,5,3,'Great atmosphere; excellent service; definitely great price and good food!',10);
INSERT INTO rating VALUES(2,'2018-01-25',12.50,5,5,5,'TERRIBLE SERVICE! we waited 1.5 hours for our food! We actually had to ask the waitress from another table to speak to a manager (since ours wasn''t showing up).',10);
INSERT INTO rating VALUES(3,'2018-04-05',12.00,3,5,5,'Amazing place. $6 for all menu items, cheap and delicious drinks, good vibes all around.',10);
INSERT INTO rating VALUES(4,'2018-04-05',20.00,5,4,5,'So much hype for this place. The music is SO loud. Are you a club, or a restaurant?',10);
INSERT INTO rating VALUES(5,'2018-04-05',15.00,5,5,5,'Lets start with saying i recommend this place. First the price is right, second food quality is good for the price. Service is not the greatest, rough around the edges, probably under staffed. But man, these guys hustle and bustle, get your food and drink.',10);
INSERT INTO rating VALUES(6,'2018-04-05',22.20,5,5,5,'The servers are so rude. So so rude. Food is spectacular tho',10);
INSERT INTO rating VALUES(7,'2018-04-05',22.20,5,5,5,'Menu has a great selection and the price can''t be beat. Good portions, comfortable seating and a fun environment. It was very busy and the staff were all very helpful and friendly!',10);
INSERT INTO rating VALUES(8,'2018-04-05',22.20,3,5,3,'Good vibe, good food, excellent price and service',10);
INSERT INTO rating VALUES(0,'2018-04-07',14.60,5,5,5,'Great ambience cool place to party. The dance floor was packed but it wasn''t so full that you couldn''t find a place to sit and chill for a while.',11);
INSERT INTO rating VALUES(1,'2018-04-05',22.20,3,5,3,'Like most of the market, the food is cheap garbage, the whole vibe is completely unoriginal, and the drinks are watered down.',11);
INSERT INTO rating VALUES(2,'2018-04-03',20.00,5,5,5,'FANTASTIC food at a great price , GREAT pub atmosphere & service',11);
INSERT INTO rating VALUES(3,'2018-04-05',16.00,3,5,5,'Worst experience ever a few weeks ago. Food took forever to come out and was cold when brought out, fries were over cooked.. then got new ones that where undercooked. They seemed to be really understaffed. Very overpriced for the quality of the food.',11);
INSERT INTO rating VALUES(4,'2018-04-05',22.20,5,4,5,'Great place to go on a night out. Downstairs is an old style pub with friendly staff and comfortable seating. Upstairs at night is a dance floor with bar and a small view out into the market.',11);
INSERT INTO rating VALUES(5,'2018-04-05',22.20,5,5,5,'7$ cover charge is a bit much for what the atmosphere is. Drinks are pricey but not too bad, music is good for a college crowd.',11);
INSERT INTO rating VALUES(6,'2018-04-05',30.00,5,5,3,'Waaaayyy too long of a wait time on Mondays and ok service',11);
INSERT INTO rating VALUES(7,'2018-04-05',22.20,5,5,5,'Average pub food with good pub atmosphere.',11);
INSERT INTO rating VALUES(8,'2018-04-05',22.20,3,5,3,'Honestly the bartenders are unbelievably awful. Decent atmosphere but in the Byward Market it''s hard to choose a worse option.',11);
INSERT INTO rating VALUES(0,'2018-02-01',22.20,5,5,5,'Fattoush salad is excellent.',12);
INSERT INTO rating VALUES(1,'2018-04-05',18.00,3,5,3,'Best fattoush in Ottawa.... No questions asked!',12);
INSERT INTO rating VALUES(2,'2018-03-15',22.20,5,5,5,'Simply The BEST !! The shawarma is really good, Fattoush is amazing and all at a great price. Its a must try, Highly Recommend !!',12);
INSERT INTO rating VALUES(3,'2018-04-05',13.50,3,5,5,'sooo bad. The shawarma portion is cheap and they don''t have beef on the rotisserie, Plus they charge extra for tabouleh. Not recommended',12);
INSERT INTO rating VALUES(4,'2018-04-05',11.00,5,4,5,'Friendly with great food',12);
INSERT INTO rating VALUES(5,'2018-04-05',21.00,5,5,5,'While there can sometimes be a line-up outside the door during the summer, it''s worth it if you have the time.',12);
INSERT INTO rating VALUES(6,'2018-04-05',22.20,5,5,5,'Fantastic Shawarma shop in the downtown area.',12);
INSERT INTO rating VALUES(7,'2018-04-05',22.20,5,5,5,'I like it.',12);
INSERT INTO rating VALUES(8,'2018-04-05',22.20,3,5,3,'Its alright...',12);

INSERT INTO menuitem VALUES(0,'Mighty Angus Original','food','main','Delicious, carefully-selected cuts of 100% Angus beef sourced from Canadian farms. Top that with a smoky Angus sauce, hickory smoked bacon pieces, crisp leaf lettuce, tomato, processed cheese and grilled onions, served on a sesame and poppy seed bun.',5.49,0);
INSERT INTO menuitem VALUES(1,'Big Mac','food','main','Nothing compares to two 100% Canadian beef patties, special sauce, crisp lettuce, processed cheddar cheese, pickles and onions on a toasted sesame seed bun.',5.49,0);
INSERT INTO menuitem VALUES(2,'Double Big Mac','food','main','Made with four 100% Canadian beef patties, special sauce, crisp lettuce, processed cheddar cheese, pickles and onions on a toasted sesame seed bun. Nothing compares to the taste.',5.49,0);
INSERT INTO menuitem VALUES(3,'McChicken','food','main','Breaded seasoned chicken and crisp lettuce, topped with our special recipe sauce. Some ingredients are just meant to be together.',5.49,0);
INSERT INTO menuitem VALUES(4,'Enchiladas','food','main','description',5.49,1);
INSERT INTO menuitem VALUES(5,'Chimichanga','food','main','description',5.49,1);
INSERT INTO menuitem VALUES(6,'Cantina Burger','food','main','description',5.49,1);
INSERT INTO menuitem VALUES(7,'Chorizo Pogo','food','main','description',7.49,1);
INSERT INTO menuitem VALUES(8,'Green Onion Chicken','food','main','Original fried chicken with green onion and sauce on top.',14.49,2);
INSERT INTO menuitem VALUES(9,'Crispy Chicken','food','main','Original fried chicken with an extra crispy batter.',10.39,2);
INSERT INTO menuitem VALUES(10,'Fried Chicken','food','main','Famous Original Fried Chicken',15.49,2);
INSERT INTO menuitem VALUES(11,'Wings','food','main','Delicious chicken wings',5.49,2);
INSERT INTO menuitem VALUES(12,'Fired Up Chicken','food','main','description',5.49,3);
INSERT INTO menuitem VALUES(13,'Vegi Chilli Bowl','food','main','description',5.49,3);
INSERT INTO menuitem VALUES(14,'The Forager','food','main','description',5.49,3);
INSERT INTO menuitem VALUES(15,'Spicy Moraccan Stew','food','main','description',5.49,3);
INSERT INTO menuitem VALUES(16,'Smoked Salmon','food','main','description',5.49,4);
INSERT INTO menuitem VALUES(17,'Zuppa','food','main','description',8.00,4);
INSERT INTO menuitem VALUES(18,'Tartare','food','main','description',16.00,4);
INSERT INTO menuitem VALUES(19,'Farfalle','food','main','description',17.00,4);
INSERT INTO menuitem VALUES(24,'Mexican Rice','food','main','description',6.00,7);
INSERT INTO menuitem VALUES(25,'Tacos','food','main','description',4.00,7);
INSERT INTO menuitem VALUES(26,'Sopa de Tortilla','food','main','description',8.00,7);
INSERT INTO menuitem VALUES(27,'Picaditas','food','main','4 Thick mini homemade corn tortilla mixed with lard & mashed pork rinds, topped with beans, feta cheese, lettuce & sour cream.',6.00,7);
INSERT INTO menuitem VALUES(28,'Base Pizza','food','main','description',8.55,9);
INSERT INTO menuitem VALUES(29,'Bun Cha Ca','food','main','description',13.95,8);
INSERT INTO menuitem VALUES(30,'Beef Shank Lo Fun','food','main','description',14.95,8);
INSERT INTO menuitem VALUES(31,'Chicken Pho','food','main','description',12.00,8);
INSERT INTO menuitem VALUES(32,'Soft Tacos','food','main','description',8.55,10);
INSERT INTO menuitem VALUES(33,'Chicken Caesar Wrap','food','main','description',13.95,10);
INSERT INTO menuitem VALUES(34,'Smokey BBQ Burger','food','main','description',14.95,10);
INSERT INTO menuitem VALUES(35,'Roasted Turkey Sandwich','food','main','description',12.00,10);
INSERT INTO menuitem VALUES(36,'Fish and Chips','food','main','description',10.00,11);
INSERT INTO menuitem VALUES(37,'Poutine','food','main','description',5.00,11);
INSERT INTO menuitem VALUES(38,'Jager Bombs','food','main','description',2.50,11);
INSERT INTO menuitem VALUES(39,'Wings','food','main','description',0.35,11);

INSERT INTO ratingitem VALUES(0,'2018-04-05',0,4,'Yummy Burger!');
INSERT INTO ratingitem VALUES(0,'2018-04-05',1,4,'My favourite thing to get!');
INSERT INTO ratingitem VALUES(1,'2018-04-05',0,3,'A classic burger but somehow has a weird fake beef taste.');
INSERT INTO ratingitem VALUES(1,'2018-04-05',1,3,'Alright not the best burger but still good.');
INSERT INTO ratingitem VALUES(2,'2018-04-05',2,4,'The best burger DOUBLED!!');
INSERT INTO ratingitem VALUES(2,'2018-04-05',3,3,'Chicken was a not that good.');
INSERT INTO ratingitem VALUES(3,'2018-04-05',4,3,'Pretty good Enchiladas but portion size is small.');
INSERT INTO ratingitem VALUES(3,'2018-04-05',5,3,'Really goo would recommend');
INSERT INTO ratingitem VALUES(1,'2018-04-05',6,3,'Was alright could be better');
INSERT INTO ratingitem VALUES(1,'2018-04-05',7,3,'Definitely try this!!!');
INSERT INTO ratingitem VALUES(4,'2018-04-05',8,3,'Dont bother with this order something else.');
INSERT INTO ratingitem VALUES(4,'2018-04-05',9,2,'Bleh not good at all');
INSERT INTO ratingitem VALUES(5,'2018-04-05',10,3,'My go to when i come here.');
INSERT INTO ratingitem VALUES(6,'2018-04-05',11,3,'Friend recommended this and it lives up to the hype.');

INSERT INTO ratingvotes VALUES(0,0,0,'2018-04-05','UP');
INSERT INTO ratingvotes VALUES(1,1,1,'2018-04-05','DOWN');
INSERT INTO ratingvotes VALUES(2,2,2,'2018-04-05','UP');
INSERT INTO ratingvotes VALUES(3,3,3,'2018-04-05','DOWN');
INSERT INTO ratingvotes VALUES(4,4,4,'2018-04-05','UP');
INSERT INTO ratingvotes VALUES(5,5,5,'2018-04-05','DOWN');
INSERT INTO ratingvotes VALUES(6,6,6,'2018-04-05','UP');
INSERT INTO ratingvotes VALUES(7,7,7,'2018-04-05','DOWN');