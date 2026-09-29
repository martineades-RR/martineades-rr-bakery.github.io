const IMAGES = {
  strawberryCake: "https://images.unsplash.com/photo-1679654596809-db252e8e22db?auto=format&fit=crop&fm=jpg&q=80&w=1000",
  cookies: "https://images.unsplash.com/photo-1694588915262-30d22a36b379?auto=format&fit=crop&fm=jpg&q=80&w=1000",
  berryCake: "https://images.unsplash.com/photo-1669926139814-ba5d76268905?auto=format&fit=crop&fm=jpg&q=80&w=1000",
  chocolateCookies: "https://images.unsplash.com/photo-1613563628001-aac5a5307153?auto=format&fit=crop&fm=jpg&q=80&w=1000",
  cupcakes: "https://images.unsplash.com/photo-1680580735621-4371027734eb?auto=format&fit=crop&fm=jpg&q=80&w=1000",
  macarons: "https://images.unsplash.com/photo-1741354125091-5d514b14540b?auto=format&fit=crop&fm=jpg&q=80&w=1000",
  donuts: "https://images.unsplash.com/photo-1741615312372-6c763ee1b95d?auto=format&fit=crop&fm=jpg&q=80&w=1000",
  cheesecake: "https://images.unsplash.com/photo-1724952727574-49fe24cd5dcc?auto=format&fit=crop&fm=jpg&q=80&w=1000",
  weddingCake: "https://images.unsplash.com/photo-1680090966824-eb9e8500bc2b?auto=format&fit=crop&fm=jpg&q=80&w=1000",
  fruitCheesecake: "https://images.unsplash.com/photo-1785769616216-631a53210b7d?auto=format&fit=crop&fm=jpg&q=80&w=1000",
  cupcakeBox: "https://images.unsplash.com/photo-1771016833998-358dc4cab681?auto=format&fit=crop&fm=jpg&q=80&w=1000",
  birthdayCake: "https://images.unsplash.com/photo-1694043325785-d841a964257f?auto=format&fit=crop&fm=jpg&q=80&w=1000",
  berryTart: "https://images.unsplash.com/photo-1653491887846-781545ef38da?auto=format&fit=crop&fm=jpg&q=80&w=1000"
};

