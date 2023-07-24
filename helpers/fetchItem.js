const fetchItem = async (token) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${token}`;
  const data = await (await fetch(url)).json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
