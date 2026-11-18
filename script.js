/* ======== NOTE&CO — Script ======== */

const products = [
  // --- Bút viết ---
  {
    id: 1,
    name: "Bút gel Sarasa Clip 0.5mm",
    brand: "ZEBRA",
    category: "Bút viết",
    price: 32000,
    unit: "/ cây",
    tag: "Bán chạy",
    color: "visual-blue",
    image:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Bộ bút highlight Mildliner",
    brand: "ZEBRA",
    category: "Bút viết",
    price: 125000,
    unit: "/ bộ 5",
    tag: "Được yêu thích",
    color: "visual-green",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 9,
    name: "Bút bi Uni Jetstream 0.7mm",
    brand: "UNI",
    category: "Bút viết",
    price: 45000,
    unit: "/ cây",
    tag: "Bán chạy",
    color: "visual-peach",
    image:
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 10,
    name: "Bút máy Lamy Safari",
    brand: "LAMY",
    category: "Bút viết",
    price: 890000,
    unit: "/ cây",
    tag: "Premium",
    color: "visual-purple",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 11,
    name: "Bút lông bảng Pilot",
    brand: "PILOT",
    category: "Bút viết",
    price: 28000,
    unit: "/ cây",
    tag: "",
    color: "visual-blue",
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
  },

  // --- Giấy & sổ ---
  {
    id: 2,
    name: "Sổ tay Paperways A5",
    brand: "PAPERWAYS",
    category: "Giấy & sổ",
    price: 89000,
    unit: "/ quyển",
    tag: "Mới về",
    color: "visual-pink",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Giấy note vuông Pastel",
    brand: "NOTE&CO",
    category: "Giấy & sổ",
    price: 24000,
    unit: "/ xấp",
    tag: "",
    color: "visual-yellow",
    image:
      "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 12,
    name: "Sổ Moleskine Classic Large",
    brand: "MOLESKINE",
    category: "Giấy & sổ",
    price: 520000,
    unit: "/ quyển",
    tag: "Premium",
    color: "visual-green",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 13,
    name: "Giấy in A4 Double A 80gsm",
    brand: "DOUBLE A",
    category: "Giấy & sổ",
    price: 85000,
    unit: "/ ream",
    tag: "Giá tốt",
    color: "visual-white",
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2uj38?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 14,
    name: "Sổ Bullet Journal chấm bi",
    brand: "LEUCHTTURM",
    category: "Giấy & sổ",
    price: 380000,
    unit: "/ quyển",
    tag: "Mới về",
    color: "visual-peach",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=700&q=80",
  },

  // --- Dụng cụ học tập ---
  {
    id: 5,
    name: "Thước kẻ trong 20cm",
    brand: "THIÊN LONG",
    category: "Dụng cụ học tập",
    price: 9000,
    unit: "/ cây",
    tag: "Giá tốt",
    color: "visual-purple",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 15,
    name: "Compa học sinh inox",
    brand: "THIÊN LONG",
    category: "Dụng cụ học tập",
    price: 35000,
    unit: "/ chiếc",
    tag: "",
    color: "visual-blue",
    image:
      "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 16,
    name: "Hộp bút đa năng Grid",
    brand: "NOTE&CO",
    category: "Dụng cụ học tập",
    price: 65000,
    unit: "/ chiếc",
    tag: "Mới về",
    color: "visual-pink",
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 17,
    name: "Bộ ê-ke thước đo góc",
    brand: "MAPED",
    category: "Dụng cụ học tập",
    price: 42000,
    unit: "/ bộ",
    tag: "",
    color: "visual-yellow",
    image:
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=700&q=80",
  },

  // --- Dụng cụ văn phòng ---
  {
    id: 6,
    name: "Bộ kẹp giấy Color Clip",
    brand: "NOTE&CO",
    category: "Dụng cụ văn phòng",
    price: 35000,
    unit: "/ hộp",
    tag: "",
    color: "visual-peach",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "Bìa hồ sơ A4 Pastel",
    brand: "PLUS",
    category: "Dụng cụ văn phòng",
    price: 15000,
    unit: "/ chiếc",
    tag: "",
    color: "visual-white",
    image:
      "https://images.unsplash.com/photo-1455885666463-2f1daccb2d1c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 18,
    name: "Băng keo washi tape Pastel",
    brand: "MT",
    category: "Dụng cụ văn phòng",
    price: 55000,
    unit: "/ cuộn",
    tag: "Được yêu thích",
    color: "visual-yellow",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 19,
    name: "Kéo văn phòng Scotch",
    brand: "3M",
    category: "Dụng cụ văn phòng",
    price: 48000,
    unit: "/ chiếc",
    tag: "",
    color: "visual-green",
    image:
      "https://images.unsplash.com/photo-1581783898382-80f499f07e44?auto=format&fit=crop&w=700&q=80",
  },

  // --- Mỹ thuật ---
  {
    id: 7,
    name: "Bút màu nước 12 màu",
    brand: "MONT MARTE",
    category: "Mỹ thuật",
    price: 149000,
    unit: "/ bộ",
    tag: "Mới về",
    color: "visual-blue",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 20,
    name: "Bảng palette pha màu",
    brand: "NOTE&CO",
    category: "Mỹ thuật",
    price: 28000,
    unit: "/ chiếc",
    tag: "",
    color: "visual-white",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 21,
    name: "Bộ chì màu Prismacolor 24",
    brand: "PRISMACOLOR",
    category: "Mỹ thuật",
    price: 680000,
    unit: "/ bộ",
    tag: "Premium",
    color: "visual-peach",
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 22,
    name: "Sketchbook A4 160gsm",
    brand: "CANSON",
    category: "Mỹ thuật",
    price: 120000,
    unit: "/ quyển",
    tag: "",
    color: "visual-pink",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80",
  },
];

