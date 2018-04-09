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
      FROM location
      JOIN restaurant ON restaurant.restaurantid = location.restaurantid
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
