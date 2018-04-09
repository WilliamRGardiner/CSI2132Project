SELECT *
FROM restaurant, location
WHERE restaurant.name = 'McDonalds' AND restaurant.restaurantid = location.locationid

/* B with restaurant: "McDonalds" */
SELECT *
FROM menuitem
WHERE menuitem.restaurantid in
(
  SELECT restaurantid
  FROM restaurant
  WHERE restaurant.name = 'McDonalds'
)

/* C with category: "Fast Food"*/
SELECT manager_name, open_date
FROM
(
  SELECT *
  FROM location
  JOIN restaurant ON locationid = restaurantid
) AS LR
WHERE LR.type = 'Fast Food'

/* D with restaurant: "McDonalds" */
SELECT rname, mname, mprice, lopen, lmgrname
FROM
(
  SELECT *
  FROM
  (
    SELECT *
    FROM
    (
      SELECT
        location.opening_time AS Lopen,
        restaurant.name AS Rname,
        menuitem.name AS Mname,
        menuitem.price AS Mprice,
        location.manager_name AS LmgrName
      FROM location
      JOIN restaurant ON restaurant.restaurantid = location.restaurantid
      JOIN menuitem ON restaurant.restaurantid = menuitem.restaurantid
    ) AS A
    WHERE rname = 'McDonalds'
  ) AS B
  JOIN
  (
    SELECT *
    FROM
    (
      SELECT
        MAX(menuitem.price) AS maxPrice,
        restaurant.name AS name
      FROM restaurant
      JOIN menuitem ON restaurant.restaurantid = menuitem.restaurantid
    	group by restaurant.restaurantid
    ) AS A
    WHERE name = 'McDonalds'
  ) AS C ON C.name = B.rname
) AS X
WHERE X.mprice = X.maxPrice

/* E */
SELECT restaurant.type AS type, category, AVG(price) AS "Average Price"
FROM restaurant, menuitem
GROUP BY restaurant.type, category

--f)
SELECT rater.username,restaurant.name,COUNT(rating.date)
FROM restaurant AS restaurant
INNER JOIN location ON restaurant.restaurantID=location.locationID
INNER JOIN rating ON location.locationID=rating.restaurantID
INNER JOIN rater ON rating.userID=rater.userID
GROUP BY restaurant.name,rater.username
ORDER BY rater.username,restaurant.name;

--g)
SELECT restaurant.name, restaurant.url, location.phone_number, location.address, location.opening_time, location.closing_time
	FROM restaurant
	INNER JOIN location
		ON restaurant.restaurantID=location.restaurantID
	WHERE location.locationID NOT IN
		(SELECT loc2.location_id
			FROM location loc2
			INNER JOIN rating rate2
				ON loc2.locationID=rate2.restaurantID
			WHERE EXTRACT(month from rate2.date) = 1
				AND EXTRACT(year from rate2.date) = 2015 )

--h)
SELECT restaurant.name, location.open_date, rating.date
	FROM restaurant
	INNER JOIN location
		ON restaurant.restaurantID=location.restaurantID
	INNER JOIN rating
		ON location.locationID=rating.restaurantID
	WHERE rating.staff < ALL
		(SELECT rating2.staff
			FROM rating AS rating2
			INNER JOIN rater
				ON rating2.userID=rater.userID
			WHERE rater.userID= 2 )
	ORDER BY rating.date DESC;
--i)
SELECT restaurant.type,restaurant.name, rater.name, temp.avgRate
	FROM restaurant
	INNER JOIN Location
		ON restaurant.restaurantID=location.restaurantID
	INNER JOIN rating
		ON location.locationID=rating.restaurantID
	INNER JOIN rater
		ON rating.userID=rater.userID
	INNER JOIN
		(SELECT loc2.locationID locid2, AVG(rating2.food) avgRate
			FROM Rating rating2
			INNER JOIN location loc2
				ON rating2.restaurantID=loc2.locationID
			GROUP BY locid2) temp
		ON location.locationID=locid2
	WHERE temp.avgRate >= ALL
		(SELECT AVG(rating2.food) avgRate
			FROM rating rating2
			INNER JOIN location loc2
				ON rating2.restaurantID=loc2.locationID
			INNER JOIN restaurant restaurant2
				ON restaurant2.restaurantID=loc2.restaurantID
			GROUP BY loc2.locationID)
	ORDER BY restaurant.type;

--j)
SELECT restaurant1.type, temp.avgRate
FROM restaurant restaurant1
LEFT JOIN
	(SELECT restaurant2.restaurantID restaurant2ID, AVG(innerT.innerAvg) avgRate
		FROM restaurant restaurant2
		INNER JOIN location loc2
			ON restaurant2.restaurantID=loc2.restaurantID
		INNER JOIN Rating rating2
			ON loc2.locationID=rating2.restaurantID
		INNER JOIN
			(SELECT rating3.userID r3_uid, rating3.date r3_d, (rating3.food+rating3.price+rating3.staff+rating3.mood)/4.0 innerAvg
				FROM Rating rating3) innerT
			ON rating2.userID=innerT.r3_uid AND rating2.date=innerT.r3_d
		GROUP BY restaurant2.restaurantID) temp
	ON restaurant1.restaurantID=temp.restaurant2ID
	ORDER BY temp.avgRate DESC
	