/* ======== Collections data ======== */
const collections = [
  {
    id: "back-to-school",
    name: "Back to School 2026",
    desc: "Những món cần thiết cho năm học mới — được chọn kỹ, giá vừa túi.",
    productIds: [1, 2, 3, 5, 15, 16],
    color: "#e0edf3",
    accent: "#4a8db7",
  },
  {
    id: "minimal-desk",
    name: "Minimal Desk Setup",
    desc: "Gọn gàng, tối giản — bàn làm việc đẹp bắt đầu từ những món nhỏ.",
    productIds: [4, 6, 8, 12, 18, 19],
    color: "#e9e8dc",
    accent: "#7c8a6e",
  },
  {
    id: "art-studio",
    name: "Art Studio Essentials",
    desc: "Dụng cụ mỹ thuật cho người yêu sáng tạo — từ chì màu đến sketchbook.",
    productIds: [7, 20, 21, 22, 3, 10],
    color: "#f5e4e0",
    accent: "#c97856",
  },
];

/* ======== State ======== */
let state = { filter: "Tất cả", search: "", sort: "featured", cart: [] };
let currentUser = JSON.parse(localStorage.getItem("notecoUser") || "null");

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const formatPrice = (n) => new Intl.NumberFormat("vi-VN").format(n) + "đ";

