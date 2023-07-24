const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems((document.getElementsByClassName('cart__items')[0]).innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const pushElementsOnScreen = async () => {
  const data = (await fetchProducts('computador')).results;
  data.forEach((item) => {
    const section = document.getElementsByClassName('items')[0];
    const { id: sku, title: name, thumbnail: image } = item;
    const itemData = { sku, name, image };
    section.appendChild(createProductItemElement(itemData));
  });
};

const addItemToCart = async (itemId) => {
  const data = await fetchItem(itemId);
  const { id: sku, title: name, price: salePrice } = data;
  const itemData = { sku, name, salePrice };
  const cartList = document.getElementsByClassName('cart__items')[0];
  cartList.appendChild(createCartItemElement(itemData));
};

const buttonsAddToCart = async () => {
  const items = [...document.getElementsByClassName('item')];
  items.forEach((item) => {
    item.lastChild.addEventListener('click', async () => {
      const id = getSkuFromProductItem(item);
      await addItemToCart(id);
      saveCartItems((document.getElementsByClassName('cart__items')[0]).innerHTML);
    });
  });
};

const giveAllOlderProducts = async () => {
  if (getSavedCartItems() !== null) {
    const oldCart = getSavedCartItems();
    const cart = document.getElementsByClassName('cart__items')[0];
    cart.innerHTML = oldCart;
    const array = [...cart.children];
    array.forEach((item) => item.addEventListener('click', cartItemClickListener));
  }
};

const toEmptyCart = () => {
  const button = document.getElementsByClassName('empty-cart')[0];
  button.addEventListener('click', () => {
    const cart = [...document.getElementsByClassName('cart__items')[0].children];
    cart.forEach((item) => item.remove());
  });
};

window.onload = async () => {
  await pushElementsOnScreen();
  await buttonsAddToCart();
  await giveAllOlderProducts();
  toEmptyCart();
};