--K)
SELECT E.name, join_date, reputation.reputation, B.name, A.date
FROM rater E 
JOIN (SELECT raterid, COALESCE(upvotes, 0) / (COALESCE(upvotes, 0) + COALESCE(downvotes, 0)) * 4 + 1 AS reputation
				FROM(SELECT COALESCE(uid, did) AS raterid, upvotes, downvotes 
					 FROM((SELECT raterid AS uid, count(*) AS upvotes
							FROM ratingvotes
         					WHERE ratingvotes.type='UP'
          					GROUP BY raterid
        				   ) AS U
        					FULL OUTER JOIN(
        						SELECT raterid AS did, count(*) AS downvotes
       							FROM ratingvotes
         						WHERE ratingvotes.type='DOWN'
         						GROUP BY raterid
      						) AS D ON uid = did ) AS R )As rep) As reputation on E.userID=reputation.raterid
JOIN rating A on E.userID= A.userID
JOIN restaurant B on A.restaurantID = B.RestaurantID
WHERE ((((food + mood)/2)) >= (SELECT MAX((food + mood)/2)
								FROM rating));
								
								
								


--L)
SELECT E.name, reputation.reputation, B.name, A.date
FROM rater E 
JOIN (SELECT raterid, COALESCE(upvotes, 0) / (COALESCE(upvotes, 0) + COALESCE(downvotes, 0)) * 4 + 1 AS reputation
				FROM(SELECT COALESCE(uid, did) AS raterid, upvotes, downvotes 
					 FROM((SELECT raterid AS uid, count(*) AS upvotes
							FROM ratingvotes
         					WHERE ratingvotes.type='UP'
          					GROUP BY raterid
        				   ) AS U
        					FULL OUTER JOIN(
        						SELECT raterid AS did, count(*) AS downvotes
       							FROM ratingvotes
         						WHERE ratingvotes.type='DOWN'
         						GROUP BY raterid
      						) AS D ON uid = did ) AS R )As rep) As reputation on E.userID=reputation.raterid
JOIN rating A on E.userID= A.userID
JOIN restaurant B on A.restaurantID = B.RestaurantID
WHERE ((((food + mood)/2)) >= (SELECT MAX((food + mood)/2)
								FROM rating));

--M)
SELECT E.name, reputation.reputation, A.comments, M.name, M.price
FROM rater E
JOIN (SELECT raterid, COALESCE(upvotes, 0) / (COALESCE(upvotes, 0) + COALESCE(downvotes, 0)) * 4 + 1 AS reputation
				FROM(SELECT COALESCE(uid, did) AS raterid, upvotes, downvotes 
					 FROM((SELECT raterid AS uid, count(*) AS upvotes
							FROM ratingvotes
         					WHERE ratingvotes.type='UP'
          					GROUP BY raterid
        				   ) AS U
        					FULL OUTER JOIN(
        						SELECT raterid AS did, count(*) AS downvotes
       							FROM ratingvotes
         						WHERE ratingvotes.type='DOWN'
         						GROUP BY raterid
      						) AS D ON uid = did ) AS R )As rep) As reputation on E.userID=reputation.raterid 
JOIN rating A on E.userID= A.userID
JOIN restaurant B on A.restaurantID = B.restaurantID
JOIN menuitem M on B.restaurantID = M.restaurantID
JOIN ratingitem I on M.itemID = I.itemID
WHERE (E.name = (Select T2.name
						from rater T2
						JOIN rating A2 on T2.userID= A2.userID
						JOIN restaurant B2 on A2.restaurantID = B2.restaurantID
						where B2.name= 'The Fry'
						group by T2.name
						order by count(T2.name) desc
						limit 1) AND B.name='The Fry');
					
				


--N)
SELECT R.name, R.email
FROM rater R 
JOIN rating A on R.userID= A.userID
JOIN restaurant B on A.restaurantID = B.RestaurantID
WHERE ((A.food +A.mood + A.staff)/3) > (SELECT MAX((A2.food +A2.mood + A2.staff)/3) 
										FROM rater R2
										JOIN rating A2 on R2.userID= A.userID
										JOIN restaurant B on A.restaurantID = B.RestaurantID
										Where R2.name ='John'
										);
										
--O)

SELECT E.name, E.type, E.email, B.name, A.food, A.mood,A.staff
FROM rater E 
JOIN rating A on E.userID= A.userID
JOIN restaurant B on A.restaurantID = B.RestaurantID

