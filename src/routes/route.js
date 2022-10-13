import express from 'express';
const router = express.Router();
import { createUser, login, gateUser, updateUser } from '../controllers/userController.js';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controllers/productController.js';
import { createCart, updateCart, getCart, deleteCart } from '../controllers/cartController.js';
import { createOrder, updateOrder } from '../controllers/orderController.js';
import auth from '../middleware/auth.js';


//--------------FEATURE I - User---------------->
router.post('/register', createUser);  //aj
router.post('/login', login);          //sa
router.post('/user/:userId/profile', auth, gateUser);  //sb
router.put('/user/:userId/profile', auth, updateUser);  

//-------------FEATURE II - Product--------------->
router.post('/products', createProduct);   //aj
router.get('/products', getProducts);      //sb
router.get('/products', getProductById);   //aj
router.put('/products/:productId', updateProduct);      //sa
router.delete('/products/:productId', deleteProduct)    //sa

//------------FEATURE III - cart--------------->
router.post('/users/:userId/cart', createCart); //aj
router.put('/users/:userId/cart', updateCart);  //sb
router.get('/users/:userId/cart', getCart);          //sa
router.delete('/users/:userId/cart', deleteCart);    //sa

//-------------FEATURE IV - Order--------------->
router.post('/users/:userId/orders', createOrder); //b
router.put('/users/:userId/orders', updateOrder);  //b


export default router;