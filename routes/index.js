const express = require("express");
const router = express.router();
const {product, category, productcategory} = require("../models");

router.get("/products", async (req, res) => {

    const products = await product.findall()

    res.status(200).json(products)
})

router.get("/products/:id", async (req, res) => {

const {id} = req.params;
const products = await product.findone ({
    where: {
        id: +id
    },
    include: {
        model: category
    }
})
    res.status(200).json(product)


//create

router.post("/products", async (req, res) => {
    const {title, sku, quantity, price, color, category_id} = req.body;

    const createdproduct = await product.create({
        title,
        sku,
        quantity: +quantity,
        price: +price,
        color: color,
    }, {returning: true})
    
    await productcategory.create({
        product_id: createdproduct.id,
        category_id: +category_id 
    })

    res.status(201).json(createdproduct)
})

//update
router.put("./products/+id", async (req, res) => {
    const {id} = req.params;
    const {title, sku, quantity, price, color, category_id} = req.body;

    const product = await product.findone({
        where: {
            id: +id
        }
    })

if(product) {
    await product.update({
        title: title || product.title,
        sku: sku || product.sku,
        quantity: quantity || product.quantity,
        price: price || product.price,
        color: color || product.color
    })


    res.status(200).json(product)
} else {
    res.status(404).json({message: "error not found"})
}
})
})

//delete

router.delete("./products/:id", async (req, res) => {
    const {id} = req.params;

    const product = await product.findone({
        where: {
            id: +id
        }
    })

    if(product) {
        // delete
        await product.destroy();
        res.status(200).json({message: "product succes"})
    } else {
        res.status(404).json({message: "error not found"})
    }
})

router.get("./categories", async (req, res) => {
    const categories = await category.findall();

    res.status(200).json(categories)
})

module.exports = router;