/* ======== Products ======== */
function renderProducts() {
  const q = state.search.trim().toLowerCase();
  let list = products.filter(
    (p) =>
      (state.filter === "Tất cả" || p.category === state.filter) &&
      (!q || `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q)),
  );
  if (state.sort === "priceAsc") list.sort((a, b) => a.price - b.price);
  if (state.sort === "priceDesc") list.sort((a, b) => b.price - a.price);
  const grid = $("#productsGrid");
  grid.innerHTML = list
    .map(
      (p, i) => `
    <article class="product-card" style="animation-delay:${i * 60}ms">
      <div class="product-visual ${p.color}">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
        <button class="wish-btn" aria-label="Thêm ${p.name} vào yêu thích">
          <svg class="icon"><use href="#i-heart"/></svg>
        </button>
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-info">
        <p class="product-brand">${p.brand}</p>
        <h3 class="product-name" title="${p.name}">${p.name}</h3>
        <div class="product-meta">
          <div>
            <span class="product-price">${formatPrice(p.price)}</span>
            <span class="product-unit"> ${p.unit}</span>
          </div>
          <button class="add-btn" data-add="${p.id}" aria-label="Thêm ${p.name} vào giỏ">
            <svg class="icon"><use href="#i-bag"/></svg>
          </button>
        </div>
      </div>
    </article>
  `,
    )
    .join("");
  $("#emptyState").classList.toggle("is-visible", list.length === 0);
  grid.style.display = list.length ? "grid" : "none";
}

/* ======== Cart ======== */
function renderCart() {
  const count = state.cart.reduce((n, i) => n + i.qty, 0);
  $("#cartCount").textContent = count;
  $("#drawerCount").textContent = count;
  $("#cartItems").innerHTML = state.cart
    .map(
      (item) => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}"/>
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p>${item.brand} · ${formatPrice(item.price)}</p>
        <div class="qty-control">
          <button data-minus="${item.id}">−</button>
          <span>${item.qty}</span>
          <button data-plus="${item.id}">+</button>
        </div>
      </div>
      <strong class="cart-item-price">${formatPrice(item.price * item.qty)}</strong>
    </div>
  `,
    )
    .join("");
  const empty = state.cart.length === 0;
  $("#cartEmpty").classList.toggle("is-visible", empty);
  $("#cartSummary").style.display = empty ? "none" : "block";
  $("#cartItems").style.display = empty ? "none" : "block";
  $("#subtotal").textContent = formatPrice(
    state.cart.reduce((n, i) => n + i.price * i.qty, 0),
  );
}

function openCart() {
  renderCart();
  $("#cartDrawer").classList.add("is-open");
  $("#drawerOverlay").classList.add("is-open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  $("#cartDrawer").classList.remove("is-open");
  $("#drawerOverlay").classList.remove("is-open");
  document.body.style.overflow = "";
}

function toast(text, type = "success") {
  const t = $("#toast");
  t.className = "toast is-visible" + (type === "error" ? " toast--error" : "");
  $("#toastText").textContent = text;
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => t.classList.remove("is-visible"), 2500);
}

function addToCart(id) {
  const p = products.find((x) => x.id === id);
  const found = state.cart.find((x) => x.id === id);
  if (found) found.qty++;
  else state.cart.push({ ...p, qty: 1 });
  renderCart();
  toast(`${p.name} đã được thêm vào giỏ`);
}

/* ======== Quick View ======== */
function openQuick(id) {
  const p = products.find((x) => x.id === id);
  $("#quickBrand").textContent = p.brand;
  $("#quickName").textContent = p.name;
  $("#quickPrice").textContent = formatPrice(p.price) + " " + p.unit;
  $("#quickUnit").textContent = p.unit.replace("/ ", "");
  $("#quickImage").style.backgroundImage = `url(${p.image})`;
  $("#quickImage").className = `quick-image ${p.color}`;
  $("#quickAdd").dataset.addQuick = p.id;
  $("#quickView").classList.add("is-open");
  $("#quickOverlay").classList.add("is-open");
}
function closeQuick() {
  $("#quickView").classList.remove("is-open");
  $("#quickOverlay").classList.remove("is-open");
}

/* ======== Auth Modal ======== */
function openAuth(tab = "login") {
  const modal = $("#authModal");
  modal.classList.add("is-open");
  $("#authOverlay").classList.add("is-open");
  document.body.style.overflow = "hidden";
  switchAuthTab(tab);
}
function closeAuth() {
  $("#authModal").classList.remove("is-open");
  $("#authOverlay").classList.remove("is-open");
  document.body.style.overflow = "";
  // Clear form
  $$("#authModal input").forEach((i) => (i.value = ""));
  $$("#authModal .form-error").forEach((e) => (e.textContent = ""));
}
function switchAuthTab(tab) {
  $$(".auth-tab").forEach((t) =>
    t.classList.toggle("is-active", t.dataset.tab === tab),
  );
  $$(".auth-form").forEach((f) =>
    f.classList.toggle("is-active", f.id === tab + "Form"),
  );
}

function handleLogin(e) {
  e.preventDefault();
  const email = $("#loginEmail").value.trim();
  const pass = $("#loginPassword").value;
  const errEl = $("#loginError");
  if (!email || !pass) {
    errEl.textContent = "Vui lòng nhập đầy đủ thông tin.";
    return;
  }
  // Check localStorage users
  const users = JSON.parse(localStorage.getItem("notecoUsers") || "[]");
  const user = users.find((u) => u.email === email);
  if (!user || user.password !== pass) {
    errEl.textContent = "Email hoặc mật khẩu không đúng.";
    return;
  }
  currentUser = { name: user.name, email: user.email };
  localStorage.setItem("notecoUser", JSON.stringify(currentUser));
  updateAuthUI();
  closeAuth();
  toast(`Chào mừng trở lại, ${currentUser.name}! 👋`);
}

function handleRegister(e) {
  e.preventDefault();
  const name = $("#regName").value.trim();
  const email = $("#regEmail").value.trim();
  const pass = $("#regPassword").value;
  const pass2 = $("#regPassword2").value;
  const errEl = $("#regError");
  if (!name || !email || !pass || !pass2) {
    errEl.textContent = "Vui lòng nhập đầy đủ thông tin.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errEl.textContent = "Email không hợp lệ.";
    return;
  }
  if (pass.length < 6) {
    errEl.textContent = "Mật khẩu tối thiểu 6 ký tự.";
    return;
  }
  if (pass !== pass2) {
    errEl.textContent = "Mật khẩu xác nhận không khớp.";
    return;
  }
  const users = JSON.parse(localStorage.getItem("notecoUsers") || "[]");
  if (users.find((u) => u.email === email)) {
    errEl.textContent = "Email đã được sử dụng.";
    return;
  }
  users.push({ name, email, password: pass });
  localStorage.setItem("notecoUsers", JSON.stringify(users));
  currentUser = { name, email };
  localStorage.setItem("notecoUser", JSON.stringify(currentUser));
  updateAuthUI();
  closeAuth();
  toast(`Đăng ký thành công! Chào ${name} 🎉`);
}

function logout() {
  currentUser = null;
  localStorage.removeItem("notecoUser");
  updateAuthUI();
  closeUserMenu();
  toast("Đã đăng xuất thành công");
}

function updateAuthUI() {
  const btn = $("#accountBtn");
  if (currentUser) {
    btn.innerHTML = `<span class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</span><span>${currentUser.name}</span>`;
    btn.classList.add("logged-in");
    // Update user menu
    const menuAvatar = $("#menuAvatar");
    if (menuAvatar)
      menuAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
    const menuName = $("#menuName");
    if (menuName) menuName.textContent = currentUser.name;
    const menuEmail = $("#menuEmail");
    if (menuEmail) menuEmail.textContent = currentUser.email;
  } else {
    btn.innerHTML = `<svg class="icon"><use href="#i-user"/></svg><span>Tài khoản</span>`;
    btn.classList.remove("logged-in");
  }
}

/* ======== User menu ======== */
function openUserMenu() {
  const menu = $("#userMenu");
  menu.classList.toggle("is-open");
}
function closeUserMenu() {
  $("#userMenu").classList.remove("is-open");
}

/* ======== Collections modal ======== */
function openCollections() {
  const modal = $("#collectionsModal");
  renderCollections();
  modal.classList.add("is-open");
  $("#collectionsOverlay").classList.add("is-open");
  document.body.style.overflow = "hidden";
}
function closeCollections() {
  $("#collectionsModal").classList.remove("is-open");
  $("#collectionsOverlay").classList.remove("is-open");
  document.body.style.overflow = "";
}
function renderCollections() {
  const grid = $("#collectionsGrid");
  grid.innerHTML = collections
    .map((c) => {
      const prods = c.productIds
        .map((id) => products.find((p) => p.id === id))
        .filter(Boolean);
      return `
      <div class="collection-card" style="--col-bg:${c.color};--col-accent:${c.accent}">
        <div class="collection-header">
          <div>
            <h3>${c.name}</h3>
            <p>${c.desc}</p>
          </div>
          <span class="collection-count">${prods.length} sản phẩm</span>
        </div>
        <div class="collection-products">
          ${prods
            .slice(0, 4)
            .map(
              (p) => `
            <div class="collection-product-thumb">
              <img src="${p.image}" alt="${p.name}" loading="lazy" />
              <span>${p.name}</span>
            </div>
          `,
            )
            .join("")}
          ${prods.length > 4 ? `<div class="collection-product-thumb collection-more">+${prods.length - 4}</div>` : ""}
        </div>
        <button class="btn btn--outline collection-browse" data-collection="${c.id}">Xem bộ sưu tập <svg class="icon"><use href="#i-arrow"/></svg></button>
      </div>
    `;
    })
    .join("");
}

function browseCollection(collectionId) {
  const col = collections.find((c) => c.id === collectionId);
  if (!col) return;
  closeCollections();
  state.filter = "Tất cả";
  state.search = "";
  $("#searchInput").value = "";
  $$(".filter-chip").forEach((x) =>
    x.classList.toggle("is-active", x.dataset.filter === "Tất cả"),
  );
  // Temporarily show only collection products
  const grid = $("#productsGrid");
  const list = col.productIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);
  grid.innerHTML = list
    .map(
      (p, i) => `
    <article class="product-card" style="animation-delay:${i * 60}ms">
      <div class="product-visual ${p.color}">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
        <button class="wish-btn" aria-label="Thêm ${p.name} vào yêu thích">
          <svg class="icon"><use href="#i-heart"/></svg>
        </button>
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-info">
        <p class="product-brand">${p.brand}</p>
        <h3 class="product-name" title="${p.name}">${p.name}</h3>
        <div class="product-meta">
          <div>
            <span class="product-price">${formatPrice(p.price)}</span>
            <span class="product-unit"> ${p.unit}</span>
          </div>
          <button class="add-btn" data-add="${p.id}" aria-label="Thêm ${p.name} vào giỏ">
            <svg class="icon"><use href="#i-bag"/></svg>
          </button>
        </div>
      </div>
    </article>
  `,
    )
    .join("");
  grid.style.display = "grid";
  $("#emptyState").classList.remove("is-visible");
  // Update heading
  const heading = document.querySelector(
    ".product-section .section-heading h2",
  );
  heading.innerHTML = `${col.name} <button class="btn btn--outline btn--small" id="clearCollection">Xem tất cả</button>`;
  document.getElementById("clearCollection").addEventListener("click", () => {
    heading.textContent = "Những món đang được chọn";
    renderProducts();
  });
  $("#products").scrollIntoView({ behavior: "smooth" });
}

