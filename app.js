const express = require('express');


const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Cart = require('./models/Cart');
const CartItem = require('./models/CartItem');
const OrderItem = require('./models/OrderItem');

const app = express();

app.set('view engine', 'ejs');
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());







