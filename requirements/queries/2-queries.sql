-- 1) List of movies, with count of theatres
SELECT m.id, m.title, (
  SELECT COUNT(DISTINCT theatre_id)
  FROM showtimes
  WHERE movie_id = m.id
) as theatresCount
FROM movies m;

-- 2) One movie
SELECT m.id, m.title FROM movies m WHERE id = 1;

-- 3) List of theatres playing a movie
SELECT t.id, t.name, (
  SELECT count(*)
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
SELECT t.id, t.name FROM theatres t WHERE id = 1;

-- 5) List of showtimes for a movie and theatre
SELECT s.time
FROM showtimes s
WHERE movie_id = 1
AND theatre_id = 2;