/* ======== Events ======== */
document.addEventListener("click", (e) => {
  // Add to cart
  const add = e.target.closest("[data-add]");
  if (add) {
    addToCart(Number(add.dataset.add));
    return;
  }

  // Product card click -> quick view
  const card = e.target.closest(".product-card");
  if (card && !e.target.closest("button")) {
    openQuick(Number(card.querySelector("[data-add]").dataset.add));
    return;
  }

  // Quick view add
  const quickAdd = e.target.closest("[data-add-quick]");
  if (quickAdd) {
    addToCart(Number(quickAdd.dataset.addQuick));
    closeQuick();
    return;
  }

  // Cart qty
  const plus = e.target.closest("[data-plus]");
  const minus = e.target.closest("[data-minus]");
  if (plus || minus) {
    const id = Number((plus || minus).dataset[plus ? "plus" : "minus"]);
    const item = state.cart.find((x) => x.id === id);
    if (plus) item.qty++;
    else item.qty--;
    if (item.qty < 1) state.cart = state.cart.filter((x) => x.id !== id);
    renderCart();
    return;
  }

  // Category card click
  const cat = e.target.closest("[data-category]");
  if (cat) {
    state.filter = cat.dataset.category;
    $$(".filter-chip").forEach((x) =>
      x.classList.toggle("is-active", x.dataset.filter === state.filter),
    );
    renderProducts();
    $("#products").scrollIntoView({ behavior: "smooth" });
    return;
  }

  // Collection browse
  const colBrowse = e.target.closest("[data-collection]");
  if (colBrowse) {
    browseCollection(colBrowse.dataset.collection);
    return;
  }

  // Auth tabs
  const authTab =
    e.target.closest(".auth-tab") || e.target.closest(".auth-tab-link");
  if (authTab) {
    switchAuthTab(authTab.dataset.tab);
    return;
  }

  // Close user menu on outside click
  if (!e.target.closest("#accountBtn") && !e.target.closest("#userMenu")) {
    closeUserMenu();
  }
});

