'use strict'

const express = require('express')
const api = express.Router()
const productCtrl = require('../controllers/product')

api.get('/products', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.createProduct)
api.put('/product/:productId', productCtrl.updateProducts)
api.delete('/product/:productId', productCtrl.deleteProduct)

module.exports = api 