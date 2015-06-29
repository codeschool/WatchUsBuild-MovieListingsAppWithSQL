/*
 Source Server         : sql2sql-stb
 Source Server Type    : SQLite
 Source Server Version : 3007006
 Source Database       : main

 Target Server Type    : SQLite
 Target Server Version : 3007006
 File Encoding         : utf-8

*/

PRAGMA foreign_keys = false;

-- ----------------------------
--  Table structure for "movies"
-- ----------------------------
DROP TABLE IF EXISTS "movies";
CREATE TABLE "movies" (
	 "id" integer PRIMARY KEY AUTOINCREMENT,
	 "title" text
);

-- ----------------------------
--  Records of "movies"
-- ----------------------------
BEGIN;
INSERT INTO "movies" VALUES (1, 'Don Juan');
INSERT INTO "movies" VALUES (2, 'The Lost World');
INSERT INTO "movies" VALUES (3, 'Peter Pan');
INSERT INTO "movies" VALUES (4, 'Robin Hood');
INSERT INTO "movies" VALUES (5, 'Wolfman');
COMMIT;

-- ----------------------------
--  Table structure for "showtimes"
-- ----------------------------
DROP TABLE IF EXISTS "showtimes";
CREATE TABLE "showtimes" (
	 "id" integer PRIMARY KEY AUTOINCREMENT,
	 "time" text,
	 "movie_id" integer,
	 "theatre_id" integer,
	CONSTRAINT "fk_movies" FOREIGN KEY ("movie_id") REFERENCES "movies" ("id"),
	CONSTRAINT "fk_theatres" FOREIGN KEY ("theatre_id") REFERENCES "theatres" ("id")
);

-- ----------------------------
--  Records of "showtimes"
-- ----------------------------
BEGIN;
INSERT INTO "showtimes" VALUES (1, '3:00 PM', 1, 1);
INSERT INTO "showtimes" VALUES (2, '4:00 PM', 1, 2);
INSERT INTO "showtimes" VALUES (3, '6:00 PM', 2, 3);
INSERT INTO "showtimes" VALUES (4, '5:00 PM', 4, 3);
INSERT INTO "showtimes" VALUES (5, '10:00 AM', 1, 4);
INSERT INTO "showtimes" VALUES (6, '12:00 PM', 1, 1);
INSERT INTO "showtimes" VALUES (7, '11:00 AM', 3, 1);
INSERT INTO "showtimes" VALUES (8, '2:00 PM', 3, 1);
INSERT INTO "showtimes" VALUES (9, '4:00 PM', 1, 2);
INSERT INTO "showtimes" VALUES (10, '10:00 AM', 3, 2);
INSERT INTO "showtimes" VALUES (11, '2:00 PM', 2, 1);
INSERT INTO "showtimes" VALUES (12, '10:00 AM', 5, 1);
INSERT INTO "showtimes" VALUES (13, '1:00 PM', 5, 1);
INSERT INTO "showtimes" VALUES (14, '3:00 PM', 5, 1);
COMMIT;

-- ----------------------------
--  Table structure for "theatres"
-- ----------------------------
DROP TABLE IF EXISTS "theatres";
CREATE TABLE "theatres" (
	 "id" integer PRIMARY KEY AUTOINCREMENT,
	 "name" text
);

-- ----------------------------
--  Records of "theatres"
-- ----------------------------
BEGIN;
INSERT INTO "theatres" VALUES (1, 'Plaza Cinema Café');
INSERT INTO "theatres" VALUES (2, 'AMC Universal Cineplex');
INSERT INTO "theatres" VALUES (3, 'Regal Winter Park');
INSERT INTO "theatres" VALUES (4, 'AMC Altamonte');
INSERT INTO "theatres" VALUES (5, 'Regal The Loop');
COMMIT;

PRAGMA foreign_keys = true;
