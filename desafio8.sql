SELECT
	ar.nome_artista AS artista,
  al.nome_album AS album
FROM SpotifyClone.albuns AS al
INNER JOIN SpotifyClone.artistas AS ar
ON ar.artista_id = al.artista_id
WHERE ar.nome_artista = 'Elis Regina';
