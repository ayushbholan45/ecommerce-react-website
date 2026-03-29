const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    description: "Premium sound quality with 30-hour battery life and active noise cancellation."
  },
  {
    id: 2,
    name: "Running Sneakers",
    price: 59.99,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    rating: 4.3,
    reviews: 95,
    inStock: true,
    description: "Lightweight and breathable sneakers perfect for daily runs and casual wear."
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
    rating: 4.7,
    reviews: 210,
    inStock: true,
    description: "Genuine leather bag with multiple compartments and adjustable strap."
  },
  {
    id: 4,
    name: "Smartwatch Pro",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    rating: 4.6,
    reviews: 342,
    inStock: false,
    description: "Track fitness, receive notifications, and monitor health metrics on the go."
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    price: 34.99,
    category: "Home & Office",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
    rating: 4.2,
    reviews: 67,
    inStock: true,
    description: "Adjustable LED lamp with 3 color temperatures and USB charging port."
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 29.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1571945192246-4fcee13c27b1?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.4,
    reviews: 183,
    inStock: true,
    description: "Non-slip, eco-friendly mat with alignment lines and carrying strap."
  },
  {
    id: 7,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    rating: 4.8,
    reviews: 412,
    inStock: true,
    description: "Keeps drinks cold 24hrs or hot 12hrs. BPA-free with leak-proof lid."
  },
  {
    id: 8,
    name: "Polarized Sunglasses",
    price: 39.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    rating: 4.1,
    reviews: 54,
    inStock: true,
    description: "UV400 protection with lightweight frame, ideal for outdoor activities."
  }
]

export function getProducts(){
    return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}