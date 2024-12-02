# ShoppyGlobe-E-commerce-App

ShoppyGlobe E-commerce Application:

ShoppyGlobe is a basic e-commerce application built using React, Redux, and React Router. It allows users to browse products, view product details, add products to a shopping cart, modify quantities, and remove items, all within a modern and responsive design.

Features:

Home Page: Displays a list of products fetched from an external API.

Product Details: Shows detailed information about a selected product.

Shopping Cart:
Add products to the cart.
Modify product quantities.
Remove products from the cart.
Display the total price dynamically.

Search: Filter products by name.

Routing: Navigate seamlessly between the Home, Product Details, and Cart pages.

Responsive Design: Optimized for desktop and mobile devices.

Technologies Used:
React: Component-based user interface library.
Redux Toolkit: State management for the shopping cart.
React Router: Navigation and routing.
CSS: Custom styles for a responsive and modern design.
Vite: Development server and build tool.
DummyJSON API: Product data source.

Installation Instructions:
Follow these steps to set up and run the project locally:

1. Clone the Repository

git clone https://github.com/sarita-saraswat/shoppyglobe.git
cd shoppyglobe

2. Install Dependencies
Make sure you have Node.js and npm installed. Then, run:

npm install

3. Start the Development Server
Start the application using Vite's development server:

npm run dev

Open your browser and navigate to the URL displayed in the terminal, typically http://localhost:5173.

Usage:

View Products: Navigate to the home page to browse the list of products.
Search Products: Use the search bar to find specific products.
View Details: Click on a product to view its detailed information.
Add to Cart: Click the "Add to Cart" button on a product.
Modify Cart: In the cart, adjust quantities or remove items.
Responsive Design: Open the application on mobile or desktop to experience the responsive layout.

API Reference
This project uses the DummyJSON API to fetch product data:

Get All Products: https://dummyjson.com/products
Get Product by ID: https://dummyjson.com/products/{id}


Acknowledgements:

React
Redux Toolkit
React Router
DummyJSON

Future Enhancements
Implement user authentication for personalized features.
Add a checkout and payment integration.
Enable product categories for easier navigation.
Integrate a backend for persistent data.
