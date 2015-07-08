-- THEATRES SECTION
--
--
-- ALL THEATRES:
--
-- 1) all theatres
SELECT id, name
FROM theatres;

-- THEATRE PAGE:
--
-- 2) one theatre
SELECT id, name
FROM theatres
WHERE id = 1;

-- 3) all movies playing in a theatre
SELECT s.time, m.title
FROM showtimes s
INNER JOIN movies m ON m.id = s.movie_id
WHERE s.theatre_id = 1
ORDER BY m.title



-- MOVIES SECTION
--
--
-- MOVIE PAGE:
--
-- 4) movie title
SELECT id, title
FROM movies
WHERE id = 1;


-- 5) list of theatres and showtimes
SELECT t.name, s.time
FROM showtimes s
INNER JOIN theatres t ON t.id = s.theatre_id
WHERE s.movie_id = 1
ORDER BY t.name;

--
-- ALL MOVIES PAGE:
--
-- 6) all movies
SELECT id, title
FROM movies;

-- 7a) counting in how many theatres a movie is being played
-- point out count is incorrect (look back at data)
SELECT movie_id, COUNT(theatre_id)
FROM showtimes
GROUP BY movie_id;

-- 7b) add distinct to previous query
SELECT movie_id, COUNT(DISTINCT theatre_id)
FROM showtimes
GROUP BY movie_id


-- 8a) merge queries #6 and #7 into one
-- all movie with their titles and count of theatres
SELECT m.id, m.title, COUNT(DISTINCT s.theatre_id) as theatresCount
FROM showtimes s
INNER JOIN movies m ON m.id = s.movie_id
GROUP BY s.movie_id

-- 8b) show all movies with their count
--  point that we were missing one movie that didn't have a count
SELECT m.id, m.title, COUNT(DISTINCT s.theatre_id) as theatresCount
FROM movies m
LEFT OUTER JOIN showtimes s ON m.id = s.movie_id
GROUP BY s.movie_id
ORDER BY theatresCount DESC
