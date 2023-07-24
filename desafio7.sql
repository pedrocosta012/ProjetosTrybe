SELECT
	ar.nome_artista AS artista,
  al.nome_album AS album,
  COUNT(ua.usuario_id) AS seguidores
FROM SpotifyClone.albuns AS al

INNER JOIN SpotifyClone.artistas AS ar
ON al.artista_id = ar.artista_id

INNER JOIN SpotifyClone.usuario_artista AS ua
ON ua.artista_id = ar.artista_id

GROUP BY album, artista
ORDER BY seguidores DESC, artista, album;
