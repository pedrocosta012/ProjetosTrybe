SELECT 
    ca.nome_cancao AS nome,
    COUNT(us.nome) AS reproducoes
FROM SpotifyClone.historicos AS h
INNER JOIN SpotifyClone.usuarios AS us
ON h.usuario_id = us.usuario_id
INNER JOIN SpotifyClone.cancoes AS ca
ON h.cancao_id = ca.cancao_id
WHERE us.plano_id IN (1 , 3)
GROUP BY ca.cancao_id
ORDER BY nome;
