import express from "express";

import UserController from "../controllers/UserController";
import {
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  getAllCustomers,
} from "../controllers/CustomerController";
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} from "../controllers/ProductController";
import { createOrder } from "../controllers/OrderController";
import { getOrderDetail } from "../controllers/OrderDetailController";

const router = express.Router();

// auth routes
router.post("/user/signup", UserController.Register);
router.post("/user/login", UserController.UserLogin);
router.post("/user/logout", UserController.userLogout);

// Customer routes
router.post("/customers", createCustomer);
router.get("/customers", getAllCustomers);
router.get("/customers/:id", getCustomerById);
router.put("/customers/:id", updateCustomer);
router.delete("/customers/:id", deleteCustomer);

// Product routes
router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

// Order routes
router.post("/orders", createOrder);
router.get("/orders/:id", getOrderDetail);

export default router;