// Filter chips
$$(".filter-chip").forEach((b) =>
  b.addEventListener("click", () => {
    state.filter = b.dataset.filter;
    $$(".filter-chip").forEach((x) => x.classList.toggle("is-active", x === b));
    // Restore heading
    const heading = document.querySelector(
      ".product-section .section-heading h2",
    );
    heading.textContent = "Những món đang được chọn";
    renderProducts();
  }),
);

// Search
$("#searchInput").addEventListener("input", (e) => {
  state.search = e.target.value;
  renderProducts();
});
$("#searchBtn").addEventListener("click", () =>
  $("#products").scrollIntoView({ behavior: "smooth" }),
);
$("#sortSelect").addEventListener("change", (e) => {
  state.sort = e.target.value;
  renderProducts();
});
$("#clearSearch").addEventListener("click", () => {
  state.search = "";
  state.filter = "Tất cả";
  $("#searchInput").value = "";
  $$(".filter-chip").forEach((x) =>
    x.classList.toggle("is-active", x.dataset.filter === "Tất cả"),
  );
  renderProducts();
});

// Cart
$("#cartBtn").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#drawerOverlay").addEventListener("click", closeCart);
$("#shopNow").addEventListener("click", () => {
  closeCart();
  $("#products").scrollIntoView({ behavior: "smooth" });
});
$("#checkoutBtn").addEventListener("click", () =>
  toast("Demo: bước đặt hàng đang được mở rộng"),
);

