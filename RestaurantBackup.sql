toc.dat                                                                                             0000600 0004000 0002000 00000017531 13254764730 0014461 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP           %                v           dsoni037    9.5.4    10.1     �	           0    0    ENCODING    ENCODING         SET client_encoding = 'LATIN1';
                       false         �	           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                     2615    4921337    project    SCHEMA        CREATE SCHEMA project;
    DROP SCHEMA project;
             dsoni037    false         �            1259    4922119    location    TABLE     3  CREATE TABLE location (
    location_id integer NOT NULL,
    open_date date NOT NULL,
    manager_name text NOT NULL,
    phone_number text NOT NULL,
    address text NOT NULL,
    opening_time time without time zone NOT NULL,
    closing_time time without time zone NOT NULL,
    restaurant_id integer
);
    DROP TABLE project.location;
       project         dsoni037    false    6         �            1259    4922132    menuitem    TABLE       CREATE TABLE menuitem (
    item_id integer NOT NULL,
    name text NOT NULL,
    type text NOT NULL,
    category text NOT NULL,
    description text,
    price numeric(7,2) NOT NULL,
    restaurant_id integer,
    CONSTRAINT menuitem_price_check CHECK ((price >= (0)::numeric))
);
    DROP TABLE project.menuitem;
       project         dsoni037    false    6         �            1259    4921360    rater    TABLE       CREATE TABLE rater (
    user_id integer NOT NULL,
    email text,
    name text NOT NULL,
    join_date date NOT NULL,
    type text,
    reputation integer DEFAULT 1,
    CONSTRAINT rater_reputation_check CHECK (((reputation >= 1) AND (reputation <= 5)))
);
    DROP TABLE project.rater;
       project         dsoni037    false    6         �            1259    4921957    rating    TABLE     �  CREATE TABLE rating (
    user_id integer,
    date date,
    price numeric(7,2),
    food integer,
    mood integer,
    staff integer,
    comments text,
    restaurant_id integer,
    CONSTRAINT rating_check CHECK (((mood >= 1) AND (food <= 5))),
    CONSTRAINT rating_food_check CHECK (((food >= 1) AND (food <= 5))),
    CONSTRAINT rating_price_check CHECK ((price >= (0)::numeric)),
    CONSTRAINT rating_staff_check CHECK (((staff >= 1) AND (staff <= 5)))
);
    DROP TABLE project.rating;
       project         dsoni037    false    6         �            1259    4922146 
   ratingitem    TABLE     �   CREATE TABLE ratingitem (
    user_id integer,
    date date NOT NULL,
    item_id integer,
    rating integer NOT NULL,
    comments text,
    CONSTRAINT ratingitem_rating_check CHECK (((rating >= 1) AND (rating <= 5)))
);
    DROP TABLE project.ratingitem;
       project         dsoni037    false    6         �            1259    4921949 
   restaurant    TABLE     u   CREATE TABLE restaurant (
    restaurant_id integer NOT NULL,
    name text NOT NULL,
    type text,
    url text
);
    DROP TABLE project.restaurant;
       project         dsoni037    false    6         �	          0    4922119    location 
   TABLE DATA               �   COPY location (location_id, open_date, manager_name, phone_number, address, opening_time, closing_time, restaurant_id) FROM stdin;
    project       dsoni037    false    194       2483.dat �	          0    4922132    menuitem 
   TABLE DATA               ]   COPY menuitem (item_id, name, type, category, description, price, restaurant_id) FROM stdin;
    project       dsoni037    false    195       2484.dat �	          0    4921360    rater 
   TABLE DATA               K   COPY rater (user_id, email, name, join_date, type, reputation) FROM stdin;
    project       dsoni037    false    191       2480.dat �	          0    4921957    rating 
   TABLE DATA               [   COPY rating (user_id, date, price, food, mood, staff, comments, restaurant_id) FROM stdin;
    project       dsoni037    false    193       2482.dat �	          0    4922146 
   ratingitem 
   TABLE DATA               G   COPY ratingitem (user_id, date, item_id, rating, comments) FROM stdin;
    project       dsoni037    false    196       2485.dat �	          0    4921949 
   restaurant 
   TABLE DATA               =   COPY restaurant (restaurant_id, name, type, url) FROM stdin;
    project       dsoni037    false    192       2481.dat 5	           2606    4922126    location location_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY location
    ADD CONSTRAINT location_pkey PRIMARY KEY (location_id);
 A   ALTER TABLE ONLY project.location DROP CONSTRAINT location_pkey;
       project         dsoni037    false    194         7	           2606    4922140    menuitem menuitem_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY menuitem
    ADD CONSTRAINT menuitem_pkey PRIMARY KEY (item_id);
 A   ALTER TABLE ONLY project.menuitem DROP CONSTRAINT menuitem_pkey;
       project         dsoni037    false    195         1	           2606    4921369    rater rater_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY rater
    ADD CONSTRAINT rater_pkey PRIMARY KEY (user_id);
 ;   ALTER TABLE ONLY project.rater DROP CONSTRAINT rater_pkey;
       project         dsoni037    false    191         3	           2606    4921956    restaurant restaurant_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY restaurant
    ADD CONSTRAINT restaurant_pkey PRIMARY KEY (restaurant_id);
 E   ALTER TABLE ONLY project.restaurant DROP CONSTRAINT restaurant_pkey;
       project         dsoni037    false    192         :	           2606    4922127 $   location location_restaurant_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY location
    ADD CONSTRAINT location_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id);
 O   ALTER TABLE ONLY project.location DROP CONSTRAINT location_restaurant_id_fkey;
       project       dsoni037    false    192    2355    194         ;	           2606    4922141 $   menuitem menuitem_restaurant_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY menuitem
    ADD CONSTRAINT menuitem_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id);
 O   ALTER TABLE ONLY project.menuitem DROP CONSTRAINT menuitem_restaurant_id_fkey;
       project       dsoni037    false    2355    192    195         9	           2606    4921972     rating rating_restaurant_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY rating
    ADD CONSTRAINT rating_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id);
 K   ALTER TABLE ONLY project.rating DROP CONSTRAINT rating_restaurant_id_fkey;
       project       dsoni037    false    193    2355    192         8	           2606    4921967    rating rating_user_id_fkey    FK CONSTRAINT     p   ALTER TABLE ONLY rating
    ADD CONSTRAINT rating_user_id_fkey FOREIGN KEY (user_id) REFERENCES rater(user_id);
 E   ALTER TABLE ONLY project.rating DROP CONSTRAINT rating_user_id_fkey;
       project       dsoni037    false    193    2353    191         =	           2606    4922158 "   ratingitem ratingitem_item_id_fkey    FK CONSTRAINT     {   ALTER TABLE ONLY ratingitem
    ADD CONSTRAINT ratingitem_item_id_fkey FOREIGN KEY (item_id) REFERENCES menuitem(item_id);
 M   ALTER TABLE ONLY project.ratingitem DROP CONSTRAINT ratingitem_item_id_fkey;
       project       dsoni037    false    2359    195    196         <	           2606    4922153 "   ratingitem ratingitem_user_id_fkey    FK CONSTRAINT     x   ALTER TABLE ONLY ratingitem
    ADD CONSTRAINT ratingitem_user_id_fkey FOREIGN KEY (user_id) REFERENCES rater(user_id);
 M   ALTER TABLE ONLY project.ratingitem DROP CONSTRAINT ratingitem_user_id_fkey;
       project       dsoni037    false    191    196    2353                                                                                                                                                                               2483.dat                                                                                            0000600 0004000 0002000 00000000005 13254764730 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2484.dat                                                                                            0000600 0004000 0002000 00000000005 13254764730 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2480.dat                                                                                            0000600 0004000 0002000 00000000005 13254764730 0014255 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2482.dat                                                                                            0000600 0004000 0002000 00000000005 13254764730 0014257 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2485.dat                                                                                            0000600 0004000 0002000 00000000005 13254764730 0014262 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2481.dat                                                                                            0000600 0004000 0002000 00000000005 13254764730 0014256 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           restore.sql                                                                                         0000600 0004000 0002000 00000017311 13254764730 0015402 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 10.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'LATIN1';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = project, pg_catalog;