const products = [
  // Celebration Cakes
  {id:1, name:"Strawberry Shortcake", category:"Celebration Cakes", price:42.00, image:IMAGES.strawberryCake, badge:"Best seller", desc:"Vanilla sponge, fresh strawberries and light whipped cream. 8-inch cake."},
  {id:2, name:"Classic Birthday Sprinkle Cake", category:"Celebration Cakes", price:44.00, image:IMAGES.birthdayCake, badge:"Birthday", desc:"Vanilla celebration cake with buttercream piping and colorful sprinkles."},
  {id:3, name:"Chocolate Celebration Cake", category:"Celebration Cakes", price:46.00, image:IMAGES.berryCake, badge:"Chocolate", desc:"Rich chocolate cake with chocolate buttercream and elegant finishing."},
  {id:4, name:"Red Velvet Cream Cheese Cake", category:"Celebration Cakes", price:48.00, image:IMAGES.strawberryCake, badge:"Signature", desc:"Velvety cocoa cake layered with tangy cream-cheese frosting."},
  {id:5, name:"Cookies & Cream Party Cake", category:"Celebration Cakes", price:49.00, image:IMAGES.cookies, badge:"Popular", desc:"Vanilla cake, cookie crumble filling and cookies-and-cream frosting."},
  {id:6, name:"Lemon Berry Celebration Cake", category:"Celebration Cakes", price:47.00, image:IMAGES.berryCake, badge:"Fresh", desc:"Bright lemon sponge with berry filling and vanilla buttercream."},
  {id:7, name:"Pink Vanilla Heart Cake", category:"Celebration Cakes", price:52.00, image:IMAGES.birthdayCake, badge:"Custom style", desc:"Heart-inspired celebration cake with smooth pastel buttercream."},
  {id:8, name:"Chocolate Strawberry Cake", category:"Celebration Cakes", price:54.00, image:IMAGES.strawberryCake, badge:"Premium", desc:"Chocolate layers, strawberry filling and glossy chocolate accents."},
  {id:9, name:"Funfetti Celebration Cake", category:"Celebration Cakes", price:45.00, image:IMAGES.birthdayCake, badge:"Party", desc:"Colorful vanilla funfetti sponge with classic vanilla frosting."},
  {id:10, name:"White Chocolate Raspberry Cake", category:"Celebration Cakes", price:55.00, image:IMAGES.berryCake, badge:"Signature", desc:"White chocolate cake with raspberry preserve and creamy frosting."},

  // Elegant Cakes
  {id:11, name:"Classic Floral Wedding Cake", category:"Elegant Cakes", price:129.00, image:IMAGES.weddingCake, badge:"Wedding", desc:"Two-tier white buttercream cake with delicate floral styling. Starting price."},
  {id:12, name:"Pearl Wedding Cake", category:"Elegant Cakes", price:145.00, image:IMAGES.weddingCake, badge:"Elegant", desc:"Two-tier celebration cake with pearl details and minimalist finish."},
  {id:13, name:"Garden Rose Cake", category:"Elegant Cakes", price:96.00, image:IMAGES.berryCake, badge:"Floral", desc:"Soft buttercream cake with garden-inspired floral decoration."},
  {id:14, name:"Minimalist Ivory Cake", category:"Elegant Cakes", price:78.00, image:IMAGES.weddingCake, badge:"Modern", desc:"Smooth ivory buttercream with clean lines and subtle gold details."},
  {id:15, name:"Berry Pavlova-Style Cake", category:"Elegant Cakes", price:62.00, image:IMAGES.berryCake, badge:"Fruit", desc:"Light celebration cake with whipped topping and fresh berry styling."},
  {id:16, name:"Anniversary Gold Cake", category:"Elegant Cakes", price:88.00, image:IMAGES.weddingCake, badge:"Anniversary", desc:"Elegant cake with gold-accent decoration, designed for milestone events."},

  // Cupcakes
  {id:17, name:"Vanilla Confetti Cupcake", category:"Cupcakes", price:4.25, image:IMAGES.cupcakes, badge:"Classic", desc:"Vanilla cupcake with whipped vanilla frosting and rainbow sprinkles."},
  {id:18, name:"Chocolate Fudge Cupcake", category:"Cupcakes", price:4.50, image:IMAGES.cupcakeBox, badge:"Chocolate", desc:"Chocolate cupcake topped with rich fudge buttercream."},
  {id:19, name:"Red Velvet Cupcake", category:"Cupcakes", price:4.50, image:IMAGES.cupcakeBox, badge:"Popular", desc:"Red velvet cupcake finished with cream-cheese frosting."},
  {id:20, name:"Strawberry Cream Cupcake", category:"Cupcakes", price:4.75, image:IMAGES.cupcakes, badge:"Fresh", desc:"Vanilla cupcake with strawberry cream and berry-inspired garnish."},
  {id:21, name:"Cookies & Cream Cupcake", category:"Cupcakes", price:4.75, image:IMAGES.cupcakeBox, badge:"Cookie", desc:"Chocolate cupcake with cookie crumble frosting."},
  {id:22, name:"Lemon Raspberry Cupcake", category:"Cupcakes", price:4.75, image:IMAGES.cupcakes, badge:"Bright", desc:"Lemon cupcake with raspberry filling and vanilla swirl."},
  {id:23, name:"Salted Caramel Cupcake", category:"Cupcakes", price:4.95, image:IMAGES.cupcakeBox, badge:"Premium", desc:"Vanilla cupcake with caramel center and salted caramel buttercream."},
  {id:24, name:"Assorted Cupcake Box — 6", category:"Cupcakes", price:23.99, image:IMAGES.cupcakeBox, badge:"Box of 6", desc:"Six assorted cupcakes selected from our most-loved flavors."},

  // Cookies
  {id:25, name:"Classic Chocolate Chip Cookie", category:"Cookies", price:4.49, image:IMAGES.cookies, badge:"Classic", desc:"Large bakery-style chocolate chip cookie with a soft center."},
  {id:26, name:"Double Chocolate Cookie", category:"Cookies", price:4.49, image:IMAGES.chocolateCookies, badge:"Chocolate", desc:"Rich cocoa cookie loaded with chocolate pieces."},
  {id:27, name:"Pink Sugar Cookie", category:"Cookies", price:4.49, image:IMAGES.cookies, badge:"Sweet", desc:"Soft sugar cookie with smooth pink vanilla frosting."},
  {id:28, name:"Cookies & Cream Cookie", category:"Cookies", price:4.75, image:IMAGES.chocolateCookies, badge:"Popular", desc:"Thick cookie packed with crushed chocolate sandwich cookies."},
  {id:29, name:"Salted Caramel Cookie", category:"Cookies", price:4.75, image:IMAGES.cookies, badge:"Caramel", desc:"Buttery cookie finished with caramel and a touch of sea salt."},
  {id:30, name:"Red Velvet White Chip Cookie", category:"Cookies", price:4.75, image:IMAGES.chocolateCookies, badge:"Signature", desc:"Red velvet cookie with creamy white chocolate-style chips."},
  {id:31, name:"Cookie Box — 6", category:"Cookies", price:22.99, image:IMAGES.cookies, badge:"Box of 6", desc:"Six large assorted bakery cookies in a gift-ready box."},
  {id:32, name:"Cookie Box — 12", category:"Cookies", price:42.99, image:IMAGES.cookies, badge:"Box of 12", desc:"Twelve assorted bakery cookies for parties, offices and celebrations."},

  // Brownies & Bars
  {id:33, name:"Fudge Brownie", category:"Brownies & Bars", price:4.95, image:IMAGES.chocolateCookies, badge:"Fudgy", desc:"Dense chocolate brownie with a soft center and rich cocoa flavor."},
  {id:34, name:"Salted Caramel Brownie", category:"Brownies & Bars", price:5.25, image:IMAGES.chocolateCookies, badge:"Caramel", desc:"Chocolate brownie layered with salted caramel drizzle."},
  {id:35, name:"Cookies & Cream Brownie", category:"Brownies & Bars", price:5.25, image:IMAGES.cookies, badge:"Cookie", desc:"Fudge brownie topped with cookie crumble and vanilla cream."},
  {id:36, name:"Raspberry Chocolate Brownie", category:"Brownies & Bars", price:5.50, image:IMAGES.berryCake, badge:"Berry", desc:"Chocolate brownie paired with raspberry flavor and chocolate finish."},
  {id:37, name:"Brownie Box — 6", category:"Brownies & Bars", price:27.00, image:IMAGES.chocolateCookies, badge:"Box of 6", desc:"Six generous brownie squares in assorted signature flavors."},
  {id:38, name:"Dessert Bar Party Box", category:"Brownies & Bars", price:49.00, image:IMAGES.cookies, badge:"Party box", desc:"A shareable assortment of brownies, cookie bars and sweet bites."},

  // Cheesecakes & Tarts
  {id:39, name:"Classic Berry Cheesecake Slice", category:"Cheesecakes & Tarts", price:7.50, image:IMAGES.cheesecake, badge:"Cheesecake", desc:"Creamy cheesecake slice with berry garnish and fruit sauce."},
  {id:40, name:"Strawberry Cheesecake", category:"Cheesecakes & Tarts", price:44.00, image:IMAGES.fruitCheesecake, badge:"Whole cake", desc:"Whole cheesecake topped with strawberries and a glossy berry finish."},
  {id:41, name:"Blueberry Cheesecake", category:"Cheesecakes & Tarts", price:44.00, image:IMAGES.cheesecake, badge:"Whole cake", desc:"Creamy cheesecake with blueberry topping and classic crumb crust."},
  {id:42, name:"Mixed Berry Tart", category:"Cheesecakes & Tarts", price:36.00, image:IMAGES.berryTart, badge:"Fresh fruit", desc:"Buttery tart shell filled with cream and topped with mixed berries."},
  {id:43, name:"Mini Fruit Tarts — 6", category:"Cheesecakes & Tarts", price:28.00, image:IMAGES.berryTart, badge:"Box of 6", desc:"Six petite tarts with pastry cream and seasonal fruit."},
  {id:44, name:"Cheesecake Dessert Box", category:"Cheesecakes & Tarts", price:32.00, image:IMAGES.cheesecake, badge:"Sampler", desc:"A sampler box with assorted cheesecake portions for sharing."},

  // Donuts & Treats
  {id:45, name:"Assorted Gourmet Donut", category:"Donuts & Treats", price:3.75, image:IMAGES.donuts, badge:"Single", desc:"One decorated gourmet donut selected from the daily assortment."},
  {id:46, name:"Donut Box — 6", category:"Donuts & Treats", price:19.99, image:IMAGES.donuts, badge:"Box of 6", desc:"Six assorted glazed and decorated donuts in a bakery box."},
  {id:47, name:"Donut Party Box — 12", category:"Donuts & Treats", price:36.00, image:IMAGES.donuts, badge:"Box of 12", desc:"A dozen colorful donuts for parties, meetings and celebrations."},
  {id:48, name:"French Macaron — Single", category:"Donuts & Treats", price:2.95, image:IMAGES.macarons, badge:"Macaron", desc:"Delicate French-style macaron in rotating seasonal flavors."},
  {id:49, name:"Macaron Box — 6", category:"Donuts & Treats", price:16.50, image:IMAGES.macarons, badge:"Box of 6", desc:"Six colorful macarons with assorted creamy fillings."},
  {id:50, name:"Macaron Gift Box — 12", category:"Donuts & Treats", price:31.00, image:IMAGES.macarons, badge:"Gift box", desc:"Twelve assorted macarons presented in a celebration-ready box."}
];

