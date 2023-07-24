SELECT
	c.nome_cancao AS cancao,
	COUNT(h.cancao_id) AS reproducoes
FROM SpotifyClone.historicos AS h
INNER JOIN SpotifyClone.cancoes AS c
ON c.cancao_id = h.cancao_id
GROUP BY cancao
ORDER BY reproducoes DESC, cancao
LIMIT 2;
