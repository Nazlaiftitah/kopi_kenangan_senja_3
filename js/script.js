// toggle class active
const navLinks = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// ketika hamburger menu diklik
hamburger.onclick = () => {
  navLinks.classList.toggle("active");
};

// klik di luar sidebar untuk menutup navbar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// Hapus item cart (untuk item yang sudah ada saat load)
document.querySelectorAll(".remove-item").forEach((btn) => {
  btn.onclick = function () {
    btn.parentElement.remove();
  };
});

// Tambah ke cart dari produk
document.querySelectorAll(".add-to-cart-btn").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const card = btn.closest(".product-card");
    const imgSrc = card.querySelector(".product-image img").src;
    const title = card.querySelector(".product-content h3").textContent;
    const price = card
      .querySelector(".product-price")
      .childNodes[0].textContent.trim();

    // Buat elemen cart baru
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${imgSrc}" alt="${title}" />
      <div class="item-detail">
        <h3>${title}</h3>
        <div class="item-price">${price}</div>
      </div>
      <i data-feather="trash-2" class="remove-item"></i>
    `;
    document.querySelector(".shopping-cart").appendChild(cartItem);
    feather.replace();

    // Event hapus item
    cartItem.querySelector(".remove-item").onclick = function () {
      cartItem.remove();
    };
  });

  // Tambah ke cart dari modal
  document
    .querySelectorAll("#item-detail-modal .add-to-cart-btn")
    .forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const modal = document.querySelector("#item-detail-modal");
        const imgSrc = modal.querySelector(".modal-content img").src;
        const title = modal.querySelector(".product-content h3").textContent;
        const price = modal
          .querySelector(".product-price")
          .childNodes[0].textContent.trim();

        // Buat elemen cart baru
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
        <img src="${imgSrc}" alt="${title}" />
        <div class="item-detail">
          <h3>${title}</h3>
          <div class="item-price">${price}</div>
        </div>
        <i data-feather="trash-2" class="remove-item"></i>
      `;
        document.querySelector(".shopping-cart").appendChild(cartItem);
        feather.replace();

        // Event hapus item
        cartItem.querySelector(".remove-item").onclick = function () {
          cartItem.remove();
        };

        // Tutup modal setelah tambah ke cart
        itemDetailModal.style.display = "none";
      });
    });
});
