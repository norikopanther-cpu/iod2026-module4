const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

let allProducts = [];

// Category icon helper
function getCategoryIcon(category) {
  switch (category) {
    case "men's clothing":
      return "bi-person";
    case "women's clothing":
      return "bi-person-hearts";
    case "jewelery":
      return "bi-gem";
    case "electronics":
      return "bi-phone";
    default:
      return "bi-box";
  }
}

// Display products
function displayProducts(products) {
  productList.innerHTML = "";

  if (products.length === 0) {
    productList.innerHTML = `
      <div class="col-12">
        <div class="alert alert-warning text-center">
          No products found.
        </div>
      </div>
    `;
    return;
  }

  products.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 col-xl-3 mb-4";

    col.innerHTML = `
      <div class="card product-card shadow-sm h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.title}</h5>

          <p class="mb-2">
            <span class="badge bg-primary category-badge">
              <i class="bi ${getCategoryIcon(product.category)}"></i>
              ${product.category}
            </span>
          </p>

          <div class="description-wrapper mb-3">
            <p class="card-text description-preview">${product.description}</p>
            <p class="card-text description-full">${product.description}</p>
          </div>

          <h6 class="mt-auto text-success fw-bold">$${product.price.toFixed(2)}</h6>
        </div>
      </div>
    `;

    productList.appendChild(col);
  });
}

// Populate category dropdown
function loadCategories(products) {
  categoryFilter.innerHTML = `<option value="all">All Categories</option>`;

  const categories = [...new Set(products.map((product) => product.category))];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// Filter + search + sort
function updateProducts() {
  let filteredProducts = [...allProducts];

  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  const searchText = searchInput.value.toLowerCase().trim();
  if (searchText !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText)
    );
  }

  const sortValue = sortSelect.value;

  if (sortValue === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortValue === "title-asc") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "title-desc") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  displayProducts(filteredProducts);
}

// Fetch products
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    allProducts = data;
    loadCategories(allProducts);
    displayProducts(allProducts);
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
    productList.innerHTML = `
      <div class="col-12">
        <div class="alert alert-danger text-center">
          Failed to load products.
        </div>
      </div>
    `;
  });

// Event listeners
categoryFilter.addEventListener("change", updateProducts);
searchInput.addEventListener("input", updateProducts);
sortSelect.addEventListener("change", updateProducts);