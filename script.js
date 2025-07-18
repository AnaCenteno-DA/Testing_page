
const products = [
  {
    id: 1,
    name: "Gold Pendant",
    price: 120,
    image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Pearl Choker",
    price: 95,
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Diamond Necklace",
    price: 300,
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Rose Gold Heart",
    price: 150,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Minimalist Silver",
    price: 80,
    image: "https://images.unsplash.com/photo-1685970731571-72ede0cb26ea?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    name: "Crystal Charm",
    price: 110,
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    name: "Layered Gold Chain",
    price: 130,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    name: "Vintage Locket",
    price: 145,
    image: "https://images.unsplash.com/photo-1685970731194-e27b477e87ba?auto=format&fit=crop&w=400&q=80"
  }
];



let cart = [];

function renderProducts() {
  const grid = document.getElementById('product-grid');
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  document.getElementById('cart-count').textContent = cart.length;
  updateCartModal();
}

function updateCartModal() {
  const list = document.getElementById('cart-items');
  list.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    list.appendChild(li);
  });
}

document.getElementById('cart-btn').onclick = () => {
  document.getElementById('cart-modal').style.display = 'block';
};

document.getElementById('close-cart').onclick = () => {
  document.getElementById('cart-modal').style.display = 'none';
};

document.getElementById('checkout-btn').onclick = () => {
  window.location.href = "checkout.html";
};

renderProducts();