// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.style.display === "flex";
    mobileMenu.style.display = isOpen ? "none" : "flex";
});

// SEARCH FUNCTION
function searchProducts() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        const name = product.querySelector("h3").innerText.toLowerCase();
        product.style.display = name.includes(input) ? "block" : "none";
    });
}

// FILTER FUNCTION
function filterProducts(category) {
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        const itemCategory = product.getAttribute("data-category");

        if (category === "all" || itemCategory === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}