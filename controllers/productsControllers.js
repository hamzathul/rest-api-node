const crypto = require('crypto')

const products = [
    {
        "id": "2d64151e-fae8-4b55-91b5-03ce8cb6b09v",
        "name": "Laptop",
        "price": 400,
        "quantity": 4,
        "active": true
    },
    {
        "id": "2d64151e-fae8-4b55-91b5-03ce8cb6b09a",
        "name": "Keyboard",
        "price": 29,
        "quantity": 10,
        "active": true
    },
    {
        "id": "2d64151e-fae8-4b55-91b5-03ce8cb6b09b",
        "name": "computer",
        "price": 700,
        "quantity": 1,
        "active": true
    }
]

exports.getAllProducts = (req, res)=>{
    res.status(200).json(products)
}


exports.createProduct = (req, res)=>{
    const {name, price, quantity, active} = req.body
    if(!quantity){
        return res.status(422).json({message:"quantity is required"})
    }

    const id =  crypto.randomUUID()

    products.push({
        id,
        name,
        price,
        quantity,
        active
    })
    res.status(201).json({message:'product created successfully',id})
}

exports.getProductById = (req, res)=>{
    const product = products.find(product=>product.id == req.params.id) 
    if(!product){
        return res.status(404).json({message:"product not found"})
    }
    res.status(200).json(product)
    res.send('OK')
    
}

exports.updateProduct = (req, res)=>{
    const product = products.find(product=>product.id == req.params.id) 
    if(!product){
        return res.status(404).json({message:"product not found"})
    }
    const {name, price, quantity, active} = req.body

    if(name){
        product.name = name
    }
    if(price){
        product.price = price
    }
    if(quantity){
        product.quantity = quantity
    }
    if('active' in req.body){
        product.active = active
    }
    res.status(200).json({message:"product updated successfully"})
}

exports.deleteProduct = (req, res)=>{
    const productIndex = products.findIndex(product=>product.id == req.params.id)

    if(productIndex == -1){
        return res.status(404).json({message:"product not found"})
    }

    products.splice(productIndex, 1)
    res.status(200).json({message:"Product deleted successfully"})

    console.log(productIndex)
    res.send('OK')
}