ALTER TABLE ONLY project.ratingitem DROP CONSTRAINT ratingitem_user_id_fkey;
ALTER TABLE ONLY project.ratingitem DROP CONSTRAINT ratingitem_item_id_fkey;
ALTER TABLE ONLY project.rating DROP CONSTRAINT rating_user_id_fkey;
ALTER TABLE ONLY project.rating DROP CONSTRAINT rating_restaurant_id_fkey;
ALTER TABLE ONLY project.menuitem DROP CONSTRAINT menuitem_restaurant_id_fkey;
ALTER TABLE ONLY project.location DROP CONSTRAINT location_restaurant_id_fkey;
ALTER TABLE ONLY project.restaurant DROP CONSTRAINT restaurant_pkey;
ALTER TABLE ONLY project.rater DROP CONSTRAINT rater_pkey;
ALTER TABLE ONLY project.menuitem DROP CONSTRAINT menuitem_pkey;
ALTER TABLE ONLY project.location DROP CONSTRAINT location_pkey;
DROP TABLE project.restaurant;
DROP TABLE project.ratingitem;
DROP TABLE project.rating;
DROP TABLE project.rater;
DROP TABLE project.menuitem;
DROP TABLE project.location;
DROP SCHEMA project;
--
-- Name: project; Type: SCHEMA; Schema: -; Owner: dsoni037
--

