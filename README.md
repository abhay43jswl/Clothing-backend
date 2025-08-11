# Clothing-backend
A Node.js + Express.js backend API for the Clothing E-commerce project.   Handles user authentication (JWT), product management, and data storage with MongoDB.   This backend is designed to work with the [Clothing Frontend](https://github.com/&lt;your-username>/clothing-frontend).



**Features**

 **User Authentication** – Register, login, password hashing with bcrypt.
- **JWT Authorization** – Secure routes for logged-in users only.
- **Product Management** – Fetch product list (can be expanded to add, edit, delete products).
- **MongoDB Integration** – Stores user and product data.
- **Environment Variables** – `.env` file for DB connection string, JWT secret, etc.

- ## 🛠 Tech Stack
- **Node.js** – JavaScript runtime.
- **Express.js** – Web application framework.
- **MongoDB** – NoSQL database.
- **Mongoose** – MongoDB object modeling.
- **JWT** – Authentication tokens.
- **bcrypt** – Password hashing.

## 📦 Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/clothing-backend.git

   **Navigate to the project folder:**

   cd clothing-backend

   ****Install dependencies:****

   npm install

  ** Create a .env file in the root folder with:**

  MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000

**Start the server:**

npm start

**API will run at**:

http://localhost:3000





   
