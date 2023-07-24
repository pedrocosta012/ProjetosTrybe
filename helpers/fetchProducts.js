const fetchProducts = async (searchableItem) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${searchableItem}`;
  const data = (await fetch(url)).json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
