document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const productsList = document.getElementById("productsList").getElementsByTagName("li");

    searchInput.addEventListener("keyup", function(event) {
        const searchTerm = event.target.value.toLowerCase();
        Array.from(productsList).forEach(function(product) {
            const productName = product.textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
