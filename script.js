/* =========================================================
   EVERYTHING SALY | EDITABLE SITE SETTINGS
   1. Replace the WhatsApp number with country code, digits only.
      Example: Nigeria +234 815 247 0146 becomes "2348152470146".
   2. Edit product names, descriptions, categories and image paths
      in PRODUCTS below. All images currently live in /assets/.
   3. Prices are intentionally not invented. The site invites
      customers to ask for price and availability on WhatsApp.
========================================================= */

const SITE_SETTINGS = {
  brandName: "Everything Saly",
  whatsappNumber: "2348152470146",
  defaultMessage: "Hello Everything Saly, I saw your website and would like to make an enquiry.",
  locationText: "Abuja / Kano / Zaria"
};

/* Category keys: fashion, shoes, accessories, lifestyle, fragrance */
const PRODUCTS = [
  { name: "Ayatul Kursi Bracelet", category: "accessories", label: "ACCESSORIES", image: "assets/ayatul_kursi_bracelet-01.jpg", description: "A thoughtful bracelet accessory. Ask us about the available design and current price." },
  { name: "Ayatul Kursi Bracelet", category: "accessories", label: "ACCESSORIES", image: "assets/ayatul_kursi_bracelet-02.jpg", description: "Explore this bracelet style and message us to confirm availability." },
  { name: "Be Tres Mora Perfume", category: "fragrance", label: "FRAGRANCE", image: "assets/be_tres_mora_perfume.jpg", description: "Ask us about this fragrance, availability and current price." },
  { name: "Cocoa Sunset Perfume", category: "fragrance", label: "FRAGRANCE", image: "assets/cocoa_sunset_perfume-01.jpg", description: "A fragrance option from the Everything Saly collection. Enquire for details." },
  { name: "Elysia Perfume", category: "fragrance", label: "FRAGRANCE", image: "assets/elysia_perfume.jpg", description: "Ask about this perfume and current availability." },
  { name: "Cover Shoes", category: "shoes", label: "FOOTWEAR", image: "assets/cover_shoes-01.jpg", description: "A footwear option for your rotation. Ask about sizes and availability." },
  { name: "Cover Shoes", category: "shoes", label: "FOOTWEAR", image: "assets/cover_shoes-04.jpg", description: "Message us to check available sizes and current price." },
  { name: "Open Shoes", category: "shoes", label: "FOOTWEAR", image: "assets/open_shoes-01.jpg", description: "Discover this open-shoe style. Contact us to ask about sizes and pricing." },
  { name: "Open Shoes", category: "shoes", label: "FOOTWEAR", image: "assets/open_shoes-02.jpg", description: "Ask about the available options for this footwear style." },
  { name: "Sneakers", category: "shoes", label: "FOOTWEAR", image: "assets/sneakers-01.jpg", description: "Everyday sneakers. Ask us about available sizes and current price." },
  { name: "Sneakers", category: "shoes", label: "FOOTWEAR", image: "assets/sneakers-05.jpg", description: "Message us to check this sneaker style and availability." },
  { name: "Polo Shirt", category: "fashion", label: "CLOTHING", image: "assets/polo-02.jpg", description: "A versatile polo option. Ask about available colours, sizes and price." },
  { name: "Polo Shirt", category: "fashion", label: "CLOTHING", image: "assets/polo-04.jpg", description: "Contact us to confirm options and availability." },
  { name: "Shirt", category: "fashion", label: "CLOTHING", image: "assets/shirts-01.jpg", description: "A wardrobe staple. Enquire about available sizes and current price." },
  { name: "Shirt", category: "fashion", label: "CLOTHING", image: "assets/shirts-02.jpg", description: "Ask us for sizing and availability details." },
  { name: "Up & Down Male Wear", category: "fashion", label: "CLOTHING", image: "assets/up_down_malewear-01.jpg", description: "A coordinated male-wear option. Message us for sizes, colours and pricing." },
  { name: "Up & Down Male Wear", category: "fashion", label: "CLOTHING", image: "assets/up_down_malewear-04.jpg", description: "Ask about the available styles and sizes." },
  { name: "Veils", category: "fashion", label: "STYLE", image: "assets/veils-05.jpg", description: "A style accessory. Contact us to confirm available options and price." },
  { name: "Flask", category: "lifestyle", label: "LIFESTYLE", image: "assets/flask-01.jpg", description: "A practical everyday flask. Ask about current availability and price." },
  { name: "Flask", category: "lifestyle", label: "LIFESTYLE", image: "assets/flask-03.jpg", description: "Message us to check details and availability." },
  { name: "Stanley Cup", category: "lifestyle", label: "LIFESTYLE", image: "assets/stanley_cup-01.jpg", description: "A lifestyle drinkware option. Ask us about availability and current price." },
  { name: "Stanley Cup", category: "lifestyle", label: "LIFESTYLE", image: "assets/stanley_cup-03.jpg", description: "Contact us to enquire about this cup and available options." },
  { name: "Water Bottle", category: "lifestyle", label: "LIFESTYLE", image: "assets/water_bottle-01.jpg", description: "A useful everyday essential. Ask us for details and current pricing." },
  { name: "Water Bottle", category: "lifestyle", label: "LIFESTYLE", image: "assets/water_bottle-02.jpg", description: "Message us to confirm availability." },
  { name: "Van Cleef Bracelet · Gold", category: "accessories", label: "ACCESSORIES", image: "assets/van_cleef_braclet_gold.jpg", description: "A gold-tone bracelet style. Ask about availability and current price." },
  { name: "Van Cleef Bracelet · Pink", category: "accessories", label: "ACCESSORIES", image: "assets/van_cleef_braclet_pink.jpg", description: "A pink bracelet style. Contact us to check availability." },
  { name: "Van Cleef Bracelet · Purple", category: "accessories", label: "ACCESSORIES", image: "assets/van_cleef_braclet_purple.jpg", description: "A purple bracelet style. Ask us about current pricing." }
];

