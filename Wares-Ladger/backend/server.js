

// --- Step 1: Import the tools we need ---
const express = require("express"); 
const cors = require("cors");       // lets the React app (different port) talk to us

const app = express();
const PORT = 5001;

// This lets our server understand JSON sent from the frontend
app.use(express.json());

// This lets the React app (running on a different port) send requests here
app.use(cors());

// --- Step 2: Our "database" ---
// This is just an array of objects living in memory.
// Every product has: id, name, category, price, stock, color, rating
let products = [
  { id: 1, name: "Enamel Camp Mug", category: "Kitchen", price: 18, stock: 42, color: "#2B6E68", rating: 4 },
  { id: 2, name: "Waxed Canvas Tool Roll", category: "Workshop", price: 64, stock: 15, color: "#8A5A34", rating: 5 },
  { id: 3, name: "Brass Pocket Compass", category: "Outdoors", price: 32, stock: 27, color: "#B8860B", rating: 4 },
  { id: 4, name: "Cast Iron Skillet", category: "Kitchen", price: 45, stock: 33, color: "#3A3A3A", rating: 5 },
  { id: 5, name: "Wool Felt Coasters", category: "Home", price: 22, stock: 61, color: "#7A4B8A", rating: 3 }
];

// We use this number to give every NEW product a unique id.
// Every time we add a product, we increase it by 1.
let nextId = 6;

// --- Step 3: The 5 CRUD routes ---

// (R)EAD — get the full list of products
// Try it in your browser: http://localhost:5000/products
app.get("/products", (req, res) => {
  res.json(products)
});

// (R)EAD — get ONE product by its id
// Example: http://localhost:5000/products/2
app.get("/products/:id", (req, res) => {
  
  
});

// (C)REATE — add a brand new product
// The frontend sends the new product's details in the request body
app.post("/products", (req, res) => {
 const { name, category, price, stock, color, rating } = req.body;

  // Very basic validation — just check the important fields are there
  if (!name || !category || price === undefined) {
    return res.status(400).json({ error: "name, category, and price are required" });
  }
  const newProduct = {
    id: nextId,
    name: name,
    category: category,
    price: Number(price),
    stock: stock ? Number(stock) : 0,
    color: color || "#2B6E68", // default color if none was picked
    rating: rating ? Number(rating) : 3 // default rating if none was picked
  };

  nextId = nextId + 1;         // get ready for the next product
  products.push(newProduct);   // add it to our "database" array

  // 201 means "created successfully"
  res.status(201).json(newProduct);
});

// (U)PDATE — change an existing product
app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  // Only update the fields that were actually sent
  const { name, category, price, stock, color, rating } = req.body;
  if (name !== undefined) product.name = name;
  if (category !== undefined) product.category = category;
  if (price !== undefined) product.price = Number(price);
  if (stock !== undefined) product.stock = Number(stock);
  if (color !== undefined) product.color = color;
  if (rating !== undefined) product.rating = Number(rating);

  res.json(product);
});

// (D)ELETE — remove a product
app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  products.splice(index, 1); // remove 1 item at that position
  res.status(204).send();    // 204 means "success, nothing to send back"
});

// --- Step 4: Start the server ---
app.listen(PORT, () => {
  console.log(`Server is running! Open http://localhost:${PORT}/products in your browser.`);
});