CREATE SCHEMA project;


ALTER SCHEMA project OWNER TO dsoni037;

SET search_path = project, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: location; Type: TABLE; Schema: project; Owner: dsoni037
--

CREATE TABLE location (
    location_id integer NOT NULL,
    open_date date NOT NULL,
    manager_name text NOT NULL,
    phone_number text NOT NULL,
    address text NOT NULL,
    opening_time time without time zone NOT NULL,
    closing_time time without time zone NOT NULL,
    restaurant_id integer
);


ALTER TABLE location OWNER TO dsoni037;

--
-- Name: menuitem; Type: TABLE; Schema: project; Owner: dsoni037
--

CREATE TABLE menuitem (
    item_id integer NOT NULL,
    name text NOT NULL,
    type text NOT NULL,
    category text NOT NULL,
    description text,
    price numeric(7,2) NOT NULL,
    restaurant_id integer,
    CONSTRAINT menuitem_price_check CHECK ((price >= (0)::numeric))
);


ALTER TABLE menuitem OWNER TO dsoni037;

--
-- Name: rater; Type: TABLE; Schema: project; Owner: dsoni037
--

CREATE TABLE rater (
    user_id integer NOT NULL,
    email text,
    name text NOT NULL,
    join_date date NOT NULL,
    type text,
    reputation integer DEFAULT 1,
    CONSTRAINT rater_reputation_check CHECK (((reputation >= 1) AND (reputation <= 5)))
);


ALTER TABLE rater OWNER TO dsoni037;

--
-- Name: rating; Type: TABLE; Schema: project; Owner: dsoni037
--

CREATE TABLE rating (
    user_id integer,
    date date,
    price numeric(7,2),
    food integer,
    mood integer,
    staff integer,
    comments text,
    restaurant_id integer,
    CONSTRAINT rating_check CHECK (((mood >= 1) AND (food <= 5))),
    CONSTRAINT rating_food_check CHECK (((food >= 1) AND (food <= 5))),
    CONSTRAINT rating_price_check CHECK ((price >= (0)::numeric)),
    CONSTRAINT rating_staff_check CHECK (((staff >= 1) AND (staff <= 5)))
);


ALTER TABLE rating OWNER TO dsoni037;

--
-- Name: ratingitem; Type: TABLE; Schema: project; Owner: dsoni037
--

CREATE TABLE ratingitem (
    user_id integer,
    date date NOT NULL,
    item_id integer,
    rating integer NOT NULL,
    comments text,
    CONSTRAINT ratingitem_rating_check CHECK (((rating >= 1) AND (rating <= 5)))
);


ALTER TABLE ratingitem OWNER TO dsoni037;

--
-- Name: restaurant; Type: TABLE; Schema: project; Owner: dsoni037
--

CREATE TABLE restaurant (
    restaurant_id integer NOT NULL,
    name text NOT NULL,
    type text,
    url text
);


ALTER TABLE restaurant OWNER TO dsoni037;

--
-- Data for Name: location; Type: TABLE DATA; Schema: project; Owner: dsoni037
--

COPY location (location_id, open_date, manager_name, phone_number, address, opening_time, closing_time, restaurant_id) FROM stdin;
\.
COPY location (location_id, open_date, manager_name, phone_number, address, opening_time, closing_time, restaurant_id) FROM '$$PATH$$/2483.dat';

