SELECT
	us.nome AS usuario,
  IF(MAX(YEAR(h.data_reproducao)) >= '2021', 'Usuário ativo', 'Usuário inativo') AS status_usuario
FROM SpotifyClone.historicos AS h
INNER JOIN SpotifyClone.usuarios AS us
ON h.usuario_id = us.usuario_id
GROUP BY usuario
ORDER BY usuario;
