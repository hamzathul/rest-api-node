const router = require('express').Router()
const productController = require('../controllers/productsControllers')

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.post('/', productController.createProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router