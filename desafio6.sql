SELECT
	CONCAT(ROUND(MIN(p.valor_plano), 2), '.00') AS faturamento_minimo,
	CONCAT(ROUND(MAX(p.valor_plano), 2)) AS faturamento_maximo,
  CONCAT(ROUND(AVG(p.valor_plano), 2)) AS faturamento_medio,
  CONCAT(ROUND(SUM(p.valor_plano), 2)) AS faturamento_total
FROM SpotifyClone.usuarios AS us
INNER JOIN SpotifyClone.planos AS p
ON p.plano_id = us.plano_id;