--
-- Data for Name: menuitem; Type: TABLE DATA; Schema: project; Owner: dsoni037
--

COPY menuitem (item_id, name, type, category, description, price, restaurant_id) FROM stdin;
\.
COPY menuitem (item_id, name, type, category, description, price, restaurant_id) FROM '$$PATH$$/2484.dat';

--
-- Data for Name: rater; Type: TABLE DATA; Schema: project; Owner: dsoni037
--

COPY rater (user_id, email, name, join_date, type, reputation) FROM stdin;
\.
COPY rater (user_id, email, name, join_date, type, reputation) FROM '$$PATH$$/2480.dat';

--
-- Data for Name: rating; Type: TABLE DATA; Schema: project; Owner: dsoni037
--

COPY rating (user_id, date, price, food, mood, staff, comments, restaurant_id) FROM stdin;
\.
COPY rating (user_id, date, price, food, mood, staff, comments, restaurant_id) FROM '$$PATH$$/2482.dat';

--
-- Data for Name: ratingitem; Type: TABLE DATA; Schema: project; Owner: dsoni037
--

COPY ratingitem (user_id, date, item_id, rating, comments) FROM stdin;
\.
COPY ratingitem (user_id, date, item_id, rating, comments) FROM '$$PATH$$/2485.dat';

--
-- Data for Name: restaurant; Type: TABLE DATA; Schema: project; Owner: dsoni037
--

COPY restaurant (restaurant_id, name, type, url) FROM stdin;
\.
COPY restaurant (restaurant_id, name, type, url) FROM '$$PATH$$/2481.dat';

--
-- Name: location location_pkey; Type: CONSTRAINT; Schema: project; Owner: dsoni037
--

ALTER TABLE ONLY location
    ADD CONSTRAINT location_pkey PRIMARY KEY (location_id);


--
-- Name: menuitem menuitem_pkey; Type: CONSTRAINT; Schema: project; Owner: dsoni037
--

ALTER TABLE ONLY menuitem
    ADD CONSTRAINT menuitem_pkey PRIMARY KEY (item_id);


--
-- Name: rater rater_pkey; Type: CONSTRAINT; Schema: project; Owner: dsoni037
--

ALTER TABLE ONLY rater
    ADD CONSTRAINT rater_pkey PRIMARY KEY (user_id);


--
-- Name: restaurant restaurant_pkey; Type: CONSTRAINT; Schema: project; Owner: dsoni037
--

ALTER TABLE ONLY restaurant
    ADD CONSTRAINT restaurant_pkey PRIMARY KEY (restaurant_id);


--
-- Name: location location_restaurant_id_fkey; Type: FK CONSTRAINT; Schema: project; Owner: dsoni037
--

ALTER TABLE ONLY location
    ADD CONSTRAINT location_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id);


--
-- Name: menuitem menuitem_restaurant_id_fkey; Type: FK CONSTRAINT; Schema: project; Owner: dsoni037
--

ALTER TABLE ONLY menuitem
    ADD CONSTRAINT menuitem_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id);


--
-- Name: rating rating_restaurant_id_fkey; Type: FK CONSTRAINT; Schema: project; Owner: dsoni037
--

ALTER TABLE ONLY rating
    ADD CONSTRAINT rating_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id);


--
-- Name: rating rating_user_id_fkey; Type: FK CONSTRAINT; Schema: project; Owner: dsoni037
--

ALTER TABLE ONLY rating
    ADD CONSTRAINT rating_user_id_fkey FOREIGN KEY (user_id) REFERENCES rater(user_id);


--
-- Name: ratingitem ratingitem_item_id_fkey; Type: FK CONSTRAINT; Schema: project; Owner: dsoni037
--

ALTER TABLE ONLY ratingitem
    ADD CONSTRAINT ratingitem_item_id_fkey FOREIGN KEY (item_id) REFERENCES menuitem(item_id);


--
-- Name: ratingitem ratingitem_user_id_fkey; Type: FK CONSTRAINT; Schema: project; Owner: dsoni037
--

ALTER TABLE ONLY ratingitem
    ADD CONSTRAINT ratingitem_user_id_fkey FOREIGN KEY (user_id) REFERENCES rater(user_id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       