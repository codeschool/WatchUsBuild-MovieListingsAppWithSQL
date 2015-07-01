-- 1
-- a) List of movies
SELECT id, title
FROM movies;

-- b) How many theatres playing a movie (remember DISTINCT from Try SQL?)
SELECT COUNT(DISTINCT theatre_id)
FROM showtimes
WHERE movie_id = 1;

-- c) Can we merge both queries into one? (we don't have to)
SELECT m.id, m.title, (
  SELECT COUNT(DISTINCT theatre_id)
  FROM showtimes
  WHERE movie_id = m.id
) as theatresCount
FROM movies m;

-- 2) One movie
SELECT id, title
FROM movies
WHERE id = 1;

-- 3
-- a) Theatres playing a movie
SELECT t.id, t.name
FROM theatres t
INNER JOIN showtimes s
ON s.theatre_id = t.id
WHERE s.movie_id = 1
GROUP BY t.id;

-- b) How many showtimes for a movie in a theater?
SELECT COUNT(*)
FROM showtimes
WHERE theatre_id = 1
AND movie_id = 2


-- c) Can we merge the two?
SELECT t.id, t.name, (
  SELECT COUNT(*)
  FROM showtimes
  WHERE theatre_id = t.id
  AND movie_id = s.movie_id
) as showtimeCount
FROM theatres t
INNER JOIN showtimes s
ON s.theatre_id = t.id
WHERE s.movie_id = 1
GROUP BY t.id;

-- 4) One theatre
SELECT id, name
FROM theatres
WHERE id = 1;

-- 5) List of showtimes for a movie and theatre
SELECT time
FROM showtimes
WHERE movie_id = 1
AND theatre_id = 2;


-- 6) List of theatres
SELECT id, name
FROM theatres

-- 7) List of movies playing in a theatre
SELECT m.id, m.title
FROM showtimes s
INNER JOIN movies m ON s.movie_id = m.id
WHERE s.theatre_id = 1
GROUP BY s.movie_id

-- 8) List of showtimes playing in a
SELECT time
FROM showtimes
WHERE theatre_id = 1
AND movie_id = 2
