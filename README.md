1. Kitchen Corner is a functional e-commerce platform tailored for a restaurant. The project consists of a frontend and backend setup, where the frontend is developed using React, and the backend is built with Node.js and Express. The frontend employs React Router and Context API for navigation and state management, enabling functionalities like product display, cart management, and checkout. The backend serves as an API, providing product data to the frontend.
2. Objectives:
  •	Develop a functional e-commerce platform for a restaurant.
  •	Allow users to browse food items, view their details, add items to a cart, and proceed with checkout.
  •	Implement a backend API to supply product information dynamically to the frontend.
3. File and Folder Structure:
Frontend (React)
•	restaurant-ecommerce/
  o	src/
    	components/
    	Home.js
    	ProductDetails.js
    	Cart.js
    	CartContext.js
  	App.js
  	index.js
  	products.json
Backend (Node.js with Express)
•	backend /
  o	index.js
  o	products.json
5. Installation and Running the Project
Step 1: Install concurrently
Navigate to the rest_app folder and run the following command:
npm install concurrently --save-dev
Step 2: Install Font Awesome Packages
Navigate to the restaurant-ecommerce folder and run the following command:
npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
Step 3: Install React Router DOM
In the restaurant-ecommerce folder, run:
npm install react-router-dom@6
Step 4: Setup MongoDB Database:
Create a MongoDB Database:
Create a database in your MongoDB instance. You can name it something like kitchen_corner_db.
Create a Collection:
Inside your newly created database, create a collection named products.
Insert Product Details:
Insert product details into the products collection in the following format:
json
{
    "id": "1",
    "name": "Spaghetti Carbonara",
    "description": "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    "price": 12.99,
    "image": "url_to_image"
}
Copy the Connection URL: copy the connection url and paste it in the designated section in the index.js file
Step 5: Running the Project:
To run the project, use the following commands:
	Navigate to the backend folder and start the backend server
node index.js
npm start
  In another terminal, navigate to the restaurant-ecommerce folder and start the React development server:
npm start
6. Detailed File Explanations:
App.js:
Using React Router for navigation management, this React code creates a basic restaurant website named Kitchen Corner. It defines routes for the homepage, product details page, and shopping cart. The application is encapsulated in the <CartProvider>, which provides cart functionality through context.
Home.js:
The Home component retrieves products from a local server once the component is mounted via useEffect and stores them in the state. Each product is rendered with its image, name, description, and price. An "Add to Cart" button allows users to add items to the cart context.
ProductDetails.js:
The ProductDetails component uses React hooks (useState and useEffect) to manage state and side effects. It retrieves the productId from the URL parameters using useParams and fetches product details from the server. Users can add the product to the cart.
Cart.js:
The Cart component uses React's context API (useContext) to retrieve the cart state and dispatch functions from CartContext. It facilitates cart item management, including adding, removing, and updating quantities, and displays the total cost of items.
CartContext.js:
This code creates a CartContext in React, acting as a central repository for all cart-related information and functions. It includes a reducer function to manage different cart activities, such as adding or removing products and altering their quantities.
index.js (Backend)
This Express server sets up routes to handle product-related requests. It enables CORS and parses JSON data. The routes include /products to retrieve all available products and /products/:id to fetch a product based on its unique identifier.
package.json (Frontend)
Defined scripts automate essential development processes:
•	start: initializes the React development server.
•	build: compiles the React application for production use.
•	test: executes the test suite designed for the React app.
•	start:backend: triggers the launch of the backend server situated in the ../backend directory.
•	dev: concurrently starts both the React development server and the backend server.
package.json (Backend)
This configuration specifies a Node.js backend application:
•	start: initiates the server via node index.js.
•	test: echoes an error message if no tests are defined.
•	Dependencies include express and cors to manage HTTP requests and enable CORS functionality.
7. Running the Application
Here are the outputs you should expect from running the application:
1.	Home Page: Displays a list of products available for purchase.
2.	Product Details Page: Shows detailed information about a specific product.
3.	Cart Page: Displays items added to the cart with the ability to update quantities and proceed to checkout.
