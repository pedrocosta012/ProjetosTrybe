SELECT
	us.nome AS usuario,
  COUNT(h.cancao_id) AS qt_de_musicas_ouvidas,
  ROUND(SUM(ca.duracao_segundos) / 60, 2) AS total_minutos
FROM SpotifyClone.historicos AS h

INNER JOIN SpotifyClone.usuarios AS us
ON h.usuario_id = us.usuario_id

INNER JOIN SpotifyClone.cancoes AS ca
ON h.cancao_id = ca.cancao_id
GROUP BY us.nome
ORDER BY us.nome;