let activeCategory = "All";
let cart = [];
try { cart = JSON.parse(localStorage.getItem("martineadesCart") || "[]"); } catch (_) { cart = []; }

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const categoryButtons = [...document.querySelectorAll(".category-chip")];
const cartDrawer = document.getElementById("cartDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");

function money(value) { return `$${value.toFixed(2)}`; }

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  let filtered = products.filter(p => {
    const categoryOK = activeCategory === "All" || p.category === activeCategory;
    const queryOK = !query || `${p.name} ${p.category} ${p.desc}`.toLowerCase().includes(query);
    return categoryOK && queryOK;
  });

  const sort = sortSelect.value;
  if (sort === "low") filtered.sort((a,b) => a.price - b.price);
  if (sort === "high") filtered.sort((a,b) => b.price - a.price);
  if (sort === "name") filtered.sort((a,b) => a.name.localeCompare(b.name));

  if (!filtered.length) {
    productGrid.innerHTML = `<div class="empty-state"><h3>No sweets found</h3><p>Try another category or search term.</p></div>`;
    return;
  }

  productGrid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img loading="lazy" src="${p.image}" alt="${p.name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='assets/images/product-fallback.jpg';this.classList.add('fallback-image')" />
        <span class="product-badge">${p.badge}</span>
      </div>
      <div class="product-body">
        <div class="product-meta">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <p class="product-desc">${p.desc}</p>
        <div class="product-bottom">
          <span class="product-price">${money(p.price)}</span>
          <button class="add-button" onclick="addToCart(${p.id})">Add to cart</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty += 1;
  else cart.push({...product, qty: 1});
  updateCart();
  showToast(`${product.name} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function updateCart() {
  try { localStorage.setItem("martineadesCart", JSON.stringify(cart)); } catch (_) {}
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = money(cart.reduce((sum, item) => sum + item.price * item.qty, 0));
  const wrap = document.getElementById("cartItems");
  if (!cart.length) {
    wrap.innerHTML = `<div class="empty-state"><strong>Your cart is sweetly empty.</strong><p>Add something from the bakery menu.</p></div>`;
    return;
  }
  wrap.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='assets/images/product-fallback.jpg'" />
      <div><strong>${item.name}</strong><small>${item.qty} × ${money(item.price)}</small></div>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    </div>
  `).join("");
}

function openCart() {
  cartDrawer.classList.add("open");
  drawerOverlay.classList.add("show");
  cartDrawer.setAttribute("aria-hidden", "false");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  drawerOverlay.classList.remove("show");
  cartDrawer.setAttribute("aria-hidden", "true");
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

categoryButtons.forEach(btn => btn.addEventListener("click", () => {
  activeCategory = btn.dataset.category;
  categoryButtons.forEach(b => b.classList.toggle("active", b === btn));
  renderProducts();
}));
searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);
document.getElementById("cartButton").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
drawerOverlay.addEventListener("click", closeCart);

renderProducts();
updateCart();
