// --- RAHMANIYASTORE INVENTORY DATABASE ---

// --- Analytics Dashboard ---
document.addEventListener("DOMContentLoaded", function() {
    const analytics = [
        { label: "Total Visitors", value: Math.floor(Math.random() * 1000) + 500 },
        { label: "Products Viewed", value: Math.floor(Math.random() * 2000) + 1000 },
        { label: "Orders via WhatsApp", value: Math.floor(Math.random() * 100) + 10 },
        { label: "Returning Customers", value: Math.floor(Math.random() * 300) + 50 }
    ];
    const dashboard = document.getElementById('analytics-dashboard');
    if (dashboard) {
        analytics.forEach(stat => {
            const statDiv = document.createElement('div');
            statDiv.className = 'analytics-stat';
            statDiv.innerHTML = `<h3>${stat.value}</h3><p>${stat.label}</p>`;
            dashboard.appendChild(statDiv);
        });
    }
});


const myProducts = [
    {
        name: "Premium Silk Saree",
        price: "₹3,500",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80",
        link: "Premium%20Silk%20Saree"
    },
    {
        name: "Cotton Formal Shirt",
        price: "₹850",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80",
        link: "Cotton%20Formal%20Shirt"
    },
    {
        name: "Kids Party Wear",
        price: "₹1,200",
        image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=500&q=80",
        link: "Kids%20Party%20Wear"
    },
    {
        name: "Floral Anarkali Suit",
        price: "₹2,100",
        image: "https://images.unsplash.com/photo-1583391733958-6c518018dc38?auto=format&fit=crop&w=500&q=80",
        link: "Floral%20Anarkali%20Suit"
    },
    {
        name: "Men's Linen Kurta",
        price: "₹1,450",
        image: "https://images.unsplash.com/photo-1564585222527-c2777a5bc6cb?auto=format&fit=crop&w=500&q=80",
        link: "Mens%20Linen%20Kurta"
    },
    {
        name: "Designer Lehenga",
        price: "₹5,500",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80",
        link: "Designer%20Lehenga"
    }
];

// --- DO NOT EDIT BELOW THIS LINE ---
// This code automatically builds your website using the data above

document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById('product-list');

    // Only run this if the product container actually exists on the page
    if (productContainer) {
        myProducts.forEach(product => {
            const card = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price">${product.price}</p>
                        <a href="https://wa.me/919876543210?text=Hello,%20I%20want%20to%20buy%20the%20${product.link}" target="_blank" class="btn-whatsapp">Order on WhatsApp</a>
                    </div>
                </div>
            `;
            productContainer.innerHTML += card;
        });
    }
});