const productGrid = document.getElementById("productGrid");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const modal = document.getElementById("productModal");
const toast = document.getElementById("toast");
let toastTimer;

function whatsappUrl(message) {
  return `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function setWhatsAppLinks() {
  const mainLink = document.getElementById("mainWhatsApp");
  mainLink.href = whatsappUrl(SITE_SETTINGS.defaultMessage);
  mainLink.target = "_blank";
  mainLink.rel = "noopener";
  document.querySelectorAll("[data-wa-message]").forEach(link => {
    link.href = whatsappUrl(link.dataset.waMessage);
    link.target = "_blank";
    link.rel = "noopener";
  });
}

function renderProducts(filter = "all") {
  const visibleProducts = PRODUCTS.filter(product => filter === "all" || product.category === filter);
  productGrid.innerHTML = visibleProducts.map((product, index) => `
    <article class="product-card" tabindex="0" role="button" aria-label="View ${product.name} details" data-product-index="${PRODUCTS.indexOf(product)}" style="animation-delay:${Math.min(index * 35, 280)}ms">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" data-product-image>
        <span class="product-tag">${product.label}</span>
        <span class="product-open" aria-hidden="true">↗</span>
      </div>
      <div class="product-meta">
        <div><h3>${product.name}</h3><div class="product-category">${categoryName(product.category)}</div></div>
        <span>ASK FOR PRICE</span>
      </div>
    </article>
  `).join("");

  productGrid.querySelectorAll("[data-product-image]").forEach(img => {
    img.addEventListener("error", () => {
      img.closest(".product-card").style.display = "none";
      console.warn("Missing product image:", img.getAttribute("src"));
    }, { once: true });
  });

  productGrid.querySelectorAll(".product-card").forEach(card => {
    const open = () => openProduct(Number(card.dataset.productIndex));
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function categoryName(category) {
  return ({
    fashion: "Clothing & style",
    shoes: "Footwear",
    accessories: "Accessories",
    lifestyle: "Lifestyle essentials",
    fragrance: "Fragrance"
  })[category] || category;
}

function openProduct(index) {
  const product = PRODUCTS[index];
  if (!product) return;
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalImage").alt = product.name;
  document.getElementById("modalCategory").textContent = product.label;
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalDescription").textContent = product.description;
  document.getElementById("modalWhatsApp").href = whatsappUrl(
    `Hello ${SITE_SETTINGS.brandName}, I'm interested in ${product.name}. Please share the price and availability.`
  );
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    renderProducts(button.dataset.filter);
  });
});

document.querySelectorAll("[data-filter-link]").forEach(link => {
  link.addEventListener("click", () => {
    const filter = link.dataset.filterLink;
    const button = filterButtons.find(item => item.dataset.filter === filter);
    if (button) {
      filterButtons.forEach(item => item.classList.toggle("active", item === button));
      renderProducts(filter);
    }
  });
});

document.querySelectorAll("[data-close-modal]").forEach(element => element.addEventListener("click", closeModal));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 })
  : null;

document.querySelectorAll(".reveal").forEach(element => {
  if (revealObserver) revealObserver.observe(element);
  else element.classList.add("visible");
});

document.getElementById("year").textContent = new Date().getFullYear();
setWhatsAppLinks();
renderProducts();
