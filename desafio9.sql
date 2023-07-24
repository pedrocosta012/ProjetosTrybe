SELECT
	COUNT(us.usuario_id) AS quantidade_musicas_no_historico
FROM SpotifyClone.historicos AS h
INNER JOIN SpotifyClone.usuarios AS us
ON us.usuario_id = h.usuario_id
WHERE us.nome = 'Barbara Liskov';
