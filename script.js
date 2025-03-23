$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".nav-links").toggleClass("active");
        $(".hamburger").toggleClass("active");
    });
});


$(document).ready(function () {
    if (window.location.pathname.includes("product.html")) {
        fetchProducts();
    }

    function fetchProducts() {
        $("#loader").show();  // Show loader before fetching data
        $("#product-list").hide(); // Hide products initially

        $.ajax({
            url: "https://fakestoreapi.com/products/",
            method: "GET",
            success: function (products) {
                let productHTML = "";
                products.forEach(product => {
                    productHTML += `
                        <div class="col-md-4 mb-4">
                            <div class="card h-100 shadow-sm">
                                <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height: 250px; object-fit: contain;">
                                <div class="card-body">
                                    <h5 class="card-title">${product.title.substring(0, 30)}...</h5>
                                    <p class="card-text">${product.description.substring(0, 100)}...</p>
                                    <h6 class="text-danger">$${product.price}</h6>
                                    <a href="#" class="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                    `;
                });

                $("#product-list").html(productHTML); // Add products to the page
                $("#loader").hide(); // Hide the loader
                $("#product-list").show(); // Show products
            },
            error: function () {
                $("#loader").html("<p class='text-danger'>Failed to load products.</p>"); // Show error message
            }
        });
    }
});