// Quick view
$("#closeQuick").addEventListener("click", closeQuick);
$("#quickOverlay").addEventListener("click", closeQuick);

// Account
$("#accountBtn").addEventListener("click", () => {
  if (currentUser) {
    openUserMenu();
  } else {
    openAuth("login");
  }
});
$("#closeAuth").addEventListener("click", closeAuth);
$("#authOverlay").addEventListener("click", closeAuth);

// Auth forms
$("#loginForm").addEventListener("submit", handleLogin);
$("#registerForm").addEventListener("submit", handleRegister);

// User menu
document.addEventListener("click", (e) => {
  if (e.target.closest("#logoutBtn")) {
    logout();
  }
});

// Collections
$("#playBtn").addEventListener("click", openCollections);
$("#closeCollections").addEventListener("click", closeCollections);
$("#collectionsOverlay").addEventListener("click", closeCollections);

// Password toggle
$$(".toggle-pass").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.previousElementSibling;
    const isPass = input.type === "password";
    input.type = isPass ? "text" : "password";
    btn.textContent = isPass ? "Ẩn" : "Hiện";
  });
});

// Keyboard escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    closeQuick();
    closeAuth();
    closeCollections();
    closeUserMenu();
  }
});

/* ======== Scroll animations ======== */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);

document.addEventListener("DOMContentLoaded", () => {
  // Observe sections
  $$(
    ".category-strip, .product-section, .feature-banner, .trust-section, .footer",
  ).forEach((el) => {
    el.classList.add("fade-up");
    observer.observe(el);
  });
});

/* ======== Init ======== */
renderProducts();
renderCart();
updateAuthUI();
